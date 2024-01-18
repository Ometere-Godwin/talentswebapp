import { useFormik } from "formik";
import * as Yup from "yup";
import formStyles from "../../styles/Auth.module.css";
import BaseButton from "../../components/BaseButton";
import BaseText from "../../components/BaseText";
import CustomToggleInput from "../../components/Form/CustomToggle";

export default function PublicProfileSettings() {
  const githubUrlRegex = /^(https:\/\/github\.com\/)[\w-]+\/[\w-]+$/;
  const behanceUrlRegex = /^https:\/\/www\.behance\.net\/[a-zA-Z0-9_-]+$/;
  const dribbleUrlRegex = /^https:\/\/dribbble\.com\/[a-zA-Z0-9]+$/;
  const facebookUrlRegex = /^https:\/\/www\.facebook\.com\/[a-zA-Z0-9.-]+$/;
  const instagramUrlRegex = /^https:\/\/www\.instagram\.com\/[a-zA-Z0-9_.]+$/;
  const linkedInUrlRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9-]+$/;
  const twitterUrlRegex = /^https:\/\/twitter\.com\/[a-zA-Z0-9_]+$/;


  const formik = useFormik({
    initialValues: {
      about: "",
      workHistories: [
        {
          role: "",
          company: "",
          timeline: "",
          skills: "",
          description: "",
        },
      ],
      github: "",
      behance: "",
      dribble: "",
      linkedIn: "",
      twitter: "",
      instagram: "",
      facebook: "",
      linkTitle: "",
      linkUrl: "",
    },
    validationSchema: Yup.object({
      about: Yup.string().min(10, "Too short").nullable(),
      workHistories: Yup.array().of(
        Yup.object().shape({
          role: Yup.string().required("Role is nullable"),
          timeline: Yup.string().required("Timeline is nullable"),
          description: Yup.string().required("Description is nullable"),
          company: Yup.string().required("Company is nullable"),
          skills: Yup.string().required("Skills is required"),
        })
      ),
      linkTitle: Yup.string()
        .min(3, "Title must be at least 3 characters")
        .max(13, "Title must be less than 13 characters"),
      linkUrl: Yup.string().url("Invalid Link URL").when("linkTitle", (val) =>
        val && val.length > 3 ? Yup.string().required() : Yup.string().nullable()
      ),
      github: Yup.string().matches(githubUrlRegex, "Invalid GitHub URL").nullable(),
      behance: Yup.string().matches(behanceUrlRegex, "Invalid Behance URL").nullable(),
      dribble: Yup.string().matches(dribbleUrlRegex, "Invalid Dribble URL").nullable(),
      linkedIn: Yup.string().matches(linkedInUrlRegex, "Invalid LinkedIn URL").nullable(),
      twitter: Yup.string().matches(twitterUrlRegex, "Invalid Twitter URL").nullable(),
      instagram: Yup.string().matches(instagramUrlRegex, "Invalid Instagram URL").nullable(),
      facebook: Yup.string().matches(facebookUrlRegex, "Invalid Facebook URL").nullable(),
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });


  return (
    <div>
      <form className="pr-8 border-b-2 border-gray-100" onSubmit={formik.handleSubmit}>
        <div>
          <label className={formStyles.formLabel} htmlFor="about">
            About me
          </label>
          <textarea
            id="about"
            name="about"
            style={{ minHeight: "152px" }}
            value={formik.values.about}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${formStyles.formInput} ${
              formik.touched.about && formik.errors.about ? formStyles.inputFieldInvalid : ""
            }`}
            placeholder="Write about you............."
          />
          {formik.touched.about && formik.errors.about && (
            <p className={`${formStyles.errorText} mb-4`}>{formik.errors.about}</p>
          )}
        </div>

        {formik.values.workHistories.map((_, index) => (
          <div className="relative " key={index}>
            <label className={formStyles.formLabel} htmlFor={`workHistories.${index}.role`}>Role</label>
            <input
              type="text"
              id={`workHistories.${index}.role`}
              name={`workHistories.${index}.role`}
              value={formik.values.workHistories[index].role}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            //   className={`${formStyles.formInput} ${
            //     formik.touched.workHistories[0].role && formik.errors.workHistories[index].role
            //       ? formStyles.inputFieldInvalid
            //       : ""
            //   }`}
            />

            {
                index
            }
            
            {/* {formik.touched[`workHistories.${index}.role`] && formik.errors?.workHistories?.[index]?.role && (
  <div>{formik.errors.workHistories[index]?.role}</div>
)} */}

            <button
              type="button"
              onClick={() =>
                formik.setFieldValue("workHistories", [
                  ...formik.values.workHistories,
                  { role: "", company: "", timeline: "", skills: "", description: "" },
                ])
              }
            >
              Add Work History
            </button>

            {formik.values.workHistories.length > 1 && (
              <button
                type="button"
                onClick={() => {
                  const updatedWorkHistories = [...formik.values.workHistories];
                  updatedWorkHistories.splice(index, 1);
                  formik.setFieldValue("workHistories", updatedWorkHistories);
                }}
              >
                Remove
              </button>
            )}
          </div>
        ))}

<div className="flex items-center my-6 justify-between gap-7">
        <BaseText weight="semibold">Show talentnest work history</BaseText>
            <CustomToggleInput onToggleChange={(arg) => void(arg)} />
</div>
<div className="flex items-center my-6 justify-between gap-7">
        <BaseText weight="semibold">Show talentnest challenge history</BaseText>
            <CustomToggleInput onToggleChange={(arg) => void(arg)} />
</div>

        <div className="flex gap-2 items-center justify-end h-fit py-16">
          <BaseButton handleEngagement={(e) => void (e)}>
            <BaseText weight="semibold" size="small">
              Save Changes
            </BaseText>
          </BaseButton>
        </div>
      </form>
    </div>
  );
}