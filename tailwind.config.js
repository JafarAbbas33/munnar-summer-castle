/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#00aeb0',
        'secondary-bg': '#07505e',
      },
    },
  },
  plugins: [],
}

