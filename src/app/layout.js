import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

import PremiumFooter from "@/components/PremiumFooter";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Bartenders Club Delhi | Premium Bar Services",
  description: "Delhi's premier bartender staffing and mixology service. Professional bartenders for weddings, corporate events, and private parties. Established 2015.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} font-sans antialiased bg-white text-charcoal overflow-x-hidden`}
      >
        <Header />
        {children}
        <PremiumFooter />
      </body>
    </html>
  );
}
