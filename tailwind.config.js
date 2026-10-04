/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          bg: '#FAF8F5',
          card: '#F2EFE9',
          border: '#E5E0D8',
          text: '#1C1917',
          accent: '#C2410C',
        },
        dark: {
          bg: '#0D0D0D',
          card: '#161616',
          border: '#262626',
          text: '#EDEDED',
          accent: '#F97316',
        }
      }
    },
  },
  plugins: [],
}