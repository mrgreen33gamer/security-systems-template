import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.watchpointsecurity.com';
const url = BASE_URL + '/services/video-doorbell';

export const metadata: Metadata = {
  title: "Video Doorbells Waco TX | WatchPoint Security",
  description: "Professional video doorbell installation in Waco and Central Texas. Chime setup, Wi-Fi optimization, app training. Flat-rate pricing.",
  keywords: [
    "Video Doorbells Waco TX",
    "security systems Waco",
    "WatchPoint Security",
    "licensed alarm company Waco",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Video Doorbells Waco TX | WatchPoint Security",
    description: "Professional video doorbell installation in Waco and Central Texas. Chime setup, Wi-Fi optimization, app training. Flat-rate pricing.",
    url,
    siteName: "WatchPoint Security",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Doorbells Waco TX | WatchPoint Security",
    description: "Professional video doorbell installation in Waco and Central Texas. Chime setup, Wi-Fi optimization, app training. Flat-rate pricing.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Video Doorbells",
  description: "Professional video doorbell installation in Waco and Central Texas. Chime setup, Wi-Fi optimization, app training. Flat-rate pricing.",
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
  serviceType: "Video Doorbells",
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