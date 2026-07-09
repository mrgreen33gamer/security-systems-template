import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.watchpointsecurity.com';
const url = BASE_URL + '/industries/property-management';

export const metadata: Metadata = {
  title: "Property Management Security | WatchPoint Security Waco TX",
  description: "Security systems for property managers in Waco TX — multi-unit cameras, access control, and monitoring. Portfolio pricing available.",
  alternates: { canonical: url },
  openGraph: {
    title: "Property Management Security | WatchPoint Security",
    description: "Security systems for property managers in Waco TX — multi-unit cameras, access control, and monitoring. Portfolio pricing available.",
    url,
    siteName: "WatchPoint Security",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}