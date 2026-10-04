"use client";

import { useEffect, useRef, useState } from "react";
import { playGifOnce } from "@/lib/gif-playback";

export function Preloader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<"show" | "leave" | "gone">("show");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    const controller = new AbortController();
    let cancelled = false;
    root.style.overflow = "hidden";

    const whenLoaded = new Promise<void>((resolve) => {
      if (document.readyState === "complete") resolve();
      else window.addEventListener("load", () => resolve(), { once: true });
    });

    const whenPlayed = fetch("/Angely.gif")
      .then((response) => response.arrayBuffer())
      .then((buffer) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        return playGifOnce(new Uint8Array(buffer), canvas, controller.signal);
      });

    void Promise.all([whenLoaded, whenPlayed])
      .then(() => {
        if (cancelled) return;
        replayHero();
        setPhase("leave");
        window.setTimeout(() => {
          if (cancelled) return;
          root.style.overflow = previousOverflow;
          setPhase("gone");
        }, reduce ? 180 : 700);
      })
      .catch(() => {
        if (cancelled) return;
        root.style.overflow = previousOverflow;
        setPhase("gone");
      });

    return () => {
      cancelled = true;
      controller.abort();
      root.style.overflow = previousOverflow;
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      className={`preloader${phase === "leave" ? " is-leaving" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading Angely Dub"
    >
      <canvas ref={canvasRef} width={1206} height={467} aria-hidden="true" />
    </div>
  );
}

function replayHero() {
  document.querySelectorAll(".hero-kicker, .hero-line, .hero-fade, .hero-frame").forEach((node) => {
    const element = node as HTMLElement;
    element.style.animation = "none";
    void element.offsetWidth;
    element.style.animation = "";
  });
}
