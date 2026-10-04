"use client";

import { useState } from "react";
import { Photo } from "@/components/photo";

export function MentorCard({
  name,
  backName,
  image,
  alt,
  quote,
  bar,
  back,
  speed,
  role,
  bio,
}: {
  name: string;
  backName: string;
  image?: string;
  alt?: string;
  quote?: string;
  bar: string;
  back: string;
  speed?: number;
  role: string;
  bio: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <figure className="h-full">
      <div
        className={`mentor-flip h-full ${flipped ? "is-flipped" : ""}`}
        tabIndex={0}
        aria-label={`${backName}. ${role}. ${bio}`}
        onPointerUp={(event) => {
          if (event.pointerType !== "touch") return;
          setFlipped((open) => !open);
        }}
      >
        <div className="mentor-flip-inner">
          <div className={`mentor-front flex h-full min-h-full flex-col ${quote ? "bg-quote text-brown" : ""}`}>
            {image ? (
              <Photo
                src={image}
                alt={alt ?? ""}
                speed={speed}
                sizes="(max-width: 768px) 100vw, 25vw"
                className="aspect-[5/4] w-full md:aspect-[1/2] md:flex-1"
              />
            ) : (
              <p className="display flex-1 px-5 py-6 text-[1.35rem] leading-[1.2] sm:px-8 md:py-8 md:text-[2.3rem] md:leading-[1.15]">
                {quote}
              </p>
            )}
            <p
              className={`${bar} display grid min-h-12 place-items-center px-4 text-center text-[1.25rem] md:min-h-[4.5rem] md:text-[2.25rem]`}
            >
              {name}
            </p>
          </div>
          <div className={`mentor-back ${back}`}>
            <p className="display text-[1.55rem] leading-none md:text-[1.85rem]">{backName}</p>
            <p className="mt-3 font-sans text-[12px] leading-snug tracking-[0.04em] uppercase opacity-80 md:text-[13px]">
              {role}
            </p>
            <p className="mt-4 text-[14px] leading-[1.55] md:text-[15px] md:leading-[1.6]">{bio}</p>
          </div>
        </div>
      </div>
    </figure>
  );
}
