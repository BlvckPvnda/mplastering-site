import beforeImg from '../../assets/before and after/larv_and_plaster_before.png'
import afterImg from '../../assets/before and after/larv_and_plaster_after.png'
export const siteTagline =
  'Impeccable cleanliness. Rapid response. Owner-operated plastering you can trust.'

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
      'Artex removal and ceiling smoothing',
      'Wall repairs and making good',
      'New builds and re-skims',
    ],
  },
  {
    id: 'rendering',
    title: 'Exterior rendering',
    tagline: 'Modernize your home’s curb appeal.',
    bullets: [
      'Monocouche and through-colour systems',
      'K Rend and similar modern renders',
      'Traditional sand and cement finishes',
    ],
  },
  {
    id: 'restoration',
    title: 'Wall restoration',
    tagline: 'Giving old walls a brand new life.',
    bullets: [
      'Repairing “battered” walls',
      'Crack repairs and preparation',
      'Damp-proofing preparation ready for your specialist',
    ],
  },
]

export const trustItems = [
  { label: 'Fully insured', icon: 'shield' as const },
  { label: 'Owner-operated', icon: 'user' as const },
  { label: '5-star rated on Facebook', icon: 'star' as const },
  { label: 'Clean sites, tidy finishes', icon: 'sparkle' as const },
]

export type Review = {
  quote: string
  name: string
  subtitle?: string
  rating: number
}

export const reviews: Review[] = [
  {
    quote:
      'Glen was on time, friendly, and the finish is immaculate. He worked around school runs—we barely knew he was here.',
    name: 'Sarah M.',
    subtitle: 'Internal skim',
    rating: 5,
  },
  {
    quote:
      'Our battered hallway looks brand new. Clear communication start to finish.',
    name: 'James K.',
    subtitle: 'Wall restoration',
    rating: 5,
  },
  {
    quote:
      'Rendered front elevation looks superb. Professional, punctual, and tidy every day.',
    name: 'The Patel family',
    subtitle: 'Exterior render',
    rating: 5,
  },
]

export const footerTowns = [
  'Manchester',
  'Stockport',
  'Oldham',
  'Rochdale',
  'Bolton',
  'Bury',
  'Tameside',
  'Trafford',
]

export const aboutCopy = {
  title: 'Meet Glen',
  lead:
    'I’m Glen—owner and plasterer at Mplastering. Years in the trade serving homeowners locally with a straightforward promise:',
  pillars: [
    {
      title: 'Punctual and professional',
      body: 'Turning up when we agree, keeping you informed, and leaving your home respectable at the end of each day.',
    },
    {
      title: 'Owner-operated',
      body: 'The person quoting is the person applying the finishes—no rotating crews.',
    },
    {
      title: 'Family-first scheduling',
      body: 'We plan around nursery runs, evenings, and work-from-home noise so disruption stays minimal.',
    },
  ],
}

/** Placeholder portrait—swap URL for your asset */
export const glenPortraitUrl =
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=560&h=560&fit=crop&q=80'

/** Demo before/after artex-style room—replace with your photography */
export const beforeAfter = {
  before: beforeImg,
  after: afterImg,
}
