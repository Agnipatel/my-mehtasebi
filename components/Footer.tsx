import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-12 pb-8 mt-20 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <img src="/MINS LOGO.png" alt="Mehta Insights Logo" className="h-16 w-auto" />
            </Link>
            <p className="text-sm text-white">SEBI Registered Research Analyst<br />Reg. No. INH000025577</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white">
              <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li><Link href="/pricing" className="hover:text-gold transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Compliance</h3>
            <ul className="space-y-2 text-sm text-white">
              <li><Link href="/compliance/sebi-registration" className="hover:text-gold transition-colors">SEBI Registration</Link></li>
              <li><Link href="/compliance/disclosures" className="hover:text-gold transition-colors">Disclosures</Link></li>
              <li><Link href="/compliance/advertisement-disclosures" className="hover:text-gold transition-colors">Advertisement Disclosures</Link></li>
              <li><Link href="/compliance/recommendation-disclosures" className="hover:text-gold transition-colors">Recommendation Disclosures</Link></li>
              <li><Link href="/compliance/mandatory-disclosures" className="hover:text-gold transition-colors">Mandatory Disclosures</Link></li>
              <li><Link href="/compliance/investor-charter" className="hover:text-gold transition-colors">Investor Charter</Link></li>
              <li><Link href="/compliance/monthly-complaints" className="hover:text-gold transition-colors">Monthly Complaints</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Policies</h3>
            <ul className="space-y-2 text-sm text-white">
              <li><Link href="/compliance/terms" className="hover:text-gold transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/compliance/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
              <li><Link href="/compliance/refund-policy" className="hover:text-gold transition-colors">Refund Policy</Link></li>
              <li><Link href="/compliance/disclaimer" className="hover:text-gold transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 text-xs text-white">
          <p className="mb-4"><strong>Risk Disclaimer:</strong> Investments in the securities market are subject to market risks. Read all related documents carefully before investing. Registration granted by SEBI, enlistment as RA with BSE and certification from NISM in no way guarantee the performance of the intermediary or provide any assurance of returns to investors.</p>
          <p className="text-center">&copy; {new Date().getFullYear()} Mehta Insights. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}