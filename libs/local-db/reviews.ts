// libs/local-db/reviews.ts
// ─────────────────────────────────────────────────────────────────────────────
// Static testimonials for WatchPoint Security — used by Testimonials component,
// schema markup, and aggregate rating in layout.tsx.
// ─────────────────────────────────────────────────────────────────────────────

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Security Cameras',
    text:     "We needed full exterior coverage after a break-in down the street. WatchPoint Security designed a four-camera layout, installed it in one day, and walked us through the app. Crystal-clear night vision and no mystery fees. Highly recommend.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Burglar Alarms',
    text:     'Our old alarm panel finally died. WatchPoint had a tech out the same week, replaced sensors, and set up optional monitoring. Fair price, clean work, and they explained every zone. This is the kind of service you tell your neighbors about.',
  },
  {
    name:     'James R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Video Doorbells',
    text:     'Had three companies quote a video doorbell. WatchPoint was honest about our weak porch Wi-Fi and fixed it with a better placement and mesh node — not just upselling the most expensive unit. Clean install and great app training.',
  },
  {
    name:     'Patricia L.',
    location: 'Temple, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Access Control',
    text:     'They upgraded our office from keys to fob access. Scheduling permissions by employee was seamless and the install was clean. No more rekeying after turnover — worth every penny.',
  },
  {
    name:     'David M.',
    location: 'Killeen, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Monitoring Plans',
    text:     'We hired WatchPoint for warehouse cameras plus 24/7 monitoring. They covered docks, entrances, and the yard over a weekend so we would not lose operations. Professional from start to finish.',
  },
  {
    name:     'Angela W.',
    location: 'China Spring, TX',
    rating:   5,
    date:     'October 2025',
    service:  'Smart Home Security',
    text:     'Integrated cameras, door sensors, and smart locks into one app. Lena\'s team made it simple for our family. Peace of mind every night — my go-to security company for life.',
  },
  {
    name:     'Robert H.',
    location: 'Bellmead, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Security Cameras',
    text:     'Needed cameras after package theft. WatchPoint installed two outdoor cams and a doorbell the same week. Fair pricing, clear footage, no after-hours gouge. Highly recommend.',
  },
  {
    name:     'Cheryl B.',
    location: 'McGregor, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Burglar Alarms',
    text:     'Called about false alarms from an aging system. They diagnosed a bad motion sensor, replaced it, and reprogrammed the panel. Treated us like neighbors — thank you.',
  },
];

export default reviews;
