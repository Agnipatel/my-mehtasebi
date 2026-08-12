export default function InvestorCharterPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 border-b pb-4">Investor Charter</h1>
      <div className="prose prose-slate max-w-none">
        <p className="mb-8 text-black leading-relaxed text-lg">
          This Investor Charter, issued pursuant to SEBI's directives, sets out the vision, mission, services, and investor rights applicable to Research Analysts.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h2 className="text-xl font-bold mb-3 mt-0 text-black">Vision</h2>
            <p className="mb-0 text-black">To ensure investors are treated fairly, receive research services that are transparent and unbiased, and are protected from mis-selling or misrepresentation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h2 className="text-xl font-bold mb-3 mt-0 text-black">Mission</h2>
            <p className="mb-0 text-black">To provide investors with timely and transparent research-related services through robust systems, disclosure of risks and conflicts, and a responsive grievance redressal mechanism.</p>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Details of Services Provided to Investors</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-black">
          <li>Onboarding after completion of KYC and mandatory disclosure of terms and conditions (MITC).</li>
          <li>Access to research reports/recommendations as per the subscribed plan.</li>
          <li>Disclosure of the risks, rationale, and limitations associated with every recommendation.</li>
          <li>A defined, time-bound grievance redressal process.</li>
        </ul>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Rights of Investors</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-black">
          <li>Right to privacy and confidentiality of personal information, subject to regulatory requirements.</li>
          <li>Right to be informed about all terms, conditions, fees, and risks before availing services.</li>
          <li>Right to fair and unbiased research recommendations, free from undisclosed conflicts of interest.</li>
          <li>Right to seek redressal of grievances, including escalation through SEBI SCORES and ODR.</li>
          <li>Right to receive research recommendations without any assurance of guaranteed or assured returns.</li>
        </ul>

        <div className="grid md:grid-cols-2 gap-8 mb-8 mt-8">
          <div>
            <h2 className="text-xl font-bold mb-3 mt-0 text-black">Responsibilities of Investors (Dos)</h2>
            <ul className="list-disc pl-6 mb-0 space-y-2 text-black">
              <li>Deal only with SEBI-registered Research Analysts; verify registration before subscribing.</li>
              <li>Read all disclosures, MITC, and risk factors carefully before making investment decisions.</li>
              <li>Pay fees only through the RA's registered/verified payment channels; retain payment receipts.</li>
              <li>Ask questions and seek clarification on any recommendation before acting on it.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-3 mt-0 text-red-700">Don'ts</h2>
            <ul className="list-disc pl-6 mb-0 space-y-2 text-black">
              <li>Do not share login credentials, trading passwords, or OTPs with anyone, including the Research Analyst.</li>
              <li>Do not act on unsolicited tips received via social media, SMS, or messaging apps claiming to be from Mehta Insights without verification.</li>
              <li>Do not authorise the Research Analyst (or anyone claiming to represent them) to execute trades on your behalf.</li>
              <li>Do not fall for promises of guaranteed, fixed, or assured returns — no SEBI-registered RA can make such promises.</li>
            </ul>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Grievance Redressal Mechanism</h2>
        <p className="mb-6 text-black leading-relaxed">
          Investors may first approach Mehta Insights' Grievance Officer. If unresolved within the stipulated timeline, investors may escalate to SEBI SCORES, the concerned Stock Exchange (BSE), or the SEBI Online Dispute Resolution (ODR) platform. Full details, including timelines, are provided on our Grievance Redressal page.
        </p>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Expectations from Investors</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-black">
          <li>Provide complete and accurate KYC and contact information.</li>
          <li>Keep contact details updated to receive timely communication and alerts.</li>
          <li>Exercise independent judgment and risk assessment before acting on research recommendations.</li>
        </ul>
      </div>
    </div>
  );
}