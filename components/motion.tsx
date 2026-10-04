"use client";

import { useEffect, useRef } from "react";

const beats = [
  ".eyebrow",
  "h2",
  ".copy",
  ".lead",
  "p.display",
  ".quote-row > li",
  "ol > li",
  ".chips > li",
  ".outcomes > li",
  "article",
  "figure",
  "blockquote",
  "dl > div",
  ".aspect-video",
].join(",");

export function Motion() {
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const sections = document.querySelectorAll("main > section:not(#top)");
    sections.forEach((section) => {
      section.classList.add("stage");
      const nodes = [...section.querySelectorAll<HTMLElement>(beats)];
      const buttons = [...section.querySelectorAll<HTMLElement>("a.inline-flex")].filter(
        (link) => !link.closest("article"),
      );
      const chosen = [...nodes, ...buttons].filter(
        (node, index, all) =>
          all.indexOf(node) === index && !all.some((other) => other !== node && other.contains(node)),
      );
      chosen.forEach((node, index) => {
        node.classList.add("beat");
        node.style.setProperty("--i", String(Math.min(index, 8)));
      });
    });

    const layers = [...document.querySelectorAll<HTMLElement>("[data-speed]")];
    let frame = 0;

    const reveal = () => {
      const view = window.innerHeight;
      sections.forEach((section) => {
        if (section.classList.contains("is-shown")) return;
        const rect = section.getBoundingClientRect();
        if (rect.top < view * 0.88 && rect.bottom > view * 0.08) section.classList.add("is-shown");
      });
    };

    const onScroll = () => {
      reveal();
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const view = window.innerHeight;
        const damp = window.innerWidth < 768 ? 0.55 : 1;
        for (const layer of layers) {
          const image = layer.querySelector("img");
          if (!image) continue;
          const rect = layer.getBoundingClientRect();
          if (rect.bottom < -80 || rect.top > view + 80) continue;
          const speed = Number(layer.dataset.speed) || 0;
          const center = rect.top + rect.height / 2 - view / 2;
          image.style.transform = `translate3d(0, ${center * speed * -0.18 * damp}px, 0)`;
        }
      });
    };

    reveal();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={bar} className="scroll-progress" aria-hidden />;
}
