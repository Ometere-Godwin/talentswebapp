import BaseButton from "../../components/BaseButton";
import BaseText from "../../components/BaseText";
import BaseChallengeCard from "../../components/Challenges/ChallengeCard";
import SvgComponent from "../../components/SVGShape";
import Pagination from "../../components/Table/Pagination";
import "../../styles/App.css";

export default function AllChallenges() {
  const generateDummyData = (count:number) => {
    const dummyData = [];
  
    for (let i = 1; i <= count; i++) {
      dummyData.push({
        id: i,
        name: `Item ${i}`,
        value: Math.random() * 100, // Example: Random numeric value
        description: `Description for Item ${i}`,
      });
    }
  
    return dummyData;
  }
  
  // Example: Generate an array of 5 dummy objects
  const dummyArray = generateDummyData(25);

  return (
    <div>
      <div className="flex items-center gap-4 justify-between">
        <div className="mb-4">
          <BaseText weight="semibold" size="xx-large">
            Challenges
          </BaseText>
          <BaseText size="small" color="gray">
            Join and collaborate with other on working on a challenge.
          </BaseText>
        </div>
      </div>
      <div
        className={`flex justify-between gradient-container items-center p-3 rounded-xl`}
        style={{ border: `1px solid var(--talentnest-blue)` }}
      >
        <div className="flex justify-start items-center gap-3">
          <SvgComponent icon="caution-circle" />
          <BaseText weight="semibold" color="blue">
            First take on assessment to join challenges
          </BaseText>
        </div>
        <BaseButton handleEngagement={(e) => void e} mode="outline">
          <BaseText color="blue" weight="semibold" size="small">
            Take an assessment
          </BaseText>
        </BaseButton>
      </div>
      <div className="p-4 my-4 border pb-4 border-2 border-gray-200 rounded-2xl shadow-md">
        <div className="flex justify-between items-center py-3 px-4 mb-3">
          <BaseText weight="medium" size="large">
            40 Challenges
          </BaseText>
          <BaseText
            weight="semibold"
            extraClasses="underline-offset-2 underline"
          >
            Your Level: Ambitious
          </BaseText>
          <BaseButton handleEngagement={(e) => void e} mode="outline-dark">
            <div className="flex justify-center gap-4 items-center">
              <SvgComponent icon="filter" />

              <BaseText weight="medium" size="small">
                Filters
              </BaseText>
            </div>
          </BaseButton>
        </div>
        <div className="grid grid-cols-2 gap-8 p-4">
            <BaseChallengeCard />
            <BaseChallengeCard />
            <BaseChallengeCard />
            <BaseChallengeCard />
          </div>
          <Pagination dataItems={dummyArray} setContents={() => console.log()} />
      </div>
    </div>
  );
}
