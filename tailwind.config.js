// const defaultTheme = require("tailwindcss/defaultTheme");

export const content = ["./src/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"];
export const theme = {
  fontFamily: {
    poppins: ["Poppins", "sans-serif"],
  },
  container: {
    center: true,
  },
  extend: {
    colors: {
      dark: "#202430",
      medium_dark: "#3A4151",
      light: "#FBFBFB",
      dark40: "#00000066",
      orange: "#f8cf64",
      pink: "#f69bc0",
      cyan: "#5ef3e5",
      yellowgreen: "#eefea2",
      greenblue: "#5ef3e8",
      seablue: "#3a54e4",
      gradient_orange: "linear-gradient(315deg, #FF99C4 0%, #FFD162 100%)",
      gradient_grün: "linear-gradient(315deg, #F5FFA0 0%, #3EF3E8 100%)",
      gradient_blau: "linear-gradient(315deg, #3A4AE4 0%, #3B85E6 21.35%, #3EE4E8 73.44%, #3EF3E8 92.71%)",
    },
  },
};
export const plugins = [];
