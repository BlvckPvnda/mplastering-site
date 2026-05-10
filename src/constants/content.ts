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
      'New builds and re-skims',
      'Wall repairs and making good',
      'Artex removal and ceiling smoothing',
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
      'Damp-proofing preparation',
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
    quote: "Glen and Benjie did an amazing job in my new house. The old walls look brand new! The service received has been fantastic and they are both brilliant at what they do.",
    name: "Gabriella Matthews",
    subtitle: "Whole house restoration",
    rating: 5,
  },
  {
    quote: "Absolutely fantastic job plastering areas for new radiators. The service has been superb from start to finish and I would highly recommend Glen.",
    name: "Kate Drew",
    subtitle: "Wall repairs",
    rating: 5,
  },
  {
    quote: "Glen's service was great from start to finish. He answers the phone and communicates well. He masked everything up and works tidy. Absolute pleasure to work with.",
    name: "Loee Allen",
    subtitle: "Internal skimming",
    rating: 5,
  },
  {
    quote: "Fantastic job plastering our extension and office—super smooth walls, timely, tidy and friendly. Wouldn’t hesitate to recommend!",
    name: "Sarah Milsom",
    subtitle: "Extension & Office",
    rating: 5,
  },
  {
    quote: "Glen recently plastered our kitchen and we couldn’t be happier with the result. Organised, quick, and tidy. Room looks great. Thank you!",
    name: "Siânie Stephens",
    subtitle: "Kitchen plastering",
    rating: 5,
  },
  {
    quote: "Excellent job plastering our new garden room. Super efficient and a brilliant finish. Wouldn’t hesitate to recommend.",
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
  {
    quote: "Great job, reliable and on time!",
    name: "Lyndsay Evans",
    subtitle: "Plastering service",
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
