import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.watchpointsecurity.com';
const url = BASE_URL + '/blogs/wired-vs-wireless-security-cameras';

export const metadata: Metadata = {
  title: "Wired vs. Wireless Security Cameras",
  description: "Wired vs. Wireless Security Cameras — practical security guidance from WatchPoint Security in Waco, TX.",
  alternates: { canonical: url },
  openGraph: {
    title: "Wired vs. Wireless Security Cameras | WatchPoint Security",
    description: "Security tips for Central Texas from WatchPoint Security.",
    url,
    siteName: "WatchPoint Security",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}