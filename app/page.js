"use client";
import { useState } from "react";
import Preloader from "./Components/Preloader/Preloader";
import Navbar from "./Components/Navbar";
import { AnimatePresence } from "framer-motion";
import Hero from "./Components/Hero/Hero";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main
      className=" text-white"
      style={{ backgroundColor: isLoading ? "black" : "" }}
    >
      <AnimatePresence>
        {isLoading && (
          <Preloader
            setIsLoading={setIsLoading}
            isLoading={isLoading}
            key="preloader"
          />
        )}
      </AnimatePresence>
      {!isLoading && <Navbar />}
      <Hero isLoading={isLoading} />
    </main>
  );
}
