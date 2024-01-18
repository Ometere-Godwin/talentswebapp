import { MouseEvent } from 'react';
import { useState } from "react";
import styles from '../../styles/Auth.module.css';
import SvgComponent from "../../components/SVGShape";
import BaseButton from "../../components/BaseButton";
import { Link } from "react-router-dom";
import networkInstance from '../../utils/network';
import { useAppDispatch } from '../../hooks/storeHook';
import { setAlert } from '../../store/reducers/mainReducer';

function ForgotPassword() {
  const dispatch = useAppDispatch();
  const steps = ["email", "success"];
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [email, setEmail] = useState<string>("");

  const emailValidator = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  const isEmailValid = (arg:string) => {
    if (arg.trim().length !== 0) {
      return emailValidator();
    }
    return true;
  }
  
  const isButtonDisabled = () => {
    return email.trim().length === 0 || !emailValidator() || loading;
  };

  const openMail = () => {
      
        const mailtoLink = `mailto:${email}`;
        // Open the default email client
        window.location.href = mailtoLink;

  }

  const initiateForgotPassword = async () => {
      try {
        const payload = {
          email,
        };
        let { status } = await networkInstance.post(
          "/auth/forgot-password",
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
  }
  
  const handleFormButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (currentStep === steps[0]) {
        initiateForgotPassword()
      } else if (currentStep === steps[1]) {
        openMail()
      }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
  };

  const computedSupportText = () => {
    if (currentStep === steps[0]) {
        return `Enter your user account's verified email address, We will send you reset instructions.`
      } 
        return `We sent a password reset link to ${email}`;
  }
  

  return (
    <div className="md:mx-auto ml-2 w-full pr-8 md:pr-2 md:w-1/2">
      <h6 className={styles.formTitle}>{currentStep === steps[0] ? 'Forgot Password?' : 'Check your email'}</h6>
      <p className={styles.formSupportText}>
      {computedSupportText()}
            </p>
      <form>
        {currentStep === steps[0] && <div className="relative">
        <label className={styles.formLabel} htmlFor="email">
        Email Address <span className="text-red-500">*</span>
        </label>
        <input
            type="email"
            required
            id="email"
            name="email"
            value={email}
            className={`${styles.formInput} ${!isEmailValid(email) ? styles.inputFieldInvalid : ''}`}
            onChange={(e) => handleInputChange(e)}
            placeholder="Name@business.com"
          />
         { !isEmailValid(email) && <p className={styles.errorText  + " text-center mb-4"}> The email address provided is incorrect </p>}
           { emailValidator() && <div className="cursor-pointer transition-all absolute right-0 bottom-7">
         <SvgComponent icon={'blue-check'} />
         </div>}
         { !isEmailValid(email) && <div className="cursor-pointer transition-all absolute right-0 bottom-9">
         <SvgComponent icon={'caution'} />
         </div>}
        </div>
       }
        <BaseButton
          disabled={isButtonDisabled()}
          size='wide'
          text={currentStep === steps[0] ? "Send password reset email" : "Open email app"}
          handleEngagement={(e) => handleFormButtonClick(e)}
        />
         <p className={styles.formSupportText2 + " pt-6 text-center"}>
         Didn't receive the email? 
            <span className="cursor-pointer pl-1">Click to resend</span>
          </p>
          <Link to={'/auth/login'} className="mt-4 flex justify-center items-baseline gap-2 cursor-pointer">
              <span>
                <SvgComponent icon={"arrow-left"} />
              </span>
              <p className={styles.formSupportText2 + " text-center"}>Back to Login</p>
            </Link>
      </form>
     
    </div>
  );
}

export default ForgotPassword;
