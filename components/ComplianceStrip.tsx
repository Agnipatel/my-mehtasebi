import Link from 'next/link';

export default function ComplianceStrip() {
  return (
    <div className="bg-white border border-gold/20 p-6 rounded-lg my-12 text-center max-w-4xl mx-auto">
      <h3 className="text-lg font-semibold text-black mb-2">Compliance Assurance</h3>
      <p className="text-sm text-black mb-4">Mehta Insights operates under SEBI (Research Analysts) Regulations, 2014 and subsequent amendments. All disclosures, the Investor Charter, grievance redressal mechanism, and monthly complaint data are published on this website.</p>
      <Link href="/compliance/mandatory-disclosures" className="text-sm font-medium text-black hover:text-black/80 underline">
        View Compliance Section
      </Link>
    </div>
  );
}