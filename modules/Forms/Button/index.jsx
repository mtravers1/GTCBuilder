import styles from "./Index.module.css";
export const Button = ({ title = "Caption", ...rest }) => {
  return (
    <div className={`${styles.buttonWrapper}`}>
      <button className={`${styles.button}`} {...rest}>
        {title}
      </button>
    </div>
  );
};
