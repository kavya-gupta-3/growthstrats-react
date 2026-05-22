import { useRef, useState } from 'react'

export default function GlowCard({ children, className = '', dark = false }) {
  const cardRef = useRef(null)
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  function handleMouseMove(e) {
    const rect = cardRef.current.getBoundingClientRect()
    setGlowPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={cardRef}
      className={`card glow-card ${dark ? 'dark-glow' : ''} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering && (
        <div
          className="card-glow-effect"
          style={{
            left: glowPos.x,
            top: glowPos.y,
          }}
        />
      )}
      <div className="card-content">{children}</div>
    </div>
  )
}
