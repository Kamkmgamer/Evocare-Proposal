"use client";

import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Globe,
  Layout,
  Database,
  MessageCircle,
  CreditCard,
  Server,
  Shield,
  Smartphone,
} from "lucide-react";

export default function CostsPage() {
  const features = [
    {
      category: "1. Basic Website Pages",
      icon: Globe,
      items: [
        {
          name: "Homepage",
          price: "18,000",
          description: "Car highlights, Offers, CTA, WhatsApp buttons",
        },
        {
          name: "Cars Listing Page",
          price: "14,000",
          description: "Filters by model/price, Connected to CMS",
        },
        {
          name: "Car Details Page",
          price: "16,000",
          description: "Specs, Gallery, Configurator entry",
        },
        {
          name: "About Us Page",
          price: "6,000",
          description: "Company story, Branches, Trust elements",
        },
        {
          name: "Contact Us Page",
          price: "6,000",
          description: "Form, Map, WhatsApp click-to-chat",
        },
        {
          name: "Legal Pages",
          price: "4,000",
          description: "Privacy policy, Terms",
        },
      ],
      subtotal: "64,000",
    },
    {
      category: "2. Car Configuration Page",
      icon: Layout,
      note: "Client chooses one visualization option",
      items: [
        {
          name: "Configuration Engine",
          price: "85,000",
          description: "Logic/UI, Multiple options, Live price, Save/Send",
        },
        {
          name: "Option A: Image Based",
          price: "35,000",
          description: "High quality images, switchable layers",
        },
        {
          name: "Option B: Real-time 3D",
          price: "70,000",
          description: "Rotate, Zoom, Real-time materials (Premium)",
        },
      ],
    },
    {
      category: "3. CMS and Admin Panel",
      icon: Database,
      items: [
        {
          name: "Car Management",
          price: "18,000",
          description: "Add cars, Edit specs, Pricing, Availability",
        },
        {
          name: "Options Management",
          price: "16,000",
          description: "Colors, Wheels, Interiors, Pricing rules",
        },
        {
          name: "Orders Dashboard",
          price: "14,000",
          description: "View requests/configs, Export data",
        },
      ],
      subtotal: "48,000",
    },
    {
      category: "4. Integrations",
      icon: MessageCircle,
      items: [
        {
          name: "WhatsApp Automation",
          price: "12,000",
          description: "Send order details, configs, & price",
        },
        {
          name: "Payment Gateway Integration",
          price: "14,000",
          description: "Reservation/Down payment, Secure checkout",
        },
      ],
    },
    {
      category: "5. Technical Core",
      icon: Server,
      items: [
        {
          name: "Back End System",
          price: "45,000",
          description: "APIs, Security, Validation, Performance",
        },
        {
          name: "Deployment & Infrastructure",
          price: "8,000",
          description: "Server setup, SSL, Env configuration",
        },
        {
          name: "Testing & Launch",
          price: "10,000",
          description: "Cross-device testing, Bug fixing",
        },
      ],
    },
  ];

  const recurring = [
    {
      name: "WhatsApp Business API",
      cost: "1,000 - 2,500 EGP / mo",
      note: "Paid to Meta",
    },
    {
      name: "Hosting & Cloud",
      cost: "1,500 - 3,000 EGP / mo",
      note: "Server, Storage, Backups",
    },
    {
      name: "Maintenance (Optional)",
      cost: "4,000 EGP / mo",
      note: "Bug fixes, Updates, Monitoring",
    },
  ];

  const paymentTerms = [
    { pct: "50%", label: "Upfront" },
    { pct: "50%", label: "Final Delivery" },
  ];

  const deliveryTimes = [
    { type: "Normal", mvp: "30 days", full: "45 days", note: "Standard pace" },
    {
      type: "Urgent",
      mvp: "21 days",
      full: "45 days",
      note: "Requires fast approvals",
    },
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
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16">
        {/* Navigation */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Header */}
        <header className="mb-20 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
            Commercial Proposal
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mt-2">
              Feature Based Assessment
            </span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light">
            Transparent, modular pricing tailored for the Egyptian market.
            Breakdown by features and pages for maximum control.
          </p>
        </header>

        {/* Total Cost Scenarios */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {/* Scenario 1 */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-8 group hover:border-amber-500/30 transition-colors">
            <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h3 className="text-2xl font-serif text-white mb-2">Scenario 1</h3>
            <p className="text-amber-400 font-medium mb-6">
              Image Based Configurator
            </p>
            <ul className="space-y-2 text-sm text-neutral-400 mb-8">
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Website
                Pages & CMS
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Backend &
                Automation
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Image
                Layer Switching
              </li>
            </ul>
            <div className="mt-auto">
              <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">
                Total Estimated
              </p>
              <p className="text-4xl font-bold text-white">
                255,000{" "}
                <span className="text-lg font-normal text-neutral-500">
                  EGP
                </span>
              </p>
            </div>
          </div>

          {/* Scenario 2 */}
          <div className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-transparent p-8">
            <div className="absolute top-0 right-0 p-3 bg-amber-500 text-[#080810] text-xs font-bold rounded-bl-xl">
              PREMIUM EXPERIENCE
            </div>
            <h3 className="text-2xl font-serif text-white mb-2">Scenario 2</h3>
            <p className="text-amber-400 font-medium mb-6">
              Full Real-time 3D Configurator
            </p>
            <ul className="space-y-2 text-sm text-neutral-400 mb-8">
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> All
                Scenario 1 Features
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />{" "}
                Interactive 3D Model
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Real-time
                Material Changes
              </li>
            </ul>
            <div className="mt-auto">
              <p className="text-xs uppercase tracking-wider text-neutral-500 mb-1">
                Total Estimated
              </p>
              <p className="text-4xl font-bold text-white">
                290,000{" "}
                <span className="text-lg font-normal text-neutral-500">
                  EGP
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Breakdown */}
        <section className="mb-24 space-y-12">
          <h2 className="text-3xl font-serif text-white text-center mb-12">
            Detailed Cost Breakdown
          </h2>

          {features.map((feature, idx) => (
            <div
              key={idx}
              className="border border-white/10 rounded-xl overflow-hidden bg-[#0F0F16]"
            >
              <div className="bg-white/[0.03] p-6 border-b border-white/5 flex items-center gap-4">
                <div className="p-3 bg-amber-500/10 rounded-lg text-amber-400">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {feature.category}
                  </h3>
                  {feature.note && (
                    <p className="text-sm text-neutral-400 mt-1">
                      {feature.note}
                    </p>
                  )}
                </div>
                {feature.subtotal && (
                  <div className="ml-auto text-right">
                    <span className="text-xs text-neutral-500 block uppercase tracking-wider">
                      Subtotal
                    </span>
                    <span className="text-lg font-mono text-amber-400">
                      {feature.subtotal} EGP
                    </span>
                  </div>
                )}
              </div>
              <div className="divide-y divide-white/5">
                {feature.items.map((item, i) => (
                  <div
                    key={i}
                    className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                  >
                    <div>
                      <h4 className="text-white font-medium mb-1">
                        {item.name}
                      </h4>
                      <p className="text-sm text-neutral-500">
                        {item.description}
                      </p>
                    </div>
                    <div className="text-right whitespace-nowrap">
                      <span className="font-mono text-white text-lg">
                        {item.price}
                      </span>
                      <span className="text-xs text-neutral-500 ml-2">EGP</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Recurring Costs */}
        <section className="mb-24">
          <h2 className="text-2xl font-serif text-white mb-8 border-l-4 border-amber-500 pl-4">
            Recurring & External Costs
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recurring.map((item, i) => (
              <div
                key={i}
                className="p-6 border border-white/10 rounded-xl bg-white/[0.02]"
              >
                <h4 className="text-white font-medium mb-2">{item.name}</h4>
                <p className="text-amber-400 font-mono text-lg mb-2">
                  {item.cost}
                </p>
                <p className="text-sm text-neutral-500">{item.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Terms & Delivery */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          {/* Payment Terms */}
          <section>
            <h2 className="text-2xl font-serif text-white mb-8 border-l-4 border-amber-500 pl-4">
              Payment Terms
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {paymentTerms.map((term, i) => (
                <div
                  key={i}
                  className="text-center p-6 border border-white/10 rounded-xl bg-white/[0.02]"
                >
                  <div className="text-4xl font-bold text-white mb-2">
                    {term.pct}
                  </div>
                  <div className="text-sm text-neutral-400 uppercase tracking-wider">
                    {term.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Delivery Time */}
          <section>
            <h2 className="text-2xl font-serif text-white mb-8 border-l-4 border-amber-500 pl-4">
              Delivery Time
            </h2>
            <div className="space-y-4">
              {deliveryTimes.map((time, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-6 border border-white/10 rounded-xl bg-white/[0.02]"
                >
                  <div>
                    <h4 className="text-lg text-white font-bold">
                      {time.type}
                    </h4>
                    <p className="text-sm text-neutral-500">{time.note}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-amber-400 font-mono">
                      {time.mvp}{" "}
                      <span className="text-neutral-500 text-xs">MVP</span>
                    </div>
                    <div className="text-neutral-300 font-mono">
                      {time.full}{" "}
                      <span className="text-neutral-500 text-xs">FULL</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="pt-12 border-t border-white/10 text-center">
          <p className="text-neutral-500 text-sm mb-4">
            IMPORTANT NOTE: 3D models are not included in the cost unless
            provided by the client.
          </p>
          <p className="text-neutral-600 text-xs">
            Prepared by{" "}
            <strong className="text-white">Khalil Abdalmageed</strong>
          </p>
        </footer>
      </div>
    </div>
  );
}
