/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1f282d",
        accent: "#2fa3e6",
        text: "#8d99ae",
        text1: "#495569",
        "dark-bg": "#2d373c",
        "light-bg": "#f5faff",
        red: "#db584b",
        green: "#28a745",
        yellow: "#ddb630",
      },
    },
  },
  plugins: [],
};
