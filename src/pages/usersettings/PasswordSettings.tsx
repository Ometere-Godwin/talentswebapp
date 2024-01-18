import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import formStyles from "../../styles/Auth.module.css";
import BaseButton from "../../components/BaseButton";
import BaseText from "../../components/BaseText";

const PasswordSettings: React.FC = () => {

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-])/;

    const passwordErrorMessage = "Must include at least one lowercase letter, at least one uppercase letter, at least one digit and at least one special character"


  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
        oldPassword: Yup.string()
        .matches(passwordRegex, passwordErrorMessage)
        .required("Please provide your old password").min(7, "Password must be at least 7 characters"),
        newPassword: Yup.string()
        .matches(passwordRegex, passwordErrorMessage)
        .required("Please provide your new password").min(7, "Password must be at least 7 characters"),
        confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword")], "Password must match previous field")
        .required("Password confirmation is required").min(7, "Password must be at least 7 characters"),
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <div>
      <form className="pr-8 border-b-2 border-gray-100" onSubmit={formik.handleSubmit}>
        <div className="relative">
          <label className={formStyles.formLabel} htmlFor="oldPassword">
            Old Password
          </label>
          <br />
          <input
            type="password"
            id="oldPassword"
            name="oldPassword"
            value={formik.values.oldPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${formStyles.formInput} ${
              formik.touched.oldPassword && formik.errors.oldPassword
                ? formStyles.inputFieldInvalid
                : ""
            }`}
            placeholder="Name@business.com"
          />
          {formik.touched.oldPassword && formik.errors.oldPassword && (
            <p className={`${formStyles.errorText} mb-4`}>
              {formik.errors.oldPassword}
            </p>
          )}
        </div>
        <div className="relative">
          <label className={formStyles.formLabel} htmlFor="newPassword">
            New Password
          </label>
          <br />
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${formStyles.formInput} ${
              formik.touched.newPassword && formik.errors.newPassword
                ? formStyles.inputFieldInvalid
                : ""
            }`}
            placeholder="Name@business.com"
          />

          {formik.touched.newPassword && formik.errors.newPassword && (
            <p className={`${formStyles.errorText} mb-4`}>
              {formik.errors.newPassword}
            </p>
          )}
        </div>
            
        <div className="relative">
          <label className={formStyles.formLabel} htmlFor="confirmPassword">
          Confirm New Password
          </label>
          <br />
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${formStyles.formInput} ${
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? formStyles.inputFieldInvalid
                : ""
            }`}
            placeholder="Name@business.com"
          />

          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className={`${formStyles.errorText} mb-4`}>
              {formik.errors.confirmPassword}
            </p>
          )}
        </div>

      

        <div className="flex gap-2 items-center justify-end h-fit py-16">
          <BaseButton
              handleEngagement={(e) => void(e)}
            >
              <BaseText weight="semibold" size="small">
              Change Password
              </BaseText>
            </BaseButton>
          </div> 
      </form>

    </div>
  );
};

export default PasswordSettings;
