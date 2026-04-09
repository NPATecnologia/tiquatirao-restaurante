"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap-setup";
import { MENU_CATEGORIES, SITE } from "@/lib/constants";

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
            Cardapio
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
              className="rounded-lg border border-border bg-surface-elevated p-8 transition-colors hover:border-border-accent"
            >
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
            Peca pelo iFood
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
