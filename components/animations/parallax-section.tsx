"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import type { ReactNode } from "react"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down"
}

export default function ParallaxSection({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
}: ParallaxSectionProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Determine the range based on direction
  const range = direction === "up" ? [100 * speed, -100 * speed] : [-100 * speed, 100 * speed]

  // Use the transform
  const yValue = useTransform(scrollYProgress, [0, 1], range)

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y: yValue }}>{children}</motion.div>
    </div>
  )
}
