// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customOrange: "#ff7c51", //Added a custom orange color for theming
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Added the Google Font Poppins
      },
    },
  },
  plugins: [],
};
