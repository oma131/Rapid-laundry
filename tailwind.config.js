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
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'purple': '#6261FF',
        'midnight': '#0100bb',
        'light': '#ECF0F5',
        'faded': '#3938FF',
        'mixed': '#1126920D',
        'grey': '#B3B2FF66',
        'bermuda': '#78dcca',
        customColor: '#28745', // Add your custom color here
        customColor2: '#990404',
        customColor3: '#292f36',

      },
  },
  plugins: [require("@tailwindcss/forms"), addDynamicIconSelectors(),],
}

