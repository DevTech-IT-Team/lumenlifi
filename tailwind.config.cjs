/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['var(--font-geist-sans)', 'Geist Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['var(--font-geist-sans)', 'Geist Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: '0.5rem',
        '2xl': '0.5rem',
        '3xl': '0.5rem',
      },
      fontSize: {
        'display': ['clamp(2.25rem,5vw,3.75rem)', { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '600' }],
        'display-sm': ['clamp(1.875rem,4vw,3rem)', { lineHeight: '1.15', letterSpacing: '-0.025em', fontWeight: '600' }],
      },
      colors: {
        green: {
          950: '#052e19',
          900: '#064e3b',
          700: '#059669',
          500: '#34d399'
        }
      },
      keyframes: {
        'hero-fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)', filter: 'blur(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        'hero-slide-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'nav-drop': {
          '0%': { opacity: '0', transform: 'translateY(-14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'hero-drift': {
          '0%, 100%': { transform: 'scale(1.08) translate(0, 0)' },
          '50%': { transform: 'scale(1.08) translate(-10px, 6px)' },
        },
        'hero-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'hero-particle': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.25' },
          '50%': { transform: 'translateY(-18px)', opacity: '0.55' },
        },
      },
      animation: {
        'hero-fade-up': 'hero-fade-up 0.75s ease-out both',
        'hero-slide-up': 'hero-slide-up 0.7s ease-out both',
        'nav-drop': 'nav-drop 0.6s ease-out both',
        'hero-drift': 'hero-drift 22s ease-in-out infinite',
        'hero-float': 'hero-float 6s ease-in-out infinite',
        'hero-particle': 'hero-particle 9s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
