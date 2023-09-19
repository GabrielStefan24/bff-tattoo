"use client";

import styles from "./styles.module.scss";
import { firstRow, secondRow, thirdRow } from "@/app/Data/imageData";
import gsap from "gsap";
import { useRef } from "react";

const Gallery = () => {
  const plane1 = useRef(null);
  const plane2 = useRef(null);
  const plane3 = useRef(null);

  let requestAnimationFrameId = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.05;

  const speed = 0.01;

  const managePlane = (e) => {
    const { movementX, movementY } = e;

    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };
  const lerp = (start, target, amount) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane3.current, { x: `+=${xForce}`, y: `+=${yForce}` });
    gsap.set(plane2.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });
    gsap.set(plane1.current, {
      x: `+=${xForce * 0.25}`,
      y: `+=${yForce * 0.25}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  return (
    <section
      className={styles.container}
      onMouseMove={(e) => {
        managePlane(e);
      }}
    >
      <div ref={plane1} className={styles.plane}>
        <a href="#">
          <img src={`${firstRow[5].src}`} alt="photo" />
        </a>
        <a href="#">
          <img src={`${firstRow[6].src}`} alt="photo" />
        </a>
        <a href="#">
          <img src={`${secondRow[0].src}`} alt="photo" />
        </a>
      </div>
      <div className={styles.plane} ref={plane2}>
        <a href="#">
          <img src={`${secondRow[2].src}`} alt="photo" />
        </a>
        <a href="#">
          <img src={`${secondRow[6].src}`} alt="photo" />
        </a>
        <a href="#">
          <img src={`${secondRow[9].src}`} alt="photo" />
        </a>
      </div>
      <div className={styles.plane} ref={plane3}>
        <a href="#">
          <img src={`${thirdRow[1].src}`} alt="photo" />
        </a>
        <a href="#">
          <img src={`${thirdRow[3].src}`} alt="photo" />
        </a>
      </div>

      <a
        className={styles.text}
        href="https://www.instagram.com/bf.ttt/"
        target="_blanc"
      >
        follow us
      </a>
    </section>
  );
};

export default Gallery;
