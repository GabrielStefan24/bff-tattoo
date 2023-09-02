"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.scss";

import { firstRow, secondRow, thirdRow } from "../../Data/imageData";
const Preloader = () => {
  return (
    <section className={styles.tiles}>
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
      <div className={styles.gradient}>
        <h1>Kanye :(</h1>
      </div>
    </section>
  );
};

export default Preloader;
