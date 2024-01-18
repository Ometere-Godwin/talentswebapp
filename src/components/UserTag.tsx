import { UserCategoryMapping } from "../interfaces";
import "../styles/App.css";
import BaseText from "./BaseText";

interface UserTagProps {
    talentLevel: 1 | 2 | 3,
  }

const userCategoryMapping: UserCategoryMapping = {
    1: 'AMBITIOUS',
    2: 'RISING STAR',
    3: 'EXPERT',
  };
  
const BaseUserTag: React.FC<UserTagProps> = ({ talentLevel }) => {
    
  return (
    <div className="userTag">
          <BaseText color="blue" weight="semibold" size="small">
          {userCategoryMapping[talentLevel]}
      </BaseText>
  </div>
  );
}

export default BaseUserTag;
