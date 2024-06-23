import { useState } from 'react';
import styles from './styles/index.module.css';

interface IViewBtnProps {
  setVisible: () => void;
}

export function ViewBtn({ setVisible }: IViewBtnProps) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    setVisible();
  };

  return (
    <button
      type="button"
      aria-label="Показать пароль"
      className={styles.viewBtn}
      data-isactiveattr={isActive}
      onClick={handleClick}
    >
      <svg
        width="24.000000"
        height="24.000000"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <desc>Created with Pixso.</desc>
        <defs />
        <path
          id="Vector"
          d="M14.12 14.12C13.57 14.66 12.82 15 11.99 15C10.34 15 8.99 13.65 8.99 12C8.99 11.17 9.33 10.42 9.87 9.87M10.73 5.07C11.14 5.02 11.56 5 11.99 5C16.66 5 20.39 7.9 21.99 12C21.6 13.01 21.08 13.94 20.44 14.78M17.48 17.48C15.89 18.44 14.03 19 11.99 19C7.33 19 3.6 16.09 1.99 12C2.9 9.69 4.47 7.76 6.51 6.51"
          stroke="#000"
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinejoin="round"
        />
        <path
          id="Vector 134"
          d="M4 4L20 20"
          stroke="#000"
          strokeOpacity="1.000000"
          strokeWidth="1.500000"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}
