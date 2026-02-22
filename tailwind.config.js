/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-portfolio': '#d1d5db',
        'dark-blue': '#1e293b',
      }
    },
  },
  plugins: [],
}