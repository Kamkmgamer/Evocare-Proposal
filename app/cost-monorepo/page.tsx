"use client";

import Link from "next/link";
import { ArrowLeft, Check, Clock, Users, Zap, Shield } from "lucide-react";

export default function CostMonoRepoPage() {
  const components = [
    {
      name: "UI/UX Design",
      description:
        "Wireframing, luxury mockups (Figma), configurator prototypes.",
      hours: "100–150",
      cost: "37,500–56,250",
      assignee: "Junior 1",
      note: "Leverages tools for speed.",
    },
    {
      name: "Frontend/Full-Stack Dev",
      description: "Next.js pages, tRPC integrations, 2D configurator UI.",
      hours: "300–400",
      cost: "112,500–150,000",
      assignee: "Junior 2",
      note: "With lead oversight.",
    },
    {
      name: "Backend Dev",
      description: "tRPC APIs, Prisma DB setup, quotation/CRM logic.",
      hours: "200–250",
      cost: "75,000–93,750",
      assignee: "Khalil (Lead)",
      note: "Primary responsibility.",
    },
    {
      name: "Integrations & Optimization",
      description: "WhatsApp API, Paymob, SEO metadata.",
      hours: "100–150",
      cost: "37,500–56,250",
      assignee: "Team",
      note: "Collaborative effort.",
    },
    {
      name: "QA/Testing/Launch",
      description: "End-to-end tests, bug fixes, deployment (Vercel).",
      hours: "80–120",
      cost: "30,000–45,000",
      assignee: "Junior 3",
      note: "With lead review.",
    },
    {
      name: "Miscellaneous",
      description: "Project management, contingencies, hosting/domain.",
      hours: "—",
      cost: "42,500–33,750",
      assignee: "Lead",
      note: "10% urgency premium.",
    },
  ];

  const paymentTerms = [
    { pct: "50%", label: "Upfront" },
    { pct: "50%", label: "Launch" },
  ];

  const roadmap = [
    {
      phase: "1",
      title: "UI/UX Research & Initial Design",
      duration: "1–2 weeks",
      lead: "Junior 1",
      deliverable: "Figma prototypes",
    },
    {
      phase: "2",
      title: "UI/UX Final Design",
      duration: "1–2 weeks",
      lead: "Junior 1",
      deliverable: "Client approval",
    },
    {
      phase: "3",
      title: "Frontend Development",
      duration: "2–3 weeks",
      lead: "Junior 2",
      deliverable: "Next.js structure",
    },
    {
      phase: "4-5",
      title: "Backend Development",
      duration: "2–3 weeks",
      lead: "Khalil (Lead)",
      deliverable: "API demo",
    },
    {
      phase: "6",
      title: "Integration & Optimization",
      duration: "1–2 weeks",
      lead: "Team",
      deliverable: "Full integration",
    },
    {
      phase: "7",
      title: "QA, Testing & Launch",
      duration: "1–2 weeks",
      lead: "Junior 3",
      deliverable: "Deployment & training",
    },
  ];

  const shares = [
    { role: "Lead (Khalil Abdalmageed)", percentage: 40, amount: "154,000" },
    { role: "Junior 1 (Design)", percentage: 20, amount: "77,000" },
    { role: "Junior 2 (Front-End/Dev)", percentage: 25, amount: "96,250" },
    { role: "Junior 3 (QA/Integration)", percentage: 15, amount: "57,750" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-300 font-sans selection:bg-emerald-500/30">
      {/* Gradient overlay */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Header */}
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm mb-6">
            <Zap className="w-4 h-4" />
            RECOMMENDED APPROACH
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            Full-Stack Next.js
            <span className="block text-emerald-400">Monorepo Solution</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl font-light">
            Unified codebase with tRPC + PostgreSQL. Optimized for speed, type
            safety, and seamless developer experience.
          </p>
        </header>

        {/* Price Hero */}
        <section className="mb-24">
          <div className="relative overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 p-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px]" />
            <div className="relative">
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-4">
                Total Estimated Investment
              </p>
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-5xl md:text-7xl font-bold text-white">
                  <s className="text-neutral-500">EGP 350K – 450K</s> EGP 335K – 435K
                </span>
              </div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-bold rounded-full">
                  SAVE 15K
                </span>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-neutral-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>
                    <strong className="text-white">780–1,070</strong> hours
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span>
                    <strong className="text-white">4</strong> team members
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>
                    <strong className="text-white">8–14</strong> weeks
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Breakdown */}
        <section className="mb-24">
          <h2 className="text-3xl font-serif text-white mb-8">
            Detailed Breakdown
          </h2>
          <div className="space-y-4">
            {components.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-6 grid md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5">
                    <h3 className="text-lg text-white font-medium mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-neutral-500">
                      {item.description}
                    </p>
                  </div>
                  <div className="md:col-span-2 text-center">
                    <p className="text-xs text-neutral-500 uppercase mb-1">
                      Hours
                    </p>
                    <p className="text-white font-mono">{item.hours}</p>
                  </div>
                  <div className="md:col-span-3 text-center">
                    <p className="text-xs text-neutral-500 uppercase mb-1">
                      Cost (EGP)
                    </p>
                    <p className="text-emerald-400 font-mono font-bold">
                      {item.cost}
                    </p>
                  </div>
                  <div className="md:col-span-2 text-right">
                    <span className="inline-block px-3 py-1 bg-white/5 rounded-full text-xs text-neutral-400">
                      {item.assignee}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Total Row */}
          <div className="mt-6 p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
            <div className="flex justify-between items-center">
              <span className="text-xl text-white font-medium">
                Total Estimate
              </span>
              <span className="text-2xl text-emerald-400 font-bold font-mono">
                <s className="text-emerald-400/50">EGP 350,000 – 450,000</s> EGP 335,000 – 435,000
              </span>
            </div>
          </div>
        </section>

        {/* Payment Terms */}
        <section className="mb-24">
          <h2 className="text-3xl font-serif text-white mb-8">Payment Terms</h2>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {paymentTerms.map((term, i) => (
              <div
                key={i}
                className="relative p-12 rounded-xl border border-white/10 bg-white/[0.02] text-center group hover:border-emerald-500/30 transition-all"
              >
                <div className="text-6xl font-bold text-white mb-4">
                  {term.pct}
                </div>
                <div className="text-lg text-neutral-400">{term.label}</div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-b-xl" />
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap */}
        <section className="mb-24">
          <h2 className="text-3xl font-serif text-white mb-8">
            Project Roadmap
          </h2>
          <p className="text-neutral-400 mb-8">
            Total: <strong className="text-white">8–14 weeks</strong> (MVP by
            week 8)
          </p>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-cyan-500 to-transparent" />
            <div className="space-y-6">
              {roadmap.map((phase, i) => (
                <div key={i} className="relative pl-20">
                  <div className="absolute left-6 top-4 w-5 h-5 rounded-full bg-[#0a0a0a] border-2 border-emerald-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-mono rounded">
                        Phase {phase.phase}
                      </span>
                      <span className="text-xs text-neutral-500">
                        {phase.duration}
                      </span>
                    </div>
                    <h3 className="text-xl text-white font-medium mb-2">
                      {phase.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
                      <span>
                        Lead:{" "}
                        <strong className="text-white">{phase.lead}</strong>
                      </span>
                      <span>
                        Deliverable:{" "}
                        <strong className="text-white">
                          {phase.deliverable}
                        </strong>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Shares */}
        <section className="mb-24">
          <h2 className="text-3xl font-serif text-white mb-8">
            Project Shares
          </h2>
          <p className="text-neutral-400 mb-8">
            Based on EGP 385,000 mid-estimate
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {shares.map((share, i) => (
              <div
                key={i}
                className="relative p-6 rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden group hover:border-emerald-500/30 transition-all"
              >
                <div
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-500/20 to-transparent transition-all"
                  style={{ height: `${share.percentage}%` }}
                />
                <div className="relative">
                  <div className="text-5xl font-bold text-white mb-2">
                    {share.percentage}%
                  </div>
                  <div className="text-lg text-emerald-400 font-mono mb-3">
                    EGP {share.amount}
                  </div>
                  <div className="text-sm text-neutral-400">{share.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-24">
          <h2 className="text-3xl font-serif text-white mb-8">
            Why This Approach?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Unified codebase reduces context-switching overhead",
              "Type-safe end-to-end with TypeScript + tRPC",
              "Faster development cycles with shared tooling",
              "Simplified deployment via Vercel",
              "Lower maintenance costs long-term",
              "Reduced integration complexity",
            ].map((benefit, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/5"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-emerald-400" />
                </div>
                <p className="text-neutral-300">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-white/10 text-center">
          <p className="text-neutral-500 text-sm">
            Prepared by{" "}
            <strong className="text-white">Khalil Abdalmageed</strong> •
            Back-End Developer & Team Lead
          </p>
          <p className="text-neutral-600 text-xs mt-2">December 25, 2025</p>
        </footer>
      </div>
    </div>
  );
}
