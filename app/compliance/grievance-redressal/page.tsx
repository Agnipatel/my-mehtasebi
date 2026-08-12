export default function GrievanceRedressalPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 border-b pb-4">Grievance Redressal</h1>
      <div className="prose prose-slate max-w-none">
        <p className="mb-8 text-black leading-relaxed text-lg">
          Mehta Insights is committed to resolving investor grievances promptly and fairly. Please follow the escalation matrix below.
        </p>

        <div className="bg-white p-6 rounded-lg border border-slate-200 mb-8">
          <h2 className="text-xl font-bold mb-3 mt-0 text-black">Step 1 — Contact Mehta Insights Directly</h2>
          <p className="mb-2"><strong>Grievance/Compliance Officer:</strong> [INSERT: Name]</p>
          <p className="mb-2"><strong>Email:</strong> <a href="mailto:contact@mehtainsights.com" className="text-black hover:underline">contact@mehtainsights.com</a></p>
          <p className="mb-4"><strong>Phone:</strong> [INSERT: New phone number]</p>
          <p className="mb-0 text-sm text-black">
            We aim to acknowledge complaints within 2 working days and resolve within 21 days, in line with SEBI timelines.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-slate-200 mb-8">
          <h2 className="text-xl font-bold mb-3 mt-0 text-black">Step 2 — SEBI SCORES</h2>
          <p className="mb-0">
            If not satisfied with our response, or if no response is received within the stipulated time, investors may lodge a complaint on SEBI's SCORES platform: <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">https://scores.sebi.gov.in</a>
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-slate-200 mb-8">
          <h2 className="text-xl font-bold mb-3 mt-0 text-black">Step 3 — Online Dispute Resolution (ODR)</h2>
          <p className="mb-0">
            Investors may also initiate dispute resolution through the SEBI-mandated Online Dispute Resolution (ODR) portal for securities market disputes: <a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">https://smartodr.in</a> (or the then-current SEBI-notified ODR portal), covering conciliation and arbitration.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-slate-200 mb-8">
          <h2 className="text-xl font-bold mb-3 mt-0 text-black">Step 4 — Stock Exchange (BSE) Investor Grievance Cell</h2>
          <p className="mb-0">
            As an RA enlisted with BSE (Enlistment No. 7060), investors may also approach BSE's investor grievance mechanism for assistance.
          </p>
        </div>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Information Needed When Filing a Complaint</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-black">
          <li>Your full name, contact details, and client/subscription ID.</li>
          <li>SEBI Registration No. of the RA: <strong>INH000025577</strong>.</li>
          <li>A clear description of the grievance, along with supporting documents (payment receipts, communication records, etc.).</li>
        </ul>

        <div className="bg-gold/10 border-l-4 border-blue-500 p-4 mt-8">
          <p className="text-black mb-0 font-medium">
            Mehta Insights will never ask you to route a complaint through any unofficial or unverified channel. Please use only the contact details published on this website.
          </p>
        </div>
      </div>
    </div>
  );
}