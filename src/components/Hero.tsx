"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";
import { ArrowRight, Award, Shield, Users, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-14 pb-20 lg:pt-20 lg:pb-28 bg-[#f7f8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Clevaro Hero Header */}
        <RevealOnScroll direction="up" delay={0.05}>
          <div className="max-w-3xl mb-12">
            
            {/* Clevaro Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffffff] border border-[#163b35]/10 text-[#163b35] text-xs font-semibold mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#163b35]" />
              <span>Premium Facilities Management & Contracting • Doha, Qatar</span>
            </div>

            {/* Clevaro Headline (Exact Typography Structure: Huge Two-line H1) */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#163b35] tracking-tight leading-[1.05] mb-6">
              A Cleaner Space. <br />
              A Better Life.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-xl text-[#5e6b66] leading-relaxed mb-8 max-w-2xl font-normal">
              Reliable MEP engineering, civil fit-outs, fire safety, and facilities maintenance 
              designed around your commercial towers, hotels, and properties in Qatar.
            </p>

            {/* Dual CTA: Clevaro Lime Button + White Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#d8f36a] hover:bg-[#c8e658] text-[#163b35] font-bold text-sm tracking-tight transition-all shadow-xs hover:scale-[1.02]"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 text-[#163b35]" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#ffffff] hover:bg-[#f0f2ee] border border-[#163b35]/15 text-[#163b35] font-bold text-sm tracking-tight transition-all shadow-xs"
              >
                <span>Explore All Services</span>
              </Link>
            </div>

          </div>
        </RevealOnScroll>

        {/* Clevaro Trust Bar (White Card with Pale Sage rounded circle icons) */}
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-7 rounded-3xl bg-[#ffffff] border border-[#163b35]/10 shadow-xs mb-12">
            
            <motion.div 
              whileHover={{ y: -4 }}
              className="flex items-center gap-3.5 p-2 rounded-2xl transition-all cursor-default"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#ddede7] text-[#163b35] flex items-center justify-center shrink-0 font-bold">
                <Award className="w-6 h-6 text-[#163b35]" />
              </div>
              <div>
                <p className="text-xl font-black text-[#163b35] leading-none">10+ Years</p>
                <p className="text-xs text-[#5e6b66] mt-1 font-medium">Established in 2014</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4 }}
              className="flex items-center gap-3.5 p-2 rounded-2xl transition-all cursor-default"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#ddede7] text-[#163b35] flex items-center justify-center shrink-0 font-bold">
                <Shield className="w-6 h-6 text-[#163b35]" />
              </div>
              <div>
                <p className="text-xl font-black text-[#163b35] leading-none">C.R. 191809</p>
                <p className="text-xs text-[#5e6b66] mt-1 font-medium">State of Qatar Registered</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4 }}
              className="flex items-center gap-3.5 p-2 rounded-2xl transition-all cursor-default"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#ddede7] text-[#163b35] flex items-center justify-center shrink-0 font-bold">
                <Users className="w-6 h-6 text-[#163b35]" />
              </div>
              <div>
                <p className="text-xl font-black text-[#163b35] leading-none">100+ Staff</p>
                <p className="text-xs text-[#5e6b66] mt-1 font-medium">Certified Workforce</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4 }}
              className="flex items-center gap-3.5 p-2 rounded-2xl transition-all cursor-default"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#ddede7] text-[#163b35] flex items-center justify-center shrink-0 font-bold">
                <CheckCircle className="w-6 h-6 text-[#163b35]" />
              </div>
              <div>
                <p className="text-xl font-black text-[#163b35] leading-none">100% Quality</p>
                <p className="text-xs text-[#5e6b66] mt-1 font-medium">Guaranteed Performance</p>
              </div>
            </motion.div>

          </div>
        </RevealOnScroll>

        {/* Clevaro Category Tags Bar */}
        <RevealOnScroll direction="up" delay={0.3}>
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider mr-2">Featured Trades:</span>
            {["MEP Engineering", "Commercial Cleaning", "Fire Alarm & Sprinklers", "Gypsum Works", "ACP Cladding", "Manpower Supply", "Utility Infrastructure"].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-[#ffffff] border border-[#163b35]/10 text-xs font-bold text-[#163b35] shadow-2xs hover:bg-[#ddede7] transition-all cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
