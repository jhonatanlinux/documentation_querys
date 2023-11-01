/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      colors: {
        blue: {
          500: "#0a3061",
          400: "#9DDDFF",
          300: "#00C1FF",
        },
        black: {
          100: "#0DODOD",
        },
      },
    },
  },
  plugins: [],
};