import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });

export const metadata: Metadata = {
  title: "Evocare | Luxury Automotive Enhancement",
  description:
    "Premium automotive care, detailing, and customization services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${cinzel.variable} font-sans bg-background text-foreground min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
