import "../../styles/App.css";
import { MouseEvent } from "react";
import SvgComponent from "../SVGShape";
import BaseText from "../BaseText";
import { IconStates } from "../../interfaces";

interface SideNavProps {
  handleBtnClick: (event: MouseEvent<HTMLButtonElement>) => void;
  isActive: boolean;
  title: string;
  icon: IconStates;
  minimized?: boolean;
}

const SideNavItem: React.FC<SideNavProps> = ({
  handleBtnClick,
  isActive,
  title = "Hey Man",
  icon,
  minimized = false,
}) => {
  return (
    <>
      <button
        onClick={(e) => handleBtnClick(e)}
        className={`flex items-center justify-start pl-8 sidebarItem ${
          isActive ? "active" : ""
        }`}
      >
        <div className="flex items-center  gap-4">
          <>
            <SvgComponent icon={icon} iconActive={isActive} />
          </>
          <>
            <BaseText
              color={isActive ? "blue" : "black"}
              weight={isActive ? "semibold" : "medium"}
              size="small"
            >
              {title}
            </BaseText>
          </>
        </div>
      </button>
    </>
  );
};

export default SideNavItem;
