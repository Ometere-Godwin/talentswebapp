import React, { FC } from "react";
import "../styles/App.css";

interface BaseTextProps {
  size?: 'xs-small' | 'smaller' | 'small' | 'large' | 'x-large' | 'xx-large' | 'base' | 'xxx-large';
  weight?: 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  color?: 'blue' | 'black' | 'gray' | 'white';
  extraClasses?: string;
  children: React.ReactNode;
}

const sizeMapping = {
  'xs-small': 'text-xs',
  'smaller': 'text-[13px]',
  'small': 'text-sm',
  'base': 'text-base',
  'large': 'text-large',
  'x-large': 'text-xl',
  'xx-large': 'text-2xl',
  'xxx-large': 'text-3xl',
};

const weightMapping = {
  'thin': 'font-thin',
  'extralight': 'font-extralight',
  'light': 'font-light',
  'normal': 'font-normal',
  'medium': 'font-medium',
  'semibold': 'font-semibold',
  'bold': 'font-bold',
  'extrabold': 'font-extrabold',
};

const colorMapping = {
  'blue': 'baseTextBlue',
  'gray': 'baseTextGray',
  'black': 'baseTextBlack',
  'white': 'baseTextWhite'
};

const BaseText: FC<BaseTextProps> = ({
  size = 'base',
  weight = 'normal',
  color = 'black',
  extraClasses = '',
  children,
}) => {

  const classes = [
    'baseText',
    sizeMapping[size] || '',
    weightMapping[weight] || '',
    colorMapping[color] || '',
    extraClasses,
  ].join(' ');


  // **FONT-WEIGHT GUIDE**

  // font-thin	font-weight: 100;
  // font-extralight	font-weight: 200;
  // font-light	font-weight: 300;
  // font-normal	font-weight: 400;
  // font-medium	font-weight: 500;
  // font-semibold	font-weight: 600;
  // font-bold	font-weight: 700;
  // font-extrabold	font-weight: 800;
  // font-black	font-weight: 900;

  // **FONT-WEIGHT GUIDE**


  // **FONT-SIZE GUIDE**

  // - xs-small: 12px
  // - smaller: 13px
  // - small: 14px
  // - large: 18px
  // - x-large: 20px
  // - xx-large: 24px
  // - default: 16px (text-base)

  // **FONT-SIZE GUIDE**

  return (
    <p className={classes}>
      {children}
    </p>
  );
};

export default BaseText;
