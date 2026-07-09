import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.watchpointsecurity.com';
const url = BASE_URL + '/services/monitoring-plans';

export const metadata: Metadata = {
  title: "Monitoring Plans Waco TX | WatchPoint Security",
  description: "Optional 24/7 professional security monitoring plans in Waco and Central Texas. Flexible, no long-term lock-in required.",
  keywords: [
    "Monitoring Plans Waco TX",
    "security systems Waco",
    "WatchPoint Security",
    "licensed alarm company Waco",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Monitoring Plans Waco TX | WatchPoint Security",
    description: "Optional 24/7 professional security monitoring plans in Waco and Central Texas. Flexible, no long-term lock-in required.",
    url,
    siteName: "WatchPoint Security",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Monitoring Plans Waco TX | WatchPoint Security",
    description: "Optional 24/7 professional security monitoring plans in Waco and Central Texas. Flexible, no long-term lock-in required.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Monitoring Plans",
  description: "Optional 24/7 professional security monitoring plans in Waco and Central Texas. Flexible, no long-term lock-in required.",
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
  serviceType: "Monitoring Plans",
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