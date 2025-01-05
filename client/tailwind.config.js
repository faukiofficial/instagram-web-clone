/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '300': '300px',
        '400': '400px',
        '500': '500px',
        '600': '600px',
        '700': '700px',
        '800': '800px',
        '900': '900px',
        '1000': '1000px',
        '1100': '1100px',
        '1200': '1200px',
        '1300': '1300px',
        '1400': '1400px',
        '1500': '1500px',
        '1600': '1600px',
        '1700': '1700px',
        '1800': '1800px',
      },
    },
  },
  plugins: [],
}

