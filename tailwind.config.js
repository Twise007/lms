/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-white": "var(--color-white)",
        "bg-off-white": "var(--color-off-white)",
        "bg-black": "var(--color-black)",
        "bg-purple": "var(--color-purple)",
      },
    },
  },
  plugins: [require("daisyui")],
}