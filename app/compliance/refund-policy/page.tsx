export default function RefundPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 border-b pb-4">Refund & Cancellation Policy</h1>
      <div className="prose prose-slate max-w-none">
        
        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Cancellation</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-black">
          <li>Clients may cancel their subscription at any time by providing written notice (email) to our registered contact address.</li>
          <li>No breakage fee or penalty is charged for premature/early termination of a subscription, in line with SEBI norms.</li>
        </ul>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Refunds</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-black">
          <li>Where fees have been collected in advance and services are terminated before the end of the subscribed period, the unutilised/unexpired portion of the fee will be refunded on a pro-rata basis.</li>
          <li>Refunds, where applicable, will be processed within 7–14 working days to the original mode of payment.</li>
          <li>No refund of fees already earned/services already rendered for the elapsed subscription period will be made, except where required due to grievance resolution or regulatory direction.</li>
          <li>In case a grievance is pending against Mehta Insights, refund of fees will not be denied to the client, and such refund will not be linked to withdrawal of the client's complaint.</li>
        </ul>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">Non-Refundable Circumstances</h2>
        <ul className="list-disc pl-6 mb-6 space-y-2 text-black">
          <li>Statutory charges (such as GST) already remitted to authorities are non-refundable.</li>
          <li>Subscriptions cancelled due to violation of Terms & Conditions by the client may not be eligible for refund of the elapsed period.</li>
        </ul>

        <h2 className="text-xl font-bold mb-3 mt-8 text-black">How to Request a Refund/Cancellation</h2>
        <p className="mb-6 text-black leading-relaxed">
          Email your cancellation/refund request to <a href="mailto:contact@mehtainsights.com" className="text-black hover:underline">contact@mehtainsights.com</a> with your registered name, subscription plan, and payment reference. We will acknowledge your request within 2 working days.
        </p>

      </div>
    </div>
  );
}