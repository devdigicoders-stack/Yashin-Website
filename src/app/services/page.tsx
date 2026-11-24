import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
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
  Sparkles
} from "lucide-react";

export const metadata = {
  title: "Services & Capabilities | Yashin Facilities Management W.L.L. Qatar",
  description: "Comprehensive MEP, Civil, Fire Safety, Cleaning, and Manpower solutions extracted directly from Yashin Facilities Management Qatar profile.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f7f8f5]">
      <Navbar />

      {/* Header Banner with Page 12 Services Trade Matrix Collage */}
      <section className="relative py-24 sm:py-32 bg-[#163b35] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/media/services-trade-matrix.png"
            alt="Page 12 Brochure - All 16 Services Trade Matrix"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 z-10">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl">
              <span className="px-3.5 py-1.5 rounded-full bg-[#ddede7]/20 text-[#d8f36a] text-xs font-semibold uppercase tracking-wider mb-4 inline-block">
                Qatar Contracting & Facilities Portfolio (Page 12)
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

      {/* SECTION 1: MEP Engineering (Brochure Page 13) */}
      <section className="py-20 bg-white border-b border-[#163b35]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <RevealOnScroll direction="up">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
              <div className="max-w-2xl">
                <span className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider">Division 01 • MEP Systems (Page 13)</span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#163b35] mt-2">
                  Electrical, Plumbing & Central Cooling
                </h2>
                <p className="mt-3 text-sm text-[#5e6b66]">
                  Our expertise covers a wide variety of electro-mechanical designs, high-voltage panel boards, 
                  and comprehensive water distribution networks.
                </p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#ddede7] text-[#163b35] text-xs font-bold shrink-0">
                <CheckCircle2 className="w-4 h-4" />
                <span>Page 13 Registered Plumbers & Electricians</span>
              </div>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <RevealOnScroll direction="up" delay={0.05}>
              <div className="rounded-3xl bg-[#f7f8f5] border border-[#163b35]/8 hover:border-[#163b35]/30 hover:bg-[#ffffff] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group h-full">
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-[#ddede7]">
                    <Image
                      src="/media/panelboard-wiring.png"
                      alt="Page 13 - Residential & Commercial Electrification Panel Board"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-white/90 text-[#163b35] text-[11px] font-bold shadow-xs">
                        Power & Substations
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-[#163b35]/90 text-white text-[10px] font-semibold">
                        Page 13
                      </span>
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-bold text-[#163b35] mb-2">Residential & Commercial Electrification</h3>
                    <p className="text-xs text-[#5e6b66] leading-relaxed mb-6">
                      Design, installation, and commissioning of all electrical equipment, distribution transformers, and substations.
                    </p>
                    <ul className="space-y-2 mb-6 text-xs text-[#17201d]">
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Installation of all panel boards</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Stadium & commercial high-mast lighting</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Cable pathways & containment trunking</li>
                      <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-[#163b35]" /> Wire fault testing & circuit diagnosis</li>
                    </ul>
                  </div>
                </div>
                <div className="p-7 pt-0 border-t border-[#163b35]/8 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#5e6b66]">Substation Certified</span>
                  <ArrowRight className="w-4 h-4 text-[#163b35] group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.1}>
              <div className="rounded-3xl bg-[#f7f8f5] border border-[#163b35]/8 hover:border-[#163b35]/30 hover:bg-[#ffffff] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group h-full">
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-[#ddede7]">
                    <Image
                      src="/media/plumbing-under-sink.png"
                      alt="Page 13 - Domestic & Industrial Plumbing Under-Sink Fixtures"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-white/90 text-[#163b35] text-[11px] font-bold shadow-xs">
                        Hydraulic Systems
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-[#163b35]/90 text-white text-[10px] font-semibold">
                        Page 13
                      </span>
                    </div>
                  </div>
                  <div className="p-7">
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
                </div>
                <div className="p-7 pt-0 border-t border-[#163b35]/8 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#5e6b66]">Leak Proof Certified</span>
                  <ArrowRight className="w-4 h-4 text-[#163b35] group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.15}>
              <div className="rounded-3xl bg-[#f7f8f5] border border-[#163b35]/8 hover:border-[#163b35]/30 hover:bg-[#ffffff] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group h-full">
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-[#ddede7]">
                    <Image
                      src="/media/pipe-wrench-mep.png"
                      alt="Page 15 - MEP Constructions & Pipe Wrench Overhaul"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-white/90 text-[#163b35] text-[11px] font-bold shadow-xs">
                        Central Maintenance
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-[#163b35]/90 text-white text-[10px] font-semibold">
                        Page 15
                      </span>
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="text-xl font-bold text-[#163b35] mb-2">MEP Maintenance Services</h3>
                    <p className="text-xs text-[#5e6b66] leading-relaxed mb-6">
                      We undertake all kinds of MEP constructions and maintenance works with flexible engagement contracts.
                    </p>
                    <div className="space-y-3 mb-6">
                      <div className="p-3 rounded-2xl bg-white border border-[#163b35]/8">
                        <p className="text-xs font-bold text-[#163b35]">Annually Reoccurring Services (AMC)</p>
                        <p className="text-[11px] text-[#5e6b66]">Year-round routine audits, scheduled maintenance & rapid breakdown callouts.</p>
                      </div>
                      <div className="p-3 rounded-2xl bg-white border border-[#163b35]/8">
                        <p className="text-xs font-bold text-[#163b35]">One-Time Maintenance Services</p>
                        <p className="text-[11px] text-[#5e6b66]">Emergency breakdown repairs, renovation overhauls & handover inspections.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-7 pt-0 border-t border-[#163b35]/8 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#5e6b66]">24/7 Rapid Response</span>
                  <ArrowRight className="w-4 h-4 text-[#163b35] group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* SECTION 2: Fire Safety with Page 14 Beacon and Page 18 Riser */}
      <section className="py-20 bg-[#f7f8f5] border-b border-[#163b35]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <RevealOnScroll direction="left">
                <span className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider">Division 02 • Life Safety (Page 14)</span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#163b35] mt-2 mb-4">
                  Fire Alarm and Firefighting Systems
                </h2>
                <p className="text-sm text-[#5e6b66] leading-relaxed mb-6">
                  "A building without a fire protection system is not a complete building. This will severely 
                  threaten the safety of the building and the lives of their residents." 
                  As a total solution, Yashin Facilities Management offers certified life protection installations 
                  and maintenance.
                </p>

                {/* Fire Visual Thumbnail from Page 14 */}
                <div className="relative h-48 rounded-2xl overflow-hidden border border-[#163b35]/10 mb-6 shadow-sm bg-black">
                  <Image
                    src="/media/fire-strobe-beacon.png"
                    alt="Page 14 - Fire Alarm Strobe Emergency Beacon"
                    fill
                    sizes="450px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#163b35]/90 text-white text-[11px] font-bold px-3 py-1 rounded-full">
                    Civil Defense Strobe & Hydrant Standards (Page 14)
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#d8f36a] text-[#163b35] text-xs font-bold hover:bg-[#c8e658] transition-all hover:scale-105 cursor-pointer shadow-xs"
                >
                  <span>Request Fire Safety Inspection</span>
                  <ArrowRight className="w-4 h-4 text-[#163b35]" />
                </Link>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Fire Sprinkler Installations", desc: "Automated overhead pipe loops, flow switches, and wet pipe sprinkler heads." },
                { title: "Fire Hydrant Systems", desc: "External and internal landing valves, fire hose reels, and pressure pumps." },
                { title: "Fire Extinguisher Supply", desc: "CO2, dry chemical powder, foam extinguishers, and hydrostatic pressure testing." },
                { title: "Optical Fire Alarm Systems", desc: "Main control panels, addressable heat/smoke detectors, and flash beacons." },
                { title: "Annual Maintenance (AMC)", desc: "Quarterly functional testing, battery backup checks, and Civil Defense readiness." },
                { title: "One-Time Maintenance", desc: "Troubleshooting sensor faults, valve re-sealing, and pipeline flushing." }
              ].map((item, idx) => (
                <RevealOnScroll key={idx} direction="up" delay={idx * 0.05}>
                  <div className="p-6 rounded-3xl bg-white border border-[#163b35]/8 hover:border-[#163b35]/30 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer group h-full">
                    <div className="w-8 h-8 rounded-full bg-[#ddede7] text-[#163b35] flex items-center justify-center mb-3 group-hover:bg-[#d8f36a] transition-colors">
                      <Flame className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-[#163b35] mb-1">{item.title}</h4>
                    <p className="text-xs text-[#5e6b66] leading-relaxed">{item.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: Gypsum Works with Page 9 Spiral Ceiling & Insets */}
      <section className="py-20 bg-white border-b border-[#163b35]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <RevealOnScroll direction="left">
                <span className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider">Division 03 • Architectural Ceilings (Page 9)</span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#163b35] mt-2 mb-4">
                  Gypsum Works & Interior Drywall
                </h2>
                <p className="text-sm text-[#5e6b66] leading-relaxed mb-6">
                  Fits and fastens wallboard or sheetrock into specified positions, using precision hand tools, 
                  portable power tools, or adhesive. Measures and marks cutting lines on framing, drywall, and trim, 
                  using tape measure, straightedge or square, and marking devices.
                </p>

                <div className="space-y-3 mb-6 text-xs text-[#17201d]">
                  <div className="p-3.5 rounded-2xl bg-[#f7f8f5] border border-[#163b35]/8 flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#163b35] shrink-0" />
                    <span>Curved & stepped decorative ceiling moldings with concealed LED channels</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#f7f8f5] border border-[#163b35]/8 flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#163b35] shrink-0" />
                    <span>Moisture-resistant gypsum boards for kitchen and bathroom ceilings</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#f7f8f5] border border-[#163b35]/8 flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#163b35] shrink-0" />
                    <span>Acoustic commercial partitions and executive office drywalls</span>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            <div className="lg:col-span-6">
              <RevealOnScroll direction="right">
                <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-[#163b35]/10 shadow-lg group bg-white">
                  <Image
                    src="/media/gypsum-spiral-ceiling.png"
                    alt="Brochure Page 9 - Architectural Multi-Tier Gypsum Ceiling"
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#163b35]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-xs font-bold text-[#d8f36a] uppercase">Brochure Page 9 Design</p>
                    <p className="text-sm font-semibold">Custom 3D Crescent & Spiral False Ceilings with Ambient LED</p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: Painting & Plastering with Page 10 Painter Photo */}
      <section className="py-20 bg-[#f7f8f5] border-b border-[#163b35]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider">Division 04 • Surface Engineering (Page 10)</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#163b35] mt-2 mb-3">
                Painting, Plastering, Floors & Screeding
              </h2>
              <p className="text-sm text-[#5e6b66] leading-relaxed">
                We offer a complete range of painting services for both industrial, commercial, and residential markets. 
                We assist with floor painting, anti-slip floor coatings, line marking paints, concrete floor repairs, 
                waterproofing walls, plastering, new builds, dry walling, and painting.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { title: "Roof Painting", desc: "Solar-reflective barrier paints." },
              { title: "Interior & Exterior", desc: "Washable emulsions & weather-coats." },
              { title: "Waterproofing", desc: "Bituminous & liquid polyurethane." },
              { title: "Industrial Coating", desc: "Anti-slip epoxy for warehouses." },
              { title: "Line Markings", desc: "Corrosion protection & road lines." }
            ].map((p, idx) => (
              <RevealOnScroll key={idx} direction="up" delay={idx * 0.05}>
                <div className="p-6 rounded-3xl bg-white border border-[#163b35]/8 hover:border-[#163b35]/30 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 cursor-pointer text-center group h-full">
                  <div className="w-10 h-10 rounded-full bg-[#ddede7] text-[#163b35] flex items-center justify-center mx-auto mb-3 group-hover:bg-[#d8f36a] transition-colors">
                    <Paintbrush className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-[#163b35]">{p.title}</h4>
                  <p className="text-xs text-[#5e6b66] mt-1">{p.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: Cleaning & Telecom with Page 7 Authentic Photos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <RevealOnScroll direction="left">
              <div className="rounded-3xl bg-[#f7f8f5] border border-[#163b35]/8 hover:border-[#163b35]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group h-full">
                <div className="relative h-60 w-full overflow-hidden bg-[#163b35]/5">
                  <Image
                    src="/media/clean-custodian-mop.png"
                    alt="Page 7 - Custodian Mopping Office Hallway"
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/95 text-[#163b35] text-[11px] font-bold shadow-xs">
                      Brochure Page 7 • Hygiene
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <span className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider">Division 06 • Specialized Hygiene</span>
                  <h3 className="text-2xl font-black text-[#163b35] mt-1 mb-3">
                    House & Offices Cleaning Services
                  </h3>
                  <p className="text-xs text-[#5e6b66] leading-relaxed mb-6 font-normal">
                    "When we dispense residential and corporate cleaning, our services put emphasis on making the environment truly clean 
                    and radiate an aura of positivity so that when you re-occupy the space, you will be rejuvenated and filled with vivacity."
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs text-[#17201d] mb-6 font-medium">
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#163b35]" /> Office sanitization</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#163b35]" /> Residential deep clean</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#163b35]" /> Facade glass wash</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#163b35]" /> Post-renovation cleanup</div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#163b35] hover:text-[#5e6b66] pt-4 border-t border-[#163b35]/8 w-full"
                  >
                    <span>Book Cleaning Crew</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="right">
              <div className="rounded-3xl bg-[#f7f8f5] border border-[#163b35]/8 hover:border-[#163b35]/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group h-full">
                <div className="relative h-60 w-full overflow-hidden bg-[#163b35]/5">
                  <Image
                    src="/media/satellite-orbit.png"
                    alt="Page 7 - Orbital Satellite and Telecommunications Network"
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/95 text-[#163b35] text-[11px] font-bold shadow-xs">
                      Brochure Page 7 • Satellite
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <span className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider">Division 07 • Connectivity</span>
                  <h3 className="text-2xl font-black text-[#163b35] mt-1 mb-3">
                    Telephone & Satellite Services
                  </h3>
                  <p className="text-xs text-[#5e6b66] leading-relaxed mb-6 font-normal">
                    "Yashin Facilities Management has been the telephone & satellite services partner for industrial and remote facilities. 
                    Our superior network enables clear communications across two-thirds of the globe by MSS, and quasi-global VSAT coverage."
                  </p>

                  <div className="grid grid-cols-2 gap-3 text-xs text-[#17201d] mb-6 font-medium">
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#163b35]" /> MSS Satellite communication</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#163b35]" /> Quasi-global VSAT setup</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#163b35]" /> Remote site handhelds</div>
                    <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#163b35]" /> Base station antennas</div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#163b35] hover:text-[#5e6b66] pt-4 border-t border-[#163b35]/8 w-full"
                  >
                    <span>Inquire Satellite Setup</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>

          </div>

        </div>
      </section>

      {/* CTA Bottom with Page 19 Back Cover Skyline */}
      <section className="relative py-20 bg-[#163b35] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/media/backcover-skyline.png"
            alt="Page 19 Backcover Skyline"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 text-center max-w-2xl z-10">
          <RevealOnScroll direction="up">
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">Ready to Contract in Qatar?</h2>
            <p className="text-sm sm:text-base text-[#ddede7]/80 mb-8 font-normal leading-relaxed">
              Get in touch with Md. Somun Abdul and our operational management team for immediate site deployment.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#d8f36a] text-[#163b35] font-bold text-sm hover:bg-[#c8e658] transition-all hover:scale-105 cursor-pointer shadow-md"
            >
              <span>Contact Doha Headquarters</span>
              <ArrowRight className="w-4 h-4 text-[#163b35]" />
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  );
}
