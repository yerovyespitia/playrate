import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        card: 'repeat(auto-fill, minmax(190px, 1fr))',
        sm: 'repeat(auto-fill, minmax(140px, 1fr))',
        vertical: 'repeat(auto-fill, minmax(440px, 1fr))',
      },
      spacing: {
        '18': '70px',
      },
      screens: {
        '1xl': '1440px',
        '2xl': '1520px',
      },
      colors: {
        'primary': '#1E1E1E',
        'secondary': '#252525',
        'tertiary': '#404040',
      },
    },
  },
  plugins: [],
}
export default config
