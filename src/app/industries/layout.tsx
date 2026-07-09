import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.watchpointsecurity.com';
const url = `${BASE_URL}/industries`;

export const metadata: Metadata = {
  title: "Industries We Serve | Property Management, Retail Stores & Commercial | WatchPoint Security",
  description:
    "WatchPoint Security serves property management companies, retail stores & remodelers, and warehouses & logistics across Waco and Central Texas with security camera installation, installation, and maintenance.",
  keywords: [
    "security system property management Waco",
    "homebuilder security systems Texas",
    "commercial security systems Waco TX",
    "multi-unit security system service",
    "WatchPoint Security industries",
  ],
  alternates: { canonical: url },
  openGraph: {
    title: "Industries We Serve | WatchPoint Security",
    description: "Security system programs for property managers, retail stores, and warehouses & logistics in Central Texas.",
    url,
    siteName: "WatchPoint Security",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
