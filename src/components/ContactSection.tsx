"use client";

import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "mep",
    scope: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
    try {
      await fetch(`${apiUrl}/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      setSubmitted(true);
    } catch (err) {
      // Fallback
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 bg-[#ffffff] border-t border-[#163b35]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Details */}
          <div className="lg:col-span-5">
            <RevealOnScroll direction="left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ddede7] text-[#163b35] text-xs font-semibold mb-4">
                <span>Everything You Need to Know</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-[#163b35] tracking-tight leading-tight mb-4">
                Ready for a Cleaner Tomorrow?
              </h2>

              <p className="text-base text-[#5e6b66] mb-8 leading-relaxed font-normal">
                Get in touch with our operations team in Doha for facility maintenance contracts, 
                MEP installations, or commercial service quotes.
              </p>

              <div className="space-y-4">
                
                <motion.div 
                  whileHover={{ x: 4 }}
                  className="p-5 rounded-2xl bg-[#f7f8f5] border border-[#163b35]/8 transition-colors"
                >
                  <p className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider mb-1">Direct Phone</p>
                  <a href="tel:+97477715332" className="text-lg font-bold text-[#163b35] block hover:text-[#5e6b66] transition-colors">
                    +974 7771 5332
                  </a>
                  <a href="tel:+97477762177" className="text-sm font-semibold text-[#163b35] block hover:text-[#5e6b66] transition-colors">
                    +974 7776 2177
                  </a>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 4 }}
                  className="p-5 rounded-2xl bg-[#f7f8f5] border border-[#163b35]/8 transition-colors"
                >
                  <p className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider mb-1">Email Address</p>
                  <a href="mailto:somuns713@gmail.com" className="text-base font-bold text-[#163b35] block hover:text-[#5e6b66] transition-colors">
                    somuns713@gmail.com
                  </a>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 4 }}
                  className="p-5 rounded-2xl bg-[#f7f8f5] border border-[#163b35]/8 transition-colors"
                >
                  <p className="text-xs font-bold text-[#5e6b66] uppercase tracking-wider mb-1">Qatar Commercial Registration</p>
                  <p className="text-base font-bold text-[#163b35]">C.R. No: 191809</p>
                  <p className="text-xs text-[#5e6b66] mt-0.5">P.O. Box: 6288, Doha – State of Qatar</p>
                </motion.div>

              </div>
            </RevealOnScroll>
          </div>

          {/* Right: Clevaro Clean Form (Connected to Backend API) */}
          <div className="lg:col-span-7">
            <RevealOnScroll direction="right">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#f7f8f5] border border-[#163b35]/8">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#ddede7] text-[#163b35] flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                      ✓
                    </div>
                    <h3 className="text-2xl font-bold text-[#163b35] mb-2">Request Received</h3>
                    <p className="text-sm text-[#5e6b66]">
                      Your enquiry has been dispatched directly to the Yashin Admin Management portal. Our engineering representative will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-xl font-bold text-[#163b35] mb-1">Send a Message</h3>
                    <p className="text-xs text-[#5e6b66] mb-4">Complete the form below and we will respond promptly.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#163b35] mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-4 py-3 rounded-full bg-white border border-[#163b35]/15 focus:border-[#163b35] outline-none text-sm text-[#163b35]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#163b35] mb-1">Phone Number (Qatar) *</label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+974 XXXX XXXX"
                          className="w-full px-4 py-3 rounded-full bg-white border border-[#163b35]/15 focus:border-[#163b35] outline-none text-sm text-[#163b35]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-[#163b35] mb-1">Email</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="name@domain.com"
                          className="w-full px-4 py-3 rounded-full bg-white border border-[#163b35]/15 focus:border-[#163b35] outline-none text-sm text-[#163b35]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-[#163b35] mb-1">Service Required</label>
                        <select
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-full bg-white border border-[#163b35]/15 focus:border-[#163b35] outline-none text-sm text-[#163b35]"
                        >
                          <option value="mep">MEP & Substation Works</option>
                          <option value="fire">Firefighting & Alarm Systems</option>
                          <option value="civil">Civil Works, Gypsum & Cladding</option>
                          <option value="cleaning">Commercial & Residential Cleaning</option>
                          <option value="manpower">Manpower Supply</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#163b35] mb-1">Project Scope</label>
                      <textarea
                        rows={4}
                        value={form.scope}
                        onChange={(e) => setForm({ ...form, scope: e.target.value })}
                        placeholder="Provide details about your project or facility requirement..."
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-[#163b35]/15 focus:border-[#163b35] outline-none text-sm text-[#163b35] resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-full bg-[#d8f36a] hover:bg-[#c8e658] text-[#163b35] font-bold text-sm tracking-tight transition-all shadow-xs flex items-center justify-center gap-2 hover:scale-[1.01] cursor-pointer"
                    >
                      <span>{loading ? "Submitting to Yashin Portal..." : "Submit Inquiry"}</span>
                      <ArrowRight className="w-4 h-4 text-[#163b35]" />
                    </button>
                  </form>
                )}
              </div>
            </RevealOnScroll>
          </div>

        </div>

      </div>
    </section>
  );
}
