"use client";
import styles from "./styles.module.scss";
import { motion, useInView } from "framer-motion";
import { moveLeft, slideRight } from "./variants";
import { useRef } from "react";

const Artists = () => {
  const titleRef = useRef(null);
  const imgRef = useRef(null);

  const titleInView = useInView(titleRef, { amount: 0.3 });
  const imgInView = useInView(imgRef, { amoun: 0.2 });

  return (
    <section className={styles.artists}>
      <motion.h2
        variants={moveLeft}
        initial="initial"
        animate={titleInView && "enter"}
        ref={titleRef}
      >
        <span>A</span>rtists
      </motion.h2>
      <div className={styles.imgContainer} ref={imgRef}>
        <div className={styles.imgPair}>
          <motion.div
            className={styles.imgMask}
            variants={slideRight}
            initial="initial"
            animate={imgInView && "enter"}
          ></motion.div>
          <img src="/cyber.jpg" alt="photo of Eduard Stancu" />
        </div>
        <div className={styles.imgPair}>
          <motion.div
            className={styles.imgMask}
            variants={slideRight}
            initial="initial"
            animate={imgInView && "enter"}
          ></motion.div>
          <img src="/cyber.jpg" alt="photo" />
        </div>
        <div className={styles.imgPair}>
          <motion.div
            className={styles.imgMask}
            variants={slideRight}
            initial="initial"
            animate={imgInView && "enter"}
          ></motion.div>
          <img src="/cyber.jpg" alt="etc" />
        </div>
      </div>
    </section>
  );
};

export default Artists;
