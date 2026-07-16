import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-100 px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="w-20 h-20 rounded-full bg-sage-100 flex items-center justify-center mx-auto">
          <span className="font-serif font-bold text-3xl text-sage-500">?</span>
        </div>
        <div className="space-y-2">
          <h1 className="font-serif font-bold text-4xl text-forest">Página não encontrada</h1>
          <p className="text-forest-muted">
            A página que você está procurando não existe ou foi movida.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            <Home size={16} /> Voltar ao início
          </Link>
          <Link href="/contato" className="btn-secondary">
            <ArrowLeft size={16} /> Falar conosco
          </Link>
        </div>
      </div>
    </div>
  )
}
