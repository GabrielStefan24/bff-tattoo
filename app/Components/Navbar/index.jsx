import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import gsap from "gsap";

const Navbar = () => {
  const [isPhone, setIsPhone] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header className={styles.header}>
      <p>BLACK FLAG.</p>
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

      <div className={styles.menu}>
        <button className={styles.headerButton} onClick={toggleMenu}>
          <div className={styles.menuContainer}>
            <p>
              <span className={styles.menuText}>MENU</span>
              <span className={styles.closeText}>CLOSE</span>
            </p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28">
            <path
              d="M1 8 C6 8 11 8 16 8 16 8.66 16 9.33 16 10 11 10 6 10 1 10 1 9.33 1 8.66 1 8"
              fill="currentColor"
              dataoriginal="M1 8h15v2H1z"
              style={{ transformOrigin: "0px 0px" }}
              transform="matrix(1,0,0,1,0,0)"
            ></path>
            <line
              x1="1"
              y1="15"
              x2="25"
              y2="15"
              stroke="currentColor"
              strokeWidth="2"
              style={{ transformOrigin: "0px 0px" }}
              transform="matrix(1,0,0,1,0,0)"
            ></line>
            <path
              d="M1 20h24v2H1z"
              fill="currentColor"
              style={{ transformOrigin: "0px 0px" }}
              transform="matrix(1,0,0,1,0,0)"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
