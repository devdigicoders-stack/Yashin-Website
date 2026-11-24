"use client";

import RevealOnScroll from "./RevealOnScroll";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Chiller Line & Booster Pump Station",
    category: "MEP Engineering",
    image: "/media/site-booster-pump.png", // Page 17 on-site booster pump
    source: "Brochure Page 17",
    description: "Heavy electro-mechanical installation, high-pressure pump manifolds, and acoustic thermal pipe insulation for commercial facility.",
    location: "Doha, Qatar"
  },
  {
    title: "Commercial Glass Glazing & ACP Cladding",
    category: "Civil Facade",
    image: "/media/acp-glass-commercial-building.png", // Page 11 on-site commercial complex
    source: "Brochure Page 11",
    description: "Curtain wall structural glass installation and weather-resistant Aluminium Composite Panel (ACP) exterior envelopment.",
    location: "Commercial Complex"
  },
  {
    title: "Fire Protection Hydrant & Sprinkler Loops",
    category: "Fire Safety",
    image: "/media/site-fire-riser.png", // Page 18 on-site fire riser installation
    source: "Brochure Page 18",
    description: "Complete installation and testing of automated fire sprinklers, hydrant risers, and emergency alarm monitoring panels.",
    location: "Industrial & Logistics Park"
  },
  {
    title: "Underground Utility Trenching & Conduit Laying",
    category: "Infrastructure",
    image: "/media/site-underground-trench.png", // Page 17 on-site underground trench
    source: "Brochure Page 17",
    description: "Deep excavation, underground cable pathways, conduit containment, and specialized high-grade gas utility lines.",
    location: "Utility Corridor"
  },
  {
    title: "Architectural Gypsum & False Ceiling Works",
    category: "Interior Fit-out",
    image: "/media/gypsum-spiral-ceiling.png", // Page 9 on-site gypsum ceiling
    source: "Brochure Page 9",
    description: "Custom geometric false ceilings, indirect LED ambient lighting channels, and fire-resistant drywall partitions.",
    location: "Corporate Headquarters"
  },
  {
    title: "Insulated Chiller Pipe Networks & Acoustic Jacketing",
    category: "HVAC Engineering",
    image: "/media/site-chiller-manifold.png", // Page 18 on-site chiller manifold
    source: "Brochure Page 18",
    description: "Heavy-duty thermal vapor barriers, silver jacketed chilled water distribution loops, and acoustic isolation.",
    location: "Commercial HVAC Plant"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#f7f8f5] border-t border-[#163b35]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Clevaro Header */}
        <RevealOnScroll direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ddede7] text-[#163b35] text-xs font-semibold mb-3">
                <span>Loved by Clean Spaces Everywhere</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-[#163b35] tracking-tight">
                Real Projects Executed in Qatar.
              </h2>
              <p className="mt-4 text-[#5e6b66] text-base leading-relaxed">
                Authentic photographic evidence of actual installations extracted directly from Yashin Facilities Management corporate portfolio.
              </p>
            </div>

            <div className="shrink-0">
              <span className="px-4 py-2 rounded-full bg-[#ffffff] border border-[#163b35]/10 text-xs font-bold text-[#163b35] shadow-xs">
                100% Safety Compliance
              </span>
            </div>
          </div>
        </RevealOnScroll>

        {/* Project Cards (Solid White, Clevaro clean style, Visual Thumbnail, Hover Lift) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((item, idx) => (
            <RevealOnScroll key={idx} direction="up" delay={idx * 0.08}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="rounded-3xl bg-[#ffffff] border border-[#163b35]/8 hover:border-[#163b35]/25 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group h-full"
              >
                <div>
                  {/* Real Project Photographic Thumbnail from Brochure Pages 9, 11, 17, 18 */}
                  <div className="relative h-52 w-full overflow-hidden bg-[#163b35]/5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="text-[11px] font-bold text-[#163b35] px-3 py-1 rounded-full bg-white/95 backdrop-blur-xs shadow-xs">
                        {item.location}
                      </span>
                      <span className="text-[11px] font-bold text-white px-3 py-1 rounded-full bg-[#163b35]/90 backdrop-blur-xs">
                        {item.source}
                      </span>
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="text-[11px] font-bold text-[#5e6b66] uppercase tracking-wider mb-1">
                      {item.category}
                    </div>
                    <h3 className="text-xl font-bold text-[#163b35] mb-2 leading-snug">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs text-[#5e6b66] leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-3 border-t border-[#163b35]/6 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#163b35]">
                    <CheckCircle2 className="w-4 h-4 text-[#163b35]" />
                    <span>Completed & Commissioned</span>
                  </div>
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#f7f8f5] group-hover:bg-[#d8f36a] text-[#163b35] transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Bottom CTA Card for Full Portfolio */}
        <RevealOnScroll direction="up" delay={0.3}>
          <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-[#163b35] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <span className="text-xs text-[#d8f36a] font-bold uppercase tracking-wider">Qatar Engineering Archives</span>
              <h3 className="text-2xl sm:text-3xl font-black mt-1">Explore Our Complete On-Site Photo Portfolio</h3>
              <p className="text-sm text-[#ddede7]/80 mt-2 max-w-xl">
                Inspect authentic project evidence from pages 9, 11, 17, and 18: chillers, utility trenching, substation cabling, gypsum fit-outs, and manpower toolbox briefings.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#d8f36a] hover:bg-[#c8e658] text-[#163b35] font-bold text-sm tracking-tight shrink-0 transition-transform hover:scale-105 shadow-md"
            >
              <span>View Full Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
