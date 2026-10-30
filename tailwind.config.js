/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          light: '#829682',
          DEFAULT: '#657365',
          dark: '#525F52',
          muted: '#94A494',
        },
        olive: {
          light: '#5A685B',
          DEFAULT: '#465347',
          dark: '#384339',
          deep: '#262E27',
        },
        ivory: {
          DEFAULT: '#F3F0E7',
          warm: '#F7F5F0',
          soft: '#E9E4D8',
          muted: '#D3C9B8',
          cream: '#FAF8F3',
        },
        charcoal: {
          DEFAULT: '#292A27',
          light: '#3D3E3A',
          deep: '#1D1E1B',
        },
        coffee: {
          DEFAULT: '#70452F',
          light: '#8C583E',
          dark: '#543220',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'DM Sans', 'sans-serif'],
        display: ['Fraunces', 'serif'],
        serif: ['Fraunces', 'DM Serif Display', 'serif'],
        body: ['DM Sans', 'Manrope', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        normal: '0em',
        wide: '0.05em',
        wider: '0.12em',
        widest: '0.25em',
        ultra: '0.35em',
      },
    },
  },
  plugins: [],
}
