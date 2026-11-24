import Link from "next/link";
import Image from "next/image";
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
            <div className="flex items-center gap-3.5 mb-4">
              <div className="relative w-12 h-12 rounded-2xl overflow-hidden bg-white p-1 border border-white/20 shadow-md flex items-center justify-center shrink-0">
                <Image
                  src="/media/yashin-logo.png"
                  alt="Yashin Facilities Management FMS Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white uppercase leading-none">
                  Yashin Facilities
                </span>
                <span className="text-[10px] text-[#d8f36a] font-bold tracking-wider uppercase mt-1">
                  Management & Services W.L.L.
                </span>
              </div>
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
            <h4 className="text-sm font-bold text-white mb-4">Core Trades</h4>
            <ul className="space-y-3 text-xs font-medium text-[#ddede7]/70">
              <li>MEP Engineering</li>
              <li>Commercial Cleaning</li>
              <li>Fire Protection AMC</li>
              <li>Gypsum Fit-outs</li>
              <li>Manpower Supply</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white mb-4">Doha Headquarters</h4>
            <ul className="space-y-3 text-xs font-medium text-[#ddede7]/70">
              <li>P.O. Box: 6288, Doha, Qatar</li>
              <li>Tel: +974 7771 5332</li>
              <li>Tel: +974 7776 2177</li>
              <li>Email: somuns713@gmail.com</li>
              <li>Managing Director: Md. Somun Abdul</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#ddede7]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#ddede7]/60 gap-4">
          <p>© 2026 Yashin Facilities Management and Services W.L.L. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span>Doha, State of Qatar</span>
            <span>•</span>
            <span>C.R. No: 191809</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
