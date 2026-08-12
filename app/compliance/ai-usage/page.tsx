import Link from 'next/link';

export default function AIUsagePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 border-b pb-4">AI Usage Disclosure</h1>
      <div className="prose prose-slate max-w-none">
        <p className="mb-8 text-black leading-relaxed text-lg">
          In compliance with SEBI's requirement that Research Analysts disclose the extent of use of Artificial Intelligence (AI) tools in their services, Mehta Insights makes the following disclosure.
        </p>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Extent of AI Usage</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-black">
          <li>AI-assisted tools may be used for preliminary data aggregation, screening, and drafting support during the research process.</li>
          <li>AI tools are <strong>not</strong> used to independently generate final buy/sell/hold recommendations, target prices, or stop-loss levels — every recommendation is reviewed, validated, and approved by the Research Analyst before publication.</li>
          <li>AI tools are <strong>not</strong> used to interact with clients or provide investment recommendations directly without human oversight.</li>
        </ul>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Accountability</h2>
        <p className="mb-6 text-black leading-relaxed">
          Mehta Insights remains fully and solely responsible for all research services and recommendations provided to clients, regardless of the extent to which AI tools are used internally. Use of AI tools does not, in any manner, dilute our regulatory obligations or liability under SEBI (Research Analysts) Regulations, 2014.
        </p>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Data Security</h2>
        <p className="mb-6 text-black leading-relaxed">
          Any client data processed using AI-assisted tools is handled in accordance with our <Link href="/compliance/privacy-policy" className="text-black hover:underline">Privacy Policy</Link>, and Mehta Insights takes reasonable measures to ensure the security, confidentiality, and integrity of such data.
        </p>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Updates to This Disclosure</h2>
        <p className="mb-6 text-black leading-relaxed">
          This disclosure will be updated as our use of AI tools evolves, in line with SEBI's ongoing guidance on the subject.
        </p>
      </div>
    </div>
  );
}