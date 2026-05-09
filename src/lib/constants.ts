export const SITE = {
  name: "Tiquatirão Mar & Brasa",
  tagline: "O litoral, na capital!",
  phone: "(11) 2641-8116",
  phoneClean: "551126418116",
  email: "restaurantes.central@hotmail.com",
  address: "Av. Governador Carvalho Pinto, 1.021 — Penha de França, São Paulo/SP",
  cep: "03612-020",
  foundedYear: 1997,
  instagram: "https://www.instagram.com/tiquatiraorestaurante/",
  facebook: "https://www.facebook.com/Tiquatirao/",
  tiktok: "https://www.tiktok.com/@tiquatiraorestaurante",
  threads: "https://www.threads.com/@tiquatiraorestaurante",
  linkedin: "https://www.linkedin.com/in/tiquatir%C3%A3o-restaurante-476b49234/",
  ifood: "https://www.ifood.com.br/delivery/sao-paulo-sp/restaurante-tiquatirao-frutos-do-mar-penha-de-franca/d6b9dea7-ea42-499c-a564-4af585d2a890",
  tripadvisor: "https://www.tripadvisor.com.br/Restaurant_Review-g303631-d5349937-Reviews-Tiquatirao_Frutos_Do_Mar-Sao_Paulo_State_of_Sao_Paulo.html",
  youtube: "https://www.youtube.com/watch?v=LEtamk7pkxQ",
  maps: "https://www.google.com/maps/place/Restaurante+Tiquatirão+Mar+%26+Brasa/@-23.5139926,-46.5367711,17z/",
  linktree: "https://linktr.ee/tiquatiraorestaurante",
  whatsappUrl: `https://wa.me/551126418116?text=${encodeURIComponent("Olá! Gostaria de fazer uma reserva no Tiquatirão.")}`,
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.5144435107345!2d-46.53934602400041!3d-23.51399257883244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5fb5366bea1b%3A0x1f7ea0dd88009e77!2sRestaurante%20Tiquatir%C3%A3o%20Mar%20%26%20Brasa!5e0!3m2!1spt-BR!2sbr!4v1775767864595!5m2!1spt-BR!2sbr",
} as const;

export const WHATSAPP_EVENTOS_URL = `https://wa.me/${SITE.phoneClean}?text=${encodeURIComponent(
  "Olá! Gostaria de orçamento para evento privado no piso superior do Tiquatirão."
)}`;

export const PAYMENT_METHODS = [
  { label: "Pix", icon: "pix", note: null },
  { label: "Dinheiro", icon: "cash", note: null },
  { label: "Crédito", icon: "credit", note: "Consultar bandeiras" },
  { label: "Débito", icon: "debit", note: "Consultar bandeiras" },
  { label: "Vale-refeição", icon: "voucher", note: "Consultar bandeiras" },
] as const;

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Galeria", href: "#galeria" },
  { label: "Espaço", href: "#espaco" },
  { label: "Delivery", href: "#delivery" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
] as const;

export const MENU_CATEGORIES = [
  {
    name: "Entradas & Petiscos",
    icon: "anchor",
    items: [
      "Casquinha de Siri",
      "Caldo de Piranha",
      "Bobó",
      "Seleta Gelada",
    ],
  },
  {
    name: "Frutos do Mar",
    icon: "fish",
    items: [
      "Paella Valenciana",
      "Caldeirada Portuguesa",
      "Camarão na Moranga",
      "Salmão Grelhado",
      "Abadejo Trópica",
    ],
  },
  {
    name: "Peixes & Massas",
    icon: "waves",
    items: [
      "Massa com Frutos do Mar",
      "Peixes Assados",
      "Bacalhau à Portuguesa",
      "Polvo à Lagareiro",
    ],
  },
  {
    name: "Mar & Brasa",
    icon: "flame",
    items: [
      "Carnes na Brasa",
      "Picanha na Brasa",
      "Costela ao Forno",
      "Frango Grelhado",
    ],
  },
] as const;

// Fonte: site oficial e dados públicos — validar trimestralmente
export const STATS = [
  { value: "27+", label: "Anos de tradição" },
  { value: "4.8", label: "Nota no iFood" },
  { value: "96%", label: "Recomendam no Facebook" },
  { value: "31K", label: "Seguidores no Instagram" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Carlos M.",
    text: "A paella é simplesmente a melhor de São Paulo. Porções gigantes que servem 3 pessoas fácil. Voltaremos!",
    platform: "TripAdvisor",
    rating: 5,
  },
  {
    name: "Ana Paula S.",
    text: "Ambiente incrível, as crianças amaram o espaço kids e as tartarugas. Música ao vivo perfeita. Recomendo!",
    platform: "Google",
    rating: 5,
  },
  {
    name: "Roberto L.",
    text: "Caldeirada digna de Portugal. Atendimento impecável e o vinho com preço justo. Melhor custo-benefício da Zona Leste.",
    platform: "Facebook",
    rating: 5,
  },
  {
    name: "Mariana F.",
    text: "Pedi pelo iFood e chegou quentinho, bem embalado. A paella individual é perfeita. Virei cliente fiel!",
    platform: "iFood",
    rating: 5,
  },
  {
    name: "Paulo R.",
    text: "O restaurante parece um navio por dentro! A decoração é única. Levei amigos de fora e ficaram impressionados.",
    platform: "Google",
    rating: 5,
  },
  {
    name: "Fernanda T.",
    text: "Fizemos o aniversário da minha mãe no piso superior. Tudo impecável: comida, decoração, música. Momento inesquecível.",
    platform: "TripAdvisor",
    rating: 5,
  },
] as const;

