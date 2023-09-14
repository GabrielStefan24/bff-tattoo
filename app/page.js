"use client";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { useRouter } from "next/navigation";
import About from "./Components/About";
import Artists from "./Components/Artists";
import Studio from "./Components/Studio";
import Gallery from "./Components/Gallery";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Home() {
  const router = useRouter();
  const [hideContent, setHideContent] = useState(true);
  
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      easing: function (t) {
        return t < 0.5
          ? 4 * t * t * t
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      },
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

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
      <main style={{ display: hideContent ? "none" : "" }}>
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

