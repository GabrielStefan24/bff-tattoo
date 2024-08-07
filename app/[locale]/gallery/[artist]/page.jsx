"use client";
import { artistData } from "../../../Data/artistData";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";
import { opacity } from "../variants";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useRef, useLayoutEffect, useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import { firstRow, secondRow, thirdRow } from "@/app/Data/imageData";
import { useTranslations } from "next-intl";

const Artist = () => {
  const pathname = usePathname();
  const coverRef = useRef(null);
  const textRef = useRef(null);
  const carouselRef = useRef(null);
  const [images, setImages] = useState([]);

  const t = useTranslations("About");
  useLayoutEffect(() => {
    gsap.to(coverRef.current, {
      duration: 1.2,
      y: "-100%",
      ease: "expo.inOut",
      delay: 0.2,
    });
    gsap.to(textRef.current, {
      duration: 1.2,
      y: "100%",
      ease: "expo.inOut",
      delay: 0.6,
    });
  }, []);

  const currentArtist = pathname.split("/").pop();
  const data = artistData.find((artist) => artist.path === currentArtist);

  useEffect(() => {
    switch (currentArtist) {
      case "Mihaela":
        setImages(firstRow);
        break;
      case "Radu":
        setImages(secondRow);
        break;
      case "Eduard":
        setImages(thirdRow);
        break;
      default:
        setImages([]);
    }
  }, [currentArtist]);

  return (
    <>
      <section className={styles.section}>
        <div className={styles.imgContainer}>
          <div className={styles.imgPair}>
            <div className={styles.cover} ref={coverRef}></div>
            <img src={`${data.src2}`} alt="photo of Eduard Stancu" />
          </div>
        </div>

        <div className={styles.about}>
          <motion.h1 variants={opacity} initial="initial" animate="enter">
            <span> {data.name}</span>
          </motion.h1>
          <div className={styles.detailsContainer}>
            <div className={styles.cover} ref={textRef}></div>
            <p>{t(data.internationalization)}</p>
          </div>
        </div>
      </section>
      <motion.section className={styles.carousel} ref={carouselRef}>
        <h1>
          <span>portfolio</span>
        </h1>
        <motion.div
          drag="x"
          dragConstraints={carouselRef}
          className={styles.innerCarousel}
        >
          {images.map((img, index) => (
            <div key={index} className={styles.carouselImg}>
              <img src={img.src} alt="image of a tattoo" />
            </div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
};

export default Artist;
