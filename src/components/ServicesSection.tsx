"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const serviceCategories = [
  { id: "all", label: "All Services" },
  { id: "mep", label: "MEP & Electrical" },
  { id: "civil", label: "Civil & Fit-outs" },
  { id: "fire", label: "Firefighting" },
  { id: "cleaning", label: "Cleaning & Manpower" }
];

const services = [
  {
    category: "mep",
    title: "Electro-Mechanical & Substation Works",
    tag: "Commercial & Industrial",
    image: "/media/Gemini_Generated_Image_sqgdbqsqgdbqsqgd.png",
    description: "Design, installation, and commissioning of electrical equipment substations, high-voltage panel boards, stadium electrification, and wiring.",
    highlights: ["Panel boards installation", "Electrification pathways", "Cable fault checking", "Utility line maintenance"]
  },
  {
    category: "mep",
    title: "Commercial & Industrial Plumbing",
    tag: "Registered Plumbers",
    image: "/media/Gemini_Generated_Image_l3ebsjl3ebsjl3eb.png",
    description: "Domestic, commercial, and industrial plumbing solutions including geyser setups, leak detection, drainage networks, and water-saving systems.",
    highlights: ["Geyser & fixture installation", "Pipe leakage troubleshooting", "Industrial water manifolds", "Drainage repairs"]
  },
  {
    category: "mep",
    title: "HVAC Chilled Water & Air Ducts",
    tag: "Cooling & Air Quality",
    image: "/media/Gemini_Generated_Image_d7sj57d7sj57d7sj.png",
    description: "Complete central cooling infrastructure, industrial duct fabrication, airflow balance testing, and precision chiller maintenance.",
    highlights: ["Duct fabrication & hanging", "Chilled water manifolds", "Airflow balance testing", "Filter replacement & sanitizing"]
  },
  {
    category: "fire",
    title: "Fire Alarm & Firefighting Systems",
    tag: "Life Safety & Defense",
    image: "/media/Gemini_Generated_Image_w7l72cw7l72cw7l7.png",
    description: "Complete building safety: fire sprinkler systems, fire hydrants, optical smoke detection, extinguisher installations, and statutory AMC maintenance.",
    highlights: ["Sprinkler system loops", "Fire hydrant installations", "Smoke detection alarms", "Annual maintenance contracts (AMC)"]
  },
  {
    category: "civil",
    title: "Architectural Gypsum & False Ceilings",
    tag: "Interior Fit-outs",
    image: "/media/Gemini_Generated_Image_3d4a4s3d4a4s3d4a.png",
    description: "Precision fitting and fastening of wallboards, sheetrock into specified positions, acoustic panels, and decorative 3D multi-level ceilings.",
    highlights: ["Framing, drywall & trim", "Curved & stepped ceiling designs", "Acoustic drywall boards", "Tape jointing & smooth finish"]
  },
  {
    category: "civil",
    title: "Painting, Floor Screeding & Waterproofing",
    tag: "Protective Coatings",
    image: "/media/Gemini_Generated_Image_dnvqz2dnvqz2dnvq.png",
    description: "Floor painting, anti-slip floor coatings, line markings, concrete floor repairs, waterproofing membrane for walls and roofs, and plastering.",
    highlights: ["Industrial epoxy floor coatings", "Membrane roof waterproofing", "Interior & exterior emulsion", "Road and floor line markings"]
  },
  {
    category: "civil",
    title: "Glass Glazing & ACP Cladding Facades",
    tag: "Exterior Contracting",
    image: "/media/Gemini_Generated_Image_izp3vsizp3vsizp3.png",
    description: "Modern commercial building envelopes using high-grade Aluminium Composite Panels (ACP), curtain wall glass glazing, and structural steel fabrication.",
    highlights: ["ACP composite facade cladding", "Reflective curtain wall glazing", "Aluminium windows & doors", "Custom steel framework"]
  },
  {
    category: "cleaning",
    title: "House & Commercial Office Cleaning",
    tag: "Hygiene & Sanitization",
    image: "/media/Gemini_Generated_Image_rftpr3rftpr3rftp.png",
    description: "Deep office and residential cleaning that radiates an aura of positivity, rejuvenation, and pristine cleanliness for corporate and private clients.",
    highlights: ["Corporate office cleaning", "Post-construction debris cleanup", "Residential deep sanitization", "Eco-friendly cleaning agents"]
  },
  {
    category: "cleaning",
    title: "Skilled & Unskilled Manpower Supply",
    tag: "Certified Workforce",
    image: "/media/Gemini_Generated_Image_1r8fmb1r8fmb1r8f.png",
    description: "Immediate deployment of safety-trained trade professionals: certified electricians, plumbers, masons, carpenters, welders, painters, and helpers.",
    highlights: ["Certified trade technicians", "Trained in safety protocols", "Short & long-term contracts", "Full compliance with Qatar law"]
  },
  {
    category: "mep",
    title: "Telecommunication & Satellite Infrastructure",
    tag: "VSAT & Radio Coverage",
    image: "/media/Gemini_Generated_Image_7qhkyl7qhkyl7qhk.png",
    description: "Uninterrupted telephone and satellite communications across remote sites and corporate offices by MSS and quasi-global VSAT coverage.",
    highlights: ["Two-thirds globe MSS coverage", "Quasi-global VSAT coverage", "Emergency satellite phones", "On-site antenna setups"]
  }
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = activeTab === "all" ? services : services.filter(s => s.category === activeTab);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#ffffff] border-t border-[#163b35]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Clevaro Section Header */}
        <RevealOnScroll direction="up">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ddede7] text-[#163b35] text-xs font-semibold mb-3">
              <span>Services & Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#163b35] tracking-tight">
              Cleaning That Fits Your Life.
            </h2>
            <p className="mt-4 text-[#5e6b66] text-base leading-relaxed">
              Every service is delivered under strict QHSE supervision, certified trade mechanics, and Qatar construction standards.
            </p>
          </div>
        </RevealOnScroll>

        {/* Filter Pills */}
        <RevealOnScroll direction="up" delay={0.1}>
          <div className="flex flex-wrap items-center gap-2.5 mb-12">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTab === cat.id
                    ? "bg-[#163b35] text-white shadow-xs"
                    : "bg-[#f7f8f5] text-[#5e6b66] hover:bg-[#ddede7] hover:text-[#163b35]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Service Cards with High-Res Media Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filtered.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                key={item.title}
                className="rounded-3xl bg-[#f7f8f5] border border-[#163b35]/8 hover:border-[#163b35]/20 hover:bg-[#ffffff] hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Service Visual Thumbnail */}
                  <div className="relative h-48 w-full overflow-hidden bg-[#ddede7]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[#163b35] text-[11px] font-bold shadow-xs">
                        {item.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="text-xl font-bold text-[#163b35] mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#5e6b66] leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {item.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#163b35] font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#163b35]" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-2 border-t border-[#163b35]/6 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#163b35] group-hover:text-[#163b35] group-hover:translate-x-1 transition-all"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[11px] font-semibold text-[#5e6b66] bg-[#ddede7] px-2.5 py-0.5 rounded-full uppercase">
                    Qatar Certified
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
