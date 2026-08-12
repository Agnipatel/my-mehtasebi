export default function ConflictOfInterestPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 border-b pb-4">Conflict of Interest Disclosure</h1>
      <div className="prose prose-slate max-w-none">
        <p className="mb-8 text-black leading-relaxed text-lg">
          Mehta Insights is committed to identifying, disclosing, and managing conflicts of interest that may arise in the course of providing research services.
        </p>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Nature of Potential Conflicts</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-black">
          <li>Mehta Insights (or its Research Analyst) holds AMFI Registration No. ARN-74114 for mutual fund distribution. Where distribution activity and research activity coexist, there is a potential conflict of interest, as distribution income could theoretically influence research judgment.</li>
          <li>The Research Analyst or associates may, from time to time, hold positions in securities that are also covered in research reports.</li>
          <li>[INSERT: Any other business relationships, associate entities, or referral arrangements relevant to potential conflicts.]</li>
        </ul>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">How We Manage This</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-black">
          <li>Client-level segregation is maintained between research services and mutual fund distribution activity, in line with SEBI's requirements — a client is served under only one capacity (RA or distributor) for a given relationship, with clear disclosure of the capacity in which we act.</li>
          <li>Research recommendations are made independently of any distribution-related incentive; the Research Analyst does not receive commission linked to the securities recommended in research reports.</li>
          <li>Any financial interest or beneficial ownership (1% or more) held by the analyst/associates in a subject company is disclosed within the relevant research report.</li>
          <li>Compensation for research services is limited to client subscription fees as published on our Subscription Plans page.</li>
        </ul>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Investor Responsibility</h2>
        <p className="mb-6 text-black leading-relaxed">
          Investors are encouraged to ask which capacity (Research Analyst or Mutual Fund Distributor) Mehta Insights is acting in in respect of any specific service, and to review the disclosures within each research report before acting on it.
        </p>
      </div>
    </div>
  );
}