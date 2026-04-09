"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, prefersReducedMotion } from "@/lib/gsap-setup";
import { SIGNATURE_DISHES } from "@/lib/constants";

export function SignatureDishes() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scroll = scrollRef.current;
    if (!section || !scroll) return;

    const cards = scroll.querySelectorAll<HTMLElement>("[data-dish-card]");
    if (cards.length === 0) return;

    if (prefersReducedMotion()) {
      cards.forEach((card) => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(cards, { y: 40, opacity: 0 });

      gsap.to(cards, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
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
      className="py-24 lg:py-32"
    >
      {/* Header */}
      <div className="mx-auto mb-16 max-w-7xl px-6 text-center">
        <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.3em] text-brasa">
          Os favoritos da casa
        </span>
        <h2 className="font-display text-4xl leading-tight text-foreground lg:text-5xl">
          Pratos Assinatura
        </h2>
      </div>

      {/* Horizontal scroll */}
      <div
        ref={scrollRef}
        className="dishes-scroll pl-6 lg:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
      >
        {SIGNATURE_DISHES.map((dish) => (
          <article
            key={dish.name}
            data-dish-card
            className="dish-card w-[320px] flex-shrink-0 lg:w-[380px]"
          >
            {/* Image */}
            <div className="relative aspect-[4/3]">
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                sizes="(max-width: 1024px) 320px, 380px"
                className="object-cover"
              />

              {/* Tag badge — above the gradient overlay */}
              <span className="absolute right-3 top-3 z-10 rounded-full bg-brasa/20 px-3 py-1 text-xs font-medium text-brasa backdrop-blur-sm">
                {dish.tag}
              </span>
            </div>

            {/* Content — positioned over the ::after gradient */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-5">
              <h3 className="font-display text-xl text-foreground">
                {dish.name}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-silver">
                {dish.description}
              </p>
              <p className="mt-2 text-xs text-muted">
                Serve {dish.serves}
              </p>
            </div>
          </article>
        ))}

        {/* Right spacer so last card doesn't hug the edge */}
        <div className="w-6 flex-shrink-0 lg:w-12" aria-hidden="true" />
      </div>

      {/* Scroll hint */}
      <div className="mx-auto mt-6 max-w-7xl px-6 text-right">
        <span className="text-xs tracking-wide text-muted">
          Arraste para ver mais{" "}
          <span className="scroll-hint-icon inline-block">&rarr;</span>
        </span>
      </div>
    </section>
  );
}
