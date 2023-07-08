module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brandblue: {
          DEFAULT: '#1E88E5',
          900: '#051B2E',
          800: '#0B365D',
          700: '#10528B',
          600: '#156DBA',
          500: '#3594E8',
          400: '#4BA0EA',
          300: '#62ACED',
          200: '#78B8EF',
          100: '#8FC4F2',
        },
        brandyellow: {
          DEFAULT: '#FFD026',
        },
        brandgreen: {
          DEFAULT: '#16A75C',
        },
      },
    },
  },
  plugins: [],
}
