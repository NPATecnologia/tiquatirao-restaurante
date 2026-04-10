"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap-setup";
import { SIGNATURE_DISHES } from "@/lib/constants";

export function SignatureDishes() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imageContainer = imageContainerRef.current;
    if (!section || !imageContainer) return;

    const panels = section.querySelectorAll<HTMLElement>("[data-dish-panel]");
    const images = imageContainer.querySelectorAll<HTMLElement>("[data-dish-image]");

    if (panels.length === 0 || images.length === 0) return;

    if (prefersReducedMotion()) {
      panels.forEach((p) => { p.style.opacity = "1"; });
      images.forEach((img, i) => { img.style.opacity = i === 0 ? "1" : "0"; });
      return;
    }

    const ctx = gsap.context(() => {
      // Each panel triggers its corresponding image
      panels.forEach((panel, i) => {
        // Fade in text panel on scroll
        gsap.set(panel, { opacity: 0, y: 30 });

        gsap.to(panel, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play reverse play reverse",
          },
        });

        // Desktop: crossfade images based on which panel is in view
        if (window.innerWidth >= 1024) {
          ScrollTrigger.create({
            trigger: panel,
            start: "top 60%",
            end: "bottom 40%",
            onEnter: () => {
              images.forEach((img, j) => {
                gsap.to(img, {
                  opacity: j === i ? 1 : 0,
                  duration: 0.5,
                  ease: "power2.inOut",
                });
              });
            },
            onEnterBack: () => {
              images.forEach((img, j) => {
                gsap.to(img, {
                  opacity: j === i ? 1 : 0,
                  duration: 0.5,
                  ease: "power2.inOut",
                });
              });
            },
          });
        }
      });

      // Set first image visible
      images.forEach((img, i) => {
        gsap.set(img, { opacity: i === 0 ? 1 : 0 });
      });
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 lg:py-32"
    >
      {/* Header */}
      <div className="mx-auto mb-16 max-w-7xl px-6 text-center lg:mb-20">
        <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.3em] text-brasa">
          Os favoritos da casa
        </span>
        <h2 className="font-display text-4xl leading-tight text-foreground lg:text-5xl">
          Pratos Assinatura
        </h2>
        <div className="section-ornament mt-4">
          <span className="text-brasa/40 text-sm">⚓</span>
        </div>
      </div>

      {/* Desktop: sticky image left + scrolling text right */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Sticky image column — desktop only */}
          <div className="hidden lg:block">
            <div
              ref={imageContainerRef}
              className="sticky top-24 aspect-[4/5] overflow-hidden rounded-xl border border-border"
            >
              {SIGNATURE_DISHES.map((dish, i) => (
                <div
                  key={dish.name}
                  data-dish-image
                  className="absolute inset-0"
                  style={{ zIndex: SIGNATURE_DISHES.length - i }}
                >
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="50vw"
                    className="object-cover"
                    priority={i === 0}
                  />
                  {/* Subtle bottom gradient for depth */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                </div>
              ))}

              {/* Counter — shows which dish */}
              <div className="absolute bottom-5 left-5 z-20 flex items-center gap-2">
                {SIGNATURE_DISHES.map((_, i) => (
                  <div
                    key={i}
                    className="h-1 w-6 rounded-full bg-foreground/20"
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Scrolling panels — each dish */}
          <div className="space-y-8 lg:space-y-0">
            {SIGNATURE_DISHES.map((dish, i) => (
              <article
                key={dish.name}
                data-dish-panel
                className="group lg:flex lg:min-h-[50vh] lg:items-center"
              >
                {/* Mobile: inline image */}
                <div className="mb-5 overflow-hidden rounded-xl border border-border lg:hidden">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      sizes="100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                    <span className="absolute right-3 top-3 z-10 rounded-full bg-brasa/20 px-3 py-1 text-xs font-medium text-brasa backdrop-blur-sm">
                      {dish.tag}
                    </span>
                  </div>
                </div>

                {/* Text content */}
                <div className="w-full">
                  {/* Number + tag */}
                  <div className="mb-4 flex items-center gap-4">
                    <span className="font-display text-5xl font-bold text-brasa/15 lg:text-6xl" aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="hidden rounded-full bg-brasa/10 px-3 py-1 text-xs font-medium text-brasa lg:inline-block">
                      {dish.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl text-foreground lg:text-3xl">
                    {dish.name}
                  </h3>

                  <p className="mt-3 max-w-md text-base leading-relaxed text-silver">
                    {dish.description}
                  </p>

                  <div className="mt-4 flex items-center gap-4">
                    <span className="text-sm text-muted">
                      Serve {dish.serves}
                    </span>
                    <span className="h-px w-8 bg-border" aria-hidden="true" />
                  </div>

                  {/* Divider between dishes on mobile */}
                  {i < SIGNATURE_DISHES.length - 1 && (
                    <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent lg:hidden" aria-hidden="true" />
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
