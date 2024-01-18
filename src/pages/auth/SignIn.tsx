import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import styles from "../../styles/Auth.module.css";
import SvgComponent from "../../components/SVGShape";
import BaseButton from "../../components/BaseButton";
import networkInstance from "../../utils/network";
import { useAppDispatch } from "../../hooks/storeHook";
import { setAlert, updateTokenStatus } from "../../store/reducers/mainReducer";
import { NavigateFunction, useNavigate } from "react-router-dom";
import BaseText from "../../components/BaseText";
import IsPasswordStrong from "../../hooks/PasswordValidator";

function Login() {
  const dispatch = useAppDispatch();
  const navigate: NavigateFunction = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState<string>("");

  const { isPasswordValid, errorMessages } = IsPasswordStrong(password);


  const signInFlow = useGoogleLogin({
    onSuccess: (codeResponse) => handleGoogleSignIn(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const emailValidator = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  const isEmailValid = (arg: string) => {
    if (arg.trim().length !== 0) {
      return emailValidator();
    }
    return true;
  };

  const isButtonDisabled = () => {
    return email.trim().length === 0 || !emailValidator() || loading || !isPasswordValid;
  };

  const handleGoogleSignIn = async (token: Omit<
    TokenResponse,
    "error" | "error_description" | "error_uri"
  >) => {
    setLoading(true)
    try {
      const payload = {
        token: token.access_token
      }
      let { status, data } = await networkInstance.post("/auth/google-auth", payload);
      let { access_token } = data;
      if (status === 201) {
        dispatch(
          setAlert({
            type: "success",
            messageTitle: "Success! 😀",
            messageBody: "",
          })
        );
        setTimeout(() => {
          dispatch(updateTokenStatus(access_token));
          navigate("/dashboard");
        }, 3000);
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
  }

  const handleFormButtonClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    setLoading(true)
    try {
      const payload = {
        email,
        password,
      };
      let { status, data } = await networkInstance.post("/auth/login", payload);

      let { access_token } = data;
      if (status === 201) {
        dispatch(
          setAlert({
            type: "success",
            messageTitle: "Success! 😀",
            messageBody: "",
          })
        );
        setTimeout(() => {
          dispatch(updateTokenStatus(access_token));
          navigate("/dashboard");
        }, 3000);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "password") {
      setPassword(e.target.value);
    } else {
      setEmail(e.target.value);
    }
  };

  return (
    <div className="md:mx-auto ml-2 w-full pr-8 md:pr-2 md:w-1/2">
      <h6 className={styles.formTitle}>Login To Account</h6>
      <p className={styles.formSupportText}>
        Gain hands-on work experience, build a portfolio, and accelerate your
        career growth.
      </p>
      <BaseButton
            size="wide"
            disabled={loading}
            taller
            mode="outline-dark"
            handleEngagement={() => signInFlow()}
          >
            <div className="flex text-center justify-center gap-2">
              <SvgComponent icon={"google-icon"} />
              <BaseText weight="semibold">Continue with Google</BaseText>
            </div>
          </BaseButton>
      <div className="my-6">
        <p className={styles.lineThroughText + " mx-auto"}>
          <span>OR</span>
        </p>
      </div>
      <form>
        <div className="relative">
          <label className={styles.formLabel} htmlFor="email">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            id="email"
            name="email"
            value={email}
            className={`${styles.formInput} ${
              !isEmailValid(email) ? styles.inputFieldInvalid : ""
            }`}
            onChange={(e) => handleInputChange(e)}
            placeholder="Name@business.com"
          />
          {!isEmailValid(email) && (
            <p className={styles.errorText + " text-center mb-4"}>
              The email address provided is incorrect
            </p>
          )}
          {emailValidator() && (
            <div className="cursor-pointer transition-all absolute right-0 bottom-7">
              <SvgComponent icon={"blue-check"} />
            </div>
          )}
          {!isEmailValid(email) && (
            <div className="cursor-pointer transition-all absolute right-0 bottom-9">
              <SvgComponent icon={"caution"} />
            </div>
          )}
        </div>
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
        <div className="mb-4 ml-2 flex justify-end ">
          <a
            className={styles.formSubTextubTextBlue}
            href="/auth/forgot-password"
          >
            Forgot Password
          </a>
        </div>
        <BaseButton
          size="wide"
          disabled={isButtonDisabled()}
          text="Login"
          handleEngagement={(e) => handleFormButtonClick(e)}
        />
      </form>
    </div>
  );
}

export default Login;
