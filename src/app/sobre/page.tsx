import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Heart, Users, Lightbulb, Shield, Handshake, ArrowRight, MessageCircle } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { COMPANY, PILLARS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description:
    'Conheça a VGP Consultoria, liderada pela CEO Valéria Gomes. Nossa missão, visão, valores e os pilares que nos tornam referência em RH e SST.',
}

const ICON_MAP: Record<string, React.ElementType> = {
  lightbulb: Lightbulb,
  handshake: Handshake,
  shield:    Shield,
  heart:     Heart,
}

const PILLAR_COLORS = [
  { bg: 'bg-sage-100',  icon: 'text-sage-500',  num: 'text-sage-200'  },
  { bg: 'bg-gold-50',   icon: 'text-gold-500',   num: 'text-gold-200'  },
  { bg: 'bg-sage-100',  icon: 'text-sage-500',  num: 'text-sage-200'  },
  { bg: 'bg-gold-50',   icon: 'text-gold-500',   num: 'text-gold-200'  },
]

const VALUES = [
  { label: 'Ética e Transparência',       desc: 'Atuamos com integridade total em cada projeto.' },
  { label: 'Foco em Resultado',           desc: 'Cada entrega é planejada para gerar impacto real.' },
  { label: 'Responsabilidade Legal',      desc: 'Garantimos conformidade total com a legislação.' },
  { label: 'Humanização do Trabalho',     desc: 'Pessoas sempre no centro de cada decisão.' },
  { label: 'Inovação Contínua',           desc: 'Adotamos as melhores ferramentas e metodologias.' },
  { label: 'Parceria de Longo Prazo',     desc: 'Crescemos junto com nossos clientes.' },
]

