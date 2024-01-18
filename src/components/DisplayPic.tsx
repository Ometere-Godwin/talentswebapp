import SvgComponent from "./SVGShape";

interface NavbarProps {
  imageSource: string;
  altText: string;
  size?: "lg" | "sm" | "mini";
  showBorder?: boolean;
  activeState?: boolean;
}

const DisplayPicture: React.FC<NavbarProps> = ({
  imageSource,
  altText,
  size = "sm",
  activeState = false,
  showBorder = false,
}) => {
  
  const styleBorder = () => {
    return showBorder ? "border border-blue-800" : false;
  };

  const computeStyles = () => {
    switch (size) {
      case "lg":
        return `${styleBorder()} dpLarge`;
      case "mini":
        return `${styleBorder()} dpMini`;
      default:
        return `${styleBorder()} dpSmall`;
    }
  };

  return (
    <div className="relative">
      <img
        src={imageSource}
        alt={altText}
        className={`rounded-full object-cover ${computeStyles()}`}
      />
      {activeState && <div className="absolute bottom-0 right-0">
        <SvgComponent icon="active-dot"/>
      </div>}
    </div>
  );
};

export default DisplayPicture;
