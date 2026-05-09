import { trustItems } from '../constants/content'

function Icon({ type }: { type: (typeof trustItems)[number]['icon'] }) {
  const common = { width: 28, height: 28, fill: 'none', stroke: 'currentColor', strokeWidth: 2 }
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
          <path d="M12 2l3 7h7l-6 4 2 8-6-4-6 4 2-8-6-4h7z" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden {...common}>
          <path d="M12 3l1.5 4h4.5l-3.5 2.5 1.5 4.5L12 13l-4 1 1.5-4.5L6 7h4.5z" />
        </svg>
      )
  }
}

export function TrustBarSection() {
  return (
    <section id="trust" className="trust section">
      <div className="layout">
        <ul className="trust__list">
          {trustItems.map((item, i) => (
            <li
              key={item.label}
              className={`trust__item surface-card animate-up`}
              style={{ animationDelay: `${0.1 * i}s` }}
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
