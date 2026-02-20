/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(-90deg)' },
          '100%': { transform: 'rotate(270deg)' },
        },
        blink2s: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        globe: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        worldLeft: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '-100% 50%' },
        },
        worldMaskLeft: {
          '0%': { maskPosition: '0% 50%', WebkitMaskPosition: '0% 50%' },
          '100%': { maskPosition: '-100% 50%', WebkitMaskPosition: '-100% 50%' },
        },
      },
      animation: {
        'orbit-1s': 'orbit 1s linear infinite',
        'orbit-60s': 'orbit 60s linear infinite',
        'blink-2s': 'blink2s 2s steps(1, end) infinite',
        'globe-20s': 'globe 20s linear infinite',
        'world-left-120s': 'worldLeft 120s linear infinite',
        'world-mask-left-120s': 'worldMaskLeft 120s linear infinite',
      },
    },
  },
  plugins: [],
}
