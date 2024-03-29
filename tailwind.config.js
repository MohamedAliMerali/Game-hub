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

        "btn-bg": "#BBF7D0",
        "btn-color-light": "#151515",
        "btn-color-dark": "#22c55e",
      },
    },
  },
  plugins: [],
};
