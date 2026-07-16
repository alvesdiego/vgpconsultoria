import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, Tag, Search } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import BlogCard from '@/components/ui/BlogCard'
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/data/blog-posts'
import { COMPANY } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Artigos e insights sobre RH, Saúde e Segurança no Trabalho, NR-01, riscos psicossociais, gestão de talentos e saúde mental corporativa.',
}

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS

  return (
    <div className="pt-24">
      {/* Page Hero */}
      <section
        className="relative py-24 md:py-28 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1E2D26 0%, #4B6858 100%)' }}
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
          <span className="section-label text-gold-300 [&::before]:bg-gold-300">Blog & Conteúdo</span>
          <h1 className="font-serif font-bold text-display-lg text-white text-balance">
            Insights sobre RH e SST
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Legislação trabalhista, saúde mental no trabalho, gestão de talentos e muito mais.
            Conteúdo gratuito para líderes que querem se manter à frente.
          </p>
        </div>
      </section>

      <div className="section-py bg-cream-100">
        <div className="container-vgp space-y-12">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors
                           bg-white border border-cream-300 text-forest-muted
                           hover:bg-sage-500 hover:text-white hover:border-sage-500"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Featured */}
          <div>
            <h2 className="font-serif font-bold text-xl text-forest mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-gold-400 rounded inline-block" />
              Artigo em destaque
            </h2>
            <BlogCard post={featured} featured />
          </div>

          {/* Grid */}
          <div>
            <h2 className="font-serif font-bold text-xl text-forest mb-6 flex items-center gap-2">
              <span className="w-1 h-5 bg-sage-500 rounded inline-block" />
              Mais artigos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="bg-sage-500 rounded-3xl p-8 md:p-12 text-center space-y-4">
            <h2 className="font-serif font-bold text-2xl text-white">
              Receba conteúdo exclusivo por WhatsApp
            </h2>
            <p className="text-white/75 max-w-lg mx-auto">
              Fique por dentro das atualizações legislativas, boas práticas de RH e dicas de
              gestão de SST diretamente no seu WhatsApp.
            </p>
            <a
              href={COMPANY.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex"
            >
              Entrar na lista VIP
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
