"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export function FaqList() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="border-t border-brown/15">
      {faqs.map((item, index) => {
        const expanded = open === index;
        return (
          <div key={item.q} className="border-b border-brown/15">
            <h3>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 py-4 text-left md:gap-6 md:py-5"
                aria-expanded={expanded}
                onClick={() => setOpen(expanded ? null : index)}
              >
                <span className="subhead text-[1.05rem] text-brown md:text-[1.6rem]">
                  {item.q}
                </span>
                <span
                  aria-hidden
                  className={`grid h-10 w-10 shrink-0 place-items-center font-sans text-2xl leading-none text-brown transition-transform duration-300 ${expanded ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <div className="max-w-2xl pb-5 pr-12 text-[15px] leading-[1.55] text-ink/80 md:pb-6 md:pr-14 md:text-[18px] md:leading-[1.65]">{item.a}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
