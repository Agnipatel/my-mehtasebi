import Link from 'next/link';

export default function MandatoryDisclosuresPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 border-b pb-4">Mandatory Disclosures</h1>
      <div className="prose prose-slate max-w-none">
        <p className="mb-8 text-black leading-relaxed text-lg">
          The following disclosures are made in compliance with SEBI (Research Analysts) Regulations, 2014, the Master Circular for Research Analysts, and applicable amendments.
        </p>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Business Activity Disclosure</h2>
        <p className="mb-6 text-black leading-relaxed">
          Mehta Insights (SEBI Reg. No. INH000025577) is engaged solely in the business of research analysis — the preparation and distribution of research reports and recommendations relating to securities. We do not undertake portfolio management, trade execution, or fund management activities.
        </p>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Disciplinary History</h2>
        <p className="mb-6 text-black leading-relaxed">
          [INSERT: "There are no pending material litigations or disciplinary actions taken by SEBI or any other regulatory authority against the Research Analyst as on [date]." — to be confirmed and dated by the firm.]
        </p>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Terms & Conditions of Research Service</h2>
        <p className="mb-6 text-black leading-relaxed">
          Detailed terms and conditions governing our research services are set out in our <Link href="/compliance/terms" className="text-black hover:underline">Most Important Terms and Conditions (MITC) / Terms & Conditions page</Link>.
        </p>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Details of Associates</h2>
        <p className="mb-6 text-black leading-relaxed">
          [INSERT: Details of associates as defined under SEBI RA Regulations, if any, along with nature of association.]
        </p>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Compensation from Research Activities</h2>
        <p className="mb-6 text-black leading-relaxed">
          Compensation is received solely in the form of subscription fees from clients as disclosed on our Subscription Plans page, within SEBI-prescribed fee limits. We do not receive compensation from the companies covered in our research reports.
        </p>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Ownership & Financial Interest</h2>
        <p className="mb-6 text-black leading-relaxed">
          [INSERT: Disclosure of whether the Research Analyst or associates hold financial interest / actual or beneficial ownership of 1% or more in the securities of the subject company as on the date of the report — to be disclosed report-wise as applicable.]
        </p>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Receipt of Compensation from Subject Company</h2>
        <p className="mb-6 text-black leading-relaxed">
          Mehta Insights has not received any compensation from the companies mentioned in its research reports in the twelve months preceding the date of the report, other than fees received for research services from clients. [INSERT: Update if inapplicable.]
        </p>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Fee Ceiling Disclosure</h2>
        <p className="mb-6 text-black leading-relaxed">
          As per SEBI/RAASB norms, the maximum fee chargeable to an individual/HUF client across all research services combined is ₹1,51,000 per annum per family (excluding statutory charges), subject to periodic revision. This ceiling does not apply to non-individual or accredited-investor clients.
        </p>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Use of Artificial Intelligence</h2>
        <p className="mb-6 text-black leading-relaxed">
          The extent of use of AI tools in our research process is disclosed on our dedicated <Link href="/compliance/ai-usage" className="text-black hover:underline">AI Usage Disclosure page</Link>, as mandated by SEBI.
        </p>
      </div>
    </div>
  );
}