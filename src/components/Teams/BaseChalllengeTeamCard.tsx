import { MouseEvent } from "react";
import "../../styles/App.css"
import BaseButton from "../BaseButton";
import BaseText from "../BaseText";
import BaseProgressBar from "../Dashboard/ProgressBar";
import SvgComponent from "../SVGShape";
import BaseTeamAvatars from "./BaseAvatarsStack";
import { TeamProjectCardThemes, teamCardEngagementCategory } from "../../interfaces";
import useCardTheme from "../../hooks/CardTheme";

interface TeamChallengeCardProps {
  teamName: string;
  mode: 'team' | 'challenge',
  theme: TeamProjectCardThemes;
  dueDate: string,
  projectName: string,
  projectDescription: string,
  progress: number,
  handleEngagement: (category: teamCardEngagementCategory) => void // also add team data when available
}

const BaseChallengeTeamCard: React.FC<TeamChallengeCardProps> = ({
  teamName,
  theme,
  mode,
  handleEngagement,
  dueDate,
  projectName,
  projectDescription,
  progress
}) => {
  const cardTheme = useCardTheme(theme);

  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    handleEngagement('view')
  }

  return (
    <section style={{ backgroundColor: cardTheme.backgroundColor }} className="rounded-2xl w-full transition ease-in-out delay-150 hover:shadow-xl h-{346px}">
      <div className="lg:order-first">
        <div className="flex flex-col">
          <div className="py-4 px-6 flex flex-col gap-1 rounded-3xl gap-3 ring-white/10 shadow-sm">
            <div className="flex justify-between">
              <BaseText weight="medium" size="large">
                {teamName}
              </BaseText>
              {mode === 'team' ? <div className="flex flex-col items-center gap-1">
                <BaseText weight="medium" size="xs-small">
                  Due Date
                </BaseText>
                <BaseText weight="medium" size="xs-small">
                  { dueDate }
                </BaseText>
              </div> :  <div className="flex gap-3 justify-center bg-gray-700 border border-1 items-center border-gray-900 rounded-full lg:px-3 lg:py-1 sm:py-1">
          <BaseText weight="medium" size="smaller" color="white">
            Closed
          </BaseText>
        </div>}
            </div>
            <BaseTeamAvatars teamMembers={[112]} />
           {mode === 'team' && <>
            <BaseText weight="medium" size="small" extraClasses="pt-4">
              Project Detail: {projectName}
            </BaseText>

            <BaseText size="xs-small" color="gray" extraClasses="pr-3">
              <p className="leading-4"> { projectDescription } </p>
            
            </BaseText>
            </>}

            <div className="pt-4">
              <BaseProgressBar value={progress} theme={theme} sameBackgroundColor/>
            </div>
            <div className={`flex justify-between align-center ${mode === 'team' ? 'pt-4' : ''}`}>
              <div className="flex justify-start gap-1 items-center">
                <span>
                  <SvgComponent icon="alert" alertMode="normal" />
                </span>
                <BaseText weight="medium" size="smaller">
                  { mode === 'team' ? 'Completed' : '2 team members left'}
                  {/* Compute these values later */}
                </BaseText>
              </div>
              <BaseText size="small">
                {progress}%
              </BaseText>
            </div>
          </div>
        </div>
        <hr  style={{ borderTop:`0.5px solid ${cardTheme.foreground}` }}/>
        <div className="flex px-4 py-4 justify-end">
       {mode === 'team' ? <BaseButton
            handleEngagement={(e) => handleButtonClick(e)}
            mode="themed"
            selectedTheme={theme}
          >
            <BaseText weight="medium" size="smaller">
            Submit Challenge
            </BaseText>
          </BaseButton> : <div className="flex gap-3">
          <BaseButton
            handleEngagement={(e) => handleButtonClick(e)}
            mode="outline-dark"
            taller
          >
            <BaseText weight="medium" size="smaller">
            View Team
            </BaseText>
          </BaseButton> 
          <BaseButton
            handleEngagement={(e) => handleButtonClick(e)}
            mode="themed"
            selectedTheme={theme}
          >
            <BaseText weight="medium" size="smaller">
            Join Team
            </BaseText>
          </BaseButton> 
          </div>}
            </div>
      </div>
    </section>
  );
};

export default BaseChallengeTeamCard;
