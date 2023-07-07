/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      esm: "405px",
      sm: "480px",
      es: "510px",
      md: "768px",
      emd: "824px",
      lg: "976px",
      mlg: "1060px",
      xl: "1300px",
    },
    extend: {
      colors: {
        dark: "black",
        light: "white",
        whitesmoke: "rgba(245, 245, 245, 0.722)",
        blueviolet: " rgb(152, 84, 216)",
        blue: "rgb(32, 99, 201)",
        bluesmoke: "rgba(56, 23, 29, 0.561)",
        trans: "rgba(143, 143, 143, 0.522)",
        darkgrey: "rgb(30 30 30)",
      },
    },
  },
  plugins: [],
};
