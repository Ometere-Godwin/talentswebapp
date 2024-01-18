import BaseText from "../BaseText";
import styles from "../../styles/Dashboard.module.css"
import DisplayPicture from "../DisplayPic";
import SvgComponent from "../SVGShape";
import BaseUserTag from "../UserTag";
import "../../styles/App.css"

interface UserProfileViewProps {
    displayName: string;
    role?: string;
    badgesCount?: number;
    coinsCount?: number;
    displayPicture?: string
  }

  
const BaseUserProfileView: React.FC<UserProfileViewProps> = ({ displayName, role="", badgesCount=0, coinsCount=0, displayPicture  }) => {

  const renderDisplayPicture = displayPicture ? <DisplayPicture
  altText="pROFLE DP"
  size="lg"
  showBorder
  imageSource={displayPicture}
/> : <SvgComponent icon="user-icon"/>
    
  return (
    <div className={` gradient-container ${styles.profileCard}`}>
    <div>
   { renderDisplayPicture }
      
      <div>
        <BaseUserTag talentLevel={1} />
      </div>
    </div>
    <div >
      <div className="flex items-center gap-4 justify-start">
        <BaseText weight="semibold" color="blue">
          { displayName }
        </BaseText>
        <span>
          <SvgComponent icon="verified-check" />
        </span>
      </div>
      <BaseText weight="medium">
      { role }
      </BaseText>
      <div className="flex items-center gap-4 justify-start">
        <div className="flex flex-col items-center gap-4 justify-center">
          <BaseText weight="medium" size="small">
            Badges
          </BaseText>
          <BaseText weight="semibold">
            { badgesCount }
          </BaseText>
        </div>
        <SvgComponent icon="pipe" />
        <div className="flex flex-col items-center gap-4 justify-center">
          <BaseText weight="medium" size="small">
            Coins
          </BaseText>
          <BaseText weight="semibold" >
            { coinsCount }
          </BaseText>
        </div>
      </div>
    </div>
  </div>
  );
}

export default BaseUserProfileView;
