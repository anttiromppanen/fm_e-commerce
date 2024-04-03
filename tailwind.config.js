/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Kumbh Sans", "sans-serif"],
      },
      colors: {
        userOrange: "hsl(26, 100%, 55%)",
        userPaleOrange: "hsl(25, 100%, 94%)",
        userVeryDarkBlue: "hsl(220, 13%, 13%)",
        userDarkGrayishBlue: "hsl(219, 9%, 45%)",
        userGrayishBlue: "hsl(220, 14%, 75%)",
        userLightGrayishBlue: "hsl(223, 64%, 98%)",
      },
    },
  },
  plugins: [],
};
