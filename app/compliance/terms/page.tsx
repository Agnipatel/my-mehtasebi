import React from 'react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12 border-b border-slate-200 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms and Conditions of Research Analyst Services</h1>
        <p className="text-lg text-black leading-relaxed">
          <strong>Ankit Dinesh Mehta</strong> ("Research Analyst" or "RA"), is a SEBI Registered Research Analyst bearing Registration No. <strong>INH000025577</strong>, enlisted with Research Analyst Administration and Supervisory Body (RAASB) - BSE Limited having its Enlistment No. as <strong>7060</strong>.
        </p>
        <p className="text-lg text-black mt-4 leading-relaxed">
          Pursuant to SEBI (Research Analysts) Regulations, 2014, applicable Guidelines, Master Circular and circulars issued thereunder, RA is hereby disclosing below Terms & Conditions and Undertakings:
        </p>
        <p className="text-lg text-black mt-4 leading-relaxed">
          This document outlines the mandatory terms and conditions governing the relationship between the client (as detailed in Schedule 1) and the Research Analyst (RA). By subscribing to or availing of research services provided by the RA, the client confirms their acceptance of these terms and conditions at their sole discretion.
        </p>
      </div>

      <div className="prose prose-lg  max-w-none text-black space-y-8">
        
        <section>
          <h2 className="text-2xl font-bold text-gold border-b border-slate-200 pb-2 mb-4">1. Acceptance of Research Services</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>The client confirms that he/she has elected to subscribe the research service of the RA at his/her sole discretion.</li>
            <li>The RA confirms that the research services rendered shall be in accordance with the applicable provisions as outlined in the SEBI (Research Analysts) Regulations, 2014 (RA Regulations).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gold border-b border-slate-200 pb-2 mb-4">2. Obligations on RA and Client</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Both the RA and the client shall be bound by SEBI Act, RA Regulations, and all the applicable regulations, rules, and notifications issued by SEBI or the Government of India, as may be in force from time to time.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gold border-b border-slate-200 pb-2 mb-4">3. Client Information and KYC Requirements</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>The client agrees to provide complete and accurate information as required by the RA for Know Your Customer (KYC) compliance, including any details as mandated by SEBI or RAASB from time to time.</li>
            <li>The RA will collect, store, upload and verify KYC records in accordance with SEBI guidelines through a KYC Registration Agency (KRA) as specified from time to time.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gold border-b border-slate-200 pb-2 mb-4">4. Standard Terms of Service</h2>
          <p className="font-semibold text-black">By subscribing to the research services, the client confirms the following:</p>
          <ol className="list-[lower-roman] pl-6 space-y-2 mb-6">
            <li>"I/We have read and understood the terms and conditions applicable to a research analyst as defined under regulation 2(1)(u) of the SEBI (Research Analyst) Regulations, 2014, including the fee structure."</li>
            <li>"I/We are subscribing to the research services for our own benefits and consumption, and any reliance placed on the research report provided by research analyst shall be as per our own judgement and assessment of the conclusions contained in the research report."</li>
            <li>
              "I/We understand that –
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Any investment made based on the recommendations in the research report are subject to market risk.</li>
                <li>Recommendations in the research report do not provide any assurance of returns.</li>
                <li>There is no recourse to claim any losses incurred on the investments made based on the recommendations in the research report"</li>
              </ul>
            </li>
          </ol>
          <p className="font-semibold text-black">By agreeing to render the research services, the RA declares the following:</p>
          <ol className="list-[lower-roman] pl-6 space-y-2">
            <li>
              It is duly registered with SEBI as an RA under the SEBI (Research Analysts) Regulations, 2014 and its registration details are –
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Registration number- INH000025577</li>
                <li>Registration date- March 17, 2026</li>
              </ul>
            </li>
            <li>It has registration and the qualifications required to render the research services as contemplated under the RA Regulations and the same are valid and subsisting;</li>
            <li>The services provided do not conflict with or violate any applicable law or agreement.</li>
            <li>The maximum fee charged by the RA is ₹1.51 lakhs per annum per family of clients.</li>
            <li>Recommendations provided by the RA do not provide any assurance of returns.</li>
            <li>RA is not engaged in any other professional or business activity that could compromise the independence or objectivity of their research services.</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gold border-b border-slate-200 pb-2 mb-4">5. Fees and Payment Terms</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>The client agrees to pay the fees for the research services as mutually agreed upon, along with applicable statutory charges. The Scope of service and fee details are enclosed as Annexure 1.</li>
            <li>The subscription fees shall be paid in advance, provided the advance amount is not more than that for a period one year only, as permitted by SEBI.</li>
            <li>Fees shall be payable by way of direct credit to the designated bank account/s through channels like Net Banking/Debit Card/NEFT/ RTGS/ IMPS/ UPI/ eNACH mandate/ any other acceptable mode as per the RA regulations. Payment may also be processed though payment gateway services opted by RA from time to time. The fees shall not be accepted in cash.</li>
            <li>An Option of payment through SEBI authorised ‘Centralised Fee Collection Mechanism (CeFCoM)’ is available with every investor. If client likes to opt for CeFCoM, an email request for the same may be sent to RA for processing of same.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gold border-b border-slate-200 pb-2 mb-4">6. Risk Factors</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Investments in securities carry inherent market risks, including potential loss of capital.</li>
            <li>Historical performance of recommendations is not indicative of future returns.</li>
            <li>The client must independently assess the suitability of investment decisions based on the research reports provided.</li>
            <li>Registration granted by SEBI/ BSE, and certification from NISM in no way guarantee performance of the RA (intermediary) or provide any assurance of returns to the clients.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gold border-b border-slate-200 pb-2 mb-4">7. Conflict of Interest</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>The RA shall comply with all the applicable regulations/ circulars/ directions as specified by SEBI from time to time in relation to disclosure and mitigation of any actual or potential conflicts of interest.</li>
            <li>Any actual or potential conflict of interest will be disclosed transparently to the client as and when identified. Disclosures with respect to material information of the RA is described in Annexure 2.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gold border-b border-slate-200 pb-2 mb-4">8. Termination of Services and Refunds</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>The RA reserves the right to suspend or terminate services in the event of suspension or cancellation of their SEBI registration.</li>
            <li>In case of cancellation of SEBI Registration, RA shall refund the pro-rata fees for the remaining subscription period to the client on suspension or termination of services.</li>
            <li>In case of Suspension of certificate of registration for more than 60 (sixty) days, RA shall refund the pro-rata fees for the remaining subscription period to the client on suspension or termination of services.</li>
            <li>Remaining subscription period shall be period from the effective date of cancellation/ suspension to end of the subscription period.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gold border-b border-slate-200 pb-2 mb-4">9. Grievance Redressal and Dispute Resolution</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Clients may escalate grievances related to deficiencies in services as mentioned below to the RA's designated person-
              <ul className="list-[circle] pl-6 mt-2 space-y-1">
                <li>Non-receipt of research report, or</li>
                <li>Missing pages or inability to download the entire report, or</li>
                <li>Any other deficiency in the research services provide by RA</li>
              </ul>
            </li>
            <li>
              Contact details of designated person for escalation of grievances are as below-
              <ul className="list-[circle] pl-6 mt-2 space-y-1">
                <li>Name- [Insert Name]</li>
                <li>Email- [Insert Contact Information]</li>
              </ul>
            </li>
            <li>RA shall redress grievances of the client in a timely and transparent manner.</li>
            <li>RA shall resolve grievances within seven business working days or as specified by SEBI under RA Regulations.</li>
            <li>
              In case you are not satisfied with our response you can lodge your grievance with SEBI at <a href="https://scores.sebi.gov.in/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">https://scores.sebi.gov.in/</a> or you may also write to any of the offices of SEBI. SCORES may be accessed thorough SCORES mobile application as well, same can be downloaded from below link:
              <br/>
              <a href="https://play.google.com/store/apps/details?id=com.ionicframework.sebi236330" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline break-all">https://play.google.com/store/apps/details?id=com.ionicframework.sebi236330</a>
            </li>
            <li>
              Disputes between the RA and the client may be resolved through arbitration or any other modes or mechanism as specified by SEBI from time to time.
              ODR Portal could be accessed, if unsatisfied with the response. Your attention is drawn to the SEBI circular no. SEBI/HO/OIAE/OIAE_IAD-1/P/CIR/2023/131 dated July 31, 2023, on “Online Resolution of Disputes in the Indian Securities Market”. A common Online Dispute Resolution Portal (“ODR Portal”) which harnesses conciliation and online arbitration for resolution of disputes arising in the Indian Securities Market has been established. ODR Portal can be accessed via the following link - <a href="https://smartodr.in/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">https://smartodr.in/</a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gold border-b border-slate-200 pb-2 mb-4">10. Mandatory Notices</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Clients are advised and requested to familiarize themselves with SEBI’s guidelines, including the Do’s and Don’ts while dealing with RAs, as specified in SEBI’s Master Circular No. SEBI/HO/MIRSD-POD-1/P/CIR/2024/49 dated May 21, 2024, or as updated by SEBI from time to time.
              Link to Master circular for reference- <a href="https://www.sebi.gov.in/sebi_data/attachdocs/may-2024/1716290553655.pdf" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline break-all">https://www.sebi.gov.in/sebi_data/attachdocs/may-2024/1716290553655.pdf</a>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gold border-b border-slate-200 pb-2 mb-4">11. Most Important Terms and Conditions (MITC)</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li>These terms and conditions, and consent thereon are for the research services provided by the Research Analyst (RA) and RA cannot execute/carry out any trade (purchase/sell transaction) on behalf of, the client. Thus, the clients are advised not to permit RA to execute any trade on their behalf.</li>
            <li>
              The fee charged by RA to the client will be subject to the maximum of amount prescribed by SEBI/ Research Analyst Administration and Supervisory Body (RAASB) from time to time (applicable only for Individual and HUF Clients).
              <div className="bg-slate-100 p-4 rounded-lg mt-2 text-sm">
                <strong>Note:</strong>
                <ol className="list-decimal pl-4 mt-2 space-y-1">
                  <li>The current fee limit is Rs 1,51,000/- per annum per family of client for all research services of the RA.</li>
                  <li>The fee limit does not include statutory charges.</li>
                  <li>The fee limits do not apply to a non-individual client / accredited investor.</li>
                </ol>
              </div>
            </li>
            <li>RA may charge fees in advance if agreed by the client. Such advance shall not exceed the period stipulated by SEBI; presently it is one year. In case of pre-mature termination of the RA services by either the client or the RA, the client shall be entitled to seek refund of proportionate fees only for unexpired period.</li>
            <li>Fees to RA may be paid by the client through any of the specified modes like cheque, online bank transfer, UPI, etc. Cash payment is not allowed. Optionally the client can make payments through Centralized Fee Collection Mechanism (CeFCoM) managed by BSE Limited (i.e. currently recognized RAASB).</li>
            <li>The RA is required to abide by the applicable regulations/ circulars/ directions specified by SEBI and RAASB from time to time in relation to disclosure and mitigation of any actual or potential conflict of interest. The RA will endeavor to promptly inform the client of any conflict of interest that may affect the services being rendered to the client.</li>
            <li>Any assured/guaranteed/fixed returns schemes or any other schemes of similar nature are prohibited by law. No scheme of this nature shall be offered to the client by the RA.</li>
            <li>The RA cannot guarantee returns, profits, accuracy, or risk-free investments from the use of the RA’s research services. All opinions, projections, estimates of the RA are based on the analysis of available data under certain assumptions as of the date of preparation/publication of research report.</li>
            <li>Any investment made based on recommendations in research reports are subject to market risks, and recommendations do not provide any assurance of returns. There is no recourse to claim any losses incurred on the investments made based on the investments made based on the recommendations in the research report. Any reliance placed on the research report provided by the RA shall be as per the client’s own judgement and assessment of the conclusions contained in the research report.</li>
            <li>The SEBI registration, Enlistment with RAASB, and NISM certification do not guarantee the performance of the RA or assure any returns to the client.</li>
            <li>
              For any grievances,
              <ul className="list-none mt-2 space-y-2">
                <li><strong>Step 1:</strong> The client should first contact the RA using the details on its website or following contact details.</li>
                <li><strong>Step 2:</strong> If the resolution is unsatisfactory, the client can also lodge grievances through SEBI’s SCORES platform at www.scores.sebi.gov.in</li>
                <li><strong>Step 3:</strong> The client may also consider the Online Dispute Resolution (ODR) through the Smart ODR portal at https://smartodr.in</li>
              </ul>
            </li>
            <li>Clients are required to keep contact details, including email id and mobile number/s updated with the RA at all times.</li>
            <li>The RA shall never ask for the client’s login credentials and OTPs for the client’s Trading Account Demat Account and Bank Account. Never share such information with anyone including RA.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gold border-b border-slate-200 pb-2 mb-4">12. Investor Charter</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>In regards of the latest SEBI circular SEBI/HO/MIRSD/MIRSD-PoD/P/CIR/2025/81 dated June 2, 2025, pertaining to the Revised Investor Charter Research Analysts (RAs), Investor Charter is attached as Annexure 3</li>
          </ul>
        </section>

        <div className="bg-slate-100 p-8 rounded-xl my-12 border border-slate-300">
          <h3 className="text-2xl font-bold text-center mb-6">Acknowledgment</h3>
          <p className="text-center mb-12">
            By availing of the research services, the client confirms their consent to the above terms and conditions and acknowledges their understanding of the rights and obligations outlined herein.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-end mt-16 px-8">
            <div className="text-center w-full md:w-auto mb-8 md:mb-0">
              <div className="border-b border-slate-500 w-48 mx-auto mb-2"></div>
              <p>For and on behalf of client-</p>
              <p>Signatures:</p>
            </div>
            <div className="text-center w-full md:w-auto">
              <div className="border-b border-slate-500 w-48 mx-auto mb-2"></div>
              <p>Authorised Signatory</p>
            </div>
          </div>
        </div>

        {/* Schedule 1 */}
        <section className="bg-white border border-slate-200 p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-bold text-gold text-center mb-8">Schedule 1<br/>DETAILS OF CLIENT</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="py-4 font-semibold w-1/3">Full Name</td>
                  <td className="py-4"></td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-4 font-semibold">Entity Type</td>
                  <td className="py-4">Individual/ Partnership Firm/ LLP/ Company/ HUF/ Trust</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-4 font-semibold">Authorised Signatory (in case of non-individual)</td>
                  <td className="py-4"></td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-4 font-semibold">Residential/ Registered Address</td>
                  <td className="py-4"></td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-4 font-semibold">Email ID</td>
                  <td className="py-4"></td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-4 font-semibold">Mobile No.</td>
                  <td className="py-4"></td>
                </tr>
                <tr>
                  <td className="py-4 font-semibold">PAN</td>
                  <td className="py-4"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gold text-center mt-16 mb-8">DETAILS OF RESEARCH ANALYST</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-slate-200">
                  <td className="py-4 font-semibold w-1/3">Full Name</td>
                  <td className="py-4">Ankit Dinesh Mehta</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-4 font-semibold">Entity Type</td>
                  <td className="py-4">Individual</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-4 font-semibold">Registration No.</td>
                  <td className="py-4">INH000025577</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-4 font-semibold">BSE Enlistment No.</td>
                  <td className="py-4">7060</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-4 font-semibold">Trade Name</td>
                  <td className="py-4">Ankit Dinesh Mehta</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-4 font-semibold">Registered Address</td>
                  <td className="py-4">Shop No S-11 Plot No 9 Sector No 17 Sanpada 400705, Mumbai, Maharashtra, 400705</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="py-4 font-semibold">Contact No.</td>
                  <td className="py-4">9619889777</td>
                </tr>
                <tr>
                  <td className="py-4 font-semibold">Email</td>
                  <td className="py-4">ankitmehta99@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Annexure 1 */}
        <section className="bg-white border border-slate-200 p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-bold text-gold text-center mb-8">Annexure 1<br/>Scope of Service and Fee Schedule</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-2">Scope of Service</h3>
              <p className="border-b border-slate-200 pb-8"></p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Validity of Service</h3>
              <p className="border-b border-slate-200 pb-8"></p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Fee Schedule</h3>
              <p className="border-b border-slate-200 pb-16"></p>
            </div>
          </div>
        </section>

        {/* Annexure 2 */}
        <section className="bg-white border border-slate-200 p-8 rounded-xl mb-12">
          <h2 className="text-2xl font-bold text-gold text-center mb-8">Annexure 2<br/>Disclosure Document</h2>
          <p className="mb-4">The particulars given in this Disclosure Document have been prepared in accordance with SEBI (Research Analyst) Regulations, 2014.</p>
          <p className="mb-6">The purpose of the Document is to provide essential information about the Research and recommendation Services in a manner to assist and enable the perspective client/client in making an informed decision for engaging in Research and recommendation services before investing.</p>
          <p className="mb-8 font-semibold">For the purpose of this Disclosure Document, Research Analyst is Ankit Dinesh Mehta, (hereinafter referred as “Research Analyst”)</p>

          <h3 className="text-xl font-bold text-gold mb-4">A. Descriptions about "Research Analyst"</h3>
          
          <div className="space-y-6 pl-4">
            <div>
              <h4 className="font-bold text-lg mb-2">• History, Present business and Background</h4>
              <p className="mb-2">Research Analyst is registered with SEBI as Research Analyst with Registration No. INH000025577, BSE Membership No.7060. The firm got its registration on March 17, 2026 and is engaged in research and recommendation Services.</p>
              <p>The focus of Research Analyst is to provide research and recommendations services to the clients. Analyst aligns its interests with those of the client and seeks to provide the best suited services.</p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-2">• Terms and conditions of Research and Recommendation Services</h4>
              <p>Terms and conditions of Research and Recommendation Services are detailed above. Please refer to the same for details.</p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">• Disciplinary history</h4>
              <ol className="list-[lower-roman] pl-6 space-y-2">
                <li>No penalties have been issued by SEBI under the SEBI Act or Regulations made there under against the Research Analyst relating to Research Analyst services.</li>
                <li>There are no pending material litigations or legal proceedings, findings of inspections or investigations for which action has been taken or initiated by any regulatory authority against the Research Analyst or its employees.</li>
              </ol>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-2">• Details of its associates</h4>
              <p>No associates</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-gold mt-10 mb-4">B. Disclosures with respect to Research and Recommendations Services</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li>Research Analyst or his associate or his relative may have financial interest or actual / beneficial ownership of one per cent or more in the securities recommended in its personal portfolio at the end of the month immediately preceding the date of publication of the research report or date of the public appearance. Details of the same may be referred through the disclosures made at the time of advice.</li>
            <li>There are no actual or potential conflicts of interest arising from any connection of Research Analyst or his associate or his relative to or association with any issuer of products/ securities, including any material information or facts that might compromise its objectivity or independence in the carrying on of Research Analyst services. Such conflict of interest shall be disclosed to the client as and when they arise.</li>
            <li>Research Analyst or its associates have not received any compensation from the subject company in past 12 months.</li>
            <li>Research Analyst or its employee or its associates have not managed or co-managed the public offering of Subject Company in past 12 months.</li>
            <li>Research Analyst or its associates have not received any compensation for investment banking or merchant banking of brokerage services from the subject company in past 12 months.</li>
            <li>Research Analyst or its employee or its associates have not received any compensation or other benefits from the subject company or third party in connection with the research report or research recommendations.</li>
            <li>Research Analyst or its associates have not received any compensation for products or services from the subject company in past 12 months.</li>
            <li>Research Analyst or its associates have not received any compensation or other benefits from the Subject Company or 3rd party in connection with the research report/ recommendation.</li>
            <li>The subject company was not a client of Research Analyst or its associates during twelve months preceding the date of distribution of the research report and recommendation services provided.</li>
            <li>Research Analysts or its associates has not served as an officer, director or employee of the subject company.</li>
            <li>Research Analysts has not been engaged in market making activity of the subject company</li>
            <li>The research analyst is not using/ using artificial intelligence tools for preparation of the research report.</li>
          </ul>
        </section>

        {/* Annexure 3 */}
        <section className="bg-white border border-slate-200 p-8 rounded-xl">
          <h2 className="text-2xl font-bold text-gold text-center mb-8">Annexure 3<br/>Investor Charter</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gold mb-4">A. Vision and Mission Statements for investors</h3>
              <div className="pl-4 space-y-4">
                <div>
                  <h4 className="font-bold mb-1">• Vision</h4>
                  <p>Invest with knowledge & safety.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-1">• Mission</h4>
                  <p>Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness.</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gold mb-4">B. Details of business transacted by the Research Analyst with respect to the investors</h3>
              <ul className="list-disc pl-8 space-y-2">
                <li>To publish research report based on the research activities of the RA</li>
                <li>To provide an independent unbiased view on securities.</li>
                <li>To offer unbiased recommendation, disclosing the financial interests in recommended securities.</li>
                <li>To provide research recommendation, based on analysis of publicly available information and known observations.</li>
                <li>To conduct audit annually</li>
                <li>To ensure that all advertisements are in adherence to the provisions of the Advertisement Code for Research Analysts.</li>
                <li>To maintain records of interactions, with all clients including prospective clients (prior to onboarding), where any conversation related to the research services has taken place.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gold mb-4">C. Details of services provided to investors (No Indicative Timelines)</h3>
              <ul className="list-disc pl-8 space-y-4">
                <li>
                  <strong>Onboarding of Clients</strong>
                  <ul className="list-[circle] pl-6 mt-2 space-y-1">
                    <li>Sharing of terms and conditions of research services</li>
                    <li>Completing KYC of fee paying clients</li>
                  </ul>
                </li>
                <li>
                  <strong>Disclosure to Clients:</strong>
                  <ul className="list-[circle] pl-6 mt-2 space-y-1">
                    <li>To disclose, information that is material for the client to make an informed decision, including details of its business activity, disciplinary history, the terms and conditions of research services, details of associates, risks and conflicts of interest, if any</li>
                    <li>To disclose the extent of use of Artificial Intelligence tools in providing research services</li>
                    <li>To disclose, while distributing a third party research report, any material conflict of interest of such third party research provider or provide web address that directs a recipient to the relevant disclosures</li>
                    <li>To disclose any conflict of interest of the activities of providing research services with other activities of the research analyst.</li>
                  </ul>
                </li>
                <li>To distribute research reports and recommendations to the clients without discrimination.</li>
                <li>To maintain confidentiality w.r.t publication of the research report until made available in the public domain.</li>
                <li>To respect data privacy rights of clients and take measures to protect unauthorized use of their confidential information</li>
                <li>To disclose the timelines for the services provided by the research analyst to clients and ensure adherence to the said timelines</li>
                <li>To provide clear guidance and adequate caution notice to clients when providing recommendations for dealing in complex and high-risk financial products/services</li>
                <li>To treat all clients with honesty and integrity</li>
                <li>To ensure confidentiality of information shared by clients unless such information is required to be provided in furtherance of discharging legal obligations or a client has provided specific consent to share such information</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gold mb-4">D. Details of grievance redressal mechanism and how to access it</h3>
              
              <h4 className="font-bold mb-2">1. Investor can lodge complaint/grievance against Research Analyst in the following ways:</h4>
              <p className="font-medium mt-4 mb-2 underline">Mode of filing the complaint with research analyst</p>
              <p>In case of any grievance / complaint, an investor may approach the concerned Research Analyst who shall strive to redress the grievance immediately, but not later than 21 days of the receipt of the grievance.</p>
              
              <p className="font-medium mt-4 mb-2 underline">Mode of filing the complaint on SCORES or with Research Analyst Administration and Supervisory Body (RAASB)</p>
              <p><strong>i. SCORES 2.0</strong> (a web based centralized grievance redressal system of SEBI for facilitating effective grievance redressal in time-bound manner) (<a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">https://scores.sebi.gov.in</a>)</p>
              
              <p className="mt-4 font-medium">Two level review for complaint/grievance against Research Analyst:</p>
              <ul className="list-disc pl-8 mb-4">
                <li>First review done by designated body (RAASB)</li>
                <li>Second review done by SEBI</li>
              </ul>
              
              <p><strong>ii. Email to designated email ID of RAASB</strong></p>
              
              <h4 className="font-bold mt-8 mb-2">2. Resolution through ODR / Physical complaints</h4>
              <p>If the Investor is not satisfied with the resolution provided by the Market Participants, then the Investor has the option to file the complaint/ grievance on SMARTODR platform for its resolution through online conciliation or arbitration.</p>
              <p className="mt-4">With regard to physical complaints, investors may send their complaints to:<br/>Office of Investor Assistance and Education, Securities and Exchange Board of India, SEBI Bhavan, Plot No. C4-A, ‘G’ Block, Bandra-Kurla Complex, Bandra (E), Mumbai - 400 051</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gold mb-4">E. Rights of investors</h3>
              <ul className="list-disc pl-8 space-y-2">
                <li>Right to Privacy and Confidentiality</li>
                <li>Right to Transparent Practices</li>
                <li>Right to fair and Equitable Treatment</li>
                <li>Right to Adequate Information</li>
                <li>
                  Right to Initial and Continuing Disclosure
                  <ul className="list-[circle] pl-6 mt-1"><li>Right to receive information about all the statutory and regulatory disclosures</li></ul>
                </li>
                <li>Right to Fair & True Advertisement</li>
                <li>Right to Awareness about Service Parameters and Turnaround Times</li>
                <li>Right to be informed of the timelines for each service</li>
                <li>Right to be Heard and Satisfactory Grievance Redressal</li>
                <li>Right to have timely redressal</li>
                <li>Right to Exit from Financial product or service in accordance with the terms and conditions agreed with the research analyst</li>
                <li>Right to receive clear guidance and caution notice when dealing in Complex and High-Risk Financial Products and Services</li>
                <li>
                  Additional Rights to vulnerable consumers
                  <ul className="list-[circle] pl-6 mt-1"><li>Right to get access to services in a suitable manner even if differently abled</li></ul>
                </li>
                <li>Right to provide feedback on the financial products and services used</li>
                <li>Right against coercive, unfair, and one-sided clauses in financial agreements</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gold mb-4">F. Expectations from the investors (Responsibilities of investors)</h3>
              
              <h4 className="font-bold mb-2 mt-4">• Do's</h4>
              <ol className="list-[upper-roman] pl-8 space-y-2 mb-6">
                <li>Always deal with SEBI registered Research Analyst.</li>
                <li>Ensure that the Research Analyst has a valid registration certificate.</li>
                <li>Check for SEBI registration number.</li>
                <li>Please refer to the list of all SEBI registered Research Analyst which is available on SEBI website in the following link: <a href="https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline break-all">https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14</a></li>
                <li>Always pay attention towards disclosures made in the research reports before investing.</li>
                <li>Pay your Research Analyst through banking channels only and maintain duly signed receipts mentioning the details of your payments. You may make payment of fees through Centralized Fee Collection Mechanism (CeFCoM) of RAASB if research analyst has opted for the mechanism. (Applicable for fee paying clients only)</li>
                <li>Before buying/ selling securities or applying in public offer, check for the research recommendation provided by your Research Analyst.</li>
                <li>Ask all relevant questions and clear your doubts with your Research Analyst before acting on recommendation.</li>
                <li>Seek clarifications and guidance on research recommendations from your Research Analyst, especially if it involves complex and high risk financial products and services.</li>
                <li>Always be aware that you have the right to stop availing the service of a Research Analyst as per the terms of service agreed between you and your Research Analyst.</li>
                <li>Always be aware that you have the right to provide feedback to your Research Analyst in respect of the services received.</li>
                <li>Always be aware that you will not be bound by any clause, prescribed by the research analyst, which is contravening any regulatory provisions.</li>
                <li>Inform SEBI about Research Analyst offering assured or guaranteed returns.</li>
              </ol>

              <h4 className="font-bold mb-2">• Don'ts</h4>
              <ol className="list-[upper-roman] pl-8 space-y-2">
                <li>Do not provide funds for investment to the Research Analyst.</li>
                <li>Don't fall prey to luring advertisements or market rumors.</li>
                <li>Do not get attracted to limited period discount or other incentive, gifts, etc. offered by Research Analyst.</li>
                <li>Do not share login credential and password of your trading, de-mat or bank accounts with the Research Analyst.</li>
              </ol>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}