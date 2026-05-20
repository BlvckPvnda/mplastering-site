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
  description: string
}

export type ServiceCategory = {
  id: string
  title: string
  tagline: string
  items: Service[]
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'skimming',
    title: 'Plastering & Skimming',
    tagline: 'Glass-smooth finishes for internal walls and ceilings.',
    items: [
      {
        id: 'reskims',
        title: 'Wall and Ceiling Re-skims',
        description:
          'A fresh layer of finishing plaster applied over existing walls and ceilings to restore a smooth, flat surface ready for decorating.',
      },
      {
        id: 'skimming',
        title: 'Plaster Skimming',
        description:
          'A thin coat of finishing plaster applied over plasterboard or existing surfaces to create a smooth, paint-ready finish.',
      },
      {
        id: 'float-set',
        title: 'Two-Coat Plastering (Float and Set)',
        description:
          'A two-stage plastering process where a sand and cement or bonding coat is applied first (float), followed by a finishing plaster coat (set) for a durable, smooth result.',
      },
      {
        id: 'ceilings',
        title: 'Ceiling Plastering',
        description:
          'Full plastering of ceilings using the appropriate base and finish coats to achieve a flat, smooth surface free from cracks or imperfections.',
      },
      {
        id: 'drylining',
        title: 'Drylining',
        description:
          'Installation of plasterboard to internal walls using a metal or timber frame system, improving insulation and creating a smooth surface without wet plaster.',
      },
      {
        id: 'tacking',
        title: 'Plasterboarding / Tacking',
        description:
          'Fixing plasterboard sheets to ceilings and walls as a base layer before plastering, providing a stable and even surface for finishing.',
      },
      {
        id: 'bonding',
        title: 'Dot and Dab Bonding',
        description:
          'A method of fixing plasterboard directly to masonry walls using dabs of bonding adhesive, ideal for insulating and lining internal walls quickly and efficiently.',
      },
      {
        id: 'wall-install',
        title: 'Plasterboard Wall Installation',
        description:
          'Full supply and installation of plasterboard walls, creating new partitions or lining existing walls ready for skimming or dry finishing.',
      },
    ],
  },
  {
    id: 'rendering',
    title: 'Exterior Rendering',
    tagline: 'Modernise and protect your home\'s external walls.',
    items: [
      {
        id: 'house-render',
        title: 'House Rendering',
        description:
          'Application of a render coat to the external walls of a property to protect against the elements and provide a clean, attractive finish.',
      },
      {
        id: 'monocouche',
        title: 'Monocouche Rendering',
        description:
          'A single-coat through-coloured render system applied to external walls, offering a durable, low-maintenance finish that doesn\'t require painting.',
      },
      {
        id: 'k-rend',
        title: 'K-Rend & Silicone Renders',
        description:
          'Application of premium silicone-based render systems such as K-Rend, offering excellent weather resistance, flexibility, and a long-lasting decorative finish.',
      },
      {
        id: 'sand-cement',
        title: 'Traditional Sand and Cement Render',
        description:
          'A tried and tested external render mix applied to walls for a hard-wearing, weatherproof finish, suitable for a wide range of properties.',
      },
      {
        id: 'ewi',
        title: 'External Wall Insulation (EWI)',
        description:
          'Installation of an insulation board system to the outside of a property, improving thermal performance and finished with a decorative render coat.',
      },
    ],
  },
  {
    id: 'restoration',
    title: 'Restoration & Repairs',
    tagline: 'Specialist repairs, artex removal, and decorative finishings.',
    items: [
      {
        id: 'artex',
        title: 'Artex Removal & Flattening',
        description:
          'Removal or flattening of textured Artex coatings on ceilings and walls, leaving a clean, smooth surface suitable for modern décor.',
      },
      {
        id: 'patching',
        title: 'Plaster Patching & Repairs',
        description:
          'Localised repair of damaged, cracked, or blown plaster areas, blended seamlessly with the surrounding surface for a uniform finish.',
      },
      {
        id: 'water-damage',
        title: 'Water Damage Plaster Repair',
        description:
          'Removal and replacement of plaster affected by water ingress or leaks, ensuring the substrate is sound and dry before replastering.',
      },
      {
        id: 'damp-damage',
        title: 'Damp Damage Plastering',
        description:
          'Specialist replastering of walls affected by damp, using appropriate backing coats and materials to prevent recurrence and restore a solid finish.',
      },
      {
        id: 'coving',
        title: 'Coving and Cornice Installation',
        description:
          'Supply and fitting of decorative coving or cornice along the junction of walls and ceilings to add a traditional or period finish to a room.',
      },
      {
        id: 'mouldings',
        title: 'Plaster Moulding Repairs',
        description:
          'Restoration and repair of existing decorative plaster mouldings, cornices, and ceiling roses, matching the original profile and finish.',
      },
      {
        id: 'screeding',
        title: 'Floor Screeding',
        description:
          'Application of a sand and cement or liquid screed mix over a floor base to create a smooth, level surface ready for tiling, wood flooring, or other floor coverings.',
      },
    ],
  },
]

export const services: Service[] = serviceCategories.flatMap((cat) => cat.items)

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
