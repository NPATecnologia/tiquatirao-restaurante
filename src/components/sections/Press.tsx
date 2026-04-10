"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap-setup";
import { PRESS_MENTIONS } from "@/lib/constants";

function ExternalLinkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-muted"
      aria-hidden="true"
    >
      <path
        d="M5.25 2.333h-2.1c-.747 0-1.4 0-1.925.068-.548.07-1.025.222-1.4.597s-.527.852-.597 1.4C-.84 4.923-.84 5.576-.84 6.323v4.527c0 .747 0 1.4.068 1.925.07.548.222 1.025.597 1.4s.852.527 1.4.597c.525.068 1.178.068 1.925.068h4.527c.747 0 1.4 0 1.925-.068.548-.07 1.025-.222 1.4-.597s.527-.852.597-1.4c.068-.525.068-1.178.068-1.925v-2.1"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(2 0)"
      />
      <path
        d="M8.167 1.167h4.666m0 0v4.666m0-4.666L7 7"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Press() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll<HTMLElement>("[data-press-card]");
    if (cards.length === 0) return;

    if (prefersReducedMotion()) {
      cards.forEach((card) => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(cards, { y: 30, opacity: 0 });

      gsap.to(cards, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.3em] text-brasa">
            O que falam sobre nós
          </span>
          <h2 className="font-display text-4xl leading-tight text-foreground lg:text-5xl">
            Na Mídia
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PRESS_MENTIONS.map((mention) => (
            <a
              key={`${mention.outlet}-${mention.year}`}
              href={mention.url}
              target="_blank"
              rel="noopener noreferrer"
              data-press-card
              className="press-card group block"
            >
              {/* External link icon */}
              <span className="absolute right-4 top-4 opacity-60 sm:opacity-0 sm:transition-opacity sm:duration-300 sm:group-hover:opacity-100">
                <ExternalLinkIcon />
              </span>

              <p className="text-xs font-semibold uppercase tracking-widest text-brasa">
                {mention.outlet}
              </p>

              <h3 className="font-display mt-2 text-lg leading-snug text-foreground">
                {mention.title}
              </h3>

              <p className="mt-3 text-xs text-muted">
                {mention.year}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
