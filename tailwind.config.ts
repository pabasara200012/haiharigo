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
        soft: '0 10px 30px rgba(10, 47, 107, 0.1)',
        'soft-lg': '0 20px 40px rgba(10, 47, 107, 0.12)',
        'soft-xl': '0 30px 60px rgba(10, 47, 107, 0.15)',
        'glow': '0 0 20px rgba(88, 193, 61, 0.3)',
        'glow-blue': '0 0 25px rgba(10, 47, 107, 0.25)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top left, rgba(88,193,61,0.25), transparent 35%), radial-gradient(circle at bottom right, rgba(225,29,46,0.15), transparent 30%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        fadeInUp: 'fadeInUp 0.8s ease-out both',
        slideUp: 'slideUp 0.7s ease-out both',
        slideDown: 'slideDown 0.7s ease-out both',
        scaleIn: 'scaleIn 0.6s ease-out both',
        pulse: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
