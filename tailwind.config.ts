/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        shopigo: {
          primary: "#4f46e5", // Indigo
          secondary: "#f59e0b", // Amber
          accent: "#10b981", // Green
          neutral: "#1f2937", // Gray
          "base-100": "#ffffff", // White background
        },
      },
      "dark", // optional dark mode
    ],
  },
};
