"use client";
import { useState } from "react";
import Preloader from "./Components/Preloader/Preloader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return <main className=" text-white">{isLoading && <Preloader />}</main>;
}
