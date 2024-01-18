import { MouseEvent, ReactNode } from "react";

interface PillButtonProps {
    text?: string;
    blue?: boolean;
    handleEngagement: (event: MouseEvent<HTMLButtonElement>) => void;
    children?: ReactNode;
    bgColor?: string;
    small?: boolean;
  }

  
const BasePillButton: React.FC<PillButtonProps> = ({ handleEngagement, text, blue=false, children, bgColor, small=false }) => {
  return (
    <button style={{ backgroundColor: !blue && bgColor ? bgColor : ''}} className={`rounded-full ${blue ? 'bg-[#E3E8F5]' : bgColor ? `` : 'bg-green-100'} ${(blue || bgColor) ? 'text-dark' : 'text-[#10C181]'} px-3 ${!small && 'py-1'}`} onClick={(e) => handleEngagement(e)}>{ text || children}</button>
  );
}

export default BasePillButton;
