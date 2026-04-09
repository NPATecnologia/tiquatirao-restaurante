"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap-setup";

interface GalleryImage {
  src: string;
  alt: string;
  span: boolean;
}

const GALLERY_IMAGES: readonly GalleryImage[] = [
  {
    src: "/assets/paella-frutos-do-mar-grande.jpg",
    alt: "Paella valenciana de frutos do mar com camaroes, mariscos e lula servida na panela tradicional",
    span: true,
  },
  {
    src: "/assets/petisco-frutos-do-mar-empanados.jpg",
    alt: "Petisco de frutos do mar empanados crocantes servidos com molho especial",
    span: false,
  },
  {
    src: "/assets/salao-interno-mesas-decoracao.jpg",
    alt: "Salao interno do restaurante com mesas decoradas e iluminacao acolhedora",
    span: false,
  },
  {
    src: "/assets/prato-peixe-empanado-arroz-batatas.jpg",
    alt: "Prato de peixe empanado acompanhado de arroz branco e batatas fritas",
    span: false,
  },
  {
    src: "/assets/area-externa-mesas-guarda-sois.jpg",
    alt: "Area externa do restaurante com mesas ao ar livre e guarda-sois coloridos",
    span: false,
  },
  {
    src: "/assets/paella-individual-com-cerveja.jpg",
    alt: "Paella individual servida com cerveja gelada em ambiente descontraido",
    span: false,
  },
] as const;

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    const section = sectionRef.current;
    const header = headerRef.current;
    const grid = gridRef.current;
    if (!section || !header || !grid) return;

    const ctx = gsap.context(() => {
      gsap.from(header.children, {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: header,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(grid.children, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: {
          trigger: grid,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="galeria"
      className="py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div ref={headerRef} className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.3em] text-brasa">
            Galeria
          </span>
          <h2 className="font-display text-4xl leading-tight text-foreground lg:text-5xl">
            Momentos no Tiquatirao
          </h2>
        </div>

        {/* Masonry grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {GALLERY_IMAGES.map((image) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-lg ${
                image.span ? "lg:row-span-2" : ""
              }`}
            >
              <div
                className={`relative w-full ${
                  image.span ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
