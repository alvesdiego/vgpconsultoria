import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageCircle, ArrowRight } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import ServiceCard from '@/components/ui/ServiceCard'
import { SERVICES } from '@/data/services'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Serviços',
  description:
    'Conheça os serviços da VGP Consultoria: GRO/PGR e NR-01, Recrutamento e Seleção, Treinamento e Desenvolvimento, e Avaliações Psicológicas.',
}

export default function ServicosPage() {
  return (
    <div className="pt-24">
      {/* Page Hero */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #2F4238 0%, #4B6858 100%)' }}
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
          <span className="section-label text-gold-300 [&::before]:bg-gold-300">Portfólio de Soluções</span>
          <h1 className="font-serif font-bold text-display-lg text-white text-balance">
            Soluções completas em RH e SST
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto text-balance">
            Da adequação legal ao desenvolvimento humano — tudo integrado em uma única consultoria
            focada nos resultados da sua empresa.
          </p>
          {/* Quick nav */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.slug}`}
                className="bg-white/10 hover:bg-white/20 text-white/85 text-sm font-medium px-4 py-2 rounded-full border border-white/20 transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Cards */}
      <section className="section-py bg-cream-100" aria-label="Visão geral dos serviços">
        <div className="container-vgp space-y-10">
          <SectionTitle
            label="Nossos Serviços"
            title="Cada solução, um impacto real"
            subtitle="Desenvolvemos soluções customizadas para cada realidade empresarial, sempre com rigor técnico e foco em resultados."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Detailed service sections */}
      <section className="section-py bg-cream-200 space-y-10" aria-label="Detalhes dos serviços">
        <div className="container-vgp space-y-8">
          <SectionTitle
            label="Em Detalhes"
            title="Como trabalhamos em cada frente"
          />
          {SERVICES.map((service, idx) => (
            <ServiceCard
              key={service.id}
              service={service}
              variant="horizontal"
              className={idx % 2 === 0 ? '' : 'bg-white border border-cream-300'}
            />
          ))}
        </div>
      </section>

      {/* Why VGP */}
      <section className="section-py bg-cream-100">
        <div className="container-vgp">
          <div className="bg-gradient-to-br from-sage-500 to-sage-700 rounded-3xl p-8 md:p-12 text-center space-y-6">
            <span className="badge-gold">Por que a VGP?</span>
            <h2 className="font-serif font-bold text-display-sm text-white text-balance max-w-2xl mx-auto">
              Uma consultoria que une expertise técnica com olhar humano
            </h2>
            <p className="text-white/75 max-w-2xl mx-auto leading-relaxed">
              Enquanto a maioria das consultorias separa RH de SST, a VGP atua de forma integrada —
              garantindo que a conformidade legal e o desenvolvimento humano caminhem juntos, de forma
              sinérgica e eficiente.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={COMPANY.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle size={16} />
                Solicitar Proposta
              </a>
              <Link href="/sobre" className="btn-outline-white">
                Conhecer a VGP <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
