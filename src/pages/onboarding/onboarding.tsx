import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import styles from "../../styles/Auth.module.css";
import BaseButton from "../../components/BaseButton";
import BaseText from "../../components/BaseText";
import SvgComponent from "../../components/SVGShape";
import { onboardingFormFourProps, onboardingFormOneProps, onboardingFormThreeProps, onboardingFormTwoProps } from "../../interfaces";
import CustomMultiselect from "../../components/Form/CustomMultiselect";



function Onboarding() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [stepCompleted, setStepCompleted] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [formOneData, setFormOneData] = useState<onboardingFormOneProps>({
    selectedCountry: "",
    userPicture: null,
  });
  const [formTwoData, setFormTwoData] = useState<onboardingFormTwoProps>({
    primaryRole: "",
    currentCompany: "",
  });
  const [formThreeData, setFormThreeData] = useState<onboardingFormThreeProps>({
    skillsets: [],
    levelOfExperience: "Expert",
    areaOfInterests: [],
  });
  const [formFourData, setFormFourData] = useState<onboardingFormFourProps>({
    about: "",
  });

  const setTitleText = () => {
    switch (currentStep) {
      case 1:
        return "Welcome! you're about to set up your new profile";
      case 2:
        return "What do you do as a professional?";
      case 3:
        return "Great, what are your super power like?";
      case 4:
        return "Lastly, tell us about yourself?";
    }
  };

  useEffect(() => {
    if (formOneData.selectedCountry) {
      setStepCompleted(true);
    } else {
      setStepCompleted(false);
    }
  }, [formOneData]);

  useEffect(() => {
    if (formTwoData.primaryRole) {
      setStepCompleted(true);
    } else {
      setStepCompleted(false);
    }
  }, [formTwoData]);

  useEffect(() => {
    if (
      formThreeData.skillsets &&
      formThreeData.levelOfExperience &&
      formThreeData.areaOfInterests
    ) {
      setStepCompleted(true);
    } else {
      setStepCompleted(false);
    }
  }, [formThreeData]);

  useEffect(() => {
    if (formFourData.about && formFourData.about.trim().length > 10) {
      setStepCompleted(true);
    } else {
      setStepCompleted(false);
    }
  }, [formFourData]);


  const handleFormOne = (arg: string) => {
    setFormOneData({ ...formOneData, selectedCountry: arg });
  };

  const handleFormSelect = (
    e:
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>
      | ChangeEvent<HTMLInputElement>
  ) => {
    let prop = e.target.id;
    let propData = e.target.value;

    switch (currentStep) {
      case 1:
        break;
      case 2:
        setFormTwoData({ ...formTwoData, [prop.toString()]: propData });
        break;
      case 3:
        setFormThreeData({ ...formThreeData, [prop.toString()]: propData });
        break;
      case 4:
        setFormFourData({ ...formFourData, [prop.toString()]: propData });
        break;
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormOneData({ ...formOneData, userPicture: null });
    const file = (event.target.files && event.target.files[0]) || null;
    setFormOneData({ ...formOneData, userPicture: file });
  };

  const handleRemoval = () => {
    if (formOneData.userPicture) {
      setFormOneData({ ...formOneData, userPicture: null });
    }
  };

  useEffect(() => {
    if (stepCompleted) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [currentStep, stepCompleted]);

  const handleFormButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  // };

  return (
    <div className="md:mx-auto ml-2 w-full pr-8 md:pr-2 md:w-1/2">
      <div className="pb-4 mb-4">
        <div className="flex items-center">
          <div className="flex items-center text-blue-800 relative">
            <div className="rounded-full flex justify-center items-center transition duration-500 ease-in-out h-8 w-8 py-3 bg-blue-800 border-blue-800">
              <BaseText size="x-large" weight="bold" color="white">
                1
              </BaseText>
            </div>
          </div>
          <div
            className={`flex-auto border-t-4 transition duration-500 ease-in-out ${
              currentStep >= 2 ? "border-blue-800" : "border-gray-300"
            }`}
          ></div>
          <div className="flex items-center text-white relative">
            <div
              className={`rounded-full flex justify-center items-center transition duration-500 ease-in-out h-8 w-8 py-3 ${
                currentStep >= 2 ? "bg-blue-800" : "bg-gray-300"
              } `}
            >
              <BaseText
                size="x-large"
                weight="bold"
                color="white"
              >
                2
              </BaseText>
            </div>
          </div>
          <div
            className={`flex-auto border-t-4 transition duration-500 ease-in-out ${
              currentStep >= 3 ? "border-blue-800" : "border-gray-300"
            }`}
          ></div>
          <div className="flex items-center text-gray-500 relative">
            <div
              className={`rounded-full flex justify-center items-center transition duration-500 ease-in-out h-8 w-8 py-3 ${
                currentStep >= 3 ? "bg-blue-800" : "bg-gray-300"
              } `}
            >
              <BaseText
                size="x-large"
                weight="bold"
                color="white"
              >
                3
              </BaseText>
            </div>
          </div>
          <div
            className={`flex-auto border-t-4 transition duration-500 ease-in-out ${
              currentStep >= 4 ? "border-blue-800" : "border-gray-300"
            }`}
          ></div>
          <div className="flex items-center relative">
            <div
              className={`rounded-full flex justify-center items-center transition duration-500 ease-in-out h-8 w-8 py-3 ${
                currentStep >= 4 ? "bg-blue-800" : "bg-gray-300"
              } `}
            >
              <BaseText
                size="x-large"
                weight="bold"
                color="white"
              >
                4
              </BaseText>
            </div>
          </div>
        </div>
      </div>
      <h6 className={styles.formTitle}>{setTitleText()}</h6>
      <form>
        {currentStep === 1 && (
          <>
            <div className="relative">
              <div className="col-span-full mt-4 mb-4">
                <label htmlFor="photo" className="block mb-4 py-4">
                  <BaseText size="small" weight="normal">
                    Upload a clear profile picture (optional)
                  </BaseText>
                </label>
                <div className="mt-2 flex items-center gap-x-3">
                  {formOneData.userPicture ? (
                    <div>
                      <img
                        className="w-24 h-24 rounded-full"
                        src={URL.createObjectURL(formOneData.userPicture)}
                        alt="Uploaded Profile"
                      />
                    </div>
                  ) : (
                    <div className="w-24 rounded-full items-center flex justify-center h-24 bg-blue-800">
                      <h3 className={styles.singular}>I</h3>
                    </div>
                  )}
                  <div className="flex w-40 items-end gap-2 ">
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
                          {formOneData.userPicture
                            ? "Remove Image"
                            : "upload a picture"}
                        </BaseText>
                        {!formOneData.userPicture && (
                          <input
                            type="file"
                            onChange={handleFileChange}
                            accept=".jpg, .png, .jpeg"
                            style={{ visibility: "hidden" }}
                          />
                        )}
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-3">
              <label className={styles.formLabel} htmlFor="country">
                Country of residence <span className="text-red-500">*</span>
              </label>
              <select
                required
                id="country"
                value={formOneData.selectedCountry}
                onChange={(e) => handleFormOne(e.target.value)}
                className={`${styles.formInput} pr-4`}
              >
                <option value="">Select Country</option>
                <option value="NIGERIA"> 🇳🇬 Nigeria </option>
                <option value="GHANA"> 🇬🇭 Ghana</option>
                <option value="KENYA"> 🇰🇪 Kenya</option>
              </select>
            </div>
          </>
        )}
        {currentStep === 2 && (
          <>
            <div className="relative mb-3">
              <label className={styles.formLabel} htmlFor="primaryRole">
                Your primary role <span className="text-red-500">*</span>
              </label>
              <select
                required
                id="primaryRole"
                name="primaryRole"
                value={formTwoData.primaryRole}
                onChange={(e) => handleFormSelect(e)}
                className={`${styles.formInput} pr-4`}
              >
                <option value="">Select</option>
                <option value="product-manager">Product manager </option>
                <option value="software-engineer"> Software Engineer</option>
                <option value="product-designer"> Product Designer</option>
              </select>
            </div>
            <div className="relative">
              <label className={styles.formLabel} htmlFor="currentCompany">
                Current company (optional)
              </label>
              <input
                type="text"
                id="currentCompany"
                name="currentCompany"
                value={formTwoData.currentCompany}
                className={`${styles.formInput}  ${
                  !formTwoData.currentCompany ? styles.inputFieldInvalid : ""
                }}`}
                onChange={(e) => handleFormSelect(e)}
                placeholder="company name"
              />
            </div>
          </>
        )}
        {currentStep === 3 && (
          <>
            <div className="relative mb-3">
              <label className={styles.formLabel} htmlFor="skillsets">
                What are you skillsets <span className="text-red-500">*</span>
              </label>
             <CustomMultiselect availableOptions={['CSS']}/>
            </div>
            <div className="relative mb-3">
              <label className={styles.formLabel} htmlFor="levelOfExperience">
                Level of experience <span className="text-red-500">*</span>
              </label>
              <select
                required
                id="levelOfExperience"
                name="levelOfExperience"
                value={formThreeData.levelOfExperience}
                onChange={(e) => handleFormSelect(e)}
                className={`${styles.formInput} pr-4`}
              >
                <option value="">Select</option>
                <option value="Expert">Expert </option>
                <option value="Intermediate"> Intermediate</option>
                <option value="Entry Level"> Entry Level</option>
              </select>
            </div>

            <div className="relative mb-3">
              <label className={styles.formLabel} htmlFor="areaOfInterests">
                What are your area of interests
                <span className="text-red-500">*</span>
              </label>
              <CustomMultiselect availableOptions={['Finance']}/>

            </div>
          </>
        )}
        {currentStep === 4 && (
          <>
            <div className="relative">
              <label className={styles.formLabel} htmlFor="about">
                Tell us about you <span className="text-red-500">*</span>
              </label>
              <textarea
                id="about"
                name="about"
                value={formFourData.about}
                className={`${styles.formInput}  ${
                  !formFourData.about ? styles.inputFieldInvalid : ""
                }}`}
                onChange={(e) => handleFormSelect(e)}
                placeholder="I am.........."
              />
            </div>
            <div className={`relative`}>
              <label className={styles.formLabel}>
                <BaseText color="black" size="small" weight="normal">
                  Here is a sample
                </BaseText>
              </label>
              <div className={`${styles.sampleText} relative`}>
                <BaseText size="small" weight="normal">
                  <p className="leading-5">
                    I'm John, a passionate Frontend Developer with a knack for
                    creating engaging and responsive user interfaces. My journey
                    in web development started with a love for design, and over
                    the years, I've honed my skills in HTML, CSS, and various
                    JavaScript frameworks.
                  </p>
                </BaseText>
              </div>
            </div>
          </>
        )}

        <div className="flex flex-row justify-between items-center">
          {currentStep !== 1 && (
            <div>
              <BaseText size="small" weight="semibold" color="blue">
                <span>&lt; </span>
                Back
              </BaseText>
            </div>
          )}

          <div className="w-38 -mr-4">
            <BaseButton
              disabled={buttonDisabled}
              size={currentStep === 1 ? "wide" : ""}
              handleEngagement={(e) => handleFormButtonClick(e)}
            >
              <BaseText size="small" weight="semibold" color="white">
                {currentStep === 4 ? "Create profile" : "Continue"}
              </BaseText>
            </BaseButton>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Onboarding;
