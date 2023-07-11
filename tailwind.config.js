/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: '#00000080',

        'dark-gray': '#CECECE',
        'dark-gray-1': '#ABABAB',
        'darker-gray': '#595454',
        'light-pink': '#F3EBF5',
        'tp-1': '#FF2929',
        'tp-2': '#2936AF',
        'tp-3': '#EB691F',
        'tp-4': '#492755',
        'tp-5': '#AF8429',
        'tp-6': '#23AA69',
        'tp-7': '#8F23AA',
        'tp-8': '#AA2374',
        'tp-9': '#AA2B23',
        'tp-10': '#23A2AA',
      },
    },
    fontFamily: {
      sans: ['Karla', 'sans-serif'],
      lily: ['Lily Script One', 'sans-serif'],
      bebas: ['Bebas Neue', 'sans-serif'],
    },
  },
  plugins: [],
};
