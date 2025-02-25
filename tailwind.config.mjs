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
        ovo: "var(--font-ovo)",
        outfit: "var(--font-outfit)",
      },
      colors: {
        blackTheme: "#090A0B",
        lightHover: "#52057B",
        darkTheme: "#0C1524",
        darkThemeButton: "#754FE0",
        darkHover: "#493628",
        darkHoverLight: "#AB886D",
        darkHoverLightNew: "#FAF0E5",
        lightpurple: "#BC6FF1",
        darkPurple: "#5A0F78",
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
