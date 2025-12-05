"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ClipboardList,
  Target,
  Server,
  LayoutDashboard,
  Smartphone,
  Cloud,
  DollarSign,
  Calendar,
  Package,
  Palette,
  FileText,
  Wrench,
  CheckCircle2,
  Star,
  Lightbulb,
  Clock,
  Zap,
  Award,
  BookOpen,
  Users,
  Headphones,
  Shield,
  TrendingUp,
  Globe,
  Moon,
  Sparkles,
} from "lucide-react";

// Islamic Crescent and Star SVG Component
const IslamicCrescent = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.31 0 2.56-.26 3.71-.72-2.38-1.51-3.96-4.17-3.96-7.28 0-3.11 1.58-5.77 3.96-7.28C14.56 2.26 13.31 2 12 2z" />
    <circle cx="18" cy="6" r="2" />
  </svg>
);

// Islamic Eight-Pointed Star Component
const IslamicStar = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0L14.12 7.04L21.21 6.34L15.8 11.2L18.47 18L12 14.4L5.53 18L8.2 11.2L2.79 6.34L9.88 7.04L12 0Z" />
  </svg>
);

// Decorative Arabesque Border Component
const ArabesqueBorder = () => (
  <div className="flex items-center justify-center gap-3 py-4">
    <div className="h-[2px] w-12 bg-gradient-to-r from-transparent via-[oklch(0.72_0.14_75)] to-[oklch(0.42_0.12_155)]" />
    <IslamicStar className="w-4 h-4 text-[oklch(0.72_0.14_75)]" />
    <IslamicCrescent className="w-5 h-5 text-[oklch(0.42_0.12_155)]" />
    <IslamicStar className="w-4 h-4 text-[oklch(0.72_0.14_75)]" />
    <div className="h-[2px] w-12 bg-gradient-to-l from-transparent via-[oklch(0.72_0.14_75)] to-[oklch(0.42_0.12_155)]" />
  </div>
);

