import { PHONE_DISPLAY, PHONE_HREF } from '../constants/contact'

export function MobileCtaBar() {
  return (
    <div className="mobile-cta" role="region" aria-label="Call Glen directly">
      <a href={PHONE_HREF} className="mobile-cta__btn">
        📞 Call Glen — {PHONE_DISPLAY}
      </a>
    </div>
  )
}
