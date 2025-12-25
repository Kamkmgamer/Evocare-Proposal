export default function StackPage() {
  return (
    <div className="min-h-screen bg-black text-neutral-300 font-sans selection:bg-white/20">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="mb-16 border-b border-white/10 pb-8">
          <p className="text-sm font-mono text-neutral-500 mb-4">
            DOCUMENT ID: STACK-2025-001
          </p>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
            Technology Stack
          </h1>
          <p className="text-xl text-neutral-400 font-light">
            Implementation Breakdown & Tools
          </p>
        </div>

        <div className="space-y-12">
          <section className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
            <div className="p-6 bg-white/5 border-b border-white/10">
              <h2 className="text-2xl text-white font-medium">
                Selected Architecture
              </h2>
              <p className="text-sm text-neutral-400 mt-1">
                Full-Stack Next.js with tRPC + PostgreSQL
              </p>
            </div>

            <div className="p-6 grid gap-6">
              <div>
                <h3 className="text-white font-bold mb-2">Frontend Core</h3>
                <div className="flex flex-wrap gap-2">
                  {["Next.js 14", "React", "TypeScript", "TailwindCSS"].map(
                    (t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-black/50 border border-white/10 text-xs rounded text-neutral-300"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Backend & Data</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "tRPC (API)",
                    "Prisma ORM",
                    "PostgreSQL",
                    "NextAuth.js",
                  ].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-black/50 border border-white/10 text-xs rounded text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2">Infrastructure</h3>
                <div className="flex flex-wrap gap-2">
                  {["Vercel", "Neon (DB)", "Cloudflare (DNS)"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-black/50 border border-white/10 text-xs rounded text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-8">
            <h3 className="text-2xl font-serif text-white">
              Feature Implementation Details
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "2D Car Configurator",
                  desc: "React components in Next.js pages. Real-time pricing via tRPC. State management via Zustand or React Context.",
                  time: "1-2 Weeks",
                },
                {
                  title: "Quotation & CRM",
                  desc: "Custom admin dashboard protected by Middleware. Type-safe mutations for order creation and status tracking via Prisma.",
                  time: "2-3 Weeks",
                },
                {
                  title: "SEO Engine",
                  desc: "Utilizing Next.js Metadata API for dynamic per-page SEO. Detailed Schema.org markup injection.",
                  time: "1 Week",
                },
                {
                  title: "Integrations",
                  desc: "Node.js SDKs for Paymob (payments) and WhatsApp Business API. Webhook handlers for payment confirmation.",
                  time: "1 Week",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-6 border border-white/10 rounded hover:bg-white/5 transition-colors"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg text-white font-medium">
                      {item.title}
                    </h4>
                    <span className="text-xs bg-white text-black px-2 py-1 font-bold">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
