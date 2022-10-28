import styles from "./Index.module.css";
export const Input = ({ title = "Caption", ...rest }) => {
  return (
    <div className={styles.inputWrapper}>
      <div className={`${styles.inputLabelWrapper}`}>
        <label className={`${styles.inputLabel}`}>{title}</label>
      </div>
      <input
        type="text"
        placeholder="Email Address"
        className={`${styles.input} ${styles.inputWrapper}`}
        {...rest}
      />
    </div>
  );
};
