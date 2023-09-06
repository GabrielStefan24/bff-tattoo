"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Link from "next/link";
import Menu from "./Menu";
import { gsap } from "gsap";

const Navbar = () => {
  const [width, setWidth] = useState("");
  const nav = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      nav.current,
      {
        y: "-100%",
      },
      {
        y: "0%",
        duration: 2.5,
        ease: "power4.out",
      }
    );

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={styles.navbar} ref={nav}>
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
