import React from 'react';

export default function EducationPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Investor Education</h1>
        <p className="text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed">
          Mehta Insights is committed to promoting informed investing. This page consolidates resources to help investors understand markets, risk, and their rights.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Understanding the Basics */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-gold/50 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full pointer-events-none group-hover:bg-gold/10 transition-colors"></div>
          <h2 className="text-2xl font-bold mb-6 flex items-center relative z-10">
            <svg className="w-8 h-8 mr-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
            Understanding the Basics
          </h2>
          <ul className="space-y-4 relative z-10">
            <li className="flex items-start">
              <span className="text-gold mr-3 mt-1 font-bold">•</span>
              <span className="text-black">What is a Research Analyst, and how is it different from an Investment Adviser or a stockbroker?</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3 mt-1 font-bold">•</span>
              <span className="text-black">How to read a research report: recommendation, target price, time horizon, and risk factors.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3 mt-1 font-bold">•</span>
              <span className="text-black">Understanding risk profiling and why suitability matters before acting on any recommendation.</span>
            </li>
          </ul>
        </div>

        {/* Know Your Rights */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-gold/50 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full pointer-events-none group-hover:bg-gold/10 transition-colors"></div>
          <h2 className="text-2xl font-bold mb-6 flex items-center relative z-10">
            <svg className="w-8 h-8 mr-3 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
            Know Your Rights as an Investor
          </h2>
          <ul className="space-y-4 relative z-10">
            <li className="flex items-start">
              <span className="text-gold mr-3 mt-1 font-bold">•</span>
              <span className="text-black">Right to receive clear, written disclosure of fees, risks, and conflicts of interest before onboarding.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3 mt-1 font-bold">•</span>
              <span className="text-black">Right to file a complaint through SEBI SCORES, the stock exchange, or Online Dispute Resolution (ODR), in addition to our internal grievance mechanism.</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3 mt-1 font-bold">•</span>
              <span className="text-black">Right to be informed of the extent of AI tool usage in research services, where applicable.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Investor Awareness Resources */}
        <div className="bg-white p-8 rounded-2xl border-l-4 border-gold shadow-sm">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <svg className="w-7 h-7 mr-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
            Investor Awareness Resources
          </h3>
          <ul className="space-y-4">
            <li>
              <a href="https://investor.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gold flex items-center transition-colors">
                <span className="font-medium">SEBI Investor Website</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </li>
            <li>
              <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gold flex items-center transition-colors">
                <span className="font-medium">SEBI SCORES (Complaint Redressal)</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gold flex items-center transition-colors">
                <span className="font-medium">BSE Investor Protection Fund / Grievance Cell</span>
                <span className="text-xs ml-2 text-slate-700">[INSERT: link]</span>
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gold flex items-start transition-colors">
                <span className="font-medium">SEBI's "Do's and Don'ts while dealing with a Research Analyst"</span>
                <span className="text-xs ml-2 text-slate-700 mt-1 shrink-0">[INSERT: link]</span>
              </a>
            </li>
          </ul>
        </div>

        {/* A Word of Caution */}
        <div className="bg-white p-8 rounded-2xl border-l-4 border-amber-500 shadow-sm">
          <h3 className="text-2xl font-bold mb-6 flex items-center text-amber-500">
            <svg className="w-7 h-7 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            A Word of Caution
          </h3>
          <p className="text-black leading-relaxed mb-4">
            No SEBI-registered Research Analyst can guarantee returns, promise assured profits, or ask you to transfer trading control or login credentials. 
          </p>
          <p className="text-black leading-relaxed font-medium">
            Be alert to unregistered tipsters and unsolicited stock tips over social media/messaging apps. Always verify a Research Analyst's SEBI registration before subscribing to any service.
          </p>
        </div>
      </div>
    </div>
  );
}