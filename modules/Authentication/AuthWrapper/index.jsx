import styles from "./Index.module.css";
export const AuthWrapper = ({
  image = "/images/homepage.jpg",
  children,
  containerStyle,
}) => {
  return (
    <div
      style={{
        backgroundColor: "#16161D",

        marginTop: 70,
        ...containerStyle,
      }}
    >
      <section className={styles.authCardWrapper}>
        <div style={{ height: "100%" }}>
          <img
            src={image}
            alt="image of page"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div style={{ padding: "30px 100px" }}>{children}</div>
      </section>
    </div>
  );
};
