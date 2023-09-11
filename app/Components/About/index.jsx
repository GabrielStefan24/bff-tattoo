"use client";
import Link from "next/link";
import styles from "./styles.module.scss";
import { motion, useInView } from "framer-motion";
import { slideRight } from "./variants";
import { useRef } from "react";

const About = () => {
  const aboutRef = useRef(null);
  const imgRef = useRef(null);
  const isInViewAbout = useInView(aboutRef, { amount: 0.5 });

  return (
    <>
      <section className={styles.section}>
        <div className={styles.about}>
          <p className={styles.aboutText}>
            We are a team of specialists, crafting designs across a spectrum of
            styles and complexities. We don’t just ink, we are intentional about
            drawing with surgical precision, creating exceptional masterpieces
            <span className={styles.aboutText}>
              on skin. We push the boundaries of tattoo artistry, and then
              venture even further, just for the thrill of it.
            </span>
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
