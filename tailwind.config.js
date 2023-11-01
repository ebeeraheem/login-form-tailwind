/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sourceSans: ["SourceSans-Variable", "sans-serif"],
      },
      backgroundImage: {
        hero: "url('src/images/blue-background.jpg')",
      },
    },
  },
  plugins: [],
};
