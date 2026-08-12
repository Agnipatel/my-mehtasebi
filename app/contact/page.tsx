import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black">Contact Us</h1>
        <p className="text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed">
          We welcome questions about our research services, subscriptions, and compliance. Reach us through any of the channels below.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-black border-b pb-4">Get in Touch</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-black uppercase tracking-wider mb-1">Firm Name</h3>
              <p className="text-lg text-black font-medium">Mehta Insights</p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-black uppercase tracking-wider mb-1">Registered/Office Address</h3>
              <p className="text-lg text-black">[INSERT: Address]</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-black uppercase tracking-wider mb-1">Email</h3>
              <a href="mailto:contact@mehtainsights.com" className="text-lg text-black hover:underline">contact@mehtainsights.com</a>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-black uppercase tracking-wider mb-1">Phone</h3>
              <p className="text-lg text-black">[INSERT: New phone number]</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-black uppercase tracking-wider mb-1">Office Hours</h3>
              <p className="text-lg text-black">Monday–Friday, 9:30 AM – 6:30 PM IST<br/><span className="text-sm text-black">(excluding market holidays)</span></p>
            </div>
          </div>
        </div>

        {/* Regulatory & Grievance Information */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200">
            <h2 className="text-2xl font-bold mb-6 text-black border-b pb-4 border-slate-300">Regulatory Details</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-white p-4 rounded-lg border border-slate-200">
                <span className="text-black font-medium">SEBI Registration No.</span>
                <span className="text-black font-bold">INH000025577</span>
              </div>
              <div className="flex justify-between items-center bg-white p-4 rounded-lg border border-slate-200">
                <span className="text-black font-medium">BSE Enlistment No.</span>
                <span className="text-black font-bold">7060</span>
              </div>
            </div>
          </div>

          <div className="bg-gold/10 p-8 rounded-2xl border border-gold/20">
            <h2 className="text-xl font-bold mb-4 text-black flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              For Grievances
            </h2>
            <p className="text-black mb-4">
              For complaint or grievance-specific contact details, please refer to our Grievance Redressal page, which lists our designated Grievance Officer along with SEBI SCORES and ODR escalation routes.
            </p>
            <Link href="/compliance/grievance-redressal" className="inline-block bg-gold hover:bg-gold/80 text-navy font-medium py-2 px-6 rounded-lg transition-colors">
              View Grievance Redressal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}