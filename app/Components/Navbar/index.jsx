"use client";

import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, slideUp, linkVariants } from "./anim";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [isPhone, setIsPhone] = useState(false);
  const [initialHeight, setInitialHeight] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const currentPath = usePathname();
  const headerRef = useRef(null);
  const router = useRouter();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsPhone(true);
      } else {
        setIsPhone(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    if (headerRef.current) {
      const height = getComputedStyle(headerRef.current).height;
      setInitialHeight(height);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isActiveLink = (href) => currentPath === href;

  const goToHomePage = () => {
    router.push("/");
  };

  const slideDown = {
    open: { height: "101vh" },
    closed: { height: initialHeight },
  };

  return (
    <motion.header
      variants={slideDown}
      animate={isActive ? "open" : "closed"}
      className={styles.header}
    >
      <div className={styles.menuContent}>
        <p onClick={goToHomePage} className="cursor-pointer">BLACK FLAG.</p>
        {!isPhone && (
          <div className={styles.logo}>
            <span>CIRCA</span>
            <svg
              width="92"
              height="50"
              viewBox="0 0 92 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#EFEFEF"
            >
              <path
                d="M45.8129 44.3791C67.952 44.3791 85.8992 35.9503 85.8992 25.5528C85.8992 15.1554 67.952 6.72656 45.8129 6.72656C23.6738 6.72656 5.72656 15.1554 5.72656 25.5528C5.72656 35.9503 23.6738 44.3791 45.8129 44.3791Z"
                strokeMiterlimit="10"
                strokeLinecap="round"
              ></path>
              <path
                d="M45.8127 44.3791C53.6247 44.3791 59.9575 35.9503 59.9575 25.5528C59.9575 15.1554 53.6247 6.72656 45.8127 6.72656C38.0008 6.72656 31.668 15.1554 31.668 25.5528C31.668 35.9503 38.0008 44.3791 45.8127 44.3791Z"
                strokeMiterlimit="10"
                strokeLinecap="round"
              ></path>
              <path
                d="M45.8115 44.3791C61.5145 44.3791 74.2442 35.9503 74.2442 25.5528C74.2442 15.1554 61.5145 6.72656 45.8115 6.72656C30.1086 6.72656 17.3789 15.1554 17.3789 25.5528C17.3789 35.9503 30.1086 44.3791 45.8115 44.3791Z"
                strokeMiterlimit="10"
                strokeLinecap="round"
              ></path>
              <path
                d="M70.1216 10.5781C65.6692 13.7134 56.4493 15.8609 45.8264 15.8609C35.1892 15.8609 25.9837 13.7134 21.5312 10.5781"
                strokeMiterlimit="10"
                strokeLinecap="round"
              ></path>
              <path
                d="M21.5195 40.5289C25.972 37.3936 35.1918 35.2461 45.8147 35.2461C56.4519 35.2461 65.6574 37.3936 70.1099 40.5289"
                strokeMiterlimit="10"
                strokeLinecap="round"
              ></path>
              <path
                d="M5.72656 25.5527H85.9135"
                strokeMiterlimit="10"
                strokeLinecap="round"
              ></path>
              <path
                d="M45.8125 6.72656V44.3791"
                strokeMiterlimit="10"
                strokeLinecap="round"
              ></path>
              <path
                d="M48.219 23.1785C49.4307 24.4006 51.0776 25.1529 53.2422 25.5911C51.075 26.009 49.4225 26.7466 48.2005 27.9582C46.9784 29.17 46.2261 30.8169 45.7879 32.9814C45.37 30.8142 44.6324 29.1618 43.4208 27.9398C42.2091 26.7176 40.5622 25.9653 38.3976 25.5271C40.5648 25.1092 42.2172 24.3717 43.4392 23.1601C44.6614 21.9483 45.4137 20.3014 45.8519 18.1368C46.2698 20.3041 47.0073 21.9565 48.219 23.1785Z"
                fill="#EFEFEF"
              ></path>
            </svg>
            <span>2023</span>
          </div>
        )}
        <div className={styles.menu} onMouseDown={() => setIsActive(!isActive)}>
          <div
            className={`${styles.burgerIcon} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
          <div className={styles.label}>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              CLOSE
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "closed" : "open"}>
              MENU
            </motion.p>
          </div>
        </div>
      </div>
      <motion.div
        variants={slideUp}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className={`${styles.menuFooter} ${isActive ? styles.display : ""}`}
      >
        <div className={`${styles.socials} ${isActive ? styles.events : ""}`}>
          <p>SOCIAL MEDIA</p>
          <div>
            <a href="https://www.instagram.com/bf.ttt/">INSTAGRAM — </a>{" "}
            <a href="https://www.facebook.com/profile.php?id=100093651525656">
              FACEBOOK
            </a>
          </div>
        </div>
        <div className={styles.contact}>
          <p>GET IN TOUCH</p>
          <a href="mailto:bflag.ttt@gmail.com">bflag.ttt@gmail.com</a>
        </div>
      </motion.div>

      <div className={styles.links}>
        <AnimatePresence>
          {isActive && (
            <>
              <motion.div
                key="link1"
                variants={linkVariants}
                initial="initial"
                animate="open"
                exit="exit"
                custom={0}
              >
                <Link
                  href="/"
                  className={isActiveLink("/") ? styles.activeLink : ""}
                  onClick={() => {
                    setIsActive(false);
                  }}
                >
                  HOME
                </Link>
              </motion.div>

              <motion.div
                key="link2"
                variants={linkVariants}
                initial="initial"
                animate="open"
                exit="exit"
                custom={1}
              >
                <Link
                  href="/gallery"
                  className={isActiveLink("/gallery") ? styles.activeLink : ""}
                  onClick={() => {
                    setIsActive(false);
                    scrollTo(0, 0);
                  }}
                >
                  GALLERY
                </Link>
              </motion.div>

              <motion.div
                key="link3"
                variants={linkVariants}
                initial="initial"
                animate="open"
                exit="exit"
                custom={2}
              >
                <p
                  onClick={() => {
                    window.scroll({
                      top: document.documentElement.scrollHeight,
                      behavior: "smooth",
                    });
                    setTimeout(() => {
                      setIsActive(false);
                    }, 800);
                  }}
                >
                  CONTACT
                </p>
              </motion.div>

              <motion.div
                key="link4"
                variants={linkVariants}
                initial="initial"
                animate="open"
                exit="exit"
                custom={3}
              ></motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
