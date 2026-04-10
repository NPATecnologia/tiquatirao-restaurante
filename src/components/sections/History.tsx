"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap-setup";
import { HISTORY_EVENTS } from "@/lib/constants";

export function History() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll<HTMLElement>("[data-timeline-card]");
    if (cards.length === 0) return;

    if (prefersReducedMotion()) {
      cards.forEach((card) => {
        card.style.opacity = "1";
        card.style.transform = "translate(0, 0)";
      });
      return;
    }

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        const fromLeft = i % 2 === 0;

        gsap.set(card, {
          x: fromLeft ? -40 : 40,
          opacity: 0,
        });

        gsap.to(card, {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            once: true,
          },
        });
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="historia"
      className="bg-surface-light py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.3em] text-brasa">
            Desde 1997
          </span>
          <h2 className="font-display text-4xl leading-tight text-foreground lg:text-5xl">
            Nossa Jornada
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="timeline-line" />

          <div className="space-y-12 lg:space-y-16">
            {HISTORY_EVENTS.map((event, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={event.year}
                  data-timeline-card
                  className="relative grid grid-cols-1 lg:grid-cols-2 lg:gap-16"
                >
                  {/* Node on the line */}
                  <div
                    className="timeline-node"
                    style={{ top: "2rem" }}
                  />

                  {/* Card placement: on desktop, alternate sides */}
                  <div
                    className={`
                      relative ml-10 lg:ml-0
                      ${isLeft ? "lg:col-start-1 lg:pr-16 lg:text-right" : "lg:col-start-2 lg:pl-16"}
                    `}
                  >
                    <div className="card-glow rounded-lg border border-border bg-surface-elevated p-6 lg:p-8">
                      {/* Large background year */}
                      <span
                        className="pointer-events-none absolute top-4 font-display text-6xl font-bold text-brasa/20 select-none lg:text-7xl"
                        style={isLeft ? { right: "1.5rem" } : { left: "1.5rem" }}
                        aria-hidden="true"
                      >
                        {event.year}
                      </span>

                      {/* Content */}
                      <div className="relative z-10">
                        <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-brasa">
                          {event.year}
                        </p>
                        <h3 className="font-display mb-3 text-xl text-foreground lg:text-2xl">
                          {event.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-silver">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Empty spacer for the opposite column (desktop only) */}
                  {isLeft && <div className="hidden lg:col-start-2 lg:block" />}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
