"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap-setup";
import { TESTIMONIALS } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Platform badge colors                                              */
/* ------------------------------------------------------------------ */

const PLATFORM_COLORS: Record<string, string> = {
  Google: "bg-[#4285F4]",
  TripAdvisor: "bg-[#34E0A1]",
  Facebook: "bg-[#1877F2]",
  iFood: "bg-[#EA1D2C]",
};

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function StarRating({ count }: { count: number }) {
  return (
    <div className="mb-4 flex gap-0.5 text-brasa" aria-label={`${count} estrelas`}>
      {Array.from({ length: count }, (_, i) => (
        <span key={i} aria-hidden="true">
          &#9733;
        </span>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll<HTMLElement>("[data-review]");
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
        stagger: 0.15,
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
      id="avaliacoes"
      className="py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-brasa">
            Avaliações
          </span>
          <h2 className="font-display text-4xl font-bold text-foreground lg:text-5xl">
            O Que Nossos Clientes Dizem
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              data-review
              className="card-glow press-card relative rounded-lg border border-border bg-surface-elevated p-8"
            >
              <span className="pointer-events-none absolute top-4 right-6 font-display text-6xl leading-none text-brasa/10 select-none" aria-hidden="true">
                &ldquo;
              </span>

              <StarRating count={testimonial.rating} />

              <blockquote className="mb-6">
                <p className="font-display text-lg italic leading-relaxed text-silver">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </blockquote>

              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted">
                  <span className={`inline-block h-2 w-2 rounded-full ${PLATFORM_COLORS[testimonial.platform] ?? "bg-muted"}`} aria-hidden="true" />
                  {testimonial.platform}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
