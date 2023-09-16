"use client";
import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Artists from "./Components/Artists";
import Studio from "./Components/Studio";
import Gallery from "./Components/Gallery";
import Lenis from "@studio-freight/lenis";
import Preloader from "./Components/Preloader";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(
    sessionStorage.getItem("loadingShown") !== "true"
  );

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

    const hasLoadingBeenShown = sessionStorage.getItem("loadingShown");

    if (hasLoadingBeenShown === "true") {
      setLoading(false);
    }
  }, []);

  return (
    <>
      <main>
        {loading ? (
          <Preloader setLoading={setLoading} />
        ) : (
          <>
            {" "}
            <Navbar />
            <Hero />
            <About />
            <Artists />
            <Studio />
            <Gallery />
          </>
        )}
      </main>
    </>
  );
}

