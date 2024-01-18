import { MouseEvent } from "react";
import BaseButton from "../components/BaseButton";
import BaseText from "../components/BaseText";
import SvgComponent from "../components/SVGShape";
import AdBox from "../components/Dashboard/AdBox";
import BaseInfoBox from "../components/Dashboard/InfoBox2";
import BaseChallengeCard from "../components/Challenges/ChallengeCard";
import SetupProgress from "../components/Dashboard/SetupProgress";
import BaseTipBox from "../components/Dashboard/TipBox";

export default function DashboardPage() {
  const handleFormButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };


  return (
    <div className="flex gap-4">
      <div id="main" className="flex mr-2 flex-col gap-4 w-9/12">
        <div
          id="welcome-text"
          className="flex items-center gap-4 justify-between"
        >
          <div>
            <BaseText weight="semibold" size="xx-large" extraClasses="pb-2">
              Welcome back, Emeka!
            </BaseText>
            <BaseText size="small" color="gray">
              Gain hands-on work experience, build a portfolio, and accelerate
              your career growth.
            </BaseText>
          </div>
          <BaseButton handleEngagement={(e) => handleFormButtonClick(e)}>
            <BaseText weight="semibold" size="small">
              View my profile
            </BaseText>
          </BaseButton>
        </div>
        <div>
          <SetupProgress />
        </div>


        <div className="flex flex-col gap-4 p-4 border border-2 border-gray-200 rounded-2xl">
          <div className="flex px-4 py-2 justify-between items-center">
            <BaseText weight="semibold" size="x-large" color="blue">
              Challenges to explore
            </BaseText>
            <div className="flex w-min px-4 py-2 justify-center gap-3 items-center">
              <div className=" cursor-pointer hover:bg-sky-200 rounded-full">
                <SvgComponent icon="circle-arrow-left-black" />
              </div>
              <div className=" cursor-pointer hover:bg-sky-200 rounded-full">
                <SvgComponent icon="circle-arrow-right-black" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 p-4">
            <BaseChallengeCard />
            <BaseChallengeCard />
          </div>
          <div className="flex justify-end items-center gap-4 py-6 pr-4 cursor-pointer">
            <BaseText weight="semibold" size="small" color="blue">
              Discover more challenges
            </BaseText>
            <SvgComponent icon="arrow-right" />
          </div>
        </div>

        <div>
          <BaseTipBox />
        </div>
      </div>
      <div
        id="dashboard-side"
        className="flex w-3/12 flex-col gap-3 ml-3 h-screen overflow-y-auto"
      >
        <BaseInfoBox
          icon="shield"
          title="Your profile level"
          subText="Ambitious"
        />
        <BaseInfoBox icon="dollar-circle" title="Coin Wallet" subText="5000" />

        <AdBox />
      </div>


    </div>
  );
}
