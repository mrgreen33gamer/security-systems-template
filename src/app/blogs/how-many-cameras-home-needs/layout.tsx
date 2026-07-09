import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.watchpointsecurity.com';
const url = BASE_URL + '/blogs/how-many-cameras-home-needs';

export const metadata: Metadata = {
  title: "How Many Security Cameras Does Your Home Really Need?",
  description: "How Many Security Cameras Does Your Home Really Need? — practical security guidance from WatchPoint Security in Waco, TX.",
  alternates: { canonical: url },
  openGraph: {
    title: "How Many Security Cameras Does Your Home Really Need? | WatchPoint Security",
    description: "Security tips for Central Texas from WatchPoint Security.",
    url,
    siteName: "WatchPoint Security",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}