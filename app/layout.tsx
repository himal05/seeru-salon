import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const sans = Manrope({ variable: "--font-sans", subsets: ["latin"] });
const serif = Cormorant_Garamond({ variable: "--font-serif", subsets: ["latin"] });
const devanagari = Noto_Sans_Devanagari({ variable: "--font-devanagari", subsets: ["devanagari"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://aabha-beauty.example"),
  title: { default: "Aabha by Sirjana | Premium Beauty Salon & Academy Nepal", template: "%s | Aabha by Sirjana" },
  description: "Professional hair, bridal makeup, nails, skin, spa and beauty academy services in Kathmandu, Nepal.",
  keywords: ["Beauty Salon in Nepal", "Hair Salon Kathmandu", "Bridal Makeup Nepal", "Beauty Academy Nepal"],
  openGraph: { title: "Aabha by Sirjana", description: "Beauty, designed around you.", type: "website", locale: "en_NP", images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Aabha by Sirjana — Beauty, designed around you." }] },
  twitter: { card: "summary_large_image", title: "Aabha by Sirjana", description: "Beauty, designed around you.", images: ["/og.png"] },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context":"https://schema.org", "@type":"BeautySalon", name:"Aabha by Sirjana", telephone:"9864460351", address:{"@type":"PostalAddress",addressLocality:"Kathmandu",addressCountry:"NP"}, priceRange:"Rs. [EDITABLE]" };
  return <html lang="en"><body className={`${sans.variable} ${serif.variable} ${devanagari.variable}`}>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} /></body></html>;
}
