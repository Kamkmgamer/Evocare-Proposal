import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HollyQuran CMS - عرض السعر | Development Proposal",
  description:
    "عرض مقترح لتطوير نظام إدارة المحتوى لتطبيق القرآن الكريم - CMS Development Proposal for Quran App",
  keywords: [
    "Quran App",
    "CMS",
    "تطبيق القرآن",
    "نظام إدارة المحتوى",
    "React Native",
    "Next.js",
  ],
  authors: [{ name: "HollyQuran Development Team" }],
  openGraph: {
    title: "HollyQuran CMS - Development Proposal",
    description: "عرض مقترح لتطوير نظام إدارة المحتوى لتطبيق القرآن الكريم",
    type: "website",
    locale: "ar_SA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body
        className={`${inter.variable} ${notoArabic.variable} antialiased selection:bg-primary/20 selection:text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
