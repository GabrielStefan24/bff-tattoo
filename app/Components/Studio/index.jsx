"use client";
import { useRef, useEffect } from "react";
import styles from "./styles.module.scss";

const Studio = () => {
  const container = useRef(null);
  const stickyMask = useRef(null);

  const initialMaskSize = 0.2;
  const targetMaskSize = 20;
  const easing = 0.05;
  let easedScrollProgress = 0;

  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    const maskSizeProgress = (targetMaskSize * getScrollProgress()) / 10;
    stickyMask.current.style.webkitMaskSize =
      (initialMaskSize + maskSizeProgress) * 80 + "%";
    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    const scrollProgress =
      stickyMask.current.offsetTop /
      (container.current.getBoundingClientRect().height - window.innerHeight);
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress;
  };

  return (
    <main className={styles.main}>
      <div ref={container} className={styles.container}>
        <h2>OUR STUDIO</h2>
        <div ref={stickyMask} className={styles.stickyMask}>
          <img src="/studio4.webp" alt="Photo of the studio" />
        </div>
      </div>
    </main>
  );
};

export default Studio;
