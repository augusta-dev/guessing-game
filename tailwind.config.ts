import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        darkNavy: '#00051E',
        cyan: '#0066ff',
        darkCyan: '#006DBB',
        darkerCyan: '#003358',
      },
      fontFamily: {
        amaranth: 'var(--font-amaranth)',
        elMessiri: 'var(--font-el-messiri)',
        poppins: 'var(--font-poppins)',
        quattrocentoSans: 'var(--font-quattrocento-sans)',
      }
    },
  },
  plugins: [],
}
export default config
