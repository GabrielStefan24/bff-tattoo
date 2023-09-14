"use client";
import { useRef, useEffect, useState } from "react";
import styles from "./styles.module.scss";

const Studio = () => {
  const container = useRef(null);
  const stickyMask = useRef(null);

  const initialMaskSize = 1;
  const targetMaskSize = 20;
  const easing = 0.15;
  let easedScrollProgress = 0;

  const getScrollProgress = () => {
    const scrollProgress =
      stickyMask.current.offsetTop /
      (container.current.getBoundingClientRect().height - window.innerHeight);
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress;
  };

  const updateMaskSize = () => {
    const maskSizeProgress = targetMaskSize * getScrollProgress();
    const newSize = (initialMaskSize + maskSizeProgress) * 100 + "%";
    stickyMask.current.style.maskSize = newSize;
    stickyMask.current.style.webkitMaskSize = newSize;
  };

  useEffect(() => {
    let animationFrame;
    const handleScroll = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateMaskSize);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div ref={container} className={styles.container}>
        <div ref={stickyMask} className={styles.stickyMask}>
          <img src="/studio4.webp" alt="Photo of the studio" />
        </div>
      </div>
    </main>
  );
};

export default Studio;
