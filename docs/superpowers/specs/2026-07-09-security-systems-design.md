# Security Systems Template — Design Spec

## Context

Scott Apps trade template reskin: fork of `security-systems-template` into `security-systems-template`, sibling-cloned patterns from `garage-door-template`. Per-city SEO subpages deleted. `/projects` route deleted.

## Business Identity (locked)

| Field | Value |
|-------|--------|
| **Business name** | WatchPoint Security |
| **Tagline** | Cameras · Alarms · Access Control · Smart Home |
| **Location** | Waco, TX |
| **Service cities** | Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead |
| **Founded** | 2008 |
| **Owner** | Lena Ortiz |
| **License** | Licensed Alarm Company · Bonded & Insured |
| **Guarantee** | 24/7 Monitoring Options · Workmanship Guaranteed |
| **Social proof** | 4.9★, 1,300+ reviews, 6,500+ installs |
| **Accent hex** | `#1e3a8a` (navy) — `$orange` token |
| **Phone** | (254) 910-1212 / `tel:+12549101212` |
| **Email** | hello@watchpointsecurity.com |
| **Domain** | watchpointsecurity.com |
| **Address** | 2500 W Waco Dr, Waco, TX 76707 |

## Services (6)

| Old HVAC | Slug | Title |
|----------|------|--------|
| ac-repair | `security-cameras` | Security Cameras |
| heating | `burglar-alarms` | Burglar Alarms |
| installation | `access-control` | Access Control |
| duct-cleaning | `video-doorbell` | Video Doorbells |
| indoor-air-quality | `smart-home-security` | Smart Home Security |
| maintenance | `monitoring-plans` | Monitoring Plans |

## Industries (3)

| Old | Slug | Title |
|-----|------|--------|
| automotive | `retail` | Retail Stores |
| manufacturing | `property-management` | Property Management |
| oil-gas | `warehouses` | Warehouses & Logistics |

## Blogs (3)

1. `how-many-cameras-home-needs`
2. `wired-vs-wireless-security-cameras`
3. `access-control-for-small-business`

## Pages

Home, Services (index + 6), Industries (index + 3), About, Contact, Service Areas, Blog (index + 3 posts), Privacy. No projects gallery. No per-city SEO.

## Accent

- SCSS: `$orange: #1e3a8a`, `$lightorange: #3b82f6`, `$darkorange: #172554`
- Hardcoded: NextTopLoader, PulseLoader, WelcomePage particles → `#1e3a8a`

## Done criteria

- `npm run typecheck` passes
- Grep clean of HVAC/WatchPoint Security/old phone/Mapbox pk tokens
- Identity consistent: WatchPoint Security throughout
