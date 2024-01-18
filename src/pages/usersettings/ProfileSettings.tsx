import { ChangeEvent, useState } from "react";
import BaseButton from "../../components/BaseButton";
import BaseText from "../../components/BaseText";
import DisplayPicture from "../../components/DisplayPic";
import SvgComponent from "../../components/SVGShape";
import formStyles from "../../styles/Auth.module.css";
import CustomMultiselect from "../../components/Form/CustomMultiselect";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ProfileSettings() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  interface userDataProps {
    primaryRole: string,
    userPicture: null | File,
    skillsets: string[]
  }

  const [userData, setUserData] = useState<userDataProps>({
    primaryRole: "Engineer",
    userPicture: null,
    skillsets: []
  });

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, userPicture: null });
    const file = (event.target.files && event.target.files[0]) || null;
    setUserData({ ...userData, userPicture: file });
  };

  const handleRemoval = () => {
    if (userData.userPicture) {
      setUserData({ ...userData, userPicture: null });
    }
  };



  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      userEmail: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Please provide your first name")
        .min(3, "Name must be at least 3 characters"),
      lastName: Yup.string()
        .required("Please provide your last name")
        .min(3, "Name must be at least 3 characters"),
      userEmail: Yup.string()
        .required("Email field is required")
        .matches(emailRegex, "Please provide a valid email address")
        .min(7, "Password must be at least 7 characters"),
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <div>
      <div className="flex items-center justify-between gap-8">
      <button className="flex justify-center gap-4 items-center relative h-12 w-6/12 rounded-2xl bg-[#0A66C2]">
      <SvgComponent icon='linkedIn-icon'/> 
      <BaseText weight="semibold" color="white">Continue with LinkedIn</BaseText>

  </button>
        <button className="bg-transparent hover:bg-blue-800 h-[45px] text-blue-800 font-semibold w-6/12 hover:text-white border border-blue-800 hover:border-transparent rounded-xl flex justify-center items-center">
          <BaseText weight="semibold">Import Resume</BaseText>
        </button>
      </div>
      <div className="my-8 flex justify-start items-end">
        <DisplayPicture
          altText="pROFLE DP"
          size="lg"
          showBorder
          imageSource={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS1j8CjCgfSb4EUs32VXrFwuxagu6v3Pk7hA&usqp=CAU"
          }
        />
        <div className="flex justify-start items-start gap-2 pb-4">
          <SvgComponent icon="pencil" />
          <label>
                      <div
                        className="flex items-end gap-2 "
                        onClick={() => handleRemoval()}
                      >
                        <BaseText
                          size="small"
                          weight="medium"
                          color="blue"
                          extraClasses="w-full offset-4 cursor-pointer underline"
                        >
                          {userData.userPicture
                            ? "Remove Image"
                            : "upload a picture"}
                        </BaseText>
                        {!userData.userPicture && (
                          <input
                            type="file"
                            onChange={handleFileChange}
                            accept=".jpg, .png, .jpeg"
                            style={{ visibility: "hidden" }}
                          />
                        )}
                      </div>
                    </label>
          {/* <BaseText
            size="small"
            weight="medium"
            color="blue"
            extraClasses="w-full cursor-pointer underline"
          >
            Change image
          </BaseText> */}
        </div>
      </div>
      <form onSubmit={formik.handleSubmit}>
      <div className="relative ">
          <div className="flex items-center justify-between">
            <div>
            <label className={formStyles.formLabel} htmlFor="firstName">
          First Name
          </label>
          <br />
            <input
            type="text"
            id="firstName"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${formStyles.formInput} ${
              formik.touched.firstName && formik.errors.firstName
                ? formStyles.inputFieldInvalid
                : ""
            }`}
            placeholder="Name@business.com"
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <p className={`${formStyles.errorText} mb-4`}>
              {formik.errors.firstName}
            </p>
          )}
            </div>
            <div>
            <label className={formStyles.formLabel} htmlFor="lastName">
         Last Name
          </label>
          <br />
            <input
            type="text"
            id="lastName"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${formStyles.formInput} ${
              formik.touched.lastName && formik.errors.lastName
                ? formStyles.inputFieldInvalid
                : ""
            }`}
            placeholder="Name@business.com"
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <p className={`${formStyles.errorText} mb-4`}>
              {formik.errors.lastName}
            </p>
          )}
            </div>
          </div>
        </div>
        <div className="relative">
          <label className={formStyles.formLabel} htmlFor="userEmail">
            Email
          </label>
          <br />
          <input
            type="text"
            id="userEmail"
            name="userEmail"
            value={formik.values.userEmail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${formStyles.formInput} ${
              formik.touched.userEmail && formik.errors.userEmail
                ? formStyles.inputFieldInvalid
                : ""
            }`}
            placeholder="Name@business.com"
          />

          {formik.touched.userEmail && formik.errors.userEmail && (
            <p className={`${formStyles.errorText} mb-4`}>
              {formik.errors.userEmail}
            </p>
          )}
        </div>
        <div className="relative mb-3">
          <label className={formStyles.formLabel} htmlFor="primaryRole">
            Role
          </label>
          <select
            required
            id="primaryRole"
            name="primaryRole"
            value={userData.primaryRole}
            onChange={(e) => void e}
            className={`${formStyles.formInput} pr-4`}
          >
            <option value="">Select</option>
            <option value="product-manager">Product manager </option>
            <option value="software-engineer"> Software Engineer</option>
            <option value="product-designer"> Product Designer</option>
          </select>
        </div>
        <div className="relative mb-3">
          <label className={formStyles.formLabel} htmlFor="areaOfInterests">
            What are your area of interests
            <span className="text-red-500">*</span>
          </label>
          <CustomMultiselect availableOptions={["Finance"]} />
        </div>
        <div className="flex gap-2 items-center justify-end h-fit py-16">
          <BaseButton
              handleEngagement={(e) => void(e)}
            >
              <BaseText weight="semibold" size="small">
              Save Changes
              </BaseText>
            </BaseButton>
          </div> 
      </form>
    </div>
  );
}
