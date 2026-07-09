import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.watchpointsecurity.com';
const url = BASE_URL + '/services/security-cameras';

export const metadata: Metadata = {
  title: "Security Cameras Waco TX | WatchPoint Security",
  description: "HD indoor and outdoor security camera installation in Waco and Central Texas. Night vision, remote viewing, flat-rate quotes. Licensed alarm company.",
  keywords: [
    "Security Cameras Waco TX",
    "security systems Waco",
    "WatchPoint Security",
    "licensed alarm company Waco",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Security Cameras Waco TX | WatchPoint Security",
    description: "HD indoor and outdoor security camera installation in Waco and Central Texas. Night vision, remote viewing, flat-rate quotes. Licensed alarm company.",
    url,
    siteName: "WatchPoint Security",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Cameras Waco TX | WatchPoint Security",
    description: "HD indoor and outdoor security camera installation in Waco and Central Texas. Night vision, remote viewing, flat-rate quotes. Licensed alarm company.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Security Cameras",
  description: "HD indoor and outdoor security camera installation in Waco and Central Texas. Night vision, remote viewing, flat-rate quotes. Licensed alarm company.",
  provider: {
    "@type": "SecurityBusiness",
    name: "WatchPoint Security",
    url: BASE_URL,
    telephone: "+12549101212",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2500 W Waco Dr",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76707",
      addressCountry: "US",
    },
  },
  areaServed: [
    { "@type": "City", name: "Waco", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen", containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  serviceType: "Security Cameras",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}