import Link from 'next/link';

export default function InsightsPage() {
  return (
    <div className="container bg-navy mx-auto px-4 py-12 max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Market Insights / Blog</h1>
        <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed">
          This section hosts periodic, dated articles on market trends, sector views, and investor education themes — distinct from paid, client-specific research recommendations.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-black border-b pb-4">Content Categories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-black mb-2">Market Wrap</h3>
            <p className="text-black">Weekly/monthly summary of index and sector performance.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-black mb-2">Sector Spotlight</h3>
            <p className="text-black">Thematic notes on sectors in focus.</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-black mb-2">Learn the Markets</h3>
            <p className="text-black">Educational explainers (e.g., "What is P/E ratio?", "Reading a candlestick chart").</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-black mb-2">Policy & Macro Watch</h3>
            <p className="text-black">Commentary on RBI policy, Union Budget, and global cues affecting Indian markets.</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-black border-b pb-4">Recent Insights</h2>

        {/* Sample Blog Posts Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Sample Post 1 */}
          <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="h-48 bg-gold/20 flex items-center justify-center text-blue-300">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="text-xs font-semibold text-black uppercase tracking-wider mb-2">Learn the Markets</div>
              <h3 className="text-xl font-bold text-black mb-3 leading-snug hover:text-black cursor-pointer transition-colors">
                Understanding Fundamental vs. Technical Analysis: Which One Should You Trust?
              </h3>
              <p className="text-black text-sm mb-4 line-clamp-3">
                A deep dive into how both approaches can be used synergistically to build a robust investment framework.
              </p>
              <div className="mt-auto pt-4 border-t border-slate-200 text-sm text-black">
                [Date] • 5 min read
              </div>
            </div>
          </article>

          {/* Sample Post 2 */}
          <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="h-48 bg-gold/20 flex items-center justify-center text-black/80">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="text-xs font-semibold text-black uppercase tracking-wider mb-2">Investor Protection</div>
              <h3 className="text-xl font-bold text-black mb-3 leading-snug hover:text-black cursor-pointer transition-colors">
                5 Red Flags to Watch For Before Trusting a Stock Tip
              </h3>
              <p className="text-black text-sm mb-4 line-clamp-3">
                Learn how to spot unregistered tipsters and protect your capital from fraudulent market practices.
              </p>
              <div className="mt-auto pt-4 border-t border-slate-200 text-sm text-black">
                [Date] • 4 min read
              </div>
            </div>
          </article>

          {/* Sample Post 3 */}
          <article className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="h-48 bg-gold/20 flex items-center justify-center text-black/80">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <div className="text-xs font-semibold text-black uppercase tracking-wider mb-2">Regulatory Updates</div>
              <h3 className="text-xl font-bold text-black mb-3 leading-snug hover:text-black cursor-pointer transition-colors">
                How SEBI's New RA Regulations Protect You as an Investor
              </h3>
              <p className="text-black text-sm mb-4 line-clamp-3">
                Understanding the regulatory framework designed to ensure research analysts act in your best interest.
              </p>
              <div className="mt-auto pt-4 border-t border-slate-200 text-sm text-black">
                [Date] • 6 min read
              </div>
            </div>
          </article>

        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 text-sm text-black text-center italic">
        <strong>Standard Disclaimer:</strong> This article is for informational and educational purposes only and does not constitute investment advice or a research recommendation. Please refer to our <Link href="/services" className="text-black hover:underline not-italic">Research Services</Link> and <Link href="/compliance/disclaimer" className="text-black hover:underline not-italic">Disclaimer</Link> pages for details on how formal recommendations are issued.
      </div>
    </div>
  );
}