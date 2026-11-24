import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import Image from "next/image";
import { Phone, Mail, MapPin, ShieldCheck, Clock, CheckCircle2, UserCheck } from "lucide-react";

export const metadata = {
  title: "Contact Us & Direct Inquiries | Yashin Facilities Qatar",
  description: "Official Qatar commercial contact details, C.R. No: 191809, phone numbers, and location for Yashin Facilities Management W.L.L.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f7f8f5]">
      <Navbar />

      {/* Hero Banner with Modern Commercial Complex Headquarters Background */}
      <section className="relative py-14 sm:py-18 bg-[#0e2722] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/Gemini_Generated_Image_izp3vsizp3vsizp3.png"
            alt="Modern Commercial Headquarters & Operations"
            fill
            priority
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#163b35]/95 via-[#163b35]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
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
            
            <div className="p-6 rounded-3xl bg-[#f7f8f5] border border-[#163b35]/10 hover:border-[#163b35]/30 hover:shadow-md transition-all">
              <Phone className="w-6 h-6 text-[#163b35] mb-3" />
              <h4 className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider mb-1">Mobile / Hotline</h4>
              <p className="text-base font-bold text-[#163b35]">+974 7771 5332</p>
              <p className="text-sm font-semibold text-[#163b35]">+974 7776 2177</p>
            </div>

            <div className="p-6 rounded-3xl bg-[#f7f8f5] border border-[#163b35]/10 hover:border-[#163b35]/30 hover:shadow-md transition-all">
              <Mail className="w-6 h-6 text-[#163b35] mb-3" />
              <h4 className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider mb-1">Official Email</h4>
              <p className="text-base font-bold text-[#163b35] break-all">somuns713@gmail.com</p>
              <p className="text-xs text-[#5e6b66] mt-1">Direct inquiries & tender documents</p>
            </div>

            <div className="p-6 rounded-3xl bg-[#f7f8f5] border border-[#163b35]/10 hover:border-[#163b35]/30 hover:shadow-md transition-all">
              <MapPin className="w-6 h-6 text-[#163b35] mb-3" />
              <h4 className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider mb-1">P.O. Box & Location</h4>
              <p className="text-base font-bold text-[#163b35]">P.O. Box: 6288</p>
              <p className="text-xs text-[#5e6b66] mt-1">Doha, State of Qatar</p>
            </div>

            <div className="p-6 rounded-3xl bg-[#f7f8f5] border border-[#163b35]/10 hover:border-[#163b35]/30 hover:shadow-md transition-all">
              <ShieldCheck className="w-6 h-6 text-[#163b35] mb-3" />
              <h4 className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider mb-1">C.R. Registration</h4>
              <p className="text-base font-bold text-[#163b35]">C.R. No: 191809</p>
              <p className="text-xs text-[#5e6b66] mt-1">Fully registered Qatari W.L.L.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Main Interactive Form */}
      <ContactSection />

      {/* Direct Leadership & Key Contact Persons with Real Photos */}
      <section className="py-12 sm:py-16 bg-white border-t border-[#163b35]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider">Executive Management</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#163b35] mt-2">
              Speak Directly with Leadership
            </h2>
            <p className="text-sm text-[#5e6b66] mt-2">
              For major contracting ventures, tenders, and multi-facility partnerships in Qatar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            <div className="p-8 rounded-3xl bg-[#f7f8f5] border border-[#163b35]/10 hover:border-[#163b35]/30 hover:shadow-lg transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 border-2 border-[#163b35]">
                  <Image
                    src="/media/aboutus.png"
                    alt="Md. Somun Abdul"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#163b35]">MD. SOMUN ABDUL</h4>
                  <p className="text-xs font-bold text-[#163b35] uppercase tracking-wider">Managing Director</p>
                </div>
              </div>
              <p className="text-xs text-[#5e6b66] leading-relaxed mb-4">
                Available for corporate consultations, joint ventures, and high-value tender agreements across Qatar.
              </p>
              <div className="pt-3 border-t border-[#163b35]/10 text-xs text-[#163b35] font-semibold">
                Phone: +974 7771 5332
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#f7f8f5] border border-[#163b35]/10 hover:border-[#163b35]/30 hover:shadow-lg transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 border-2 border-[#ddede7]">
                  <Image
                    src="/media/aboutus (2).png"
                    alt="Omar Faruk"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#163b35]">OMAR FARUK</h4>
                  <p className="text-xs font-bold text-[#163b35] uppercase tracking-wider">Operations Supervisor</p>
                </div>
              </div>
              <p className="text-xs text-[#5e6b66] leading-relaxed mb-4">
                On-site logistics coordinator, technical supervision, safety enforcement, and emergency callouts.
              </p>
              <div className="pt-3 border-t border-[#163b35]/10 text-xs text-[#163b35] font-semibold">
                Phone: +974 7776 2177
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
