"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const site = "https://www.angelydub.com";

const pages = [
  { label: "My Story", href: `${site}/my-story` },
  { label: "Podcasts", href: `${site}/podcasts` },
  { label: "Classes", href: `${site}/classes` },
  { label: "Community", href: `${site}/community` },
];

const linkClass =
  "font-sans text-[14px] tracking-[0.01em] text-brown transition-opacity hover:opacity-60";

const joinClass =
  "inline-flex min-h-11 items-center bg-brown px-5 font-sans text-[14px] font-medium tracking-[0.16em] text-cream uppercase";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [raised, setRaised] = useState(false);

  useEffect(() => {
    const onScroll = () => setRaised(window.scrollY > 8);
    onScroll();

    const onClick = (event: MouseEvent) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }
      const link = (event.target as Element | null)?.closest("a");
      const href = link?.getAttribute("href");
      if (!href?.startsWith("#") || href === "#") return;
      const target = document.getElementById(decodeURIComponent(href.slice(1)));
      if (!target) return;
      event.preventDefault();
      if (location.hash !== href) history.pushState(null, "", href);

      const root = document.documentElement;
      root.style.scrollBehavior = "auto";
      const destination = () => {
        const margin = Number.parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
        return target.getBoundingClientRect().top + window.scrollY - margin;
      };
      const finish = () => {
        root.style.scrollBehavior = "";
      };
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) {
        window.scrollTo(0, destination());
        finish();
        return;
      }

      const start = window.scrollY;
      const duration = 780;
      const began = performance.now();
      const tick = () => {
        const progress = Math.min((performance.now() - began) / duration, 1);
        const eased = 1 - (1 - progress) ** 3;
        window.scrollTo(0, start + (destination() - start) * eased);
        if (progress < 1) window.setTimeout(tick, 16);
        else finish();
      };
      tick();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", onClick, true);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-brown/10 bg-cream text-brown transition-shadow duration-300 ${
        raised ? "shadow-[0_10px_30px_rgba(93,55,34,0.06)]" : "shadow-none"
      }`}
    >
      <div className="mx-auto hidden h-[72px] w-[min(1280px,calc(100%-48px))] items-center lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <nav aria-label="Angely Dub" className="flex flex-col items-start gap-1">
          <ul className="flex flex-wrap gap-x-5">
            {pages.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={linkClass}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={`${site}/preset-collection`} className={linkClass}>
            Lightroom Presets
          </a>
        </nav>

        <Logo />

        <div className="flex items-center justify-end gap-4">
          <a href={`${site}/account/login`} className={linkClass}>
            Login
          </a>
          <a href="#pricing" className={joinClass}>
            Join
          </a>
        </div>
      </div>

      <div className="flex h-[72px] items-center justify-between px-5 lg:hidden">
        <Logo />
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-brown"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden className="flex w-5 flex-col gap-1.5">
            <span className="h-px w-full bg-brown" />
            <span className="h-px w-full bg-brown" />
            <span className="h-px w-full bg-brown" />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-brown/10 bg-cream px-5 py-4 lg:hidden"
          aria-label="Angely Dub"
        >
          <ul className="flex flex-col">
            {pages.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="block py-3 text-brown">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`${site}/preset-collection`} className="block py-3 text-brown">
                Lightroom Presets
              </a>
            </li>
            <li>
              <a href={`${site}/account/login`} className="block py-3 text-brown">
                Login
              </a>
            </li>
            <li className="pt-2">
              <a href="#pricing" className={joinClass} onClick={() => setOpen(false)}>
                Join
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function Logo() {
  return (
    <a
      href="https://angelydub.com"
      className="shrink-0 transition-opacity duration-300 hover:opacity-70"
      aria-label="Angely Dub, back to angelydub.com"
    >
      <Image
        src="/NewLogo.webp"
        alt=""
        width={1206}
        height={467}
        priority
        className="h-12 w-auto"
      />
    </a>
  );
}
