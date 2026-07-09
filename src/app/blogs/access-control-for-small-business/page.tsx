'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faKey, faIdCard, faUserSlash, faClipboardList, faLock, faStore, faClock } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Every time an employee leaves, rekeying locks costs money and never feels complete. Access control — keypads, fobs, cards, and smart locks — gives small businesses in Waco real control over who enters, when, and with an audit trail that holds up. Here's how to think about it.",
  },
  {
    type: 'cards',
    heading: 'Access Control Benefits for Small Business',
    cards: [
      { icon: faUserSlash, title: 'Instant offboarding', body: 'Disable a fob or code the day someone leaves — no locksmith visit required.' },
      { icon: faClipboardList, title: 'Audit trails', body: 'See who opened the stock room or rear door and when — useful for shrink investigations.' },
      { icon: faClock, title: 'Time schedules', body: 'Allow morning openers earlier access without handing out master keys.' },
      { icon: faLock, title: 'Zone control', body: 'Staff on the floor don\'t need the same access as managers and accountants.' },
      { icon: faIdCard, title: 'Credential options', body: 'PINs, fobs, cards, and mobile credentials — pick what staff will actually use.' },
      { icon: faStore, title: 'Retail & office ready', body: 'Even a single controlled entrance transforms security for small shops and suites.' },
      { icon: faKey, title: 'Fewer keys floating around', body: 'Physical keys get copied. Digital credentials get revoked.' },
    ],
  },
  {
    type: 'table',
    heading: 'Common Small-Business Setups',
    tableHeaders: ['Business Type', 'Typical Setup', 'Priority'],
    tableRows: [
      ['Retail shop', 'Front + stock room', 'After-hours + inventory'],
      ['Professional office', 'Suite entry + server room', 'Client privacy + IT'],
      ['Clinic / studio', 'Main door + supply', 'Hours-based access'],
      ['Light warehouse', 'Office + dock door', 'Contractor logs'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: WatchPoint Security designs access systems that managers can run without an IT department. Call (254) 910-1212 for a flat-rate small-business quote.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'List every exterior and high-value interior door',
      'Note who needs access and during which hours',
      'Decide if you need audit logs for compliance or insurance',
      'Pair access control with cameras at critical doors',
      'Budget for credentials and manager training',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Access Control for Small Business: Keypads, Fobs & Smart Locks"
        description="Stop rekeying locks every time an employee leaves. How keypads, fobs, and cloud access control improve security and accountability for retail and office spaces."
        imageSrc="/pages/blogs/ac-replacement.jpg"
        imageAlt="Access control systems for small business in Waco TX"
        category="Access Control"
        date="June 15, 2026"
        readTime={8}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Ready to Ditch Shared Keys?"
        body="Get a flat-rate access control quote from WatchPoint Security — licensed, bonded & insured."
        buttonText="Get Access Control Quote"
        buttonHref="/services/access-control"
      />
      <NewsletterSignup variant={1} spot="access-control-small-business-blog" />
    </>
  );
}
