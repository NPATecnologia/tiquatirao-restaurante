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

const PARSED_STATS = STATS.map((stat) => ({
  ...stat,
  ...parseStatValue(stat.value),
}));

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
            PARSED_STATS.forEach((stat, i) => {
              const el = counterRefs.current[i];
              if (!el) return;

              const proxy = { val: 0 };

              gsap.to(proxy, {
                val: stat.target,
                duration: 2,
                ease: "power2.out",
                delay: i * 0.15,
                onUpdate: () => {
                  el.textContent = proxy.val.toFixed(stat.decimals);
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
      className="border-y border-border bg-surface-light py-12 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {PARSED_STATS.map((stat, index) => (
              <div key={stat.label} data-stat className="counter-glow text-center">
                <p className="font-display text-4xl font-bold text-brasa lg:text-5xl">
                  <span ref={(el) => { counterRefs.current[index] = el; }}>0</span>{stat.suffix}
                </p>
                <p className="mt-2 text-sm uppercase tracking-wider text-muted">
                  {stat.label}
                </p>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
