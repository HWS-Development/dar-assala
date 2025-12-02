/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-cream': '#faf8f5',
        'brand-dark': '#1a1a1a',
      },
      fontFamily: {
        'display': ['serif'],
      },
    },
  },
  plugins: [],
}

