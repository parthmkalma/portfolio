/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Bevan: ["Bevan", "cursive"],
        Anta: ["Anta", "sans-serif"],
        Kanit: ["Kanit", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        JosefinSans : ["Josefin Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
