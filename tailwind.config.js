/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "hack-purple": "#1e003e",
        "hack-rose": "#f75159",
        "hack-yellow": "#fcde43",
        "hack-silver": "#28334b",
      },
      fontFamily: {
        Teko: ['"Teko"', "serif"],
      },
    },
  },
  plugins: [],
};
