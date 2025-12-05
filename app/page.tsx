"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
  Sparkles,
  Star,
  ArrowRight,
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
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen premium-bg relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Morphing gradient orbs */}
        <div className="orb orb-1 -top-40 -right-40 animate-morph" />
        <div
          className="orb orb-2 -bottom-20 -left-20 animate-morph"
          style={{ animationDelay: "-4s" }}
        />
        <div
          className="orb orb-3 top-1/3 left-1/4 animate-morph"
          style={{ animationDelay: "-2s" }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.55_0.17_160/0.03)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.55_0.17_160/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Radial gradient spotlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 p-6 sm:p-8 md:p-12 pb-24">
        {/* Header */}
        <header className="max-w-5xl mx-auto mb-16 text-center">
          {/* Animated Badge */}
          <div className="animate-bounce-in delay-100 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/15 via-accent/15 to-primary/15 border border-primary/30 mb-8 shadow-emerald-lg animate-scale-pulse backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-bold text-primary tracking-wide">
              عرض سعر حصري
            </span>
            <Sparkles
              className="w-5 h-5 text-primary animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </div>

          {/* Main Title with staggered animation */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gradient-emerald leading-tight animate-fade-up delay-200">
            خطة تطوير نظام إدارة المحتوى
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4 animate-fade-up delay-300">
            مشروع تطوير لوحة تحكم شاملة وربطها بتطبيق القرآن الكريم
          </p>

          <p className="text-sm text-muted-foreground/70 animate-fade-up delay-400">
            Quran App CMS - Development Plan & Pricing
          </p>

          {/* Decorative line */}
          <div className="mt-10 flex items-center justify-center gap-4 animate-fade-up delay-500">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </header>

        <main className="max-w-5xl mx-auto space-y-12">
          {/* Overview Card */}
          <Card className="glass hover-lift animate-fade-up delay-100 border-primary/10">
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
              <Card className="glass card-3d shine-effect group animate-fade-up delay-300 border-transparent hover:border-primary/20 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="icon-box bg-gradient-to-br from-blue-500/10 to-blue-600/20 text-blue-600">
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
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Dashboard */}
              <Card className="glass card-3d shine-effect group animate-fade-up delay-400 border-transparent hover:border-primary/20 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="icon-box bg-gradient-to-br from-purple-500/10 to-purple-600/20 text-purple-600">
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
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Mobile Integration */}
              <Card className="glass card-3d shine-effect group animate-fade-up delay-500 border-transparent hover:border-primary/20 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="icon-box bg-gradient-to-br from-orange-500/10 to-orange-600/20 text-orange-600">
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
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Infrastructure */}
              <Card className="glass card-3d shine-effect group animate-fade-up delay-600 border-transparent hover:border-primary/20 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="icon-box bg-gradient-to-br from-teal-500/10 to-teal-600/20 text-teal-600">
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
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Pricing Section - Premium Redesign */}
          <section className="space-y-8 animate-fade-up delay-700">
            {/* Section Header */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
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
                <div className="h-px flex-1 bg-gradient-to-l from-primary/30 to-transparent" />
                <span className="text-sm font-semibold text-primary px-3 py-1 rounded-full bg-primary/10">
                  مراحل التطوير
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
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
                    color: "from-blue-500 to-blue-600",
                    iconBg: "bg-blue-500/10",
                    iconColor: "text-blue-500",
                  },
                  {
                    icon: LayoutDashboard,
                    title: "لوحة التحكم الإدارية",
                    subtitle: "Admin Dashboard",
                    egp: "16,800",
                    sar: "2,520",
                    usd: "$336",
                    color: "from-purple-500 to-purple-600",
                    iconBg: "bg-purple-500/10",
                    iconColor: "text-purple-500",
                  },
                  {
                    icon: Smartphone,
                    title: "دمج التطبيق المحمول",
                    subtitle: "Mobile App Integration",
                    egp: "12,800",
                    sar: "1,920",
                    usd: "$256",
                    color: "from-orange-500 to-orange-600",
                    iconBg: "bg-orange-500/10",
                    iconColor: "text-orange-500",
                  },
                  {
                    icon: Shield,
                    title: "الاختبار والنشر والتوثيق",
                    subtitle: "Testing, Deployment & Docs",
                    egp: "9,600",
                    sar: "1,440",
                    usd: "$192",
                    color: "from-teal-500 to-teal-600",
                    iconBg: "bg-teal-500/10",
                    iconColor: "text-teal-500",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group relative bg-white dark:bg-slate-900/50 rounded-2xl border border-border/50 p-5 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
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
                          <p className="font-bold text-xl text-primary">
                            {item.egp}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Development Subtotal */}
              <div className="relative bg-gradient-to-l from-primary/5 via-primary/10 to-accent/5 rounded-2xl border border-primary/20 p-5 mt-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-lg">
                        المجموع الفرعي (التطوير)
                      </h4>
                      <p className="text-sm text-primary/70">
                        Development Subtotal
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-left">
                    <div className="hidden sm:block text-center">
                      <p className="text-xs text-primary/60 mb-1">USD</p>
                      <p className="font-bold text-primary">$960</p>
                    </div>
                    <div className="hidden md:block text-center">
                      <p className="text-xs text-primary/60 mb-1">ر.س</p>
                      <p className="font-bold text-primary">7,200</p>
                    </div>
                    <div className="text-center min-w-[80px]">
                      <p className="text-xs text-primary/60 mb-1">ج.م</p>
                      <p className="font-black text-2xl text-primary">48,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Phase */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px flex-1 bg-gradient-to-l from-pink-500/30 to-transparent" />
                <span className="text-sm font-semibold text-pink-600 px-3 py-1 rounded-full bg-pink-500/10">
                  مرحلة التصميم
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-pink-500/30 to-transparent" />
              </div>

              <div className="group relative bg-white dark:bg-slate-900/50 rounded-2xl border border-border/50 p-5 hover:border-pink-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center transition-transform group-hover:scale-110">
                      <Palette className="w-6 h-6 text-pink-500" />
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
                      <p className="font-bold text-xl text-pink-500">10,150</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grand Total */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 p-1 shadow-2xl shadow-emerald-500/30 animate-pulse-glow">
              {/* Animated gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-transparent to-cyan-400/20 animate-gradient" />

              {/* Grid pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem]" />

              {/* Sparkle particles */}
              <div className="absolute top-4 right-10 w-2 h-2 bg-white rounded-full animate-ping opacity-75" />
              <div
                className="absolute bottom-6 left-16 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping opacity-75"
                style={{ animationDelay: "0.5s" }}
              />
              <div
                className="absolute top-1/2 left-8 w-1 h-1 bg-white rounded-full animate-ping opacity-50"
                style={{ animationDelay: "1s" }}
              />

              <div className="relative bg-gradient-to-br from-emerald-600/90 via-teal-600/90 to-cyan-600/90 rounded-[22px] p-6 md:p-8 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4 text-center md:text-right">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center animate-float">
                      <Star className="w-8 h-8 text-yellow-300 drop-shadow-[0_0_10px_rgba(253,224,71,0.5)]" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-white drop-shadow-lg">
                        المجموع الكلي
                      </h3>
                      <p className="text-emerald-100">
                        Grand Total - Full Package
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8 md:gap-12">
                    <div className="text-center">
                      <p className="text-sm text-emerald-200 mb-1">USD</p>
                      <p className="text-2xl md:text-3xl font-black text-white drop-shadow-lg">
                        $1,163
                      </p>
                    </div>
                    <div className="hidden sm:block text-center">
                      <p className="text-sm text-emerald-200 mb-1">ر.س</p>
                      <p className="text-2xl md:text-3xl font-black text-white drop-shadow-lg">
                        8,724
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-emerald-200 mb-1">ج.م</p>
                      <p className="text-3xl md:text-5xl font-black text-white drop-shadow-lg animate-scale-pulse">
                        58,150
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Infrastructure Note */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-l from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 border border-amber-200/50 dark:border-amber-800/30 p-5">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 to-yellow-500" />
              <div className="flex items-start gap-4 pr-2">
                <div className="w-10 h-10 rounded-xl bg-amber-400/20 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h5 className="font-bold text-amber-800 dark:text-amber-200 mb-1">
                    خيارات البنية التحتية (شهرياً)
                  </h5>
                  <p className="text-sm text-amber-700/90 dark:text-amber-300/80 leading-relaxed">
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
            <Card className="relative overflow-hidden card-3d shine-effect animate-fade-up delay-800 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-l from-primary to-accent" />
              <CardHeader>
                <Badge className="w-fit bg-gradient-to-l from-primary to-accent text-primary-foreground border-0 mb-2">
                  <Star className="w-3 h-3 ml-1" />
                  الخيار الموصى به
                </Badge>
                <CardTitle className="text-xl">الباقة الكاملة</CardTitle>
                <CardDescription>Full Package</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-gradient-emerald">
                    58,150
                  </span>
                  <span className="text-lg font-bold text-primary/70">ج.م</span>
                </div>
                <p className="text-muted-foreground">
                  تشمل التطوير الكامل + تصاميم Figma + النشر والتوثيق.
                </p>
                <div className="p-3 bg-white/60 dark:bg-white/10 rounded-lg border border-primary/10">
                  <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    الدفع: 50% مقدماً، 50% عند الاستلام
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Timeline */}
          <Card className="glass overflow-hidden animate-fade-up delay-1000">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="icon-box-lg bg-gradient-to-br from-indigo-500/10 to-indigo-600/20 text-indigo-600">
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
                    colorClass: "icon-pink",
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
                    <div className="bg-white/50 dark:bg-white/5 rounded-xl p-4 border border-border/50 hover:border-primary/20 transition-all hover:shadow-emerald">
                      <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                        <div className="flex items-center gap-3">
                          <item.icon className={`w-5 h-5 ${item.colorClass}`} />
                          <h4 className="font-bold text-foreground">
                            {item.title}
                          </h4>
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 text-primary border-0"
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

              <Separator className="my-6" />

              <div className="text-center p-4 bg-gradient-to-l from-primary/5 to-accent/5 rounded-xl border border-primary/10">
                <p className="font-bold text-foreground flex items-center justify-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  الإجمالي التقديري: 6 أسابيع
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Deliverables */}
          <section className="grid md:grid-cols-3 gap-6">
            {/* Code Deliverables */}
            <Card className="glass card-3d shine-effect animate-fade-up delay-100">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="icon-box bg-gradient-to-br from-blue-500/10 to-blue-600/20 text-blue-600">
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
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Design Deliverables */}
            <Card className="glass card-3d shine-effect animate-fade-up delay-200">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="icon-box bg-gradient-to-br from-pink-500/10 to-pink-600/20 text-pink-600">
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
                      <div className="w-5 h-5 rounded-full bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-pink-500" />
                      </div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Documentation & Support */}
            <Card className="glass card-3d shine-effect animate-fade-up delay-300">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="icon-box bg-gradient-to-br from-teal-500/10 to-teal-600/20 text-teal-600">
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
                      <div className="w-5 h-5 rounded-full bg-teal-500/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-3.5 h-3.5 text-teal-500" />
                      </div>
                      <span className="text-sm">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Tech Stack */}
          <Card className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 border-slate-700/50 overflow-hidden animate-fade-up delay-400">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            <CardHeader className="relative">
              <div className="flex items-center gap-3">
                <div className="icon-box-lg bg-gradient-to-br from-indigo-500/20 to-purple-600/30 text-indigo-400">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-white">
                    التقنيات المستخدمة
                  </CardTitle>
                  <CardDescription className="text-slate-400">
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
                    gradient: "from-blue-500/20 to-blue-600/10",
                  },
                  {
                    name: "Drizzle ORM",
                    gradient: "from-green-500/20 to-green-600/10",
                  },
                  {
                    name: "PostgreSQL",
                    gradient: "from-blue-400/20 to-blue-500/10",
                  },
                  {
                    name: "Tailwind v4",
                    gradient: "from-cyan-500/20 to-cyan-600/10",
                  },
                  {
                    name: "React Native",
                    gradient: "from-sky-500/20 to-sky-600/10",
                  },
                  {
                    name: "Expo",
                    gradient: "from-purple-500/20 to-purple-600/10",
                  },
                  {
                    name: "TypeScript",
                    gradient: "from-blue-600/20 to-blue-700/10",
                  },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className={`bg-gradient-to-br ${tech.gradient} backdrop-blur-sm p-4 rounded-xl text-center border border-white/10 hover:border-white/20 transition-all hover:scale-105 cursor-default`}
                  >
                    <span className="text-sm font-mono font-medium text-white/90">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Footer */}
          <footer className="text-center space-y-4 pt-8 pb-4">
            <Separator className="opacity-50" />
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
