import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.watchpointsecurity.com';

export const metadata: Metadata = {
  title: 'Security Tips & Insights | WatchPoint Security Blog',
  description:
    'Security System safety tips, burglar alarm installation guides, and door maintenance advice for Waco and Central Texas homeowners from WatchPoint Security.',
  alternates: { canonical: `${BASE_URL}/blogs` },
  openGraph: {
    title: 'Security Tips & Insights | WatchPoint Security Blog',
    description: 'Practical security system guidance for Central Texas homeowners.',
    url: `${BASE_URL}/blogs`,
    siteName: 'WatchPoint Security',
    locale: 'en_US',
    type: 'website',
  },
};

export default function BlogsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
