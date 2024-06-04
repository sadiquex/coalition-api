/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        lightGray: "#F6F7F8",
        white: "#FFFFFF",
        semiTransparentGray1: "#C8CCD414",
        semiTransparentGray2: "#C8CCD41A",
        darkBlue: "#072635",
        mediumGray: "#E3E4E6",
        lightPink: "#FFE6F1",
        lightBlue: "#E0F3FA",
        lightRed: "#FFE6E9",
        black: "#000000",
        lightPurple: "#F4F0FE",
        grayishPurple: "#CBC8D4",
        purple: "#7E6CAB",
        lightPurpleBlue: "#8C6FE6",
        pinkishPurple: "#C26EB4",
        brightPink: "#E66FD2",
        mintGreen: "#01F0D0",
        veryLightBlue: "#D8FCF7",
        veryLightGray: "#EDEDED",
        darkGray: "#707070",
      },
    },
  },
  plugins: [],
};
