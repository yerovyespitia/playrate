import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '18': '70px',
      },
      colors: {
        'custom-black': '#1E1E1E',
        'custom-gray': '#252525',
        'custom-light-black': '#404040',
      },
    },
  },
  plugins: [],
}
export default config
