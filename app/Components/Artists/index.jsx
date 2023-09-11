import styles from "./styles.module.scss";
import { useRef, useLayoutEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Artists = () => {
  const imgRef = useRef(null);

  useLayoutEffect(() => {
   
      if (!imgRef.current) return;

      const imagePairs = imgRef.current.children;
      for (let i = 0; i < imagePairs.length; i++) {
        const image = imagePairs[i].querySelector("img");
        let animationProps;

        if (i === 0) {
          animationProps = { yPercent: -100 };
        } else {
          animationProps = { xPercent: -100 };
        }

        gsap.from(image, {
          ...animationProps,
          scrollTrigger: {
            trigger: imagePairs[i],
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        });
      }
  }, []);

  return (
    <section className={styles.artists}>
      <div className={styles.imgContainer} ref={imgRef}>
        <div className={styles.imgPair}>
          <img src="/cyber.jpg" alt="photo of Eduard Stancu" />
        </div>
        <div className={styles.imgPair}>
          <img src="/cyber.jpg" alt="photo" />
        </div>
        <div className={styles.imgPair}>
          <img src="/cyber.jpg" alt="etc" />
        </div>
      </div>
    </section>
  );
};

export default Artists;
