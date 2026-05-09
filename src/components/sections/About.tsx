"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, prefersReducedMotion } from "@/lib/gsap-setup";
import { GENERATIONS, CHEF } from "@/lib/constants";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const chefRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const grid = gridRef.current;
    const chef = chefRef.current;
    if (!section || !header || !grid || !chef) return;

    if (prefersReducedMotion()) {
      // Estado final direto — sem animação
      gsap.set([header.children, grid.children, chef], { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      // Header (eyebrow + título + parágrafo)
      gsap.from(header.children, {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: header,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Cards das 3 gerações — stagger 0.15s
      gsap.from(grid.children, {
        opacity: 0,
        y: 24,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: grid,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Card do chef — entra depois, delay adicional
      gsap.from(chef, {
        opacity: 0,
        y: 24,
        duration: 0.6,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: chef,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="sobre" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div ref={headerRef} className="mx-auto mb-16 max-w-2xl text-center lg:mb-20">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.3em] text-brasa">
            Três gerações, uma mesa
          </span>
          <div className="section-ornament mt-2 mb-6">
            <span className="text-brasa/40 text-sm">⚓</span>
          </div>
          <h2 className="font-display mb-6 text-4xl leading-tight text-foreground lg:text-5xl">
            A família Mota recebe desde 1997
          </h2>
          <p className="text-base leading-relaxed text-silver">
            Sr. José fundou. Kelly e Johnny tocam a casa. Os netos já circulam pela cozinha.
            O Tiquatirão é feito de gente que cresceu entre a panela e a mesa.
          </p>
        </div>

        {/* Grid das 3 gerações */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12"
        >
          {GENERATIONS.map((gen) => (
            <article
              key={gen.name}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              {/* TODO: substituir por foto real fornecida pelo cliente */}
              <div className="relative mb-6 h-[120px] w-[120px] overflow-hidden rounded-full border border-border-accent lg:h-[160px] lg:w-[160px]">
                <Image
                  src={gen.image}
                  alt={gen.alt}
                  fill
                  sizes="(max-width: 1024px) 120px, 160px"
                  className="object-cover"
                  quality={90}
                />
              </div>

              <span className="mb-3 font-display text-sm uppercase tracking-[0.2em] text-brasa">
                {gen.generation}
              </span>

              <h3 className="font-display mb-3 text-2xl text-foreground lg:text-3xl">
                {gen.name}
              </h3>

              <p className="max-w-xs text-base leading-relaxed text-silver">
                {gen.role}
              </p>
            </article>
          ))}
        </div>

        {/* Separador + Card do Chef */}
        <div
          ref={chefRef}
          className="mt-16 border-t border-neutral-800/40 pt-16 lg:mt-20 lg:pt-20"
        >
          <article className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:gap-12 lg:text-left">
            {/* TODO: substituir por foto real fornecida pelo cliente */}
            <div className="relative h-[120px] w-[120px] shrink-0 overflow-hidden rounded-full border border-border-accent lg:h-[160px] lg:w-[160px]">
              <Image
                src={CHEF.image}
                alt={CHEF.alt}
                fill
                sizes="(max-width: 1024px) 120px, 160px"
                className="object-cover"
                quality={90}
              />
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <span className="mb-3 font-display text-sm uppercase tracking-[0.2em] text-brasa">
                {CHEF.eyebrow}
              </span>
              <h3 className="font-display mb-3 text-2xl text-foreground lg:text-3xl">
                {CHEF.name}
              </h3>
              <p className="max-w-xl text-base leading-relaxed text-silver">
                {CHEF.role}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
