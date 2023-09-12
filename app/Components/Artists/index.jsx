"use client";

import styles from "./styles.module.scss";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Artists = () => {
  const container = useRef(null);
  const pair1Ref = useRef(null);
  const pair2Ref = useRef(null);
  const pair3Ref = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      gsap.from(pair1Ref.current, {
        y: "-100%",
        opacity: 0,
        scrollTrigger: {
          trigger: pair1Ref.current,
          start: "bottom bottom",
          end: "center top",
          scrub: true,
        },
      });
      gsap.from(pair2Ref.current, {
        x: "-100%",
        y: "150%",
        scale: 0,
        opacity: 0,

        scrollTrigger: {
          trigger: pair1Ref.current,
          start: "top bottom",
          end: "center top",
          scrub: true,
        },
      });
      gsap.from(pair3Ref.current, {
        x: "-150%",
        y: "150%",
        scale: 0,
        opacity: 0,

        scrollTrigger: {
          trigger: pair1Ref.current,
          start: "top bottom",
          end: "center top",
          scrub: true,
        },
      });

      return () => {
        ctx.revert();
      };
    });
  });

  return (
    <section className={styles.artists}>
      <div className={styles.imgContainer} ref={container}>
        <div className={styles.imgPair} ref={pair1Ref}>
          <a href="https://www.instagram.com/ed_does" target="_blanc">
            <img src="/cyber.jpg" alt="photo of Eduard Stancu" />
          </a>
          <div className={styles.artistBio}>
            <p>Eduard Stancu</p>
            <p>Black & Grey</p>
          </div>
        </div>
        <div className={styles.imgPair} ref={pair2Ref}>
          <a href="https://www.instagram.com/russetattoo" target="_blanc">
            <img src="/cyber.jpg" alt="photo of Radu" />
          </a>
          <div className={styles.artistBio}>
            <p>Eduard Stancu</p>
            <p>Black & Grey</p>
          </div>
        </div>
        <div className={styles.imgPair} ref={pair3Ref}>
          <a href="https://www.instagram.com/sevilens_craft" target="_blanc">
            <img src="/cyber.jpg" alt="photo of Mihaela" />
          </a>
          <div className={styles.artistBio}>
            <p>Eduard Stancu</p>
            <p>Black & Grey</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artists;
