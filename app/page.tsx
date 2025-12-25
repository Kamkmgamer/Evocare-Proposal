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
        </div>
      </section>

      {/* Cost Estimate Placeholder */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-8 border border-white/10">
            <Calculator className="w-6 h-6 mr-3 text-neutral-400" />
            <span className="text-neutral-300 tracking-wide">
              COST ESTIMATE
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif mb-8 bg-gradient-to-r from-neutral-200 to-neutral-600 bg-clip-text text-transparent">
            Investment Overview
          </h2>

          <div className="p-12 border border-white/10 bg-neutral-900/50 backdrop-blur-sm rounded-lg relative overflow-hidden group hover:border-white/20 transition-all">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <p className="text-2xl font-light text-neutral-300 mb-2">
              Total Estimated Project Value
            </p>
            <p
              className="text-5xl md:text-7xl font-bold tracking-tight text-white my-6 blur-sm select-none"
              title="Reveal pending"
            >
              $ XX,XXX
            </p>
            <p className="text-neutral-500 uppercase tracking-widest text-sm">
              Detailed Breakdown Available in Spec
            </p>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-neutral-600 text-sm">
        <p>&copy; 2025 Evocare Project Proposal. Confidential.</p>
      </footer>
    </main>
  );
}
