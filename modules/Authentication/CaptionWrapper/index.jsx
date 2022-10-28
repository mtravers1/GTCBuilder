import styles from "./Index.module.css";
export const CaptionWrapper = ({ mainCaption = "", content = "" }) => {
  return (
    <div className={styles.capWrapper}>
      <h2 className={`${styles.caption}`}>{mainCaption}</h2>
      <p className={`${styles.content}`}>{content}</p>
    </div>
  );
};
