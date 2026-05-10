import { useEffect, useRef, useState, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function ScrollReveal({ children, delay = 0, direction = 'up' }: Props) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const revealClass = `reveal reveal--${direction} ${isVisible ? 'is-visible' : ''}`

  return (
    <div 
      ref={ref} 
      className={revealClass} 
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
