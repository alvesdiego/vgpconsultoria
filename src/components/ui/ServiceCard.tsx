import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import type { Service } from '@/lib/types'
import { cn } from '@/lib/utils'

// Icon map — replace with your icon component or SVGs as needed
import {
  ShieldCheck, Users, GraduationCap, Brain,
} from 'lucide-react'

const ICON_MAP: Record<string, React.ElementType> = {
  'shield-check':    ShieldCheck,
  'users':           Users,
  'graduation-cap':  GraduationCap,
  'brain':           Brain,
}

interface ServiceCardProps {
  service: Service
  variant?: 'default' | 'featured' | 'horizontal'
  className?: string
}

export default function ServiceCard({ service, variant = 'default', className }: ServiceCardProps) {
  const Icon = ICON_MAP[service.icon] ?? ShieldCheck
  const isSage = service.color === 'sage'

  if (variant === 'horizontal') {
    return (
      <div
        id={service.slug}
        className={cn(
          'card-vgp group flex flex-col lg:flex-row gap-8',
          className,
        )}
      >
        {/* Icon block */}
        <div
          className={cn(
            'w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center shrink-0',
            isSage ? 'bg-sage-100 text-sage-500' : 'bg-gold-50 text-gold-500',
          )}
        >
          <Icon size={32} />
        </div>
        {/* Content */}
        <div className="flex-1 space-y-4">
          <h3 className="font-serif text-xl md:text-2xl font-bold text-forest">{service.title}</h3>
          <p className="text-forest-muted">{service.fullDescription}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
            {service.features.map((f) => (
              <div key={f} className="flex items-start gap-2">
                <CheckCircle2 size={15} className="text-sage-500 mt-0.5 shrink-0" />
                <span className="text-sm text-forest-muted">{f}</span>
              </div>
            ))}
          </div>

          <Link href={`/contato?servico=${service.slug}`} className="btn-primary inline-flex mt-2">
            {service.cta}
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'card-vgp group h-full flex flex-col gap-5 cursor-default',
        'hover:-translate-y-1 transition-all duration-300',
        className,
      )}
    >
      {/* Icon */}
      <div
        className={cn(
          'w-14 h-14 rounded-2xl flex items-center justify-center transition-colors',
          isSage
            ? 'bg-sage-100 text-sage-500 group-hover:bg-sage-500 group-hover:text-white'
            : 'bg-gold-50 text-gold-500 group-hover:bg-gold-400 group-hover:text-white',
        )}
      >
        <Icon size={24} />
      </div>

      {/* Content */}
      <div className="flex-1 space-y-2">
        <h3 className="font-serif text-lg font-bold text-forest">{service.title}</h3>
        <p className="text-forest-muted text-sm leading-relaxed">{service.shortDescription}</p>
      </div>

      {/* Features preview */}
      <ul className="space-y-1.5">
        {service.features.slice(0, 3).map((f) => (
          <li key={f} className="flex items-start gap-2 text-xs text-forest-muted">
            <CheckCircle2 size={13} className="text-sage-500 mt-0.5 shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href={`/servicos#${service.slug}`}
        className={cn(
          'inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all',
          isSage ? 'text-sage-500' : 'text-gold-500',
        )}
      >
        Saiba mais <ArrowRight size={13} />
      </Link>
    </div>
  )
}
