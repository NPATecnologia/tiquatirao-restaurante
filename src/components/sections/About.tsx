"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap-setup";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const section = sectionRef.current;
    const text = textRef.current;
    const image = imageRef.current;
    if (!section || !text || !image) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(text.children, {
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
      });

      tl.from(
        image,
        {
          x: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "<0.2"
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
        {/* Text column */}
        <div ref={textRef}>
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.3em] text-brasa">
            Nossa Historia
          </span>

          <h2 className="font-display mb-6 text-4xl leading-tight text-foreground lg:text-5xl">
            Sabores do Mar Desde 1997
          </h2>

          <p className="mb-5 max-w-lg text-base leading-relaxed text-silver">
            Fundado em 1997 pelo Sr. Jose da Mota e seus filhos Kelly e Johnny,
            com o apoio do Chef Marco Falcao. O objetivo era levar para a Zona
            Leste de Sao Paulo um restaurante com sabores do mar e a energia
            praiana.
          </p>

          <p className="max-w-lg text-base leading-relaxed text-muted">
            Mais de duas decadas depois, o Tiquatirao segue fiel a sua missao:
            reunir familias e amigos ao redor de pratos generosos, com
            ingredientes frescos do litoral e o calor inconfundivel da brasa.
            Cada refeicao e um convite para sentir o litoral sem sair da capital.
          </p>
        </div>

        {/* Image column */}
        <div
          ref={imageRef}
          className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border"
        >
          <Image
            src="/assets/fachada-entrada-logo-tiquatirao.jpg"
            alt="Fachada do restaurante Tiquatirao Mar e Brasa com letreiro iluminado"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
