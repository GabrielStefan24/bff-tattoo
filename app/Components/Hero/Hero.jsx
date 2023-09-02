"use client";
import styles from "./styles.module.scss";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Hero = ({ isLoading }) => {
  const imageRef = useRef(null);
  const coverRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!isLoading) {
      gsap.to(coverRef.current, {
        duration: 3,
        x: "-100%",
        ease: "power4.out",
        delay: 1.5,
      });
      gsap.fromTo(
        textRef.current,
        { y: "100%" },
        {
          duration: 1.5,
          y: "0%",
          ease: "power4.out",
          delay: 2,
        }
      );
    }
  }, [isLoading]);
  return (
    <section className={styles.hero}>
      <div className={styles.cover} ref={coverRef}></div>
      <img src="/hero.jpg" alt="Hero image" ref={imageRef} />
      <div className={styles.textMask}>
        <h1 ref={textRef}>BFF TATTOO</h1>
      </div>
    </section>
  );
};

export default Hero;
