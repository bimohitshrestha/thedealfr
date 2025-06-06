import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import Footer from "@/components/footer/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const merriweather = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather",
  weight: "300",
});

export const metadata = {
  title: "The DealsFr.",
  description:
    "Managing VAT and TAX documentation can be complicated and time-consuming — but it doesn't have to be. Our VAT/TAX Filing Documentation System is designed to make your tax processes seamless, accurate, and fully compliant with local regulations.",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Chartered Management",
    "Chartered Accountant",
    "Portfolio Manager",
    "Bidur Dhungana",
  ],
  authors: [{ name: "Codequant", url: "https://codequant.io" }],
  creator: "Codequant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${merriweather.variable}`}>
      <body className={`${dmSans.className}`} style={{ background: "black" }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
