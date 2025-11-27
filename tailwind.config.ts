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
          primary: "#4f46e5",
          secondary: "#f59e0b",
          accent: "#10b981",
          neutral: "#1f2937",
          "base-100": "#ffffff",
        },
      },
      "dark",
    ],
  },
};
