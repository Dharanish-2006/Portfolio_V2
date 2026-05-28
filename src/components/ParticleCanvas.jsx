import { useEffect, useRef } from 'react'

const PARTICLE_COUNT = 80
const MAX_DIST = 130
const ACCENT = 'rgba(232, 145, 90,'

export default function ParticleCanvas() {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: -9999, y: -9999 })
  const raf = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMouse = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }
    window.addEventListener('mousemove', onMouse)

    // Init particles
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const mx = mouse.current.x
      const my = mouse.current.y

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Mouse repulsion
        const dx = p.x - mx
        const dy = p.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 100) {
          const force = (100 - dist) / 100
          p.vx += (dx / dist) * force * 0.15
          p.vy += (dy / dist) * force * 0.15
        }

        // Friction
        p.vx *= 0.98
        p.vy *= 0.98

        // Speed clamp
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (speed > 1.2) {
          p.vx = (p.vx / speed) * 1.2
          p.vy = (p.vy / speed) * 1.2
        }

        p.x += p.vx
        p.y += p.vy

        // Wrap
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Draw dot
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `${ACCENT}0.55)`
        ctx.fill()

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const ex = p.x - q.x
          const ey = p.y - q.y
          const d = Math.sqrt(ex * ex + ey * ey)
          if (d < MAX_DIST) {
            const alpha = (1 - d / MAX_DIST) * 0.2
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `${ACCENT}${alpha.toFixed(3)})`
            ctx.lineWidth = 0.7
            ctx.stroke()
          }
        }

        // Mouse connection
        if (dist < 160) {
          const a = (1 - dist / 160) * 0.35
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mx, my)
          ctx.strokeStyle = `${ACCENT}${a.toFixed(3)})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      }

      raf.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(raf.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouse)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="hero-canvas"
      style={{ opacity: 0.7 }}
    />
  )
}
