"use client";
import styles from "./styles.module.scss";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";


const Hero = () => {
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
    <section className={styles.hero}>
      <div className={styles.cover} ref={coverRef}></div>
      <video
        src="/banner.mp4"
        alt="Hero image"
        ref={imageRef}
        autoPlay
        muted
        loop
      />
      <h1 ref={text}>we make cool art that lasts forever.</h1>
    </section>
  );
};

export default Hero;
