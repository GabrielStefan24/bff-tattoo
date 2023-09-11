"use client";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { useRouter } from "next/navigation";
import About from "./Components/About";
import Artists from "./Components/Artists";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  const router = useRouter();
  const [hideContent, setHideContent] = useState(true);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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
    }, 400);
  }, []);
  return (
    <>
      <main style={{ display: hideContent ? "none" : "" }}>
        <Navbar />
        <Hero />
        <About />
        <Artists />
      </main>
    </>
  );
}
