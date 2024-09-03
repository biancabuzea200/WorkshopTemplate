import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2FD05B",
          50: "#c7e6d0",
          100: "#c7e6d0",
          200: "#2FD05B",
          300: "#2FD05B",
          400: "#2FD05B",
          500: "#2FD05B",
          600: "#2FD05B",
          700: "#2FD05B",
          800: "#2FD05B",
          900: "#2FD05B",
        },
        secondary: "#0F0F0F",
        accent: "#F7B801",
        lightGray: "#F4F5F7",
        darkGray: "#84E39E",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
