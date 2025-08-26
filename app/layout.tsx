import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoArabic = Noto_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "HollyQuran - عرض المقترح",
  description: "عرض مقترح لتطوير تطبيق القرآن الكريم",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoArabic.variable} antialiased`}>
        <nav className="w-full bg-[var(--card-bg)]/90 backdrop-blur-sm border-b border-solid border-[var(--card-border)] sticky top-0 z-40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-3">
                <Link href="/" className="flex items-center gap-3">
                  <span className="font-semibold">HollyQuran</span>
                </Link>
              </div>
              <div className="flex items-center gap-4">
                <Link href="/flutter" className="text-sm muted hover:underline">Flutter</Link>
                <Link href="/react-native" className="text-sm muted hover:underline">React Native</Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-6">{children}</main>
      </body>
    </html>
  );
}
