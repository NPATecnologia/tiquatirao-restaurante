"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { gsap, prefersReducedMotion } from "@/lib/gsap-setup";

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
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() => {
    setLightboxIndex(prev => prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null);
  }, []);
  const nextImage = useCallback(() => {
    setLightboxIndex(prev => prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null);
  }, []);

  // Save trigger and focus close button when lightbox opens; restore focus on close
  useEffect(() => {
    if (lightboxIndex !== null) {
      triggerRef.current = document.activeElement as HTMLDivElement | null;
      requestAnimationFrame(() => closeButtonRef.current?.focus());
    } else if (triggerRef.current) {
      triggerRef.current.focus();
      triggerRef.current = null;
    }
  }, [lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") { closeLightbox(); return; }
      if (e.key === "ArrowLeft") { prevImage(); return; }
      if (e.key === "ArrowRight") { nextImage(); return; }

      if (e.key === "Tab") {
        const overlay = document.querySelector<HTMLElement>('[role="dialog"][aria-label="Visualização da imagem"]');
        if (!overlay) return;
        const focusable = overlay.querySelectorAll<HTMLElement>('button, [tabindex]:not([tabindex="-1"])');
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) { e.preventDefault(); last.focus(); }
        } else {
          if (document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, prevImage, nextImage]);

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
    <>
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
            Momentos no Tiquatirão
          </h2>
        </div>

        {/* Masonry grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {GALLERY_IMAGES.map((image, index) => (
            <div
              key={image.src}
              className={`gallery-item group cursor-pointer ${
                image.span ? "lg:row-span-2" : ""
              }`}
              onClick={() => setLightboxIndex(index)}
              role="button"
              tabIndex={0}
              aria-label={`Abrir imagem: ${image.alt}`}
              onKeyDown={(e) => { if (e.key === "Enter") setLightboxIndex(index); }}
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
              <div className="gallery-overlay">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {lightboxIndex !== null && (
      <div className="lightbox-overlay" onClick={closeLightbox} role="dialog" aria-modal="true" aria-label="Visualização da imagem">
        <button ref={closeButtonRef} onClick={closeLightbox} className="absolute top-6 right-6 z-10 text-foreground/60 hover:text-foreground transition-colors" aria-label="Fechar">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>
        <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-foreground/60 hover:text-foreground transition-colors" aria-label="Anterior">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 18l-6-6 6-6" /></svg>
        </button>
        <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-foreground/60 hover:text-foreground transition-colors" aria-label="Próxima">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 18l6-6-6-6" /></svg>
        </button>
        <div className="lightbox-image relative h-[80vh] w-[90vw] max-w-5xl" onClick={(e) => e.stopPropagation()}>
          <Image src={GALLERY_IMAGES[lightboxIndex].src} alt={GALLERY_IMAGES[lightboxIndex].alt} fill className="object-contain" sizes="90vw" />
        </div>
      </div>
    )}
    </>
  );
}
