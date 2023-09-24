/* eslint-disable react/prop-types */
import styles from "./Button.module.css";

function Button({ children, width = "70px", height = "30px", handleClick }) {
  return (
    <button
      onClick={handleClick}
      style={{ width, height }}
      className={styles.buttom}
    >
      {children}
    </button>
  );
}

export default Button;
