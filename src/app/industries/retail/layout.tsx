import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.watchpointsecurity.com';
const url = BASE_URL + '/industries/retail';

export const metadata: Metadata = {
  title: "Retail Stores Security | WatchPoint Security Waco TX",
  description: "Security systems for retail stores in Waco TX — cameras, alarms, access control, and monitoring. After-hours installs available.",
  alternates: { canonical: url },
  openGraph: {
    title: "Retail Stores Security | WatchPoint Security",
    description: "Security systems for retail stores in Waco TX — cameras, alarms, access control, and monitoring. After-hours installs available.",
    url,
    siteName: "WatchPoint Security",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}