import styles from "./NavBar.module.scss";
import menu from "../../assets/menu.svg";

export function NavBar({ handler, handleMenu }) {
  return (
    <nav className={styles.container}>
      <h1 className={styles.logo}>Logo</h1>
      <ul className={styles.navList}>
        <li onClick={() => handler("Home")} className={styles.navItem}>
          Home
        </li>
        <li onClick={() => handler("Store")} className={styles.navItem}>
          Store
        </li>
        <li onClick={() => handler("About")} className={styles.navItem}>
          About
        </li>
        <li onClick={() => handler("ContactUs")} className={styles.navItem}>
          Contact Us
        </li>
      </ul>
      <img
        className={styles.menuIcon}
        onClick={handleMenu}
        src={menu}
        alt="menu icon"
      />
    </nav>
  );
}
