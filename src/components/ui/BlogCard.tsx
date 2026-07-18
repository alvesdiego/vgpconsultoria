import Link from 'next/link'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'
import type { BlogPost } from '@/lib/types'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('pt-BR', {
    day:   '2-digit',
    month: 'long',
    year:  'numeric',
  })

  if (featured) {
    return (
      <article className="card-vgp group cursor-pointer h-full flex flex-col md:flex-row gap-0 overflow-hidden p-0">
        {/* Cover */}
        <div className="md:w-1/2 h-56 md:h-auto bg-gradient-to-br from-sage-800 to-sage-600 relative overflow-hidden shrink-0">
          <div className="absolute inset-0 bg-[url('/patterns/organic-dots.svg')] opacity-10" />
          <div className="absolute bottom-4 left-4">
            <span className="badge-gold text-xs">{post.category}</span>
          </div>
        </div>
        {/* Content */}
        <div className="flex flex-1 flex-col justify-between gap-6 p-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-xs text-forest-subtle">
              <span className="flex items-center gap-1">
                <Calendar size={12} /> {formattedDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} /> {post.readingTime} min leitura
              </span>
            </div>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-forest text-balance group-hover:text-sage-500 transition-colors">
              {post.title}
            </h3>
            <p className="text-forest-muted text-sm leading-relaxed">{post.excerpt}</p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {post.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="flex items-center gap-1 text-xs text-forest-subtle bg-cream-200 px-2 py-0.5 rounded-full">
                  <Tag size={9} /> {tag}
                </span>
              ))}
            </div>
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-sage-500 font-semibold text-sm hover:gap-3 transition-all"
          >
            Ler artigo completo <ArrowRight size={14} />
          </Link>
        </div>
      </article>
    )
  }

  return (
    <article className="card-vgp group cursor-pointer h-full flex flex-col overflow-hidden p-0">
      {/* Cover */}
      <div className="h-44 bg-gradient-to-br from-sage-700 to-sage-500 relative overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-[url('/patterns/organic-dots.svg')] opacity-10" />
        <div className="absolute top-4 left-4">
          <span className="badge text-xs">{post.category}</span>
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col gap-3 p-6 flex-1">
        <div className="flex items-center gap-3 text-xs text-forest-subtle">
          <span className="flex items-center gap-1">
            <Calendar size={11} /> {formattedDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={11} /> {post.readingTime} min
          </span>
        </div>
        <h3 className="font-serif text-lg font-bold text-forest text-balance group-hover:text-sage-500 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-forest-muted text-sm leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {post.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="flex items-center gap-1 text-xs text-forest-subtle bg-cream-200 px-2 py-0.5 rounded-full">
              <Tag size={9} /> {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-sage-500 font-semibold text-sm hover:gap-2.5 transition-all mt-auto pt-2"
        >
          Ler mais <ArrowRight size={13} />
        </Link>
      </div>
    </article>
  )
}
