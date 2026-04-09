"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap-setup";
import { SITE } from "@/lib/constants";

export function CTAFinal() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const ctx = gsap.context(() => {
      gsap.from(content.children, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
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
      className="relative overflow-hidden py-24 lg:py-32"
    >
      {/* Background radial decoration */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(26,75,124,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(232,130,42,0.08) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 text-center"
      >
        <div className="section-ornament mb-8">
          <span className="text-brasa/40 text-sm">⚓</span>
        </div>

        <h2 className="font-display text-4xl leading-tight text-foreground lg:text-6xl">
          Venha Conhecer o Tiquatirão
        </h2>

        <p className="max-w-2xl text-lg leading-relaxed text-silver">
          Reserve sua mesa e descubra os sabores do mar e da brasa que conquistam
          São Paulo há mais de 27 anos.
        </p>

        <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={SITE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-brasa px-8 py-4 text-lg font-semibold text-foreground transition-colors hover:bg-brasa-light"
          >
            Reservar pelo WhatsApp
          </a>

          <a
            href={`tel:+${SITE.phoneClean}`}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-foreground/20 px-8 py-4 text-lg font-semibold text-foreground transition-colors hover:border-foreground/40 hover:bg-foreground/5"
          >
            Ligar Agora
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brasa/20 to-transparent" aria-hidden="true" />
    </section>
  );
}