// Bismillah Component
const Bismillah = () => (
  <div className="text-center py-6 animate-fade-up">
    <p className="text-2xl md:text-3xl font-bold text-[oklch(0.42_0.12_155)] font-[var(--font-arabic)]">
      بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
    </p>
    <ArabesqueBorder />
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen premium-bg relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Morphing gradient orbs - Islamic green and gold */}
        <div className="orb orb-1 -top-40 -right-40 animate-morph" />
        <div
          className="orb orb-2 -bottom-20 -left-20 animate-morph"
          style={{ animationDelay: "-4s" }}
        />
        <div
          className="orb orb-3 top-1/3 left-1/4 animate-morph"
          style={{ animationDelay: "-2s" }}
        />

        {/* Floating decorative crescents */}
        <div className="absolute top-20 right-[15%] opacity-10 animate-crescent-float">
          <IslamicCrescent className="w-24 h-24 text-[oklch(0.42_0.12_155)]" />
        </div>
        <div
          className="absolute bottom-40 left-[10%] opacity-10 animate-crescent-float"
          style={{ animationDelay: "-2s" }}
        >
          <IslamicCrescent className="w-16 h-16 text-[oklch(0.72_0.14_75)]" />
        </div>

        {/* Twinkling stars */}
        <div className="absolute top-32 left-[20%] animate-star-twinkle">
          <IslamicStar className="w-3 h-3 text-[oklch(0.72_0.14_75)]" />
        </div>
        <div
          className="absolute top-48 right-[25%] animate-star-twinkle"
          style={{ animationDelay: "-1s" }}
        >
          <IslamicStar className="w-2 h-2 text-[oklch(0.65_0.12_80)]" />
        </div>
        <div
          className="absolute bottom-60 right-[15%] animate-star-twinkle"
          style={{ animationDelay: "-0.5s" }}
        >
          <IslamicStar className="w-4 h-4 text-[oklch(0.72_0.14_75)]" />
        </div>

        {/* Islamic geometric pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.42_0.12_155/0.02)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.42_0.12_155/0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Radial gradient spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-[oklch(0.42_0.12_155/0.08)] via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 p-6 sm:p-8 md:p-12 pb-24">
        {/* Bismillah */}
        <Bismillah />

        {/* Header */}
        <header className="max-w-5xl mx-auto mb-16 text-center">
          {/* Animated Badge with Crescent */}
          <div className="animate-bounce-in delay-100 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[oklch(0.42_0.12_155/0.1)] via-[oklch(0.72_0.14_75/0.15)] to-[oklch(0.42_0.12_155/0.1)] border border-[oklch(0.72_0.14_75/0.4)] mb-8 shadow-gold backdrop-blur-sm">
            <Moon className="w-5 h-5 text-[oklch(0.42_0.12_155)] animate-pulse" />
            <span className="text-sm font-bold text-[oklch(0.42_0.12_155)] tracking-wide">
              عرض سعر حصري
            </span>
            <Sparkles
              className="w-5 h-5 text-[oklch(0.72_0.14_75)] animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </div>

          {/* Main Title with staggered animation */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gradient-islamic leading-tight animate-fade-up delay-200">
            خطة تطوير نظام إدارة المحتوى
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4 animate-fade-up delay-300">
            مشروع تطوير لوحة تحكم شاملة وربطها بتطبيق القرآن الكريم
          </p>

          <p className="text-sm text-muted-foreground/70 animate-fade-up delay-400">
            Quran App CMS - Development Plan & Pricing
          </p>

          {/* Decorative Islamic line */}
          <div className="mt-10 flex items-center justify-center gap-4 animate-fade-up delay-500">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[oklch(0.72_0.14_75)]" />
            <IslamicCrescent className="w-5 h-5 text-[oklch(0.42_0.12_155)] animate-crescent-float" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[oklch(0.72_0.14_75)]" />
          </div>
        </header>

        <main className="max-w-5xl mx-auto space-y-12">
          {/* Overview Card */}
          <Card className="glass hover-lift animate-fade-up delay-100 border-[oklch(0.72_0.14_75/0.2)] islamic-card-frame">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="icon-box">
                  <ClipboardList className="w-5 h-5" />
                </div>
                <div>
                  <CardTitle className="text-xl">نظرة عامة</CardTitle>
                  <CardDescription>Overview</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 leading-relaxed text-base">
                هذا المستند يوضح الخطة الكاملة لتطوير نظام إدارة المحتوى (CMS)
                لتطبيق القرآن الكريم، بما في ذلك التنفيذ التقني والأسعار
                والتصميم. نقدم حلاً متكاملاً يجمع بين الجودة العالية والتقنيات
                الحديثة.
              </p>
            </CardContent>
          </Card>

          {/* Project Scope */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 animate-fade-up delay-200">
              <div className="icon-box-lg">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  نطاق العمل
                </h2>
                <p className="text-muted-foreground text-sm">Project Scope</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Backend */}
              <Card className="glass card-3d shine-effect group animate-fade-up delay-300 border-transparent hover:border-[oklch(0.42_0.12_155/0.3)] transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="icon-box bg-gradient-to-br from-[oklch(0.45_0.12_200/0.15)] to-[oklch(0.38_0.1_175/0.2)] text-[oklch(0.4_0.1_200)]">
                      <Server className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">الواجهة الخلفية</CardTitle>
                      <CardDescription>Backend Development</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "تصميم قاعدة البيانات للمحتوى",
                      "واجهات برمجية آمنة (tRPC API)",
                      "نظام مصادقة وتفويض المسؤولين",
                      "خدمة رفع الملفات والصور",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-foreground/80"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[oklch(0.42_0.12_155)] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Dashboard */}
              <Card className="glass card-3d shine-effect group animate-fade-up delay-400 border-transparent hover:border-[oklch(0.42_0.12_155/0.3)] transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="icon-box bg-gradient-to-br from-[oklch(0.55_0.15_300/0.15)] to-[oklch(0.45_0.12_280/0.2)] text-[oklch(0.5_0.14_290)]">
                      <LayoutDashboard className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">لوحة التحكم</CardTitle>
                      <CardDescription>Admin Dashboard</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      'إدارة "آية اليوم" و "أذكار اليوم"',
                      "إدارة الفعاليات والإعلانات",
                      "محرر نصوص غني للعربية",
                      "لوحة تحليلات للمشاهدات",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-foreground/80"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[oklch(0.42_0.12_155)] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Mobile Integration */}
              <Card className="glass card-3d shine-effect group animate-fade-up delay-500 border-transparent hover:border-[oklch(0.42_0.12_155/0.3)] transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="icon-box bg-gradient-to-br from-[oklch(0.65_0.14_60/0.15)] to-[oklch(0.55_0.12_50/0.2)] text-[oklch(0.55_0.12_55)]">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">تطبيق الموبايل</CardTitle>
                      <CardDescription>Mobile Integration</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      'عرض بطاقة "آية اليوم"',
                      "قوائم الأذكار والفعاليات",
                      "التخزين المؤقت (Offline Support)",
                      "تحديث المحتوى بالسحب (Pull-to-refresh)",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-foreground/80"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[oklch(0.42_0.12_155)] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Infrastructure */}
              <Card className="glass card-3d shine-effect group animate-fade-up delay-600 border-transparent hover:border-[oklch(0.42_0.12_155/0.3)] transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="icon-box bg-gradient-to-br from-[oklch(0.5_0.12_175/0.15)] to-[oklch(0.42_0.1_165/0.2)] text-[oklch(0.45_0.1_170)]">
                      <Cloud className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">البنية التحتية</CardTitle>
                      <CardDescription>Infrastructure</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "استضافة على Vercel",
                      "قاعدة بيانات Neon/Supabase",
                      "تجهيز البيئة و SSL",
                      "دليل المستخدم والتوثيق",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-foreground/80"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[oklch(0.42_0.12_155)] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Islamic Decorative Divider */}
          <ArabesqueBorder />

          {/* Pricing Section - Premium Redesign */}
          <section className="space-y-8 animate-fade-up delay-700">
            {/* Section Header */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[oklch(0.42_0.12_155)] to-[oklch(0.38_0.1_175)] flex items-center justify-center shadow-lg shadow-[oklch(0.42_0.12_155/0.25)]">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  تفصيل الأسعار
                </h2>
                <p className="text-muted-foreground">Pricing Breakdown</p>
              </div>
            </div>

            {/* Development Phases */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px flex-1 bg-gradient-to-l from-[oklch(0.42_0.12_155/0.3)] to-transparent" />
                <span className="text-sm font-semibold text-[oklch(0.42_0.12_155)] px-3 py-1 rounded-full bg-[oklch(0.42_0.12_155/0.1)]">
                  مراحل التطوير
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-[oklch(0.42_0.12_155/0.3)] to-transparent" />
              </div>

              <div className="grid gap-4">
                {[
                  {
                    icon: Server,
                    title: "قاعدة البيانات والـ API",
                    subtitle: "Database & API Development",
                    egp: "8,800",
                    sar: "1,320",
                    usd: "$176",
                    iconBg: "bg-[oklch(0.45_0.12_200/0.1)]",
                    iconColor: "text-[oklch(0.4_0.1_200)]",
                  },
                  {
                    icon: LayoutDashboard,
                    title: "لوحة التحكم الإدارية",
                    subtitle: "Admin Dashboard",
                    egp: "16,800",
                    sar: "2,520",
                    usd: "$336",
                    iconBg: "bg-[oklch(0.55_0.15_300/0.1)]",
                    iconColor: "text-[oklch(0.5_0.14_290)]",
                  },
                  {
                    icon: Smartphone,
                    title: "دمج التطبيق المحمول",
                    subtitle: "Mobile App Integration",
                    egp: "12,800",
                    sar: "1,920",
                    usd: "$256",
                    iconBg: "bg-[oklch(0.65_0.14_60/0.1)]",
                    iconColor: "text-[oklch(0.55_0.12_55)]",
                  },
                  {
                    icon: Shield,
                    title: "الاختبار والنشر والتوثيق",
                    subtitle: "Testing, Deployment & Docs",
                    egp: "9,600",
                    sar: "1,440",
                    usd: "$192",
                    iconBg: "bg-[oklch(0.5_0.12_175/0.1)]",
                    iconColor: "text-[oklch(0.45_0.1_170)]",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group relative bg-white/80 dark:bg-[oklch(0.18_0.03_155/0.5)] rounded-2xl border border-[oklch(0.72_0.14_75/0.2)] p-5 hover:border-[oklch(0.42_0.12_155/0.3)] transition-all duration-300 hover:shadow-islamic-lg backdrop-blur-sm"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center transition-transform group-hover:scale-110`}
                        >
                          <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground text-lg">
                            {item.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6 text-left">
                        <div className="hidden sm:block text-center">
                          <p className="text-xs text-muted-foreground mb-1">
                            USD
                          </p>
                          <p className="font-semibold text-foreground/70">
                            {item.usd}
                          </p>
                        </div>
                        <div className="hidden md:block text-center">
                          <p className="text-xs text-muted-foreground mb-1">
                            ر.س
                          </p>
                          <p className="font-semibold text-foreground/70">
                            {item.sar}
                          </p>
                        </div>
                        <div className="text-center min-w-[80px]">
                          <p className="text-xs text-muted-foreground mb-1">
                            ج.م
                          </p>
                          <p className="font-bold text-xl text-[oklch(0.42_0.12_155)]">
                            {item.egp}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Development Subtotal */}
              <div className="relative bg-gradient-to-l from-[oklch(0.42_0.12_155/0.05)] via-[oklch(0.42_0.12_155/0.1)] to-[oklch(0.72_0.14_75/0.05)] rounded-2xl border border-[oklch(0.42_0.12_155/0.2)] p-5 mt-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[oklch(0.42_0.12_155/0.1)] flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-[oklch(0.42_0.12_155)]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[oklch(0.42_0.12_155)] text-lg">
                        المجموع الفرعي (التطوير)
                      </h4>
                      <p className="text-sm text-[oklch(0.42_0.12_155/0.7)]">
                        Development Subtotal
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-left">
                    <div className="hidden sm:block text-center">
                      <p className="text-xs text-[oklch(0.42_0.12_155/0.6)] mb-1">
                        USD
                      </p>
                      <p className="font-bold text-[oklch(0.42_0.12_155)]">
                        $960
                      </p>
                    </div>
                    <div className="hidden md:block text-center">
                      <p className="text-xs text-[oklch(0.42_0.12_155/0.6)] mb-1">
                        ر.س
                      </p>
                      <p className="font-bold text-[oklch(0.42_0.12_155)]">
                        7,200
                      </p>
                    </div>
                    <div className="text-center min-w-[80px]">
                      <p className="text-xs text-[oklch(0.42_0.12_155/0.6)] mb-1">
                        ج.م
                      </p>
                      <p className="font-black text-2xl text-[oklch(0.42_0.12_155)]">
                        48,000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Phase */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px flex-1 bg-gradient-to-l from-[oklch(0.72_0.14_75/0.4)] to-transparent" />
                <span className="text-sm font-semibold text-[oklch(0.65_0.12_80)] px-3 py-1 rounded-full bg-[oklch(0.72_0.14_75/0.15)]">
                  مرحلة التصميم
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-[oklch(0.72_0.14_75/0.4)] to-transparent" />
              </div>

              <div className="group relative bg-white/80 dark:bg-[oklch(0.18_0.03_155/0.5)] rounded-2xl border border-[oklch(0.72_0.14_75/0.3)] p-5 hover:border-[oklch(0.72_0.14_75/0.5)] transition-all duration-300 hover:shadow-gold-lg backdrop-blur-sm">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[oklch(0.72_0.14_75/0.15)] flex items-center justify-center transition-transform group-hover:scale-110">
                      <Palette className="w-6 h-6 text-[oklch(0.65_0.12_80)]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg">
                        تصميم لوحة التحكم + التطبيق
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Figma Design - Dashboard & App
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-left">
                    <div className="hidden sm:block text-center">
                      <p className="text-xs text-muted-foreground mb-1">USD</p>
                      <p className="font-semibold text-foreground/70">$203</p>
                    </div>
                    <div className="hidden md:block text-center">
                      <p className="text-xs text-muted-foreground mb-1">ر.س</p>
                      <p className="font-semibold text-foreground/70">1,524</p>
                    </div>
                    <div className="text-center min-w-[80px]">
                      <p className="text-xs text-muted-foreground mb-1">ج.م</p>
                      <p className="font-bold text-xl text-[oklch(0.65_0.12_80)]">
                        10,150
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grand Total - Islamic Premium Design */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[oklch(0.42_0.12_155)] via-[oklch(0.38_0.1_165)] to-[oklch(0.35_0.1_175)] p-1 shadow-2xl shadow-[oklch(0.42_0.12_155/0.3)] animate-islamic-glow">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.72_0.14_75/0.15)] via-transparent to-[oklch(0.72_0.14_75/0.15)] animate-gradient" />

              {/* Islamic geometric pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
              </div>

              {/* Decorative crescents */}
              <div className="absolute top-4 right-10 opacity-30">
                <IslamicCrescent className="w-8 h-8 text-[oklch(0.72_0.14_75)]" />
              </div>
              <div
                className="absolute bottom-4 left-10 opacity-30"
                style={{ transform: "rotate(180deg)" }}
              >
                <IslamicCrescent className="w-6 h-6 text-[oklch(0.72_0.14_75)]" />
              </div>

              {/* Sparkle particles */}
              <div className="absolute top-4 left-[30%] w-2 h-2 bg-[oklch(0.72_0.14_75)] rounded-full animate-ping opacity-75" />
              <div
                className="absolute bottom-6 right-[25%] w-1.5 h-1.5 bg-[oklch(0.85_0.1_85)] rounded-full animate-ping opacity-75"
                style={{ animationDelay: "0.5s" }}
              />

              <div className="relative bg-gradient-to-br from-[oklch(0.42_0.12_155/0.95)] via-[oklch(0.38_0.1_165/0.95)] to-[oklch(0.35_0.1_175/0.95)] rounded-[22px] p-6 md:p-8 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4 text-center md:text-right">
                    <div className="w-16 h-16 rounded-2xl bg-[oklch(0.72_0.14_75/0.25)] backdrop-blur-sm flex items-center justify-center animate-float">
                      <IslamicStar className="w-8 h-8 text-[oklch(0.85_0.1_85)] drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-white drop-shadow-lg">
                        المجموع الكلي
                      </h3>
                      <p className="text-[oklch(0.85_0.08_155)]">
                        Grand Total - Full Package
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8 md:gap-12">
                    <div className="text-center">
                      <p className="text-sm text-[oklch(0.8_0.06_155)] mb-1">
                        USD
                      </p>
                      <p className="text-2xl md:text-3xl font-black text-white drop-shadow-lg">
                        $1,163
                      </p>
                    </div>
                    <div className="hidden sm:block text-center">
                      <p className="text-sm text-[oklch(0.8_0.06_155)] mb-1">
                        ر.س
                      </p>
                      <p className="text-2xl md:text-3xl font-black text-white drop-shadow-lg">
                        8,724
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-[oklch(0.8_0.06_155)] mb-1">
                        ج.م
                      </p>
                      <p className="text-3xl md:text-5xl font-black text-white drop-shadow-lg animate-scale-pulse">
                        58,150
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Infrastructure Note */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-l from-[oklch(0.95_0.03_85)] to-[oklch(0.92_0.04_80)] dark:from-[oklch(0.25_0.04_85/0.3)] dark:to-[oklch(0.22_0.05_80/0.3)] border border-[oklch(0.72_0.14_75/0.3)] p-5">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[oklch(0.72_0.14_75)] to-[oklch(0.65_0.12_80)]" />
              <div className="flex items-start gap-4 pr-2">
                <div className="w-10 h-10 rounded-xl bg-[oklch(0.72_0.14_75/0.2)] flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-[oklch(0.6_0.12_75)]" />
                </div>
                <div>
                  <h5 className="font-bold text-[oklch(0.45_0.08_75)] dark:text-[oklch(0.8_0.08_85)] mb-1">
                    خيارات البنية التحتية (شهرياً)
                  </h5>
                  <p className="text-sm text-[oklch(0.5_0.06_75/0.9)] dark:text-[oklch(0.75_0.06_85/0.8)] leading-relaxed">
                    تبدأ مجاناً تماماً (Vercel + Neon Free Tier). يمكن التوسع
                    لاحقاً بتكلفة ~1,500 ج.م/شهر عند الحاجة.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Options */}
          <section className="max-w-2xl mx-auto">
            {/* Full Package Option */}
            <Card className="relative overflow-hidden card-3d shine-effect animate-fade-up delay-800 border-2 border-[oklch(0.42_0.12_155/0.3)] bg-gradient-to-br from-[oklch(0.42_0.12_155/0.05)] to-[oklch(0.72_0.14_75/0.05)]">
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-l from-[oklch(0.42_0.12_155)] via-[oklch(0.55_0.11_120)] to-[oklch(0.72_0.14_75)]" />
              <CardHeader>
                <Badge className="w-fit bg-gradient-to-l from-[oklch(0.42_0.12_155)] to-[oklch(0.38_0.1_175)] text-white border-0 mb-2">
                  <IslamicStar className="w-3 h-3 ml-1" />
                  الخيار الموصى به
                </Badge>
                <CardTitle className="text-xl">الباقة الكاملة</CardTitle>
                <CardDescription>Full Package</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-gradient-islamic">
                    58,150
                  </span>
                  <span className="text-lg font-bold text-[oklch(0.42_0.12_155/0.7)]">
                    ج.م
                  </span>
                </div>
                <p className="text-muted-foreground">
                  تشمل التطوير الكامل + تصاميم Figma + النشر والتوثيق.
                </p>
                <div className="p-3 bg-white/60 dark:bg-white/10 rounded-lg border border-[oklch(0.42_0.12_155/0.15)]">
                  <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[oklch(0.42_0.12_155)]" />
                    الدفع: 50% مقدماً، 50% عند الاستلام
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Timeline */}
          <Card className="glass overflow-hidden animate-fade-up delay-1000 border-[oklch(0.72_0.14_75/0.2)]">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="icon-box-lg bg-gradient-to-br from-[oklch(0.5_0.14_260/0.15)] to-[oklch(0.45_0.12_270/0.2)] text-[oklch(0.5_0.14_265)]">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-2xl">الجدول الزمني</CardTitle>
                  <CardDescription>Project Timeline</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6 relative">
                {/* Timeline line */}
                <div className="timeline-line" />

                {[
                  {
                    title: "مرحلة التصميم",
                    time: "أسبوع",
                    desc: "تصاميم Figma كاملة للوحة التحكم والتطبيق",
                    icon: Palette,
                    colorClass: "icon-gold",
                  },
                  {
                    title: "المرحلة 1: الواجهة الخلفية",
                    time: "1 أسبوع",
                    desc: "قاعدة البيانات و API",
                    icon: Server,
                    colorClass: "icon-blue",
                  },
                  {
                    title: "المرحلة 2: لوحة التحكم",
                    time: "أسبوعان",
                    desc: "بناء الواجهات والربط",
                    icon: LayoutDashboard,
                    colorClass: "icon-purple",
                  },
                  {
                    title: "المرحلة 3: دمج الموبايل",
                    time: "1 أسبوع",
                    desc: "تحديث التطبيق وعرض المحتوى",
                    icon: Smartphone,
                    colorClass: "icon-orange",
                  },
                  {
                    title: "المرحلة 4: الإطلاق",
                    time: "1 أسبوع",
                    desc: "الاختبار والنشر والتوثيق",
                    icon: Globe,
                    colorClass: "icon-teal",
                  },
                ].map((item, i) => (
                  <div key={i} className="relative pl-10">
                    <div className="timeline-dot" />
                    <div className="bg-white/50 dark:bg-white/5 rounded-xl p-4 border border-[oklch(0.72_0.14_75/0.15)] hover:border-[oklch(0.42_0.12_155/0.3)] transition-all hover:shadow-islamic">
                      <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                        <div className="flex items-center gap-3">
                          <item.icon className={`w-5 h-5 ${item.colorClass}`} />
                          <h4 className="font-bold text-foreground">
                            {item.title}
                          </h4>
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-[oklch(0.42_0.12_155/0.1)] text-[oklch(0.42_0.12_155)] border-0"
                        >
                          <Clock className="w-3 h-3 ml-1" />
                          {item.time}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground pl-8">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-6 bg-[oklch(0.72_0.14_75/0.2)]" />

              <div className="text-center p-4 bg-gradient-to-l from-[oklch(0.42_0.12_155/0.05)] to-[oklch(0.72_0.14_75/0.05)] rounded-xl border border-[oklch(0.42_0.12_155/0.15)]">
                <p className="font-bold text-foreground flex items-center justify-center gap-2">
                  <Award className="w-5 h-5 text-[oklch(0.42_0.12_155)]" />
                  الإجمالي التقديري: 6 أسابيع
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Deliverables */}
          <section className="grid md:grid-cols-3 gap-6">
            {/* Code Deliverables */}
            <Card className="glass card-3d shine-effect animate-fade-up delay-100 border-[oklch(0.72_0.14_75/0.2)]">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="icon-box bg-gradient-to-br from-[oklch(0.45_0.12_200/0.15)] to-[oklch(0.4_0.1_190/0.2)] text-[oklch(0.4_0.1_195)]">
                    <Package className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-lg">مخرجات الكود</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "كود المصدر كامل",
                    "تحديثات تطبيق الموبايل",
                    "توثيق الـ API",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-foreground/80"
                    >
                      <div className="w-5 h-5 rounded-full bg-[oklch(0.42_0.12_155/0.1)] flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[oklch(0.42_0.12_155)]" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Design Deliverables */}
            <Card className="glass card-3d shine-effect animate-fade-up delay-200 border-[oklch(0.72_0.14_75/0.2)]">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="icon-box bg-gradient-to-br from-[oklch(0.72_0.14_75/0.15)] to-[oklch(0.65_0.12_80/0.2)] text-[oklch(0.6_0.12_78)]">
                    <Palette className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-lg">مخرجات التصميم</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    "ملفات Figma مفتوحة",
                    "نظام التصميم (Design System)",
                    "الأيقونات والصور",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-foreground/80"
                    >
                      <div className="w-5 h-5 rounded-full bg-[oklch(0.72_0.14_75/0.15)] flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[oklch(0.65_0.12_80)]" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Documentation & Support */}
            <Card className="glass card-3d shine-effect animate-fade-up delay-300 border-[oklch(0.72_0.14_75/0.2)]">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="icon-box bg-gradient-to-br from-[oklch(0.5_0.12_175/0.15)] to-[oklch(0.45_0.1_165/0.2)] text-[oklch(0.45_0.1_170)]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-lg">التوثيق والدعم</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {[
                    { text: "دليل المستخدم (عربي)", icon: BookOpen },
                    { text: "جلسة تدريب ساعتان", icon: Users },
                    { text: "دعم فني 30 يوم", icon: Headphones },
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-foreground/80"
                    >
                      <div className="w-5 h-5 rounded-full bg-[oklch(0.5_0.12_175/0.1)] flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-3.5 h-3.5 text-[oklch(0.45_0.1_170)]" />
                      </div>
                      <span className="text-sm">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Tech Stack */}
          <Card className="bg-gradient-to-br from-[oklch(0.18_0.04_155)] via-[oklch(0.16_0.035_160)] to-[oklch(0.14_0.03_155)] text-[oklch(0.85_0.02_155)] border-[oklch(0.72_0.14_75/0.2)] overflow-hidden animate-fade-up delay-400">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            <CardHeader className="relative">
              <div className="flex items-center gap-3">
                <div className="icon-box-lg bg-gradient-to-br from-[oklch(0.42_0.12_155/0.3)] to-[oklch(0.72_0.14_75/0.2)] text-[oklch(0.72_0.14_75)]">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-white">
                    التقنيات المستخدمة
                  </CardTitle>
                  <CardDescription className="text-[oklch(0.7_0.04_155)]">
                    T3 Stack - Modern Full-Stack
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 grid-ltr">
                {[
                  { name: "Next.js 16", gradient: "from-white/10 to-white/5" },
                  {
                    name: "tRPC",
                    gradient:
                      "from-[oklch(0.5_0.12_200/0.2)] to-[oklch(0.45_0.1_190/0.1)]",
                  },
                  {
                    name: "Drizzle ORM",
                    gradient:
                      "from-[oklch(0.5_0.12_155/0.2)] to-[oklch(0.45_0.1_160/0.1)]",
                  },
                  {
                    name: "PostgreSQL",
                    gradient:
                      "from-[oklch(0.5_0.12_200/0.2)] to-[oklch(0.45_0.1_195/0.1)]",
                  },
                  {
                    name: "Tailwind v4",
                    gradient:
                      "from-[oklch(0.55_0.12_185/0.2)] to-[oklch(0.5_0.1_180/0.1)]",
                  },
                  {
                    name: "React Native",
                    gradient:
                      "from-[oklch(0.55_0.12_200/0.2)] to-[oklch(0.5_0.1_195/0.1)]",
                  },
                  {
                    name: "Expo",
                    gradient:
                      "from-[oklch(0.55_0.14_290/0.2)] to-[oklch(0.5_0.12_285/0.1)]",
                  },
                  {
                    name: "TypeScript",
                    gradient:
                      "from-[oklch(0.5_0.12_210/0.2)] to-[oklch(0.45_0.1_205/0.1)]",
                  },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className={`bg-gradient-to-br ${tech.gradient} backdrop-blur-sm p-4 rounded-xl text-center border border-[oklch(0.72_0.14_75/0.15)] hover:border-[oklch(0.72_0.14_75/0.3)] transition-all hover:scale-105 cursor-default`}
                  >
                    <span className="text-sm font-mono font-medium text-white/90">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Islamic Decorative Divider */}
          <ArabesqueBorder />

          {/* Footer */}
          <footer className="text-center space-y-4 pt-8 pb-4">
            <Separator className="opacity-30 bg-[oklch(0.72_0.14_75/0.4)]" />

            {/* Islamic Footer Decoration */}
            <div className="flex items-center justify-center gap-3 py-2">
              <IslamicStar className="w-3 h-3 text-[oklch(0.72_0.14_75)] opacity-50" />
              <IslamicCrescent className="w-4 h-4 text-[oklch(0.42_0.12_155)] opacity-60" />
              <IslamicStar className="w-3 h-3 text-[oklch(0.72_0.14_75)] opacity-50" />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>صالح حتى: 5 يناير 2026</span>
              <span className="hidden sm:inline">•</span>
              <span>نسخة المستند: 1.0</span>
            </div>
            <p className="text-xs text-muted-foreground/60">
              جميع الأسعار قابلة للتفاوض • للاستفسارات التقنية يرجى التواصل
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
