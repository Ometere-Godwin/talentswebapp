import styles from "../../styles/Components.module.css";
import BaseButton from "../BaseButton";
import BaseText from "../BaseText";
import SvgComponent from "../SVGShape";
import { MouseEvent } from "react";

function AdBox() {
  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
  }

  return (
      <div className={`${styles.waitlist}`}>
        <div style={{ position: "absolute", bottom: "-0.1em", right: 0 }}>
          <SvgComponent icon={"rainbow-wave"} />
        </div>
        <BaseText weight="semibold" color="white" size="xx-large">Take up a new challenge</BaseText>
        <BaseText weight="light" color="white" size="smaller" extraClasses="mb-4">
        Join a new team, build something amazing and upskill
        </BaseText>
        <BaseButton
          handleEngagement={(e) => handleClick(e)}
          mode='outline-inverted'
        >
             <BaseText color="white" size="smaller">
             Let's Go        </BaseText>
            </BaseButton>
      </div>
  );
}
export default AdBox;
