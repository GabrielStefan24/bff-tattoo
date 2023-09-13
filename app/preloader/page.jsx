"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { rotate, slideUp } from "./variants";
import { firstRow, secondRow, thirdRow } from "../Data/imageData";
import { useRouter } from "next/navigation";
import Button from "./(button)/Button";

const Preloader = () => {
  const [screen, setScreen] = useState(true);

  const router = useRouter();

  const goToHome = () => {
    sessionStorage.setItem("loadingShown", "true");
    router.push("/");
  };

  useEffect(() => {
    setTimeout(() => {
      setScreen(false);
    }, 1000);
  }, []);
  return (
    <>
      (
      <>
        <motion.section
          key="section"
          variants={rotate}
          initial="initial"
          animate="enter"
          className={styles.tiles}
          exit="exit"
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
            key="h1"
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

        {screen && <div className={styles.black}></div>}
      </>
      )
    </>
  );
};

export default Preloader;
