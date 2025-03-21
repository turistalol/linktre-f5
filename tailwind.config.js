/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Neue Machina', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          gray: '#D9D9D9',
          navy: '#323B92',
        },
      },
    },
  },
  plugins: [],
};