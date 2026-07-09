// src/app/contact/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.watchpointsecurity.com';
const url = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: 'Contact WatchPoint Security | Schedule Service in Waco & Central Texas',
  description:
    'Contact WatchPoint Security to schedule security camera installation, burglar alarm installation, or a free estimate. Serving Waco, Hewitt, Killeen, Temple, and all of Central Texas. Call (254) 910-1212.',
  keywords: [
    'contact WatchPoint Security',
    'security system service Waco TX',
    'schedule security camera installation Waco',
    'security system estimate Central Texas',
    'WatchPoint Security contact',
    '254-910-1212',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact WatchPoint Security | Schedule Service in Waco & Central Texas',
    description:
      'Call, text, or submit a request. Same-day service available. Flat-rate pricing, 24/7 Monitoring Options · Workmanship Guaranteed, licensed security technicians.',
    url,
    siteName: 'WatchPoint Security',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact WatchPoint Security | Waco & Central Texas',
    description: 'Schedule security system service or get a free estimate. Call (254) 910-1212.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
