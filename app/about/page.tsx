import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
        <p className="text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed">
          Independent equity research built on fundamental and technical analysis. We exist to give investors research they can verify, question, and rely on — not tips built on hearsay.
        </p>
      </div>
      
      {/* Firm Background & Who We Are */}
      <section className="mb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <div className="prose prose-lg  max-w-none text-black leading-relaxed space-y-4">
              <p>
                Mehta Insights is a SEBI Registered Research Analyst firm (Registration No. INH000025577) offering independent equity research built on fundamental and technical analysis. 
              </p>
              <p>
                [INSERT: Firm Background] Add 2–3 paragraphs here on the firm's founding story, years of operation, number of clients served, and any notable milestones, once finalised by the firm.
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full pointer-events-none"></div>
            <h3 className="text-2xl font-bold mb-6 relative z-10 flex items-center">
              <svg className="w-6 h-6 text-gold mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
              Our Philosophy
            </h3>
            <ul className="space-y-4 relative z-10">
              <li className="flex items-start">
                <span className="text-gold mr-3 mt-1 font-bold">•</span>
                <span className="text-black"><strong>Research first, opinions second</strong> — every call is backed by a documented rationale.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3 mt-1 font-bold">•</span>
                <span className="text-black"><strong>Full disclosure</strong> — our methodology, risks, and fee structure are public, not hidden behind a sales call.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3 mt-1 font-bold">•</span>
                <span className="text-black"><strong>Client interest ahead of firm interest</strong> — we disclose conflicts and do not let distribution relationships (such as our AMFI ARN-74114) influence research recommendations.</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-3 mt-1 font-bold">•</span>
                <span className="text-black"><strong>Long-term credibility over short-term hype</strong> — we do not promise guaranteed or assured returns, because SEBI regulations prohibit this and because markets simply do not work that way.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">What Sets Us Apart</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
            <div className="w-12 h-12 bg-gold/20 text-black rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Institutional-style</h3>
            <p className="text-black text-sm">Institutional-style research process tailored for retail and HNI investors.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
            <div className="w-12 h-12 bg-gold/20 text-black rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Dual Lens Approach</h3>
            <p className="text-black text-sm">Fundamental analysis for "what to buy" and technical analysis for "when to buy/sell".</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
            <div className="w-12 h-12 bg-gold/20 text-black rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Recognised Credentials</h3>
            <p className="text-black text-sm">Led by an analyst with 15+ years experience and SEBI RA, CMT, CFTe, and QPFP certifications.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 text-center">
            <div className="w-12 h-12 bg-gold/20 text-black rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Plain Language</h3>
            <p className="text-black text-sm">Research reports delivered without unnecessary jargon, backed by a dedicated compliance framework.</p>
          </div>
        </div>
      </section>

      {/* About the Analyst Section */}
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
        </div>
      </div>
      
      {/* Commitment to Compliance */}
      <section className="bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm mt-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-bl-full pointer-events-none"></div>
        <h3 className="text-3xl font-bold mb-6 flex items-center relative z-10">
          <svg className="w-8 h-8 mr-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
          Our Commitment to Compliance
        </h3>
        <p className="text-lg text-black mb-6 leading-relaxed relative z-10">
          As a SEBI-registered entity, Mehta Insights adheres to the SEBI (Research Analysts) Regulations, 2014, applicable amendments, and all master circulars issued by SEBI from time to time — including norms on fee ceilings, the Most Important Terms and Conditions (MITC), the Investor Charter, and AI usage disclosure. Our full compliance documentation is available in the <Link href="/compliance/mandatory-disclosures" className="text-gold hover:underline">Compliance section</Link> of this website.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 relative z-10">
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h4 className="font-bold text-lg mb-2">Regulatory Standing</h4>
            <p className="text-black text-sm">
              The Research Analyst is registered with SEBI under Registration No. INH000025577 and enlisted with BSE under Enlistment No. 7060 for research analyst services. This registration authorises the analyst to publish and distribute research reports and recommendations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h4 className="font-bold text-lg mb-2 text-amber-500">Conflict of Interest Disclosure</h4>
            <p className="text-black text-sm">
              <strong>Note:</strong> The analyst also holds AMFI Registration No. ARN-74114 for mutual fund distribution. Where mutual fund distribution and research analyst activities coexist, this is disclosed in detail on the <Link href="/compliance/conflict-of-interest" className="underline hover:text-black">Conflict of Interest Disclosure page</Link>, as required by SEBI norms on client-level segregation.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
