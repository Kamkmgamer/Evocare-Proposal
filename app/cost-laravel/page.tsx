"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Users, Layers, AlertTriangle } from "lucide-react";

export default function CostLaravelPage() {
  const components = [
    {
      name: "UI/UX Design",
      description: "Wireframing, mockups for React pages.",
      hours: "120–180",
      cost: "45,000–67,500",
      assignee: "Junior 1",
      note: "Junior 1 leads.",
    },
    {
      name: "Frontend Dev",
      description: "React app, configurator UI, API consumption.",
      hours: "350–450",
      cost: "131,250–168,750",
      assignee: "Junior 2",
      note: "More hours due to mocking.",
    },
    {
      name: "Backend Dev",
      description: "Laravel APIs, Eloquent DB, CRM/quotation engine.",
      hours: "250–300",
      cost: "93,750–112,500",
      assignee: "Khalil (Lead)",
      note: "Primary responsibility.",
    },
    {
      name: "Integrations & Optimization",
      description: "WhatsApp/Paymob via queues, React hooks.",
      hours: "150–200",
      cost: "56,250–75,000",
      assignee: "Team",
      note: "Team effort.",
    },
    {
      name: "QA/Testing/Launch",
      description: "Cross-stack tests, deployment (AWS + Netlify).",
      hours: "100–150",
      cost: "37,500–56,250",
      assignee: "Junior 3",
      note: "Junior 3 handles.",
    },
    {
      name: "Miscellaneous",
      description: "Management (lead role), contingencies, hosting.",
      hours: "—",
      cost: "5,000–21,250",
      assignee: "Lead",
      note: "10% buffer.",
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
      note: "Analysis phase",
    },
    {
      phase: "2",
      title: "UI/UX Final Design",
      duration: "1–2 weeks",
      lead: "Junior 1",
      note: "Finalize designs",
    },
    {
      phase: "3",
      title: "Frontend Development",
      duration: "3–4 weeks",
      lead: "Junior 2",
      note: "React build",
    },
    {
      phase: "4-5",
      title: "Backend Development",
      duration: "3–4 weeks",
      lead: "Khalil (Lead)",
      note: "Laravel APIs",
    },
    {
      phase: "6",
      title: "Integration & Optimization",
      duration: "2–3 weeks",
      lead: "Team",
      note: "Connect stacks",
    },
    {
      phase: "7",
      title: "QA, Testing & Launch",
      duration: "2–3 weeks",
      lead: "Junior 3",
      note: "Testing phase",
    },
  ];

  const shares = [
    { role: "Lead (Khalil Abdalmageed)", percentage: 40, amount: "174,000" },
    { role: "Junior 1 (Design)", percentage: 20, amount: "87,000" },
    { role: "Junior 2 (Front-End)", percentage: 25, amount: "108,750" },
    { role: "Junior 3 (QA/Integration)", percentage: 15, amount: "65,250" },
  ];

  return (
    <div className="min-h-screen bg-[#080810] text-neutral-300 font-sans selection:bg-amber-500/30">
      {/* Background pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Gradient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[150px]" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm mb-6">
            <Layers className="w-4 h-4" />
            ALTERNATIVE APPROACH
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            Decoupled Architecture
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              React + Laravel
            </span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl font-light">
            Separate frontend and backend stacks. Traditional enterprise
            architecture with maximum flexibility and independent scaling.
          </p>
        </header>

        {/* Price Hero */}
        <section className="mb-24">
          <div className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 via-transparent to-orange-500/5 p-12">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32">
              <div className="absolute top-4 right-4 w-full h-full border-t-2 border-r-2 border-amber-500/30" />
            </div>
            <div className="absolute bottom-0 left-0 w-32 h-32">
              <div className="absolute bottom-4 left-4 w-full h-full border-b-2 border-l-2 border-amber-500/30" />
            </div>

            <div className="relative">
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-4">
                Total Estimated Investment
              </p>
              <div className="flex items-baseline gap-4 mb-2 flex-wrap">
                <span className="text-5xl md:text-7xl font-bold text-white">
                  <s className="text-neutral-500">EGP 400K – 500K</s> EGP 385K – 485K
                </span>
              </div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-sm font-bold rounded-full">
                  SAVE 15K
                </span>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-neutral-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>
                    <strong className="text-white">970–1,280</strong> hours
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-amber-400" />
                  <span>
                    <strong className="text-white">4</strong> team members
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-400" />
                  <span>
                    <strong className="text-white">12–18</strong> weeks
                  </span>
                </div>
              </div>

              {/* Warning badge */}
              <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-lg text-orange-400 text-sm">
                <AlertTriangle className="w-4 h-4" />
                Slightly higher cost due to separation overheads
              </div>
            </div>
          </div>
        </section>

        {/* Cost Breakdown */}
        <section className="mb-24">
          <h2 className="text-3xl font-serif text-white mb-8">
            Detailed Breakdown
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-xs uppercase tracking-wider text-neutral-500">
                    Component
                  </th>
                  <th className="text-center py-4 px-4 text-xs uppercase tracking-wider text-neutral-500">
                    Hours
                  </th>
                  <th className="text-center py-4 px-4 text-xs uppercase tracking-wider text-neutral-500">
                    Cost (EGP)
                  </th>
                  <th className="text-right py-4 px-4 text-xs uppercase tracking-wider text-neutral-500">
                    Assignee
                  </th>
                </tr>
              </thead>
              <tbody>
                {components.map((item, i) => (
                  <tr
                    key={i}
                    className="group border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                  >
                    <td className="py-5 px-4">
                      <div className="font-medium text-white group-hover:text-amber-400 transition-colors">
                        {item.name}
                      </div>
                      <div className="text-sm text-neutral-500 mt-1">
                        {item.description}
                      </div>
                    </td>
                    <td className="py-5 px-4 text-center font-mono text-neutral-300">
                      {item.hours}
                    </td>
                    <td className="py-5 px-4 text-center">
                      <span className="font-mono font-bold text-amber-400">
                        {item.cost}
                      </span>
                    </td>
                    <td className="py-5 px-4 text-right">
                      <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-neutral-400">
                        {item.assignee}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-amber-500/10 border border-amber-500/20">
                  <td className="py-5 px-4 font-bold text-white text-lg">
                    Total Estimate
                  </td>
                  <td className="py-5 px-4 text-center font-mono text-white">
                    970–1,280
                  </td>
                  <td className="py-5 px-4 text-center">
                    <span className="text-2xl font-bold text-amber-400 font-mono">
                      <s className="text-amber-400/50">400,000–500,000</s> 385,000–485,000
                    </span>
                  </td>
                  <td className="py-5 px-4"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        {/* Payment Terms */}
        <section className="mb-24">
          <h2 className="text-3xl font-serif text-white mb-8">Payment Terms</h2>
          <div className="relative">
            <div className="relative grid grid-cols-2 gap-8 max-w-3xl mx-auto">
              {paymentTerms.map((term, i) => (
                <div key={i} className="text-center">
                  <div className="w-6 h-6 mx-auto bg-amber-500 rounded-full border-4 border-[#080810] mb-6 relative z-10" />
                  <div className="p-8 bg-white/[0.02] border border-white/10 rounded-xl">
                    <div className="text-5xl font-bold text-white mb-2">
                      {term.pct}
                    </div>
                    <div className="text-base text-neutral-400 uppercase tracking-wider">
                      {term.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="mb-24">
          <h2 className="text-3xl font-serif text-white mb-4">
            Project Roadmap
          </h2>
          <p className="text-neutral-400 mb-8">
            Extended timeline:{" "}
            <strong className="text-white">12–18 weeks total</strong> (MVP by
            week 10)
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {roadmap.map((phase, i) => (
              <div
                key={i}
                className="relative p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-amber-500/30 hover:bg-amber-500/5 transition-all group"
              >
                {/* Phase number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-amber-500/20">
                  {phase.phase}
                </div>

                <div className="pt-2">
                  <div className="text-xs text-amber-400 mb-2">
                    {phase.duration}
                  </div>
                  <h3 className="text-lg text-white font-medium mb-3 group-hover:text-amber-400 transition-colors">
                    {phase.title}
                  </h3>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-neutral-500">Lead:</span>
                    <span className="text-neutral-300">{phase.lead}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Risk callout */}
          <div className="mt-8 p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-start gap-4">
            <AlertTriangle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-orange-400 font-medium mb-1">
                Potential Risk Factor
              </p>
              <p className="text-sm text-neutral-400">
                Integration delays between React and Laravel may extend
                timeline. Buffer time included.
              </p>
            </div>
          </div>
        </section>

        {/* Team Shares */}
        <section className="mb-24">
          <h2 className="text-3xl font-serif text-white mb-8">
            Project Shares
          </h2>
          <p className="text-neutral-400 mb-8">
            Based on EGP 435,000 mid-estimate
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {shares.map((share, i) => (
              <div key={i} className="relative group">
                {/* Percentage ring */}
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke="rgba(255,255,255,0.05)"
                      strokeWidth="8"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${share.percentage * 3.52} 352`}
                      className="transition-all duration-700"
                    />
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#ea580c" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {share.percentage}%
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-xl font-mono text-amber-400 mb-1">
                    EGP {share.amount}
                  </p>
                  <p className="text-sm text-neutral-400">{share.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Note */}
        <section className="mb-24">
          <div className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent">
            <h3 className="text-2xl font-serif text-white mb-4">
              Approach Considerations
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-amber-400 font-medium mb-3">Advantages</h4>
                <ul className="space-y-2 text-sm text-neutral-400">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">•</span>
                    Independent frontend and backend teams
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">•</span>
                    Laravel&apos;s robust ecosystem for complex business logic
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">•</span>
                    Well-established enterprise patterns
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 mt-1">•</span>
                    Independent scaling of frontend/backend
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-orange-400 font-medium mb-3">Trade-offs</h4>
                <ul className="space-y-2 text-sm text-neutral-400">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    Higher overhead from separate codebases
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    More complex deployment and DevOps
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    API contract management required
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    Increased cost (~EGP 50K higher)
                  </li>
                </ul>
              </div>
            </div>
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
