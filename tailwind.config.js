/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'electric-blue': '#2E5BFF',
        'deep-navy': '#1A237E',
      },
    },
  },
  plugins: [],
}