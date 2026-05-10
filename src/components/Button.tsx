import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const baseClass = 'btn'

interface BaseProps {
  variant?: Variant
  children: ReactNode
  className?: string
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export function Button(props: ButtonProps | AnchorProps) {
  const { variant = 'primary', className = '', children, ...rest } = props
  const v = `${baseClass} ${baseClass}--${variant} ${className}`.trim()

  if ('href' in rest && rest.href) {
    const { href, ...anchorProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a className={v} href={href} {...anchorProps}>
        {children}
      </a>
    )
  }

  const { ...buttonProps } = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button type="button" className={v} {...buttonProps}>
      {children}
    </button>
  )
}
