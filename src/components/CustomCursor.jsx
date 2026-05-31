import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef   = useRef(null)
  const ringRef  = useRef(null)
  const mousePos = useRef({ x: -100, y: -100 })
  const ringPos  = useRef({ x: -100, y: -100 })
  const rafId    = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMove = (e) => {
      mousePos.current.x = e.clientX
      mousePos.current.y = e.clientY
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
    }

    const animate = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12
      ring.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`
      rafId.current = requestAnimationFrame(animate)
    }
    rafId.current = requestAnimationFrame(animate)

    const onOver = (e) => {
      if (e.target.closest('a, button, [data-hover]'))
        document.body.classList.add('hovering')
    }
    const onOut = () => document.body.classList.remove('hovering')

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    return () => {
      cancelAnimationFrame(rafId.current)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

  return (
    <>
      <div className="cursor-dot"  ref={dotRef}  />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}