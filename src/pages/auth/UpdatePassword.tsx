import { MouseEvent, useEffect } from "react";
import { useState } from "react";
import styles from "../../styles/Auth.module.css";
import SvgComponent from "../../components/SVGShape";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import BaseButton from "../../components/BaseButton";
import networkInstance from "../../utils/network";
import useQuery from "../../hooks/UseQuery";
import { setAlert } from "../../store/reducers/mainReducer";
import { useAppDispatch } from "../../hooks/storeHook";
import IsPasswordStrong from "../../hooks/PasswordValidator";

function UpdatePassword() {
  const { value, clearQueryParameter } = useQuery("token");
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useAppDispatch();

  const steps = ["password", "success"];
  const [loading, setLoading] = useState(false);
  const [userToken, setUserToken] = useState<string | URLSearchParams | null>(
    ""
  );
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState<string>("");
  const [showPassword1, setShowPassword1] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  const { isPasswordValid, errorMessages } = IsPasswordStrong(password);
  const {
    isPasswordValid: isConfirmPasswordValid,
    errorMessages: errorConfirmPasswordMessages,
  } = IsPasswordStrong(passwordConfirm);

  const bothPasswordsMatch = () => {
    if (password === passwordConfirm) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (!value) {
      navigate("/auth/login");
    } else {
      setUserToken(value);
      clearQueryParameter();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isButtonDisabled = () => {
    if (isPasswordValid && isConfirmPasswordValid && bothPasswordsMatch()) {
      if (loading) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  };

  const handleFormButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (currentStep === steps[0]) {
      initiateUpdatePassword();
    } else if (currentStep === steps[1]) {
      navigate("/auth/login");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "password") {
      setPassword(e.target.value);
    } else if (e.target.id === "passwordConfirm") {
      setPasswordConfirm(e.target.value);
    }
  };

  const computedSupportText = () => {
    if (currentStep === steps[0]) {
      return `Your new password must be different from previously used passwords.`;
    }
    return `Your password have been changed successfully. Please log in to your talentnest account.`;
  };

  const initiateUpdatePassword = async () => {
    try {
      const payload = {
        token: userToken,
        password,
      };
      let { status } = await networkInstance.post(
        "/auth/reset-password",
        payload
      );
      if (status === 201) {
        setLoading(false);
        setCurrentStep(steps[1]);
      }
    } catch (err: any) {
      const { data } = err.response;
      dispatch(
        setAlert({
          type: "warning",
          messageTitle: "Sorry! 🫠",
          messageBody: data?.message || "Something went wrong",
        })
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:mx-auto ml-2 w-full pr-8 md:pr-2 md:w-1/2">
      <h6 className={styles.formTitle}>
        {currentStep === steps[0]
          ? "Create New Password"
          : "Password Changed Sucessfully"}
      </h6>
      <p className={styles.formSupportText}>{computedSupportText()}</p>
      <form>
        {currentStep === steps[0] && (
          <>
            <div className="relative">
              <label htmlFor="password" className={styles.formLabel}>
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                required
                name="password"
                value={password}
                className={styles.formInput}
                onChange={(e) => handleInputChange(e)}
                placeholder=""
              />
              {password &&
                errorMessages.map((el) => {
                  return (
                    <div key={el}>
                      <p
                        className={
                          styles.errorText +
                          "  transition transition-all duration-900 ease-in pb-3"
                        }
                      >
                        - {el}
                      </p>
                    </div>
                  );
                })}
              {!isPasswordValid && (
                <div className="cursor-pointer transition-all absolute right-6 top-9">
                  <SvgComponent icon={"caution"} />
                </div>
              )}
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer transition-all absolute right-0 top-10"
              >
                <SvgComponent
                  icon={!showPassword ? "eye-icon" : "eye-icon-hidden"}
                />
              </div>
            </div>
            <div className="relative">
              <label htmlFor="password" className={styles.formLabel}>
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                type={showPassword1 ? "text" : "password"}
                id="passwordConfirm"
                required
                name="passwordConfirm"
                value={passwordConfirm}
                className={styles.formInput + " relative"}
                onChange={(e) => handleInputChange(e)}
                placeholder=""
              />
              {passwordConfirm &&
                errorConfirmPasswordMessages.map((el) => {
                  return (
                    <div key={el}>
                      <p className={styles.errorText + " pb-3"}>- {el}</p>
                    </div>
                  );
                })}
              {!bothPasswordsMatch() && (
                <p className={styles.errorText + "  mb-4"}>
                  - Both Passwords need to match
                </p>
              )}
              {!isConfirmPasswordValid && (
                <div className="cursor-pointer transition-all absolute right-6 top-10">
                  <SvgComponent icon={"caution"} />
                </div>
              )}
              <div
                onClick={() => setShowPassword1(!showPassword1)}
                className={`cursor-pointer transition-all absolute right-0 top-11`}
              >
                <SvgComponent
                  icon={!showPassword1 ? "eye-icon" : "eye-icon-hidden"}
                />
              </div>
            </div>
          </>
        )}
        <BaseButton
          size="wide"
          disabled={isButtonDisabled()}
          text={currentStep === steps[0] ? "Change password" : "Back to Login"}
          handleEngagement={(e) => handleFormButtonClick(e)}
        />
        {currentStep === steps[0] && (
          <Link
            to={"/auth/login"}
            className="mt-4 flex justify-center items-baseline gap-2 cursor-pointer"
          >
            <span>
              <SvgComponent icon={"arrow-left"} />
            </span>
            <p className={styles.formSupportText2 + " text-center"}>
              Back to Login
            </p>
          </Link>
        )}
      </form>
    </div>
  );
}

export default UpdatePassword;
