import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import { 
  Target, 
  Compass, 
  Shield, 
  CheckCircle,
  Award,
  Users,
  Building,
  CheckCircle2
} from "lucide-react";

export const metadata = {
  title: "About Us | Yashin Facilities Management W.L.L. Qatar",
  description: "Detailed corporate profile, history since 2014, vision, mission, and leadership of Yashin Facilities Management in Doha, Qatar.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f7f8f5]">
      <Navbar />

      {/* Hero Banner with Skyline Image */}
      <section className="relative py-24 sm:py-32 bg-[#163b35] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/media/about-banner.png"
            alt="Doha Skyline"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 z-10">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl">
              <span className="px-3.5 py-1.5 rounded-full bg-[#ddede7]/20 text-[#d8f36a] text-xs font-semibold uppercase tracking-wider mb-4 inline-block">
                Corporate Profile • Doha, Qatar
              </span>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6">
                About Yashin Facilities Management
              </h1>
              <p className="text-base sm:text-lg text-[#ddede7]/80 leading-relaxed font-normal">
                Founded and established in Doha, Qatar in 2014, driven by the increasing trend 
                in construction activities in the country and dedicated to full-time world-class service.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 1: About Us Narrative with Executive Partnership Visual */}
      <section className="py-20 bg-white border-b border-[#163b35]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <RevealOnScroll direction="left">
                <span className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider">Company Background</span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#163b35] mt-2 mb-6">
                  Experienced, Dedicated, & Inspired by Qatar's Growth
                </h2>
                <div className="space-y-4 text-sm text-[#5e6b66] leading-relaxed font-normal">
                  <p>
                    <strong>Yashin Facilities Management and Hospitality & Cleaning Services W.L.L.</strong> was 
                    founded and established in Doha, Qatar by an experienced and dedicated leadership, inspired by the 
                    increasing trend in construction activities in the country.
                  </p>
                  <p>
                    Yashin Facilities Management has focused its collective efforts to provide full-time, world-class, 
                    and professional services across a diverse range of medium and private projects, industrial and 
                    commercial structures, condominiums, hotels, and institutional facilities; with interior decoration, 
                    supply of manpower, and maintenance as the company's known strong points.
                  </p>
                  <p>
                    Yashin Facilities Management has been exposed, and apparently excelled, in architectural design, and 
                    general construction Mechanical, Electrical & Plumbing (MEP) for over years. The ingenuity and effective 
                    approach on doing things have earned high respect and trust from clients across Qatar.
                  </p>
                </div>
              </RevealOnScroll>
            </div>

            {/* Visual Spotlight: Partnership Image & Technology Interface */}
            <div className="lg:col-span-5 space-y-6">
              <RevealOnScroll direction="right" delay={0.1}>
                <div className="relative h-64 rounded-3xl overflow-hidden border border-[#163b35]/10 shadow-lg group">
                  <Image
                    src="/media/Gemini_Generated_Image_28mi0w28mi0w28mi.png"
                    alt="Corporate Partnership and Agreement"
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#163b35]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-bold">
                    Committed to Long-Term Corporate Partnerships in Doha
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll direction="right" delay={0.2}>
                <div className="p-6 rounded-3xl bg-[#f7f8f5] border border-[#163b35]/8 flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-[#163b35]/15">
                    <Image
                      src="/media/introduction.png"
                      alt="Smart Facility Technology Display"
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#163b35]">Smart Facility Integration</h4>
                    <p className="text-xs text-[#5e6b66] mt-0.5">Automated schedules, predictive MEP monitoring, and continuous on-site logging.</p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: Leadership with Real Portraits */}
      <section className="py-20 bg-[#f7f8f5] border-b border-[#163b35]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <RevealOnScroll direction="up">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider">Corporate Leadership</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#163b35] mt-2">
                Executive Leadership & Operational Direction
              </h2>
              <p className="mt-2 text-sm text-[#5e6b66]">
                Our management team brings decades of direct contracting, trade compliance, and project engineering leadership across Doha.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RevealOnScroll direction="up" delay={0.1}>
              <div className="p-8 rounded-3xl bg-white border border-[#163b35]/8 shadow-sm hover:shadow-xl hover:border-[#163b35]/25 transition-all duration-300 flex flex-col sm:flex-row items-center gap-6 group">
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-[#163b35]/10 shadow-md">
                  <Image
                    src="/media/aboutus.png"
                    alt="Md. Somun Abdul - Managing Director"
                    fill
                    sizes="112px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#163b35] px-3 py-1 rounded-full bg-[#ddede7] uppercase">
                    Managing Director
                  </span>
                  <h3 className="text-2xl font-black text-[#163b35] mt-3">Md. Somun Abdul</h3>
                  <p className="text-xs text-[#5e6b66] leading-relaxed mt-2">
                    Leads corporate strategy, statutory Qatar C.R. operations, high-level client partnerships, and company-wide technical quality assurance.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.2}>
              <div className="p-8 rounded-3xl bg-white border border-[#163b35]/8 shadow-sm hover:shadow-xl hover:border-[#163b35]/25 transition-all duration-300 flex flex-col sm:flex-row items-center gap-6 group">
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-[#163b35]/10 shadow-md">
                  <Image
                    src="/media/aboutus (2).png"
                    alt="Omar Faruk - Operational Supervisor"
                    fill
                    sizes="112px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#163b35] px-3 py-1 rounded-full bg-[#ddede7] uppercase">
                    Operational Supervisor
                  </span>
                  <h3 className="text-2xl font-black text-[#163b35] mt-3">Omar Faruk</h3>
                  <p className="text-xs text-[#5e6b66] leading-relaxed mt-2">
                    Supervises active field sites across Doha, manages daily trade crew deployment, toolbox talks, and ensures zero QHSE compromise.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 3: Field Team & Site Manpower Showcase */}
      <section className="py-20 bg-white border-b border-[#163b35]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <RevealOnScroll direction="left">
                <span className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider">Certified Qatar Workforce</span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#163b35] mt-2 mb-6">
                  Disciplined Manpower & On-Site Safety Briefings
                </h2>
                <p className="text-sm text-[#5e6b66] leading-relaxed mb-6">
                  Every project executed by Yashin Facilities begins with a comprehensive safety briefing. 
                  Our workforce of over 100+ certified electricians, plumbers, carpenters, and civil craftsmen 
                  operate with strict adherence to Qatar Labour and Construction Safety regulations.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#f7f8f5] border border-[#163b35]/8">
                    <p className="text-2xl font-black text-[#163b35]">100%</p>
                    <p className="text-xs text-[#5e6b66] mt-1">PPE & Safety Compliance</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#f7f8f5] border border-[#163b35]/8">
                    <p className="text-2xl font-black text-[#163b35]">24/7</p>
                    <p className="text-xs text-[#5e6b66] mt-1">Emergency Maintenance</p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-6">
              <RevealOnScroll direction="right">
                <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-[#163b35]/10 shadow-xl group">
                  <Image
                    src="/media/Gemini_Generated_Image_1r8fmb1r8fmb1r8f.png"
                    alt="Workforce site safety toolbox briefing in Qatar"
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#163b35]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-xs font-bold text-[#d8f36a] uppercase">Active Field Coordination</p>
                    <p className="text-sm font-semibold">Morning Toolbox Meeting & Safety Standards Briefing</p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: Core Pillars & Vision */}
      <section className="py-20 bg-[#163b35] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <RevealOnScroll direction="up">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold text-[#d8f36a] uppercase tracking-wider">Foundational Principles</span>
              <h2 className="text-3xl sm:text-4xl font-black mt-2">
                Our Mission, Values & Operational Standards
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RevealOnScroll direction="up" delay={0.05}>
              <div className="p-8 rounded-3xl bg-[#0d2723] border border-[#ddede7]/10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#d8f36a] text-[#163b35] flex items-center justify-center font-black mb-6">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Our Mission</h3>
                  <p className="text-xs text-[#ddede7]/70 leading-relaxed">
                    To deliver premier technical MEP maintenance, cleaning, and facilities contracting services in Qatar 
                    with speed, unyielding safety standards, and transparent collaboration.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#ddede7]/10 text-[11px] text-[#d8f36a] font-semibold uppercase">
                  Service Quality
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.15}>
              <div className="p-8 rounded-3xl bg-[#0d2723] border border-[#ddede7]/10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#d8f36a] text-[#163b35] flex items-center justify-center font-black mb-6">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Our Vision</h3>
                  <p className="text-xs text-[#ddede7]/70 leading-relaxed">
                    To be the top-tier facilities management and engineering partner recognized throughout the State of Qatar 
                    for elevating workplace standards and residential hygiene.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#ddede7]/10 text-[11px] text-[#d8f36a] font-semibold uppercase">
                  Forward Growth
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.25}>
              <div className="p-8 rounded-3xl bg-[#0d2723] border border-[#ddede7]/10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#d8f36a] text-[#163b35] flex items-center justify-center font-black mb-6">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">QHSE Compliance</h3>
                  <p className="text-xs text-[#ddede7]/70 leading-relaxed">
                    Quality, Health, Safety, and Environment are ingrained into every action. We operate under zero-tolerance 
                    for unsafe work conditions and maintain fully insured operations.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#ddede7]/10 text-[11px] text-[#d8f36a] font-semibold uppercase">
                  Safety First
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
