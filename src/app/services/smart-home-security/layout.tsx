import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.watchpointsecurity.com';
const url = BASE_URL + '/services/smart-home-security';

export const metadata: Metadata = {
  title: "Smart Home Security Waco TX | WatchPoint Security",
  description: "Smart home security integration in Waco TX — cameras, alarms, locks, and sensors in one system. Licensed alarm company.",
  keywords: [
    "Smart Home Security Waco TX",
    "security systems Waco",
    "WatchPoint Security",
    "licensed alarm company Waco",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Smart Home Security Waco TX | WatchPoint Security",
    description: "Smart home security integration in Waco TX — cameras, alarms, locks, and sensors in one system. Licensed alarm company.",
    url,
    siteName: "WatchPoint Security",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Smart Home Security Waco TX | WatchPoint Security",
    description: "Smart home security integration in Waco TX — cameras, alarms, locks, and sensors in one system. Licensed alarm company.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Smart Home Security",
  description: "Smart home security integration in Waco TX — cameras, alarms, locks, and sensors in one system. Licensed alarm company.",
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
  serviceType: "Smart Home Security",
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