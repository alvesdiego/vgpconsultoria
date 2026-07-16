import { Lightbulb, Handshake, Shield, Heart } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import { PILLARS } from '@/lib/constants'

const ICON_MAP: Record<string, React.ElementType> = {
  lightbulb:  Lightbulb,
  handshake:  Handshake,
  shield:     Shield,
  heart:      Heart,
}

const COLORS = [
  { bg: 'bg-sage-100',   icon: 'text-sage-500',  border: 'border-sage-200' },
  { bg: 'bg-gold-50',    icon: 'text-gold-500',   border: 'border-gold-100' },
  { bg: 'bg-sage-100',   icon: 'text-sage-500',  border: 'border-sage-200' },
  { bg: 'bg-gold-50',    icon: 'text-gold-500',   border: 'border-gold-100' },
]

export default function PillarsSection() {
  return (
    <section className="section-py bg-cream-200" aria-labelledby="pillars-heading">
      <div className="container-vgp space-y-12">
        <SectionTitle
          label="Nossos Pilares"
          title="O que nos torna diferentes"
          subtitle="Mais do que uma consultoria — somos um parceiro estratégico comprometido com o sucesso sustentável da sua empresa."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, i) => {
            const Icon   = ICON_MAP[pillar.icon] ?? Shield
            const colors = COLORS[i % COLORS.length]
            return (
              <div
                key={pillar.title}
                className={`group bg-white rounded-3xl p-6 border ${colors.border} shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4`}
              >
                <div className={`w-12 h-12 rounded-2xl ${colors.bg} flex items-center justify-center`}>
                  <Icon size={22} className={colors.icon} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-forest mb-2">{pillar.title}</h3>
                  <p className="text-forest-muted text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
