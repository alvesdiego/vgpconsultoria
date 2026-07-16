'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { NAV_LINKS, COMPANY } from '@/lib/constants'
import { cn } from '@/lib/utils'

export default function Header() {
  const [isOpen,     setIsOpen]     = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // On inner pages (non-homepage), always render the header as "scrolled" (solid bg)
  const isHomepage = pathname === '/'
  const solidHeader = !isHomepage || isScrolled

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setIsOpen(false) }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        solidHeader
          ? 'bg-white/95 backdrop-blur-md shadow-card py-3'
          : 'bg-transparent py-5',
      )}
    >
      <div className="container-vgp flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="VGP Consultoria – Home">
          <div
            className={cn(
              'flex items-center justify-center w-10 h-10 rounded-xl font-serif font-bold text-sm transition-colors',
              solidHeader ? 'bg-sage-500 text-white' : 'bg-white text-sage-500',
            )}
          >
            VGP
          </div>
          <span
            className={cn(
              'font-serif font-bold text-lg leading-tight transition-colors',
              solidHeader ? 'text-forest' : 'text-white',
            )}
          >
            VGP <span className="font-light">Consultoria</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Menu principal">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                pathname === link.href
                  ? solidHeader
                    ? 'bg-sage-100 text-sage-600'
                    : 'bg-white/20 text-white'
                  : solidHeader
                  ? 'text-forest-muted hover:text-sage-600 hover:bg-sage-50'
                  : 'text-white/85 hover:text-white hover:bg-white/15',
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${COMPANY.contact.phoneRaw}`}
            className={cn(
              'flex items-center gap-2 text-sm font-medium transition-colors',
              solidHeader ? 'text-forest-muted hover:text-sage-600' : 'text-white/85 hover:text-white',
            )}
          >
            <Phone size={14} />
            {COMPANY.contact.phone}
          </a>
          <a
            href={COMPANY.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2.5"
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'md:hidden p-2 rounded-lg transition-colors',
            solidHeader ? 'text-forest hover:bg-cream-200' : 'text-white hover:bg-white/15',
          )}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav
          className="bg-white border-t border-cream-200 px-4 pt-4 pb-6 space-y-1"
          aria-label="Menu mobile"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                pathname === link.href
                  ? 'bg-sage-100 text-sage-600'
                  : 'text-forest-muted hover:bg-cream-200 hover:text-forest',
              )}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-4 border-t border-cream-200 space-y-3">
            <a
              href={`tel:${COMPANY.contact.phoneRaw}`}
              className="flex items-center gap-2 px-4 py-2 text-sm text-forest-muted"
            >
              <Phone size={14} className="text-sage-500" />
              {COMPANY.contact.phone}
            </a>
            <a
              href={COMPANY.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full"
            >
              Falar no WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
