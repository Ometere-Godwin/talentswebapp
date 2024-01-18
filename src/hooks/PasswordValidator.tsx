import { useEffect, useState } from "react";

const IsPasswordStrong = (password: string) => {
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string[]>([]);

  useEffect(() => {
    const checkPassword = () => {
        if (password && password.length > 0) {
          const hasMinimumLength = password.length >= 7;
          const hasLowerCase = /[a-z]/.test(password);
          const hasUpperCase = /[A-Z]/.test(password);
          const hasDigit = /\d/.test(password);
          const hasSpecialCharacter = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password);
      
          if (
            hasMinimumLength &&
            hasLowerCase &&
            hasUpperCase &&
            hasDigit &&
            hasSpecialCharacter
          ) {
            setIsPasswordValid(true);
            setErrorMessage([]);
          } else {
            setIsPasswordValid(false);
            const errorMessages = [];
            if (!hasMinimumLength) {
              errorMessages.push("Password must be at least 7 characters long.");
            }
            if (!hasLowerCase) {
              errorMessages.push("Password must contain at least one lowercase letter.");
            }
            if (!hasUpperCase) {
              errorMessages.push("Password must contain at least one uppercase letter.");
            }
            if (!hasDigit) {
              errorMessages.push("Password must contain at least one digit.");
            }
            if (!hasSpecialCharacter) {
              errorMessages.push("Password must contain at least one special character.");
            }
      
            setErrorMessage(errorMessages);
          }
        } else {
          setIsPasswordValid(false);
          setErrorMessage(["Password cannot be empty."]);
        }
      };
      

    checkPassword();
  }, [password]);

  return {isPasswordValid: isPasswordValid, errorMessages: errorMessage};
};

export default IsPasswordStrong;
