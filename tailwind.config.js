/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      zero: " 0px",
      "e-sm": "375px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      "e-lg": "1200px",
    },
    fontFamily: {
      body: ['"Open Sans"', "sans-serif"],
    },
  },
  plugins: [],
  mode: "jit",
};
