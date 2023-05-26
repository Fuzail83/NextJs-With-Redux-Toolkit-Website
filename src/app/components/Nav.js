import React from "react";
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <div className="">
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <Link href="/" className={styles.navbarLink}>
              Home
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/about" className={styles.navbarLink}>
              About
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/movie" className={styles.navbarLink}>
              Movie
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link href="/contactus" className={styles.navbarLink}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
