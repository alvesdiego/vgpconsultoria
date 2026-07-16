import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import ServiceCard from '@/components/ui/ServiceCard'
import { SERVICES } from '@/data/services'

export default function ServicesOverview() {
  return (
    <section className="section-py bg-cream-100" aria-labelledby="services-heading">
      <div className="container-vgp space-y-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionTitle
            label="Nossos Serviços"
            title="Soluções completas para sua empresa"
            subtitle="Da adequação legal ao desenvolvimento humano — tudo o que sua organização precisa em RH e SST."
            align="left"
          />
          <Link
            href="/servicos"
            className="btn-secondary shrink-0 self-start md:self-auto"
          >
            Ver todos os serviços
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
