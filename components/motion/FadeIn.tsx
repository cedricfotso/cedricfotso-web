"use client"

import { useState, useEffect } from "react"
import { motion, useReducedMotion, type Easing } from "framer-motion"
import type { ReactNode } from "react"

type Props = {
  children: ReactNode
  delay?: number
}

export function FadeIn({ children, delay = 0 }: Props) {
  const [mounted, setMounted] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Pendant le SSR et le premier rendu, on rend sans animation
  if (!mounted) {
    return <>{children}</>
  }

  const initial = reduce ? false : { opacity: 0, y: 8 }
  const animate = reduce ? {} : { opacity: 1, y: 0 }
  const ease: Easing = [0.22, 1, 0.36, 1]
  const transition = { duration: 0.4, delay, ease }

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
    >
      {children}
    </motion.div>
  )
}