export const SIGNATURE_DISHES = [
  {
    name: "Paella Valenciana",
    description:
      "Nossa estrela. Arroz espanhol com camarões, lulas, mariscos e açafrão, servido na panela de ferro.",
    image: "/assets/paella-signature.jpg",
    serves: "3–4 pessoas",
    tag: "Mais Pedido",
  },
  {
    name: "Petiscos do Mar",
    description:
      "Seleção crocante de lula, camarão e peixe empanados com molho tártaro da casa.",
    image: "/assets/petiscos-signature.jpg",
    serves: "2–3 pessoas",
    tag: "Para Compartilhar",
  },
  {
    name: "Picanha na Brasa",
    description:
      "Picanha grelhada no ponto, acompanhada de arroz, farofa e vinagrete. Tradição da casa na brasa.",
    image: "/assets/picanha-signature.jpg",
    serves: "2 pessoas",
    tag: "Mar & Brasa",
  },
  {
    name: "Frango na Brasa",
    description:
      "Peito de frango grelhado com ervas finas, arroz e legumes salteados.",
    image: "/assets/frango-signature.jpg",
    serves: "1–2 pessoas",
    tag: "Leve & Saboroso",
  },
  {
    name: "Peixe Dourado",
    description:
      "Filé de peixe empanado na farinha panko com arroz branco e batatas rústicas.",
    image: "/assets/peixe-signature.jpg",
    serves: "2 pessoas",
    tag: "Clássico",
  },
  {
    name: "Tilápia à Fiorentina",
    description:
      "Filé grelhado com molho branco, espinafre e atum — receita assinatura do Chef Marco Falcão desde os primeiros anos da casa. Acompanha arroz à Tasmânia e batata noisette.",
    image: "/assets/tilapia-fiorentina.jpg", // TODO(cliente): enviar foto do prato
    serves: "1–2 pessoas",
    tag: "Do Chef",
  },
  {
    name: "Tainha na Brasa",
    description:
      "Tainha inteira grelhada na brasa, servida com arroz grego, pirão de peixe e fritas. Peixe do litoral preparado como manda a tradição da família.",
    image: "/assets/tainha-na-brasa.jpg", // TODO(cliente): enviar foto do prato
    serves: "2 pessoas",
    tag: "Mar & Brasa",
  },
  {
    name: "Paella Individual",
    description:
      "A mesma receita da Paella Valenciana em porção individual. Perfeita com uma cerveja gelada.",
    image: "/assets/paella-individual-com-cerveja.jpg",
    serves: "1 pessoa",
    tag: "Solo",
  },
] as const;

export const GENERATIONS = [
  {
    generation: "1ª geração",
    name: "Sr. José da Mota",
    role: "Fundou o Tiquatirão em 1997. Trouxe o mar de Portugal pra Penha.",
    image: "/assets/familia/jose-mota.svg",
    alt: "Sr. José da Mota, fundador do Tiquatirão em 1997",
  },
  {
    generation: "2ª geração",
    name: "Kelly e Johnny Mota",
    role: "Tocam a casa desde os anos 2000. Mantêm a família unida à mesa — a nossa e a dos outros.",
    image: "/assets/familia/kelly-johnny.svg",
    alt: "Kelly e Johnny Mota, segunda geração à frente do Tiquatirão",
  },
  {
    generation: "3ª geração",
    name: "Os netos",
    role: "Ainda em formação. Já aprendem que prato bom começa no fogo e termina na conversa.",
    image: "/assets/familia/netos.svg",
    alt: "Netos da família Mota, terceira geração em formação",
  },
] as const;

export const CHEF = {
  eyebrow: "Na cozinha desde 1997",
  name: "Chef Marco Falcão",
  role: "Entrou com o Sr. José e nunca mais saiu. Criou a paella que virou ícone. Cozinha que vira memória.",
  image: "/assets/familia/chef-marco-falcao.svg",
  alt: "Chef Marco Falcão, na cozinha do Tiquatirão desde 1997",
} as const;

