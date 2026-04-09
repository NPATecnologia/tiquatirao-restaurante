"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap-setup";
import { STATS } from "@/lib/constants";

export default function Numbers() {
  const sectionRef = useRef<HTMLElement>(null);

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
      className="border-y border-border bg-surface-light py-16"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} data-stat className="text-center">
              <p className="font-display text-4xl font-bold text-brasa lg:text-5xl">
                {stat.value}
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
