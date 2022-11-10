import styles from "./Index.module.css";
import Link from "next/link";
export const AuthLinks = ({ active }) => {
  const links = [
    { page: "Login", link: "/auth/login" },
    { page: "Register", link: "/auth/register" },
    { page: "Admin-login", link: "/auth/admin-login"}
  ];
  return (
    <div className={styles.wrapper}>
      <ul className={`${styles.linksWrapper}`}>
        {links.map((item, idx) => (
          <li key={`${item.page}_${idx}`}>
            <Link href={item.link}>
              <a
                className={`${styles.link} ${
                  item.page.toLowerCase() === active ? styles.active : ""
                }`}
              >
                {item.page}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div className={`${styles.authDivider}`} />
    </div>
  );
};
