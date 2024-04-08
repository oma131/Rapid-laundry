/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#28745', // Add your custom color here
        customColor2: '#990404',
        customColor3: '#292f36',
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), addDynamicIconSelectors(),],
}

