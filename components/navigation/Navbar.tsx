import Link from "next/link";
import React from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      {/* @ts-ignore */}
      <Link className={styles["nav-link"]} href="/">
        Navbar
      </Link>
    </nav>
  );
};
