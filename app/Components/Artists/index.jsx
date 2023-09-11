"use client";

import styles from "./styles.module.scss";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Artists = () => {
  const container = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      gsap.from(img1Ref.current, {
        y: "-100%",
        opacity: 0,
        scrollTrigger: {
          trigger: img1Ref.current,
          start: "bottom bottom",
          end: "center top",
          scrub: true,
        },
      });
      gsap.from(img2Ref.current, {
        x: "-100%",
        y: "150%",
        scale: 0,
        opacity: 0,

        scrollTrigger: {
          trigger: img1Ref.current,
          start: "top bottom",
          end: "center top",
          scrub: true,
        },
      });
      gsap.from(img3Ref.current, {
        x: "-150%",
        y: "150%",
        scale: 0,
        opacity: 0,

        scrollTrigger: {
          trigger: img1Ref.current,
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
        <div className={styles.imgPair}>
          <img ref={img1Ref} src="/cyber.jpg" alt="photo of Eduard Stancu" />
          <a href="https://www.instagram.com/ed_does" target="_blanc">
            @ed_does
          </a>
        </div>
        <div className={styles.imgPair}>
          <img ref={img2Ref} src="/cyber.jpg" alt="photo of Radu" />
          <a href="https://www.instagram.com/russetattoo" target="_blanc">
            @rusetatoo
          </a>
        </div>
        <div className={styles.imgPair}>
          <img ref={img3Ref} src="/cyber.jpg" alt="photo of Mihaela" />
          <a href="https://www.instagram.com/sevilens_craft" target="_blanc">
            @sevilens_craft
          </a>
        </div>
      </div>
    </section>
  );
};

export default Artists;
