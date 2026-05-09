"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, prefersReducedMotion } from "@/lib/gsap-setup";

// TODO: substituir por foto real do Chef Marco Falcão quando cliente enviar.
// Placeholder SVG digno em /assets/familia/chef-marco-falcao.svg.
// Specs registradas em docs/TODO-assets.md.

export function Chef() {
  const sectionRef = useRef<HTMLElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const copy = copyRef.current;
    const photo = photoRef.current;
    const quote = quoteRef.current;
    if (!section || !copy || !photo || !quote) return;

    if (prefersReducedMotion()) {
      gsap.set([copy.children, photo, quote], { opacity: 1, y: 0, x: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      // Foto: fade + slide suave
      gsap.from(photo, {
        opacity: 0,
        y: 32,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      // Eyebrow + título + badge + parágrafo: stagger vertical
      const copyItems = Array.from(copy.children).filter(
        (el) => el !== quote
      ) as HTMLElement[];

      gsap.from(copyItems, {
        opacity: 0,
        y: 16,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Citação: slide lateral sutil
      gsap.from(quote, {
        opacity: 0,
        x: -24,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.35,
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="chef"
      aria-labelledby="chef-title"
      className="border-b border-border bg-surface py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Copy — esquerda (7/12 desktop) */}
          <div
            ref={copyRef}
            className="order-2 flex flex-col lg:order-1 lg:col-span-7"
          >
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.3em] text-brasa">
              Ao lado da família Mota desde o início
            </span>

            <h2
              id="chef-title"
              className="font-display mb-5 text-4xl leading-[1.05] text-foreground md:text-5xl lg:text-6xl"
            >
              Chef Marco Falcão
            </h2>

            <span className="mb-7 inline-flex w-fit items-center rounded-full border border-border px-4 py-1.5 text-[11px] uppercase tracking-[0.15em] text-foreground/70 md:text-xs">
              Chef fundador — desde 1997
            </span>

            <p className="mb-8 max-w-xl text-[17px] leading-relaxed text-silver md:text-lg lg:text-xl lg:leading-[1.6]">
              Há 27 anos assina os pratos do Tiquatirão. A Paella Valenciana
              que virou tradição de domingo foi criação dele. Quem conhece,
              sabe: a cozinha aqui não tem pressa. Tem tempo — o mesmo que o
              açafrão, o camarão e a panela de ferro exigem.
            </p>

            <blockquote
              ref={quoteRef}
              className="relative mb-8 max-w-xl border-l-2 border-brasa pl-5 md:pl-6"
            >
              <p className="font-display text-xl italic leading-snug text-foreground md:text-2xl lg:text-[28px]">
                <span className="text-brasa/80" aria-hidden="true">
                  &ldquo;
                </span>
                A paella sai quando a mesa tá completa. Sem pressa.
                <span className="text-brasa/80" aria-hidden="true">
                  &rdquo;
                </span>
              </p>
              <footer className="mt-3 text-xs uppercase tracking-[0.2em] text-muted">
                — Marco Falcão
              </footer>
            </blockquote>

            <a
              href="#historia"
              className="group inline-flex w-fit items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-brasa transition-colors hover:text-brasa-light"
            >
              <span>conhecer a história</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>

          {/* Foto — direita (5/12 desktop) */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <div
              ref={photoRef}
              className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-lg border border-border shadow-2xl shadow-black/40 md:max-w-none lg:aspect-[4/5]"
            >
              <Image
                src="/assets/familia/chef-marco-falcao.svg"
                alt="Retrato do Chef Marco Falcão, na cozinha do Tiquatirão desde 1997"
                fill
                sizes="(min-width: 1024px) 40vw, (min-width: 768px) 60vw, 100vw"
                className="object-cover"
              />
              {/* Vignette editorial inferior */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
