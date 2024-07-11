"use client";

import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { rotate, slideUp } from "./variants";
import { firstRow, secondRow, thirdRow } from "../../Data/imageData";
import Button from "./(button)/index";

const Preloader = () => {
  const goToHome = () => {
    location.reload();
    window.scrollTo(0, 0);
  };

  return (
    <>
      <>
        <motion.section
          key="section"
          variants={rotate}
          initial="initial"
          animate="enter"
          className={styles.tiles}
        >
          <div className={styles.tile}>
            {firstRow.map((img, index) => (
              <div key={index} className={styles.tileImg}>
                <img src={img.src} alt="image of a tattoo" />
              </div>
            ))}
            {firstRow.map((img, index) => (
              <div key={index} className={styles.tileImg}>
                <img src={img.src} alt="image of a tattoo" />
              </div>
            ))}
          </div>
          <div
            className={styles.tile}
            style={{ transform: "translateX(-100%)" }}
          >
            {secondRow.map((img, index) => (
              <div key={index} className={styles.tileImg}>
                <img src={img.src} alt="image of a tattoo" />
              </div>
            ))}
            {secondRow.map((img, index) => (
              <div key={index} className={styles.tileImg}>
                <img src={img.src} alt="image of a tattoo" />
              </div>
            ))}
          </div>
          <div className={styles.tile}>
            {thirdRow.map((img, index) => (
              <div key={index} className={styles.tileImg}>
                <img src={img.src} alt="image of a tattoo" />
              </div>
            ))}
            {thirdRow.map((img, index) => (
              <div key={index} className={styles.tileImg}>
                <img src={img.src} alt="image of a tattoo" />
              </div>
            ))}
          </div>
        </motion.section>

        <div className={styles.gradient}>
          <motion.h1
            key="h1"
            variants={slideUp}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            Black Flag
          </motion.h1>
          <motion.h1
            key="h2"
            variants={slideUp}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            Tattoo Studio
          </motion.h1>
          <motion.div
            key="button"
            variants={slideUp}
            initial="initial"
            animate="enter"
            exit="exit"
            onClick={goToHome}
          >
            <Button />
          </motion.div>
        </div>
      </>
    </>
  );
};

export default Preloader;
