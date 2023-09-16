"use client";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Artists from "./Components/Artists";
import Studio from "./Components/Studio";
import Gallery from "./Components/Gallery";
import Lenis from "@studio-freight/lenis";
import Preloader from "./Components/Preloader";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.05,
      easing: function (t) {
        return t < 0.5
          ? 4 * t * t * t
          : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      },
    });

    setLenis(lenis);
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const hasLoadingBeenShown = sessionStorage.getItem("loadingShown");

    if (hasLoadingBeenShown === "true") {
      setLoading(false);
    } else {
      sessionStorage.setItem("loadingShown", "true");
    }
  }, []);

  return (
    <main>
      {loading ? (
        <Preloader setLoading={setLoading} />
      ) : (
        <>
          <Navbar lenisInstance={lenis} />
          <Hero />
          <About />
          <Artists />
          <Studio />
          <Gallery />
        </>
      )}
    </main>
  );
}
