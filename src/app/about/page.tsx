import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealOnScroll from "@/components/RevealOnScroll";
import Image from "next/image";
import { 
  Target, 
  Compass, 
  Shield, 
  CheckCircle,
  Award
} from "lucide-react";

export const metadata = {
  title: "About Us | Yashin Facilities Management W.L.L. Qatar",
  description: "Detailed corporate profile, history since 2014, vision, mission, and leadership of Yashin Facilities Management in Doha, Qatar.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#f7f8f5]">
      <Navbar />

      {/* Hero Banner with Corporate Leadership & Skyline Background */}
      <section className="relative py-24 sm:py-32 bg-[#0e2722] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/media/Gemini_Generated_Image_28mi0w28mi0w28mi.png"
            alt="Corporate Partnership & Engineering Qatar"
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
                Corporate Profile • Doha, Qatar
              </span>
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6">
                About Yashin Facilities Management
              </h1>
              <p className="text-base sm:text-lg text-[#ddede7]/80 leading-relaxed font-normal">
                Founded and established in Doha, Qatar in 2014, driven by the increasing trend 
                in construction activities in the country and dedicated to full-time world-class service.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 1: About Us Narrative with Banner Image */}
      <section className="py-20 bg-white border-b border-[#163b35]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          {/* Top Banner Image of Collaboration */}
          <RevealOnScroll direction="up">
            <div className="relative w-full h-72 sm:h-96 rounded-3xl overflow-hidden mb-16 shadow-lg">
              <Image
                src="/media/Gemini_Generated_Image_28mi0w28mi0w28mi.png"
                alt="Yashin Corporate Engineering and Qatar Construction Leadership"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#163b35]/80 via-transparent to-transparent flex items-end p-8">
                <span className="px-4 py-2 rounded-full bg-[#ffffff]/90 backdrop-blur-xs text-xs font-bold text-[#163b35]">
                  Over a Decade of Contracting Excellence Across Qatar
                </span>
              </div>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <RevealOnScroll direction="left">
                <span className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider">Company Background</span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#163b35] mt-2 mb-6">
                  Experienced, Dedicated, & Inspired by Qatar's Growth
                </h2>
                <div className="space-y-4 text-sm text-[#5e6b66] leading-relaxed font-normal">
                  <p>
                    <strong>Yashin Facilities Management and Hospitality & Cleaning Services W.L.L.</strong> was 
                    founded and established in Doha, Qatar by an experienced and dedicated leadership, inspired by the 
                    increasing trend in construction activities in the country.
                  </p>
                  <p>
                    Yashin Facilities Management has focused its collective efforts to provide full-time, world-class, 
                    and professional services across a diverse range of medium and private projects, industrial and 
                    commercial structures, condominiums, hotels, and institutional facilities; with interior decoration, 
                    supply of manpower, and maintenance as the company's known strong points.
                  </p>
                  <p>
                    Yashin Facilities Management has been exposed, and apparently excelled, in architectural design, and 
                    general construction Mechanical, Electrical & Plumbing (MEP) for over years. The ingenuity and effective 
                    approach on doing things have earned high respect and trust from clients across Qatar.
                  </p>
                </div>
              </RevealOnScroll>
            </div>

            {/* Leadership Cards with Real Photos */}
            <div className="lg:col-span-5 space-y-6">
              <RevealOnScroll direction="right" delay={0.1}>
                <div className="p-6 rounded-3xl bg-[#f7f8f5] border border-[#163b35]/8 hover:border-[#163b35]/30 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex items-center gap-5">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-[#163b35]">
                    <Image
                      src="/media/aboutus.png"
                      alt="Md. Somun Abdul - Managing Director"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#163b35]">MD. SOMUN ABDUL</h3>
                    <p className="text-xs font-bold text-[#163b35] uppercase tracking-wider">Managing Director</p>
                    <p className="text-xs text-[#5e6b66] mt-1 font-medium">Yashin Facilities Management and Services W.L.L.</p>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll direction="right" delay={0.2}>
                <div className="p-6 rounded-3xl bg-[#f7f8f5] border border-[#163b35]/8 hover:border-[#163b35]/30 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex items-center gap-5">
                  <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-[#ddede7]">
                    <Image
                      src="/media/aboutus (2).png"
                      alt="Omar Faruk - Operations Supervisor"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#163b35]">OMAR FARUK</h3>
                    <p className="text-xs font-bold text-[#163b35] uppercase tracking-wider">Operations Supervisor</p>
                    <p className="text-xs text-[#5e6b66] mt-1 font-medium">Field Projects, Logistics & Safety Standards</p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: Foreword & Introduction with Media Images */}
      <section className="py-20 bg-[#f7f8f5] border-b border-[#163b35]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            <RevealOnScroll direction="up" delay={0.05}>
              <div className="overflow-hidden rounded-3xl bg-white border border-[#163b35]/8 hover:border-[#163b35]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between h-full group">
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src="/media/introduction.png"
                    alt="Digital Facilities Technology Foreword"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold text-[#163b35] px-3 py-1 rounded-full bg-white/90 shadow-xs">
                      Brochure Foreword
                    </span>
                  </div>
                </div>
                <div className="p-8 sm:p-10">
                  <h3 className="text-2xl font-black text-[#163b35] mb-4">
                    A Decade of Continuous Progress Since 2014
                  </h3>
                  <div className="space-y-3 text-sm text-[#5e6b66] leading-relaxed font-normal">
                    <p>
                      "It brings me great pleasure to introduce Yashin Facilities Management and Hospitality & Cleaning 
                      Services W.L.L. and to highlight our company's achievements. This seed, which was established in 2014, 
                      has steadily grown and continued to show immense progress."
                    </p>
                    <p>
                      "Our philosophy is not to resist change, but rather to adapt ourselves in the face of new challenges 
                      and take advantage of the newest innovations. As a quality leader, Yashin Facilities Management and 
                      Services W.L.L. continues to be a company that maintains the highest standards in quality goods and 
                      services."
                    </p>
                  </div>
                  <p className="text-xs font-bold text-[#163b35] mt-6 pt-4 border-t border-[#163b35]/8">
                    — Thanks & Best Regards, Management Team
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.15}>
              <div className="overflow-hidden rounded-3xl bg-white border border-[#163b35]/8 hover:border-[#163b35]/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between h-full group">
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src="/media/Gemini_Generated_Image_1r8fmb1r8fmb1r8f.png"
                    alt="Quality Improvement & Skilled Workforce"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-bold text-[#163b35] px-3 py-1 rounded-full bg-white/90 shadow-xs">
                      Workplace Standards
                    </span>
                  </div>
                </div>
                <div className="p-8 sm:p-10">
                  <h3 className="text-2xl font-black text-[#163b35] mb-4">
                    Quality Improvement & Skilled Workforce
                  </h3>
                  <div className="space-y-3 text-sm text-[#5e6b66] leading-relaxed font-normal">
                    <p>
                      "We believe in creating a workplace where our personnel at all levels of the organization assume full 
                      responsibility for the quality of work productively and creatively, in an environment in which every worker 
                      feels involved and committed to the success of the business."
                    </p>
                    <p>
                      "Whether it is a major construction project or a minor maintenance service, we are committed to serve 
                      and satisfy you to the fullest extent. For us, our service is our investment. We believe in the right 
                      blend of dynamism and innovation, and we encourage team efforts in all our activities."
                    </p>
                  </div>
                  <p className="text-xs font-bold text-[#163b35] mt-6 pt-4 border-t border-[#163b35]/8">
                    — Quality & Safety Operations Division
                  </p>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* SECTION 3: Objective, Values & Integrity with Media Images */}
      <section className="py-20 bg-white border-b border-[#163b35]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <RevealOnScroll direction="up">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider">Corporate Philosophy</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#163b35] mt-2">
                Our Objective, Value & Integrity
              </h2>
              <p className="mt-2 text-sm text-[#5e6b66]">
                Guiding our day-to-day operations and field engineering standards.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <RevealOnScroll direction="up" delay={0.05}>
              <div className="overflow-hidden rounded-3xl bg-[#f7f8f5] border border-[#163b35]/8 hover:border-[#163b35]/30 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full flex flex-col justify-between group">
                <div className="relative w-full h-44 overflow-hidden">
                  <Image
                    src="/media/Gemini_Generated_Image_8ejc1s8ejc1s8ejc.png"
                    alt="Corporate Objective"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="w-10 h-10 rounded-full bg-[#163b35] text-[#d8f36a] flex items-center justify-center font-bold mb-4">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#163b35] mb-3">Our Objective</h3>
                  <p className="text-sm text-[#5e6b66] leading-relaxed font-normal">
                    "Yashin Facilities Management and Services W.L.L. strives to achieve excellence in marketing goods and 
                    services in Doha - Qatar through creativity, innovativeness and quality service. Aims to satisfy specific 
                    needs of the whole community."
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.15}>
              <div className="overflow-hidden rounded-3xl bg-[#f7f8f5] border border-[#163b35]/8 hover:border-[#163b35]/30 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full flex flex-col justify-between group">
                <div className="relative w-full h-44 overflow-hidden">
                  <Image
                    src="/media/Gemini_Generated_Image_x1prs6x1prs6x1pr.png"
                    alt="Our Value"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="w-10 h-10 rounded-full bg-[#163b35] text-[#d8f36a] flex items-center justify-center font-bold mb-4">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#163b35] mb-3">Our Value</h3>
                  <p className="text-sm text-[#5e6b66] leading-relaxed font-normal">
                    "A company that embraces changes and is flexible enough to create new structures and approaches. At the 
                    foundation of these efforts are values which serve to guide day-to-day decision making in all activities. 
                    Its culture is to provide a common language to communicate about 'who we are' through performance."
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll direction="up" delay={0.25}>
              <div className="overflow-hidden rounded-3xl bg-[#f7f8f5] border border-[#163b35]/8 hover:border-[#163b35]/30 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full flex flex-col justify-between group">
                <div className="relative w-full h-44 overflow-hidden">
                  <Image
                    src="/media/Gemini_Generated_Image_xsgs5ixsgs5ixsgs.png"
                    alt="Integrity and Trust"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="w-10 h-10 rounded-full bg-[#163b35] text-[#d8f36a] flex items-center justify-center font-bold mb-4">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-[#163b35] mb-3">Integrity</h3>
                  <p className="text-sm text-[#5e6b66] leading-relaxed font-normal">
                    "Integrity allows reaching the right decision faster and giving the speed needed to be competitive. At the 
                    heart, integrity is transparency in its action, motives and intentions. 'Walk the talk' and creation of 
                    company feeling, comradeship & brotherhood."
                  </p>
                </div>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* SECTION 4: Our Vision & 5 Key Attributers */}
      <section className="py-20 bg-[#163b35] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <RevealOnScroll direction="up">
            <div className="max-w-3xl mb-12">
              <span className="px-3 py-1 rounded-full bg-[#ddede7]/20 text-[#d8f36a] text-xs font-semibold uppercase tracking-wider mb-4 inline-block">
                Strategic Vision
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-4">
                Our Vision for Qatar
              </h2>
              <p className="text-sm sm:text-base text-[#ddede7]/80 leading-relaxed font-normal">
                "Yashin Facilities Management and Services W.L.L. vision is to be the leader & corporate in the field of 
                construction in Qatar. To build, maintain and perpetuate continuing relationship with every customer through 
                total commitment to quality without compromise, timely completion, excellent construction and safety performance."
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              "To be a valued and respected partner.",
              "To be a preferred services provider.",
              "To deliver consistent returns to all stakeholders.",
              "To be an innovative and cost-effective partner.",
              "To be a preferred employer."
            ].map((text, idx) => (
              <RevealOnScroll key={idx} direction="up" delay={idx * 0.05}>
                <div className="p-6 rounded-3xl bg-[#0d2723] border border-[#ddede7]/10 hover:border-[#d8f36a]/40 hover:bg-[#163b35] transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col justify-between h-full">
                  <span className="w-8 h-8 rounded-full bg-[#d8f36a] text-[#163b35] flex items-center justify-center font-bold text-xs mb-4">
                    0{idx + 1}
                  </span>
                  <p className="text-sm font-bold text-white leading-relaxed">{text}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
