import React from 'react';

export default function RecommendationDisclosuresPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 border-b border-slate-200 pb-6 text-gold">Disclosures with Recommendation</h1>
      
      <div className="prose prose-lg  max-w-none text-black space-y-10">
        
        {/* Contact Info Header */}
        <section className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm">
          <ul className="space-y-4 text-base md:text-lg">
            <li className="flex flex-col md:flex-row md:items-start border-b border-slate-200 pb-4">
              <span className="text-gold font-bold w-48 shrink-0">Name</span>
              <span className="font-semibold text-black">Ankit Dinesh Mehta</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-start border-b border-slate-200 pb-4">
              <span className="text-gold font-bold w-48 shrink-0">Registration</span>
              <span className="text-black">SEBI Registered Research Analyst Registration No. INH000025577</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-start border-b border-slate-200 pb-4">
              <span className="text-gold font-bold w-48 shrink-0">BSE Enlistment</span>
              <span className="text-black">7060</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-start border-b border-slate-200 pb-4">
              <span className="text-gold font-bold w-48 shrink-0">Registered Address</span>
              <span className="text-black">Shop No S-11 Plot No 9 Sector No 17 Sanpada 400705, Mumbai, Maharashtra, 400705</span>
            </li>
            <li className="flex flex-col md:flex-row md:items-start">
              <span className="text-gold font-bold w-48 shrink-0">Contact</span>
              <span className="text-black"><strong>No.:</strong> 9619889777 &nbsp;|&nbsp; <strong>Email Id:</strong> ankitmehta99@gmail.com</span>
            </li>
          </ul>
        </section>

        {/* Disclosures List */}
        <section className="bg-slate-100 border border-slate-200 p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-gold mb-6 border-b border-slate-300 pb-4">Declarations</h2>
          <ul className="space-y-4 pl-6 list-disc">
            <li>Research analyst or his associates or his relatives have no financial interest in the subject company.</li>
            <li>Research analyst or his associates or relatives, have no actual/beneficial ownership of one per cent or more securities of the subject company, at the end of the month immediately preceding the date of publication of the research report or date of the public appearance or research recommendation.</li>
            <li>Research analyst or his associate or relatives has no connection or association of any sort with any issuer of products/ securities recommended herein.</li>
            <li>Research analyst or his associate or his relative has no actual or potential conflicts of interest arising from any connection to or association with any issuer of products/ securities, including any material information or facts that might compromise his objectivity or independence in the carrying on of research and recommendations services.</li>
            <li>Research analyst or his associates has not received any kind of remuneration or consideration form the products/ securities recommended herein.</li>
            <li>Research analyst or his associates have not received any compensation from the subject company in past 12 months.</li>
            <li>Research analyst or his associates have not managed or co-managed the public offering of Subject Company in past 12 months.</li>
            <li>Research analyst or his associates have not received any compensation for investment banking or merchant banking of brokerage services from the subject company in past 12 months.</li>
            <li>Research analyst or his associates have received any compensation for products or services other than investment banking or merchant banking or brokerage services from the subject company in the past twelve months.</li>
            <li>Research analyst or his associates have not received any compensation or other benefits from the subject company or third party in connection with the research report or research recommendations.</li>
            <li>Research analyst or his associates have not received any compensation for products or services from the subject company in past 12 months.</li>
            <li>The subject company is or was not a client of Research analyst or his associates during twelve months preceding the date of distribution of the research report and recommendation services provided.</li>
            <li>Research Analysts or his associates has not served as an officer, director or employee of the subject company.</li>
            <li>Research Analysts has not been engaged in market making activity of the subject company.</li>
            <li>The research analyst has not used artificial intelligence tools for preparation of the research recommendation.</li>
          </ul>
        </section>

        {/* Signature */}
        <section className="text-center pt-8">
          <div className="w-64 border-b border-slate-600 mx-auto mb-4"></div>
          <p className="font-bold text-xl text-black">Ankit Dinesh Mehta</p>
          <p className="text-slate-700">SEBI Registered Research Analyst</p>
        </section>

        {/* Statutory Disclaimers */}
        <section className="pt-8 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-amber-500 mb-4">Statutory Disclaimers</h2>
          <div className="bg-slate-100 p-6 rounded-lg border-l-4 border-amber-500 italic text-black leading-relaxed">
            "Investment in securities market are subject to market risks. Read all the related documents carefully before investing. Registration granted by SEBI, Enlistment of BSE and certification from NISM in no way guarantee performance of the intermediary or provide any assurance of returns to investors"
          </div>
        </section>

      </div>
    </div>
  );
}
