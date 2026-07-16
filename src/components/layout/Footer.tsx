import Link from 'next/link'
import {
  MapPin, Phone, Mail, Clock,
  Facebook, Instagram, Youtube, Linkedin,
  ArrowRight,
} from 'lucide-react'
import { COMPANY, NAV_LINKS } from '@/lib/constants'
import { SERVICES } from '@/data/services'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-forest text-white">
      {/* Top CTA strip */}
      <div className="bg-sage-500 py-6">
        <div className="container-vgp flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-serif text-xl font-semibold text-white text-center sm:text-left">
            Pronto para transformar sua gestão de RH e SST?
          </p>
          <a
            href={COMPANY.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp shrink-0"
          >
            Falar no WhatsApp
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-vgp py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1 space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-sage-500 text-white font-serif font-bold text-sm">
              VGP
            </div>
            <span className="font-serif font-bold text-lg text-white">
              VGP <span className="font-light">Consultoria</span>
            </span>
          </div>
          <p className="text-white/65 text-sm leading-relaxed max-w-xs">
            Parceiro estratégico em Recursos Humanos e Saúde e Segurança no Trabalho.
            Conformidade, talentos e bem-estar em um só lugar.
          </p>
          {/* Social */}
          <div className="flex items-center gap-3 pt-2">
            {[
              { icon: Facebook,  href: COMPANY.social.facebook,  label: 'Facebook' },
              { icon: Instagram, href: COMPANY.social.instagram, label: 'Instagram' },
              { icon: Youtube,   href: COMPANY.social.youtube,   label: 'YouTube' },
              { icon: Linkedin,  href: COMPANY.social.linkedin,  label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-sage-500 text-white/70 hover:text-white transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h3 className="font-serif font-semibold text-white text-sm uppercase tracking-widest">
            Navegação
          </h3>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/65 hover:text-gold-400 text-sm transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="font-serif font-semibold text-white text-sm uppercase tracking-widest">
            Serviços
          </h3>
          <ul className="space-y-2">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link
                  href={`/servicos#${s.slug}`}
                  className="text-white/65 hover:text-gold-400 text-sm transition-colors flex items-center gap-1.5 group"
                >
                  <ArrowRight size={12} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="font-serif font-semibold text-white text-sm uppercase tracking-widest">
            Contato
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <MapPin size={15} className="text-gold-400 mt-0.5 shrink-0" />
              <a
                href={COMPANY.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/65 hover:text-white text-sm transition-colors"
              >
                {COMPANY.address.full}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={15} className="text-gold-400 shrink-0" />
              <a
                href={`tel:${COMPANY.contact.phoneRaw}`}
                className="text-white/65 hover:text-white text-sm transition-colors"
              >
                {COMPANY.contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={15} className="text-gold-400 shrink-0" />
              <a
                href={`mailto:${COMPANY.contact.email}`}
                className="text-white/65 hover:text-white text-sm transition-colors"
              >
                {COMPANY.contact.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock size={15} className="text-gold-400 shrink-0" />
              <span className="text-white/65 text-sm">{COMPANY.hours.full}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-vgp py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>© {year} VGP Consultoria. Todos os direitos reservados.</p>
          <p>
            Desenvolvido com ♥ para transformar organizações
          </p>
        </div>
      </div>
    </footer>
  )
}
