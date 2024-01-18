import BaseText from "../BaseText";
import styles from "../../styles/Dashboard.module.css";
import "../../styles/App.css"
import SvgComponent from "../SVGShape";
import BaseProgressBar from "./ProgressBar";
import BaseCheckBox2 from "../Form/BaseCheckbox2";
import { useState } from "react";

interface SetupProgressProps {
  onToggleSidebar?: () => void; // pas appropriate props
}

const SetupProgress: React.FC<SetupProgressProps> = ({ onToggleSidebar }) => {
    const [emailVerified, setEmailVerified] = useState(false);
    const [profileComplete, setProfileComplete] = useState(false);
    const [assessmentTaken, setAssessmentTaken] = useState(false);
    const [challengeTaken, setChallengeTaken] = useState(false);


  return (
    <div
      className={` ${styles.progressCard} gradient-container p-6 flex-col relative flex gap-4 `}
    >
      <div className="absolute left-3">
        <SvgComponent icon="caution-circle" darkCircleCaution/>
      </div>
      <BaseText weight="semibold" size="large" color="black">
        Let's start with the basics
      </BaseText>
      <div className="flex justify-between items-center ">
        <BaseText size="small" color="gray">
          Get more by setting up a profile you love.
        </BaseText>
        <BaseText size="small" >
          25% completed
        </BaseText>
      </div>
      <BaseProgressBar value={25} sameBackgroundColor />
      <div className="flex justify-start items-center gap-4">
        <BaseCheckBox2 rounded disabled defaultState={true} emitChangeEvent={(value) => setEmailVerified(value)} />
        <BaseText size="small" weight="medium" color={emailVerified ? "black" : "blue"} extraClasses={emailVerified ? 'line-through' : ''}>
          Verify email
        </BaseText>
      </div>
      <div className="flex justify-start items-center gap-4">
        <BaseCheckBox2 disabled rounded defaultState={true} emitChangeEvent={(value) => setProfileComplete(value)} />
        <div className="flex justify-start items-center gap-2">
        <BaseText size="small" weight="semibold" color={profileComplete ? "black" : "blue"} extraClasses={profileComplete ? 'line-through' : ''}>
        Complete your profile - 
        </BaseText>
        <BaseText size="small" weight="light" extraClasses={profileComplete ? 'line-through' : ''}>personalize your experience</BaseText> 
        </div>
       
      </div>
      <div className="flex justify-start items-center gap-4">
        <BaseCheckBox2 disabled rounded emitChangeEvent={(value) => setAssessmentTaken(value)} />
        <div className="flex justify-start items-center gap-2">
        <BaseText size="small" weight="semibold" color={assessmentTaken ? "black" : "blue"} extraClasses={assessmentTaken ? 'line-through' : ''} >
        Take an assessment -
        </BaseText>
        <BaseText size="small" weight="light" extraClasses={assessmentTaken ? 'line-through' : ''}> assess you skillset and level</BaseText> 

</div>
       
      </div>
      <div className="flex justify-start items-center gap-4">
        <BaseCheckBox2 disabled rounded emitChangeEvent={(value) => setChallengeTaken(value)} />
        <div className="flex justify-start items-center gap-2">
        <BaseText size="small" weight="semibold" color={challengeTaken ? "black" : "blue"} extraClasses={challengeTaken ? 'line-through' : ''} >
        Take on a challenge - 
        </BaseText>
        <BaseText size="small" weight="light" extraClasses={challengeTaken ? 'line-through' : ''}>collaborate and build with others</BaseText> 

</div>
      </div>
    </div>
  );
};

export default SetupProgress;
