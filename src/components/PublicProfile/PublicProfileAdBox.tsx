import React from 'react'
import styles from "../../styles/Components.module.css";
import BaseButton from "../BaseButton";
import BaseText from "../BaseText";
import SvgComponent from "../SVGShape";
import { MouseEvent } from "react";

export default function PublicProfileAdBox() {
    function handleClick(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
    }
    return (
        <div>
            <div className={`${styles.waitlist} `} >
                <div style={{ position: "absolute", bottom: "-0.1em", right: 0 }}>
                    <SvgComponent icon={"rainbow-wave"} />
                </div>
                <BaseText weight="semibold" color="white" size="xx-large">Take on new assessments</BaseText>
                <BaseText weight="light" color="white" size="smaller" extraClasses="mb-4">
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum.
                </BaseText>
                <BaseButton
                    handleEngagement={(e) => handleClick(e)}
                    mode='outline-inverted'
                >
                    <BaseText color="white" size="smaller">
                        Join Talentnest        </BaseText>
                </BaseButton>
            </div>
        </div>
    )
}
