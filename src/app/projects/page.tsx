import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import { 
  Building2, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  MapPin
} from "lucide-react";

export const metadata = {
  title: "Projects & Photographic Site Portfolio | Yashin Facilities Qatar",
  description: "Actual on-site project photographic portfolio and engineering delivery from Yashin Facilities Management brochure.",
};

export default function ProjectsPage() {
  const photoProjects = [
    {
      title: "Commercial Building Facade & ACP Cladding",
      source: "Doha Commercial Tower",
      category: "Architectural & Civil",
      image: "/media/Gemini_Generated_Image_izp3vsizp3vsizp3.png",
      scope: "Glass Glazing / A.C.P Cladding / Aluminium / Steel Fabrication",
      description: "Installation of multi-story curtain glass glazing, blue-tinted exterior facade, ACP panelling, and site personnel safety management."
    },
    {
      title: "High-Pressure Chiller Pump Room & Manifold Piping",
      source: "Central Utility Plant",
      category: "Heavy MEP Engineering",
      image: "/media/Gemini_Generated_Image_2dwom2dwom2dwom2.png",
      scope: "Industrial Booster Pumps, Check Valves & Flanged Connections",
      description: "High-pressure industrial water circulation pump stations, motor mounts, vibration isolators, and heavy gauge mechanical piping."
    },
    {
      title: "Underground Infrastructure Utility Trenching",
      source: "Qatar Utility Corridor",
      category: "Civil Infrastructure",
      image: "/media/Gemini_Generated_Image_5p8z7i5p8z7i5p8z.png",
      scope: "Deep Trenching, Pipe Jointing & Night-time Shift Operations",
      description: "Continuous utility line excavation, conduit laying, block support chambers, and backfilling for Qatar infrastructure."
    },
    {
      title: "Insulated Chiller Pipe Networks & Acoustic Jacketing",
      source: "Commercial HVAC Substation",
      category: "HVAC & Thermal Systems",
      image: "/media/Gemini_Generated_Image_gqtf8sgqtf8sgqtf.png",
      scope: "Thermal Insulation, Vapor Barriers & Dual Pump Runs",
      description: "High-performance silver foil thermal jacketing over central air-conditioning chilled water supply and return loops."
    },
    {
      title: "Primary Fire Hydrant & Life Safety Pump Station",
      source: "Logistics & Warehousing Park",
      category: "Firefighting Protection",
      image: "/media/Gemini_Generated_Image_w7l72cw7l72cw7l7.png",
      scope: "Red Fire Hydrant Loops, Y-Strainers & Pressure Relief Valves",
      description: "Dedicated high-volume firefighting riser manifold installation ensuring immediate fire suppression readiness."
    },
    {
      title: "Architectural 3D Stepped Gypsum Ceiling",
      source: "Executive Corporate Headquarters",
      category: "Interior Fit-out",
      image: "/media/Gemini_Generated_Image_3d4a4s3d4a4s3d4a.png",
      scope: "Geometric Curve Modeling & Concealed LED Channels",
      description: "Multi-layered suspended false ceiling with acoustic wooden slats created using precision drywall fastening and seamless taping."
    },
    {
      title: "Industrial Floor Screeding, Painting & Waterproofing",
      source: "Commercial Distribution Center",
      category: "Surface Finishing",
      image: "/media/Gemini_Generated_Image_mr1bkwmr1bkwmr1b.png",
      scope: "Anti-slip Coatings, Leveling Screeds & Roof Waterproofing",
      description: "Concrete floor preparation, self-leveling screed application, line markings, and protective membrane waterproofing."
    },
    {
      title: "Site Manpower & Safety Briefing Deployment",
      source: "Active Qatar Construction Sites",
      category: "Manpower Logistics",
      image: "/media/Gemini_Generated_Image_1r8fmb1r8fmb1r8f.png",
      scope: "Safety Helmets, High-Vis Vests & Certified Supervision",
      description: "Daily toolbox meetings, PPE enforcement, and coordinated deployment of skilled trade teams across active Qatar job sites."
    },
    {
      title: "Electrical Substation Breaker & Panelboard Wiring",
      source: "Industrial Power Complex",
      category: "Electrical Engineering",
      image: "/media/Gemini_Generated_Image_sqgdbqsqgdbqsqgd.png",
      scope: "3-Phase Distribution, Busbar Assembly & Circuit Calibration",
      description: "High-voltage main distribution board assembly, cable termination, and precision testing for commercial load stabilization."
    },
    {
      title: "Commercial Air Ductwork Fabrication & Hanging",
      source: "Shopping Mall & Office Plaza",
      category: "HVAC Engineering",
      image: "/media/Gemini_Generated_Image_d7sj57d7sj57d7sj.png",
      scope: "Galvanized Sheet Ducts, Flanges & Diffuser Installation",
      description: "Overhead duct route alignment, acoustic lining, and air distribution grid installation to optimize thermal comfort."
    },
    {
      title: "Commercial Office Sanitization & Custodial Care",
      source: "Corporate Towers, West Bay",
      category: "Facility Hygiene",
      image: "/media/Gemini_Generated_Image_rftpr3rftpr3rftp.png",
      scope: "Deep Floor Scrubbing, Workstation Disinfection & Waste Sorting",
      description: "Full-time janitorial service providing sterile and pristine office environments using eco-certified materials."
    },
    {
      title: "Telecommunications & Remote Satellite Network",
      source: "Remote Site Stations",
      category: "Communications",
      image: "/media/Gemini_Generated_Image_7qhkyl7qhkyl7qhk.png",
      scope: "VSAT Dish Alignment, Server Racks & MSS Transceivers",
      description: "Reliable quasi-global telecommunication infrastructure bridging remote desert sites and central Doha headquarters."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#f7f8f5]">
      <Navbar />

      {/* Header Banner */}
      <section className="relative py-24 sm:py-32 bg-[#163b35] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/media/about-banner.png"
            alt="Doha Skyline Projects"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 z-10">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl">
              <span className="px-3.5 py-1.5 rounded-full bg-[#ddede7]/20 text-[#d8f36a] text-xs font-semibold uppercase tracking-wider mb-4 inline-block">
                On-Site Evidence • State of Qatar
              </span>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6">
                Project Execution & Photographic Evidence
              </h1>
              <p className="text-base sm:text-lg text-[#ddede7]/80 leading-relaxed font-normal">
                Direct photographic evidence of actual MEP, HVAC, firefighting, civil fit-outs, and facilities 
                contracting successfully completed and handed over across Doha and surrounding municipalities.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Projects Photo Grid */}
      <section className="py-20 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photoProjects.map((project, idx) => (
              <RevealOnScroll key={idx} direction="up" delay={idx * 0.05}>
                <div className="rounded-3xl bg-[#f7f8f5] border border-[#163b35]/8 hover:border-[#163b35]/25 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group h-full">
                  <div>
                    {/* Image Box */}
                    <div className="relative h-56 w-full overflow-hidden bg-[#163b35]/5">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="text-[11px] font-bold text-white px-3 py-1 rounded-full bg-[#163b35]/90 backdrop-blur-xs shadow-xs">
                          {project.category}
                        </span>
                        <span className="text-[11px] font-bold text-[#163b35] px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs flex items-center gap-1 shadow-xs">
                          <MapPin className="w-3 h-3 text-[#163b35]" />
                          <span>{project.source}</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-7">
                      <h3 className="text-xl font-bold text-[#163b35] mb-2 leading-snug">
                        {project.title}
                      </h3>
                      
                      <p className="text-xs text-[#5e6b66] leading-relaxed mb-5">
                        {project.description}
                      </p>

                      <div className="p-3.5 rounded-2xl bg-white border border-[#163b35]/8 mb-2">
                        <span className="text-[10px] font-bold text-[#5e6b66] uppercase tracking-wider block mb-1">Scope of Works:</span>
                        <p className="text-xs font-semibold text-[#163b35]">
                          {project.scope}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="px-7 pb-7 pt-2 flex items-center justify-between border-t border-[#163b35]/6">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-[#163b35]">
                      <CheckCircle2 className="w-4 h-4 text-[#163b35]" />
                      <span>Inspected & Verified</span>
                    </span>
                    <span className="text-[11px] font-bold text-[#5e6b66] bg-[#ddede7] px-3 py-1 rounded-full">
                      Qatar Standards
                    </span>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom Certification Notice */}
      <section className="py-16 bg-[#f7f8f5] border-t border-[#163b35]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#163b35] text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold text-[#d8f36a] uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Statutory Compliance Assured</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Need Comprehensive Facilities Contracting for Your Project?
              </h2>
              <p className="text-sm text-[#ddede7]/80 mt-2">
                Contact our Doha engineering office today to review blueprints, book a site inspection, or obtain a certified commercial quotation.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-[#d8f36a] hover:bg-[#c8e658] text-[#163b35] font-bold text-sm tracking-tight transition-transform hover:scale-105 shrink-0 shadow-lg"
            >
              Request Site Assessment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
