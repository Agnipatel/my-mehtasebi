import React from 'react';

export default function PublicAppearancesDisclosuresPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 border-b border-slate-200 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Disclosures for Public Appearances</h1>
        <p className="text-lg text-black leading-relaxed">
          The following disclosures are made in accordance with SEBI (Research Analysts) Regulations, 2014, to be referenced during public appearances.
        </p>
      </div>

      <div className="bg-white border border-slate-200 p-8 rounded-xl mb-12 shadow-sm">
        <ul className="space-y-4 mb-8 text-lg">
          <li className="flex items-start">
            <span className="text-gold mr-3 mt-1 font-bold">•</span>
            <span className="text-black font-semibold">Ankit Dinesh Mehta</span>
          </li>
          <li className="flex items-start">
            <span className="text-gold mr-3 mt-1 font-bold">•</span>
            <span className="text-black font-semibold">SEBI Registered Research Analyst</span>
          </li>
          <li className="flex items-start">
            <span className="text-gold mr-3 mt-1 font-bold">•</span>
            <span className="text-black">Registration No. INH000025577</span>
          </li>
          <li className="flex items-start">
            <span className="text-gold mr-3 mt-1 font-bold">•</span>
            <span className="text-black">BSE Enlistment no.: 7060</span>
          </li>
          <li className="flex items-start">
            <span className="text-gold mr-3 mt-1 font-bold">•</span>
            <span className="text-black">Research Analyst or his associates or his dependent family members may hold financial interest or actual/ beneficial ownership in the financial products/ securities advised herein.</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold text-gold mb-6 border-b border-slate-200 pb-2">Disclosures by RA</h2>
        
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-left border-collapse border border-slate-300">
            <thead>
              <tr className="bg-slate-100">
                <th className="py-4 px-6 border border-slate-300 font-bold text-black w-4/5">Disclosure Statement</th>
                <th className="py-4 px-6 border border-slate-300 font-bold text-black text-center">Yes / No</th>
              </tr>
            </thead>
            <tbody className="text-black text-sm md:text-base">
              <tr>
                <td className="py-4 px-6 border border-slate-300">Research Analyst have no material adverse disciplinary history as on the date of publication of this report.</td>
                <td className="py-4 px-6 border border-slate-300 text-center font-semibold">Yes</td>
              </tr>
              <tr className="bg-slate-100">
                <td className="py-4 px-6 border border-slate-300">Research Analyst has no associates</td>
                <td className="py-4 px-6 border border-slate-300 text-center font-semibold">Yes</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border border-slate-300">Research Analysts or its employee or its associates may have beneficial ownership of 1% or more in the subject company at the end of the month immediately preceding the date of publication of the Research Report.</td>
                <td className="py-4 px-6 border border-slate-300 text-center font-semibold">No</td>
              </tr>
              <tr className="bg-slate-100">
                <td className="py-4 px-6 border border-slate-300">Research Analysts or its employee or its associates does not have any financial interest in the subject company.</td>
                <td className="py-4 px-6 border border-slate-300 text-center font-semibold">Yes</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border border-slate-300">Research Analysts or its employee or its associates have no actual or potential conflicts of interest arising from any connection to or association with any issuer of products/ securities, including any material information or facts that might compromise its objectivity or independence in the carrying on of recommendation services at the time of publication of the research report.</td>
                <td className="py-4 px-6 border border-slate-300 text-center font-semibold">Yes</td>
              </tr>
              <tr className="bg-slate-100">
                <td className="py-4 px-6 border border-slate-300">Research Analysts or its employee or its associates have not received any kind of remuneration or consideration or compensation form the subject company or from anyone in connection with the research report in the past twelve months.</td>
                <td className="py-4 px-6 border border-slate-300 text-center font-semibold">Yes</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border border-slate-300">The subject company was not a client of Research Analyst during twelve months preceding the date of distribution of the research report.</td>
                <td className="py-4 px-6 border border-slate-300 text-center font-semibold">Yes</td>
              </tr>
              <tr className="bg-slate-100">
                <td className="py-4 px-6 border border-slate-300">Research Analysts or its employee or its associates have not served as an officer, director or employee of the subject company.</td>
                <td className="py-4 px-6 border border-slate-300 text-center font-semibold">Yes</td>
              </tr>
              <tr>
                <td className="py-4 px-6 border border-slate-300">Research Analysts or its employee or its associates have not been engaged in market making activity of the subject company</td>
                <td className="py-4 px-6 border border-slate-300 text-center font-semibold">Yes</td>
              </tr>
              <tr className="bg-slate-100">
                <td className="py-4 px-6 border border-slate-300">The research analyst has used artificial intelligence tools for preparation of the research report.</td>
                <td className="py-4 px-6 border border-slate-300 text-center font-semibold">No</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-bold text-amber-500 mb-4 border-b border-slate-200 pb-2">Statutory Disclaimers</h2>
        <div className="bg-slate-100 p-6 rounded-lg border-l-4 border-amber-500 italic text-black leading-relaxed">
          "Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI, Enlistment of BSE and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors"
        </div>
      </div>
    </div>
  );
}
