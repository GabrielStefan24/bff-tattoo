"use client";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { useRouter } from "next/navigation";
import About from "./Components/About";
import Artists from "./Components/Artists";
import Studio from "./Components/Studio";
import Gallery from "./Components/Gallery";
import { useRef } from "react";

export default function Home() {
  const router = useRouter();
  const [hideContent, setHideContent] = useState(true);
  const container = useRef(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        el: container.current,
        smooth: true,
        lerp: 0.15,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
          breakpoint: 768,
        },
      });
    })();

    const preloaderShown = sessionStorage.getItem("loadingShown");

    if (!preloaderShown) {
      router.push("/preloader");
    }
    setTimeout(() => {
      setHideContent(false);
    }, 700);
  }, []);
  return (
    <>
      <main ref={container} style={{ display: hideContent ? "none" : "" }}>
        <Navbar />
        <Hero />
        <About />
        <Artists />
        <Studio />
        <Gallery />
      </main>
    </>
  );
}
