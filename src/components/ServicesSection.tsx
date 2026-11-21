"use client";

import { useState } from "react";
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
    description: "Design, installation, and commissioning of electrical equipment substations, high-voltage panel boards, stadium electrification, and wiring.",
    highlights: ["Panel boards installation", "Electrification pathways", "Cable fault checking", "Utility line maintenance"]
  },
  {
    category: "mep",
    title: "Commercial & Industrial Plumbing",
    tag: "Registered Plumbers",
    description: "Domestic, commercial, and industrial plumbing solutions including geyser setups, leak detection, drainage networks, and water-saving systems.",
    highlights: ["Geyser & fixture installation", "Pipe leakage troubleshooting", "Industrial water manifolds", "Drainage repairs"]
  },
  {
    category: "fire",
    title: "Fire Alarm & Firefighting Systems",
    tag: "Life Safety & Defense",
    description: "Complete building safety: fire sprinkler systems, fire hydrants, optical smoke detection, extinguisher installations, and statutory AMC maintenance.",
    highlights: ["Sprinkler system loops", "Fire hydrant installations", "Smoke detection alarms", "Annual maintenance contracts (AMC)"]
  },
  {
    category: "civil",
    title: "Architectural Gypsum & False Ceilings",
    tag: "Interior Fit-outs",
    description: "Precision fitting and fastening of wallboards, sheetrock into specified positions, acoustic panels, and decorative 3D multi-level ceilings.",
    highlights: ["Framing, drywall & trim", "Curved & stepped ceiling designs", "Acoustic drywall boards", "Tape jointing & smooth finish"]
  },
  {
    category: "civil",
    title: "Painting, Floor Screeding & Waterproofing",
    tag: "Protective Coatings",
    description: "Floor painting, anti-slip floor coatings, line markings, concrete floor repairs, waterproofing membrane for walls and roofs, and plastering.",
    highlights: ["Industrial epoxy floor coatings", "Membrane roof waterproofing", "Interior & exterior emulsion", "Road and floor line markings"]
  },
  {
    category: "civil",
    title: "Glass Glazing & ACP Cladding Facades",
    tag: "Exterior Contracting",
    description: "Modern commercial building envelopes using high-grade Aluminium Composite Panels (ACP), curtain wall glass glazing, and structural steel fabrication.",
    highlights: ["ACP composite facade cladding", "Reflective curtain wall glazing", "Aluminium windows & doors", "Custom steel framework"]
  },
  {
    category: "cleaning",
    title: "House & Commercial Office Cleaning",
    tag: "Hygiene & Sanitization",
    description: "Deep office and residential cleaning that radiates an aura of positivity, rejuvenation, and pristine cleanliness for corporate and private clients.",
    highlights: ["Corporate office cleaning", "Post-construction debris cleanup", "Residential deep sanitization", "Eco-friendly cleaning agents"]
  },
  {
    category: "cleaning",
    title: "Skilled & Unskilled Manpower Supply",
    tag: "Certified Workforce",
    description: "Immediate deployment of safety-trained trade professionals: certified electricians, plumbers, masons, carpenters, welders, painters, and helpers.",
    highlights: ["Certified trade technicians", "Trained in safety protocols", "Short & long-term contracts", "Full compliance with Qatar law"]
  },
  {
    category: "mep",
    title: "Telecommunication & Satellite Infrastructure",
    tag: "VSAT & Radio Coverage",
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
        
        {/* Clevaro Section Header: Exact Subheading & H2 */}
        <RevealOnScroll direction="up">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ddede7] text-[#163b35] text-xs font-semibold mb-3">
              <span>Services & Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#163b35] tracking-tight">
              Cleaning That Fits Your Life.
            </h2>
            <p className="mt-4 text-[#5e6b66] text-base sm:text-lg leading-relaxed">
              From weekly MEP maintenance to large-scale structural fit-outs and professional cleaning, 
              every service is delivered by trained, insured Qatar professionals.
            </p>
          </div>
        </RevealOnScroll>

        {/* Clevaro Filter Pills */}
        <RevealOnScroll direction="up" delay={0.1}>
          <div className="flex flex-wrap items-center gap-2 mb-12">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeTab === cat.id
                    ? "bg-[#163b35] text-[#d8f36a] shadow-xs scale-105"
                    : "bg-[#f7f8f5] text-[#5e6b66] hover:bg-[#ddede7] hover:text-[#163b35]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Clevaro Cards Grid: Clean off-white surface, rounded-3xl, hover lift and border transition */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filtered.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="rounded-3xl bg-[#f7f8f5] p-8 border border-[#163b35]/8 hover:border-[#163b35]/25 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Tag badge & Lime dot */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full bg-[#ffffff] border border-[#163b35]/8 text-xs font-bold text-[#163b35]">
                      {service.tag}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#d8f36a] group-hover:scale-125 transition-transform" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[#163b35] mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#5e6b66] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-8">
                    {service.highlights.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-medium text-[#17201d]">
                        <Check className="w-4 h-4 text-[#163b35] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-[#163b35]/8 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#5e6b66]">State of Qatar</span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#163b35] hover:text-[#5e6b66] transition-colors"
                  >
                    <span>Request Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#163b35]" />
                  </Link>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
