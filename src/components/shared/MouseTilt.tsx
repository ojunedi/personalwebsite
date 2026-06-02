import { useEffect, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface MouseTiltProps {
  children: ReactNode
  maxTilt?: number
}

export default function MouseTilt({ children, maxTilt = 7 }: MouseTiltProps) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 70, damping: 18, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 70, damping: 18, mass: 0.6 })
  const rotateY = useTransform(sx, [-1, 1], [-maxTilt, maxTilt])
  const rotateX = useTransform(sy, [-1, 1], [maxTilt, -maxTilt])

  useEffect(() => {
    function handle(e: MouseEvent) {
      mx.set((e.clientX / window.innerWidth) * 2 - 1)
      my.set((e.clientY / window.innerHeight) * 2 - 1)
    }
    window.addEventListener('mousemove', handle)
    return () => window.removeEventListener('mousemove', handle)
  }, [mx, my])

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1100,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
      }}
    >
      {children}
    </motion.div>
  )
}
