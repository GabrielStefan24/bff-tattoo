"use client";
import Link from "next/link";
import styles from "./styles.module.scss";
import { motion, useInView } from "framer-motion";
import { slideRight, rotate } from "./variants";
import { useRef } from "react";

const About = () => {
  const aboutRef = useRef(null);
  const imgRef = useRef(null);
  const isInViewAbout = useInView(aboutRef, { amount: 0.5 });
  const isInViewImg = useInView(imgRef, { amount: 0.2 });
  return (
    <>
      <section className={styles.section}>
        <motion.div
          className={styles.container}
          variants={rotate}
          initial="initial"
          animate={isInViewAbout && "enter"}
          ref={aboutRef}
        >
          <div className={styles.about}>
            <h2>about us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              molestiae alias est recusandae, voluptate nesciunt exercitationem
              dolores accusantium aperiam unde autem neque fugit voluptas iusto
              nihil, a error, totam ex! Provident rem officia libero aspernatur
            </p>
          </div>
          <Link href="/about">Learn more</Link>
        </motion.div>
        <div className={styles.imgContainer}>
          <img src="/test.jpg" alt="poza cu salonul" />
          <motion.div
            className={styles.imgMask}
            variants={slideRight}
            initial="initial"
            animate={isInViewImg && "enter"}
            ref={imgRef}
          ></motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
