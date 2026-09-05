import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function StatCounter({ value, suffix = '', label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1200
    const start = performance.now()
    let frame

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value])

  return (
    <div ref={ref} className="py-6 px-4 text-center md:text-left">
      <p className="font-display text-4xl md:text-5xl font-semibold text-forest-dark tabular-nums">
        {display.toLocaleString()}{suffix}
      </p>
      <p className="mt-2 text-sm text-ink/60 max-w-[22ch] mx-auto md:mx-0">{label}</p>
    </div>
  )
}

