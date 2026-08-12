import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 border-b pb-4">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none">
        <p className="mb-8 text-black leading-relaxed text-lg">
          Mehta Insights ("we", "us", "our") is committed to protecting the privacy of visitors to our website and our clients. This Privacy Policy explains what information we collect, how we use it, and how we protect it.
        </p>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Information We Collect</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-black">
          <li><strong>Identity & contact information:</strong> name, email address, phone number, address, PAN, and other KYC details.</li>
          <li><strong>Financial information:</strong> relevant to onboarding and risk profiling, where applicable.</li>
          <li><strong>Technical information:</strong> IP address, browser type, and usage data collected via cookies (see our <Link href="/compliance/cookie-policy" className="text-black hover:underline">Cookie Policy</Link>).</li>
        </ul>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">How We Use Your Information</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-black">
          <li>To onboard clients, verify KYC, and provide subscribed research services.</li>
          <li>To communicate research reports, account, and billing information.</li>
          <li>To comply with SEBI record-keeping and regulatory reporting requirements.</li>
          <li>To improve our website and services.</li>
        </ul>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Data Sharing</h2>
        <p className="mb-6 text-black leading-relaxed">
          We do not sell or rent personal information to third parties. Information may be shared with regulators (such as SEBI, BSE), service providers who assist in operations (e.g., payment gateways, communication platforms) under confidentiality obligations, or where required by law.
        </p>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Data Retention</h2>
        <p className="mb-6 text-black leading-relaxed">
          Client records, communications, and research-related documentation are retained for a minimum of five years, or longer where required by SEBI regulations or in case of pending disputes/regulatory directions.
        </p>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Data Security</h2>
        <p className="mb-6 text-black leading-relaxed">
          We implement reasonable technical and organisational measures to protect personal data against unauthorised access, alteration, or disclosure, including when AI-assisted tools are used as part of our research process.
        </p>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Your Rights</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-black">
          <li>You may request access to, correction of, or deletion of your personal information, subject to our regulatory record-retention obligations.</li>
          <li>You may opt out of promotional communications at any time; transactional/regulatory communications will continue as required.</li>
        </ul>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Contact for Privacy Queries</h2>
        <p className="mb-6 text-black leading-relaxed">
          For any privacy-related queries, please contact us at <a href="mailto:contact@mehtainsights.com" className="text-black hover:underline">contact@mehtainsights.com</a>.
        </p>
      </div>
    </div>
  );
}