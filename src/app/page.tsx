import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import StatsSection from '@/components/sections/StatsSection'
import ServicesOverview from '@/components/sections/ServicesOverview'
import MethodologySection from '@/components/sections/MethodologySection'
import PillarsSection from '@/components/sections/PillarsSection'
import BlogPreview from '@/components/sections/BlogPreview'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'VGP Consultoria – Conformidade, Talentos e Saúde Organizacional',
  description:
    'Seu parceiro ideal em RH e SST: GRO/PGR, Recrutamento, T&D e Avaliações Psicológicas em São Paulo. Conformidade com a NR-01 e riscos psicossociais.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesOverview />
      <MethodologySection />
      <PillarsSection />
      <BlogPreview />
      <CTASection />
    </>
  )
}
