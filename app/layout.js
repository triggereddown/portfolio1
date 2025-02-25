import { Ovo, Outfit } from "next/font/google";
import "./globals.css";

const ovo = Ovo({
  variable: "--font-ovo",
  subsets: ["latin"],
  weight: "400",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Deep Moitra",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth  ">
      <body
        className={`${ovo.variable} ${outfit.variable} antialiased leading-8 overflow-x-hidden dark:bg-blackTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
