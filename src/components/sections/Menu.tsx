"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap-setup";
import { MENU_CATEGORIES, SITE } from "@/lib/constants";

function CategoryIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "anchor":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="5" r="3" />
          <line x1="12" y1="8" x2="12" y2="21" />
          <path d="M5 12H2a10 10 0 0020 0h-3" />
        </svg>
      );
    case "fish":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M6.5 12c0 0 3-6 9-6s3 6 3 6-3 6-9 6-3-6-3-6z" />
          <circle cx="16" cy="12" r="1" fill="currentColor" />
        </svg>
      );
    case "waves":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
          <path d="M2 6c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
          <path d="M2 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
          <path d="M2 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
        </svg>
      );
    case "flame":
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M12 2c0 0-8 7-8 13a8 8 0 0016 0c0-6-8-13-8-13z" />
          <path d="M12 22c-2 0-4-2-4-5 0-3 4-7 4-7s4 4 4 7c0 3-2 5-4 5z" />
        </svg>
      );
    default:
      return null;
  }
}

export function Menu() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const section = sectionRef.current;
    const header = headerRef.current;
    const cards = cardsRef.current;
    const cta = ctaRef.current;
    if (!section || !header || !cards || !cta) return;

    const ctx = gsap.context(() => {
      gsap.from(header.children, {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: header,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(cards.children, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: cards,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(cta, {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cta,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="cardapio"
      className="bg-surface py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div ref={headerRef} className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.3em] text-brasa">
            Cardápio
          </span>
          <h2 className="font-display text-4xl leading-tight text-foreground lg:text-5xl">
            Sabores do Mar & da Brasa
          </h2>
        </div>

        {/* Category grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {MENU_CATEGORIES.map((category) => (
            <div
              key={category.name}
              className="card-glow rounded-lg border border-border bg-surface-elevated p-8 transition-colors hover:border-border-accent"
            >
              <div className="mb-4 text-brasa/60">
                <CategoryIcon icon={category.icon} />
              </div>
              <h3 className="font-display mb-6 text-2xl text-brasa">
                {category.name}
              </h3>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-silver"
                  >
                    <span
                      className="size-1.5 shrink-0 rounded-full bg-brasa/40"
                      aria-hidden="true"
                    />
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="mt-12 text-center">
          <a
            href={SITE.ifood}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-brasa/30 px-8 py-3.5 text-sm font-semibold text-brasa transition-all hover:border-brasa hover:bg-brasa/10 active:scale-95"
          >
            Peça pelo iFood
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17L17 7" />
              <path d="M7 7h10v10" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
