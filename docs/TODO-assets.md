# TODO — Assets pendentes (enviar ao cliente)

Status: aguardando fotos reais dos novos pratos assinatura.

## Imagens faltantes

Os dois pratos abaixo foram adicionados a `SIGNATURE_DISHES` em `src/lib/constants.ts`. Hoje usam **placeholders** (cópia de `peixe-signature.jpg`) apenas para não quebrar o `next build`. Substituir pelas fotos reais antes do próximo deploy.

| Arquivo esperado | Prato | Specs |
|---|---|---|
| `public/assets/tilapia-fiorentina.jpg` | Tilápia à Fiorentina | 1200×1600 portrait, JPEG otimizado, <250 KB |
| `public/assets/tainha-na-brasa.jpg` | Tainha na Brasa | 1200×1600 portrait, JPEG otimizado, <250 KB |

## Direção de arte

- Aspect ratio: retrato 3:4 (o componente `SignatureDishes` exibe em `aspect-[4/5]` no desktop e `aspect-[16/9]` cropado no mobile, então o ponto focal do prato deve estar no terço superior).
- Iluminação quente, mesa de madeira ou louça branca — consistente com `peixe-signature.jpg` e `picanha-signature.jpg`.
- Sem marca d'água, sem props descartáveis (guardanapos de papel, embalagens delivery).
- Enquadrar o prato completo: para a Tainha, mostrar o peixe inteiro grelhado.

## Responsável

Cliente (Tiquatirão Mar & Brasa) envia as fotos. Ao receber:

1. Otimizar para <250 KB (squoosh ou sharp-cli).
2. Substituir os placeholders nos caminhos acima.
3. Remover os comentários `TODO(cliente)` em `src/lib/constants.ts` (linhas das entradas Tilápia à Fiorentina e Tainha na Brasa).
4. Rodar `npm run build` e conferir Lighthouse.
5. Remover esta entrada deste arquivo.

---

# Família Mota — Retratos (seção About)

Status: usando **placeholders dignos** (silhueta sépia sobre fundo `surface` com inicial dourada em serif). Funcionais, mas o peso emocional da seção "Três gerações" só chega no nível world-class com fotos reais dos Mota.

## Imagens faltantes

Cada placeholder vive em `public/assets/familia/` como SVG. Trocar por JPEG quadrado quando chegarem as fotos.

| Arquivo placeholder | Trocar por | Especificação |
|---|---|---|
| `public/assets/familia/jose-mota.svg` | `jose-mota.jpg` | Retrato do Sr. José da Mota (fundador, 1ª geração) |
| `public/assets/familia/kelly-johnny.svg` | `kelly-johnny.jpg` | Retrato conjunto de Kelly e Johnny Mota (2ª geração) |
| `public/assets/familia/netos.svg` | `netos.jpg` | Retrato dos netos (3ª geração, em formação) |
| `public/assets/familia/chef-marco-falcao.svg` | `chef-marco-falcao.jpg` | Chef Marco Falcão (cozinha desde 1997) — ver também seção dedicada `#chef` abaixo |

## Specs técnicas

- **Aspect ratio**: quadrado 1:1 (renderizado em `rounded-full`).
- **Resolução**: 640×640 mínimo, 800×800 recomendado. `next/image` serve 120px mobile / 160px desktop — 2x devicePixelRatio = 320px.
- **Peso**: <120 KB por retrato, JPEG quality 90.
- **Enquadramento**: busto, rosto centralizado no terço superior, margem de respiro para o crop circular.
- **Luz**: natural ou quente, evitar flash direto. Consistência tonal entre as 4 fotos — de preferência mesma sessão ou mesmo ambiente (salão do restaurante).
- **Sem props**: sem uniforme de delivery, sem marca d'água, sem crachá. Chef pode aparecer com dólmã branca limpa.

## Direção de arte

- **Sr. José**: autoridade calma, olhar direto ou de perfil. Mostrar que é quem começou.
- **Kelly + Johnho**: juntos no mesmo frame. Postura de dono. Sorriso permitido, nada posado.
- **Netos**: se possível, foto genuína dos netos na cozinha ou no salão. Autenticidade > produção.
- **Chef Falcão**: na cozinha, com ou sem a paella em primeiro plano. Rosto em evidência.

## Ao receber

