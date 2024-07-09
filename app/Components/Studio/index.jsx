"use client";
import { useRef, useLayoutEffect } from "react";
import styles from "./styles.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslations } from "next-intl";

const Studio = () => {
  const studioContainer = useRef(null);
  const stickyMask = useRef(null);
  const textRef = useRef(null);
  const t = useTranslations("Index");
  const initialMaskSize = 0.2;
  const targetMaskSize = 20;
  const easing = 0.05;
  let easedScrollProgress = 0;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animate);
    gsap.to(textRef.current, {
      opacity: 1,
      ease: "power4.out",
      duration: 3,

      scrollTrigger: {
        trigger: studioContainer.current,
        start: "top center  ",
        end: "bottom center",
        scrub: 0.1,
      },
    });
  }, []);

  const animate = () => {
    if (!stickyMask.current) return;

    // Check the window's width to determine the device size
    const windowWidth = window.innerWidth;
    let multiplier;

    if (windowWidth < 768) {
      multiplier = 30;
    } else {
      multiplier = 80;
    }

    const maskSizeProgress = (targetMaskSize * getScrollProgress()) / 10;
    stickyMask.current.style.webkitMaskSize =
      (initialMaskSize + maskSizeProgress) * multiplier + "%";

    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    if (!stickyMask.current || !studioContainer.current) return 0;

    const scrollProgress =
      stickyMask.current.offsetTop /
      (studioContainer.current.getBoundingClientRect().height -
        window.innerHeight);
    const delta = scrollProgress - easedScrollProgress;
    easedScrollProgress += delta * easing;
    return easedScrollProgress;
  };

  return (
    <section className={styles.main}>
      <div ref={studioContainer} className={styles.container}>
        <h2 ref={textRef}>{t("ourStudio")}</h2>
        <div ref={stickyMask} className={styles.stickyMask}>
          <img src="/studio4.webp" alt="Photo of the studio" />
        </div>
      </div>
    </section>
  );
};

export default Studio;
