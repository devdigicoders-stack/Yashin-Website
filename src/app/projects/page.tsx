import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";
import { 
  Building2, 
  CheckCircle2, 
  ArrowRight
} from "lucide-react";

export const metadata = {
  title: "Projects & Photographic Site Portfolio | Yashin Facilities Qatar",
  description: "Actual on-site project photographic portfolio and engineering delivery from Yashin Facilities Management brochure.",
};

export default function ProjectsPage() {
  const photoProjects = [
    {
      title: "Commercial Building Facade & ACP Cladding",
      source: "Brochure Page 11",
      category: "Architectural & Civil",
      image: "/media/Gemini_Generated_Image_izp3vsizp3vsizp3.png",
      scope: "Glass Glazing / A.C.P Cladding / Aluminium / Steel Fabrication",
      description: "Installation of multi-story curtain glass glazing, blue-tinted exterior facade, ACP panelling, and site personnel safety management."
    },
    {
      title: "High-Pressure Chiller Pump Room & Manifold Piping",
      source: "Brochure Page 17",
      category: "Heavy MEP Engineering",
      image: "/media/Gemini_Generated_Image_2dwom2dwom2dwom2.png",
      scope: "Industrial Booster Pumps, Check Valves & Flanged Connections",
      description: "High-pressure industrial water circulation pump stations, motor mounts, vibration isolators, and heavy gauge mechanical piping."
    },
    {
      title: "Underground Infrastructure Utility Trenching",
      source: "Brochure Page 17",
      category: "Civil Infrastructure",
      image: "/media/Gemini_Generated_Image_5p8z7i5p8z7i5p8z.png",
      scope: "Deep Trenching, Pipe Jointing & Night-time Shift Operations",
      description: "Continuous utility line excavation, conduit laying, block support chambers, and backfilling for Qatar infrastructure."
    },
    {
      title: "Insulated Chiller Pipe Networks & Acoustic Jacketing",
      source: "Brochure Page 18",
      category: "HVAC & Thermal Systems",
      image: "/media/Gemini_Generated_Image_gqtf8sgqtf8sgqtf.png",
      scope: "Thermal Insulation, Vapor Barriers & Dual Pump Runs",
      description: "High-performance silver foil thermal jacketing over central air-conditioning chilled water supply and return loops."
    },
    {
      title: "Primary Fire Hydrant & Life Safety Pump Station",
      source: "Brochure Page 18",
      category: "Firefighting Protection",
      image: "/media/Gemini_Generated_Image_w7l72cw7l72cw7l7.png",
      scope: "Red Fire Hydrant Loops, Y-Strainers & Pressure Relief Valves",
      description: "Dedicated high-volume firefighting riser manifold installation ensuring immediate fire suppression readiness."
    },
    {
      title: "Architectural 3D Stepped Gypsum Ceiling",
      source: "Brochure Page 9",
      category: "Interior Fit-out",
      image: "/media/Gemini_Generated_Image_3d4a4s3d4a4s3d4a.png",
      scope: "Geometric Curve Modeling & Concealed LED Channels",
      description: "Multi-layered crescent and spiral suspended false ceiling created using precision drywall fastening and seamless taping."
    },
    {
      title: "Industrial Floor Screeding, Painting & Waterproofing",
      source: "Brochure Page 10",
      category: "Surface Finishing",
      image: "/media/Gemini_Generated_Image_mr1bkwmr1bkwmr1b.png",
      scope: "Anti-slip Coatings, Leveling Screeds & Roof Waterproofing",
      description: "Concrete floor preparation, self-leveling screed application, line markings, and membrane waterproofing."
    },
    {
      title: "Site Manpower & Safety Briefing Deployment",
      source: "Brochure Page 11",
      category: "Manpower Logistics",
      image: "/media/Gemini_Generated_Image_1r8fmb1r8fmb1r8f.png",
      scope: "Safety Helmets, High-Vis Vests & Certified Supervision",
      description: "Daily toolbox meetings, PPE enforcement, and coordinated deployment of skilled trade teams across active Qatar job sites."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#f7f8f5]">
      <Navbar />

      {/* Header Banner with On-Site Engineering Infrastructure Background */}
      <section className="relative py-24 sm:py-32 bg-[#0e2722] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/Gemini_Generated_Image_2dwom2dwom2dwom2.png"
            alt="On-Site Industrial Engineering & Pump Stations"
            fill
            priority
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#163b35]/95 via-[#163b35]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <RevealOnScroll direction="up">
            <div className="max-w-3xl">
              <span className="px-3.5 py-1.5 rounded-full bg-[#ddede7]/20 text-[#d8f36a] text-xs font-semibold uppercase tracking-wider mb-4 inline-block">
                Photographic Evidence • Qatar Job Sites
              </span>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6">
                Our Projects & Site Execution
              </h1>
              <p className="text-base sm:text-lg text-[#ddede7]/80 leading-relaxed font-normal">
                Direct photographic documentation from our field projects across Doha, Qatar — 
                spanning glass glazing facades, pump room installations, utility trenching, and false ceilings.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Main Project Portfolio Grid with Photographic Media */}
      <section className="py-20 bg-white border-b border-[#163b35]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <RevealOnScroll direction="up">
            <div className="max-w-2xl mb-14">
              <span className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider">Brochure Deliverables</span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#163b35] tracking-tight mt-2">
                On-Site Engineering Portfolio
              </h2>
              <p className="mt-4 text-[#5e6b66] text-base">
                Every project represents strict compliance with Qatar Civil Defense, architectural accuracy, 
                and uncompromising workmanship.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {photoProjects.map((item, idx) => (
              <RevealOnScroll key={idx} direction="up" delay={idx * 0.06}>
                <div className="overflow-hidden rounded-3xl bg-[#f7f8f5] border border-[#163b35]/8 hover:border-[#163b35]/30 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between h-full group">
                  <div>
                    {/* Project Image */}
                    <div className="relative w-full h-64 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-xs font-bold text-[#163b35] shadow-xs">
                          {item.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full bg-[#163b35]/90 text-[#d8f36a] text-xs font-bold shadow-xs">
                          {item.source}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 sm:p-10">
                      <h3 className="text-2xl font-bold text-[#163b35] mb-3 leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs font-semibold text-[#163b35] mb-4 bg-[#ddede7]/60 px-3.5 py-1.5 rounded-full inline-block">
                        Scope: {item.scope}
                      </p>

                      <p className="text-sm text-[#5e6b66] leading-relaxed mb-6 font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-8 sm:p-10 pt-0">
                    <div className="pt-4 border-t border-[#163b35]/8 flex items-center justify-between text-xs">
                      <span className="text-[#5e6b66] font-medium">State of Qatar Approved</span>
                      <span className="inline-flex items-center gap-1.5 font-bold text-[#163b35]">
                        <CheckCircle2 className="w-4 h-4 text-[#163b35]" />
                        <span>Field Completed</span>
                      </span>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

        </div>
      </section>

      {/* Trust & Quality Assurance Section */}
      <section className="py-20 bg-[#f7f8f5] border-b border-[#163b35]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider">Quality Assurance</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#163b35] mt-2 mb-4">
              Committed to Zero-Defect Handover
            </h2>
            <p className="text-sm sm:text-base text-[#5e6b66] leading-relaxed">
              From high-voltage electrical installations and deep trenching to fine architectural gypsum ceilings, 
              we ensure all client requirements are executed on time and to the highest technical benchmarks.
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#163b35] text-[#d8f36a] text-sm font-bold shadow-md hover:bg-[#1f4e46] transition-all transform hover:scale-105"
            >
              <span>Discuss Your Qatar Project With Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
