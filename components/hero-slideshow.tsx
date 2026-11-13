"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = [
  { src: "/images/hero-1.jpg", alt: "Angely Dub speaking with a microphone, standing" },
  { src: "/images/hero-2.jpg", alt: "Angely Dub mid-talk on a panel couch" },
  { src: "/images/hero-3.jpg", alt: "Angely Dub with an Access Travel tote, smiling" },
  { src: "/images/hero-4.jpg", alt: "Angely Dub laughing with the community" },
  { src: "/images/hero-5.jpg", alt: "Angely Dub close-up, speaking" },
  { src: "/images/hero-6.jpg", alt: "Angely Dub full-length with luggage" },
];

const HOLD_MS = 5000;

export function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [reduce, setReduce] = useState<boolean | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduce(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduce !== false) return;

    let timer = 0;
    const stop = () => window.clearInterval(timer);
    const start = () => {
      stop();
      timer = window.setInterval(() => {
        setActive((current) => (current + 1) % SLIDES.length);
      }, HOLD_MS);
    };

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    if (!document.hidden) start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduce]);

  return (
    <div className="relative aspect-[5/4] w-full overflow-hidden md:aspect-[4/5]">
      {SLIDES.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          sizes="(max-width: 768px) 100vw, 42vw"
          {...(index === 0
            ? { priority: true as const, fetchPriority: "high" as const }
            : { loading: "lazy" as const, fetchPriority: "auto" as const })}
          aria-hidden={index === active ? undefined : true}
          className="hero-slide object-cover object-[center_20%]"
          style={{
            opacity: index === active ? 1 : 0,
            zIndex: index === active ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
}
