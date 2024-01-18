import { IconStates } from "../../interfaces";
import BaseText from "../BaseText";
import styles from "../../styles/Components.module.css"
import SvgComponent from "../SVGShape";

interface InfoBoxProps {
  icon: IconStates;
  title: string;
  subText: string;
}

const BaseInfoBox: React.FC<InfoBoxProps> = ({ icon, title, subText }) => {
  return (
    <div className={` mb-4 w-full flex items-center justify-start gap-5 ${styles.infoBox2}`}>
    <div >
        <SvgComponent icon={icon}/>
    </div>
    <div className="flex flex-col items-start gap-4 justify-start">
        <BaseText weight="medium" size="large">{title}</BaseText>
        <BaseText weight="medium" size="x-large" >{subText}</BaseText>
    </div> 
    </div>
  );
};

export default BaseInfoBox;
