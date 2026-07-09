// src/app/services/layout.tsx
// WatchPoint Security — /services parent layout
import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.watchpointsecurity.com';
const url = `${BASE_URL}/services`;

export const metadata: Metadata = {
  title: "Security System Services | Cameras, Alarms, Access Control | WatchPoint Security",
  description:
    "WatchPoint Security offers security cameras, burglar alarms, access control, video doorbells, smart home security, and monitoring plans for Waco and Central Texas. Licensed alarm company, workmanship guaranteed.",
  keywords: [
    "security camera installation Waco TX",
    "security system services Waco",
    "burglar alarm Central Texas",
    "access control Waco TX",
    "security systems company Texas",
    "commercial security systems Waco",
    "licensed alarm company Waco",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Security System Services | WatchPoint Security",
    description:
      "Cameras, alarms, access control, video doorbells, smart home security, and monitoring for Waco and Central Texas. Licensed, workmanship guaranteed.",
    url,
    siteName: "WatchPoint Security",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security System Services | WatchPoint Security",
    description: "Cameras, alarms, access control & more for Central Texas. Licensed alarm company.",
  },
  robots: { index: true, follow: true },
};

const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "WatchPoint Security — Security System Services",
  description:
    "Residential and commercial security system services for Waco and Central Texas: cameras, burglar alarms, access control, video doorbells, smart home security, and monitoring plans.",
  provider: {
    "@type": "SecurityBusiness",
    name: "WatchPoint Security",
    url: BASE_URL,
    telephone: "+12549101212",
    address: { "@type": "PostalAddress", addressLocality: "Waco", addressRegion: "TX", addressCountry: "US" },
  },
  itemListElement: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Security Cameras", url: `${BASE_URL}/services/security-cameras` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Burglar Alarms", url: `${BASE_URL}/services/burglar-alarms` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Access Control", url: `${BASE_URL}/services/access-control` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Video Doorbells", url: `${BASE_URL}/services/video-doorbell` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Smart Home Security", url: `${BASE_URL}/services/smart-home-security` } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Monitoring Plans", url: `${BASE_URL}/services/monitoring-plans` } },
  ],
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema) }} />
      {children}
    </>
  );
}
