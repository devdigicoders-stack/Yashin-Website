import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
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
      scope: "Glass Glazing / A.C.P Cladding / Aluminium / Steel Fabrication",
      description: "Installation of multi-story curtain glass glazing, blue-tinted exterior facade, ACP panelling, and site personnel safety management."
    },
    {
      title: "High-Pressure Chiller Pump Room & Manifold Piping",
      source: "Brochure Page 17",
      category: "Heavy MEP Engineering",
      scope: "Industrial Booster Pumps, Check Valves & Flanged Connections",
      description: "High-pressure industrial water circulation pump stations, motor mounts, vibration isolators, and heavy gauge mechanical piping."
    },
    {
      title: "Underground Infrastructure Utility Trenching",
      source: "Brochure Page 17",
      category: "Civil Infrastructure",
      scope: "Deep Trenching, Pipe Jointing & Night-time Shift Operations",
      description: "Continuous utility line excavation, conduit laying, block support chambers, and backfilling for Qatar infrastructure."
    },
    {
      title: "Insulated Chiller Pipe Networks & Acoustic Jacketing",
      source: "Brochure Page 18",
      category: "HVAC & Thermal Systems",
      scope: "Thermal Insulation, Vapor Barriers & Dual Pump Runs",
      description: "High-performance silver foil thermal jacketing over central air-conditioning chilled water supply and return loops."
    },
    {
      title: "Primary Fire Hydrant & Life Safety Pump Station",
      source: "Brochure Page 18",
      category: "Firefighting Protection",
      scope: "Red Fire Hydrant Loops, Y-Strainers & Pressure Relief Valves",
      description: "Dedicated high-volume firefighting riser manifold installation ensuring immediate fire suppression readiness."
    },
    {
      title: "Architectural 3D Stepped Gypsum Ceiling",
      source: "Brochure Page 9",
      category: "Interior Fit-out",
      scope: "Geometric Curve Modeling & Concealed LED Channels",
      description: "Multi-layered crescent and spiral suspended false ceiling created using precision drywall fastening and seamless taping."
    },
    {
      title: "Industrial Floor Screeding, Painting & Waterproofing",
      source: "Brochure Page 10",
      category: "Surface Finishing",
      scope: "Anti-slip Coatings, Leveling Screeds & Roof Waterproofing",
      description: "Concrete floor preparation, self-leveling screed application, line markings, and membrane waterproofing."
    },
    {
      title: "Site Manpower & Safety Briefing Deployment",
      source: "Brochure Page 11",
      category: "Manpower Logistics",
      scope: "Safety Helmets, High-Vis Vests & Certified Supervision",
      description: "Daily toolbox meetings, PPE enforcement, and coordinated deployment of skilled trade teams across active Qatar job sites."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#f7f8f5]">
      <Navbar />

      {/* Header Banner */}
      <section className="py-20 sm:py-28 bg-[#163b35] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
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

      {/* Main Project Portfolio Grid with Hover Effects */}
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
                <div className="p-8 sm:p-10 rounded-3xl bg-[#f7f8f5] border border-[#163b35]/8 hover:border-[#163b35]/30 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3.5 py-1 rounded-full bg-[#ddede7] text-[#163b35] text-xs font-bold uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span className="text-xs font-semibold text-[#5e6b66]">
                        {item.source}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#163b35] mb-2 group-hover:text-[#163b35]">
                      {item.title}
                    </h3>

                    <div className="p-3.5 rounded-2xl bg-white border border-[#163b35]/8 mb-4">
                      <p className="text-xs font-bold text-[#163b35]">Technical Scope:</p>
                      <p className="text-xs text-[#5e6b66] mt-0.5 font-medium">{item.scope}</p>
                    </div>

                    <p className="text-sm text-[#5e6b66] leading-relaxed mb-6 font-normal">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#163b35]/8 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#163b35]">
                      <CheckCircle2 className="w-4 h-4 text-[#163b35]" />
                      <span>Verified Field Execution</span>
                    </div>
                    <span className="text-xs font-semibold text-[#5e6b66]">Doha, Qatar</span>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 bg-[#163b35] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center max-w-2xl">
          <RevealOnScroll direction="up">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Do You Need Certified Contractors for Your Project?
            </h2>
            <p className="text-sm sm:text-base text-[#ddede7]/80 mb-8 leading-relaxed font-normal">
              From technical MEP submittals to fast-track site mobilisation, our team is equipped to execute immediately.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#d8f36a] text-[#163b35] font-bold text-sm hover:bg-[#c8e658] transition-all hover:scale-105 cursor-pointer shadow-md"
            >
              <span>Discuss Your Project With Us</span>
              <ArrowRight className="w-4 h-4 text-[#163b35]" />
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </main>
  );
}
