"use client";
import styles from "./styles.module.scss";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Index");
  const imageRef = useRef(null);
  const coverRef = useRef(null);
  const text = useRef(null);

  useLayoutEffect(() => {
    gsap.to(coverRef.current, {
      duration: 1.2,
      x: "-100%",
      ease: "expo.inOut",
      delay: 0.2,
    });
    gsap.to(text.current, {
      opacity: 1,
      duration: 1.2,
      ease: "expot.inOut",
      delay: 1.4,
    });
  }, []);
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.cover} ref={coverRef}></div>
        <video
          src="/FinalVideo.mp4"
          alt="Hero image"
          ref={imageRef}
          autoPlay
          muted
          playsInline
          loop
        />
        <h1 ref={text}>{t("coolArt")}</h1>
      </section>
    </>
  );
};

export default Hero;
