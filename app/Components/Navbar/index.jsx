"use client";

import { usePathname } from 'next/navigation';
import styles from "./styles.module.scss";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, slideUp, linkVariants } from "./anim";
import Link from "next/link";

const Navbar = ({ lenisInstance }) => {
  const [isPhone, setIsPhone] = useState(false);
  const [initialHeight, setInitialHeight] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const currentPath = usePathname();
  const headerRef = useRef(null);

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

  const test = {
    open: { height: "100vh" },
    closed: { height: initialHeight },
  };

  return (
    <motion.header
      variants={test}
      animate={isActive ? "open" : "closed"}
      className={styles.header}
    >
      {/*... Other parts of the component ...*/}
      
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
                <Link href="/">
                  <a className={isActiveLink('/') ? styles.activeLink : ''}>HOME</a>
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
                <Link href="/gallery">
                  <a className={isActiveLink('/gallery') ? styles.activeLink : ''}>GALLERY</a>
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
                <Link href="/contact">
                  <a className={isActiveLink('/contact') ? styles.activeLink : ''}>CONTACT</a>
                </Link>
              </motion.div>

              <motion.div
                key="link4"
                variants={linkVariants}
                initial="initial"
                animate="open"
                exit="exit"
                custom={3}
              >
                <Link href="/faq">
                  <a className={isActiveLink('/faq') ? styles.activeLink : ''}>FAQ</a>
                </Link>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
