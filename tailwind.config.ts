import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#003366",
          dark: "#00284d",
          light: "#004080",
        },
        secondary: {
          DEFAULT: "#4CAF50",
          dark: "#3d8b40",
          light: "#5cb85c",
        },
        accent: {
          DEFAULT: "#FFB300",
          dark: "#e6a200",
          light: "#ffcc33",
        },
        neutral: {
          light: "#F5F5F5",
          DEFAULT: "#E0E0E0",
          dark: "#666666",
        },
      },
      fontFamily: {
        heading: ["Montserrat", "system-ui", "sans-serif"],
        body: ["Open Sans", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config; 