"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, prefersReducedMotion } from "@/lib/gsap-setup";
import { SITE } from "@/lib/constants";

const VIDEO_ID = "LEtamk7pkxQ";
const POSTER_SRC = "/assets/fachada-predio-barco-amarelo.jpg";

export function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePlay = () => setIsPlaying(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (prefersReducedMotion()) {
      container.style.opacity = "1";
      container.style.transform = "scale(1)";
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(container, { scale: 0.95, opacity: 0 });

      gsap.to(container, {
        scale: 1,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          once: true,
        },
      });
    }, container);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="font-display text-4xl leading-tight text-foreground lg:text-5xl">
            Conhe&ccedil;a o Tiquatir&atilde;o
          </h2>
          <div className="section-ornament mt-4">
            <span className="text-sm text-brasa" aria-hidden="true">&#9670;</span>
          </div>
        </div>

        {/* Video container */}
        <div
          ref={containerRef}
          className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-border"
        >
          <div className="relative aspect-video">
            {isPlaying ? (
              <iframe
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                title={`${SITE.name} — video institucional`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 h-full w-full"
              />
            ) : (
              <>
                <Image
                  src={POSTER_SRC}
                  alt="Fachada do restaurante Tiquatirão com o icônico barco amarelo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 960px"
                  className="object-cover"
                  priority={false}
                />

                {/* Dark overlay for contrast */}
                <div className="absolute inset-0 bg-background/30" />

                {/* Play button */}
                <button
                  type="button"
                  className="video-play-btn"
                  onClick={handlePlay}
                  aria-label="Reproduzir video institucional do Tiquatirao"
                >
                  <span className="video-play-icon">
                    <svg
                      width="28"
                      height="32"
                      viewBox="0 0 28 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 2.804a2 2 0 0 1 3.04-1.708l18.56 13.196a2 2 0 0 1 0 3.416L7.04 30.904A2 2 0 0 1 4 29.196V2.804Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
