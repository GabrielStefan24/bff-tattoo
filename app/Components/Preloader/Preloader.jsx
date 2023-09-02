"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { rotate, slideUp } from "./variants";

import { firstRow, secondRow, thirdRow } from "../../Data/imageData";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <motion.section
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

          <div className={styles.tileImg}>
            <img src={firstRow[0].src} alt="image of a tattoo" />
          </div>
        </div>
        <div className={styles.tile} style={{ transform: "translateX(-25%)" }}>
          {secondRow.map((img, index) => (
            <div key={index} className={styles.tileImg}>
              <img src={img.src} alt="image of a tattoo" />
            </div>
          ))}

          <div className={styles.tileImg}>
            <img src={secondRow[0].src} alt="image of a tattoo" />
          </div>
        </div>
        <div className={styles.tile}>
          {thirdRow.map((img, index) => (
            <div key={index} className={styles.tileImg}>
              <img src={img.src} alt="image of a tattoo" />
            </div>
          ))}

          <div className={styles.tileImg}>
            <img src={thirdRow[0].src} alt="image of a tattoo" />
          </div>
        </div>
      </motion.section>
      <div className={styles.gradient}>
        <motion.h1 variants={slideUp} initial="initial" animate="enter">
          Kanye
        </motion.h1>
      </div>
      {isLoading && <div className={styles.black}></div>}
    </>
  );
};

export default Preloader;
