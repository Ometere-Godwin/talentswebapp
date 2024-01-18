import { FC, useEffect, useState } from "react";
import BaseText from "../BaseText";
import BaseButton from "../BaseButton";
import BasePillButton from "../Table/BasePillButton";
import SvgComponent from "../SVGShape";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface ChallengeCardProps {
  defaultState?: boolean; // set the whole challenge object when available
  // status: 'open to join or trending'
  // challenge difficulty, easy, medium, hard, also is optional
}

const BaseChallengeCard: FC<ChallengeCardProps> = ({
  defaultState = false,
}) => {
  const navigate: NavigateFunction = useNavigate();

  const [textTheme, setTextTheme] = useState('')
  const difficultyLevel:string = 'easy';

  const viewChallenge = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    navigate("/challenges/essie");
  }


  const computedDifficultyTextTheme = () => {
    switch (difficultyLevel) {
      case 'easy':
        setTextTheme('var(--talentnest-green)');
        break;
      case 'medium':
        setTextTheme('var(--talentnest-yellow)');
        break;
      case 'hard':
        setTextTheme('var(--talentnest-red)');
        break;
      default:
        setTextTheme('#000000');
        break;
    }
  }

  useEffect(() => {
    computedDifficultyTextTheme()
  }, [])

  return (
    <div className="relative flex flex-col rounded-2xl bg-white bg-clip-border shadow-md">
      <div className="relative m-0 overflow-hidden rounded-tl-2xl rounded-tr-2xl bg-transparent bg-clip-border shadow-none">
        <div className="absolute flex gap-3 justify-center top-4 right-4 bg-gray-700 border border-1 border-gray-900 rounded-full px-3 py-1">
          <SvgComponent icon="timeline" />
          <BaseText weight="medium" size="smaller" color="white">
            Trending
          </BaseText>
        </div>
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1471&amp;q=80"
          alt="ui/ux review check"
        />
      </div>
      <div className="p-6 flex-col flex gap-4">
        <div className={`flex justify-between items-center p-1`}>
        <BaseText weight="semibold" size="small" color="blue">
          E-Commerce Web Application
        </BaseText>
        <BaseText weight="semibold" size="small" color="blue" extraClasses="flex items-center gap-2">
          <span>
          <SvgComponent icon="alert" alertMode="success"/>
          </span>
          <p style={{color: textTheme, fontSize: '12px'}}>Easy</p>
        </BaseText>
        </div>
     
        <BaseText size="smaller">
          Online marketplace to buy, sell goods, manage your inventory and
          sales.
        </BaseText>
        <BaseText size="small" weight="semibold">
          Roles Needed
        </BaseText>
        <BaseText size="smaller">
          <p className="leading-4">
            Product Manager, Product Designer, Front-end Developer, Back-end
            Developer, Data Scientists, Quality Assurance Specialist.
          </p>
        </BaseText>
        <div className="flex flex-wrap justify-start gap-2 items-center ">
          <BasePillButton blue handleEngagement={(e) => void e}>
            <BaseText size="xs-small">
              <p className="text-[10px]">CSS</p>
            </BaseText>
          </BasePillButton>
          <BasePillButton blue handleEngagement={(e) => void e}>
            <BaseText size="xs-small">
              <p className="text-[10px]">CSS</p>
            </BaseText>
          </BasePillButton>
          <BasePillButton blue handleEngagement={(e) => void e}>
            <BaseText size="xs-small">
              <p className="text-[10px]">CSS</p>
            </BaseText>
          </BasePillButton>
          <BasePillButton blue handleEngagement={(e) => void e}>
            <BaseText size="xs-small">
              <p className="text-[10px]">CSS</p>
            </BaseText>
          </BasePillButton>
          <BasePillButton blue handleEngagement={(e) => void e}>
            <BaseText size="xs-small">
              <p className="text-[10px]">CSS</p>
            </BaseText>
          </BasePillButton>
          <BasePillButton blue handleEngagement={(e) => void e}>
            <BaseText size="xs-small">
              <p className="text-[10px]">CSS</p>
            </BaseText>
          </BasePillButton>
          <BasePillButton blue handleEngagement={(e) => void e}>
            <BaseText size="xs-small">
              <p className="text-[10px]">CSS</p>
            </BaseText>
          </BasePillButton>
          <BasePillButton blue handleEngagement={(e) => void e}>
            <BaseText size="xs-small">
              <p className="text-[10px]">CSS</p>
            </BaseText>
          </BasePillButton>
        </div>
      </div>
      <div className="flex items-end justify-between p-6">
        <div className="flex items-center ">
          <BaseText size="xs-small" weight="semibold">
            Project Timeline:
          </BaseText>
          <BaseText size="xs-small">30days</BaseText>
        </div>
        <BaseButton handleEngagement={(e) =>  viewChallenge(e)}>
          <BaseText weight="semibold" size="small">
            View challenge
          </BaseText>
        </BaseButton>
      </div>
    </div>
  );
};

export default BaseChallengeCard;
