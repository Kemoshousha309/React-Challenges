import styles from "./mobileNav.module.scss"

export function MobileNav({ active, handler }) {
  const listStyles = [styles.navList]
  if(active) listStyles[1] = styles.show;
  else listStyles[1] = styles.hidden;
  return (
    <ul className={listStyles.join(" ")}>
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
  );
}
