import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.watchpointsecurity.com';
const url = BASE_URL + '/blogs/access-control-for-small-business';

export const metadata: Metadata = {
  title: "Access Control for Small Business",
  description: "Access Control for Small Business — practical security guidance from WatchPoint Security in Waco, TX.",
  alternates: { canonical: url },
  openGraph: {
    title: "Access Control for Small Business | WatchPoint Security",
    description: "Security tips for Central Texas from WatchPoint Security.",
    url,
    siteName: "WatchPoint Security",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}