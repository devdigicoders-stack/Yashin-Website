import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <style dangerouslySetInnerHTML={{
          __html: `
            body { font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
            h1, h2, h3, .font-heading { font-family: 'Space Grotesk', 'Plus Jakarta Sans', sans-serif; letter-spacing: -0.03em; }
          `
        }} />
      </head>
      <body className="min-h-screen bg-[#f7f8f5] text-[#17201d] antialiased selection:bg-[#d8f36a] selection:text-[#163b35]">
        {children}
      </body>
    </html>
  );
}
