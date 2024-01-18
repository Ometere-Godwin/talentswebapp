import BaseText from "../BaseText";
interface TeamAvatarsProps {
    teamMembers: any[];
  }

  
const BaseTeamAvatars: React.FC<TeamAvatarsProps> = ({ teamMembers }) => {
    
  return (
    <div>
        <div className="flex -space-x-3 overflow-hidden justify-end pl-3 flex-row-reverse">
        <div className="h-10 w-10 inline-block -ml-3 rounded-full flex justify-center items-center bg-white opacity-70">
    <BaseText size="smaller">
    +2
    </BaseText>
  </div>
  <img className="inline-block h-10 w-10 rounded-full transition-transform transform hover:scale-110 hover:z-10" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
  <img className="inline-block h-10 w-10 rounded-full transition-transform transform hover:scale-110 hover:z-10" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
  <img className="inline-block h-10 w-10 rounded-full transition-transform transform hover:scale-110 hover:z-10" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt=""/>
  <img className="inline-block h-10 w-10 rounded-full transition-transform transform hover:scale-110 hover:z-10" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
 
</div>
  </div>
  );
}

export default BaseTeamAvatars;
