"use client";
import styles from "./styles.module.scss";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";


const Hero = () => {
  const imageRef = useRef(null);
  const coverRef = useRef(null);


  useLayoutEffect(() => {
    gsap.to(coverRef.current, {
      duration: 1.2,
      x: "-100%",
      ease: "expo.inOut",
      delay: 0.2,
    });
  }, []);
  return (
    <section className={styles.hero}>
      <div className={styles.cover} ref={coverRef}></div>
      <img src="/hero.jpg" alt="Hero image" ref={imageRef} />
      <h2>we make cool art that lasts forever.</h2>
    </section>
  );
};

export default Hero;
