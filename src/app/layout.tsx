import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yashin Facilities Management & Services W.L.L. | Doha, Qatar",
  description: "Leader in MEP, Civil Construction, Firefighting, Architectural Fit-outs, and Professional Facility Management Services in Doha, Qatar. C.R. No: 191809.",
  keywords: "Facilities Management Qatar, MEP Doha, Cleaning Services Qatar, Civil Contracting, Fire Alarm System Qatar, Yashin Facilities WLL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${plusJakarta.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-[#f7f8f5] text-[#17201d] antialiased selection:bg-[#d8f36a] selection:text-[#163b35] font-sans">
        {children}
      </body>
    </html>
  );
}
