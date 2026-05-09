import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const baseClass = 'btn'

type Props = ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> & {
  variant?: Variant
  children: ReactNode
  href?: string
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  href,
  ...rest
}: Props) {
  const v = `${baseClass} ${baseClass}--${variant} ${className}`.trim()

  if (href) {
    return (
      <a className={v} href={href} {...(rest as object)}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={v} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
