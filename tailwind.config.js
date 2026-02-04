/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lignum-dark': '#1a1410',
        'lignum-brown': '#3d2817',
        'lignum-gold': '#d4a574',
        'lignum-cream': '#f4e4d0',
        'lignum-accent': '#e8b86d',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
}
