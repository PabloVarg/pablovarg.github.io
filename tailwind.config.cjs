/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-light": "#9EC2F7",
        "blue-dark": "#242434",
        "yellow-light": "#FFE9BD",
        "yellow-medium": "#F7DA9F",
        "yellow-dark": "#AB915C",
      },
    },
  },
  plugins: [],
};
