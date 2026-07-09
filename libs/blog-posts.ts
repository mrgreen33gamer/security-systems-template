// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'how-many-cameras-home-needs',
    title:    'How Many Security Cameras Does Your Home Really Need?',
    excerpt:  'Coverage beats camera count. Learn how to map entry points, blind spots, and outdoor zones so your Waco home gets the right number of cameras — not the most expensive package.',
    category: 'Cameras',
    date:     'July 3, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/heat-pump.jpg',
    imageAlt: 'How many security cameras a home needs — guide for Waco TX homeowners',
    featured: true,
  },
  {
    slug:     'wired-vs-wireless-security-cameras',
    title:    'Wired vs. Wireless Security Cameras: What Works Best in Central Texas',
    excerpt:  'Wi-Fi cameras are convenient; PoE wired systems are rock-solid. An honest comparison for Waco homes and small businesses choosing reliability, power, and storage.',
    category: 'Technology',
    date:     'June 24, 2026',
    readTime: 6,
    imageSrc: '/pages/blogs/energy-savings.jpg',
    imageAlt: 'Wired vs wireless security cameras comparison for Central Texas',
  },
  {
    slug:     'access-control-for-small-business',
    title:    'Access Control for Small Business: Keypads, Fobs & Smart Locks',
    excerpt:  'Stop rekeying locks every time an employee leaves. How keypads, fobs, and cloud access control improve security and accountability for retail and office spaces.',
    category: 'Access Control',
    date:     'June 15, 2026',
    readTime: 8,
    imageSrc: '/pages/blogs/ac-replacement.jpg',
    imageAlt: 'Access control systems for small business in Waco TX',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }
