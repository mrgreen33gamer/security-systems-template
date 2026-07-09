import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.watchpointsecurity.com';
const url = `${BASE_URL}/about`;

export const metadata: Metadata = {
  title: "About WatchPoint Security — Waco TX Security System Company Since 2008",
  description:
    "Meet the WatchPoint Security team. Locally owned and operated in Waco, Texas since 2008. licensed security technicians, bonded & insured, honest pricing, and a 24/7 Monitoring Options · Workmanship Guaranteed. Serving Waco, Hewitt, Woodway, Temple, Killeen, and all of Central Texas.",
  keywords: [
    "about WatchPoint Security",
    "Waco security systems company",
    "security system contractor Waco TX",
    "locally owned security system Waco",
    "licensed alarm company Waco Texas",
    "Lena Ortiz WatchPoint Security",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "About WatchPoint Security — Waco TX Security System Company Since 2008",
    description:
      "Locally owned security systems company in Waco, TX. licensed, flat-rate pricing, 24/7 Monitoring Options · Workmanship Guaranteed.",
    url,
    siteName: "WatchPoint Security",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About WatchPoint Security — Waco TX Since 2008",
    description: "Locally owned security systems company in Waco, TX. licensed, flat-rate pricing.",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "SecurityBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "WatchPoint Security",
  url: BASE_URL,
  telephone: "+12549101212",
  email: "hello@watchpointsecurity.com",
  foundingDate: "2008",
  founder: {
    "@type": "Person",
    name: "Lena Ortiz",
    jobTitle: "Owner & Lead Security Systems Specialist",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "2500 W Waco Dr",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76707",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.facebook.com/watchpointsecurity",
  ],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      {children}
    </>
  );
}
