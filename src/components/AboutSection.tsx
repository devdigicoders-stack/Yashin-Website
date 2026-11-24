"use client";

import RevealOnScroll from "./RevealOnScroll";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Target, Compass, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#163b35] text-[#f7f8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Clevaro Dark Section Header with Visual Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <RevealOnScroll direction="up">
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ddede7]/15 border border-[#ddede7]/20 text-[#d8f36a] text-xs font-semibold mb-4">
                  <span>More Than Clean. Made With Care.</span>
                </div>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-6">
                  We Clean Spaces. <br />
                  You Enjoy Life.
                </h2>
                <p className="text-base sm:text-lg text-[#ddede7]/80 leading-relaxed font-normal mb-6">
                  Yashin Facilities Management and Services W.L.L. was established in 2014 in Doha, Qatar. 
                  Focused on providing full-time, world-class, and professional services across medium 
                  and large private and commercial facilities, hotels, and condominiums.
                </p>
                <div className="flex items-center gap-4 text-xs font-semibold text-[#ddede7]/70">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#d8f36a]" />
                    <span>Doha HQ Office</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#d8f36a]" />
                    <span>C.R. No. 191809</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#d8f36a]" />
                    <span>Est. 2014</span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-5">
            <RevealOnScroll direction="right" delay={0.15}>
              <div className="relative h-[320px] sm:h-[380px] rounded-3xl overflow-hidden border border-[#ddede7]/15 shadow-2xl group">
                <Image
                  src="/media/about-us-banner.png"
                  alt="Corporate Business Collaboration and Executive Partnership"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d2723]/90 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-[#0d2723]/90 backdrop-blur-md border border-[#ddede7]/10">
                  <p className="text-[11px] text-[#d8f36a] font-bold uppercase tracking-wider">Trusted Management</p>
                  <p className="text-sm font-bold text-white">Full-Spectrum Facility Engineering in Qatar</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* 3 Clevaro Dark Cards with Lime Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" id="values">
          
          <RevealOnScroll direction="up" delay={0.1}>
            <motion.div 
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-[#0d2723] border border-[#ddede7]/10 flex flex-col justify-between h-full group transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#d8f36a] text-[#163b35] flex items-center justify-center font-black mb-6 group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Our Objective</h3>
                <p className="text-sm text-[#ddede7]/70 leading-relaxed">
                  Striving to achieve excellence in facility and MEP services across Doha, Qatar through 
                  creativity, responsiveness, and uncompromising quality standards.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#ddede7]/10 text-xs text-[#d8f36a] font-semibold">
                Excellence in Execution
              </div>
            </motion.div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.2}>
            <motion.div 
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-[#0d2723] border border-[#ddede7]/10 flex flex-col justify-between h-full group transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#d8f36a] text-[#163b35] flex items-center justify-center font-black mb-6 group-hover:scale-110 transition-transform">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Corporate Values</h3>
                <p className="text-sm text-[#ddede7]/70 leading-relaxed">
                  Embracing modern engineering approaches and flexible teamwork that guide day-to-day 
                  decisions and provide a common language to communicate through performance.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#ddede7]/10 text-xs text-[#d8f36a] font-semibold">
                Adaptive Innovation
              </div>
            </motion.div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.3}>
            <motion.div 
              whileHover={{ y: -6 }}
              className="p-8 rounded-3xl bg-[#0d2723] border border-[#ddede7]/10 flex flex-col justify-between h-full group transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#d8f36a] text-[#163b35] flex items-center justify-center font-black mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Integrity First</h3>
                <p className="text-sm text-[#ddede7]/70 leading-relaxed">
                  Reaching the right decisions faster with absolute transparency in actions and motives. 
                  Living by "Walk the talk" and fostering true comradeship & brotherhood.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#ddede7]/10 text-xs text-[#d8f36a] font-semibold">
                Trust & Transparency
              </div>
            </motion.div>
          </RevealOnScroll>

        </div>

        {/* Leadership Spotlight with Real Portraits from media */}
        <RevealOnScroll direction="up" delay={0.35}>
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0d2723] border border-[#ddede7]/10">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold text-[#d8f36a] uppercase tracking-wider">Qatar Executive Leadership</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">Guiding Precision & Vision</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="flex items-center gap-5 p-5 rounded-2xl bg-[#163b35] border border-[#ddede7]/10">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-[#ddede7]/20 shadow-md">
                  <Image
                    src="/media/aboutus.png"
                    alt="Md. Somun Abdul - Managing Director"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Md. Somun Abdul</h4>
                  <p className="text-xs text-[#d8f36a] font-semibold mt-0.5">Managing Director</p>
                  <p className="text-xs text-[#ddede7]/60 mt-1">Overall corporate leadership, strategic vision, and operations in Qatar.</p>
                </div>
              </div>

              <div className="flex items-center gap-5 p-5 rounded-2xl bg-[#163b35] border border-[#ddede7]/10">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-[#ddede7]/20 shadow-md">
                  <Image
                    src="/media/aboutus (2).png"
                    alt="Omar Faruk - Operational Supervisor"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Omar Faruk</h4>
                  <p className="text-xs text-[#d8f36a] font-semibold mt-0.5">Operational Supervisor</p>
                  <p className="text-xs text-[#ddede7]/60 mt-1">On-site technical supervision, trade crew management, and QHSE compliance.</p>
                </div>
              </div>

            </div>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
