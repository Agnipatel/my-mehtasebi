import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About the Research Analyst</h1>
        <p className="text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed">
          Bringing a rare combination of globally recognised technical analysis credentials and India-specific regulatory certification to every piece of published research.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 mb-16">
        {/* Analyst Profile Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
            <h2 className="text-2xl font-bold mb-6 border-b border-slate-200 pb-4">Analyst Profile</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xs font-semibold text-black uppercase tracking-wider mb-1">Research Analyst Name</h3>
                <p className="text-lg font-medium text-black">[INSERT: Full Name]</p>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-black uppercase tracking-wider mb-1">Registration Details</h3>
                <p className="text-black mb-1"><span className="text-black font-medium">SEBI:</span> INH000025577</p>
                <p className="text-black mb-1"><span className="text-black font-medium">BSE:</span> 7060</p>
                <p className="text-black"><span className="text-black font-medium">AMFI:</span> ARN-74114</p>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-black uppercase tracking-wider mb-1">Experience</h3>
                <p className="text-black">15+ Years in Capital Markets</p>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-black uppercase tracking-wider mb-1">Qualification</h3>
                <p className="text-black">[INSERT: Degree/qualification]</p>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-black uppercase tracking-wider mb-2">Key Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white border border-slate-200 px-3 py-1 rounded-md text-xs font-bold text-black">SEBI Registered</span>
                  <span className="bg-white border border-slate-200 px-3 py-1 rounded-md text-xs font-bold text-black">CMT</span>
                  <span className="bg-white border border-slate-200 px-3 py-1 rounded-md text-xs font-bold text-black">CFTe</span>
                  <span className="bg-white border border-slate-200 px-3 py-1 rounded-md text-xs font-bold text-black">QPFP</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-12">

          <section>
            <h2 className="text-3xl font-bold mb-4">Professional Background</h2>
            <div className="prose prose-lg  max-w-none text-black leading-relaxed">
              <p className="mb-4">
                With over 15 years of experience in the capital markets, the Research Analyst at Mehta Insights brings a rare combination of globally recognised technical analysis credentials and India-specific regulatory certification to every piece of research published.
              </p>
              <p>
                [INSERT: Analyst's full name, educational qualifications, prior organisations, and any additional career highlights or specialisations to round out this profile.]
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Certifications & Credentials</h2>
            <div className="grid gap-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <svg className="w-5 h-5 text-black mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  SEBI Registered Research Analyst
                </h3>
                <p className="text-black">Registration No. INH000025577, certified under SEBI (Research Analysts) Regulations, 2014 (NISM-Series-XV: Research Analyst Certification).</p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <svg className="w-5 h-5 text-black mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  CMT (Chartered Market Technician)
                </h3>
                <p className="text-black">A globally recognised charter awarded by the CMT Association, USA, denoting advanced expertise in technical analysis and risk management.</p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <svg className="w-5 h-5 text-black mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                  CFTe (Certified Financial Technician)
                </h3>
                <p className="text-black">An international certification from the International Federation of Technical Analysts (IFTA), validating proficiency in technical analysis practice.</p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <svg className="w-5 h-5 text-black mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  QPFP (Qualified Personal Financial Planner)
                </h3>
                <p className="text-black">A certification in personal financial planning, reflecting a holistic, goal-based approach to advising on wealth and investments.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">Areas of Expertise</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1 font-bold text-xl">•</span>
                <span className="text-lg text-black"><strong className="text-black">Fundamental Analysis</strong> — company financials, valuation, business quality, and sector positioning.</span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1 font-bold text-xl">•</span>
                <span className="text-lg text-black"><strong className="text-black">Technical Analysis</strong> — price and volume behaviour, chart patterns, trend and momentum indicators, backed by CMT/CFTe-level rigour.</span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1 font-bold text-xl">•</span>
                <span className="text-lg text-black">Equity market research across large-cap, mid-cap, and select small-cap segments.</span>
              </li>
              <li className="flex items-start">
                <span className="text-black mr-3 mt-1 font-bold text-xl">•</span>
                <span className="text-lg text-black">Personal financial planning perspective (QPFP) applied to align research recommendations with real investor goals and risk appetite.</span>
              </li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border-l-4 border-white shadow-sm mt-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              Regulatory Standing
            </h3>
            <p className="text-black mb-4 leading-relaxed">
              The Research Analyst is registered with SEBI under Registration No. INH000025577 and enlisted with BSE under Enlistment No. 7060 for research analyst services. This registration authorises the analyst to publish and distribute research reports and recommendations in accordance with SEBI (Research Analysts) Regulations, 2014.
            </p>
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <p className="text-black text-sm font-medium">
                <strong>Note:</strong> The analyst also holds AMFI Registration No. ARN-74114 for mutual fund distribution. Where mutual fund distribution and research analyst activities coexist, this is disclosed in detail on the <Link href="/compliance/conflict-of-interest" className="underline hover:text-black">Conflict of Interest Disclosure page</Link>, as required by SEBI norms on client-level segregation of research and distribution activities.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
