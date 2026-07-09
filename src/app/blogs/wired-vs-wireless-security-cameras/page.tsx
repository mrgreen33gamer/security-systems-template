'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faWifi, faNetworkWired, faBolt, faShieldHalved, faBatteryFull, faHouseChimney, faCheck } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Wi-Fi cameras are convenient; PoE wired systems are rock-solid. For Waco homes and small businesses, the right choice depends on power access, internet reliability, and whether you need 24/7 recording you can trust. Here's an honest comparison.",
  },
  {
    type: 'cards',
    heading: 'Wired vs Wireless — Key Tradeoffs',
    cards: [
      { icon: faNetworkWired, title: 'Wired (PoE) reliability', body: 'Power and data over one cable. Fewer dropouts, stronger for permanent installs and multi-camera systems.' },
      { icon: faWifi, title: 'Wireless convenience', body: 'Faster installs and great for rentals or hard-to-wire spots — but depend on Wi-Fi strength and power outlets or batteries.' },
      { icon: faBatteryFull, title: 'Battery cams', body: 'Useful for gates and temporary coverage. Expect charging cycles and more missed events if batteries die.' },
      { icon: faBolt, title: 'Power outages', body: 'Wired NVRs with UPS backup keep recording longer. Cloud-only wireless systems need internet to be useful remotely.' },
      { icon: faShieldHalved, title: 'Tamper resistance', body: 'Hardwired exterior runs are harder to disable casually than a plug-in camera under an eave.' },
      { icon: faHouseChimney, title: 'Central Texas heat', body: 'Choose outdoor-rated gear either way — Texas sun cooks cheap plastic housings.' },
      { icon: faCheck, title: 'Hybrid is OK', body: 'Many homes mix a PoE backbone with one wireless cam for a detached shop or gate.' },
    ],
  },
  {
    type: 'table',
    heading: 'Which Fits Your Situation?',
    tableHeaders: ['Scenario', 'Better Fit', 'Why'],
    tableRows: [
      ['New build / remodel', 'Wired PoE', 'Cables can be run cleanly before drywall closes'],
      ['Rental / apartment', 'Wireless', 'Less permanent modification'],
      ['Business / multi-cam', 'Wired PoE', 'Stability and recording retention'],
      ['Detached gate or barn', 'Wireless or hybrid', 'Long cable runs can be costly'],
      ['Weak porch Wi-Fi', 'Wired or mesh + wireless', 'Fix network first either way'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: WatchPoint Security designs for your property — not a one-size kit. Call (254) 910-1212 for a flat-rate recommendation on wired, wireless, or hybrid.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Test Wi-Fi signal at each planned camera location',
      'Decide if you need continuous recording or motion-only',
      'Ask about NVR vs cloud storage costs over 2–3 years',
      'Plan cable paths before choosing pure wireless',
      'Get a written quote that lists camera type per location',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Wired vs. Wireless Security Cameras: What Works Best in Central Texas"
        description="Wi-Fi cameras are convenient; PoE wired systems are rock-solid. An honest comparison for Waco homes and small businesses choosing reliability, power, and storage."
        imageSrc="/pages/blogs/energy-savings.jpg"
        imageAlt="Wired vs wireless security cameras comparison for Central Texas"
        category="Technology"
        date="June 24, 2026"
        readTime={6}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Not Sure Wired or Wireless?"
        body="We'll walk your property and recommend the right mix — flat-rate quote, no pressure."
        buttonText="Get a Camera Quote"
        buttonHref="/services/security-cameras"
      />
      <NewsletterSignup variant={1} spot="wired-vs-wireless-cameras-blog" />
    </>
  );
}
