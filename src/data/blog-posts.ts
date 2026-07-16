import type { BlogPost } from '@/lib/types'

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'nr01-riscos-psicossociais-2024',
    title: 'NR-01 Atualizada: O que a Portaria 1.419/2024 muda para sua empresa',
    excerpt:
      'A inclusão dos riscos psicossociais no PGR é obrigatória. Entenda o que muda, quem é obrigado a se adequar e como implementar da forma correta.',
    coverImage: '/blog/nr01-2024.jpg',
    category: 'Legislação e SST',
    author: 'Valéria Gomes',
    publishedAt: '2024-09-10',
    readingTime: 8,
    tags: ['NR-01', 'PGR', 'Riscos Psicossociais', 'Conformidade'],
  },
  {
    id: '2',
    slug: 'saude-mental-trabalho-estrategia',
    title: 'Saúde Mental no Trabalho: De Pauta Social a Estratégia de Negócio',
    excerpt:
      'Empresas que investem em saúde mental têm colaboradores mais produtivos, menor absenteísmo e melhor retenção de talentos. Veja os dados e como agir.',
    coverImage: '/blog/saude-mental.jpg',
    category: 'Saúde Organizacional',
    author: 'Valéria Gomes',
    publishedAt: '2024-08-22',
    readingTime: 6,
    tags: ['Saúde Mental', 'Produtividade', 'Bem-estar', 'RH'],
  },
  {
    id: '3',
    slug: 'recrutamento-por-competencias',
    title: 'Recrutamento por Competências: Como Contratar com Precisão Científica',
    excerpt:
      'A análise de perfil vai muito além do currículo. Descubra como o recrutamento baseado em competências reduz o turnover e melhora a performance.',
    coverImage: '/blog/recrutamento-competencias.jpg',
    category: 'Gestão de Talentos',
    author: 'Valéria Gomes',
    publishedAt: '2024-07-15',
    readingTime: 5,
    tags: ['Recrutamento', 'Competências', 'Seleção', 'Talentos'],
  },
  {
    id: '4',
    slug: 'lideranca-humanizada-resultados',
    title: 'Liderança Humanizada: O Estilo que Gera Resultados Reais',
    excerpt:
      'Líderes que desenvolvem inteligência emocional constroem equipes mais resilientes. Conheça o modelo de liderança que combina empatia e performance.',
    coverImage: '/blog/lideranca.jpg',
    category: 'Desenvolvimento',
    author: 'Valéria Gomes',
    publishedAt: '2024-06-30',
    readingTime: 7,
    tags: ['Liderança', 'Inteligência Emocional', 'Gestão', 'T&D'],
  },
]

export const BLOG_CATEGORIES = [
  'Todos',
  'Legislação e SST',
  'Saúde Organizacional',
  'Gestão de Talentos',
  'Desenvolvimento',
]
