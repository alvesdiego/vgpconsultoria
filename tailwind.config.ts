import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary palette — Deep Sage Green
        sage: {
          50:  '#F2F6F4',
          100: '#E0ECE7',
          200: '#B8D4C8',
          300: '#8EBB9F',
          400: '#6B9E84',
          500: '#4B6858', // brand primary
          600: '#3A5245',
          700: '#2F4238',
          800: '#22312A',
          900: '#1E2D26',
        },
        // Warm accent — Honey Gold
        gold: {
          50:  '#FBF6EE',
          100: '#F5E8D4',
          200: '#E8CFA5',
          300: '#D8B07A',
          400: '#C09A6B', // brand accent
          500: '#A67C4E',
          600: '#8B6238',
          700: '#6F4D2C',
          800: '#553A21',
          900: '#3E2A17',
        },
        // Neutral / Background
        cream: {
          50:  '#FDFCFB',
          100: '#F8F4EF', // page background
          200: '#EDE5D8', // section alt background
          300: '#DDD0BD',
          400: '#C9B89E',
          500: '#B4A080',
        },
        // Text
        forest: {
          DEFAULT: '#1E2D26',
          muted: '#4A5E53',
          subtle: '#7A8E83',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:  ['var(--font-inter)',     'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 6vw, 4.5rem)',  { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem,   4vw, 3.5rem)',   { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.5rem)',   { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.25rem,2vw, 2rem)',     { lineHeight: '1.3' }],
      },
      spacing: {
        section: '6rem',
        'section-sm': '4rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        card:   '0 2px 16px rgba(30, 45, 38, 0.08)',
        'card-hover': '0 8px 32px rgba(30, 45, 38, 0.14)',
        float:  '0 16px 48px rgba(30, 45, 38, 0.16)',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease-out forwards',
        'fade-in':    'fadeIn 0.5s ease-out forwards',
        'count-up':   'countUp 2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      backgroundImage: {
        'hero-pattern':    "url('/patterns/organic-dots.svg')",
        'section-pattern': "url('/patterns/leaf-subtle.svg')",
        'gradient-hero':   'linear-gradient(135deg, #1E2D26 0%, #4B6858 60%, #2F4238 100%)',
        'gradient-accent': 'linear-gradient(135deg, #C09A6B 0%, #A67C4E 100%)',
        'gradient-light':  'linear-gradient(180deg, #F8F4EF 0%, #EDE5D8 100%)',
      },
    },
  },
  plugins: [],
}

export default config
