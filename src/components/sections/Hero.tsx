"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, prefersReducedMotion } from "@/lib/gsap-setup";
import { SITE } from "@/lib/constants";

function ChevronDown() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const image = imageRef.current;
    const badge = badgeRef.current;
    const headline = headlineRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;
    const scrollIndicator = scrollIndicatorRef.current;

    if (!section || !image || !badge || !headline || !subtitle || !cta || !scrollIndicator) {
      return;
    }

    const reduced = prefersReducedMotion();

    if (reduced) {
      badge.style.clipPath = "inset(0 0 0 0)";
      badge.style.opacity = "1";
      headline.style.opacity = "1";
      headline.style.transform = "translateY(0)";
      subtitle.style.opacity = "1";
      subtitle.style.transform = "translateY(0)";
      cta.style.opacity = "1";
      cta.style.transform = "translateY(0)";
      scrollIndicator.style.opacity = "1";
      return;
    }

    const ctx = gsap.context(() => {
      // Parallax on background image
      gsap.to(image, {
        yPercent: 12,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Entry timeline
      const tl = gsap.timeline({ delay: 0.3 });

      // 1. Badge — clip-path inset reveal
      gsap.set(badge, { clipPath: "inset(0 100% 0 0)", opacity: 0 });
      tl.to(badge, {
        clipPath: "inset(0 0% 0 0)",
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      });

      // 2. Headline — slide up + fade
      gsap.set(headline, { y: 40, opacity: 0 });
      tl.to(
        headline,
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3"
      );

      // 3. Subtitle — slide up + fade
      gsap.set(subtitle, { y: 30, opacity: 0 });
      tl.to(
        subtitle,
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.4"
      );

      // 4. CTA buttons — slide up + fade
      gsap.set(cta, { y: 25, opacity: 0 });
      tl.to(
        cta,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3"
      );

      // 5. Scroll indicator — fade in with delay
      gsap.set(scrollIndicator, { opacity: 0 });
      tl.to(
        scrollIndicator,
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        },
        "+=0.5"
      );
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative h-svh w-full overflow-hidden"
    >
      {/* Background image */}
      <div ref={imageRef} className="absolute inset-0">
        <Image
          src="/assets/hero-tiquatirao.jpeg"
          alt="Interior do restaurante Tiquatirão com paella de frutos do mar em primeiro plano e decoração náutica ao fundo"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.28] saturate-[0.75] scale-110 hero-ken-burns"
        />
      </div>

      {/* Dual gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background"
        aria-hidden="true"
      />

      {/* Light sweep effect 1 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent"
          style={{ animation: "light-sweep 14s ease-in-out infinite" }}
        />
      </div>

      {/* Light sweep effect 2 (thinner, offset) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className="absolute inset-y-0 w-1/6 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent"
          style={{ animation: "light-sweep 20s ease-in-out 7s infinite" }}
        />
      </div>

      {/* Gradient breathe */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 30% 60%, rgba(26,75,124,0.06) 0%, transparent 50%), radial-gradient(ellipse at 70% 40%, rgba(232,130,42,0.08) 0%, transparent 50%)",
          backgroundSize: "200% 200%",
          animation: "gradient-breathe 8s ease-in-out infinite",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="flex max-w-3xl flex-col items-center gap-6">
          {/* Badge */}
          <span
            ref={badgeRef}
            className="inline-flex items-center rounded-full border border-border-accent px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-brasa"
          >
            Desde 1997
          </span>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-display text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[1.1] tracking-tight"
          >
            <span className="block text-foreground">O Litoral,</span>
            <span className="text-brasa-gradient block">Na Capital!</span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="max-w-xl font-sans text-lg leading-relaxed text-silver"
          >
            Frutos do mar, carnes na brasa e a energia do litoral &mdash; há
            mais de 27 anos na Penha de França.
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="mt-2 flex flex-col items-center gap-4 sm:flex-row"
          >
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-brasa px-8 py-3 text-sm font-semibold uppercase tracking-wider text-background transition-colors hover:bg-brasa-light"
            >
              Reservar Mesa
            </a>
            <a
              href="#cardapio"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-foreground/20 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-foreground/40 hover:bg-foreground/5"
            >
              Ver Cardápio
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted"
          aria-hidden="true"
        >
          <ChevronDown />
        </div>
      </div>
    </section>
  );
}
