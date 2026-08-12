import Link from 'next/link';

export default function FaqsPage() {
  const faqs = [
    {
      q: "Is Mehta Insights registered with SEBI?",
      a: "Yes. Mehta Insights is a SEBI Registered Research Analyst, Registration No. INH000025577, and is enlisted with BSE under Enlistment No. 7060."
    },
    {
      q: "Does Mehta Insights guarantee returns?",
      a: "No. SEBI regulations prohibit any Research Analyst from guaranteeing or assuring returns. All research is provided on a best-effort, analysis-based basis and is subject to market risk."
    },
    {
      q: "Can Mehta Insights execute trades on my behalf?",
      a: "No. As a Research Analyst, Mehta Insights only provides research and recommendations. We cannot and do not execute buy/sell transactions on behalf of any client. Please do not authorise anyone claiming to represent us to trade on your behalf."
    },
    {
      q: "What subscription plans are available?",
      a: "We offer Monthly (₹4,000), Quarterly (₹10,000), Half-Yearly (₹20,000), and Yearly (₹36,000) plans, exclusive of GST. See the Subscription Plans page for full details."
    },
    {
      q: "Is there a cap on how much I can be charged?",
      a: "Yes. As per SEBI norms, individual/HUF clients cannot be charged more than ₹1,51,000 per annum per family across all research services combined, revised periodically by SEBI/RAASB."
    },
    {
      q: "Can I get a refund if I cancel my subscription?",
      a: "Yes, subject to the terms of our Refund & Cancellation Policy. Unutilised advance fees are refundable, and no breakage fee is charged for premature termination."
    },
    {
      q: "How do I raise a complaint?",
      a: "You may contact our Grievance/Compliance Officer directly, or escalate through SEBI SCORES, the BSE investor grievance mechanism, or the SEBI Online Dispute Resolution (ODR) portal. Full details are on our Grievance Redressal page."
    },
    {
      q: "Does Mehta Insights use AI in its research process?",
      a: "We may use AI-assisted tools to support parts of our research workflow, always subject to human review before publication. Details are available on our AI Usage Disclosure page."
    },
    {
      q: "Does Mehta Insights have any conflict of interest I should know about?",
      a: "We disclose all applicable conflicts of interest — including any distribution-related relationships such as our AMFI ARN-74114 — on our Conflict of Interest Disclosure page."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">Frequently Asked Questions</h1>
        <p className="text-lg text-black max-w-2xl mx-auto">
          Find answers to common questions about our research services, regulatory standing, and subscriptions.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex justify-between items-center font-bold text-black cursor-pointer p-6 hover:bg-white transition-colors">
              <span className="text-lg pr-4">{faq.q}</span>
              <span className="transition-transform group-open:rotate-180 bg-white text-black rounded-full p-1 shrink-0">
                <svg fill="none" height="20" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20"><path d="M6 9l6 6 6-6"></path></svg>
              </span>
            </summary>
            <div className="p-6 pt-0 text-black leading-relaxed border-t border-slate-200 bg-slate-50">
              <p className="pt-4 m-0">{faq.a}</p>
            </div>
          </details>
        ))}
      </div>

      {/* <div className="mt-16 bg-gold/10 border border-gold/20 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-black mb-4">Still have questions?</h2>
        <p className="text-black mb-6">If you couldn't find the answer to your question, our team is here to help.</p>
        <Link href="/contact" className="inline-block bg-gold hover:bg-gold/80 text-navy font-medium py-3 px-8 rounded-lg transition-colors">
          Contact Us
        </Link>
      </div> */}
    </div>
  );
}