import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../lib/utils'

export function LiquidBackground() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) {
      el.style.setProperty('--mx', '50%')
      el.style.setProperty('--my', '40%')
      return
    }

    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 100
      const y = (e.clientY / window.innerHeight) * 100
      el.style.setProperty('--mx', `${x.toFixed(2)}%`)
      el.style.setProperty('--my', `${y.toFixed(2)}%`)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <div className="liquid-blob liquid-blob-a" />
      <div className="liquid-blob liquid-blob-b" />
      <div className="liquid-blob liquid-blob-c" />
      <div className="liquid-vignette" />
      <div className="liquid-grain" />
    </div>
  )
}
