import { useEffect, useRef } from 'react'

export default function MouseSpotlight() {
  const ref = useRef(null)

  useEffect(() => {
    function handleMove(e) {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`
      }
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <div
      ref={ref}
      className="mouse-spotlight"
      aria-hidden="true"
    />
  )
}
