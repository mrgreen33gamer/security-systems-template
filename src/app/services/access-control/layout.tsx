import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.watchpointsecurity.com';
const url = BASE_URL + '/services/access-control';

export const metadata: Metadata = {
  title: "Access Control Waco TX | WatchPoint Security",
  description: "Access control systems for offices and multi-unit properties in Waco TX. Keypads, fobs, smart locks. Licensed, bonded & insured.",
  keywords: [
    "Access Control Waco TX",
    "security systems Waco",
    "WatchPoint Security",
    "licensed alarm company Waco",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Access Control Waco TX | WatchPoint Security",
    description: "Access control systems for offices and multi-unit properties in Waco TX. Keypads, fobs, smart locks. Licensed, bonded & insured.",
    url,
    siteName: "WatchPoint Security",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Access Control Waco TX | WatchPoint Security",
    description: "Access control systems for offices and multi-unit properties in Waco TX. Keypads, fobs, smart locks. Licensed, bonded & insured.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Access Control",
  description: "Access control systems for offices and multi-unit properties in Waco TX. Keypads, fobs, smart locks. Licensed, bonded & insured.",
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
  serviceType: "Access Control",
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