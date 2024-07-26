"use client";

import { useEffect, useState } from "react";
import Countdown from "./components/Countdown";
import Hero from "./components/Hero";
import WeddingEvents from "./components/WeddingEvents";
import { RevealWrapper } from "next-reveal";

export default function Home() {
  const [currentOverflow, setCurrentOverflow] = useState("hidden");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.style.overflowY = currentOverflow;
  }, [currentOverflow]);

  return (
    <main className="max-w-[28.125rem] mx-auto">
      <RevealWrapper duration={1500}>
        <Hero setCurrentOverflow={setCurrentOverflow} />
      </RevealWrapper>
      <Countdown />
      <WeddingEvents />
    </main>
  );
}
