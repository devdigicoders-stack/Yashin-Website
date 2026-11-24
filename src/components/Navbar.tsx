"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

      {/* Main Clevaro Navbar: Official Yashin FMS Logo Emblem, Center Pill Navigation, Right Lime CTA Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
        
        {/* Brand Logo with Official Yashin FMS Emblem & Full Corporate Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-white p-1 border border-[#163b35]/15 shadow-sm group-hover:scale-105 transition-transform shrink-0 flex items-center justify-center">
            <Image
              src="/media/yashin-logo.png"
              alt="Yashin Facilities Management & Services W.L.L. Logo"
              width={40}
              height={40}
              priority
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black tracking-tight text-[#163b35] leading-none uppercase">
              YASHIN FACILITIES
            </span>
            <span className="text-[10px] sm:text-[11px] text-[#5e6b66] font-bold tracking-wider uppercase mt-1">
              MANAGEMENT & SERVICES W.L.L.
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
                className={`transition-colors py-1 relative ${
                  isActive
                    ? "text-[#163b35] font-bold"
                    : "text-[#5e6b66] hover:text-[#163b35]"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#163b35] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Action: Clevaro Lime CTA Pill Button */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#d8f36a] hover:bg-[#c8e658] text-[#163b35] font-bold text-xs tracking-tight transition-all shadow-xs hover:scale-105"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#163b35]" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#163b35] hover:bg-[#ddede7] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#ffffff] border-b border-[#163b35]/10 px-6 py-6 overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-bold transition-colors ${
                    pathname === link.href ? "text-[#163b35]" : "text-[#5e6b66]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-[#163b35]/10">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#d8f36a] text-[#163b35] font-bold text-sm tracking-tight"
                >
                  <span>Book Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
