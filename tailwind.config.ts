import colors from "tailwindcss/colors";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";

export default {
  darkMode: "class",
  plugins: [typography(), forms()],
  theme: {
    extend: {
      fontFamily: {
        display: ["Gabarito"],
      },
      colors: {
        primary: colors.sky,
        secondary: colors.indigo,
        gray: colors.zinc,
      },
    },
  },
};
