import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import formStyles from "../../styles/Auth.module.css";
import BaseButton from "../../components/BaseButton";
import BaseText from "../../components/BaseText";

const SocialIntegrations: React.FC = () => {
  const githubUrlRegex = /^(https:\/\/github\.com\/)[\w-]+\/[\w-]+$/;
  const behanceUrlRegex = /^https:\/\/www\.behance\.net\/[a-zA-Z0-9_-]+$/;
  const dribbleUrlRegex = /^https:\/\/dribbble\.com\/[a-zA-Z0-9]+$/;
  const facebookUrlRegex = /^https:\/\/www\.facebook\.com\/[a-zA-Z0-9.-]+$/;
  const instagramUrlRegex = /^https:\/\/www\.instagram\.com\/[a-zA-Z0-9_.]+$/;
  const linkedInUrlRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9-]+$/;
  const twitterUrlRegex = /^https:\/\/twitter\.com\/[a-zA-Z0-9_]+$/;

  // formik.setValues(initialData);

  const formik = useFormik({
    initialValues: {
      portfolio: "",
      github: "",
      behance: "",
      dribble: "",
      linkedIn: "",
      twitter: "",
      instagram: "",
      facebook: "",
      linkTitle: "",
      linkUrl: ""
    },
    validationSchema: Yup.object({
      portfolio: Yup.string().url("Invalid Portfolio URL").nullable(),
      linkTitle: Yup.string().min(3, "Title must be at least 3 characters").max(13, "Title must be less than 13 characters"),
      linkUrl: Yup.string().url("Invalid Link URL").when("linkTitle", (val) => {
        return val.length > 3 ? Yup.string().required() : Yup.string().nullable();
      }),
      github: Yup.string()
        .matches(githubUrlRegex, "Invalid GitHub URL")
        .nullable(),
      behance: Yup.string()
        .matches(behanceUrlRegex, "Invalid Behance URL")
        .nullable(),
      dribble: Yup.string()
        .matches(dribbleUrlRegex, "Invalid Dribble URL")
        .nullable(),
      linkedIn: Yup.string()
        .matches(linkedInUrlRegex, "Invalid LinkedIn URL")
        .nullable(),
      twitter: Yup.string()
        .matches(twitterUrlRegex, "Invalid Twitter URL")
        .nullable(),
      instagram: Yup.string()
        .matches(instagramUrlRegex, "Invalid Instagram URL")
        .nullable(),
      facebook: Yup.string()
        .matches(facebookUrlRegex, "Invalid Facebook URL")
        .nullable(),
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
          <label className={formStyles.formLabel} htmlFor="portfolio">
            Portfolio
          </label>
          <br />
          <input
            type="text"
            id="portfolio"
            name="portfolio"
            value={formik.values.portfolio}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${formStyles.formInput} ${
              formik.touched.portfolio && formik.errors.portfolio
                ? formStyles.inputFieldInvalid
                : ""
            }`}
            placeholder="Name@business.com"
          />
          {formik.touched.portfolio && formik.errors.portfolio && (
            <p className={`${formStyles.errorText} mb-4`}>
              {formik.errors.portfolio}
            </p>
          )}
        </div>
        <div className="relative">
          <label className={formStyles.formLabel} htmlFor="github">
            Github
          </label>
          <br />
          <input
            type="text"
            id="github"
            name="github"
            value={formik.values.github}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${formStyles.formInput} ${
              formik.touched.github && formik.errors.github
                ? formStyles.inputFieldInvalid
                : ""
            }`}
            placeholder="Name@business.com"
          />

          {formik.touched.github && formik.errors.github && (
            <p className={`${formStyles.errorText} mb-4`}>
              {formik.errors.github}
            </p>
          )}
        </div>

        <div className="relative">
          <label className={formStyles.formLabel} htmlFor="behance">
            Behance
          </label>
          <br />
          <input
            type="text"
            id="behance"
            name="behance"
            value={formik.values.behance}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${formStyles.formInput} ${
              formik.touched.behance && formik.errors.behance
                ? formStyles.inputFieldInvalid
                : ""
            }`}
            placeholder="Name@business.com"
          />

          {formik.touched.behance && formik.errors.behance && (
            <p className={`${formStyles.errorText} mb-4`}>
              {formik.errors.behance}
            </p>
          )}
        </div>

        <div className="relative">
          <label className={formStyles.formLabel} htmlFor="dribble">
            Dribble
          </label>
          <br />
          <input
            type="text"
            id="dribble"
            name="dribble"
            value={formik.values.dribble}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${formStyles.formInput} ${
              formik.touched.dribble && formik.errors.dribble
                ? formStyles.inputFieldInvalid
                : ""
            }`}
            placeholder="Name@business.com"
          />

          {formik.touched.dribble && formik.errors.dribble && (
            <p className={`${formStyles.errorText} mb-4`}>
              {formik.errors.dribble}
            </p>
          )}
        </div>

        <div className="relative">
          <label className={formStyles.formLabel} htmlFor="linkedIn">
            LinkedIn
          </label>
          <br />
          <input
            type="text"
            id="linkedIn"
            name="linkedIn"
            value={formik.values.linkedIn}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${formStyles.formInput} ${
              formik.touched.linkedIn && formik.errors.linkedIn
                ? formStyles.inputFieldInvalid
                : ""
            }`}
            placeholder="Name@business.com"
          />

          {formik.touched.linkedIn && formik.errors.linkedIn && (
            <p className={`${formStyles.errorText} mb-4`}>
              {formik.errors.linkedIn}
            </p>
          )}
        </div>

        <div className="relative">
          <label className={formStyles.formLabel} htmlFor="twitter">
            Twitter
          </label>
          <br />
          <input
            type="text"
            id="twitter"
            name="twitter"
            value={formik.values.twitter}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${formStyles.formInput} ${
              formik.touched.twitter && formik.errors.twitter
                ? formStyles.inputFieldInvalid
                : ""
            }`}
            placeholder="Name@business.com"
          />

          {formik.touched.twitter && formik.errors.twitter && (
            <p className={`${formStyles.errorText} mb-4`}>
              {formik.errors.twitter}
            </p>
          )}
        </div>

        <div className="relative">
          <label className={formStyles.formLabel} htmlFor="instagram">
            Instagram
          </label>
          <br />
          <input
            type="text"
            id="instagram"
            name="instagram"
            value={formik.values.instagram}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${formStyles.formInput} ${
              formik.touched.instagram && formik.errors.instagram
                ? formStyles.inputFieldInvalid
                : ""
            }`}
            placeholder="Name@business.com"
          />

          {formik.touched.instagram && formik.errors.instagram && (
            <p className={`${formStyles.errorText} mb-4`}>
              {formik.errors.instagram}
            </p>
          )}
        </div>

        <div className="relative">
          <label className={formStyles.formLabel} htmlFor="facebook">
            Facebook
          </label>
          <br />
          <input
            type="text"
            id="facebook"
            name="facebook"
            value={formik.values.facebook}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${formStyles.formInput} ${
              formik.touched.facebook && formik.errors.facebook
                ? formStyles.inputFieldInvalid
                : ""
            }`}
            placeholder="Name@business.com"
          />

          {formik.touched.facebook && formik.errors.facebook && (
            <p className={`${formStyles.errorText} mb-4`}>
              {formik.errors.facebook}
            </p>
          )}
        </div>
        <div className="relative my-8">
        <label className={formStyles.formLabel}>
        <BaseText weight="medium">
        Add a custom link
              </BaseText>
          </label>
          <br />
          <div className="flex items-center justify-between">
            <div>
            <label className={formStyles.formLabel}>
          Link Title
          </label>
          <br />
            <input
            type="text"
            id="linkTitle"
            name="linkTitle"
            value={formik.values.linkTitle}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${formStyles.formInput} ${
              formik.touched.linkTitle && formik.errors.linkTitle
                ? formStyles.inputFieldInvalid
                : ""
            }`}
            placeholder="Name@business.com"
          />
          {formik.touched.linkTitle && formik.errors.linkTitle && (
            <p className={`${formStyles.errorText} mb-4`}>
              {formik.errors.linkTitle}
            </p>
          )}
            </div>
            <div>
            <label className={formStyles.formLabel}>
         URL
          </label>
          <br />
            <input
            type="text"
            id="linkUrl"
            name="linkUrl"
            value={formik.values.linkUrl}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`${formStyles.formInput} ${
              formik.touched.linkUrl && formik.errors.linkUrl
                ? formStyles.inputFieldInvalid
                : ""
            }`}
            placeholder="Name@business.com"
          />
          {formik.touched.linkUrl && formik.errors.linkUrl && (
            <p className={`${formStyles.errorText} mb-4`}>
              {formik.errors.linkUrl}
            </p>
          )}
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center justify-end h-fit py-16">
          <BaseButton
              size="small"
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
};

export default SocialIntegrations;
