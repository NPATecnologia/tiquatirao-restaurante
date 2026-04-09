# Tiquatirao Mar & Brasa

Landing page world-class para o restaurante Tiquatirao Mar & Brasa, icone da gastronomia de frutos do mar na Zona Leste de Sao Paulo desde 1997.

## Stack

- **Next.js 16** (Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (design tokens via `@theme inline`)
- **GSAP** + **ScrollTrigger** (animacoes scroll-triggered)
- **Lenis** (smooth scroll)

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Estrutura

```
src/
  app/
    globals.css      # Design tokens, animacoes, efeitos
    layout.tsx       # Fonts, metadata, smooth scroll
    page.tsx         # Composicao das secoes
  components/
    layout/          # Header, Footer, WhatsAppFloat
    sections/        # 17 secoes (Hero, About, History, etc.)
    ui/              # WaveDivider
  lib/
    constants.ts     # Dados do restaurante
    gsap-setup.ts    # GSAP + ScrollTrigger setup
    utils.ts         # Utilidades
public/
  assets/            # Fotos otimizadas do restaurante
  brand/             # Logo
docs/
  RPD_Tiquatirao_Site.md   # PRD completo do projeto
```

## Secoes

| Secao | Display Type |
|-------|-------------|
| Hero | Full-bleed cinematico + Ken Burns + parallax |
| BrandMarquee | Marquee infinito 3-strip |
| About | Two-column + image reveal (clip-path) |
| History | Timeline vertical alternada (8 marcos) |
| SignatureDishes | Horizontal scroll com snap |
| Menu | Grid de cards com icones por categoria |
| Gallery | Masonry grid + lightbox fullscreen |
| VideoShowcase | Poster + iframe YouTube on-click |
| Space | Feature cards com icones e glow |
| Numbers | Counter animado GSAP |
| Reviews | 6 testimonials + platform badges |
| Press | Grid de mencoes na midia |
| FAQ | Accordion acessivel |
| CTAFinal | CTA centralizado com dual gradient |
| Location | Mapa + contatos |

## Seguranca

- CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy configurados
- Todos `target="_blank"` com `rel="noopener noreferrer"`
- iframes com `sandbox` restritivo
- 0 vulnerabilidades (`npm audit`)
- Nenhum secret no codigo fonte

## Acessibilidade

- `prefers-reduced-motion` respeitado em todas as animacoes
- Focus traps em lightbox e mobile menu
- Touch targets >= 44px
- ARIA labels, roles, keyboard navigation
- WCAG AA contraste validado

## Performance

- Hero image comprimida (1562KB -> 241KB)
- `next/image` com `sizes` otimizados em todas as imagens
- Fonts via `next/font/google` com `display: swap`
- GSAP cleanup correto (`ctx.revert()`) em todos os componentes
- CSS: 9KB gzip (Tailwind v4 on-demand)

---

Desenvolvido por **NPA Tecnologia** | npatecnologia.com
