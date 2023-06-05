/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: '#00000080',
        'light-pink': '#F3EBF5',
      },
    },
    fontFamily: {
      sans: ['Karla', 'sans-serif'],
      lily: ['Lily Script One', 'sans-serif'],
    },
  },
  plugins: [],
};
