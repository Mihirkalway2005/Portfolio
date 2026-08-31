import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F5F4F0',
        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#FBFBFA',
          subtle: '#F0EFEA',
        },
        primary: {
          DEFAULT: '#111111',
          foreground: '#F5F4F0',
        },
        secondary: {
          DEFAULT: '#6F6F6F',
          muted: '#8C8C8C',
          dark: '#3A3A3A',
        },
        border: {
          DEFAULT: '#E2E0D8',
          subtle: 'rgba(0, 0, 0, 0.07)',
          dark: 'rgba(0, 0, 0, 0.15)',
        },
        accent: {
          DEFAULT: '#FF5A00',
          hover: '#E55100',
        },
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Geist Mono', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.035em',
        wide: '0.12em',
        widest: '0.18em',
      },
      lineHeight: {
        headline: '0.88',
        tight: '1.05',
      },
      boxShadow: {
        editorial: '0 20px 40px -15px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 30px 60px -20px rgba(0, 0, 0, 0.08)',
        subtle: '0 2px 10px rgba(0, 0, 0, 0.02)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(5px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
