import { useEffect, useRef } from 'react'
import { clamp, prefersReducedMotion } from '../lib/utils'

export function CursorFX() {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const ringRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return

    const dot = dotRef.current!
    const ring = ringRef.current!

    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let rx = mx
    let ry = my

    const move = (e: PointerEvent) => {
      mx = e.clientX
      my = e.clientY
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0)`
    }

    const tick = () => {
      const dx = mx - rx
      const dy = my - ry
      rx += dx * 0.12
      ry += dy * 0.12

      const speed = Math.hypot(dx, dy)
      const blur = clamp(speed / 12, 0, 10)
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      ring.style.filter = `blur(${blur}px)`

      raf = requestAnimationFrame(tick)
    }

    const down = () => {
      ring.classList.add('is-down')
      dot.classList.add('is-down')
    }
    const up = () => {
      ring.classList.remove('is-down')
      dot.classList.remove('is-down')
    }

    let raf = requestAnimationFrame(tick)
    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerdown', down)
    window.addEventListener('pointerup', up)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerdown', down)
      window.removeEventListener('pointerup', up)
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
