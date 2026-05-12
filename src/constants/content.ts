import beforeImg from '../../assets/before and after/larv_and_plaster_before.png'
import afterImg from '../../assets/before and after/larv_and_plaster_after.png'

// ─── Heritage constants ────────────────────────────────────────────────────
export const FOUNDED_YEAR = 1994
export const YEARS_EXPERIENCE = new Date().getFullYear() - FOUNDED_YEAR
export const EXPERIENCE_CLAIM = '20+' // Glen's hands-on plastering experience

// ─── Site-wide tagline ─────────────────────────────────────────────────────
export const siteTagline =
  'Impeccable cleanliness. Rapid response. Expert plastering you can trust.'

// ─── Navigation ────────────────────────────────────────────────────────────
export const navItems = [
  { href: '#trust', label: 'Trust' },
  { href: '#services', label: 'Services' },
  { href: '#before-after', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#quote', label: 'Estimate' },
]

// ─── Services ──────────────────────────────────────────────────────────────
export type Service = {
  id: string
  title: string
  tagline: string
  bullets: string[]
}

export const services: Service[] = [
  {
    id: 'skimming',
    title: 'Internal skimming',
    tagline: 'Glass-smooth finishes for every room.',
    bullets: [
      'New builds and re-skims',
      'Wall repairs and making good',
      'Artex removal and ceiling smoothing',
    ],
  },
  {
    id: 'rendering',
    title: 'Exterior rendering',
    tagline: 'Modernise your home\'s kerb appeal.',
    bullets: [
      'Monocouche and through-colour systems',
      'K Rend and similar modern renders',
      'Traditional sand and cement finishes',
    ],
  },
  {
    id: 'restoration',
    title: 'Artex removal & wall revival',
    tagline: 'Giving tired walls a brand new life.',
    bullets: [
      'Repairing "battered" and damaged walls',
      'Crack repairs and surface preparation',
      'Damp-proofing preparation',
    ],
  },
]

// ─── Trust bar ─────────────────────────────────────────────────────────────
export const trustItems = [
  { label: '£2m Public Liability', icon: 'shield' as const },
  { label: '20+ years on the tools', icon: 'user' as const },
  { label: '5.0★ Facebook reviews', icon: 'star' as const },
  { label: 'Zero Mess', icon: 'sparkle' as const },
]

// ─── Reviews ───────────────────────────────────────────────────────────────
export type Review = {
  quote: string
  name: string
  subtitle?: string
  rating: number
}

export const reviews: Review[] = [
  {
    quote: "Glen and Benjie did an amazing job in my new house. The old walls look brand new! The service received has been fantastic and they are both brilliant at what they do.",
    name: "Gabriella Matthews",
    subtitle: "Whole house restoration",
    rating: 5,
  },
  {
    quote: "Glen's service was great from start to finish. He answers the phone and communicates well. He masked everything up and works tidy. Absolute pleasure to work with.",
    name: "Loee Allen",
    subtitle: "Internal skimming",
    rating: 5,
  },
  {
    quote: "Fantastic job plastering our extension and office—super smooth walls, timely, tidy and friendly. Wouldn't hesitate to recommend!",
    name: "Sarah Milsom",
    subtitle: "Extension & Office",
    rating: 5,
  },
  {
    quote: "Glen recently plastered our kitchen and we couldn't be happier with the result. Organised, quick, and tidy. Room looks great. Thank you!",
    name: "Siânie Stephens",
    subtitle: "Kitchen plastering",
    rating: 5,
  },
  {
    quote: "Excellent job plastering our new garden room. Super efficient and a brilliant finish. Wouldn't hesitate to recommend.",
    name: "Matt Row",
    subtitle: "Garden room",
    rating: 5,
  },
  {
    quote: "The quality of the plastering is as close to perfect as you can get. Professionalism stands out over anything else. Glen and the team are on point.",
    name: "Niz Khan",
    subtitle: "Ceiling restoration",
    rating: 5,
  },
]

// ─── Footer towns ──────────────────────────────────────────────────────────
export const footerTowns = [
  'St Albans',
  'Harpenden',
  'Watford',
  'Hemel Hempstead',
  'Hatfield',
  'Welwyn Garden City',
  'Potters Bar',
  'Barnet',
  'Borehamwood',
  'Radlett',
  'Luton',
  'Berkhamsted',
]

// ─── About section ─────────────────────────────────────────────────────────
export const aboutCopy = {
  title: 'Meet Glen',
  lead: `I'm Glen—plasterer at Mplastering. With over ${EXPERIENCE_CLAIM} years on the tools serving homeowners across St. Albans, Hertfordshire, and North London, my promise is simple:`,
  pillars: [
    {
      title: 'Punctual and professional',
      body: 'Turning up when we agree, keeping you informed, and leaving your home respectable at the end of each day.',
    },
    {
      title: 'Decades of craft experience',
      body: `From Victorian lath-and-plaster restoration to modern new-build skims, ${EXPERIENCE_CLAIM} years of hands-on expertise means fewer surprises and a finish that lasts.`,
    },
    {
      title: 'Respectful site management',
      body: 'We mask every surface, hoover on wrap-up, and restore your room to habitable the same day. Your home, treated like our own.',
    },
  ],
}

// ─── Assets ────────────────────────────────────────────────────────────────
/**
 * ⚠️  LAUNCH BLOCKER: Replace with Glen's actual portrait before going live.
 * Using a stock photo here risks GDPR issues and destroys authenticity.
 * Drop the real photo into /assets/logo/ and update this import.
 */
export const glenPortraitUrl =
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=560&h=560&fit=crop&q=80'

/** Before/after real job photography */
export const beforeAfter = {
  before: beforeImg,
  after: afterImg,
}
