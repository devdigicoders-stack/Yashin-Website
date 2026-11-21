"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f7f8f5]/85 backdrop-blur-md border-b border-[#163b35]/8">
      
      {/* Clevaro Top Utility Row */}
      <div className="bg-[#163b35] text-[#ddede7] text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#d8f36a] inline-block animate-pulse" />
            <span className="font-semibold text-white">Yashin Facilities Management & Services W.L.L.</span>
            <span className="hidden sm:inline text-[#ddede7]/80">| C.R. No: 191809 • Doha, Qatar</span>
          </div>
          <div className="flex items-center space-x-6 text-xs font-medium">
            <a href="tel:+97477715332" className="hover:text-[#d8f36a] transition-colors">
              Tel: +974 7771 5332 / 7776 2177
            </a>
          </div>
        </div>
      </div>

      {/* Main Clevaro Navbar: Pill Logo, Center Pill Navigation, Right Lime CTA Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        
        {/* Brand Logo (Exact Clevaro geometric pill style) */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-[#163b35] text-[#d8f36a] flex items-center justify-center font-extrabold text-base shadow-xs group-hover:scale-105 transition-transform">
            ✦
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-extrabold tracking-tight text-[#163b35] leading-none uppercase">
              YASHIN
            </span>
            <span className="text-[10px] text-[#5e6b66] font-bold tracking-wider uppercase">
              FACILITIES W.L.L.
            </span>
          </div>
        </Link>

        {/* Center Navigation Links (Exact Clevaro floating pill container) */}
        <nav className="hidden md:flex items-center bg-[#ffffff] px-6 py-2 rounded-full border border-[#163b35]/8 shadow-xs space-x-7 text-sm font-semibold text-[#17201d]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors py-1 ${
                  isActive
                    ? "text-[#163b35] font-black"
                    : "text-[#5e6b66] hover:text-[#163b35]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button (Clevaro Lime Rounded Pill Button with Dark Text) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#d8f36a] hover:bg-[#c8e658] text-[#163b35] font-bold text-sm tracking-tight transition-all shadow-xs transform hover:scale-[1.02]"
          >
            <span>Book a Service</span>
            <ArrowUpRight className="w-4 h-4 text-[#163b35]" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full bg-white border border-[#163b35]/10 text-[#163b35]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-[#163b35]/10 px-6 py-5 shadow-xl"
          >
            <div className="flex flex-col space-y-4 text-sm font-semibold text-[#163b35]">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-1 ${pathname === link.href ? "text-[#163b35] font-black" : "text-[#5e6b66]"}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 w-full text-center py-3 rounded-full bg-[#d8f36a] text-[#163b35] font-bold text-sm shadow-xs"
              >
                Book a Service
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
