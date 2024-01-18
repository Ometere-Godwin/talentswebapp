import { TokenResponse, useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import styles from "../../styles/Auth.module.css";
import SvgComponent from "../../components/SVGShape";
import { Link, useNavigate } from "react-router-dom";
import BaseButton from "../../components/BaseButton";
import networkInstance from "../../utils/network";
import { useAppDispatch } from "../../hooks/storeHook";
import { setAlert, updateTokenStatus } from "../../store/reducers/mainReducer";
import BaseText from "../../components/BaseText";
import { googleAuthPayload, userAuthPayload } from "../../interfaces";
import IsPasswordStrong from "../../hooks/PasswordValidator";

function SignUp() {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();

  const signUpFlow = useGoogleLogin({
    onSuccess: (codeResponse) => handleGoogleSignUpSuccess(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const steps = ["email", "password", "created"];
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState<string>("");
  const [showPassword1, setShowPassword1] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  const { isPasswordValid, errorMessages } = IsPasswordStrong(password);
  const {
    isPasswordValid: isConfirmPasswordValid,
    errorMessages: errorConfirmPasswordMessages,
  } = IsPasswordStrong(passwordConfirm);

  const emailValidator = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  const emailOrPasswordStep = () =>
    currentStep === "email" || currentStep === "password";

  const isEmailValid = (arg: string) => {
    if (arg.trim().length !== 0) {
      return emailValidator();
    }
    return true;
  };

  const bothPasswordsMatch = () => {
    if (password && passwordConfirm) {
      if (password === passwordConfirm) {
        return true;
      }
      return false;
    } else {
      return true;
    }
  };

  const isButtonDisabled = () => {
    if (currentStep === steps[1]) {
      return (
        email.trim().length === 0 ||
        !emailValidator() ||
        !bothPasswordsMatch() ||
        loading ||
        !isPasswordValid ||
        !isConfirmPasswordValid
      );
    }
    return (
      email.trim().length === 0 ||
      !emailValidator() ||
      !bothPasswordsMatch() ||
      loading
    );
  };

  const openMail = () => {
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
  };

  const handleFormButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (currentStep === steps[0]) {
      setCurrentStep(steps[1]);
    } else if (currentStep === steps[1]) {
      const payload = {
        email,
        password,
      };
      initiateAccountCreation(payload, false);
    } else if (currentStep === steps[2]) {
      openMail();
    } else {
      navigate("/auth/login");
    }
  };

  // const resendVerificationEmail = async () => {
  //   try {
  //     setLoading(true)
  //     const res = await networkInstance.post('/email-verification/resend-verification-link');
  //     console.log({ res });
  //     setLoading(false)
  //   } catch (e) {
  //     console.log({ e });
  //     setLoading(false)
  //   }
  // }

  const initiateAccountCreation = async (
    payload: userAuthPayload | googleAuthPayload,
    isGoogle: boolean
  ) => {
    try {
      setLoading(true);
      const urlPath = isGoogle ? "/auth/google-auth" : "/users/register";
      const { status, data } = await networkInstance.post(urlPath, payload);
      const { isEmailVerified } = data;

      setLoading(false);
      if (status === 201) {
        if (isGoogle) {
          dispatch(
            setAlert({
              type: "success",
              messageTitle: "Success! 😀",
              messageBody: `Account Successfully Created 🎉`,
            })
          );
        } else {
          if (isEmailVerified === true) {
            dispatch(
              setAlert({
                type: "info",
                messageTitle: "Success!",
                messageBody: `Email already verified, kindly login`,
              })
            );
            navigate("/auth/login");
          } else {
            setCurrentStep(steps[2]);
          }
        }

        setTimeout(() => {
          if (isGoogle) {
            dispatch(updateTokenStatus(data.access_token));
            navigate("/dashboard");
          }
        }, 3000);
      }
    } catch (err: any) {
      setLoading(false);
      const { data } = err.response;
      dispatch(
        setAlert({
          type: "warning",
          messageTitle: "Sorry! 🫠",
          messageBody: data?.message || "Something went wrong",
        })
      );
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "password") {
      setPassword(e.target.value);
    } else if (e.target.id === "passwordConfirm") {
      setPasswordConfirm(e.target.value);
    } else {
      setEmail(e.target.value);
    }
  };

  const computedSupportText = () => {
    if (currentStep === steps[0] || currentStep === steps[1]) {
      return "Gain hands-on work experience, build a portfolio, and accelerate your career growth";
    } else if (currentStep === steps[2]) {
      return `We sent a verification link to ${email}`;
    }
  };

  const computedMainText = () => {
    if (currentStep === steps[0] || currentStep === steps[1]) {
      return "Create An Account";
    } else if (currentStep === steps[2]) {
      return `Account Created Successfully`;
    }
  };

  const handleGoogleSignUpSuccess = async (
    tokenResponse: Omit<
      TokenResponse,
      "error" | "error_description" | "error_uri"
    >
  ) => {
    initiateAccountCreation(
      {
        token: tokenResponse.access_token,
      },
      true
    );
  };

  return (
    <div className="md:mx-auto md:w-1/2 w-full">
      <h6 className={styles.formTitle}>{computedMainText()}</h6>
      <p className={styles.formSupportText}>{computedSupportText()}</p>
      {!emailOrPasswordStep() && (
        <>
          <BaseButton
            disabled={loading}
            size="wide"
            text={currentStep === steps[2] ? "Open email app" : "Back to Login"}
            handleEngagement={(e) => handleFormButtonClick(e)}
          />
          {currentStep === steps[2] && (
            <Link
              to={"/auth/login"}
              className=" mt-4 flex justify-center items-baseline gap-2 cursor-pointer"
            >
              <span>
                <SvgComponent icon={"arrow-left"} />
              </span>
              <p className={styles.formSupportText2 + " text-center"}>
                Back to Login
              </p>
            </Link>
          )}
        </>
      )}
      {emailOrPasswordStep() && (
        <>
          <BaseButton
            size="wide"
            disabled={loading}
            taller
            mode="outline-dark"
            handleEngagement={() => signUpFlow()}
          >
            <div className="flex text-center justify-center gap-2">
              <SvgComponent icon={"google-icon"} />
              <BaseText weight="semibold">Continue with Google</BaseText>
            </div>
          </BaseButton>
          <div className="my-6">
            <p className={styles.lineThroughText + ""}>
              <span>OR</span>
            </p>
          </div>
        </>
      )}
      {emailOrPasswordStep() && (
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
          {currentStep !== "email" && (
            <div className="relative transition duration-200 ease-in">
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
          )}
          {currentStep !== "email" && (
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
                className={styles.formInput}
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
                <p className={styles.errorText + " mb-4"}>
                  - Both Passwords need to match
                </p>
              )}
              {!isConfirmPasswordValid && (
                <div className="cursor-pointer transition-all absolute right-6 top-9">
                  <SvgComponent icon={"caution"} />
                </div>
              )}
              <div
                onClick={() => setShowPassword1(!showPassword1)}
                className="cursor-pointer transition-all absolute right-0 top-10"
              >
                <SvgComponent
                  icon={!showPassword1 ? "eye-icon" : "eye-icon-hidden"}
                />
              </div>
            </div>
          )}
          <p className={styles.formSupportText2}>
            By creating an account, you agree to Talentnest's
            <span className="cursor-pointer"> Terms and Conditions</span>
          </p>
          <BaseButton
            size="wide"
            disabled={isButtonDisabled()}
            text={
              currentStep === "email" ? "Continue with email" : "Create account"
            }
            handleEngagement={(e) => handleFormButtonClick(e)}
          />
          <p
            className={
              styles.formSupportText2 + " lg:text-center mt-8 sm:text-start"
            }
          >
            Already have an account?
            <span className="cursor-pointer">
              <a href="/auth/login"> Log in</a>
            </span>
          </p>
        </form>
      )}
    </div>
  );
}

export default SignUp;
