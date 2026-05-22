import { useScrollReveal, useCountUp } from '../hooks/useAnimations'

export default function StatCounter({ value, suffix = '', label }) {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.3 })
  const numericPart = parseInt(value, 10)
  const isNumeric = !isNaN(numericPart)
  const count = useCountUp(isNumeric ? numericPart : 0, 2000, isVisible)
  const prefix = value.toString().replace(/[0-9]/g, '').replace(/[+%]/g, '')

  // Extract suffix from value like "120+" -> "+"
  const valueSuffix = value.toString().match(/[+%d]+$/)?.[0]?.replace(/[0-9]/g, '') || suffix

  return (
    <div ref={ref} className="stat">
      <div className="num">
        {isNumeric ? `${count}${valueSuffix}` : value}
      </div>
      <div className="label">{label}</div>
    </div>
  )
}
