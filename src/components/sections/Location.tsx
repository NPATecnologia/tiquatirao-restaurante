import { SITE, PAYMENT_METHODS } from "@/lib/constants";

function PinIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-0.5 shrink-0"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-0.5 shrink-0"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-0.5 shrink-0"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

interface ContactItemProps {
  icon: React.ReactNode;
  href: string;
  label: string;
  external?: boolean;
}

function ContactItem({ icon, href, label, external = false }: ContactItemProps) {
  return (
    <li>
      <a
        href={href}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="group flex min-h-[44px] items-start gap-3 text-silver transition-colors hover:text-brasa"
      >
        {icon}
        <span className="text-base leading-relaxed">{label}</span>
      </a>
    </li>
  );
}

export function Location() {
  return (
    <section id="contato" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-20">
        {/* Info column */}
        <div>
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.3em] text-brasa">
            Localização
          </span>

          <h2 className="font-display mb-8 text-4xl leading-tight text-foreground lg:text-5xl">
            Como Chegar
          </h2>

          <ul className="space-y-5">
            <ContactItem
              icon={<PinIcon />}
              href={SITE.maps}
              label={SITE.address}
              external
            />
            <ContactItem
              icon={<PhoneIcon />}
              href={`tel:+${SITE.phoneClean}`}
              label={SITE.phone}
            />
            <ContactItem
              icon={<MailIcon />}
              href={`mailto:${SITE.email}`}
              label={SITE.email}
            />
          </ul>

          <a
            href={SITE.maps}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-[44px] items-center gap-2 text-base font-medium text-brasa transition-colors hover:text-brasa-light hover:underline"
          >
            <span>Ver no Google Maps</span>
            <ExternalLinkIcon />
          </a>

          {/* Payment methods */}
          <div className="mt-10 border-t border-border pt-8">
            <h3 className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-foreground/60">
              Formas de Pagamento
            </h3>
            <div className="flex flex-wrap gap-3">
              {PAYMENT_METHODS.map((method) => (
                <span
                  key={method.label}
                  title={method.note ?? undefined}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-elevated px-3 py-1.5 text-sm text-silver"
                >
                  {method.label}
                  {method.note && (
                    <span className="text-[10px] text-muted">*</span>
                  )}
                </span>
              ))}
            </div>
            <p className="mt-2 text-xs text-muted">
              * Consultar bandeiras disponíveis no estabelecimento.
            </p>
          </div>
        </div>

        {/* Map column */}
        <div className="overflow-hidden rounded-lg border border-border">
          <iframe
            src={SITE.mapsEmbed}
            title={`Localização do ${SITE.name} no Google Maps`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            className="aspect-video w-full lg:aspect-auto lg:h-full lg:min-h-[400px]"
            style={{ border: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
