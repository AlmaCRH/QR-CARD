/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit, sans-serif"],
      },
      colors: {
        darkBlue: "hsl(218, 44%, 22%)",
        grayishBlue: "hsl(220, 15%, 55%)",
      },
    },
  },
  plugins: [],
};
