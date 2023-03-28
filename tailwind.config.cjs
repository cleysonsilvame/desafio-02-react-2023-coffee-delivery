/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      baloo: ["'Baloo 2'", "sans-serif"],
    },
    extend: {
      colors: {
        base: {
          white: "#FFFFFF",
          background: "#FAFAFA",
          card: "#F3F2F2",
          input: "#EDEDED",
          button: "#E6E5E5",
          hover: "#D7D5D5",
          label: "#8D8686",
          text: "#574F4D",
          subtitle: "#403937",
          title: "#272221",
        },
        brand: {
          "purple-dark": "#4B2995",
          purple: "#8047F8",
          "purple-light": "#EBE5F9",
          "yellow-dark": "#C47F17",
          yellow: "#DBAC2C",
          "yellow-light": "#F1E9C9",
        },
      },
      lineHeight: {
        base: "130%",
      },
    },
  },
  plugins: [],
};
