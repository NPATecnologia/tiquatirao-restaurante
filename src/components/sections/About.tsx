"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, prefersReducedMotion } from "@/lib/gsap-setup";

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

      gsap.set(image, { clipPath: "inset(100% 0 0 0)" });
      tl.to(
        image,
        {
          clipPath: "inset(0% 0 0 0)",
          duration: 1,
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
            Nossa História
          </span>
          <div className="section-ornament mt-2 mb-6"><span className="text-brasa/40 text-sm">⚓</span></div>

          <h2 className="font-display mb-6 text-4xl leading-tight text-foreground lg:text-5xl">
            Sabores do Mar Desde 1997
          </h2>

          <p className="mb-5 max-w-lg text-base leading-relaxed text-silver">
            Fundado em 1997 pelo Sr. José da Mota e seus filhos Kelly e Johnny,
            com o apoio do Chef Marco Falcão. O objetivo era levar para a Zona
            Leste de São Paulo um restaurante com sabores do mar e a energia
            praiana.
          </p>

          <p className="max-w-lg text-base leading-relaxed text-muted">
            Mais de duas décadas depois, o Tiquatirão segue fiel a sua missão:
            reunir famílias e amigos ao redor de pratos generosos, com
            ingredientes frescos do litoral e o calor inconfundível da brasa.
            Cada refeição é um convite para sentir o litoral sem sair da capital.
          </p>

          <blockquote className="mt-8 border-l-2 border-ocean pl-4">
            <p className="font-display text-lg italic text-ocean-light">
              &ldquo;Cada refeição é um convite para sentir o litoral sem sair da capital.&rdquo;
            </p>
          </blockquote>
        </div>

        {/* Image column */}
        <div
          ref={imageRef}
          className="image-reveal relative aspect-[4/5] overflow-hidden rounded-lg border border-border"
        >
          <Image
            src="/assets/fachada-entrada-logo-tiquatirao.jpg"
            alt="Fachada do restaurante Tiquatirão Mar e Brasa com letreiro iluminado"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
