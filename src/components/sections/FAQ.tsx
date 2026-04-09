"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap-setup";
import { FAQ_ITEMS } from "@/lib/constants";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`shrink-0 text-muted transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path d="M5 7.5l5 5 5-5" />
    </svg>
  );
}

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const toggleItem = useCallback((index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  }, []);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const section = sectionRef.current;
    const list = listRef.current;
    if (!section || !list) return;

    const items = list.querySelectorAll("[data-faq-item]");
    if (items.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.from(items, {
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="bg-surface py-24 lg:py-32"
    >
      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.3em] text-brasa">
            Dúvidas
          </span>
          <h2 className="font-display text-4xl leading-tight text-foreground lg:text-5xl">
            Perguntas Frequentes
          </h2>
        </div>

        {/* Accordion */}
        <div ref={listRef} role="list">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = activeIndex === index;
            const panelId = `faq-panel-${index}`;
            const triggerId = `faq-trigger-${index}`;

            return (
              <div
                key={triggerId}
                data-faq-item
                className="border-b border-border"
                role="listitem"
              >
                <h3>
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(index)}
                    className="flex min-h-[44px] w-full items-center justify-between gap-4 py-5 text-left text-lg font-semibold text-foreground transition-colors hover:text-brasa"
                  >
                    <span>{item.question}</span>
                    <ChevronIcon open={isOpen} />
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-base leading-relaxed text-silver">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
