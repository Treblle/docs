/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'treblle-blue': {
          DEFAULT: '#0047BB',
          50: '#74A9FF',
          100: '#5F9CFF',
          200: '#3683FF',
          300: '#0E69FF',
          400: '#0056E4',
          500: '#0047BB',
          600: '#003283',
          700: '#001C4B',
          800: '#000713',
          900: '#000000',
        },
        'discord-blue': {
          DEFAULT: '#7289DA',
          50: '#FFFFFF',
          100: '#F3F5FC',
          200: '#D3DAF3',
          300: '#B3BFEB',
          400: '#92A4E2',
          500: '#7289DA',
          600: '#4664CE',
          700: '#2E4AAE',
          800: '#223782',
          900: '#162455',
        },
      },
    },
  },
  plugins: [],
}
