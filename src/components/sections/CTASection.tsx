import { MessageCircle, Phone, Mail, Clock } from 'lucide-react'
import { COMPANY } from '@/lib/constants'
import ContactForm from '@/components/ui/ContactForm'

export default function CTASection() {
  return (
    <section
      className="section-py bg-cream-200"
      aria-labelledby="cta-heading"
    >
      <div className="container-vgp">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start">
          {/* Left — Copy */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="section-label">Contato</span>
              <h2 id="cta-heading" className="font-serif font-bold text-display-md text-forest text-balance">
                Vamos conversar sobre sua empresa?
              </h2>
              <p className="text-forest-muted text-lg leading-relaxed">
                Independentemente do tamanho da sua empresa, temos a solução certa para
                garantir sua conformidade legal e potencializar seus resultados em RH.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-4">
              {[
                {
                  icon: MessageCircle,
                  label: 'WhatsApp',
                  value: COMPANY.contact.phone,
                  href: COMPANY.contact.whatsapp,
                  external: true,
                  color: 'bg-[#25D366]/10 text-[#25D366]',
                },
                {
                  icon: Phone,
                  label: 'Telefone',
                  value: COMPANY.contact.phone,
                  href: `tel:${COMPANY.contact.phoneRaw}`,
                  external: false,
                  color: 'bg-sage-100 text-sage-500',
                },
                {
                  icon: Mail,
                  label: 'E-mail',
                  value: COMPANY.contact.email,
                  href: `mailto:${COMPANY.contact.email}`,
                  external: false,
                  color: 'bg-gold-50 text-gold-500',
                },
                {
                  icon: Clock,
                  label: 'Horário',
                  value: COMPANY.hours.full,
                  href: null,
                  external: false,
                  color: 'bg-cream-300 text-forest-muted',
                },
              ].map(({ icon: Icon, label, value, href, external, color }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center shrink-0`}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-forest-subtle uppercase tracking-wider font-semibold">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noopener noreferrer' : undefined}
                        className="text-forest font-medium hover:text-sage-600 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-forest font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map / Address */}
            <div className="rounded-2xl overflow-hidden border border-cream-300 h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.000000000000!2d-46.6000000!3d-23.4800000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDI4JzQ4LjAiUyA0NsKwMzYnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v0000000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização VGP Consultoria"
                aria-label="Mapa mostrando a localização da VGP Consultoria"
              />
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-float">
            <h3 className="font-serif text-xl font-bold text-forest mb-6">
              Envie uma mensagem
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
