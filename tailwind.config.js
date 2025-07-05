/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        // fontSize: {
        //     'sm14':'clamp(10px, 1.1vw, 50px)',
        // }
    },
  },
  plugins: [],
}
