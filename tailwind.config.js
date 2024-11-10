module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
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
    require("@tailwindcss/forms"), // Tailwind forms plugin
    require("preline/plugin"), // Preline plugin for additional components
    require("tw-elements/plugin.cjs"), // Tw-elements plugin
  ],
};
