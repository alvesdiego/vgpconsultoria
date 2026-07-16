export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  icon: string
  color: string
  features: string[]
  benefits: string[]
  cta: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content?: string
  coverImage: string
  category: string
  author: string
  publishedAt: string
  readingTime: number
  tags: string[]
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  company: string
  service: string
  message: string
}

export interface Stat {
  value: number
  suffix: string
  label: string
}

export interface NavLink {
  label: string
  href: string
}
