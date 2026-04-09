import { SITE, NAV_LINKS } from "@/lib/constants";
import Image from "next/image";

const SOCIAL_LINKS = [
  { label: "Instagram", href: SITE.instagram },
  { label: "Facebook", href: SITE.facebook },
  { label: "TripAdvisor", href: SITE.tripadvisor },
  { label: "iFood", href: SITE.ifood },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface" role="contentinfo">
      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src="/brand/logo.jpg"
              alt={SITE.name}
              width={140}
              height={56}
              className="mb-5 h-14 w-auto"
            />
            <p className="font-display text-lg italic text-brasa">
              {SITE.tagline}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Desde {SITE.foundedYear}, servindo os melhores frutos do mar e
              carnes na brasa de São Paulo. Uma experiência gastronômica
              inesquecível para toda a família.
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-foreground/60">
              Navegação
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-brasa"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-foreground/60">
              Contato
            </h3>
            <ul className="space-y-4 text-sm text-muted">
              <li>
                <a
                  href={`tel:+${SITE.phoneClean}`}
                  className="transition-colors hover:text-brasa"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="break-all transition-colors hover:text-brasa"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed transition-colors hover:text-brasa"
                >
                  {SITE.address}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 — Social */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-foreground/60">
              Redes Sociais
            </h3>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition-colors hover:text-brasa"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-6 py-6 text-xs text-muted sm:flex-row sm:justify-between">
          <p>
            &copy; {currentYear} {SITE.name}. Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido por{" "}
            <span className="font-medium text-foreground/60">
              NPA Tecnologia
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
