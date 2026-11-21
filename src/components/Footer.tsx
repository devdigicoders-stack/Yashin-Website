import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#163b35] text-[#f7f8f5] border-t border-[#ddede7]/10">
      
      {/* Clevaro Exact Footer Banner: "Ready for a Cleaner Tomorrow?" */}
      <div className="border-b border-[#ddede7]/10 py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold text-[#d8f36a] uppercase tracking-wider mb-2 block">
              Qatar Facilities Management
            </span>
            <h3 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ready for a Cleaner Tomorrow?
            </h3>
            <p className="text-sm text-[#ddede7]/70 mt-2 max-w-lg">
              Serving residential, corporate, hotel, and industrial properties in Qatar since 2014.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#d8f36a] hover:bg-[#c8e658] text-[#163b35] font-bold text-sm tracking-tight transition-all shrink-0 hover:scale-105"
          >
            <span>Book an Inspection</span>
            <ArrowUpRight className="w-4 h-4 text-[#163b35]" />
          </Link>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-[#d8f36a] text-[#163b35] flex items-center justify-center font-black text-base">
                ✦
              </div>
              <span className="text-xl font-black tracking-tight text-white uppercase">
                Yashin Facilities
              </span>
            </div>
            <p className="text-sm text-[#ddede7]/70 leading-relaxed mb-6 max-w-sm font-normal">
              Comprehensive facilities management, electro-mechanical engineering (MEP), 
              fire protection, interior fit-outs, and commercial cleaning in Doha, Qatar.
            </p>
            <div className="text-xs font-bold text-[#d8f36a]">
              Commercial Registration (C.R. No): 191809
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white mb-4">Navigation</h4>
            <ul className="space-y-3 text-xs font-medium text-[#ddede7]/70">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold text-white mb-4">Key Divisions</h4>
            <ul className="space-y-3 text-xs font-medium text-[#ddede7]/70">
              <li>MEP & Substations</li>
              <li>Firefighting Systems</li>
              <li>Civil & Gypsum Works</li>
              <li>Commercial Cleaning</li>
              <li>Manpower Supply</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white mb-4">Qatar Office</h4>
            <div className="space-y-2 text-xs font-medium text-[#ddede7]/70">
              <p>P.O. Box: 6288, Doha – Qatar</p>
              <p>Tel: +974 7771 5332 / 7776 2177</p>
              <p>Email: somuns713@gmail.com</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#ddede7]/10 py-6 px-4 sm:px-8 text-xs text-[#ddede7]/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 font-medium">
          <span>© 2026 Yashin Facilities Management and Services W.L.L. All rights reserved.</span>
          <span>Doha, State of Qatar</span>
        </div>
      </div>

    </footer>
  );
}
