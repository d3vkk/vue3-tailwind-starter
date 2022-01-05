module.exports = {
  purge: {
    enabled: false,
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"], // for production
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
