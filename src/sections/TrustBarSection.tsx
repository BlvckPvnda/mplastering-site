import { trustItems } from '../constants/content'

function Icon({ type }: { type: (typeof trustItems)[number]['icon'] }) {
  const common = { width: 24, height: 24, fill: 'none', stroke: 'currentColor', strokeWidth: 2 }
  switch (type) {
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...common}>
          <path d="M12 3l8 4v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V7z" />
        </svg>
      )
    case 'user':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...common}>
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    case 'star':
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...common}>
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...common}>
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
          <path d="M5 3v4" />
          <path d="M19 17v4" />
          <path d="M3 5h4" />
          <path d="M17 19h4" />
        </svg>
      )
  }
}

export function TrustBarSection() {
  return (
    <section id="trust" className="trust section section--tight-top">
      <div className="layout">
        <ul className="trust__list">
          {trustItems.map((item) => (
            <li
              key={item.label}
              className="trust__item glass-card"
            >
              <span className="trust__icon">
                <Icon type={item.icon} />
              </span>
              <span className="trust__label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
