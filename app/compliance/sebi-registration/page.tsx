export default function SebiRegistrationPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 border-b pb-4">SEBI Registration & Business Details</h1>
      <div className="prose prose-slate max-w-none">
        <p className="mb-8 text-black leading-relaxed text-lg">
          In accordance with SEBI (Research Analysts) Regulations, 2014 and the disclosure norms specified thereunder, the following business and registration details are published for investor reference.
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border-collapse border border-slate-200 bg-white">
            <tbody>
              <tr className="border-b border-slate-200">
                <th className="py-3 px-4 bg-white text-left font-semibold text-black w-1/3">Name of Research Analyst</th>
                <td className="py-3 px-4 text-black">Mehta Insights</td>
              </tr>
              <tr className="border-b border-slate-200">
                <th className="py-3 px-4 bg-white text-left font-semibold text-black">Type of Registration</th>
                <td className="py-3 px-4 text-black">Individual / Non-Individual Research Analyst (SEBI RA Regulations, 2014)</td>
              </tr>
              <tr className="border-b border-slate-200">
                <th className="py-3 px-4 bg-white text-left font-semibold text-black">SEBI Registration No.</th>
                <td className="py-3 px-4 text-black font-medium">INH000025577</td>
              </tr>
              <tr className="border-b border-slate-200">
                <th className="py-3 px-4 bg-white text-left font-semibold text-black">BSE Enlistment No.</th>
                <td className="py-3 px-4 text-black font-medium">7060</td>
              </tr>
              <tr className="border-b border-slate-200">
                <th className="py-3 px-4 bg-white text-left font-semibold text-black">AMFI Registration No. (ARN)</th>
                <td className="py-3 px-4 text-black font-medium">ARN-74114</td>
              </tr>
              <tr className="border-b border-slate-200">
                <th className="py-3 px-4 bg-white text-left font-semibold text-black">Validity of Registration</th>
                <td className="py-3 px-4 text-black">Perpetual (unless suspended/cancelled by SEBI)</td>
              </tr>
              <tr className="border-b border-slate-200">
                <th className="py-3 px-4 bg-white text-left font-semibold text-black">Registered Office Address</th>
                <td className="py-3 px-4 text-black">[INSERT: Full registered address as per SEBI records]</td>
              </tr>
              <tr className="border-b border-slate-200">
                <th className="py-3 px-4 bg-white text-left font-semibold text-black">Correspondence Address</th>
                <td className="py-3 px-4 text-black">[INSERT: Correspondence address, if different]</td>
              </tr>
              <tr className="border-b border-slate-200">
                <th className="py-3 px-4 bg-white text-left font-semibold text-black">Compliance Officer</th>
                <td className="py-3 px-4 text-black">[INSERT: Name of Compliance Officer]</td>
              </tr>
              <tr className="border-b border-slate-200">
                <th className="py-3 px-4 bg-white text-left font-semibold text-black">Principal Officer</th>
                <td className="py-3 px-4 text-black">[INSERT: Name of Principal Officer]</td>
              </tr>
              <tr className="border-b border-slate-200">
                <th className="py-3 px-4 bg-white text-left font-semibold text-black">Email ID (Compliance/Grievances)</th>
                <td className="py-3 px-4 text-black"><a href="mailto:contact@mehtainsights.com" className="text-black hover:underline">contact@mehtainsights.com</a></td>
              </tr>
              <tr className="border-b border-slate-200">
                <th className="py-3 px-4 bg-white text-left font-semibold text-black">Contact Number</th>
                <td className="py-3 px-4 text-black">[INSERT: New phone number]</td>
              </tr>
              <tr className="border-b border-slate-200">
                <th className="py-3 px-4 bg-white text-left font-semibold text-black">Website</th>
                <td className="py-3 px-4 text-black"><a href="https://www.mehtainsights.com" className="text-black hover:underline">www.mehtainsights.com</a></td>
              </tr>
              <tr className="border-b border-slate-200">
                <th className="py-3 px-4 bg-white text-left font-semibold text-black">SEBI Regional Office</th>
                <td className="py-3 px-4 text-black">[INSERT: Applicable SEBI Regional/Local Office name & address]</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Verification</h2>
        <p className="mb-6 text-black leading-relaxed">
          Investors are encouraged to independently verify our SEBI registration status on the SEBI website (<a href="https://www.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">https://www.sebi.gov.in</a>) under "Registered Intermediaries", and our BSE enlistment status on the BSE website, before availing of our services.
        </p>

        <div className="bg-white p-4 border border-slate-200 rounded-lg text-sm text-black italic">
          Registration granted by SEBI, enlistment as RA with BSE and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors.
        </div>
      </div>
    </div>
  );
}