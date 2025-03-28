import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          300: "#ff64a4",
          500: "#d10a5c",
          700: "#93003c",
        },
        secondary: {
          300: "#ccd2b0",
          500: "#b6d99d",
          700: "#444f3d",
        },
        neutral: {
          100: "#ffffff", // given
          200: `#e5e5e5`,
          300: `#d4d4d4`,
          400: "#c0c0c0", // given
          500: `#737373`,
          600: "#868686", // given
          700: `#404040`,
          800: "#2c2c2c", // given
          900: `#111111`,
        },
      },
      fontFamily: {
        sans: ["Inter var", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
