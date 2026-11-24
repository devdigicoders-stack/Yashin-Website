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

      {/* Hero Banner with Page 3 Doha West Bay Night Skyline */}
      <section className="relative py-24 sm:py-32 bg-[#163b35] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/media/doha-night-skyline.png"
            alt="Page 3 Brochure - Doha West Bay Night Skyline"
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

      {/* SECTION 1: About Us Narrative with Page 2 Handshake Banner */}
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

            {/* Visual Spotlight: Page 2 Handshake & Page 4 Digital Business Touch */}
            <div className="lg:col-span-5 space-y-6">
              <RevealOnScroll direction="right" delay={0.1}>
                <div className="relative h-64 rounded-3xl overflow-hidden border border-[#163b35]/10 shadow-lg group bg-[#0d2723]">
                  <Image
                    src="/media/handshake-banner.png"
                    alt="Brochure Page 2 - Corporate Welcome Handshake"
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
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-[#163b35]/15 bg-white">
                    <Image
                      src="/media/digital-business-touch.png"
                      alt="Brochure Page 4 - Digital Business Technology Touch"
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#163b35]">Dynamic Management (Page 4)</h4>
                    <p className="text-xs text-[#5e6b66] mt-0.5">Creating an environment where every worker feels involved and committed to client success.</p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: Leadership with Page 2 Exact Portraits */}
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
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-[#163b35]/10 shadow-md bg-[#ddede7]">
                  <Image
                    src="/media/md-somun-abdul.png"
                    alt="Md. Somun Abdul - Managing Director (Page 2)"
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
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-[#163b35]/10 shadow-md bg-[#ddede7]">
                  <Image
                    src="/media/omar-faruk.png"
                    alt="Omar Faruk - Operational Supervisor (Page 2)"
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

      {/* SECTION 3: Field Team & Site Manpower Showcase using Page 11 Real Project Photos */}
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

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <RevealOnScroll direction="right" delay={0.1}>
                <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden border border-[#163b35]/10 shadow-lg group bg-white">
                  <Image
                    src="/media/site-safety-toolbox-1.png"
                    alt="Page 11 - Site Safety Toolbox Briefing 1"
                    fill
                    sizes="(max-width: 1024px) 50vw, 280px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#163b35]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white text-[11px] font-bold">
                    Toolbox Safety Meeting (Page 11)
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll direction="right" delay={0.2}>
                <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden border border-[#163b35]/10 shadow-lg group bg-white">
                  <Image
                    src="/media/overhead-mep-crew.png"
                    alt="Page 11 - Overhead MEP Ducting Crew on Scaffolding"
                    fill
                    sizes="(max-width: 1024px) 50vw, 280px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#163b35]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-white text-[11px] font-bold">
                    Overhead MEP Crew (Page 11)
                  </div>
                </div>
              </RevealOnScroll>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: Page 5 Core Pillars with Authentic Brochure Imagery */}
      <section className="py-20 bg-[#163b35] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <RevealOnScroll direction="up">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold text-[#d8f36a] uppercase tracking-wider">Foundational Principles (Page 5)</span>
              <h2 className="text-3xl sm:text-4xl font-black mt-2">
                Our Objective, Values & Integrity
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RevealOnScroll direction="up" delay={0.05}>
              <div className="rounded-3xl bg-[#0d2723] border border-[#ddede7]/10 h-full flex flex-col justify-between overflow-hidden">
                <div className="relative h-44 w-full overflow-hidden bg-[#163b35]">
                  <Image
                    src="/media/objective-tablet.png"
                    alt="Page 5 - Objective Water Splash Tablet"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-full bg-[#d8f36a] text-[#163b35] flex items-center justify-center font-black">
                      <Target className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-white mb-2">Our Objective</h3>
                  <p className="text-xs text-[#ddede7]/70 leading-relaxed mb-4">
                    Striving to achieve excellence in facility and MEP services across Doha, Qatar through 
                    creativity, responsiveness, and uncompromising quality standards.
                  </p>
                  <div className="pt-3 border-t border-[#ddede7]/10 text-[11px] text-[#d8f36a] font-semibold uppercase">
                    Brochure Page 5
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.15}>
              <div className="rounded-3xl bg-[#0d2723] border border-[#ddede7]/10 h-full flex flex-col justify-between overflow-hidden">
                <div className="relative h-44 w-full overflow-hidden bg-[#163b35]">
                  <Image
                    src="/media/eco-sustainability.png"
                    alt="Page 5 - Value Eco Tree in Hand"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-full bg-[#d8f36a] text-[#163b35] flex items-center justify-center font-black">
                      <Compass className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-white mb-2">Corporate Values</h3>
                  <p className="text-xs text-[#ddede7]/70 leading-relaxed mb-4">
                    Embracing modern engineering approaches and flexible teamwork that guide day-to-day 
                    decisions and provide a common language to communicate through performance.
                  </p>
                  <div className="pt-3 border-t border-[#ddede7]/10 text-[11px] text-[#d8f36a] font-semibold uppercase">
                    Brochure Page 5
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.25}>
              <div className="rounded-3xl bg-[#0d2723] border border-[#ddede7]/10 h-full flex flex-col justify-between overflow-hidden">
                <div className="relative h-44 w-full overflow-hidden bg-[#163b35]">
                  <Image
                    src="/media/integrity-pledge.png"
                    alt="Page 5 - Integrity Pledge Hand Over Heart"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-full bg-[#d8f36a] text-[#163b35] flex items-center justify-center font-black">
                      <Shield className="w-5 h-5" />
                    </div>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-white mb-2">Integrity First</h3>
                  <p className="text-xs text-[#ddede7]/70 leading-relaxed mb-4">
                    Reaching the right decisions faster with absolute transparency in actions and motives. 
                    Living by "Walk the talk" and fostering true comradeship & brotherhood.
                  </p>
                  <div className="pt-3 border-t border-[#ddede7]/10 text-[11px] text-[#d8f36a] font-semibold uppercase">
                    Brochure Page 5
                  </div>
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