1. Converter para JPEG 800×800 quality 90, <120 KB (squoosh, sharp-cli ou equivalente).
2. Salvar em `public/assets/familia/*.jpg`.
3. Atualizar as referências `image: "/assets/familia/*.svg"` para `.jpg` em `GENERATIONS` e `CHEF` dentro de `src/lib/constants.ts`.
4. Deletar os SVGs placeholder.
5. Remover os comentários `TODO: substituir por foto real fornecida pelo cliente` em `src/components/sections/About.tsx`.
6. Rodar `npm run build` e conferir LCP da seção `#sobre`.
7. Remover esta entrada deste arquivo.

## Responsável

Cliente (família Mota) providencia as fotos — de preferência uma sessão conjunta com fotógrafo, mesmo ambiente e mesma luz, para manter coerência visual entre os quatro retratos.

---

# Seção Tartarugas — foto do aquário

Status: usando **placeholder** (gradiente verde-água com silhueta de tartaruga e label "Foto do aquário — aguardando cliente"). A seção `Tartarugas.tsx` renderiza entre `Space` e `Numbers` em `page.tsx`.

## Imagem faltante

| Arquivo esperado | Conteúdo | Specs |
|---|---|---|
| `public/assets/tartarugas-aquario.jpg` | Aquário com tartarugas na entrada do Tiquatirão | 1600×2000 retrato 4:5, JPEG quality 90, <300 KB |

## Direção de arte

- **Aspect ratio**: retrato 4:5 (componente renderiza em `aspect-[4/5]`).
- **Resolução mínima**: 2000px no lado maior.
- **Iluminação**: natural, sem flash direto no vidro (reflexo estraga a foto).
- **Enquadramento**: tartaruga visível, contexto do aquário legível (folhagem, pedra, água limpa). Ponto focal no terço superior ou central.
- **Sem props descartáveis**: sem mão humana no frame, sem objetos fora do aquário que distraiam.
- **Pós**: leve vignette nas bordas já aplicada via CSS — não queimar bordas na foto.

## Ao receber

1. Otimizar para <300 KB (squoosh ou sharp-cli), manter qualidade 90.
2. Salvar em `public/assets/tartarugas-aquario.jpg`.
3. Substituir o placeholder em `src/components/sections/Tartarugas.tsx` por `<Image src="/assets/tartarugas-aquario.jpg" ... />` com `alt="Aquário com tartarugas na entrada do Tiquatirão"`.
4. Remover o comentário `// TODO: foto do aquário do cliente` no topo do arquivo.
5. Confirmar com o cliente o ano de início do aquário (hoje: "desde 1997", herdado do ano do restaurante) — ajustar badge se necessário.
6. Rodar `npm run build` e conferir LCP da seção `#tartarugas`.
7. Remover esta entrada deste arquivo.

## Responsável

Cliente (Tiquatirão Mar & Brasa) envia a foto do aquário.

---

# Seção Chef Marco Falcão — retrato editorial (`#chef`)

Status: nova seção dedicada renderizada entre `SignatureDishes` e `Menu` em `page.tsx`. Hoje reaproveita o **mesmo SVG placeholder** usado na seção `About` (`/assets/familia/chef-marco-falcao.svg`). Funciona sem quebrar, mas a seção é editorial — precisa de retrato dedicado, não o bust-shot circular do About.

## Imagem faltante

| Arquivo esperado | Conteúdo | Specs |
|---|---|---|
| `public/assets/chef/marco-falcao-retrato.jpg` | Retrato editorial do Chef Marco Falcão | 1600×2000 retrato 4:5, JPEG quality 90, <300 KB |

Mobile exibe em `aspect-square` (1:1) cropando; manter ponto focal centralizado no terço superior para sobreviver aos dois crops.

## Direção de arte

- **Aspect ratio**: retrato 4:5 (desktop) / cropa para 1:1 (mobile).
- **Resolução mínima**: 2000px no lado maior.
- **Enquadramento**: meio-corpo ou busto. Chef no ambiente da cozinha — de preferência ao lado da paella, panela de ferro em quadro, ou encostado no fogão. Olhar para câmera OU concentrado no prato (ambos funcionam).
- **Luz**: natural quente ou luz do restaurante. Zero flash direto. Tratamento naturalista — cor quente, sem saturação excessiva, sem filtro Instagram.
- **Vestuário**: dólmã branca limpa ou avental de trabalho autêntico. Sem crachá, sem bordado de delivery, sem camiseta promocional.
- **Pós**: vignette editorial inferior já aplicada via CSS no componente — a foto não precisa vir com vignette pronta.
- **Proibido**: stock photo, IA genérica, retrato corporativo genérico de LinkedIn, chef genérico da web.

