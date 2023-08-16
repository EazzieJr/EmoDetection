/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        sora: ["Sora", "sans-serif"],
      },
      
      colors: {
        'dark': '#121212',
        'light': '#FFFFFF',
        'explainer': '#666666'
      }
    },
  },
  plugins: [],
}

