
'use client'
import styles from "./styles.module.scss";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/ScrollTrigger";

const Artists = () => {
  const pair1Ref = useRef(null);
  const pair2Ref = useRef(null);
  const pair3Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pair1Ref.current,
        start: "top bottom",
        end: "center top",
        scrub: 0.5
      }
    });

    tl.from(pair1Ref.current, {
      y: "-100%",
      opacity: 0,
    })
    .from(pair2Ref.current, {
      x: "-100%",
      y: "150%",
      scale: 0,
      opacity: 0,
    })
    .from(pair3Ref.current, {
      x: "-150%",
      y: "150%",
      scale: 0,
      opacity: 0,
    });

    return () => {
      // Cleanup if the component is unmounted
      if (tl) tl.kill();
    };
  }, []);

  return (
    <section className={styles.artists}>
      <div className={styles.imgContainer}>
        <div className={styles.imgPair} ref={pair1Ref}>
          <a href="https://www.instagram.com/ed_does" target="_blank" rel="noopener noreferrer">
            <img src="/artist3.jpg" alt="photo of Eduard Stancu" />
          </a>
          <div className={styles.artistBio}>
            <p>Eduard Stancu</p>
            <p>Black & Grey</p>
          </div>
        </div>
        <div className={styles.imgPair} ref={pair2Ref}>
          <a href="https://www.instagram.com/russetattoo" target="_blank" rel="noopener noreferrer">
            <img src="/artist3.jpg" alt="photo of Radu" />
          </a>
          <div className={styles.artistBio}>
            <p>Radu</p>
            <p>Black & Grey</p>
          </div>
        </div>
        <div className={styles.imgPair} ref={pair3Ref}>
          <a href="https://www.instagram.com/sevilens_craft" target="_blank" rel="noopener noreferrer">
            <img src="/artist3.jpg" alt="photo of Mihaela" />
          </a>
          <div className={styles.artistBio}>
            <p>Mihaela</p>
            <p>Black & Grey</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artists;
