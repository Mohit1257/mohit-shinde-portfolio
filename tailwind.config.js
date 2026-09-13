/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0A0F1D',
          soft: '#0D1424',
        },
        surface: {
          DEFAULT: '#121A2C',
          raised: '#161F35',
          border: 'rgba(148, 163, 197, 0.14)',
        },
        ink: {
          DEFAULT: '#E7EAF3',
          muted: '#9AA5BD',
          faint: '#6B7690',
        },
        accent: {
          cyan: '#4FB8FF',
          cyanSoft: '#2A9AE6',
          violet: '#8D7BF6',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 40px -24px rgba(0,0,0,0.55)',
        glow: '0 0 0 1px rgba(79,184,255,0.15), 0 20px 60px -20px rgba(79,184,255,0.25)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(10,15,29,0) 0%, #0A0F1D 92%), radial-gradient(circle at 1px 1px, rgba(148,163,197,0.14) 1px, transparent 0)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
