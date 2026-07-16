import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import BlogCard from '@/components/ui/BlogCard'
import { BLOG_POSTS } from '@/data/blog-posts'

export default function BlogPreview() {
  const [featured, ...rest] = BLOG_POSTS.slice(0, 4)

  return (
    <section className="section-py bg-cream-100" aria-labelledby="blog-heading">
      <div className="container-vgp space-y-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionTitle
            label="Blog & Conteúdo"
            title="Insights sobre RH, SST e saúde organizacional"
            subtitle="Fique atualizado com as últimas tendências, mudanças na legislação e melhores práticas do mercado."
            align="left"
          />
          <Link href="/blog" className="btn-secondary shrink-0 self-start md:self-auto">
            Ver todos os artigos <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured post */}
          <div className="lg:col-span-2">
            <BlogCard post={featured} featured />
          </div>

          {/* Side posts */}
          <div className="space-y-6">
            {rest.slice(0, 2).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
