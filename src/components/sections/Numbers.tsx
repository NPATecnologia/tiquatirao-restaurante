"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap-setup";
import { STATS } from "@/lib/constants";

function parseStatValue(value: string): { target: number; suffix: string; decimals: number } {
  const match = value.match(/^([\d.]+)(.*)$/);
  if (!match) return { target: 0, suffix: value, decimals: 0 };

  const numStr = match[1];
  const suffix = match[2];
  const target = parseFloat(numStr);
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;

  return { target, suffix, decimals };
}

export default function Numbers() {
  const sectionRef = useRef<HTMLElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll<HTMLElement>("[data-stat]");
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
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: "top 85%",
          once: true,
          onEnter: () => {
            STATS.forEach((stat, i) => {
              const el = counterRefs.current[i];
              if (!el) return;

              const { target, decimals } = parseStatValue(stat.value);
              const proxy = { val: 0 };

              gsap.to(proxy, {
                val: target,
                duration: 2,
                ease: "power2.out",
                delay: i * 0.15,
                onUpdate: () => {
                  el.textContent = proxy.val.toFixed(decimals);
                },
              });
            });
          },
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
      className="border-y border-border bg-surface-light py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, index) => {
            const { suffix } = parseStatValue(stat.value);
            return (
              <div key={stat.label} data-stat className="counter-glow relative text-center">
                <p className="pointer-events-none absolute inset-0 flex items-center justify-center font-display text-6xl font-bold text-ocean/20 select-none lg:text-7xl" aria-hidden="true">
                  {stat.label}
                </p>
                <p className="relative font-display text-4xl font-bold text-brasa lg:text-5xl">
                  <span ref={(el) => { counterRefs.current[index] = el; }}>0</span>{suffix}
                </p>
                <p className="relative mt-2 text-sm uppercase tracking-wider text-muted">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
