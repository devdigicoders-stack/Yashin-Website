import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";
import { 
  Zap, 
  Droplet, 
  Flame, 
  Layers, 
  Paintbrush, 
  Check, 
  ArrowRight,
  CheckCircle2,
  Wrench,
  Radio,
  Shield
} from "lucide-react";

export const metadata = {
  title: "Services & Capabilities | Yashin Facilities Management W.L.L. Qatar",
  description: "Comprehensive MEP, Civil, Fire Safety, Cleaning, and Manpower solutions extracted directly from Yashin Facilities Management Qatar profile.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f7f8f5]">
      <Navbar />

      {/* Header Banner with Media Backdrop */}
      <section className="relative py-24 sm:py-32 bg-[#0e2722] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/Gemini_Generated_Image_if39cgif39cgif39.png"
            alt="Qatar Engineering Skyline"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#163b35]/90 via-[#163b35]/65 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl">
              <span className="px-3.5 py-1.5 rounded-full bg-[#ddede7]/20 text-[#d8f36a] text-xs font-semibold uppercase tracking-wider mb-4 inline-block">
                Qatar Contracting & Facilities Portfolio
              </span>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6">
                Complete Services & Trade Capabilities
              </h1>
              <p className="text-base sm:text-lg text-[#ddede7]/80 leading-relaxed font-normal">
                Direct technical capabilities, trade breakdowns, and facilities management solutions 
                delivered across residential, commercial, hotel, and institutional properties in the State of Qatar.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 1: MEP Engineering */}
      <section className="py-20 bg-white border-b border-[#163b35]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <RevealOnScroll direction="up">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
              <div className="max-w-2xl">
                <span className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider">Division 01 • MEP Systems</span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#163b35] mt-2">
                  Electrical & Plumbing Constructions
                </h2>
                <p className="mt-3 text-sm text-[#5e6b66]">
                  Our expertise covers a wide variety of electro-mechanical designs, high-voltage panel boards, 
                  and comprehensive water distribution networks.
                </p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#ddede7] text-[#163b35] text-xs font-bold shrink-0">
                <CheckCircle2 className="w-4 h-4" />
                <span>Registered Plumbers & Electricians</span>
              </div>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <RevealOnScroll direction="up" delay={0.05}>
              <div className="overflow-hidden rounded-3xl bg-[#f7f8f5] border border-[#163b35]/8 hover:border-[#163b35]/30 hover:bg-[#ffffff] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group flex flex-col justify-between h-full">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/media/Gemini_Generated_Image_sqgdbqsqgdbqsqgd.png"
                    alt="Electrification & Panel Boards"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#163b35] mb-2">Residential & Commercial Electrification</h3>
                  <p className="text-xs text-[#5e6b66] leading-relaxed mb-6">
                    Design, installation, and commissioning of all electrical equipment, distribution transformers, and substations.
                  </p>
                  <ul className="space-y-2 mb-6 text-xs text-[#17201d]">
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Installation & maintenance of all panel boards</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Stadium & playground high-mast lighting</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Electrical pathways & trunking installations</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Wire fault testing & circuit diagnosis</li>
                  </ul>
                </div>
                <div className="p-8 pt-0">
                  <div className="pt-4 border-t border-[#163b35]/8 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#5e6b66]">Substation Certified</span>
                    <ArrowRight className="w-4 h-4 text-[#163b35] group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.1}>
              <div className="overflow-hidden rounded-3xl bg-[#f7f8f5] border border-[#163b35]/8 hover:border-[#163b35]/30 hover:bg-[#ffffff] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group flex flex-col justify-between h-full">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/media/Gemini_Generated_Image_l3ebsjl3ebsjl3eb.png"
                    alt="Plumbing Works"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#163b35] mb-2">Domestic & Industrial Plumbing</h3>
                  <p className="text-xs text-[#5e6b66] leading-relaxed mb-6">
                    Array of registered plumbing services for multi-story towers, hotels, and industrial sites.
                  </p>
                  <ul className="space-y-2 mb-6 text-xs text-[#17201d]">
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Complete bathroom & sanitary renovations</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Industrial geyser installations & boilers</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Plumbing leak checking & acoustic inspection</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Water saving solutions & pressure boosting</li>
                  </ul>
                </div>
                <div className="p-8 pt-0">
                  <div className="pt-4 border-t border-[#163b35]/8 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#5e6b66]">Leak Proof Certified</span>
                    <ArrowRight className="w-4 h-4 text-[#163b35] group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.15}>
              <div className="overflow-hidden rounded-3xl bg-[#f7f8f5] border border-[#163b35]/8 hover:border-[#163b35]/30 hover:bg-[#ffffff] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group flex flex-col justify-between h-full">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/media/Gemini_Generated_Image_xid9epxid9epxid9.png"
                    alt="Pumps & Piping"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#163b35] mb-2">Pumps, Piping & Mechanical Maintenance</h3>
                  <p className="text-xs text-[#5e6b66] leading-relaxed mb-6">
                    Installation and overhaul of booster pumps, check valves, chilled water manifold loops, and piping.
                  </p>
                  <ul className="space-y-2 mb-6 text-xs text-[#17201d]">
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Industrial water circulating booster pumps</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Flanged check valve & pressure regulator rigging</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Thermal insulation jacketing for cold lines</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Scheduled preventative mechanical servicing</li>
                  </ul>
                </div>
                <div className="p-8 pt-0">
                  <div className="pt-4 border-t border-[#163b35]/8 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#5e6b66]">Heavy MEP Approved</span>
                    <ArrowRight className="w-4 h-4 text-[#163b35] group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* SECTION 2: Fire Safety & Protection Systems */}
      <section className="py-20 bg-[#f7f8f5] border-b border-[#163b35]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <RevealOnScroll direction="up">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider">Division 02 • Life Safety</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#163b35] mt-2">
                Fire Alarm & Firefighting Systems
              </h2>
              <p className="mt-3 text-sm text-[#5e6b66]">
                Ensuring full compliance with Qatar Civil Defense safety codes and life protection standards.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <RevealOnScroll direction="up" delay={0.05}>
              <div className="overflow-hidden rounded-3xl bg-white border border-[#163b35]/8 hover:border-[#163b35]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group flex flex-col justify-between h-full">
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src="/media/Gemini_Generated_Image_w7l72cw7l72cw7l7.png"
                    alt="Fire Sprinkler System"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 sm:p-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#ddede7] text-[#163b35] flex items-center justify-center mb-6">
                    <Flame className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#163b35] mb-3">Fire Sprinkler & Hydrant System Installations</h3>
                  <p className="text-sm text-[#5e6b66] leading-relaxed mb-6">
                    Design and turnkey layout of automated wet and dry fire sprinkler heads, riser pipes, flow switches, and high-volume landing valves.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#17201d]">
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#163b35]" /> Overhead sprinkler piping</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#163b35]" /> Fire department connections</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#163b35]" /> Pressure hydrostatic testing</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#163b35]" /> Hydraulic flow balancing</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.1}>
              <div className="overflow-hidden rounded-3xl bg-white border border-[#163b35]/8 hover:border-[#163b35]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group flex flex-col justify-between h-full">
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src="/media/Gemini_Generated_Image_ldre5cldre5cldre.png"
                    alt="Smoke Alarm & Beacon Systems"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 sm:p-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#ddede7] text-[#163b35] flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#163b35] mb-3">Detection Alarms & Maintenance (AMC)</h3>
                  <p className="text-sm text-[#5e6b66] leading-relaxed mb-6">
                    Optical smoke sensors, heat sensors, manual call break-glass units, emergency strobe lights, and routine statutory compliance audits.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#17201d]">
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#163b35]" /> Addressable alarm control panels</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#163b35]" /> Emergency evacuation strobes</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#163b35]" /> Periodic extinguisher refilling</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#163b35]" /> Annual Maintenance Contracts (AMC)</div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* SECTION 3: Civil, Ceilings & Facades */}
      <section className="py-20 bg-white border-b border-[#163b35]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <RevealOnScroll direction="up">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider">Division 03 • Civil & Fit-Out</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#163b35] mt-2">
                Gypsum, Painting, Glazing & Cladding
              </h2>
              <p className="mt-3 text-sm text-[#5e6b66]">
                Modern architectural finishing for prestigious developments, office fit-outs, and commercial structures.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <RevealOnScroll direction="up" delay={0.05}>
              <div className="overflow-hidden rounded-3xl bg-[#f7f8f5] border border-[#163b35]/8 hover:border-[#163b35]/30 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group flex flex-col justify-between h-full">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/media/Gemini_Generated_Image_3d4a4s3d4a4s3d4a.png"
                    alt="Gypsum & Ceilings"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#163b35] mb-2">Architectural Gypsum & False Ceilings</h3>
                  <p className="text-xs text-[#5e6b66] leading-relaxed mb-4">
                    Fastening wallboards, sheetrock, decorative 3D stepped false ceilings, and acoustic soundproofing panels.
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#17201d]">
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Framing, drywall & trim</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Geometric ceiling cutouts</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Seamless tape jointing</li>
                  </ul>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.1}>
              <div className="overflow-hidden rounded-3xl bg-[#f7f8f5] border border-[#163b35]/8 hover:border-[#163b35]/30 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group flex flex-col justify-between h-full">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/media/Gemini_Generated_Image_dnvqz2dnvqz2dnvq.png"
                    alt="Painting & Screeding"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#163b35] mb-2">Painting & Screeding Waterproofing</h3>
                  <p className="text-xs text-[#5e6b66] leading-relaxed mb-4">
                    Self-leveling floor screeds, industrial epoxy, anti-slip floor coatings, and membrane roof waterproofing.
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#17201d]">
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Epoxy floor finishing</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Roof waterproofing membranes</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> High-traffic floor line marking</li>
                  </ul>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.15}>
              <div className="overflow-hidden rounded-3xl bg-[#f7f8f5] border border-[#163b35]/8 hover:border-[#163b35]/30 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group flex flex-col justify-between h-full">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/media/Gemini_Generated_Image_izp3vsizp3vsizp3.png"
                    alt="Glass Glazing & ACP Cladding"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#163b35] mb-2">Glass Glazing & ACP Facades</h3>
                  <p className="text-xs text-[#5e6b66] leading-relaxed mb-4">
                    Aluminium Composite Panel (ACP) exterior envelopment, structural curtain wall glass glazing, and doors.
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#17201d]">
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> ACP facade cladding panels</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> High-performance curtain walls</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Aluminium doors & windows</li>
                  </ul>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* SECTION 4: Cleaning, Manpower & Telecom */}
      <section className="py-20 bg-[#f7f8f5] border-b border-[#163b35]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <RevealOnScroll direction="up">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider">Division 04 • Facility Care & Workforce</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#163b35] mt-2">
                Hygiene, Manpower Supply & Telecom
              </h2>
              <p className="mt-3 text-sm text-[#5e6b66]">
                Operational backbone solutions maintaining high standards of workplace hygiene, personnel readiness, and connectivity.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <RevealOnScroll direction="up" delay={0.05}>
              <div className="overflow-hidden rounded-3xl bg-white border border-[#163b35]/8 hover:border-[#163b35]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group flex flex-col justify-between h-full">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/media/Gemini_Generated_Image_rftpr3rftpr3rftp.png"
                    alt="Corporate Cleaning"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#163b35] mb-2">Commercial Cleaning & Sanitization</h3>
                  <p className="text-xs text-[#5e6b66] leading-relaxed mb-4">
                    Thorough commercial office, residential, and post-construction sanitization using certified eco-friendly chemicals.
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#17201d]">
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Daily corporate office care</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Deep sanitization protocols</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Post-fitout debris removal</li>
                  </ul>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.1}>
              <div className="overflow-hidden rounded-3xl bg-white border border-[#163b35]/8 hover:border-[#163b35]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group flex flex-col justify-between h-full">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/media/Gemini_Generated_Image_2rkda02rkda02rkd.png"
                    alt="Manpower Supply"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#163b35] mb-2">Skilled Trade Manpower Supply</h3>
                  <p className="text-xs text-[#5e6b66] leading-relaxed mb-4">
                    Deployment of vetted, safety-briefed trade professionals: certified electricians, plumbers, masons, carpenters, and helpers.
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#17201d]">
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Certified trade technicians</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Daily safety toolbox briefings</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Flexible short & long-term contracts</li>
                  </ul>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.15}>
              <div className="overflow-hidden rounded-3xl bg-white border border-[#163b35]/8 hover:border-[#163b35]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group flex flex-col justify-between h-full">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src="/media/Gemini_Generated_Image_7qhkyl7qhkyl7qhk.png"
                    alt="Satellite Telecom"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#163b35] mb-2">Telecommunication & Satellite Services</h3>
                  <p className="text-xs text-[#5e6b66] leading-relaxed mb-4">
                    Reliable satellite and telecom links for remote sites across Qatar via MSS and quasi-global VSAT antennas.
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#17201d]">
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Mobile Satellite Services (MSS)</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Quasi-global VSAT links</li>
                    <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> High-availability remote communications</li>
                  </ul>
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
