import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A2F6B',
        brand: {
          blue: '#0A2F6B',
          green: '#58C13D',
          red: '#E11D2E',
          white: '#FFFFFF',
        },
      },
      boxShadow: {
        soft: '0 20px 60px rgba(10, 47, 107, 0.12)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top left, rgba(88,193,61,0.2), transparent 35%), radial-gradient(circle at bottom right, rgba(225,29,46,0.12), transparent 30%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.9s ease-out both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
