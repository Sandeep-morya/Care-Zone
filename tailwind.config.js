/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    darkMode: 'class',
    extend: {
      colors: {
        // 33ff44
        primary: "#F84365",
        secondary: "#050A24",
        third:"#121C52",
        lightblack: "rgba(0,0,0,0.7)",
        lightwhite: "rgba(255,255,255,0.3)",
        dark: "#303136",
        moredark: "#252831"
      },
    },
  },
  plugins: [],
}

