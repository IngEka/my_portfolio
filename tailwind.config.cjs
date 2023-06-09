/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        primary: '#09BBE0',
        secundary: '#FFE742',
        white: '#fff',
        black: '#0E141B',
        darkBlack: '#24385b'
      }
      // Noe Display(MEDIUM)) georgia(REGULAR) Segoe UI(REGULAR)
    },
    screens: {
      'movil': '320px',
       // => @media (min-width: 640px) { ... }
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
