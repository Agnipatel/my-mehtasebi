import React from 'react';

export default function MethodologyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Research Methodology</h1>
        <p className="text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed">
          Our research process combines fundamental and technical analysis with a structured, repeatable framework so that every recommendation can be traced back to a clear rationale.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Fundamental Analysis Framework */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-gold/50 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full pointer-events-none group-hover:bg-gold/10 transition-colors"></div>
          <h2 className="text-2xl font-bold mb-6 flex items-center relative z-10">
            <svg className="w-8 h-8 mr-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            Fundamental Analysis Framework
          </h2>
          <ul className="space-y-4 relative z-10">
            <li className="flex items-start">
              <span className="text-gold mr-3 mt-1 font-bold">•</span>
              <span className="text-black"><strong>Business & Industry Assessment</strong> — sector outlook, competitive positioning, and business model quality.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3 mt-1 font-bold">•</span>
              <span className="text-black"><strong>Financial Analysis</strong> — revenue, margin, cash flow, balance sheet strength, and return ratios over multiple years.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3 mt-1 font-bold">•</span>
              <span className="text-black"><strong>Valuation</strong> — relative valuation (P/E, P/B, EV/EBITDA) and, where applicable, intrinsic valuation methods.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3 mt-1 font-bold">•</span>
              <span className="text-black"><strong>Management & Governance</strong> — track record, promoter holding pattern, and corporate governance practices.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3 mt-1 font-bold">•</span>
              <span className="text-black"><strong>Risk Assessment</strong> — identification of key business, sector, and macro risks to the thesis.</span>
            </li>
          </ul>
        </div>

        {/* Technical Analysis Framework */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-gold/50 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full pointer-events-none group-hover:bg-gold/10 transition-colors"></div>
          <h2 className="text-2xl font-bold mb-6 flex items-center relative z-10">
            <svg className="w-8 h-8 mr-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
            Technical Analysis Framework
          </h2>
          <ul className="space-y-4 relative z-10">
            <li className="flex items-start">
              <span className="text-gold mr-3 mt-1 font-bold">•</span>
              <span className="text-black">Trend identification using price structure and moving averages across multiple timeframes.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3 mt-1 font-bold">•</span>
              <span className="text-black">Momentum and volume confirmation using standard technical indicators.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3 mt-1 font-bold">•</span>
              <span className="text-black">Support/resistance mapping to define entry, target, and stop-loss levels.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3 mt-1 font-bold">•</span>
              <span className="text-black">Risk-reward assessment before any call is issued.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Report Review & Compliance */}
        <div className="bg-white p-8 rounded-2xl border-l-4 border-gold shadow-sm">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <svg className="w-7 h-7 mr-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Report Review & Compliance Check
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="w-5 h-5 text-black mr-2 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="text-black">Every research report is reviewed for accuracy and disclosure completeness before publication.</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-black mr-2 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="text-black">All recommendations carry the analyst's holding/dealing disclosure and applicable conflict-of-interest disclosures.</span>
            </li>
            <li className="flex items-start">
              <svg className="w-5 h-5 text-black mr-2 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span className="text-black">Reports are dated, version-controlled, and retained in line with SEBI's record-keeping requirements.</span>
            </li>
          </ul>
        </div>

        {/* Use of AI/Technology Tools */}
        <div className="bg-white p-8 rounded-2xl border-l-4 border-slate-600 shadow-sm">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <svg className="w-7 h-7 mr-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            Use of AI/Technology Tools
          </h3>
          <p className="text-black leading-relaxed">
            Mehta Insights may use data analytics and AI-assisted tools to support research workflows (such as data aggregation and preliminary screening). All AI-assisted outputs are reviewed and validated by the Research Analyst before publication. Full details are provided on our AI Usage Disclosure page.
          </p>
        </div>
      </div>
    </div>
  );
}