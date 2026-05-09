import { SITE, NAV_LINKS } from "@/lib/constants";
import Image from "next/image";
import { SOCIAL_ICON_MAP, type SocialIconName } from "@/components/ui/SocialIcons";

const SOCIAL_LINKS: ReadonlyArray<{ label: SocialIconName; href: string }> = [
  { label: "Instagram", href: SITE.instagram },
  { label: "Facebook", href: SITE.facebook },
  { label: "TikTok", href: SITE.tiktok },
  { label: "Threads", href: SITE.threads },
  { label: "LinkedIn", href: SITE.linkedin },
  { label: "TripAdvisor", href: SITE.tripadvisor },
  { label: "iFood", href: SITE.ifood },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface" role="contentinfo">
      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-5">
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
          <div className="lg:col-span-2">
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
          <div className="lg:col-span-3">
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
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-foreground/60">
              Redes Sociais
            </h3>
            <ul className="flex flex-wrap gap-1.5">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICON_MAP[social.label];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Tiquatirão no ${social.label}`}
                      className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full p-2.5 text-muted transition-colors hover:text-brasa focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brasa/60"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  </li>
                );
              })}
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
            <a
              href="https://npatecnologia.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground/60 hover:text-foreground hover:underline transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brasa/60 rounded-sm"
            >
              NPA Tecnologia
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
