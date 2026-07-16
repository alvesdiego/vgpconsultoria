import {
  Search, Users, Clipboard, Link2, Activity, Star
} from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { METHODOLOGY_STEPS } from '@/lib/constants'

const ICON_MAP: Record<string, React.ElementType> = {
  search:    Search,
  users:     Users,
  clipboard: Clipboard,
  link:      Link2,
  activity:  Activity,
  star:      Star,
}

export default function MethodologySection() {
  return (
    <section
      className="section-py relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #1E2D26 0%, #2F4238 50%, #4B6858 100%)' }}
      aria-labelledby="methodology-heading"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden
      />
      {/* Gold accent blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full bg-gold-400/10 blur-3xl pointer-events-none" aria-hidden />

      <div className="container-vgp relative z-10 space-y-14">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionTitle
            label="Nossa Metodologia"
            title="6 Etapas para conformidade com a NR-01"
            subtitle="Um processo estruturado e comprovado para implementar o GRO/PGR com excelência e total alinhamento à legislação."
            align="left"
            light
          />
          <div className="lg:shrink-0 flex flex-col items-start lg:items-end gap-2 lg:pb-2">
            <span className="badge-gold text-xs">Portaria nº 1.419/2024</span>
            <p className="text-white/60 text-sm max-w-xs text-right hidden lg:block">
              Inclui obrigatoriamente o mapeamento de riscos psicossociais
            </p>
          </div>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {METHODOLOGY_STEPS.map((step, idx) => {
            const Icon = ICON_MAP[step.icon] ?? Star
            return (
              <div
                key={step.step}
                className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold-400/40 rounded-3xl p-6 transition-all duration-300"
              >
                {/* Step number */}
                <span className="absolute top-4 right-5 font-serif text-5xl font-bold text-white/5 group-hover:text-white/8 transition-colors select-none">
                  {step.step}
                </span>

                <div className="space-y-4 relative z-10">
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-gold-400/20 flex items-center justify-center text-gold-400">
                    <Icon size={20} />
                  </div>
                  {/* Content */}
                  <div>
                    <h3 className="font-serif font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                  </div>
                  {/* Connector arrow (not last in row) */}
                  {idx < METHODOLOGY_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-white/20 text-lg" aria-hidden>
                      →
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-4">
          <a
            href="https://wa.me/5511942176957"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Quero implementar o GRO/PGR
          </a>
        </div>
      </div>
    </section>
  )
}
