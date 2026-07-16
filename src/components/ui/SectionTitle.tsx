import { cn } from '@/lib/utils'

interface SectionTitleProps {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  light?: boolean
  className?: string
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
}: SectionTitleProps) {
  const alignClass = {
    left:   'items-start text-left',
    center: 'items-center text-center',
    right:  'items-end text-right',
  }[align]

  return (
    <div className={cn('flex flex-col gap-3 max-w-2xl', align === 'center' && 'mx-auto', alignClass, className)}>
      {label && (
        <span className={cn('section-label', light && 'text-gold-300 [&::before]:bg-gold-300')}>
          {label}
        </span>
      )}
      <h2
        className={cn(
          'font-serif font-bold text-display-md text-balance',
          light ? 'text-white' : 'text-forest',
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn('text-base md:text-lg leading-relaxed', light ? 'text-white/70' : 'text-forest-muted')}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
