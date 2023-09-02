"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Menu from "./Menu";

const Navbar = () => {
  const [width, setWidth] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <p onClick={() => window.scrollTo(0, 0)}>bf.ttt</p>
      </div>
      {width > 520 ? (
        <div className={styles.anchors}>
          <p>About Us</p>
          <Link href="/news">News</Link>
          <p>Contact</p>
        </div>
      ) : (
        <Menu />
      )}
    </nav>
  );
};

export default Navbar;
