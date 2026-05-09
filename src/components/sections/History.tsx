"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, prefersReducedMotion } from "@/lib/gsap-setup";
import { HISTORY_EVENTS } from "@/lib/constants";

const FEATURED_YEAR = 2005;

export function History() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll<HTMLElement>("[data-timeline-item]");
    const barcoWrapper = section.querySelector<HTMLElement>("[data-barco-wrapper]");
    const barcoImage = section.querySelector<HTMLElement>("[data-barco-image]");
    const barcoTextChildren = section.querySelectorAll<HTMLElement>("[data-barco-text] > *");

    if (prefersReducedMotion()) {
      items.forEach((item) => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      });
      barcoTextChildren.forEach((child) => {
        child.style.opacity = "1";
        child.style.transform = "translateY(0)";
      });
      return;
    }

    const ctx = gsap.context(() => {
      if (items.length > 0) {
        gsap.set(items, { y: 20, opacity: 0 });
        gsap.to(items, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        });
      }

      if (barcoWrapper && barcoImage) {
        // Parallax apenas em desktop (>=768px). matchMedia cuida do teardown.
        const mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
          gsap.to(barcoImage, {
            yPercent: -12,
            ease: "none",
            scrollTrigger: {
              trigger: barcoWrapper,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          });
        });
      }

      if (barcoWrapper && barcoTextChildren.length > 0) {
        gsap.set(barcoTextChildren, { y: 16, opacity: 0 });
        gsap.to(barcoTextChildren, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: barcoWrapper,
            start: "top 75%",
            once: true,
          },
        });
      }
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  const featuredEvent = HISTORY_EVENTS.find((event) => event.year === FEATURED_YEAR);
  const featuredIndex = HISTORY_EVENTS.findIndex((event) => event.year === FEATURED_YEAR);
  const eventsBefore = HISTORY_EVENTS.slice(0, featuredIndex);
  const eventsAfter = HISTORY_EVENTS.slice(featuredIndex + 1);

  const renderTimelineCard = (event: (typeof HISTORY_EVENTS)[number]) => (
    <div
      key={event.year}
      data-timeline-item
      className="relative flex flex-col"
    >
      {/* Dot on horizontal line (desktop) */}
      <div className="mb-4 hidden lg:block">
        <div className="mx-auto h-[14px] w-[14px] rounded-full border-2 border-surface-light bg-brasa shadow-[0_0_0_4px_rgba(232,130,42,0.1)]" />
      </div>

      {/* Card */}
      <div className="flex h-full flex-col rounded-lg border border-border bg-surface-elevated p-4 transition-colors hover:border-border-accent">
        <p className="font-display text-2xl font-bold text-brasa/80">
          {event.year}
        </p>
        <h3 className="font-display mt-1 text-base text-foreground">
          {event.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {event.description}
        </p>
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="historia"
      className="bg-surface-light py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block text-sm font-medium uppercase tracking-[0.3em] text-brasa">
            Desde 1997
          </span>
          <h2 className="font-display text-3xl leading-tight text-foreground lg:text-4xl">
            Nossa Jornada
          </h2>
        </div>

        {/* Compact timeline — eventos anteriores a 2005 */}
        {eventsBefore.length > 0 && (
          <div className="relative">
            <div
              className="absolute left-0 right-0 top-[7px] hidden h-px bg-gradient-to-r from-transparent via-brasa/30 to-transparent lg:block"
              aria-hidden="true"
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {eventsBefore.map(renderTimelineCard)}
            </div>
          </div>
        )}

        {/* Bloco hero — 2005: O barco amarelo */}
        {featuredEvent && (
          <div
            data-barco-wrapper
            className="relative my-10 overflow-hidden rounded-2xl border-y border-brasa/20 bg-surface-elevated lg:my-14"
          >
            <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
              {/* Imagem — lg: col-span-7 */}
              <div className="relative aspect-video overflow-hidden lg:col-span-7 lg:aspect-[4/3]">
                {/* TODO(cliente): substituir por foto dedicada do barco — este crop é provisório */}
                <div data-barco-image className="absolute inset-0 will-change-transform">
                  <Image
                    src="/assets/fachada-predio-barco-amarelo.jpg"
                    alt="Fachada do Tiquatirão na Penha com o barco amarelo instalado no topo do prédio"
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    quality={85}
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Texto — lg: col-span-5 */}
              <div
                data-barco-text
                className="flex flex-col justify-center gap-4 px-6 py-8 lg:col-span-5 lg:px-10 lg:py-12"
              >
                <span className="inline-block w-fit rounded-full border border-brasa/30 px-3 py-1 text-xs uppercase tracking-[0.25em] text-brasa">
                  Marco visual · 2005
                </span>
                <h3 className="font-display text-2xl leading-[1.1] text-foreground md:text-4xl lg:text-5xl">
                  O barco amarelo que virou marco da Penha
                </h3>
                <p className="max-w-prose text-base leading-relaxed text-muted md:text-lg">
                  Em 2005, um barco amarelo foi instalado em cima do prédio. Não era estratégia de marketing — era fachada. Virou outra coisa: hoje é ponto de foto de turista que passa pela Penha e nem entra pra comer, referência de endereço (&ldquo;o restaurante do barco amarelo&rdquo;), e o amarelo acabou colando na identidade do quarteirão inteiro. A fachada virou marco. O marco virou reconhecimento.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Compact timeline — eventos posteriores a 2005 */}
        {eventsAfter.length > 0 && (
          <div className="relative">
            <div
              className="absolute left-0 right-0 top-[7px] hidden h-px bg-gradient-to-r from-transparent via-brasa/30 to-transparent lg:block"
              aria-hidden="true"
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {eventsAfter.map(renderTimelineCard)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
