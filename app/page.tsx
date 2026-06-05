export default function Page() {
  const faqs = [
    {
      q: "How does the route optimizer work?",
      a: "It combines your historical sales data with real-time weather forecasts and local event schedules to score every potential stop, then builds the highest-revenue route for your day."
    },
    {
      q: "Do I need technical skills to use it?",
      a: "No. You enter your truck's home base, connect your sales history (CSV or POS export), and the dashboard handles everything else with clear map-based recommendations."
    },
    {
      q: "Can I cancel my subscription anytime?",
      a: "Yes. Cancel with one click from your account page — no contracts, no cancellation fees, and your data is exportable at any time."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Food Truck Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Optimize Your Food Truck Route for{" "}
          <span className="text-[#58a6ff]">Maximum Daily Profit</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Stop guessing where to park. We analyze weather, local events, and your sales history to recommend the exact spots and times that earn you the most — every single day.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Optimizing — $12/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. No contracts.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "📍", title: "Smart Location Scoring", body: "Every nearby stop is ranked by predicted revenue using foot traffic, event proximity, and weather impact." },
            { icon: "🌦️", title: "Weather-Aware Planning", body: "Bad weather tanks sales. We reroute you automatically when conditions shift so you never get caught off guard." },
            { icon: "📈", title: "Sales Pattern Learning", body: "The more you use it, the smarter it gets — learning your best customers, peak hours, and highest-margin items." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-16">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <p className="text-[#8b949e] text-sm mb-6">per month, billed monthly</p>
          <ul className="text-sm text-left space-y-2 mb-8">
            {[
              "Daily optimized route recommendations",
              "Live weather & event integration",
              "Sales history analysis & forecasting",
              "Google Maps turn-by-turn export",
              "Unlimited location stops",
              "Email & chat support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-sm text-[#8b949e]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] pb-8">
        &copy; {new Date().getFullYear()} Food Truck Route Optimizer. All rights reserved.
      </footer>
    </main>
  );
}
