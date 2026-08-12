import Link from 'next/link';
import TrustStrip from '@/components/TrustStrip';
import ComplianceStrip from '@/components/ComplianceStrip';
import ContactPage from '@/app/contact/page';
import FaqsPage from "@/app/faqs/page";
import ServicesPage from '@/app/services/page';
import AboutPage from "@/app/about/page";
import MethodologyPage from '@/app/methodology/page';

import EducationPage from '@/app/education/page';
import PricingPage from '@/app/pricing/page';



export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden bg-navy text-white py-24">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Note: Using m2.jpeg as background, assuming this is the image added */}
          <div
            className="absolute inset-0 bg-cover bg-[75%_top] md:bg-right"
            style={{ backgroundImage: "url('/m2.jpeg')" }}
          ></div>
          {/* Darker overlay on mobile to ensure text readability, gradient on desktop */}
          <div className="absolute inset-0 bg-navy/70 md:bg-transparent"></div>
          <div className="absolute inset-0 md:bg-gradient-to-r md:from-navy md:via-navy/40 md:to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight uppercase">
              Institutional-Grade<br />Equity Research, <span className="text-gold">Built on<br />Discipline and Data.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed">
              Mehta Insights is a SEBI Registered Research Analyst (Reg. No. INH000025577) delivering fundamental and technical research to help investors make informed, independent decisions in the Indian equity markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pricing" className="bg-navy hover:bg-slate-800 text-white text-sm font-bold py-3 px-8 rounded-md transition-colors border border-navy flex items-center justify-center uppercase tracking-wide">
                View Subscription Plans
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </Link>
              <Link href="/contact" className="bg-transparent hover:bg-white/10 text-white text-sm font-bold py-3 px-8 rounded-md transition-colors border border-white flex items-center justify-center uppercase tracking-wide">
                Talk to Our Research Desk
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Why Mehta Insights */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Why Mehta Insights</h2>
            <div className="w-24 h-1 bg-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold mb-3 text-black">SEBI-registered & BSE-enlisted</h3>
              <p className="text-black">Every recommendation is issued under a verifiable regulatory identity. We operate with complete accountability to our clients and regulators.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold mb-3 text-black">Dual-Lens Research</h3>
              <p className="text-black">Research grounded in fundamental analysis (business, earnings, valuation) and technical analysis (price action, trend, momentum) for precise timing.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold mb-3 text-black">Complete Transparency</h3>
              <p className="text-black">Full transparency on methodology, fees, risks, and conflicts of interest — nothing is hidden in fine print.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold mb-3 text-black">Independent Research Only</h3>
              <p className="text-black">We do not manage client funds, execute trades, or guarantee returns. Our only product is uncompromised, objective research.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">What We Offer</h2>
            <p className="text-lg text-slate-700">Comprehensive research to navigate market cycles.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gold/20 text-black rounded-lg flex items-center justify-center mb-6 text-xl font-bold">F</div>
              <h3 className="text-xl font-bold mb-3 text-black">Equity Research Reports</h3>
              <p className="text-slate-700">Stock-specific fundamental calls with target price, investment rationale, and holding horizon.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gold/20 text-black rounded-lg flex items-center justify-center mb-6 text-xl font-bold">T</div>
              <h3 className="text-xl font-bold mb-3 text-black">Technical Research Calls</h3>
              <p className="text-slate-700">Chart-based positional and swing ideas with precise entry, target, and stop-loss levels.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gold/20 text-black rounded-lg flex items-center justify-center mb-6 text-xl font-bold">M</div>
              <h3 className="text-xl font-bold mb-3 text-black">Market Commentary</h3>
              <p className="text-slate-700">Periodic notes on macro trends, sector rotation, and broader market sentiment.</p>
            </div>
          </div>
          <ServicesPage />
          <MethodologyPage />
          <AboutPage />
          <EducationPage />
          <PricingPage />
          <FaqsPage />
          <ContactPage />

          {/* <div className="text-center">
            <Link href="/services" className="inline-flex items-center text-black font-semibold hover:text-black/80 transition-colors">
              Explore Research Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div> */}
        </div>
      </section>

      {/* Subscription Snapshot */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl font-bold text-black mb-6">Start Your Research Journey</h2>
          <p className="text-lg text-slate-700 mb-10">
            Choose a plan that fits your research needs — Monthly, Quarterly, Half-Yearly, or Yearly. View full pricing and terms on the Subscription Plans page.
          </p>
          <Link href="/pricing" className="bg-gold hover:bg-gold/80 text-navy font-medium py-3 px-8 rounded-lg transition-colors">
            View All Subscription Plans
          </Link>
        </div>

        <ComplianceStrip />
      </section>
    </>
  );
}
