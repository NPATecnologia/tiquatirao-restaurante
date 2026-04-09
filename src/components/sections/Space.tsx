"use client";

import { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap-setup";

/* ------------------------------------------------------------------ */
/*  SVG Icon Components                                                */
/* ------------------------------------------------------------------ */

function ShipIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2 20l1.5-1.5C5 17 7 17 8.5 18.5 10 20 12 20 13.5 18.5 15 17 17 17 18.5 18.5L22 20" />
      <path d="M4 18l-1-5h18l-1 5" />
      <path d="M12 13V3" />
      <path d="M8 7h8l-4-4-4 4" />
    </svg>
  );
}

function MusicIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function PlaygroundIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="6" r="3" />
      <path d="M12 9v4" />
      <path d="M8 20l4-7 4 7" />
      <path d="M7 17h10" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 17h14v-5l-2-5H7L5 12v5z" />
      <circle cx="7.5" cy="17" r="1.5" />
      <circle cx="16.5" cy="17" r="1.5" />
      <path d="M3 12h2" />
      <path d="M19 12h2" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
    </svg>
  );
}

function UtensilsIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Feature data                                                       */
/* ------------------------------------------------------------------ */

interface Feature {
  icon: React.ComponentType;
  title: string;
  description: string;
}

const FEATURES: readonly Feature[] = [
  {
    icon: ShipIcon,
    title: "Decoração Náutica",
    description:
      "Restaurante temático projetado para parecer um navio, com piratas e decoração marítima.",
  },
  {
    icon: MusicIcon,
    title: "Música ao Vivo",
    description:
      "Shows com os músicos Cacá e Miriam aos domingos e datas especiais.",
  },
  {
    icon: PlaygroundIcon,
    title: "Espaço Kids",
    description:
      "Brinquedão com monitoria para crianças, para os pais aproveitarem com tranquilidade.",
  },
  {
    icon: CarIcon,
    title: "Estacionamento",
    description:
      "Manobrista sem custo adicional para todos os clientes.",
  },
  {
    icon: CalendarIcon,
    title: "Eventos Privados",
    description:
      "Piso superior para aniversários, confraternizações e eventos corporativos.",
  },
  {
    icon: UtensilsIcon,
    title: "Porções Generosas",
    description:
      "Cada prato serve de 2 a 3 pessoas. Perfeito para compartilhar em família.",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Space() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll<HTMLElement>("[data-card]");
    if (cards.length === 0) return;

    if (prefersReducedMotion()) {
      cards.forEach((card) => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(cards, { y: 30, opacity: 0 });

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
      id="espaco"
      className="bg-surface py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-brasa">
            Experiência
          </span>
          <h2 className="font-display text-4xl font-bold text-foreground lg:text-5xl">
            Mais que um Restaurante
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                data-card
                className="rounded-lg border border-border bg-surface-elevated p-6"
              >
                <div className="mb-4 h-10 w-10 text-brasa">
                  <IconComponent />
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
