import color from "./src/constants/colors";
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: color.background,
        primary: color.primary,
        accent: color.accent,
        textPrimary: color.textPrimary,
      },
    },
  },
  plugins: [],
};
