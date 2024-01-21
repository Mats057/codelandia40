/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      dark: {
        100: "#FFFFFF",
        200: "#F9F9F9",
        600: "#718096",
        900: "##2D3748",
      },
      primary: "#9E6EFE",
      sysBlue: "#2962FF",
      sysGreen: "#0BB07B",
      sysRed: "#F03D3D",
      sysYellow: "#FFCE52",
      sysGray: "#E0E0E0",
      background: "#f3f4f8",
      }
  },
  plugins: [],
}

