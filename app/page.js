"use client";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import { useRouter } from "next/navigation";
import About from "./Components/About";
import Artists from "./Components/Artists";

export default function Home() {
  const router = useRouter();
  const [hideContent, setHideContent] = useState(true);
  useEffect(() => {
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
      <main
        className="text-white"
        style={{ display: hideContent ? "none" : "" }}
      >
        <Navbar />
        <Hero />
        <About />
        <Artists />
      </main>
    </>
  );
}
