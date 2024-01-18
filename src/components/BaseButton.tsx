import { ReactNode, MouseEvent } from 'react';
import '../styles/App.css'
import { TeamProjectCardThemes } from '../interfaces';

interface GenericButtonProps {
  text?: string;
  disabled?: boolean;
  mode?: 'normal' | 'outline' | 'themed' | 'outline-dark' | 'outline-inverted';
  selectedTheme?: TeamProjectCardThemes
  size?: string; // set specific  sizes
  taller?: boolean;
  handleEngagement: (event: MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
}

function BaseButton({ text, handleEngagement, children, disabled=false, mode="normal", size, selectedTheme, taller=false }: GenericButtonProps) {

  const computedWidth = () => {
    if (mode !== 'outline') {
      switch (size) {
        case 'wide':
          return 'baseButtonWide';
        case 'medium':
          return 'baseButtonMedium';
        case 'small':
          return 'baseButtonSmall';
        default: 
          return 'w-auto';
      }
    } else {
      return `w-[${size}px]`
    }
  }

  const computedButtonStyle = () => {
    switch (mode) {
      case 'outline':
        if (taller) {
          return 'buttonOutlineBlue taller'
        }
        return 'buttonOutlineBlue';
      case 'outline-dark':
        if (taller) {
          return 'buttonOutlineDark taller'
        }
          return 'buttonOutlineDark';
      case 'outline-inverted':
          if (taller) {
            return 'buttonOutlineBlueInverted taller'
          }
          return 'buttonOutlineBlueInverted';
      case 'themed':
        if (selectedTheme) {
          return `baseThemedButton base-${selectedTheme}`
        } else {
          return 'baseButton1';
        }
      default: 
        return 'baseButton1';
    }
  }

  return (
    <button className={` baseButton ${computedButtonStyle()} ${disabled ? 'baseButton1Disabled  disabled:cursor-not-allowed' : ''} ${computedWidth()}`}
    disabled={disabled} onClick={(e) => handleEngagement(e)}>{text || children}</button>
  );
}

export default BaseButton;
