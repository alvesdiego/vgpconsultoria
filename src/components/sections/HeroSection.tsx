import Link from 'next/link'
import { ArrowRight, MessageCircle, Shield, TrendingUp, Users } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

const HIGHLIGHTS = [
  { icon: Shield,      label: 'Conformidade NR-01' },
  { icon: Users,       label: 'Gestão de Talentos'  },
  { icon: TrendingUp,  label: 'Saúde Organizacional'},
]

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden"
      aria-label="Seção principal"
    >
      {/* Organic background shapes */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden>
        {/* Large blob top-right */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-sage-400/20 blur-3xl" />
        {/* Medium blob bottom-left */}
        <div className="absolute bottom-0 -left-16 w-[400px] h-[400px] rounded-full bg-gold-400/15 blur-3xl" />
        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        {/* Decorative arc bottom */}
        <svg
          className="absolute bottom-0 inset-x-0 w-full text-cream-100"
          viewBox="0 0 1440 96"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0,96 C360,0 1080,0 1440,96 L1440,96 L0,96 Z" />
        </svg>
      </div>

      <div className="container-vgp relative z-10 pt-28 pb-32 md:pt-36 md:pb-40">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full border border-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            Especialistas em RH & SST · São Paulo
          </div>

          {/* Headline */}
          <h1 className="font-serif font-bold text-display-xl text-white text-balance">
            Seu parceiro ideal em{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-gold-400">conformidade</span>
              <span
                className="absolute bottom-1 inset-x-0 h-3 bg-gold-400/20 rounded"
                aria-hidden
              />
            </span>{' '}
            e resultados
          </h1>

          {/* Subtitle */}
          <p className="text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-balance">
            A VGP Consultoria une expertise em Recursos Humanos e Saúde e Segurança no Trabalho
            para garantir a conformidade legal da sua empresa e potencializar o capital humano.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={COMPANY.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full sm:w-auto text-base px-8 py-4"
            >
              <MessageCircle size={18} />
              Falar com Especialista
            </a>
            <Link
              href="/servicos"
              className="btn-outline-white w-full sm:w-auto text-base px-8 py-4"
            >
              Nossos Serviços
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/10 text-white/85 px-4 py-2 rounded-full text-sm font-medium border border-white/15"
              >
                <Icon size={14} className="text-gold-400" />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs">
          <span className="tracking-widest uppercase">Explorar</span>
          <div className="w-px h-8 bg-white/30 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
