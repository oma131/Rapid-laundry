/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'dark': '#363636',
      'neutral': '#666666',
      'white': '#ffffff',
      'purple': '#6261FF',
      'midnight': '#0100bb',
      'light': '#ECF0F5',
      'faded': '#3938FF',
      'mixed': '#1126920D',
      'grey': '#B3B2FF66',
      'bermuda': '#78dcca',
    },
  },
  plugins: [require("@tailwindcss/forms")],
}