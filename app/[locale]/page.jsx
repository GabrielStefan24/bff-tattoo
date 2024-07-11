"use client";
import { useEffect, useState } from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Artists from "../Components/Artists";
import Studio from "../Components/Studio";
import Gallery from "../Components/Gallery";
import Lenis from "@studio-freight/lenis";
import Preloader from "../Components/Preloader";
import CarouselSize from "../Components/GoogleCard";
import Faq from "../Components/Faq";
import Contact from "../Components/Contact";
import Navbar from "../Components/Navbar";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Checking localStorage
    const showPreloaderKey = "showPreloader";
    const lastVisit = localStorage.getItem(showPreloaderKey);
    const currentDate = new Date();
    const expiryDate = lastVisit
      ? new Date(JSON.parse(lastVisit).expiry)
      : null;

    if (!lastVisit || currentDate > expiryDate) {
      // No localStorage found or expiry date has passed
      setLoading(true);

      // Set new expiry date for 24 hours from now
      const tomorrow = new Date();
      tomorrow.setDate(currentDate.getDate() + 1);
      localStorage.setItem(
        showPreloaderKey,
        JSON.stringify({ expiry: tomorrow })
      );
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <main>
      {loading ? (
        <Preloader setLoading={setLoading} />
      ) : (
        <>
          <Navbar></Navbar>
          <Hero />
          <About />
          <Artists />
          <Studio />
          <Gallery />
          <Faq />
          <CarouselSize />
          <Contact></Contact>
        </>
      )}
    </main>
  );
}
