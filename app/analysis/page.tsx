export default function AnalysisPage() {
  return (
    <div className="min-h-screen bg-black text-neutral-300 font-sans selection:bg-white/20">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="mb-16 border-b border-white/10 pb-8 flex justify-between items-end">
          <div>
            <p className="text-sm font-mono text-neutral-500 mb-4">
              DOCUMENT ID: ANALYSIS-2025-001
            </p>
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
              Comparative Analysis
            </h1>
            <p className="text-xl text-neutral-400 font-light">
              Tech Stack Strategy & Evaluation
            </p>
          </div>
          <div className="text-right hidden md:block">
            <div className="text-sm text-neutral-500">PREPARED BY</div>
            <div className="text-white">Khalil AbdAlmageed</div>
            <div className="text-xs text-neutral-600 mt-1">
              Back-End Developer
            </div>
          </div>
        </div>

        <div className="space-y-16">
          {/* Introduction */}
          <section className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-neutral-300">
              This document compares two viable tech stack approaches for the
              Evocare custom website project: (1) A full-stack{" "}
              <span className="text-white font-medium">
                Next.js solution with tRPC
              </span>
              , and (2) A decoupled{" "}
              <span className="text-white font-medium">React + Laravel</span>{" "}
              setup. The comparison focuses on key differences, implementation
              timelines, complexity, and suitability for project requirements.
            </p>
          </section>

          {/* Comparison Table */}
          <section>
            <h2 className="text-2xl text-white font-medium mb-8 pl-4 border-l-2 border-white">
              Key Differences
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="p-4 text-xs font-bold tracking-wider text-neutral-500 uppercase w-1/4">
                      Aspect
                    </th>
                    <th className="p-4 text-xs font-bold tracking-wider text-white uppercase w-1/3 bg-white/5">
                      Next.js + tRPC (Full Stack)
                    </th>
                    <th className="p-4 text-xs font-bold tracking-wider text-neutral-300 uppercase w-1/3">
                      React + Laravel (Decoupled)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="p-4 text-sm font-medium text-neutral-400">
                      Architecture
                    </td>
                    <td className="p-4 text-sm bg-white/5">
                      Unified full-stack in TypeScript. Monorepo structure.
                      Type-safe end-to-end.
                    </td>
                    <td className="p-4 text-sm">
                      Decoupled. React for UI, Laravel for API. Separate
                      repositories.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm font-medium text-neutral-400">
                      Features
                    </td>
                    <td className="p-4 text-sm bg-white/5">
                      Real-time updates, SSG for SEO. Seamless WhatsApp
                      integration.
                    </td>
                    <td className="p-4 text-sm">
                      Heavy duty background queues. Robust built-in auth/admin
                      tools.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm font-medium text-neutral-400">
                      Scalability
                    </td>
                    <td className="p-4 text-sm bg-white/5">
                      Scales via Vercel Edge. Unified codebase is easier to
                      maintain.
                    </td>
                    <td className="p-4 text-sm">
                      Independent scaling. Better for very large distributed
                      teams.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm font-medium text-neutral-400">
                      Cost Focus
                    </td>
                    <td className="p-4 text-sm bg-white/5">
                      Lower dev costs (single language).
                    </td>
                    <td className="p-4 text-sm">
                      Higher dev costs (multi-language expertise required).
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Timeline Analysis */}
          <section>
            <h2 className="text-2xl text-white font-medium mb-8 pl-4 border-l-2 border-white">
              Timeline Implications
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-white/10 to-transparent p-6 rounded border border-white/10">
                <h3 className="text-xl font-serif text-white mb-2">
                  Next.js Timeline
                </h3>
                <div className="text-4xl font-bold text-white mb-2">
                  9-13{" "}
                  <span className="text-sm font-normal text-neutral-400">
                    WEEKS
                  </span>
                </div>
                <p className="text-sm text-neutral-400">
                  MVP possible in 7-9 weeks. 20-30% faster iterations due to
                  unified stack and no API context switching.
                </p>
              </div>

              <div className="bg-transparent p-6 rounded border border-white/10 opacity-70">
                <h3 className="text-xl font-serif text-neutral-300 mb-2">
                  Laravel Timeline
                </h3>
                <div className="text-4xl font-bold text-neutral-300 mb-2">
                  13-18{" "}
                  <span className="text-sm font-normal text-neutral-500">
                    WEEKS
                  </span>
                </div>
                <p className="text-sm text-neutral-400">
                  MVP in 10-12 weeks. Higher overhead due to API design and
                  dual-stack testing.
                </p>
              </div>
            </div>
          </section>

          {/* Recommendation */}
          <section className="bg-white text-black p-8 md:p-12 rounded-lg">
            <h2 className="text-2xl font-serif font-bold mb-4 uppercase tracking-wider">
              Final Recommendation
            </h2>
            <p className="text-lg leading-relaxed font-medium mb-6">
              Proceed with{" "}
              <span className="underline decoration-2 underline-offset-4">
                Approach 1: Full-Stack Next.js
              </span>
              .
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-sm border-t border-black/10 pt-6">
              <div>
                <strong className="block mb-2 font-bold">Why?</strong>
                <p className="leading-relaxed opacity-80">
                  It minimizes complexity, reduces implementation time by ~4
                  weeks, and aligns with the need for a modern, high-performance
                  luxury interface. Estimated cost saving: EGP 100k+.
                </p>
              </div>
              <div>
                <strong className="block mb-2 font-bold">Next Steps</strong>
                <ul className="list-disc pl-4 space-y-1 opacity-80">
                  <li>Confirm team JS/TS skills</li>
                  <li>Setup Monorepo</li>
                  <li>Begin UI Prototyping</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
