/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#050507',
          soft: '#09090D',
        },
        surface: {
          DEFAULT: '#101017',
          hover: '#15151E',
          glass: 'rgba(16, 16, 23, 0.7)',
          glassBorder: 'rgba(255, 255, 255, 0.08)',
        },
        neon: {
          pink: '#FF00AC',
          cyan: '#08CEFD',
          violet: '#7C3CFF',
        },
        text: {
          primary: '#F7F7FA',
          secondary: '#A7A7B3',
          muted: '#686873',
        },
      },
      fontFamily: {
        display: ['Unbounded', 'sans-serif'],
        sans: ['Manrope', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      boxShadow: {
        'neon-pink': '0 0 25px -3px rgba(255, 0, 172, 0.45), 0 0 10px -2px rgba(255, 0, 172, 0.3)',
        'neon-cyan': '0 0 25px -3px rgba(8, 206, 253, 0.45), 0 0 10px -2px rgba(8, 206, 253, 0.3)',
        'neon-gradient': '0 0 30px -5px rgba(255, 0, 172, 0.35), 0 0 30px -5px rgba(8, 206, 253, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '0.9' },
        },
      },
    },
  },
  plugins: [],
};
