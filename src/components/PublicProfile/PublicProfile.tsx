import BaseText from "../BaseText";
import ReadMore from "./ReadMore";
import SvgComponent from "../SVGShape";
import ellipse from "../../../src/Ellipse 132.svg";
import maskGroup from "../../../src/MaskGroup.svg";
import Button from "./Button";
import PublicProfileAdBox from "./PublicProfileAdBox";
import BaseInfoBox from "../Dashboard/InfoBox2";
import PersonalDetailedProfile from "./PersonalDetailedProfile";
import EducationCert from "./EducationCert";
import SoftSkills from "./SoftSkills";
import WorkHistory from "./WorkHistory";

export default function PublicProfile() {
    const lorem =
        "Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis condimentum ac, vestibulum eu nisl. Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis ";
    return (
        <div className="flex gap-4 mb-28 antialiased ">
            <div id="main" className="flex flex-col gap-4 w-full ">
                <div className="flex flex-col">
                    <div className="w-full">
                        <img src="/images/image3.png " alt="" className="object-cover w-full rounded-none" />
                    </div>
                    <div className="flex w-full h-[241px] flex-shrink-0">
                        <div className="gap-y-2 bg-[#043299] flex-[0.5] flex flex-col items-center relative w-full">
                            <img className="-mt-16 object-cover" src={ellipse} alt="" />
                            <div className="flex items-center gap-x-2 text-white text-[24px] font-bold">
                                <BaseText weight="semibold" size="xx-large">Emeka Obi</BaseText>
                                <SvgComponent icon="tick" />
                            </div>
                            <div className="absolute bottom-[-6.9em]">
                                <img src={maskGroup} alt="" />
                            </div>
                        </div>
                        <div className="bg-[#E5ECE6] flex-[2] items-center flex pl-9">
                            <div className="flex flex-col gap-y-9 ">
                                <div className=" flex gap-x-10 items-center">
                                    <BaseText weight="semibold" size="x-large">Software Developer</BaseText>
                                    <Button />
                                </div>
                                <div className="flex gap-x-4 items-center ">
                                    <SvgComponent icon="github-icon" />
                                    <SvgComponent icon="behance-icon" />
                                    <SvgComponent icon="dribble-icon" />
                                    <SvgComponent icon="linkedIn-icon" />
                                    <SvgComponent icon="twitter-icon" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex ">
                        <div className="flex-[0.5] flex items-center bg-[#F7F7F7] flex-col gap-y-5 p-3">
                            <BaseInfoBox
                                icon="shieldedStar"
                                title="Your profile level"
                                subText="Ambitious"
                            />

                            <BaseInfoBox
                                icon="orangeDollarIcon"
                                title="Coin Wallet"
                                subText="5000"
                            />

                            <BaseInfoBox
                                icon="dollar-circle"
                                title="Badge"
                                subText="Prodigy"
                            />
                            <PublicProfileAdBox />
                        </div>

                        <div className="flex-[2] flex flex-col bg-[#FFF] p-7 gap-y-6">
                            <BaseText weight="semibold" size="base" color="blue">
                                About Me
                            </BaseText>
                            <BaseText weight="semibold" color='gray' size='base'>
                                <ReadMore text={lorem} maxChars={600} />
                            </BaseText>
                            <div className="bg-[#E9ECF0] h-px" />
                            <PersonalDetailedProfile />
                            <EducationCert />
                            <WorkHistory />
                            <SoftSkills />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
