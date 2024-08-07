"use client";

import styles from "./styles.module.scss";

import { opacity, opacityImg } from "./variants";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Artists = () => {
  const t = useTranslations("Gallery");
  return (
    <>
      <section className={styles.gallery}>
        <motion.h1 variants={opacity} initial="initial" animate="enter">
          {t("choose")}
        </motion.h1>
        <div className={styles.imgContainer}>
          <motion.div
            custom="1"
            className={styles.imgPair}
            variants={opacityImg}
            initial="initial"
            animate="enter"
          >
            <a href="gallery/Eduard">
              <img src="/Eduard.webp" alt="photo of Eduard Stancu" />
            </a>
            <div className={styles.artistBio}>
              <p>Eduard Stancu</p>
              <p>Black & Grey</p>
            </div>
          </motion.div>
          <motion.div
            custom="2"
            className={styles.imgPair}
            variants={opacityImg}
            initial="initial"
            animate="enter"
          >
            <a href="gallery/Mihaela">
              <img src="/Mihaela.webp" alt="photo of Mihaela" />
            </a>
            <div className={styles.artistBio}>
              <p>Mihaela Maier</p>
              <p>Black & Grey</p>
            </div>
          </motion.div>
          <motion.div
            custom="3"
            className={styles.imgPair}
            variants={opacityImg}
            initial="initial"
            animate="enter"
          >
            <a href="gallery/Radu">
              <img src="/Radu.webp" alt="photo of Radu" />
            </a>
            <div className={styles.artistBio}>
              <p>Ruse Radu</p>
              <p>Black & Grey</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Artists;
