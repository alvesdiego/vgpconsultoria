import type { Metadata } from 'next'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import ContactForm from '@/components/ui/ContactForm'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com a VGP Consultoria. WhatsApp, e-mail, telefone e formulário. Atendimento de Seg a Sex, das 08:00 às 18:00.',
}

const CONTACT_CARDS = [
  {
    icon: Phone,
    label: 'Telefone / WhatsApp',
    value: COMPANY.contact.phone,
    href: COMPANY.contact.whatsapp,
    external: true,
    bg: 'bg-sage-100',
    iconColor: 'text-sage-500',
    cta: 'Iniciar conversa',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: COMPANY.contact.email,
    href: `mailto:${COMPANY.contact.email}`,
    external: false,
    bg: 'bg-gold-50',
    iconColor: 'text-gold-500',
    cta: 'Enviar e-mail',
  },
  {
    icon: MapPin,
    label: 'Endereço',
    value: COMPANY.address.full,
    href: COMPANY.address.mapsUrl,
    external: true,
    bg: 'bg-cream-200',
    iconColor: 'text-forest-muted',
    cta: 'Ver no mapa',
  },
  {
    icon: Clock,
    label: 'Horário de Atendimento',
    value: COMPANY.hours.full,
    href: null,
    external: false,
    bg: 'bg-cream-200',
    iconColor: 'text-forest-muted',
    cta: null,
  },
]

export default function ContatoPage() {
  return (
    <div className="pt-24">
      {/* Page Hero */}
      <section
        className="relative py-24 md:py-28 overflow-hidden"
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
          <span className="section-label text-gold-300 [&::before]:bg-gold-300">Fale Conosco</span>
          <h1 className="font-serif font-bold text-display-lg text-white text-balance">
            Vamos transformar sua empresa juntos
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Pronto para dar o próximo passo? Entre em contato e descubra como a VGP Consultoria
            pode ajudar sua empresa a alcançar conformidade e excelência em RH.
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="section-py-sm bg-cream-100" aria-label="Informações de contato">
        <div className="container-vgp">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 -mt-8">
            {CONTACT_CARDS.map(({ icon: Icon, label, value, href, external, bg, iconColor, cta }) => (
              <div key={label} className="bg-white rounded-2xl p-6 shadow-card space-y-3">
                <div className={`w-11 h-11 ${bg} rounded-xl flex items-center justify-center`}>
                  <Icon size={20} className={iconColor} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-forest-subtle mb-1">{label}</p>
                  <p className="text-forest font-medium text-sm leading-snug">{value}</p>
                </div>
                {cta && href && (
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-1 text-sage-500 font-semibold text-xs hover:underline"
                  >
                    {cta} →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main: Form + Map */}
      <section className="section-py bg-cream-100" aria-labelledby="contact-form-heading">
        <div className="container-vgp grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start">
          {/* Form */}
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-float order-2 lg:order-1">
            <h2 id="contact-form-heading" className="font-serif font-bold text-2xl text-forest mb-2">
              Envie uma mensagem
            </h2>
            <p className="text-forest-muted text-sm mb-8">
              Preencha o formulário e você será redirecionado ao WhatsApp para continuar o atendimento.
            </p>
            <ContactForm />
          </div>

          {/* Map + Social */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h2 className="font-serif font-bold text-2xl text-forest mb-4">Nossa Localização</h2>
              <div className="rounded-3xl overflow-hidden border border-cream-300 shadow-card h-72">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0!2d-46.6!3d-23.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI4JzQ4LjAiUyA0NsKwMzYnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v0!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização VGP Consultoria"
                />
              </div>
              <p className="text-sm text-forest-muted mt-3 flex items-start gap-2">
                <MapPin size={15} className="text-sage-500 mt-0.5 shrink-0" />
                {COMPANY.address.full}
              </p>
            </div>

            {/* Social links */}
            <div className="bg-cream-200 rounded-3xl p-6 space-y-4">
              <h3 className="font-serif font-bold text-lg text-forest">Siga nossas redes</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Facebook,  label: 'Facebook',  href: COMPANY.social.facebook,  color: 'bg-[#1877F2]/10 text-[#1877F2]'  },
                  { icon: Instagram, label: 'Instagram', href: COMPANY.social.instagram, color: 'bg-[#E4405F]/10 text-[#E4405F]'  },
                  { icon: Youtube,   label: 'YouTube',   href: COMPANY.social.youtube,   color: 'bg-[#FF0000]/10 text-[#FF0000]'  },
                  { icon: Linkedin,  label: 'LinkedIn',  href: COMPANY.social.linkedin,  color: 'bg-[#0A66C2]/10 text-[#0A66C2]'  },
                ].map(({ icon: Icon, label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 ${color} rounded-xl px-4 py-3 font-medium text-sm hover:opacity-80 transition-opacity`}
                  >
                    <Icon size={18} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
