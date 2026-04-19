"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

type Props = {
  children: ReactNode
  delay?: number
}

export function FadeIn({ children, delay = 0 }: Props) {
  const reduce = useReducedMotion()

  const initial = reduce ? false : { opacity: 0, y: 8 }
  const whileInView = reduce ? undefined : { opacity: 1, y: 0 }
  const viewport = { once: true, amount: 0.2 }
  const transition = { duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
    >
      {children}
    </motion.div>
  )
}