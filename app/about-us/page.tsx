export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      
      <div className="prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold mt-8 mb-4">Who We Are</h2>
        <p className="mb-4">
          Mehta Insights is a SEBI Registered Research Analyst firm (Registration No. INH000025577) offering independent equity research built on fundamental and technical analysis. We exist to give investors research they can verify, question, and rely on — not tips built on hearsay.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Philosophy</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li><strong>Research first, opinions second</strong> — every call is backed by a documented rationale.</li>
          <li><strong>Full disclosure</strong> — our methodology, risks, and fee structure are public, not hidden behind a sales call.</li>
          <li><strong>Client interest ahead of firm interest</strong> — we disclose conflicts and do not let distribution relationships (such as our AMFI ARN-74114) influence research recommendations.</li>
          <li><strong>Long-term credibility over short-term hype</strong> — we do not promise guaranteed or assured returns, because SEBI regulations prohibit this and because markets simply do not work that way.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">What Sets Us Apart</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Institutional-style research process for retail and HNI investors.</li>
          <li>Dual lens: fundamental analysis for "what to buy" and technical analysis for "when to buy/sell".</li>
          <li>Led by an analyst with 15+ years of market experience and globally recognised credentials — CMT (Chartered Market Technician), CFTe (Certified Financial Technician), and QPFP (Qualified Personal Financial Planner) — in addition to SEBI RA registration.</li>
          <li>Plain-language reports — research without unnecessary jargon.</li>
          <li>Dedicated grievance and compliance framework, published transparently on this website.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Our Commitment to Compliance</h2>
        <p className="mb-6">
          As a SEBI-registered entity, Mehta Insights adheres to the SEBI (Research Analysts) Regulations, 2014, applicable amendments, and all master circulars issued by SEBI from time to time — including norms on fee ceilings, the Most Important Terms and Conditions (MITC), the Investor Charter, and AI usage disclosure. Our full compliance documentation is available in the Compliance section of this website.
        </p>
      </div>
    </div>
  );
}