export const HISTORY_EVENTS = [
  {
    year: 1997,
    title: "O Sonho Nasce",
    description:
      "Sr. José da Mota, com seus filhos Kelly e Johnny e o Chef Marco Falcão, abre as portas do Tiquatirão na Penha de França. O objetivo: trazer os sabores do litoral para a Zona Leste de São Paulo.",
  },
  {
    year: 1999,
    title: "Paella de Domingo",
    description:
      "A paella valenciana gigante vira prato-estrela da casa. Aos domingos, a fila começa antes do almoço — tradição que não saiu mais do cardápio.",
  },
  {
    year: 2001,
    title: "Primeira Expansão",
    description:
      "Com o restaurante lotando aos fins de semana, o Tiquatirão ganha o piso superior exclusivo para eventos e confraternizações.",
  },
  {
    year: 2003,
    title: "Música ao Vivo",
    description:
      "Os domingos ganham trilha sonora ao vivo. Casal de músicos atende pedidos da mesa — tradição que segue firme até hoje.",
  },
  {
    year: 2005,
    title: "O Barco Amarelo",
    description:
      "A icônica fachada com o barco amarelo e a decoração náutica completa são instaladas, transformando o restaurante em um marco visual do bairro.",
  },
  {
    year: 2010,
    title: "Reconhecimento Nacional",
    description:
      "O Tiquatirão recebe o selo Travelers' Choice do TripAdvisor, consolidando sua reputação entre os melhores restaurantes de frutos do mar de São Paulo.",
  },
  {
    year: 2015,
    title: "Espaço Família",
    description:
      "Inauguração do espaço kids com brinquedão e monitoria, reforçando a vocação do Tiquatirão como destino para toda a família.",
  },
  {
    year: 2018,
    title: "Fenômeno Digital",
    description:
      "O restaurante ultrapassa 20 mil seguidores no Instagram. Fotos das paellas gigantes viralizam e atraem público de toda São Paulo.",
  },
  {
    year: 2020,
    title: "Sabores em Casa",
    description:
      "Parceria com o iFood leva o sabor do Tiquatirão para a casa dos clientes, alcançando nota 4.8 com milhares de avaliações positivas.",
  },
  {
    year: 2024,
    title: "27 Anos de Mar & Brasa",
    description:
      "Mais de duas décadas depois, o Tiquatirão segue fiel à sua missão: reunir famílias ao redor de pratos generosos com a energia do litoral.",
  },
] as const;

export const PRESS_MENTIONS = [
  {
    outlet: "Empresários de Sucesso TV",
    title: "Matéria especial sobre o Restaurante Tiquatirão",
    year: 2019,
    url: SITE.youtube,
  },
  {
    outlet: "Os Melhores da Gastronomia",
    title: "Tiquatirão Frutos do Mar — Referência na Zona Leste",
    year: 2021,
    url: "https://www.osmelhoresdagastronomia.com.br/2021/10/21/tiquatirao-frutos-do-mar/",
  },
  // TODO: validar com cliente se o prêmio Travelers' Choice 2024 foi efetivamente recebido. Se sim, restaurar título original.
  {
    outlet: "TripAdvisor",
    title: "Restaurante reconhecido pela comunidade de viajantes",
    year: 2024,
    url: SITE.tripadvisor,
  },
  {
    outlet: "iFood",
    title: "Nota 4.8 — Destaque em frutos do mar no iFood SP",
    year: 2024,
    url: SITE.ifood,
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "Qual o horário de funcionamento?",
    answer:
      "Funcionamos de terça a domingo. Para horários detalhados, entre em contato pelo nosso WhatsApp.",
  },
  {
    question: "Vocês fazem reservas?",
    answer:
      "Sim! Faça sua reserva pelo WhatsApp ou ligue para (11) 2641-8116. Recomendamos reservar para fins de semana e feriados.",
  },
  {
    question: "Tem estacionamento?",
    answer:
      "Sim, possuímos estacionamento com manobrista sem custo adicional para nossos clientes.",
  },
  {
    question: "Vocês fazem delivery?",
    answer:
      "Sim! Estamos no iFood com nota 4.8. Basta buscar por Tiquatirão no aplicativo.",
  },
  {
    question: "Tem espaço para eventos?",
    answer:
      "Sim, temos um piso superior ideal para aniversários, confraternizações e eventos corporativos. Consulte disponibilidade.",
  },
  {
    question: "Vocês têm espaço kids?",
    answer:
      "Sim! Temos brinquedão com monitoria para crianças, para que os pais possam aproveitar a refeição com tranquilidade.",
  },
  {
    question: "Quais as formas de pagamento?",
    answer:
      "Aceitamos Pix, dinheiro, cartão de crédito e débito (consultar bandeiras disponíveis) e vale-refeição (consultar bandeiras disponíveis).",
  },
  {
    question: "As porções servem quantas pessoas?",
    answer:
      "Nossas porções são generosas! A maioria dos pratos serve de 2 a 4 pessoas. A Paella Valenciana, por exemplo, serve até 4.",
  },
] as const;
