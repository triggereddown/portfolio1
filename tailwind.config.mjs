/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: "var(--font-playfair)",
        outfit: "var(--font-outfit)",
      },
      colors: {
        blackTheme: "#050505",
        lightHover: "#f3f4f6",
        darkTheme: "#111111",
        darkThemeButton: "#ffffff",
        darkHover: "#111111",
        darkHoverLight: "#333333",
        darkHoverLightNew: "#fafafa",
        lightpurple: "#d1d5db",
        darkPurple: "#4b5563",
      },
      boxShadow: {
        black: "4px 4px 0 #000",
        white: "4px 4px 0 #fff",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fit,minmax(200px,1fr))",
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
