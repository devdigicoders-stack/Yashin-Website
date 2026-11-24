"use client";

import RevealOnScroll from "./RevealOnScroll";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Chiller Line & Booster Pump Station",
    category: "MEP Engineering",
    image: "/media/Gemini_Generated_Image_2dwom2dwom2dwom2.png",
    description: "Heavy electro-mechanical installation, high-pressure pump manifolds, and acoustic thermal pipe insulation for commercial facility.",
    location: "Doha, Qatar"
  },
  {
    title: "Commercial Glass Glazing & ACP Cladding",
    category: "Civil Facade",
    image: "/media/Gemini_Generated_Image_izp3vsizp3vsizp3.png",
    description: "Curtain wall structural glass installation and weather-resistant Aluminium Composite Panel (ACP) exterior envelopment.",
    location: "Commercial Complex"
  },
  {
    title: "Fire Protection Hydrant & Sprinkler Loops",
    category: "Fire Safety",
    image: "/media/Gemini_Generated_Image_w7l72cw7l72cw7l7.png",
    description: "Complete installation and testing of automated fire sprinklers, hydrant risers, and emergency alarm monitoring panels.",
    location: "Industrial & Logistics Park"
  },
  {
    title: "Underground Utility Trenching & Gas Piping",
    category: "Infrastructure",
    image: "/media/Gemini_Generated_Image_5p8z7i5p8z7i5p8z.png",
    description: "Deep excavation, underground cable pathways, conduit containment, and specialized high-grade gas utility lines.",
    location: "Utility Corridor"
  },
  {
    title: "Architectural Gypsum & False Ceiling Works",
    category: "Interior Fit-out",
    image: "/media/Gemini_Generated_Image_3d4a4s3d4a4s3d4a.png",
    description: "Custom geometric false ceilings, indirect LED ambient lighting channels, and fire-resistant drywall partitions.",
    location: "Corporate Headquarters"
  },
  {
    title: "Protective Floor Screeding & Waterproofing",
    category: "Civil Contracting",
    image: "/media/Gemini_Generated_Image_mr1bkwmr1bkwmr1b.png",
    description: "Heavy-duty industrial anti-slip epoxy coatings, floor line markings, and full roof membrane waterproofing.",
    location: "Warehouse Facility"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-12 sm:py-16 bg-[#f7f8f5] border-t border-[#163b35]/8">
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
                A track record of precision, technical compliance, and timely delivery across Qatar's private and commercial sectors.
              </p>
            </div>

            <div className="shrink-0">
              <span className="px-4 py-2 rounded-full bg-[#ffffff] border border-[#163b35]/10 text-xs font-bold text-[#163b35] shadow-xs">
                100% Safety Compliance
              </span>
            </div>
          </div>
        </RevealOnScroll>

        {/* Project Cards (Solid White, Clevaro clean style, Hover Lift, Photographic Media) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((item, idx) => (
            <RevealOnScroll key={idx} direction="up" delay={idx * 0.08}>
              <motion.div
                whileHover={{ y: -8, rotate: idx % 2 === 0 ? -1.2 : 1.2, transition: { duration: 0.25 } }}
                className="overflow-hidden rounded-3xl bg-[#ffffff] border border-[#163b35]/8 hover:border-[#163b35] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full group"
              >
                <div>
                  {/* Project Image */}
                  <div className="relative w-full h-52 overflow-hidden bg-[#163b35]/5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider px-3 py-1 rounded-full bg-[#ffffff]/90 backdrop-blur-xs border border-[#163b35]/8 shadow-xs">
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="text-xs font-bold text-[#163b35] px-3 py-1 rounded-full bg-[#ddede7]/90 backdrop-blur-xs shadow-xs">
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-xl font-bold text-[#163b35] mb-3 leading-snug">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-[#5e6b66] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <div className="pt-4 border-t border-[#163b35]/8 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#5e6b66]">Scope Completed</span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#163b35]">
                      <span>Verified</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#163b35]" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
