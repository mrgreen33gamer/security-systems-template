'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faVideo, faExclamationTriangle, faShieldHalved, faHouseChimney, faEye, faClock, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "More cameras is not always better security. In Waco and across Central Texas, the right camera count comes from mapping entry points, blind spots, and how your family actually uses the property — not from buying the biggest kit on the shelf. Here's how to size a residential camera system honestly.",
  },
  {
    type: 'cards',
    heading: 'Camera Coverage Essentials',
    cards: [
      { icon: faMapLocationDot, title: 'Start with entry points', body: 'Front door, back door, garage, and ground-floor windows drive most residential risk. Cover those first.' },
      { icon: faEye, title: 'Eliminate blind spots', body: 'Walk your property at night. Dark side yards and alley access often need one outdoor camera more than a second living-room cam.' },
      { icon: faVideo, title: 'Quality beats quantity', body: 'Four well-placed HD cameras with night vision beat eight grainy ones pointing at the sky.' },
      { icon: faHouseChimney, title: 'Typical Waco homes', body: 'Most single-family homes land between 3–6 cameras for solid perimeter and driveway coverage.' },
      { icon: faShieldHalved, title: 'Record what matters', body: 'Make sure you can identify faces and plates at key approaches — not just see that "someone was there."' },
      { icon: faClock, title: 'Plan for growth', body: 'Start with essentials; leave capacity to add a package cam or backyard camera later.' },
      { icon: faExclamationTriangle, title: 'Avoid sales-driven overbuy', body: 'If a quote doubles camera count without explaining coverage gaps, ask for a layout map.' },
    ],
  },
  {
    type: 'table',
    heading: 'Quick Sizing Guide',
    tableHeaders: ['Home Type', 'Typical Cameras', 'Priority Zones'],
    tableRows: [
      ['Small home / townhome', '2–4', 'Front door, rear, driveway'],
      ['Average single-family', '3–6', 'Perimeter + garage + side yard'],
      ['Large lot / rural edge', '5–8', 'Driveway approach + all sides'],
      ['Home + detached shop', '4–8', 'House + shop + connecting path'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: A free on-site assessment from WatchPoint Security maps coverage before you buy. Call (254) 910-1212 — flat-rate quotes, no pressure packages.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Sketch your property and mark every exterior door',
      'Note dark areas and package drop spots',
      'Decide whether you need driveway plate capture',
      'Ask for a camera layout map with every quote',
      'Pair cameras with a doorbell for the front entrance',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="How Many Security Cameras Does Your Home Really Need?"
        description="Coverage beats camera count. Learn how to map entry points, blind spots, and outdoor zones so your Waco home gets the right number of cameras — not the most expensive package."
        imageSrc="/pages/blogs/heat-pump.jpg"
        imageAlt="How many security cameras a home needs — guide for Waco TX homeowners"
        category="Cameras"
        date="July 3, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Want a Camera Layout Map for Your Home?"
        body="Get a free on-site assessment from WatchPoint Security — licensed technicians, flat-rate quotes, workmanship guaranteed."
        buttonText="Schedule Camera Assessment"
        buttonHref="/services/security-cameras"
      />
      <NewsletterSignup variant={1} spot="how-many-cameras-home-needs-blog" />
    </>
  );
}
