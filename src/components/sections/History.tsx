"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap-setup";
import { HISTORY_EVENTS } from "@/lib/constants";

export function History() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll<HTMLElement>("[data-timeline-item]");
    if (items.length === 0) return;

    if (prefersReducedMotion()) {
      items.forEach((item) => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(items, { y: 20, opacity: 0 });

      gsap.to(items, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.08,
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
      id="historia"
      className="bg-surface-light py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block text-sm font-medium uppercase tracking-[0.3em] text-brasa">
            Desde 1997
          </span>
          <h2 className="font-display text-3xl leading-tight text-foreground lg:text-4xl">
            Nossa Jornada
          </h2>
        </div>

        {/* Compact timeline — horizontal line with vertical items */}
        <div className="relative">
          {/* Horizontal connector line */}
          <div className="absolute left-0 right-0 top-[7px] hidden h-px bg-gradient-to-r from-transparent via-brasa/30 to-transparent lg:block" aria-hidden="true" />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {HISTORY_EVENTS.map((event) => (
              <div
                key={event.year}
                data-timeline-item
                className="relative"
              >
                {/* Dot on horizontal line (desktop) */}
                <div className="mb-4 hidden lg:block">
                  <div className="mx-auto h-[14px] w-[14px] rounded-full border-2 border-surface-light bg-brasa shadow-[0_0_0_4px_rgba(232,130,42,0.1)]" />
                </div>

                {/* Card */}
                <div className="rounded-lg border border-border bg-surface-elevated p-4 transition-colors hover:border-border-accent">
                  <p className="font-display text-2xl font-bold text-brasa/80">
                    {event.year}
                  </p>
                  <h3 className="font-display mt-1 text-base text-foreground">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
