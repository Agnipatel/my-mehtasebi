export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="text-center mb-16 animate-fadeInDown">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">Research Services</h1>
        <p className="text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed">
          Mehta Insights provides SEBI-compliant research services designed for investors who want independent, well-reasoned analysis rather than unverified tips. All services are research and advisory in nature — we do not execute trades or manage client funds/portfolios.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* Equity Fundamental Research */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow animate-fadeInUp animate-delay-100">
          <div className="w-14 h-14 bg-gold/20 text-black rounded-xl flex items-center justify-center mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-black">Equity Fundamental Research</h2>
          <ul className="space-y-3 text-black">
            <li className="flex items-start">
              <span className="text-black mr-2 mt-1">•</span>
              <span>In-depth analysis of company financials, business model, management quality, and competitive position.</span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-2 mt-1">•</span>
              <span>Valuation-based recommendations with target price, investment rationale, and holding horizon.</span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-2 mt-1">•</span>
              <span>Quarterly result updates and earnings-call takeaways on covered stocks.</span>
            </li>
          </ul>
        </div>

        {/* Technical Research */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow animate-fadeInUp animate-delay-200">
          <div className="w-14 h-14 bg-gold/20 text-black rounded-xl flex items-center justify-center mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-black">Technical Research</h2>
          <ul className="space-y-3 text-black">
            <li className="flex items-start">
              <span className="text-black mr-2 mt-1">•</span>
              <span>Chart-based trade ideas using price action, trend lines, moving averages, and momentum indicators.</span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-2 mt-1">•</span>
              <span>Positional and swing-trading research calls with defined entry, target, and stop-loss levels.</span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-2 mt-1">•</span>
              <span>Sector and index technical outlook notes.</span>
            </li>
          </ul>
        </div>

        {/* Market Commentary */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow animate-fadeInUp animate-delay-300">
          <div className="w-14 h-14 bg-gold/20 text-black rounded-xl flex items-center justify-center mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3L22 4" /></svg>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-black">Market Commentary</h2>
          <ul className="space-y-3 text-black">
            <li className="flex items-start">
              <span className="text-black mr-2 mt-1">•</span>
              <span>Periodic notes on macroeconomic developments, sector rotation, and market sentiment.</span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-2 mt-1">•</span>
              <span>Event-based commentary around Union Budget, RBI policy, and major earnings seasons.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center bg-white p-10 rounded-3xl border border-slate-200 animate-fadeInUp animate-delay-400">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-black">Who This Is For</h2>
          <ul className="space-y-4 text-lg text-black">
            <li className="flex items-center">
              <svg className="w-6 h-6 text-green-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>Retail investors seeking research-backed clarity before investing.</span>
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 text-green-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>Active traders looking for technically validated entry/exit levels.</span>
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 text-green-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>Long-term investors wanting fundamentally screened ideas.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl border-l-4 border-amber-400 shadow-sm">
          <h3 className="text-xl font-bold mb-4 text-black flex items-center">
            <svg className="w-6 h-6 text-black mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            Important Notes
          </h3>
          <p className="text-black mb-4">
            Research recommendations are based on analysis at a point in time and are subject to change without prior notice. Past performance of recommendations is not indicative of future results.
          </p>
          <p className="text-black">
            Mehta Insights does not offer portfolio management services, does not execute trades on behalf of clients, and does not guarantee or assure any return. Clients should independently assess suitability and risk before acting on any recommendation.
          </p>
        </div>
      </div>
    </div>
  );
}