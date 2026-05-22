import { useScrollReveal } from '../hooks/useAnimations'

export default function ScrollReveal({ children, className = '', delay = 0, direction = 'up' }) {
  const [ref, isVisible] = useScrollReveal()

  const directionStyles = {
    up: 'reveal-up',
    left: 'reveal-left',
    right: 'reveal-right',
    scale: 'reveal-scale',
  }

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${directionStyles[direction] || 'reveal-up'} ${isVisible ? 'revealed' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
