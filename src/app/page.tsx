import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import RevealOnScroll from "@/components/RevealOnScroll";
import { ArrowRight, Wrench, Shield, CheckCircle2 } from "lucide-react";

export default function Home() {
  const tradeIndexList = [
    { title: "Ducting & HVAC", desc: "Complete ventilation and duct installation" },
    { title: "Plumbing Works", desc: "Domestic, commercial & industrial piping" },
    { title: "Electrical Engineering", desc: "Power distribution & substation equipment" },
    { title: "Masonry & Civil", desc: "Structural brickwork & concrete installations" },
    { title: "Carpentry Works", desc: "Architectural woodwork and interior joinery" },
    { title: "Welding & Steel", desc: "Certified pipe and structural steel fabrication" },
    { title: "Industrial Painting", desc: "Epoxy, roof waterproofing & protective coatings" },
    { title: "Firefighting Systems", desc: "Hydrants, sprinklers, alarms & AMC" },
    { title: "Gypsum False Ceilings", desc: "3D stepped ceilings & acoustic drywall" },
    { title: "ACP Cladding & Glazing", desc: "Aluminium facades & curtain wall glazing" },
    { title: "House & Office Cleaning", desc: "Deep cleaning & post-construction sanitization" },
    { title: "Skilled Manpower Supply", desc: "Certified trade labor & site supervisors" }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#f7f8f5]">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Core Contracting Grid */}
      <section className="py-20 bg-[#ffffff] border-t border-[#163b35]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider">
                Comprehensive Trade Portfolio
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#163b35] tracking-tight mt-2">
                Our Core Contracting & Trade Disciplines
              </h2>
              <p className="mt-4 text-[#5e6b66] text-base sm:text-lg">
                Directly delivered by our certified in-house workforce across Qatar's commercial, residential, and industrial sites.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {tradeIndexList.map((trade, i) => (
              <RevealOnScroll key={i} direction="up" delay={i * 0.04}>
                <div className="p-6 rounded-3xl bg-[#f7f8f5] border border-[#163b35]/8 hover:border-[#163b35]/30 hover:bg-[#ffffff] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group h-full flex flex-col justify-between">
                  <div>
                    <div className="w-3 h-3 rounded-full bg-[#d8f36a] mb-4 group-hover:scale-150 transition-transform duration-300" />
                    <h3 className="text-base font-bold text-[#163b35] mb-1.5 group-hover:text-[#163b35]">{trade.title}</h3>
                    <p className="text-xs text-[#5e6b66] leading-relaxed">{trade.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-[#163b35]/8 mt-4 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#5e6b66] group-hover:text-[#163b35]">Explore</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#163b35] group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#163b35] hover:bg-[#0d2723] text-[#d8f36a] text-xs font-bold transition-all shadow-sm hover:scale-105 cursor-pointer"
            >
              <span>View Detailed Breakdown of All Services</span>
              <ArrowRight className="w-4 h-4 text-[#d8f36a]" />
            </Link>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </main>
  );
}
