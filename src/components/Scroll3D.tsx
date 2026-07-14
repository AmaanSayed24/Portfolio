import { useEffect, useMemo, useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'

export function Scroll3D({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null)

  // Scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Scroll-based transforms
  const scrollRotateX = useTransform(scrollYProgress, [0, 1], [18, -10])
  const scrollRotateY = useTransform(scrollYProgress, [0, 1], [-12, 10])
  const z = useTransform(scrollYProgress, [0, 1], [-80, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1])

  // Mouse tilt motion values
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring for mouse movement
  const smoothMouseX = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 150, damping: 20 })

  // Combine scroll + mouse tilt
  const rotateX = useTransform(
    [scrollRotateX, smoothMouseX],
    ([scrollX, mouseX]: any[]) => (scrollX as number) + (mouseX as number)
  )

  const rotateY = useTransform(
    [scrollRotateY, smoothMouseY],
    ([scrollY, mouseY]: any[]) => (scrollY as number) + (mouseY as number)
  )

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = (e.clientX - cx) / r.width
      const dy = (e.clientY - cy) / r.height

      mouseX.set(dy * -6)
      mouseY.set(dx * 6)
    }

    const onLeave = () => {
      mouseX.set(0)
      mouseY.set(0)
    }

    el.addEventListener('pointermove', onMove)
    el.addEventListener('pointerleave', onLeave)

    return () => {
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [mouseX, mouseY])

  const perspective = useMemo(() => ({ perspective: 1100 }), [])

  return (
    <div ref={ref} style={perspective} className="will-change-transform">
      <motion.div
        style={{ rotateX, rotateY, z, scale }}
        className="transform-gpu"
      >
        {children}
      </motion.div>
    </div>
  )
}