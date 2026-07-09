import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.watchpointsecurity.com';
const url = `${BASE_URL}/service-areas`;

export const metadata: Metadata = {
  title: 'Security System Service Areas | Waco, Hewitt, Killeen, Temple & Central Texas | WatchPoint Security',
  description:
    'WatchPoint Security serves Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Killeen, Temple, and all of Central Texas. Flat-rate pricing, same-day service, 24/7 Monitoring Options · Workmanship Guaranteed.',
  keywords: [
    'security system service areas Central Texas',
    'security camera installation Waco TX',
    'security technician Hewitt TX',
    'security technician Killeen TX',
    'security technician Temple TX',
    'WatchPoint Security service areas',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Security System Service Areas | WatchPoint Security — Central Texas',
    description:
      'Serving Waco and all of Central Texas with flat-rate security camera installation, burglar alarm installation, and installation. Same-day service available.',
    url,
    siteName: 'WatchPoint Security',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security System Service Areas | WatchPoint Security — Central Texas',
    description: 'Waco, Temple, Killeen, and surrounding Central Texas — licensed security system service.',
  },
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
