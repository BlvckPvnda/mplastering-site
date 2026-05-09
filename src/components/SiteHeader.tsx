import { useEffect, useState } from 'react'
import logoSvg from '../../assets/logo/Plastering.svg'
import { Button } from './Button'

const navItems = [
  { href: '#trust', label: 'Trust' },
  { href: '#services', label: 'Services' },
  { href: '#before-after', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#quote', label: 'Estimate' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="site-header">
      <div className="site-header__inner layout">
        <a href="#hero" className="site-header__brand">
          <img src={logoSvg} alt="Mplastering Logo" className="site-header__logo" />
        </a>

        <nav className="site-header__nav site-header__nav--desktop" aria-label="Primary">
          <ul className="site-header__list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <Button href="#quote" className="site-header__cta" variant="primary">
            Request estimate
          </Button>
          <button
            type="button"
            className="site-header__menu-btn"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="visually-hidden">Menu</span>
            <span className="burger" aria-hidden>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`site-header__drawer ${open ? 'is-open' : ''}`}
        aria-hidden={!open}
      >
        <nav className="layout" aria-label="Mobile">
          <ul className="site-header__drawer-list">
            <li>
              <a href="#hero" onClick={() => setOpen(false)}>
                Home
              </a>
            </li>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
