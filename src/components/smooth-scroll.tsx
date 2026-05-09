"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap-setup";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const instance = new Lenis({
      lerp: 0.08,
      duration: 1.1,
      smoothWheel: true,
    });

    instance.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      instance.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Intercepta cliques em links âncora (#id) para usar Lenis.scrollTo
    function handleAnchorClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]'
      );
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href || href === "#") return;

      // Permite modificadores (cmd/ctrl click = nova aba)
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      // Se for só "#", scroll pro topo
      if (href === "#" || href === "#inicio") {
        e.preventDefault();
        instance.scrollTo(0, { duration: 1.2 });
        return;
      }

      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      instance.scrollTo(el, {
        offset: -80, // compensa header fixo
        duration: 1.2,
      });
    }

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      instance.off("scroll", ScrollTrigger.update);
      gsap.ticker.remove(tickerCallback);
      instance.destroy();
    };
  }, []);

  return <>{children}</>;
}
