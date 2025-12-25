export default function SpecPage() {
  return (
    <div className="min-h-screen bg-black text-neutral-300 font-sans selection:bg-white/20">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-16 border-b border-white/10 pb-8">
          <p className="text-sm font-mono text-neutral-500 mb-4">
            DOCUMENT ID: SPEC-2025-001
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Project Specification
          </h1>
          <p className="text-xl text-neutral-400 font-light">
            Comprehensive Functional & Technical Requirements
          </p>
        </div>

        <div className="prose prose-invert prose-neutral max-w-none space-y-12">
          <section>
            <h2 className="text-2xl text-white font-medium mb-4 flex items-center gap-3">
              <span className="text-white/20">01</span> Project Overview
            </h2>
            <div className="pl-10 border-l border-white/10">
              <p className="leading-relaxed mb-4">
                The aim of this project is to design and develop a fully
                custom-built website for <strong>Evocare</strong> with a bespoke
                backend system tailored specifically to the automotive detailing
                and enhancement industry.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-neutral-400">
                <li>
                  <strong className="text-white">Full control</strong> over
                  performance and functionality
                </li>
                <li>
                  <strong className="text-white">Zero dependency</strong> on
                  plugins or pre-built frameworks
                </li>
                <li>
                  <strong className="text-white">Seamless integration</strong>{" "}
                  with advanced configurators
                </li>
                <li>
                  A{" "}
                  <strong className="text-white">scalable architecture</strong>{" "}
                  ready for future expansions
                </li>
                <li>
                  A{" "}
                  <strong className="text-white">
                    secure and optimized environment
                  </strong>{" "}
                  for SEO and marketing
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-white font-medium mb-4 flex items-center gap-3">
              <span className="text-white/20">02</span> Core Objectives
            </h2>
            <div className="grid md:grid-cols-2 gap-6 pl-10">
              <div className="bg-white/5 p-6 rounded border border-white/5">
                <h3 className="text-white font-medium mb-2">
                  Frontend Experience
                </h3>
                <p className="text-sm">
                  Develop a fully custom-coded luxury website aligned with
                  Evocare’s brand, featuring advanced car configuration and
                  automated quotations.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded border border-white/5">
                <h3 className="text-white font-medium mb-2">Backend Power</h3>
                <p className="text-sm">
                  Provide a powerful admin dashboard with full SEO tools,
                  content publishing, and tracking of customer requests and
                  payment status.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-white font-medium mb-4 flex items-center gap-3">
              <span className="text-white/20">03</span> Custom Website Features
            </h2>
            <div className="pl-10 space-y-8">
              <div>
                <h3 className="text-xl text-white/90 mb-3">Customer Side</h3>
                <ul className="space-y-2 text-neutral-400">
                  <li>Premium UI/UX with luxury automotive design language</li>
                  <li>High-speed, mobile-first interface</li>
                  <li>“Configure My Car” experience</li>
                  <li>Auto-generated quotation & request submission flow</li>
                  <li>
                    WhatsApp + email integration for instant quote delivery
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-white/90 mb-3">
                  Service Categories
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Paint Protection Film (PPF)",
                    "Ceramic Coating",
                    "Window Tinting",
                    "Detailing Packages",
                    "Wrapping",
                    "Polishing",
                    "Interior protection",
                  ].map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 bg-white/10 text-xs uppercase tracking-wider text-white border border-white/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-white font-medium mb-4 flex items-center gap-3">
              <span className="text-white/20">04</span> Admin Dashboard
              (Backend)
            </h2>
            <div className="pl-10 border-l border-white/10 space-y-6">
              <div>
                <h4 className="text-white font-medium">
                  1. Content Publishing System
                </h4>
                <p className="text-sm text-neutral-400 mt-1">
                  Complete article/post publishing module with full SEO control
                  per article (Meta title, description, OG tags, Schema).
                </p>
              </div>
              <div>
                <h4 className="text-white font-medium">
                  2. Customer Order Tracking System
                </h4>
                <p className="text-sm text-neutral-400 mt-1">
                  CRM-style module to track inquiries, assign statuses (New, In
                  Process, Completed), and internal notes.
                </p>
              </div>
              <div>
                <h4 className="text-white font-medium">
                  3. Full Page SEO Control
                </h4>
                <p className="text-sm text-neutral-400 mt-1">
                  Editable meta titles, descriptions, Open Graph controls, and
                  automatic sitemap generation for every page.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl text-white font-medium mb-4 flex items-center gap-3">
              <span className="text-white/20">05</span> Technical Specifications
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pl-10">
              {[
                ["Tech Stack", "Next.js / Laravel"],
                ["Responsive", "Mobile, Tablet, Desktop"],
                ["Security", "HTTPS, Firewall, Rate Limit"],
                ["Performance", "Caching, Edge Optimization"],
              ].map(([label, val]) => (
                <div
                  key={label}
                  className="p-4 bg-white/5 border border-white/5"
                >
                  <div className="text-xs text-neutral-500 uppercase mb-1">
                    {label}
                  </div>
                  <div className="text-sm text-white">{val}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
