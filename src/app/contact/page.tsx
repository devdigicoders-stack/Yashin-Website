import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { Phone, Mail, MapPin, ShieldCheck, Clock, CheckCircle2, UserCheck } from "lucide-react";

export const metadata = {
  title: "Contact Us & Direct Inquiries | Yashin Facilities Qatar",
  description: "Official Qatar commercial contact details, C.R. No: 191809, phone numbers, and location for Yashin Facilities Management W.L.L.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f7f8f5]">
      <Navbar />

      {/* Hero Banner with Page 19 Backcover Skyline */}
      <section className="relative py-20 sm:py-28 bg-[#163b35] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/media/backcover-skyline.png"
            alt="Page 19 Brochure - Doha Towers & West Bay Commercial Center"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 z-10">
          <div className="max-w-3xl">
            <span className="px-3.5 py-1.5 rounded-full bg-[#ddede7]/20 text-[#d8f36a] text-xs font-semibold uppercase tracking-wider mb-4 inline-block">
              State of Qatar • Commercial Registration: 191809
            </span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
              Contact Our Qatar Operations
            </h1>
            <p className="text-base sm:text-lg text-[#ddede7]/80 leading-relaxed font-normal">
              Whether you need rapid site inspection, annual facilities maintenance contracts (AMC), 
              or manpower mobilisation across Doha, reach out to our team directly.
            </p>
          </div>
        </div>
      </section>

      {/* Key Company Contact Cards (From Brochure Cover & Back Cover) */}
      <section className="py-14 bg-white border-b border-[#163b35]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-3xl bg-[#f7f8f5] border border-[#163b35]/10">
              <Phone className="w-6 h-6 text-[#163b35] mb-3" />
              <h4 className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider mb-1">Mobile / Hotline</h4>
              <p className="text-base font-bold text-[#163b35]">+974 7771 5332</p>
              <p className="text-sm font-semibold text-[#163b35]">+974 7776 2177</p>
            </div>

            <div className="p-6 rounded-3xl bg-[#f7f8f5] border border-[#163b35]/10">
              <Mail className="w-6 h-6 text-[#163b35] mb-3" />
              <h4 className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider mb-1">Official Email</h4>
              <p className="text-base font-bold text-[#163b35] break-all">somuns713@gmail.com</p>
              <p className="text-xs text-[#5e6b66] mt-1">Direct inquiries & tender documents</p>
            </div>

            <div className="p-6 rounded-3xl bg-[#f7f8f5] border border-[#163b35]/10">
              <MapPin className="w-6 h-6 text-[#163b35] mb-3" />
              <h4 className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider mb-1">P.O. Box & Location</h4>
              <p className="text-base font-bold text-[#163b35]">P.O. Box: 6288</p>
              <p className="text-xs text-[#5e6b66] mt-1">Doha, State of Qatar</p>
            </div>

            <div className="p-6 rounded-3xl bg-[#f7f8f5] border border-[#163b35]/10">
              <ShieldCheck className="w-6 h-6 text-[#163b35] mb-3" />
              <h4 className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider mb-1">Commercial License</h4>
              <p className="text-base font-bold text-[#163b35]">C.R. No: 191809</p>
              <p className="text-xs text-[#5e6b66] mt-1">Registered in State of Qatar</p>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership Contact Directives */}
      <section className="py-12 bg-[#f7f8f5] border-b border-[#163b35]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#163b35]/10 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-[#163b35]/10 bg-[#ddede7]">
                <Image
                  src="/media/md-somun-abdul.png"
                  alt="Md. Somun Abdul - Managing Director (Page 2)"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#163b35] bg-[#ddede7] px-3 py-1 rounded-full uppercase">
                  Managing Director
                </span>
                <h3 className="text-xl font-bold text-[#163b35] mt-2">Md. Somun Abdul</h3>
                <p className="text-xs text-[#5e6b66] mt-1 mb-3">Direct Executive Oversight & Strategic Contracts</p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#163b35]">
                  <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> +974 7771 5332</span>
                  <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> somuns713@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#163b35]/10 flex flex-col sm:flex-row items-center gap-6 shadow-sm">
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-[#163b35]/10 bg-[#ddede7]">
                <Image
                  src="/media/omar-faruk.png"
                  alt="Omar Faruk - Supervisor (Page 2)"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#163b35] bg-[#ddede7] px-3 py-1 rounded-full uppercase">
                  Operational Supervisor
                </span>
                <h3 className="text-xl font-bold text-[#163b35] mt-2">Omar Faruk</h3>
                <p className="text-xs text-[#5e6b66] mt-1 mb-3">Field Operations, Site Inspection & Manpower Deployment</p>
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#163b35]">
                  <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> +974 7776 2177</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> Doha Field Headquarters</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Interactive Contact Section */}
      <ContactSection />

      <Footer />
    </main>
  );
}
