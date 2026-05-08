import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Deep Moitra | Portfolio",
  description: "Frontend Developer & UI/UX Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${outfit.variable} antialiased font-outfit leading-8 overflow-x-hidden transition-colors duration-500 bg-white text-black dark:bg-[#050505] dark:text-[#f5f5f5]`}
      >
        {children}
      </body>
    </html>
  );
}
