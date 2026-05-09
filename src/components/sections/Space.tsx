"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, prefersReducedMotion } from "@/lib/gsap-setup";
import { SITE, WHATSAPP_EVENTOS_URL } from "@/lib/constants";

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

function WhatsAppIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
/*  Eventos Privados — chips + galeria                                 */
/* ------------------------------------------------------------------ */

interface EventosChip {
  icon: React.ComponentType;
  label: string;
}

const EVENTOS_CHIPS: readonly EventosChip[] = [
  { icon: CalendarIcon, label: "Aniversários, bodas e corporativo" },
  { icon: UtensilsIcon, label: "Menu fechado ou à la carte" },
  { icon: ShipIcon, label: "Paella gigante na mesa" },
  { icon: MusicIcon, label: "Música ao vivo opcional" },
] as const;

// TODO(cliente): substituir por pack de 3–4 fotos reais de eventos no piso superior.
// Placeholder temporário usando fotos existentes do salão e paella até o cliente enviar o material.
const EVENTOS_GALERIA: readonly { src: string; alt: string }[] = [
  {
    src: "/assets/salao-interno-mesas-decoracao.jpg",
    alt: "Salão interno do Tiquatirão com mesas postas e decoração náutica",
  },
  {
    src: "/assets/paella-frutos-do-mar-grande.jpg",
    alt: "Paella gigante servida no meio da mesa",
  },
  {
    src: "/assets/area-externa-mesas-guarda-sois.jpg",
    alt: "Área do restaurante com mesas preparadas para receber convidados",
  },
  {
    src: "/assets/fachada-predio-barco-amarelo.jpg",
    alt: "Fachada do Tiquatirão com o barco amarelo icônico",
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
    const eventosCard = section.querySelector<HTMLElement>("[data-eventos-card]");

    if (cards.length === 0 && !eventosCard) return;

    if (prefersReducedMotion()) {
      cards.forEach((card) => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      });
      if (eventosCard) {
        eventosCard.style.opacity = "1";
        eventosCard.style.transform = "none";
      }
      return;
    }

    const ctx = gsap.context(() => {
      if (cards.length > 0) {
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
      }

      if (eventosCard) {
        gsap.set(eventosCard, { y: 40, opacity: 0 });

        gsap.to(eventosCard, {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: eventosCard,
            start: "top 85%",
            once: true,
          },
        });
      }
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="espaco"
      className="border-y border-border bg-surface-light py-24 lg:py-32"
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
                className="card-glow rounded-lg border border-border bg-surface-elevated p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-brasa/10 text-brasa">
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

        {/* Eventos Privados — bloco destacado full-width */}
        <div
          id="eventos-privados"
          data-eventos-card
          className="mt-24 scroll-mt-24 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-surface-elevated to-surface-elevated/60 p-6 md:p-8 lg:mt-32 lg:p-16"
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Texto + chips + CTA */}
            <div className="flex flex-col">
              <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-brasa">
                Para seu momento
              </span>
              <h3 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                Eventos privados
              </h3>
              <p className="mt-3 text-base font-medium text-foreground md:text-lg">
                Piso superior reservado para sua celebração
              </p>

              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
                <p>
                  O Tiquatirão tem um piso superior pensado para o que é seu — aniversário,
                  confraternização da empresa, bodas, chá de bebê. Mesa posta, decoração náutica
                  e a cozinha da casa funcionando só para você e seus convidados.
                </p>
                <p>
                  Kelly e Johnny cuidam pessoalmente do orçamento, do cardápio e da logística.
                  A paella gigante no meio da mesa faz o resto.
                </p>
              </div>

              {/* Chips */}
              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {EVENTOS_CHIPS.map((chip) => {
                  const ChipIcon = chip.icon;
                  return (
                    <li
                      key={chip.label}
                      className="flex items-center gap-3 rounded-lg border border-border bg-surface-elevated/60 px-4 py-3"
                    >
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-brasa/10 text-brasa [&>svg]:h-5 [&>svg]:w-5">
                        <ChipIcon />
                      </span>
                      <span className="text-sm leading-snug text-foreground">
                        {chip.label}
                      </span>
                    </li>
                  );
                })}
              </ul>

              {/* CTAs */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={WHATSAPP_EVENTOS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-brasa px-8 text-base font-semibold text-foreground shadow-sm transition-all duration-300 hover:bg-brasa/90 hover:-translate-y-0.5 sm:w-auto lg:h-12"
                >
                  <WhatsAppIcon />
                  Fale com a gente no WhatsApp
                </a>
                <a
                  href={`tel:+${SITE.phoneClean}`}
                  className="text-sm text-muted transition-colors hover:text-foreground sm:ml-1"
                >
                  ou ligue {SITE.phone}
                </a>
              </div>
            </div>

            {/* Galeria */}
            <div>
              {/* Desktop: grid 2x2 */}
              <div className="hidden gap-3 md:grid md:grid-cols-2">
                {EVENTOS_GALERIA.map((foto) => (
                  <div
                    key={foto.src}
                    className="relative aspect-[4/5] overflow-hidden rounded-lg"
                  >
                    <Image
                      src={foto.src}
                      alt={foto.alt}
                      fill
                      sizes="(min-width: 1024px) 280px, (min-width: 768px) 40vw, 70vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Mobile: scroll horizontal com snap */}
              <div className="-mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-2 md:hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                {EVENTOS_GALERIA.map((foto) => (
                  <div
                    key={foto.src}
                    className="relative aspect-[4/5] min-w-[70vw] flex-shrink-0 snap-center overflow-hidden rounded-lg"
                  >
                    <Image
                      src={foto.src}
                      alt={foto.alt}
                      fill
                      sizes="70vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
