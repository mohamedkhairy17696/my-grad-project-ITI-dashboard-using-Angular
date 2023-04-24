{
  import("tailwindcss").Config;
}
module.exports = {
  plugins: [require("flowbite/plugin")],
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [],
};
