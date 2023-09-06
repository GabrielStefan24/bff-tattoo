"use client";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero/Hero";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [hideContent, setHideContent] = useState(true);
  useEffect(() => {
    const preloaderShown = sessionStorage.getItem("loadingShown");

    if (!preloaderShown) {
      router.push("/preloader");
    }
    setHideContent(false);
  }, []);
  return (
    <>
      {hideContent ? (
        <div className="loading-spinner">Loading...</div>
      ) : (
        <main className="text-white">
          <Navbar />
          <Hero />
        </main>
      )}
    </>
  );
}
