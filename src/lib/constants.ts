// ─── Company Info ───────────────────────────────────────────────────────────
export const COMPANY = {
  name: 'VGP Consultoria',
  tagline: 'Excelência e eficiência para sua empresa',
  description:
    'Seu parceiro ideal em conformidade legal, gestão de talentos e saúde organizacional.',
  ceo: 'Valéria Gomes',
  cnpj: '', // add if needed
  address: {
    street: 'Rua Paulo de Faria, 182',
    neighborhood: 'Tucuruvi',
    city: 'São Paulo',
    state: 'SP',
    zip: '02267-000',
    full: 'Rua Paulo de Faria, 182 – Tucuruvi, São Paulo – SP, 02267-000',
    mapsUrl:
      'https://maps.google.com/?q=Rua+Paulo+de+Faria,+182,+Tucuruvi,+São+Paulo,+SP',
  },
  contact: {
    phone: '(11) 94217-6957',
    phoneRaw: '+5511942176957',
    whatsapp: 'https://wa.me/5511942176957',
    email: 'contato@vgpconsultoria.com.br',
  },
  hours: {
    weekdays: 'Segunda a Sexta-feira',
    time: '08:00 às 18:00',
    full: 'Seg – Sex | 08:00 às 18:00',
  },
  social: {
    facebook:  'https://www.facebook.com/profile.php?id=61579827232479',
    instagram: 'https://www.instagram.com/vgpconsultoria',
    youtube:   'https://www.youtube.com/@vgpconsultoria',
    linkedin:  'https://www.linkedin.com/company/vgpconsultoriarhempresarial/',
  },
} as const

// ─── Navigation ─────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: 'Home',      href: '/' },
  { label: 'Sobre',     href: '/sobre' },
  { label: 'Serviços',  href: '/servicos' },
  { label: 'Blog',      href: '/blog' },
  { label: 'Contato',   href: '/contato' },
] as const

// ─── Stats ───────────────────────────────────────────────────────────────────
export const STATS = [
  { value: 500, suffix: '+', label: 'Avaliações Realizadas' },
  { value: 100, suffix: '%', label: 'Digital' },
  { value: 120, suffix: '+', label: 'Clientes Atendidos' },
  { value: 6,   suffix: '',  label: 'Anos de Experiência' },
] as const

// ─── Methodology Steps ───────────────────────────────────────────────────────
export const METHODOLOGY_STEPS = [
  {
    step: '01',
    title: 'Diagnóstico e Mapeamento',
    description:
      'Análise detalhada do ambiente organizacional para identificar e mapear todos os riscos ocupacionais e psicossociais.',
    icon: 'search',
  },
  {
    step: '02',
    title: 'Conscientização',
    description:
      'Engajamento e envolvimento dos trabalhadores, criando uma cultura de segurança e saúde dentro da empresa.',
    icon: 'users',
  },
  {
    step: '03',
    title: 'Plano de Ação',
    description:
      'Estruturação de um plano de ação robusto, baseado no PGR, com metas claras e cronograma definido.',
    icon: 'clipboard',
  },
  {
    step: '04',
    title: 'Integração Estratégica',
    description:
      'Alinhamento da gestão de riscos à estratégia do negócio, garantindo sustentabilidade e conformidade contínua.',
    icon: 'link',
  },
  {
    step: '05',
    title: 'Monitoramento Contínuo',
    description:
      'Acompanhamento periódico com dashboards e indicadores, realizando ajustes proativos conforme necessário.',
    icon: 'activity',
  },
  {
    step: '06',
    title: 'Equipe Multidisciplinar',
    description:
      'Atuação integrada de especialistas em SST, RH e Psicologia para uma abordagem 360° da saúde organizacional.',
    icon: 'star',
  },
] as const

// ─── Company Pillars ─────────────────────────────────────────────────────────
export const PILLARS = [
  {
    title: 'Inovação',
    description:
      'Utilizamos ferramentas 100% digitais e metodologias modernas para entregar soluções ágeis e eficazes.',
    icon: 'lightbulb',
  },
  {
    title: 'Colaboração',
    description:
      'Trabalhamos como extensão do time dos nossos clientes, co-criando soluções sob medida para cada realidade.',
    icon: 'handshake',
  },
  {
    title: 'Compromisso',
    description:
      'Garantimos resultados com rigor técnico, cumprimento de prazos e total responsabilidade legal.',
    icon: 'shield',
  },
  {
    title: 'Valorização das Pessoas',
    description:
      'Acreditamos que o capital humano é o maior ativo de qualquer empresa. Cada ação nossa reflete esse valor.',
    icon: 'heart',
  },
] as const
