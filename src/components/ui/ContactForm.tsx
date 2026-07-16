'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Send, CheckCircle2, Loader2 } from 'lucide-react'
import { COMPANY } from '@/lib/constants'
import { SERVICES } from '@/data/services'
import type { ContactFormData } from '@/lib/types'
import { cn } from '@/lib/utils'

interface ContactFormProps {
  preSelectedService?: string
}

export default function ContactForm({ preSelectedService }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    defaultValues: { service: preSelectedService ?? '' },
  })

  async function onSubmit(data: ContactFormData) {
    setIsLoading(true)
    // Build WhatsApp message (no backend needed for MVP)
    const msg = encodeURIComponent(
      `Olá, VGP Consultoria! Meu nome é *${data.name}* e estou entrando em contato pelo site.\n\n` +
      `🏢 Empresa: ${data.company || 'Não informada'}\n` +
      `📞 Telefone: ${data.phone}\n` +
      `📧 E-mail: ${data.email}\n` +
      `🎯 Interesse: ${data.service || 'Geral'}\n\n` +
      `💬 Mensagem:\n${data.message}`,
    )
    // Simulate a short delay for UX
    await new Promise((r) => setTimeout(r, 800))
    window.open(`${COMPANY.contact.whatsapp}?text=${msg}`, '_blank')
    setSubmitted(true)
    setIsLoading(false)
    reset()
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center">
          <CheckCircle2 size={32} className="text-sage-500" />
        </div>
        <h3 className="font-serif text-xl font-bold text-forest">Mensagem enviada!</h3>
        <p className="text-forest-muted max-w-xs">
          Você será redirecionado ao WhatsApp. Retornaremos em breve!
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-secondary mt-2"
        >
          Enviar outra mensagem
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-sm font-medium text-forest">
            Nome completo <span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Seu nome"
            autoComplete="name"
            className={cn('input-vgp', errors.name && 'border-red-400 focus:ring-red-400/40 focus:border-red-400')}
            {...register('name', { required: 'Nome é obrigatório' })}
          />
          {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-sm font-medium text-forest">
            E-mail <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="seu@email.com"
            autoComplete="email"
            className={cn('input-vgp', errors.email && 'border-red-400 focus:ring-red-400/40 focus:border-red-400')}
            {...register('email', {
              required: 'E-mail é obrigatório',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'E-mail inválido' },
            })}
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-forest">
            Telefone / WhatsApp <span className="text-red-400">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="(11) 9 0000-0000"
            autoComplete="tel"
            className={cn('input-vgp', errors.phone && 'border-red-400 focus:ring-red-400/40 focus:border-red-400')}
            {...register('phone', { required: 'Telefone é obrigatório' })}
          />
          {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
        </div>

        {/* Company */}
        <div className="space-y-1.5">
          <label htmlFor="company" className="text-sm font-medium text-forest">
            Empresa
          </label>
          <input
            id="company"
            type="text"
            placeholder="Nome da sua empresa"
            autoComplete="organization"
            className="input-vgp"
            {...register('company')}
          />
        </div>
      </div>

      {/* Service */}
      <div className="space-y-1.5">
        <label htmlFor="service" className="text-sm font-medium text-forest">
          Qual serviço te interessa?
        </label>
        <select id="service" className="input-vgp" {...register('service')}>
          <option value="">Selecione um serviço (opcional)</option>
          {SERVICES.map((s) => (
            <option key={s.id} value={s.slug}>{s.title}</option>
          ))}
          <option value="geral">Consultoria geral / Outro</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-sm font-medium text-forest">
          Mensagem <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Conte-nos um pouco sobre sua empresa e necessidade..."
          className={cn('input-vgp resize-none', errors.message && 'border-red-400 focus:ring-red-400/40 focus:border-red-400')}
          {...register('message', { required: 'Mensagem é obrigatória', minLength: { value: 10, message: 'Mensagem muito curta' } })}
        />
        {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
      </div>

      <button type="submit" disabled={isLoading} className="btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed">
        {isLoading ? (
          <><Loader2 size={16} className="animate-spin" /> Enviando...</>
        ) : (
          <><Send size={16} /> Enviar via WhatsApp</>
        )}
      </button>

      <p className="text-xs text-center text-forest-subtle">
        Ao enviar, você será redirecionado ao WhatsApp para continuar o atendimento.
      </p>
    </form>
  )
}
