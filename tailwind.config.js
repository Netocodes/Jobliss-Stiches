import("tailwindcss").Config;
module.exports = {
  content: [
    "./**/*.{html,tsx}",
    "node_modules/preline/dist/*.js",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        beige: "#b48b73",
        blacked: "#636161",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("preline/plugin"),
    require("tw-elements/plugin.cjs"),
  ],
};
