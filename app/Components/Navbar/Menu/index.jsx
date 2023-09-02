import styles from "./styles.module.scss";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const overlayPathRef = useRef(null);
  const menuItemsRef = useRef(null);
  useEffect(() => {
    // Set the initial animation values when the component mounts
    gsap.set(menuItemsRef.current.children, { y: 150, opacity: 0 });
  }, []);
  const openMenu = () => {
    if (isOpen) return;

    gsap
      .timeline()
      .to(
        overlayPathRef.current,
        {
          duration: 0.8,
          ease: "power4.in",
          attr: { d: "M 0 100 V 50 Q 50 0 100 50 V 100 z" },
        },
        0
      )
      .to(overlayPathRef.current, {
        duration: 0.3,
        ease: "power2.out",
        attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
      })
      .to(menuItemsRef?.current?.children, {
        duration: 1.1,
        ease: "power4.out",
        startAt: { y: 150 },
        y: 0,
        opacity: 1,
        stagger: 0.05,
      });

    setIsOpen(true);
  };
  const closeMenu = () => {
    if (!isOpen) return;

    gsap
      .timeline()
      .to(menuItemsRef.current.children, {
        duration: 1,
        ease: "power3.in",
        y: 150,
        opacity: 0,
        stagger: 0.05,
        onComplete: () => {
          menuItemsRef.current.className = styles.hiddenMenu;
          setIsOpen(false);
        },
      })
      .to(
        overlayPathRef.current,
        {
          duration: 3,
          ease: "power4.out",
          attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
        },
        ">-=0.8"
      );
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.button}>
          {!isOpen ? (
            <button
              className={`${styles.unbutton} ${styles.buttonMenu}`}
              onClick={() => {
                openMenu();
              }}
              aria-label="Open menu"
            >
              <svg width="30" height="30" viewBox="0 0 19 12">
                <path d="m.742 3.26.485.874c.043-.024.13-.07.26-.136.22-.11.476-.233.765-.361A22.92 22.92 0 0 1 4.997 2.62c4.476-1.34 8.75-1.219 12.241 1.1.18.12.357.245.531.376l.6-.8a12.46 12.46 0 0 0-.578-.408C14.008.375 9.443.246 4.71 1.663c-1.037.31-2 .675-2.865 1.06a18.83 18.83 0 0 0-1.103.536Z" />
                <path d="m.742 6.748.485.874c.043-.023.13-.07.26-.135.22-.111.476-.233.765-.362A22.92 22.92 0 0 1 4.997 6.11c4.476-1.34 8.75-1.22 12.241 1.1.18.12.357.245.531.375l.6-.8a12.46 12.46 0 0 0-.578-.408C14.008 3.864 9.443 3.735 4.71 5.152c-1.037.31-2 .675-2.865 1.06a18.83 18.83 0 0 0-1.103.536Z" />
                <path d="m.742 10.237.485.874c.043-.024.13-.07.26-.136.22-.11.476-.232.765-.36a22.92 22.92 0 0 1 2.745-1.016c4.476-1.34 8.75-1.22 12.241 1.1.18.12.357.244.531.375l.6-.8a12.46 12.46 0 0 0-.578-.408C14.008 7.353 9.443 7.224 4.71 8.64c-1.037.31-2 .674-2.865 1.06a18.83 18.83 0 0 0-1.103.536Z" />
              </svg>
            </button>
          ) : (
            <button
              className={`${styles.unbutton} ${styles.buttonClose}`}
              aria-label="Close the menu"
              onClick={() => {
                closeMenu();
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="10 0 50 50"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g stroke="#fff" fill="none" fillRule="evenodd">
                  <path
                    strokeLinecap="square"
                    d="m55.766 32.528-5.125-1.865M52.677 36.938l3.1-4.618"
                  />
                  <path d="M8.773 10.587S-.693 49.485 56.13 32.3" />
                </g>
              </svg>
            </button>
          )}
        </div>

        <div
          ref={menuItemsRef}
          className={isOpen ? styles.menu : styles.hiddenMenu}
        >
          <span>Home</span>
          <span>About Us</span>
          <Link href="/news">News</Link>
          <span>Contact</span>
        </div>
      </div>
      <svg
        className={styles.overlay}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          className={styles.overlayPath}
          ref={overlayPathRef}
          vectorEffect="non-scaling-stroke"
          d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
        />
      </svg>
    </>
  );
};

export default Menu;
