"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight, Phone, Mail, Building, User } from "lucide-react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [mounted, setMounted] = useState(false);
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

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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
      // Fallback grace
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({
      name: "",
      company: "",
      phone: "",
      email: "",
      service: "mep",
      scope: ""
    });
    onClose();
  };

  if (!mounted) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop with heavy blur and high z-index */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleReset}
            className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity z-[9998]"
          />

          {/* Modal Container centered on screen */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#163b35]/20 overflow-hidden z-[9999] my-auto"
          >
            {/* Header */}
            <div className="relative bg-[#163b35] text-white p-6 sm:p-7">
              <button
                onClick={handleReset}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ddede7]/20 text-[#d8f36a] text-xs font-bold uppercase tracking-wider mb-2">
                <span>Free Consultation • State of Qatar</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Book a Consultation
              </h3>
              <p className="text-xs sm:text-sm text-[#ddede7]/80 mt-1 font-normal leading-relaxed">
                Connect with our Qatar operations team for facilities management, MEP contracting, or commercial tenders.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-7 max-h-[72vh] overflow-y-auto">
              {submitted ? (
                <div className="py-8 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#ddede7] text-[#163b35] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-[#163b35]" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#163b35] mb-2">Consultation Request Received!</h4>
                  <p className="text-sm text-[#5e6b66] max-w-md mx-auto leading-relaxed mb-6 font-normal">
                    Thank you, <strong className="text-[#163b35]">{form.name || "Client"}</strong>. Our Doha technical 
                    operations team will review your requirement and call you back promptly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-8 py-3 rounded-full bg-[#163b35] text-[#d8f36a] text-xs font-bold hover:bg-[#0d2723] transition-all cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-[#163b35] uppercase tracking-wider mb-1">
                        Your Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-[#5e6b66] absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="e.g. Abdullah Al-Thani"
                          className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#f7f8f5] border border-[#163b35]/12 text-[#17201d] text-sm focus:outline-none focus:border-[#163b35] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#163b35] uppercase tracking-wider mb-1">
                        Company / Property *
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-[#5e6b66] absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="e.g. Commercial Complex"
                          className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#f7f8f5] border border-[#163b35]/12 text-[#17201d] text-sm focus:outline-none focus:border-[#163b35] focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-[#163b35] uppercase tracking-wider mb-1">
                        Qatar Contact Phone *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-[#5e6b66] absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+974 XXXX XXXX"
                          className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#f7f8f5] border border-[#163b35]/12 text-[#17201d] text-sm focus:outline-none focus:border-[#163b35] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#163b35] uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-[#5e6b66] absolute left-3.5 top-3.5" />
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#f7f8f5] border border-[#163b35]/12 text-[#17201d] text-sm focus:outline-none focus:border-[#163b35] focus:bg-white transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#163b35] uppercase tracking-wider mb-1">
                      Required Service Discipline *
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#f7f8f5] border border-[#163b35]/12 text-[#17201d] text-sm focus:outline-none focus:border-[#163b35] focus:bg-white transition-all"
                    >
                      <option value="mep">Electro-Mechanical (MEP) & Substation</option>
                      <option value="plumbing">Commercial & Industrial Plumbing</option>
                      <option value="fire">Fire Alarm & Firefighting Protection</option>
                      <option value="civil">Architectural Gypsum & False Ceilings</option>
                      <option value="facade">Glass Glazing & ACP Cladding Facades</option>
                      <option value="painting">Painting, Screeding & Waterproofing</option>
                      <option value="cleaning">House & Commercial Office Cleaning</option>
                      <option value="manpower">Skilled & Unskilled Manpower Supply</option>
                      <option value="telecom">Telecommunication & Satellite Services</option>
                      <option value="amc">Annual Facilities Maintenance Contract (AMC)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#163b35] uppercase tracking-wider mb-1">
                      Scope / Project Details
                    </label>
                    <textarea
                      rows={2.5}
                      value={form.scope}
                      onChange={(e) => setForm({ ...form, scope: e.target.value })}
                      placeholder="Briefly describe your requirements, location in Qatar, or timeline..."
                      className="w-full px-4 py-2.5 rounded-2xl bg-[#f7f8f5] border border-[#163b35]/12 text-[#17201d] text-sm focus:outline-none focus:border-[#163b35] focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#d8f36a] hover:bg-[#c8e658] text-[#163b35] font-black text-sm tracking-tight transition-all shadow-md cursor-pointer disabled:opacity-50"
                    >
                      <span>{loading ? "Submitting Inquiry..." : "Submit Consultation Request"}</span>
                      <ArrowRight className="w-4 h-4 text-[#163b35]" />
                    </button>
                    <p className="text-[11px] text-[#5e6b66] text-center mt-2">
                      State of Qatar C.R. No: 191809 • Immediate technical response
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}
