import type { Service } from '@/lib/types'

export const SERVICES: Service[] = [
  {
    id: '1',
    slug: 'gro-pgr-nr01',
    title: 'GRO / PGR e NR-01',
    shortDescription:
      'Adequação legal completa com foco em riscos psicossociais, conforme a Portaria nº 1.419/2024.',
    fullDescription:
      'Oferecemos a implementação completa do Gerenciamento de Riscos Ocupacionais (GRO) e do Programa de Gerenciamento de Riscos (PGR), garantindo total conformidade com a NR-01 atualizada em 2024. Nossa metodologia inclui o mapeamento de riscos psicossociais — um diferencial obrigatório e estratégico para empresas modernas.',
    icon: 'shield-check',
    color: 'sage',
    features: [
      'Inventário Psicossocial 100% digital',
      'Relatórios compatíveis com auditorias e fiscalizações',
      'Mapeamento completo de riscos físicos, químicos, biológicos e psicossociais',
      'Metodologia de 6 etapas com acompanhamento dedicado',
      'Dashboards em tempo real',
    ],
    benefits: [
      'Conformidade total com a legislação trabalhista',
      'Redução de passivos judiciais e multas',
      'Melhoria do clima organizacional',
      'Proteção à saúde mental dos colaboradores',
    ],
    cta: 'Implementar GRO/PGR',
  },
  {
    id: '2',
    slug: 'recrutamento-selecao',
    title: 'Recrutamento e Seleção',
    shortDescription:
      'Processo seletivo estratégico que une precisão técnica e alinhamento cultural para cada vaga.',
    fullDescription:
      'Nosso processo de Recrutamento e Seleção vai muito além do currículo. Utilizamos ferramentas avançadas de avaliação de competências e mapeamento de perfil para garantir que cada contratação seja precisa e alinhada à cultura e estratégia da empresa cliente.',
    icon: 'users',
    color: 'gold',
    features: [
      'Mapeamento detalhado do perfil da vaga',
      'Avaliação de competências técnicas e comportamentais',
      'Alinhamento à cultura organizacional',
      'Processos customizados para cada empresa',
      'Feedback estruturado para todos os candidatos',
    ],
    benefits: [
      'Redução do turnover e custo de contratação',
      'Equipes mais coesas e produtivas',
      'Menor tempo de adaptação do novo colaborador',
      'Decisões de contratação baseadas em dados',
    ],
    cta: 'Contratar R&S',
  },
  {
    id: '3',
    slug: 'treinamento-desenvolvimento',
    title: 'Treinamento e Desenvolvimento',
    shortDescription:
      'Capacitação sob medida em todas as etapas da jornada do colaborador — do onboarding à liderança.',
    fullDescription:
      'Nossa frente de T&D atua desde a integração de novos colaboradores até a formação de líderes. Com trilhas personalizadas por nível hierárquico e necessidade, desenvolvemos as pessoas de dentro para fora, fortalecendo a cultura e a performance organizacional.',
    icon: 'graduation-cap',
    color: 'sage',
    features: [
      'Onboarding e integração cultural estruturados',
      'Capacitação em metodologias ágeis',
      'Programas de desenvolvimento de liderança',
      'Trilhas de aprendizagem por cargo e área',
      'Suporte a transições de carreira internas',
    ],
    benefits: [
      'Aumento de produtividade e engajamento',
      'Lideranças mais preparadas e confiantes',
      'Cultura de aprendizagem contínua',
      'Redução de gaps de competência',
    ],
    cta: 'Ver Programas de T&D',
  },
  {
    id: '4',
    slug: 'avaliacoes-psicologicas',
    title: 'Avaliações Psicológicas',
    shortDescription:
      'Ciência aplicada ao comportamento humano para contratações mais seguras e ambientes mais saudáveis.',
    fullDescription:
      'Realizamos avaliações psicológicas com rigor científico e validação reconhecida. Nossa abordagem une testes psicométricos, entrevistas estruturadas e análise de inteligência emocional, oferecendo uma visão profunda do potencial e do perfil comportamental de cada indivíduo.',
    icon: 'brain',
    color: 'gold',
    features: [
      'Testes psicológicos cientificamente validados',
      'Avaliação de inteligência emocional',
      'Análise de perfil comportamental completo',
      'Laudos detalhados e fundamentados',
      'Integração com processos de R&S e promoções',
    ],
    benefits: [
      'Decisões de RH mais seguras e embasadas',
      'Identificação precoce de riscos psicossociais',
      'Promoções e retenção mais assertivas',
      'Ambientes de trabalho mais saudáveis',
    ],
    cta: 'Solicitar Avaliação',
  },
]
