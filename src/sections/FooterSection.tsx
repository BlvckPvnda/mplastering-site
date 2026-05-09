import {
  EMAIL_DISPLAY,
  MAP_SEARCH_URL,
  PHONE_DISPLAY,
  PHONE_HREF,
  whatsAppHref,
} from '../constants/contact'
import { footerTowns } from '../constants/content'

export function FooterSection() {
  const year = new Date().getFullYear()
  const townLine = footerTowns.join(' · ')

  return (
    <footer id="footer" className="footer">
      <div className="layout footer__grid">
        <div>
          <h2 className="footer__brand">Mplastering</h2>
          <p className="footer__pitch">
            Internal skimming, exterior rendering, and wall restoration—with the cleanliness and
            punctuality your home deserves.
          </p>
          <div className="footer__contacts">
            <a href={PHONE_HREF}>Call {PHONE_DISPLAY}</a>
            <span className="footer__sep" aria-hidden>
              ·
            </span>
            <a href={whatsAppHref()}>WhatsApp</a>
            <span className="footer__sep" aria-hidden>
              ·
            </span>
            <a href={`mailto:${EMAIL_DISPLAY}`}>{EMAIL_DISPLAY}</a>
          </div>
        </div>

        <div className="footer__map surface-card">
          <h3 className="footer__h3">Service area</h3>
          <p className="footer__towns">{townLine}</p>
          <p className="footer__seo">
            Mplastering serves homeowners across Greater Manchester and surrounding towns
            including {footerTowns.slice(0, 4).join(', ')}, and nearby areas—contact us to
            confirm availability for your postcode.
          </p>
          <a className="footer__map-link" href={MAP_SEARCH_URL} target="_blank" rel="noreferrer">
            Open map
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="layout footer__bottom-inner">
          <p className="footer__copy">© {year} Mplastering. All rights reserved.</p>
          <div className="footer__social">
            <a href="#reviews">Facebook reviews</a>
            <span className="footer__sep" aria-hidden>
              ·
            </span>
            <a href="#hero">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
