import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://vgpconsultoria.com.br'),
  title: {
    template: '%s | VGP Consultoria',
    default: 'VGP Consultoria – Conformidade, Talentos e Saúde Organizacional',
  },
  description:
    'A VGP Consultoria é seu parceiro estratégico em RH e SST. Especialistas em GRO/PGR (NR-01), Recrutamento, T&D e Avaliações Psicológicas em São Paulo.',
  keywords: [
    'consultoria RH',
    'GRO PGR NR-01',
    'riscos psicossociais',
    'recrutamento e seleção',
    'treinamento e desenvolvimento',
    'avaliação psicológica',
    'SST',
    'saúde ocupacional',
    'São Paulo',
  ],
  authors: [{ name: 'VGP Consultoria', url: 'https://vgpconsultoria.com.br' }],
  creator: 'VGP Consultoria',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://vgpconsultoria.com.br',
    siteName: 'VGP Consultoria',
    title: 'VGP Consultoria – Conformidade, Talentos e Saúde Organizacional',
    description:
      'Especialistas em GRO/PGR, Recrutamento, T&D e Avaliações Psicológicas. Seu parceiro estratégico em RH e SST.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'VGP Consultoria' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VGP Consultoria',
    description: 'Conformidade legal, gestão de talentos e saúde organizacional.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://vgpconsultoria.com.br',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
