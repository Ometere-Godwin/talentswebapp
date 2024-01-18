import { useState, useEffect, FC } from 'react';
import styles from "../../styles/Components.module.css"
import { TeamProjectCardThemes } from '../../interfaces';
import useCardTheme from '../../hooks/CardTheme';

interface BaseProgressBarProps {
  value: number;
  theme?: TeamProjectCardThemes;
  sameBackgroundColor?: boolean;
}

const BaseProgressBar: FC<BaseProgressBarProps> = ({ value, theme="blue", sameBackgroundColor=false }) => {
  const [progress, setProgress] = useState(value);
  const cardTheme = useCardTheme(theme, sameBackgroundColor);


  useEffect(() => {
    setProgress(value);
  }, [value]);

  return (
    <div style={{ backgroundColor: cardTheme.backgroundColor }} className={styles["custom-progress-bar-container"]}>
      <div style={{ backgroundColor: cardTheme.foreground, width: `${progress}%` }} className={styles["custom-progress-bar"]}></div>
    </div>
  );
};

export default BaseProgressBar;
