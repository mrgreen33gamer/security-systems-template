import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.watchpointsecurity.com';
const url = BASE_URL + '/services/burglar-alarms';

export const metadata: Metadata = {
  title: "Burglar Alarms Waco TX | WatchPoint Security",
  description: "Burglar alarm installation in Waco and Central Texas. Sensors, panels, sirens, optional 24/7 monitoring. Licensed alarm company, flat-rate quotes.",
  keywords: [
    "Burglar Alarms Waco TX",
    "security systems Waco",
    "WatchPoint Security",
    "licensed alarm company Waco",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Burglar Alarms Waco TX | WatchPoint Security",
    description: "Burglar alarm installation in Waco and Central Texas. Sensors, panels, sirens, optional 24/7 monitoring. Licensed alarm company, flat-rate quotes.",
    url,
    siteName: "WatchPoint Security",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Burglar Alarms Waco TX | WatchPoint Security",
    description: "Burglar alarm installation in Waco and Central Texas. Sensors, panels, sirens, optional 24/7 monitoring. Licensed alarm company, flat-rate quotes.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Burglar Alarms",
  description: "Burglar alarm installation in Waco and Central Texas. Sensors, panels, sirens, optional 24/7 monitoring. Licensed alarm company, flat-rate quotes.",
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
  serviceType: "Burglar Alarms",
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