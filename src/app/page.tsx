import Link from "next/link";
import Image from "next/image";
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
    { 
      title: "Ducting & HVAC", 
      desc: "Complete ventilation and duct installation",
      image: "/media/Gemini_Generated_Image_d7sj57d7sj57d7sj.png"
    },
    { 
      title: "Plumbing Works", 
      desc: "Domestic, commercial & industrial piping",
      image: "/media/Gemini_Generated_Image_l3ebsjl3ebsjl3eb.png"
    },
    { 
      title: "Electrical Engineering", 
      desc: "Power distribution & substation equipment",
      image: "/media/Gemini_Generated_Image_sqgdbqsqgdbqsqgd.png"
    },
    { 
      title: "Masonry & Civil", 
      desc: "Structural brickwork & concrete installations",
      image: "/media/Gemini_Generated_Image_f8x7wof8x7wof8x7.png"
    },
    { 
      title: "Carpentry Works", 
      desc: "Architectural woodwork and interior joinery",
      image: "/media/Gemini_Generated_Image_wgnqa9wgnqa9wgnq.png"
    },
    { 
      title: "Welding & Steel", 
      desc: "Certified pipe and structural steel fabrication",
      image: "/media/Gemini_Generated_Image_xid9epxid9epxid9.png"
    },
    { 
      title: "Industrial Painting", 
      desc: "Epoxy, roof waterproofing & protective coatings",
      image: "/media/Gemini_Generated_Image_dnvqz2dnvqz2dnvq.png"
    },
    { 
      title: "Firefighting Systems", 
      desc: "Hydrants, sprinklers, alarms & AMC",
      image: "/media/Gemini_Generated_Image_w7l72cw7l72cw7l7.png"
    },
    { 
      title: "Gypsum False Ceilings", 
      desc: "3D stepped ceilings & acoustic drywall",
      image: "/media/Gemini_Generated_Image_3d4a4s3d4a4s3d4a.png"
    },
    { 
      title: "ACP Cladding & Glazing", 
      desc: "Aluminium facades & curtain wall glazing",
      image: "/media/Gemini_Generated_Image_izp3vsizp3vsizp3.png"
    },
    { 
      title: "House & Office Cleaning", 
      desc: "Deep cleaning & post-construction sanitization",
      image: "/media/Gemini_Generated_Image_rftpr3rftpr3rftp.png"
    },
    { 
      title: "Skilled Manpower Supply", 
      desc: "Certified trade labor & site supervisors",
      image: "/media/Gemini_Generated_Image_1r8fmb1r8fmb1r8f.png"
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#f7f8f5]">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Core Contracting Grid */}
      <section className="py-12 sm:py-16 bg-[#ffffff] border-t border-[#163b35]/8">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {tradeIndexList.map((trade, i) => (
              <RevealOnScroll key={i} direction="up" delay={i * 0.04}>
                <Link
                  href="/services"
                  className="group relative overflow-hidden rounded-3xl bg-[#f7f8f5] border border-[#163b35]/10 hover:border-[#163b35] hover:bg-[#163b35] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full flex flex-col justify-between"
                >
                  {/* Card Image Container with animated hover zoom and color overlay */}
                  <div className="relative w-full h-44 overflow-hidden bg-[#163b35]/5">
                    <Image
                      src={trade.image}
                      alt={trade.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                    {/* Dynamic color tint overlay that animates on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-[#163b35]/90 group-hover:via-[#163b35]/40 group-hover:to-transparent transition-all duration-300" />
                    
                    {/* Floating pill badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffffff]/90 group-hover:bg-[#d8f36a] text-[#163b35] text-[11px] font-black tracking-tight shadow-sm transition-colors duration-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#163b35]" />
                        <span>Core Trade</span>
                      </span>
                    </div>
                  </div>

                  {/* Content area: seamlessly inverts colors on card hover */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-[#163b35] group-hover:text-[#ffffff] transition-colors duration-300 mb-1.5 leading-snug">
                        {trade.title}
                      </h3>
                      <p className="text-xs text-[#5e6b66] group-hover:text-[#ddede7] transition-colors duration-300 leading-relaxed">
                        {trade.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#163b35]/10 group-hover:border-white/15 mt-4 flex items-center justify-between transition-colors duration-300">
                      <span className="text-[11px] font-bold text-[#5e6b66] group-hover:text-[#d8f36a] transition-colors duration-300">
                        Explore Discipline
                      </span>
                      <div className="w-7 h-7 rounded-full bg-[#ddede7] group-hover:bg-[#d8f36a] flex items-center justify-center transition-all duration-300 group-hover:translate-x-1">
                        <ArrowRight className="w-3.5 h-3.5 text-[#163b35]" />
                      </div>
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#163b35] hover:bg-[#0d2723] text-[#d8f36a] text-xs font-bold transition-all shadow-md hover:scale-105 cursor-pointer"
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
