import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navitems}>
        <li className={styles.navitem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navitem}>
          <Link href="/product">Product</Link>
        </li>
        <li className={styles.navitem}>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
