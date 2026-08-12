export default function PricingPage() {
  return (
    <div className=" bg-white container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold mb-4 text-center">Subscription Plans</h1>
      <p className="text-center text-lg text-black mb-12 max-w-2xl mx-auto">
        Choose the plan that best matches your research needs. All plans provide access to the same category of research services; the difference is subscription duration and effective cost.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {/* Monthly Plan */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <h3 className="text-xl font-bold mb-2">Monthly</h3>
          <p className="text-black mb-6">1 Month</p>
          <div className="text-3xl font-bold mb-6">₹4,000<span className="text-sm font-normal text-black block mt-1">+ GST</span></div>
          <button className="w-full py-2 px-4 bg-gold/10 text-blue-700 font-medium rounded-lg hover:bg-gold/20 transition-colors mt-auto">Subscribe</button>
        </div>

        {/* Quarterly Plan */}
        <div className="bg-white p-6 rounded-xl border-2 border-blue-500 shadow-md flex flex-col relative">
          <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gold/100 text-black text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">POPULAR</div>
          <h3 className="text-xl font-bold mb-2">Quarterly</h3>
          <p className="text-black mb-6">3 Months</p>
          <div className="text-3xl font-bold mb-6">₹10,000<span className="text-sm font-normal text-black block mt-1">+ GST</span></div>
          <button className="w-full py-2 px-4 bg-gold text-navy font-medium rounded-lg hover:bg-gold/80 transition-colors mt-auto">Subscribe</button>
        </div>

        {/* Half-Yearly Plan */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <h3 className="text-xl font-bold mb-2">Half-Yearly</h3>
          <p className="text-black mb-6">6 Months</p>
          <div className="text-3xl font-bold mb-6">₹20,000<span className="text-sm font-normal text-black block mt-1">+ GST</span></div>
          <button className="w-full py-2 px-4 bg-gold/10 text-blue-700 font-medium rounded-lg hover:bg-gold/20 transition-colors mt-auto">Subscribe</button>
        </div>

        {/* Yearly Plan */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <h3 className="text-xl font-bold mb-2">Yearly</h3>
          <p className="text-black mb-6">12 Months</p>
          <div className="text-3xl font-bold mb-6">₹36,000<span className="text-sm font-normal text-black block mt-1">+ GST</span></div>
          <button className="w-full py-2 px-4 bg-gold/10 text-blue-700 font-medium rounded-lg hover:bg-gold/20 transition-colors mt-auto">Subscribe</button>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl border border-slate-200 prose prose-sm prose-slate max-w-none">
        <h3 className="text-lg font-bold mb-4 mt-0">Fee Notes</h3>
        <ul className="mb-0">
          <li>Fees mentioned above are exclusive of applicable GST, which will be charged extra as per prevailing rates.</li>
          <li>As per SEBI norms, the total fee charged to an individual/HUF client (across all research services, cumulatively) is capped at ₹1,51,000 per annum per family, revised periodically by SEBI/RAASB. This cap does not apply to non-individual or accredited-investor clients.</li>
          <li>Fees may be collected in advance, subject to SEBI's prescribed advance-fee limits; any unutilised advance fee is refundable in line with our Refund & Cancellation Policy.</li>
          <li>Payment can optionally be made through SEBI's Centralised Fee Collection Mechanism (CeFCoM) where available, in addition to other permitted payment modes.</li>
          <li>No breakage fee or penalty is charged on early/premature termination of a subscription by the client.</li>
        </ul>
      </div>
    </div>
  );
}