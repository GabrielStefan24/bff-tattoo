"use client";

import styles from "./styles.module.scss";
import gsap from "gsap";
import { useRef } from "react";

const Artists = () => {
  const textRef = useRef(null);
  const container = useRef(null);
  const pair1Ref = useRef(null);
  const pair2Ref = useRef(null);
  const pair3Ref = useRef(null);

  return (
    <section className={styles.gallery}>
      <h1 ref={textRef}>CHOOSE YOUR ARTIST</h1>
      <div className={styles.imgContainer} ref={container}>
        <div className={styles.imgPair} ref={pair1Ref}>
          <a href="/gallery/eduard">
            <img src="/artist3.jpg" alt="photo of Eduard Stancu" />
          </a>
          <div className={styles.artistBio}>
            <p>Eduard Stancu</p>
            <p>Black & Grey</p>
          </div>
        </div>
        <div className={styles.imgPair} ref={pair2Ref}>
          <a href="/gallery/mihaela">
            <img src="/artist3.jpg" alt="photo of Mihaela" />
          </a>
          <div className={styles.artistBio}>
            <p>Mihaela Maier</p>
            <p>Black & Grey</p>
          </div>
        </div>
        <div className={styles.imgPair} ref={pair3Ref}>
          <a href="/gallery/ruse">
            <img src="/artist3.jpg" alt="photo of Radu" />
          </a>
          <div className={styles.artistBio}>
            <p>Ruse Radu</p>
            <p>Black & Grey</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artists;
