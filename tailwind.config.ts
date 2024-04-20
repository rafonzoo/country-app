import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8362F2',
        secondary: '#8DD4CC',
        white: '#FFFFFF',
      },
      boxShadow: {
        opaque: '0px 0px 4px 4px rgb(0 0 0 / 2%)',
        focus: '0 0 0 2px #8362F2',
      },
    },
  },
  plugins: [],
}
export default config
