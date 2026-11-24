"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";
import { ArrowRight, Award, Shield, Users, CheckCircle, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 bg-[#f7f8f5] overflow-hidden">
      
      {/* Subtle background ambient light */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d8f36a]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-[#ddede7]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Clevaro Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <RevealOnScroll direction="up" delay={0.05}>
              <div>
                
                {/* Clevaro Badge */}
                <motion.div 
                  whileHover={{ scale: 1.03 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ffffff] border border-[#163b35]/12 text-[#163b35] text-xs font-bold mb-6 shadow-xs cursor-default"
                >
                  <span className="w-2 h-2 rounded-full bg-[#163b35] animate-ping" />
                  <span>State of Qatar • Commercial Registration 191809</span>
                </motion.div>

                {/* Clevaro Headline */}
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-[#163b35] tracking-tight leading-[1.04] mb-6">
                  A Cleaner Space. <br />
                  <span className="relative inline-block">
                    A Better Life.
                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#d8f36a]" viewBox="0 0 100 12" preserveAspectRatio="none">
                      <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>

                {/* Sub-headline */}
                <p className="text-base sm:text-xl text-[#5e6b66] leading-relaxed mb-8 max-w-2xl font-normal">
                  Reliable MEP engineering, civil fit-outs, fire safety, and facilities maintenance 
                  designed around your commercial towers, hotels, and properties in Qatar.
                </p>

                {/* Dual CTA with hover animations */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#d8f36a] hover:bg-[#c8e658] text-[#163b35] font-black text-sm tracking-tight transition-all shadow-md"
                    >
                      <span>Get a Free Quote</span>
                      <ArrowRight className="w-4 h-4 text-[#163b35]" />
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#ffffff] hover:bg-[#163b35] hover:text-[#d8f36a] border border-[#163b35]/15 text-[#163b35] font-bold text-sm tracking-tight transition-all duration-300 shadow-xs"
                    >
                      <span>Explore All Services</span>
                    </Link>
                  </motion.div>
                </div>

              </div>
            </RevealOnScroll>
          </div>

          {/* Hero Visual Showcase with 3D Tilt & Subtle Rotate on Hover */}
          <div className="lg:col-span-5">
            <RevealOnScroll direction="right" delay={0.15}>
              <div className="relative">
                
                {/* Main Hero Visual Card from media with subtle hover rotation and scale */}
                <motion.div 
                  whileHover={{ rotate: 1, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative h-[430px] sm:h-[500px] rounded-3xl overflow-hidden border-2 border-[#163b35]/15 shadow-2xl group bg-white"
                >
                  <Image
                    src="/media/Gemini_Generated_Image_if39cgif39cgif39.png"
                    alt="Yashin Facilities Qatar Engineering Skyline & Commercial Towers"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle clean contrast gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#163b35]/85 via-[#163b35]/20 to-transparent" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-5 left-5">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#163b35]/10 text-xs font-black text-[#163b35] shadow-md">
                      <Sparkles className="w-3.5 h-3.5 text-[#163b35]" />
                      <span>Qatar Premier MEP & Contracting</span>
                    </span>
                  </div>

                  {/* Floating Overlay Badge positioned clearly on the right half with no overlap */}
                  <div className="absolute bottom-5 right-5 sm:left-48 sm:right-5 p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#163b35]/10 flex items-center justify-between shadow-xl z-20">
                    <div>
                      <p className="text-[10px] sm:text-[11px] text-[#5e6b66] font-bold uppercase tracking-wider">Active Qatar Operations</p>
                      <p className="text-xs sm:text-sm font-black text-[#163b35]">Doha Towers & MEP Sites</p>
                    </div>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#d8f36a] text-[#163b35] flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 ml-3 shadow-xs">
                      ✓
                    </div>
                  </div>
                </motion.div>

                {/* Secondary Inset Visual Card with high z-index and clean placement */}
                <motion.div 
                  whileHover={{ rotate: -2, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-40 sm:w-48 h-40 sm:h-48 rounded-3xl overflow-hidden border-4 border-white shadow-2xl hidden sm:block bg-white cursor-pointer group z-10"
                >
                  <Image
                    src="/media/about-banner.png"
                    alt="Doha Qatar Skyline Night"
                    fill
                    sizes="200px"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#163b35]/75 to-transparent" />
                  <div className="absolute bottom-2.5 left-2 right-2 text-center">
                    <span className="px-2 py-0.5 rounded-full bg-[#163b35]/90 text-[#d8f36a] text-[9px] font-black uppercase tracking-wider">
                      Doha, Qatar
                    </span>
                  </div>
                </motion.div>

              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Clevaro Trust Bar with Color-fill and Rotation on Hover */}
        <RevealOnScroll direction="up" delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-7 rounded-3xl bg-[#ffffff] border border-[#163b35]/10 shadow-xs mb-12">
            
            <motion.div 
              whileHover={{ y: -4, rotate: -1 }}
              transition={{ duration: 0.2 }}
              className="group flex items-center gap-3.5 p-3 rounded-2xl hover:bg-[#163b35] transition-colors duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#ddede7] group-hover:bg-[#d8f36a] text-[#163b35] flex items-center justify-center shrink-0 font-bold transition-colors duration-300">
                <Award className="w-6 h-6 text-[#163b35]" />
              </div>
              <div>
                <p className="text-xl font-black text-[#163b35] group-hover:text-white transition-colors duration-300 leading-none">10+ Years</p>
                <p className="text-xs text-[#5e6b66] group-hover:text-[#ddede7] transition-colors duration-300 mt-1 font-medium">Established in 2014</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4, rotate: 1 }}
              transition={{ duration: 0.2 }}
              className="group flex items-center gap-3.5 p-3 rounded-2xl hover:bg-[#163b35] transition-colors duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#ddede7] group-hover:bg-[#d8f36a] text-[#163b35] flex items-center justify-center shrink-0 font-bold transition-colors duration-300">
                <Shield className="w-6 h-6 text-[#163b35]" />
              </div>
              <div>
                <p className="text-xl font-black text-[#163b35] group-hover:text-white transition-colors duration-300 leading-none">C.R. 191809</p>
                <p className="text-xs text-[#5e6b66] group-hover:text-[#ddede7] transition-colors duration-300 mt-1 font-medium">State of Qatar Registered</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4, rotate: -1 }}
              transition={{ duration: 0.2 }}
              className="group flex items-center gap-3.5 p-3 rounded-2xl hover:bg-[#163b35] transition-colors duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#ddede7] group-hover:bg-[#d8f36a] text-[#163b35] flex items-center justify-center shrink-0 font-bold transition-colors duration-300">
                <Users className="w-6 h-6 text-[#163b35]" />
              </div>
              <div>
                <p className="text-xl font-black text-[#163b35] group-hover:text-white transition-colors duration-300 leading-none">100+ Staff</p>
                <p className="text-xs text-[#5e6b66] group-hover:text-[#ddede7] transition-colors duration-300 mt-1 font-medium">Trained Qatar Trades</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4, rotate: 1 }}
              transition={{ duration: 0.2 }}
              className="group flex items-center gap-3.5 p-3 rounded-2xl hover:bg-[#163b35] transition-colors duration-300 cursor-default"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#ddede7] group-hover:bg-[#d8f36a] text-[#163b35] flex items-center justify-center shrink-0 font-bold transition-colors duration-300">
                <CheckCircle className="w-6 h-6 text-[#163b35]" />
              </div>
              <div>
                <p className="text-xl font-black text-[#163b35] group-hover:text-white transition-colors duration-300 leading-none">QCDD Ready</p>
                <p className="text-xs text-[#5e6b66] group-hover:text-[#ddede7] transition-colors duration-300 mt-1 font-medium">Full Safety Compliance</p>
              </div>
            </motion.div>

          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
