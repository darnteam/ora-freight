/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // Enable dark mode
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        primary: "hsl(var(--primary))",
        muted: "hsl(var(--muted))",
        foreground: "hsl(var(--foreground))",
        background: "hsl(var(--background))",
      },
      animation: {
        "path-animation": "path-animation 20s linear infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        "path-animation": {
          "0%": { strokeDashoffset: "0%" },
          "100%": { strokeDashoffset: "100%" },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
    },
  },
  plugins: [],
}
