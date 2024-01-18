import AppLogo from "../resources/app-logo-text.png";
import BaseText from "./BaseText";
import DisplayPicture from "./DisplayPic";

interface NavbarProps {
  onToggleSidebar: () => void;
}

const NavigationBar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
  return (
    <div className="bg-white border border-bottom-gray-100 z-10">
      <div className="flex justify-between items-center p-4">
        <img src={AppLogo} alt="TalentNest Logo" />
        <div className="flex items-center">
          <DisplayPicture
            altText="Nav DP"
            imageSource="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS1j8CjCgfSb4EUs32VXrFwuxagu6v3Pk7hA&usqp=CAU"
          />
          <div className="flex flex-col ml-4 mr-8">
            <BaseText weight="medium" size="large">Emeka Obi</BaseText>
            <BaseText color="gray">Software Developer</BaseText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
