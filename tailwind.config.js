
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        konarr: {
          bg: "#000000",
          card: "#0e0e10",
          accent: "#ffffff"
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(255,255,255,0.05)",
      }
    },
  },
  plugins: [],
}
