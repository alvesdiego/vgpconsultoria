# VGP Consultoria — Site Institucional

Rebrand completo do site da **VGP Consultoria**, desenvolvido com Next.js 16 (App Router), TypeScript e Tailwind CSS.

## Stack Tecnológica

| Tecnologia                      | Versão | Papel                             |
| ------------------------------- | ------ | --------------------------------- |
| **Next.js**                     | 16.x   | Framework React (App Router, SSG) |
| **TypeScript**                  | 5.x    | Tipagem estática                  |
| **Tailwind CSS**                | 3.x    | Estilização utility-first         |
| **Lucide React**                | latest | Ícones                            |
| **React Hook Form**             | 7.x    | Formulários com validação         |
| **React Intersection Observer** | 9.x    | Animações scroll-triggered        |

## Design System

### Paleta de Cores (Tons Orgânicos)

```
Sage (Verde Sálvia) — Primário ····· #4B6858
Gold (Dourado Quente) — Acento ···· #C09A6B
Cream (Creme) — Background ········ #F8F4EF
Sand (Areia) — Seções alt ·········· #EDE5D8
Forest (Floresta) — Texto dark ····· #1E2D26
```

### Tipografia

- **Headings:** Playfair Display (serif, elegante)
- **Body:** Inter (sans-serif, clean)

## Estrutura do Projeto

```
src/
├── app/
│   ├── layout.tsx        # Root layout + metadados SEO
│   ├── globals.css       # Design tokens + utilitários globais
│   ├── page.tsx          # Home (landing page)
│   ├── sobre/page.tsx    # Sobre a VGP
│   ├── servicos/page.tsx # Portfólio de serviços
│   ├── blog/page.tsx     # Blog & conteúdo
│   ├── contato/page.tsx  # Contato + formulário
│   └── not-found.tsx     # Página 404
├── components/
│   ├── layout/
│   │   ├── Header.tsx    # Navegação sticky + mobile menu
│   │   └── Footer.tsx    # Rodapé completo
│   ├── sections/
│   │   ├── HeroSection.tsx       # Hero full-screen
│   │   ├── StatsSection.tsx      # Contadores animados
│   │   ├── ServicesOverview.tsx  # Grid de serviços
│   │   ├── MethodologySection.tsx # 6 etapas NR-01
│   │   ├── PillarsSection.tsx    # Pilares da empresa
│   │   ├── BlogPreview.tsx       # Preview do blog
│   │   └── CTASection.tsx        # Contato + formulário
│   └── ui/
│       ├── SectionTitle.tsx  # Títulos de seção reutilizáveis
│       ├── ServiceCard.tsx   # Cards de serviço
│       ├── BlogCard.tsx      # Cards de artigo
│       └── ContactForm.tsx   # Formulário → WhatsApp
├── data/
│   ├── services.ts       # Dados dos 4 serviços
│   └── blog-posts.ts     # Posts do blog
└── lib/
    ├── constants.ts      # Dados da empresa, nav, stats
    ├── types.ts          # TypeScript interfaces
    └── utils.ts          # cn() e helpers
```

## Páginas

| Rota        | Descrição                                                                              |
| ----------- | -------------------------------------------------------------------------------------- |
| `/`         | Landing page com Hero, Stats, Serviços, Metodologia NR-01, Pilares, Blog Preview e CTA |
| `/sobre`    | História, CEO Valéria Gomes, Missão/Visão/Valores, Pilares                             |
| `/servicos` | Portfólio completo com detalhamento de cada serviço                                    |
| `/blog`     | Lista de artigos com destaque e categorias                                             |
| `/contato`  | Formulário, mapa, canais e redes sociais                                               |

## Desenvolvimento

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # Build de produção
npm start         # Servidor de produção
```

## Deploy

O projeto é totalmente estático (SSG) e pode ser publicado no **Vercel** com zero configuração:

1. Conecte o repositório no [vercel.com](https://vercel.com)
2. O Vercel detecta Next.js automaticamente
3. Configure o domínio `vgpconsultoria.com.br`

## Próximos Passos Recomendados

- [ ] Adicionar foto real da CEO Valéria Gomes (substituir placeholder em `/sobre`)
- [ ] Adicionar logo SVG da VGP (Header e Footer)
- [ ] Criar imagens de capa para os artigos do blog em `/public/blog/`
- [ ] Adicionar `og-image.jpg` em `/public/` para compartilhamento social
- [ ] Integrar CMS (Notion API / Sanity) para gerenciar blog posts
- [ ] Adicionar Analytics (Vercel Analytics ou Google Analytics)
- [ ] Implementar rotas dinâmicas para artigos do blog: `/blog/[slug]`
- [ ] Configurar formulário com servidor real (Resend / SendGrid) como backup do WhatsApp
