/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sxl: "1100px",
        med: "425px",
        small: "320px",
        mx: "500px",
      },
    },
  },
  plugins: [],
};
