/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        flip: "flip 6s infinite steps(2, end)",
        rotate: "rotate 3s linear infinite both",
      },
      keyframes: {
        flip: {
          to: {
            transform: "rotate(360deg)",
          },
        },
        rotate: {
          to: {
            transform: "rotate(90deg)",
          },
        },
        "falling-stars": {
          "0%": {
            transform: "translateY(-10%) translateX(0)",
            opacity: "0",
          },
          "10%": {
            opacity: "0",
          },
          "100%": {
            transform: "translateY(100vh) translateX(100vw)",
            opacity: "1",
          },
        },
      },
      animation: {
        "fall-star": "falling-stars 5s linear infinite",
      },
    },
  },
  plugins: [],
};
