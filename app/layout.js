"use client";

import { useState } from "react";
import Navbar from "./Components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Contact from "./Components/Contact";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
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
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar lenisInstance={lenis} />
        {children}
        <Contact />
      </body>
    </html>
  );
}
