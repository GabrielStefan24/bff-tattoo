"use client";
import styles from "./styles.module.scss";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("Index");

  const refs = useRef([]);
  const container = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    createAnimations();
  }, []);

  const createAnimations = () => {
    gsap.to(refs.current, {
      opacity: 1,
      ease: "power3.out",

      stagger: 0.02,
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: " top bottom",
        scrub: 0.5,
      },
    });
  };

  const phrase1 = t("teamOfSpecialists");
  const phrase2 = t("pushBoundaries");

  const splitWords = (phrase) => {
    return phrase.split(" ").map((word, index) => (
      <p key={`word_${index}`}>
        {word.split("").map((letter, idx) => (
          <span ref={(el) => refs.current.push(el)} key={`letter_${idx}`}>
            {letter}
          </span>
        ))}
      </p>
    ));
  };

  return (
    <section className={styles.section}>
      <div className={styles.about} ref={container}>
        <div className={styles.aboutText}>
          {splitWords(phrase1)}
          <div className={styles.aboutSpan}>{splitWords(phrase2)}</div>
        </div>
      </div>
    </section>
  );
};

export default About;