## Ao receber

1. Otimizar para <300 KB (squoosh ou sharp-cli), manter qualidade 90.
2. Criar diretório `public/assets/chef/` e salvar como `marco-falcao-retrato.jpg`.
3. Em `src/components/sections/Chef.tsx`, trocar `src="/assets/familia/chef-marco-falcao.svg"` por `src="/assets/chef/marco-falcao-retrato.jpg"`.
4. Remover o comentário `// TODO: substituir por foto real do Chef Marco Falcão` no topo do arquivo.
5. Rodar `npm run build` e conferir LCP da seção `#chef`.
6. Remover esta entrada deste arquivo.

## Responsável

Cliente (Tiquatirão Mar & Brasa) — sessão de fotos dedicada com o Chef Marco Falcão, de preferência junto com a sessão da família Mota para coerência tonal.

---

# Eventos Privados — Piso superior (seção `#eventos-privados`)

Status: bloco publicado com **fotos placeholder** do salão/paella/fachada já existentes em `public/assets/`. Sem quebrar a página, mas a galeria ainda não mostra eventos reais. Substituir assim que o cliente enviar o pack.

## Informação pendente — capacidade

Confirmar com Kelly e Johnny a **capacidade máxima do piso superior** (quantas pessoas acomoda confortavelmente em evento privado). Ao receber, adicionar como 5º chip ou substituir um dos 4 existentes em `EVENTOS_CHIPS` dentro de `src/components/sections/Space.tsx` (ex.: `"Até XX pessoas"` com ícone adequado).

## Imagens faltantes

Pack de 3–4 fotos de eventos reais no piso superior. Hoje a galeria usa como placeholder: `salao-interno-mesas-decoracao.jpg`, `paella-frutos-do-mar-grande.jpg`, `area-externa-mesas-guarda-sois.jpg`, `fachada-predio-barco-amarelo.jpg` — ver array `EVENTOS_GALERIA` em `Space.tsx`.

| Arquivo esperado | Cena | Specs |
|---|---|---|
| `public/assets/eventos/aniversario-piso-superior.jpg` | Aniversário em andamento (mesa posta, pessoas ao redor) | 1200×1500 portrait, <250 KB |
| `public/assets/eventos/confraternizacao-corporativa.jpg` | Confraternização corporativa | 1200×1500 portrait, <250 KB |
| `public/assets/eventos/paella-na-mesa-evento.jpg` | Paella gigante servida em evento | 1200×1500 portrait, <250 KB |
| `public/assets/eventos/piso-superior-mesa-posta.jpg` | Piso superior vazio com mesa montada para evento | 1200×1500 portrait, <250 KB |

## Direção de arte

- Aspect ratio: retrato 4:5 (o componente exibe em `aspect-[4/5]` tanto no grid 2×2 desktop quanto no carrossel mobile).
- Luz quente do salão, sem flash duro. Fotos autênticas > produção.
- Mostrar pessoas sempre que possível (aniversariante, anfitriões, convidados à mesa) — com consentimento.
- Sem marca d'água, sem celulares em primeiro plano, sem embalagens de delivery.

## Responsável

Cliente (Kelly e Johnny) providencia:
1. Pack de 3–4 fotos reais de eventos passados no piso superior (pedir autorização de uso de imagem se houver pessoas reconhecíveis).
2. Capacidade máxima confirmada do piso superior.

## Ao receber

1. Otimizar cada foto para <250 KB (squoosh ou sharp-cli).
2. Salvar em `public/assets/eventos/*.jpg`.
3. Atualizar o array `EVENTOS_GALERIA` em `src/components/sections/Space.tsx` com os novos paths e `alt` descritivos.
4. Adicionar/ajustar chip de capacidade em `EVENTOS_CHIPS` com o número confirmado.
5. Remover o comentário `TODO(cliente)` acima de `EVENTOS_GALERIA`.
6. Rodar `npm run build` e validar o bloco `#eventos-privados` em mobile e desktop.
7. Remover esta entrada deste arquivo.
