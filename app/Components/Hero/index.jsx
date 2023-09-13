"use client";
import styles from "./styles.module.scss";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";


const Hero = () => {
  const imageRef = useRef(null);
  const coverRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    gsap.to(coverRef.current, {
      duration: 2,
      x: "-100%",
      ease: "power3.out",
      delay: 0.8,
    });
    gsap.fromTo(
      textRef.current,
      { y: "100%" },
      {
        duration: 2,
        y: "0%",
        ease: "power4.out",
        delay: 0.2,
      }
    );
  }, []);
  return (
    <section className={styles.hero}>
      <div className={styles.cover} ref={coverRef}></div>
      <img src="/hero.jpg" alt="Hero image" ref={imageRef} />
      <div className={styles.textMask}>
        <h1 ref={textRef}>BFF TATTOO</h1>
      </div>
      <h2>we make cool shit that lasts forever.</h2>
    </section>
  );
};

export default Hero;
