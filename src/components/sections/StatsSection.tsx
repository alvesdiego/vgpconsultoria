'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { STATS } from '@/lib/constants'

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const duration = 1800
    const step = 16
    const increment = target / (duration / step)

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, step)

    return () => clearInterval(timer)
  }, [target, active])

  return (
    <span className="font-serif font-bold text-4xl md:text-5xl text-white">
      {count}{suffix}
    </span>
  )
}

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section ref={ref} className="bg-sage-500 py-12 md:py-16" aria-label="Nossos números">
      <div className="container-vgp">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center gap-2"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <CountUp target={stat.value} suffix={stat.suffix} active={inView} />
              <p className="text-white/75 text-sm font-medium tracking-wide">{stat.label}</p>
              {i < STATS.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/20" aria-hidden />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
