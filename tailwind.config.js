
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./lib/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        konarr: {
          base: "#0b1215",
          panel: "#132025",
          panelAlt: "#10191d",
          line: "#25404d",
          accent: "#42d4ff",
          signal: "#f6b73c",
          text: "#e8f1f5",
          muted: "#99adb7"
        }
      },
      boxShadow: {
        glow: "0 24px 80px rgba(66, 212, 255, 0.18)",
        panel: "0 12px 32px rgba(0, 0, 0, 0.35)"
      }
    },
  },
  plugins: [],
}
