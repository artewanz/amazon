/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          DEFAULT: '#131921',
          light: '#232F3E'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}
