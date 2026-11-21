"use client";

import RevealOnScroll from "./RevealOnScroll";
import { motion } from "framer-motion";
import { Shield, Target, Compass, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#163b35] text-[#f7f8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Clevaro Dark Section Header */}
        <RevealOnScroll direction="up">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ddede7]/15 border border-[#ddede7]/20 text-[#d8f36a] text-xs font-semibold mb-4">
              <span>More Than Clean. Made With Care.</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-6">
              We Clean Spaces. <br />
              You Enjoy Life.
            </h2>
            <p className="text-base sm:text-lg text-[#ddede7]/80 leading-relaxed font-normal">
              Yashin Facilities Management and Services W.L.L. was established in 2014 in Doha, Qatar. 
              Focused on providing full-time, world-class, and professional services across medium 
              and large private and commercial facilities, hotels, and condominiums.
            </p>
          </div>
        </RevealOnScroll>

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

        {/* Leadership Spotlight */}
        <RevealOnScroll direction="up" delay={0.35}>
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0d2723] border border-[#ddede7]/10">
            <div className="max-w-xl mb-8">
              <span className="text-xs uppercase tracking-widest text-[#d8f36a] font-bold">Key Leadership</span>
              <h3 className="text-2xl font-bold text-white mt-1">Experienced Management in Qatar</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#163b35] border border-[#ddede7]/10">
                <div className="w-12 h-12 rounded-full bg-[#d8f36a] text-[#163b35] flex items-center justify-center font-black text-lg">
                  SA
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">MD. SOMUN ABDUL</h4>
                  <p className="text-xs font-semibold text-[#d8f36a]">Managing Director</p>
                  <p className="text-[11px] text-[#ddede7]/70 mt-0.5">Yashin Facilities Management W.L.L.</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-[#163b35] border border-[#ddede7]/10">
                <div className="w-12 h-12 rounded-full bg-[#ffffff] text-[#163b35] flex items-center justify-center font-black text-lg">
                  OF
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">OMAR FARUK</h4>
                  <p className="text-xs font-semibold text-[#d8f36a]">Operations Supervisor</p>
                  <p className="text-[11px] text-[#ddede7]/70 mt-0.5">Field Projects & Safety Standards</p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
