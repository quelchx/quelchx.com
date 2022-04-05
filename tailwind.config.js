const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        poppin: ["Poppins", "sans-serif"],
        monaco: ["Monaco", "sans-serif"],
      },
      colors: {
        lime: colors.lime,
        cyan: colors.cyan,
      },
    },
  },
  plugins: [],
};
