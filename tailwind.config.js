module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      pc: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      borderRadius: {
        default: "0.25rem",
      },
      colors: {
        primary: "#28ae68",
        lightGrey: "#f1f5f9",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
