/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#0B1F3A" },
      fontFamily: { sans: ["Inter","system-ui","sans-serif"], display: ["Outfit","system-ui","sans-serif"] }
    },
  },
  plugins: [],
}
