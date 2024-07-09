/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm2: "400px", // Custom breakpoint at 400px
        sm3: "630px", // Custom breakpoint at 630px
      },
    },
  },
  plugins: [],
};
