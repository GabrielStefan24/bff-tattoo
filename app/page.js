"use client";
import { useState } from "react";
import Preloader from "./Components/Preloader/Preloader";
import Main from "./Components/Main/Main";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className=" text-white">
      <AnimatePresence>
        {isLoading && <Preloader setIsLoading={setIsLoading} key="preloader" />}
      </AnimatePresence>
      {!isLoading && <Main />}
    </main>
  );
}
