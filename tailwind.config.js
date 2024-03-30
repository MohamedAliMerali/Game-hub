/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "bg-light": "#fefefe",
        "bg-dark": "#191919",

        "primary-light": "#151515",
        "primary-dark": "#ececec",

        "secondary-light": "#dfdfdf",
        "secondary-dark": "#303030",
        "icon-light": "#6f6f6f",
        "icon-dark": "#a2a2a2",

        "btn-bg": "#22c55e",

        "rating-bg-dark": "#434f47",
        "rating-color-dark": "#9ee8bf",

        "rating-bg-light": "#bdf0cc",
        "rating-color-light": "#103c21",
      },
    },
  },
  plugins: [],
};
