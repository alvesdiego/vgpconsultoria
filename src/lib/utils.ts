import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhone(raw: string): string {
  return raw.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
}
