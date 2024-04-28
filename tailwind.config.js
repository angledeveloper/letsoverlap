/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: "fadeIn 1s ease-in-out",
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },

      fontFamily: {
        sans: ["Work Sans"],
        serif: ["Georgia"],
      },
      colors: {
        primary: {
          red: "#E71D36",
          yellow: "#FF9F1C",
          green: "#2EC4B6",
          gray: "#444444",
          white: "#FDFFFC",
          navy: "#0A1E2E",
        },
      },
    },
  },
  plugins: [],
};
