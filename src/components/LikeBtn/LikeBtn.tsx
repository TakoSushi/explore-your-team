import styles from './styles/index.module.css';

type TLikeBtnProps = {
  isLiked: boolean;
};

export function LikeBtn(isLiked: TLikeBtnProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <button
      className={styles.likeBtn}
      type="button"
      aria-label="Like button"
      onClick={(e) => handleClick(e)}
    >
      {isLiked ? (
        <svg
          width="14.000000"
          height="12.000000"
          viewBox="0 0 14 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <desc>Unliked</desc>
          <defs />
          <path
            id="Vector"
            d="M3.84 0C1.72 0 0 1.72 0 3.84C0 7.69 4.54 11.18 7 12C9.45 11.18 14 7.69 14 3.84C14 1.72 12.27 0 10.14 0C8.84 0 7.69 0.64 7 1.63C6.64 1.12 6.17 0.71 5.62 0.43C5.07 0.14 4.46 -0.01 3.84 0Z"
            fill="#512689"
            fillOpacity="0"
            fillRule="nonzero"
          />
          <path
            id="Vector"
            d="M6.3 0.88C6.09 0.71 5.86 0.55 5.62 0.43C5.07 0.14 4.46 -0.01 3.84 0C1.72 0 0 1.72 0 3.84C0 7.69 4.54 11.18 7 12C9.45 11.18 14 7.69 14 3.84C14 1.72 12.27 0 10.14 0C9.21 0 8.35 0.33 7.69 0.88C7.42 1.1 7.19 1.35 7 1.63C6.8 1.35 6.57 1.1 6.3 0.88ZM7 10.93Q7.72 10.64 8.58 10.08Q9.5 9.48 10.3 8.74Q10.51 8.55 10.7 8.35Q11.77 7.27 12.36 6.16Q13 4.95 13 3.84Q13 3.51 12.92 3.2Q12.87 2.96 12.77 2.73Q12.67 2.5 12.54 2.29Q12.38 2.04 12.16 1.83Q11.95 1.62 11.7 1.46Q11.49 1.32 11.25 1.22Q11.03 1.12 10.79 1.07Q10.48 1 10.14 1Q9.76 1 9.4 1.09Q9.1 1.17 8.81 1.33Q8.51 1.48 8.27 1.7Q8.01 1.92 7.81 2.2L6.99 3.37L6.18 2.2Q5.98 1.92 5.73 1.7Q5.47 1.48 5.16 1.31Q4.85 1.16 4.52 1.08Q4.19 0.99 3.85 1Q3.51 1 3.19 1.07Q2.96 1.12 2.74 1.22Q2.5 1.32 2.29 1.46Q2.04 1.62 1.83 1.83Q1.61 2.04 1.45 2.29Q1.32 2.5 1.22 2.73Q1.12 2.96 1.07 3.2Q1 3.51 1 3.84Q1 4.95 1.63 6.16Q2.22 7.27 3.29 8.35Q3.48 8.55 3.69 8.74Q4.49 9.48 5.41 10.08Q6.27 10.64 7 10.93Z"
            fill="#151317"
            fillOpacity="1.000000"
            fillRule="evenodd"
          />
        </svg>
      ) : (
        <svg
          width="14.000000"
          height="12.000000"
          viewBox="0 0 14 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <desc>Liked</desc>
          <defs />
          <path
            id="Vector"
            d="M3.84 0C1.72 0 0 1.72 0 3.84C0 7.69 4.55 11.18 7 12C9.44 11.18 14 7.69 14 3.84C14 1.72 12.27 0 10.14 0C8.84 0 7.69 0.64 7 1.63C6.64 1.12 6.17 0.71 5.62 0.43C5.07 0.14 4.46 -0.01 3.84 0Z"
            fill="#512689"
            fillOpacity="1.000000"
            fillRule="nonzero"
          />
        </svg>
      )}
    </button>
  );
}
