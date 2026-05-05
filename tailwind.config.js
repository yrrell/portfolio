/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Sora'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        navy: {
          950: "#020c1b",
          900: "#0a1628",
          800: "#0d1f38",
          700: "#112240",
        },
        accent: "#2563eb",
        cyan: "#06b6d4",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
