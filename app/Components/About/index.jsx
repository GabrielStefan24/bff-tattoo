"use client";
import styles from "./styles.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const About = () => {
  const refs = useRef([]);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimations();
  }, []);

  const createAnimations = () => {
    gsap.to(refs.current, {
      opacity: 1,
      ease: "power2.out",
      transform: "translateY(0px) rotate(0deg)",
      stagger: 2,
      scrollTrigger: {
        trigger: container.current,
        start: "top",
        end: `+=${window.innerHeight / 1.2}`,

        scrub: true,
      },
    });
  };

  const phrase1 =
    "We are a team of specialists, crafting designs across a spectrum of styles and complexities. We don’t just ink, we are intentional about drawing with surgical precision, creating exceptional masterpieces on skin.";

  const phrase2 =
    " We push the boundaries of tattoo artistry, and then \
  venture even further, just for the thrill of it.";

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, index) => {
      const letters = splitLetters(word);
      body.push(<p key={`word_${index}`}>{letters}</p>);
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, index) => {
      letters.push(
        <span
          ref={(el) => {
            refs.current.push(el);
          }}
          key={`letter_${index}`}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <>
      <section className={styles.section}>
        <div className={styles.about} ref={container}>
          <div className={styles.aboutText}>
            {splitWords(phrase1)}
            <div className={styles.aboutSpan}>{splitWords(phrase2)}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
