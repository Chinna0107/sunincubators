/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B6FF5',
        'primary-dark': '#0959C8',
        'primary-light': '#2EA4FF',
        navy: '#06111F',
        'navy-light': '#0D1F35',
        'navy-mid': '#0A1929',
        accent: '#2EA4FF',
        'light-gray': '#F5F7FA',
        'text-muted': '#94A3B8',
        'border-blue': 'rgba(11,111,245,0.3)',
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #06111F 0%, #0A1929 50%, #06111F 100%)',
        'blue-gradient': 'linear-gradient(135deg, #0B6FF5 0%, #2EA4FF 100%)',
        'dark-gradient': 'linear-gradient(180deg, #06111F 0%, #0D1F35 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(11,111,245,0.1) 0%, rgba(46,164,255,0.05) 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      boxShadow: {
        'blue-glow': '0 0 30px rgba(11,111,245,0.4)',
        'blue-glow-sm': '0 0 15px rgba(11,111,245,0.3)',
        'card': '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 12px 40px rgba(11,111,245,0.2)',
        'glass': '0 8px 32px rgba(0,0,0,0.3)',
        'premium': '0 20px 60px rgba(0,0,0,0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-blue': 'pulseBlue 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseBlue: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(11,111,245,0.4)' },
          '50%': { boxShadow: '0 0 0 20px rgba(11,111,245,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [],
}
