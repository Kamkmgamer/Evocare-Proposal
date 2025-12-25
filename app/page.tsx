"use client";

import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  FileText,
  BarChart3,
  Layers,
  Calculator,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/evocare-hero.png"
            alt="Evocare Luxury Concept Car"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-8xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent transform transition-all duration-700 hover:scale-105 cursor-default">
            EVOCARE
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 tracking-wide font-light">
            THE ART OF AUTOMOTIVE PERFECTION
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/spec"
              className="group relative px-8 py-4 bg-white text-black font-medium tracking-wide overflow-hidden hover:bg-neutral-200 transition-colors"
            >
              <span className="relative z-10 flex items-center gap-2">
                VIEW SPECIFICATION{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in delay-1000"
          style={{ animationFillMode: "forwards" }}
        >
          <span className="text-[10px] tracking-[0.3em] font-light text-neutral-500 uppercase">
            Explore
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-500 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-down"></div>
          </div>
        </div>
      </section>

      {/* Documents Navigation */}
      <section className="py-24 bg-neutral-900 border-t border-white/5">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif mb-16 text-center">
            PROJECT DOCUMENTATION
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/spec" className="group">
              <div className="h-full p-8 bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-500 hover:bg-white/10 flex flex-col justify-between min-h-[300px]">
                <div>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">
                    Project Specification
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Detailed comprehensive breakdown of the Evocare platform
                    requirements, objectives, and deliverables.
                  </p>
                </div>
                <div className="mt-8 flex items-center text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                  READ DOCUMENT <ChevronRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link href="/analysis" className="group">
              <div className="h-full p-8 bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-500 hover:bg-white/10 flex flex-col justify-between min-h-[300px]">
                <div>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">
                    Comparative Analysis
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    In-depth comparison of Next.js vs Laravel technical
                    approaches and their business impact.
                  </p>
                </div>
                <div className="mt-8 flex items-center text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                  READ DOCUMENT <ChevronRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link href="/stack" className="group">
              <div className="h-full p-8 bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-500 hover:bg-white/10 flex flex-col justify-between min-h-[300px]">
                <div>
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Layers className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">Tech Stack</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Final implementation recommendation and detailed breakdown
                    of the chosen technologies.
                  </p>
                </div>
                <div className="mt-8 flex items-center text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                  READ DOCUMENT <ChevronRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          </div>

          {/* Cost Estimates Section */}
          <h3 className="text-2xl font-serif mt-16 mb-8 text-center text-neutral-400">
            COST ESTIMATES
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/cost-monorepo" className="group">
              <div className="h-full p-8 bg-emerald-500/5 border border-emerald-500/20 hover:border-emerald-500/50 transition-all duration-500 hover:bg-emerald-500/10 flex flex-col justify-between min-h-[280px] relative overflow-hidden">
                <div className="absolute top-4 right-4 px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full">
                  RECOMMENDED
                </div>
                <div>
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Calculator className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-white">
                    Full-Stack Next.js
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    Monorepo solution with tRPC + PostgreSQL. Unified codebase
                    for optimal development speed.
                  </p>
                  <p className="text-2xl font-bold text-emerald-400">
                    EGP 335K – 435K
                  </p>
                </div>
                <div className="mt-6 flex items-center text-sm font-medium text-emerald-400/60 group-hover:text-emerald-400 transition-colors">
                  VIEW DETAILS <ChevronRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>

            <Link href="/cost-laravel" className="group">
              <div className="h-full p-8 bg-amber-500/5 border border-amber-500/20 hover:border-amber-500/50 transition-all duration-500 hover:bg-amber-500/10 flex flex-col justify-between min-h-[280px] relative overflow-hidden">
                <div className="absolute top-4 right-4 px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-bold rounded-full">
                  ALTERNATIVE
                </div>
                <div>
                  <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Calculator className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-medium mb-3 text-white">
                    React + Laravel
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    Decoupled architecture with separate frontend and backend
                    stacks for maximum flexibility.
                  </p>
                  <p className="text-2xl font-bold text-amber-400">
                    EGP 385K – 485K
                  </p>
                </div>
                <div className="mt-6 flex items-center text-sm font-medium text-amber-400/60 group-hover:text-amber-400 transition-colors">
                  VIEW DETAILS <ChevronRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-neutral-600 text-sm">
        <p>&copy; 2025 Evocare Project Proposal. Confidential.</p>
      </footer>
    </main>
  );
}
