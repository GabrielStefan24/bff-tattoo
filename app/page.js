"use client";
import { useEffect, useState } from "react";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Artists from "./Components/Artists";
import Studio from "./Components/Studio";
import Gallery from "./Components/Gallery";
import Preloader from "./Components/Preloader";


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
