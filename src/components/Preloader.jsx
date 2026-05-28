import { useEffect, useRef } from 'react'

export default function Preloader({ done }) {
  const barRef = useRef(null)

  useEffect(() => {
    if (!barRef.current) return
    // Animate bar to 100% then let parent hide
    const t1 = setTimeout(() => { barRef.current.style.width = '70%' }, 50)
    const t2 = setTimeout(() => { barRef.current.style.width = '100%' }, 400)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  return (
    <div className={`preloader ${done ? 'done' : ''}`}>
      <div className="pre-logo">
        D<span>.</span>
      </div>
      <div className="pre-bar-wrap">
        <div className="pre-bar" ref={barRef} />
      </div>
    </div>
  )
}
