/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Asegúrate de incluir esta línea para que Tailwind pueda buscar clases en archivos JSX
  ],  theme: {
    extend: {},
  },
  plugins: [],
}