export default function SobrePage() {
  return (
    <div className="pt-24">
      {/* Page Hero */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1E2D26 0%, #4B6858 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }}
          aria-hidden
        />
        <div className="absolute -bottom-1 inset-x-0 pointer-events-none" aria-hidden>
          <svg viewBox="0 0 1440 64" fill="#F8F4EF" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
            <path d="M0,64 C480,0 960,0 1440,64 L1440,64 L0,64 Z" />
          </svg>
        </div>
        <div className="container-vgp relative z-10 text-center space-y-4">
          <span className="section-label text-gold-300 [&::before]:bg-gold-300">Quem Somos</span>
          <h1 className="font-serif font-bold text-display-lg text-white text-balance">
            Especialistas em pessoas e conformidade
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto text-balance">
            A VGP Consultoria nasceu da crença de que ambientes de trabalho saudáveis e legalmente corretos
            são a base para o crescimento sustentável de qualquer empresa.
          </p>
        </div>
      </section>

      {/* Story + CEO */}
      <section className="section-py bg-cream-100">
        <div className="container-vgp grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-sage-100 to-sage-200 overflow-hidden shadow-float flex items-end justify-center">
              {/* Replace with actual CEO photo */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center space-y-3 p-8">
                  <div className="w-24 h-24 rounded-full bg-sage-300 mx-auto flex items-center justify-center">
                    <Users size={40} className="text-sage-600" />
                  </div>
                  <p className="text-sage-600 font-serif font-semibold text-lg">Valéria Gomes</p>
                  <p className="text-sage-500 text-sm">CEO & Fundadora</p>
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-float px-6 py-4 space-y-1">
              <p className="font-serif font-bold text-2xl text-sage-500">6+</p>
              <p className="text-xs text-forest-muted font-medium">Anos de Experiência</p>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full border-4 border-gold-400/30" aria-hidden />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <span className="section-label">Nossa História</span>
              <h2 className="font-serif font-bold text-display-sm text-forest mt-3 mb-4 text-balance">
                Uma consultoria fundada no propósito de transformar organizações
              </h2>
            </div>
            <div className="space-y-4 text-forest-muted leading-relaxed">
              <p>
                A <strong className="text-forest">VGP Consultoria</strong> foi fundada por{' '}
                <strong className="text-forest">Valéria Gomes</strong>, profissional com trajetória sólida
                na intersecção entre Recursos Humanos e Saúde e Segurança no Trabalho. Com a visão de
                que a conformidade legal e o cuidado com as pessoas são inseparáveis, Valéria criou
                uma empresa que atua de forma integrada nesses dois universos.
              </p>
              <p>
                Nosso diferencial está na abordagem humanizada e no rigor técnico. Não entregamos
                apenas documentos — entregamos transformações. Da adequação à NR-01 ao desenvolvimento
                de lideranças, cada projeto é conduzido com precisão, cuidado e compromisso com
                resultados mensuráveis.
              </p>
              <p>
                Hoje, a VGP Consultoria é referência em riscos psicossociais e gestão integrada de
                RH e SST, atendendo empresas de diferentes portes e segmentos em São Paulo e no Brasil.
              </p>
            </div>
            <a href={COMPANY.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
              <MessageCircle size={16} />
              Fale com a Valéria
            </a>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-py bg-cream-200" aria-labelledby="mvv-heading">
        <div className="container-vgp space-y-12">
          <SectionTitle
            label="Missão, Visão & Valores"
            title="O que nos guia"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: 'Missão',
                text: 'Promover ambientes de trabalho seguros, saudáveis e legalmente conformes, por meio de soluções integradas de RH e SST que valorizam as pessoas e potencializam os resultados das organizações.',
                bg: 'bg-sage-500',
              },
              {
                label: 'Visão',
                text: 'Ser a consultoria de referência em gestão integrada de Recursos Humanos e Saúde e Segurança no Trabalho no Brasil, reconhecida pela excelência técnica e pelo impacto humano.',
                bg: 'bg-gold-400',
              },
              {
                label: 'Valores',
                text: 'Ética, transparência, inovação, foco em resultado, responsabilidade legal e, acima de tudo, valorização das pessoas como o maior ativo de qualquer organização.',
                bg: 'bg-forest',
              },
            ].map(({ label, text, bg }) => (
              <div key={label} className={`${bg} rounded-3xl p-8 text-white space-y-4`}>
                <span className="text-xs font-bold uppercase tracking-widest text-white/60">{label}</span>
                <p className="font-serif font-semibold text-lg leading-snug text-balance">{text}</p>
              </div>
            ))}
          </div>

          {/* Values list */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card">
            <h3 className="font-serif font-bold text-xl text-forest mb-6">Nossos Valores em Prática</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {VALUES.map(({ label, desc }) => (
                <div key={label} className="flex items-start gap-3">
                  <CheckCircle2 size={16} className="text-sage-500 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold text-forest text-sm">{label}</p>
                    <p className="text-forest-muted text-xs">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-py bg-cream-100" aria-labelledby="pillars-sobre-heading">
        <div className="container-vgp space-y-12">
          <SectionTitle
            label="Pilares de Sucesso"
            title="Os fundamentos da nossa entrega"
            subtitle="Cada projeto que conduzimos é construído sobre quatro pilares inegociáveis."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((pillar, i) => {
              const Icon   = ICON_MAP[pillar.icon] ?? Shield
              const colors = PILLAR_COLORS[i % PILLAR_COLORS.length]
              return (
                <div key={pillar.title} className="card-vgp flex flex-col gap-4 relative overflow-hidden group">
                  <span className={`absolute top-2 right-4 font-serif text-6xl font-bold ${colors.num} select-none pointer-events-none`}>
                    0{i + 1}
                  </span>
                  <div className={`w-12 h-12 rounded-2xl ${colors.bg} flex items-center justify-center z-10`}>
                    <Icon size={22} className={colors.icon} />
                  </div>
                  <div className="z-10">
                    <h3 className="font-serif font-bold text-lg text-forest mb-2">{pillar.title}</h3>
                    <p className="text-forest-muted text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-sage-500">
        <div className="container-vgp flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="font-serif font-bold text-2xl text-white">Pronto para transformar sua gestão?</h2>
            <p className="text-white/70 mt-1">Vamos conversar sobre as necessidades da sua empresa.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a href={COMPANY.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <MessageCircle size={16} /> WhatsApp
            </a>
            <Link href="/servicos" className="btn-outline-white">
              Ver Serviços <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
