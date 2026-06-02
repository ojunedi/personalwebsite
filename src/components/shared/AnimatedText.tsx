import React, { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
}

interface CharProps {
  char: string
  scrollYProgress: MotionValue<number>
  start: number
  end: number
}

function AnimatedChar({ char, scrollYProgress, start, end }: CharProps) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])
  if (char === ' ') return <span> </span>
  return (
    <span style={{ position: 'relative', display: 'inline' }}>
      <span style={{ opacity: 0 }}>{char}</span>
      <motion.span style={{ opacity, position: 'absolute', left: 0, top: 0 }}>
        {char}
      </motion.span>
    </span>
  )
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const chars = text.split('')

  return (
    <p ref={ref} className={className} style={{ position: 'relative', ...style }}>
      {chars.map((char, i) => (
        <AnimatedChar
          key={i}
          char={char}
          scrollYProgress={scrollYProgress}
          start={i / chars.length}
          end={(i + 1) / chars.length}
        />
      ))}
    </p>
  )
}
