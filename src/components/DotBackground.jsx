import { useEffect, useRef } from 'react'

export default function DotBackground() {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: -1000, y: -1000 })
  const dots = useRef([])
  const inited = useRef(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    const spacing = 40
    const glowRadius = 180
    const pushRadius = 120
    const pushStrength = 18
    const returnSpeed = 0.08
    let time = 0

    function initDots() {
      dots.current = []
      const w = window.innerWidth
      const h = window.innerHeight
      for (let x = spacing; x < w; x += spacing) {
        for (let y = spacing; y < h; y += spacing) {
          dots.current.push({ ox: x, oy: y, x, y, vx: 0, vy: 0 })
        }
      }
      inited.current = true
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      initDots()
    }

    resize()
    window.addEventListener('resize', resize)

    function onMouseMove(e) {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }
    function onMouseLeave() {
      mouse.current.x = -1000
      mouse.current.y = -1000
    }
    window.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseleave', onMouseLeave)

    function draw() {
      const w = window.innerWidth
      const h = window.innerHeight
      ctx.clearRect(0, 0, w, h)
      const mx = mouse.current.x
      const my = mouse.current.y
      time += 0.008

      for (let i = 0; i < dots.current.length; i++) {
        const dot = dots.current[i]
        
        // Continuous wave / floating idle animation
        const waveX = Math.sin(time + dot.ox * 0.008 + dot.oy * 0.004) * 6
        const waveY = Math.cos(time + dot.ox * 0.004 + dot.oy * 0.008) * 6
        const targetX = dot.ox + waveX
        const targetY = dot.oy + waveY

        const dx = targetX - mx
        const dy = targetY - my
        const dist = Math.sqrt(dx * dx + dy * dy)

        // Push dots away from cursor
        if (dist < pushRadius && dist > 0) {
          const force = (1 - dist / pushRadius) * pushStrength
          const angle = Math.atan2(dy, dx)
          dot.vx += Math.cos(angle) * force * 0.3
          dot.vy += Math.sin(angle) * force * 0.3
        }

        // Spring back to dynamic waved position
        dot.vx += (targetX - dot.x) * returnSpeed
        dot.vy += (targetY - dot.y) * returnSpeed
        dot.vx *= 0.75
        dot.vy *= 0.75
        dot.x += dot.vx
        dot.y += dot.vy

        // Glow effect
        let alpha = 0.1
        let radius = 1.2
        const distFromMouse = Math.sqrt(
          (dot.x - mx) ** 2 + (dot.y - my) ** 2
        )

        if (distFromMouse < glowRadius) {
          const intensity = 1 - distFromMouse / glowRadius
          alpha = 0.1 + intensity * 0.6
          radius = 1.2 + intensity * 2
          ctx.fillStyle = `rgba(37, 99, 235, ${alpha})`
        } else {
          ctx.fillStyle = `rgba(148, 163, 184, ${alpha})`
        }

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      animId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="dot-background"
      aria-hidden="true"
    />
  )
}
