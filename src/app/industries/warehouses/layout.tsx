import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.watchpointsecurity.com';
const url = BASE_URL + '/industries/warehouses';

export const metadata: Metadata = {
  title: "Warehouses & Logistics Security | WatchPoint Security Waco TX",
  description: "Warehouse and logistics security in Waco TX — dock cameras, yard coverage, access control, and 24/7 monitoring options.",
  alternates: { canonical: url },
  openGraph: {
    title: "Warehouses & Logistics Security | WatchPoint Security",
    description: "Warehouse and logistics security in Waco TX — dock cameras, yard coverage, access control, and 24/7 monitoring options.",
    url,
    siteName: "WatchPoint Security",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}