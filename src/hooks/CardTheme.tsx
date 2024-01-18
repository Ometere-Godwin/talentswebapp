import { useState, useEffect } from 'react';
import { TeamProjectCardThemes } from '../interfaces';

const useCardTheme = (theme:TeamProjectCardThemes, sameBackground:boolean=false) => {
  const [cardTheme, setCardTheme] = useState({
    foreground: '',
    backgroundColor: '',
  })

  useEffect(() => {
    const computeCardTheme = () => {
      let foreground = '';
      let backgroundColor = '';

      switch (theme) {
        case 'teal':
          backgroundColor =  sameBackground ? 'var(--talentnest-gray2)' : 'var(--talentnest-teal-bg)';
          foreground =  'var(--talentnest-teal)';
          break;
        case 'pink':
          backgroundColor = sameBackground ? 'var(--talentnest-gray2)' : 'var(--talentnest-pink-bg)';
          foreground = 'var(--talentnest-pink)';
          break;
        case 'blue':
          backgroundColor = sameBackground ? 'var(--talentnest-gray2)' : 'var(--talentnest-blue-bg2)';
          foreground = 'var(--talentnest-blue)';
          break;
        case 'gold':
          backgroundColor = sameBackground ? 'var(--talentnest-gray2)' : 'var(--talentnest-yellow-bg)';
          foreground = 'var(--talentnest-yellow)';
          break;
        case 'green':
          backgroundColor = sameBackground ? 'var(--talentnest-gray2)' : 'var(--talentnest-green-bg)';
          foreground = 'var(--talentnest-green)';
          break;
        default:
            backgroundColor = sameBackground ? 'var(--talentnest-gray2)' : 'var(--talentnest-blue-bg2)';
          foreground = 'var(--talentnest-blue)';
          break;
      }

      setCardTheme({ foreground, backgroundColor });
    };

    computeCardTheme();
  }, [theme, sameBackground]);

  return cardTheme;
};

export default useCardTheme;
