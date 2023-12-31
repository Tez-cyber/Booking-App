/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        appBlue: "#003580",
        lightBlue: "#0071c2",
        appGreen: "#008009"
      },
    },
  },
  plugins: [],
}

