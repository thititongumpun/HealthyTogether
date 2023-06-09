/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "purple-500": "#512da8",
        "gray-400": "#EDECF4"
      },
      gridTemplateColumns: {
        sidebar: "250px auto", //for sidebar layout
      },
      gridTemplateRows: {
        header: "64px auto", //for the navbar layout
      },
      keyframes: {
        'swing': {
          '0%,100%' : { transform: 'rotate(15deg)' },
          '50%' : { transform: 'rotate(-15deg)' },
        }
      },
      animation: {
        'swing': 'swing 1s infinite'
      }
    },
  },
  plugins: [],
};
