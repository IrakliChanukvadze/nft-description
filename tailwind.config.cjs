/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "800px",
    },
    colors: {
      secondary: "rgba(255, 255, 255, 0.4)",
      primary: " #fff",
      bgSecondary: "#17181B",
      bgOrange: "rgba(239, 128, 49, 0.1)",
      border: "rgba(255, 255, 255, 0.04)",
    },
    extend: {},
  },
  plugins: [],
};
