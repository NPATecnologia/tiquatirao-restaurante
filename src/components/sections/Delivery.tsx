"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, prefersReducedMotion } from "@/lib/gsap-setup";
import { SITE } from "@/lib/constants";
import { IfoodIcon } from "@/components/ui/SocialIcons";

const FEATURES = [
  "Embalagem térmica",
  "Paella individual perfeita",
  "Entrega em toda a Zona Leste",
] as const;

function WhatsAppGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-4 w-4"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.47 1.33 4.98L2 22l5.24-1.43a9.88 9.88 0 0 0 4.8 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.83 9.83 0 0 0 12.04 2zm5.82 14.04c-.25.7-1.44 1.33-1.99 1.4-.53.07-1.19.1-1.92-.12-.44-.14-1.01-.32-1.74-.64-3.06-1.32-5.05-4.4-5.2-4.6-.15-.2-1.24-1.65-1.24-3.15 0-1.5.79-2.24 1.07-2.54.28-.3.6-.38.8-.38.2 0 .4 0 .57.01.18.01.43-.07.67.51.25.6.84 2.1.92 2.25.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.18-.32.4-.45.54-.15.15-.3.31-.13.61.18.3.8 1.3 1.7 2.1 1.17 1.04 2.16 1.36 2.46 1.51.3.15.48.13.66-.07.18-.2.76-.88.96-1.18.2-.3.4-.25.68-.15.28.1 1.77.83 2.07.98.3.15.5.22.58.35.08.13.08.77-.17 1.47z" />
    </svg>
  );
}

export default function Delivery() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageWrap = imageWrapRef.current;
    const text = textRef.current;
    const cta = ctaRef.current;
    if (!section || !imageWrap || !text || !cta) return;

    if (prefersReducedMotion()) {
      gsap.set(text.children, { opacity: 1, y: 0 });
      gsap.set(imageWrap, { opacity: 1, scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(text.children, {
        opacity: 0,
        y: 24,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(imageWrap, {
        opacity: 0,
        scale: 0.96,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Pulse sutil no CTA principal — só em desktop e sem reduced-motion
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px)", () => {
        gsap.to(cta, {
          boxShadow: "0 0 0 8px rgba(232,130,42,0.15)",
          duration: 1.4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="delivery"
      aria-labelledby="delivery-heading"
      className="relative overflow-hidden border-y border-border bg-surface-elevated py-20 lg:py-28"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 85% 20%, rgba(232,130,42,0.12) 0%, transparent 55%), radial-gradient(ellipse at 15% 85%, rgba(26,75,124,0.10) 0%, transparent 55%)",
        }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Text column */}
        <div ref={textRef} className="order-2 flex flex-col gap-6 lg:order-1">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border-accent px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-brasa sm:text-xs">
            Delivery · iFood
          </span>

          <h2
            id="delivery-heading"
            className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-foreground"
          >
            A paella do Tiquatirão <span className="text-brasa-gradient">em casa</span>
          </h2>

          <p className="max-w-xl text-base leading-relaxed text-silver sm:text-lg">
            4.8 de nota no iFood. Peça pelo app e receba direto da nossa cozinha.
          </p>

          <ul className="flex flex-wrap gap-2">
            {FEATURES.map((feature) => (
              <li
                key={feature}
                className="inline-flex items-center rounded-full border border-border bg-surface/60 px-4 py-1.5 text-sm text-foreground/90 backdrop-blur-sm"
              >
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              ref={ctaRef}
              href={SITE.ifood}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedir no iFood — abre em nova aba"
              className="btn-shimmer inline-flex min-h-[48px] items-center justify-center gap-3 rounded-full bg-[#EA1D2C] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#c81624] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA1D2C]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-elevated"
            >
              <IfoodIcon className="h-5 w-5" />
              Pedir no iFood
            </a>
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp para dúvidas sobre o delivery"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-foreground/40 hover:bg-foreground/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brasa/60"
            >
              <WhatsAppGlyph />
              WhatsApp para dúvidas
            </a>
          </div>
        </div>

        {/* Image column */}
        <div
          ref={imageWrapRef}
          className="order-1 relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border lg:order-2 lg:aspect-[4/5]"
        >
          <Image
            src="/assets/paella-individual-com-cerveja.jpg"
            alt="Paella individual do Tiquatirão servida com cerveja gelada, pronta para o delivery"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
