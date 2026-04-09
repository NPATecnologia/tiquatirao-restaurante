"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SITE, NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 32);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/95 shadow-lg shadow-black/10 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a
            href="#inicio"
            aria-label={`${SITE.name} — voltar ao topo`}
            className="relative shrink-0"
          >
            <Image
              src="/brand/logo.jpg"
              alt={SITE.name}
              width={120}
              height={48}
              className="h-12 w-auto"
              priority
            />
          </a>

          {/* Desktop navigation */}
          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="nav-link text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {/* Desktop CTA */}
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer hidden rounded-full bg-brasa px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95 md:inline-flex"
            >
              Reservar
            </a>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={mobileOpen}
              className="flex size-11 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-surface-elevated md:hidden"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-background/98 backdrop-blur-xl md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          style={{ animation: "drawer-fade-in 0.3s ease-out" }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 py-4">
            <Image
              src="/brand/logo.jpg"
              alt={SITE.name}
              width={120}
              height={48}
              className="h-12 w-auto"
            />
            <button
              type="button"
              onClick={closeMobile}
              aria-label="Fechar menu"
              className="flex size-11 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-surface-elevated"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-1 flex-col items-center justify-center gap-2 px-6">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="w-full rounded-lg py-4 text-center text-xl font-medium text-foreground/80 transition-colors hover:bg-surface-elevated hover:text-foreground"
                style={{
                  animation: `drawer-fade-in 0.3s ease-out ${(i + 1) * 50}ms both`,
                }}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile CTA */}
            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobile}
              className="btn-shimmer mt-6 w-full rounded-full bg-brasa py-4 text-center text-lg font-semibold text-white transition-transform active:scale-95"
              style={{
                animation: `drawer-fade-in 0.3s ease-out ${(NAV_LINKS.length + 1) * 50}ms both`,
              }}
            >
              Reservar mesa
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
