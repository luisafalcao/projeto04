import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        customColor: {
          dark: '#222222',
          light: 'white',
          // accent: "#F9698C",
          accent: "#FFDC4A"
        }
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        rokkitt: ['Rokkitt', 'sans-serif']
      },
      maxWidth: {
        '1/2': '700px'
      },
      flex: {
        '1/2': '2 1 0%'
      }
    },
  },
  plugins: [],
}
export default config
