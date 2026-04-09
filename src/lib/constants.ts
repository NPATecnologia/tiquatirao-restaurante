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
  ifood: "https://www.ifood.com.br/delivery/sao-paulo-sp/restaurante-tiquatirao-frutos-do-mar-penha-de-franca/d6b9dea7-ea42-499c-a564-4af585d2a890",
  tripadvisor: "https://www.tripadvisor.com.br/Restaurant_Review-g303631-d5349937-Reviews-Tiquatirao_Frutos_Do_Mar-Sao_Paulo_State_of_Sao_Paulo.html",
  youtube: "https://www.youtube.com/watch?v=LEtamk7pkxQ",
  maps: "https://www.google.com/maps/place/Restaurante+Tiquatirão+Mar+%26+Brasa/@-23.5139926,-46.5367711,17z/",
  linktree: "https://linktr.ee/tiquatiraorestaurante",
  whatsappUrl: `https://wa.me/551126418116?text=${encodeURIComponent("Olá! Gostaria de fazer uma reserva no Tiquatirão.")}`,
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1!2d-46.5367711!3d-23.5139926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e8b5e8b5e8b%3A0x0!2sRestaurante+Tiquatir%C3%A3o+Mar+%26+Brasa!5e0!3m2!1spt-BR!2sbr!4v1",
} as const;

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Cardápio", href: "#cardapio" },
  { label: "Galeria", href: "#galeria" },
  { label: "Espaço", href: "#espaco" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
] as const;

export const MENU_CATEGORIES = [
  {
    name: "Entradas & Petiscos",
    items: ["Casquinha de Siri", "Caldo de Piranha", "Bobó", "Seleta Gelada"],
  },
  {
    name: "Frutos do Mar",
    items: ["Paella Valenciana", "Caldeirada Portuguesa", "Camarão na Moranga", "Salmão Grelhado", "Abadejo Trópica"],
  },
  {
    name: "Peixes & Massas",
    items: ["Massa com Frutos do Mar", "Peixes Assados", "Bacalhau Premium", "Polvo à Lagareiro"],
  },
  {
    name: "Mar & Brasa",
    items: ["Carnes na Brasa", "Picanha Premium", "Costela ao Forno", "Frango Grelhado"],
  },
] as const;

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
] as const;

export const FAQ_ITEMS = [
  {
    question: "Qual o horário de funcionamento?",
    answer: "Funcionamos de terça a domingo. Para horários detalhados, entre em contato pelo nosso WhatsApp.",
  },
  {
    question: "Vocês fazem reservas?",
    answer: "Sim! Faça sua reserva pelo WhatsApp ou ligue para (11) 2641-8116. Recomendamos reservar para fins de semana e feriados.",
  },
  {
    question: "Tem estacionamento?",
    answer: "Sim, possuímos estacionamento com manobrista sem custo adicional para nossos clientes.",
  },
  {
    question: "Vocês fazem delivery?",
    answer: "Sim! Estamos no iFood com nota 4.8. Basta buscar por Tiquatirão no aplicativo.",
  },
  {
    question: "Tem espaço para eventos?",
    answer: "Sim, temos um piso superior ideal para aniversários, confraternizações e eventos corporativos. Consulte disponibilidade.",
  },
  {
    question: "Vocês têm espaço kids?",
    answer: "Sim! Temos brinquedão com monitoria para crianças, para que os pais possam aproveitar a refeição com tranquilidade.",
  },
] as const;
