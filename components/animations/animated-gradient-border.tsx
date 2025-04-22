"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedGradientBorderProps {
  children: ReactNode
  className?: string
  borderWidth?: number
  borderRadius?: number
  duration?: number
  colors?: string[]
}

export default function AnimatedGradientBorder({
  children,
  className = "",
  borderWidth = 2,
  borderRadius = 8,
  duration = 3,
  colors = ["#7c3aed", "#2563eb", "#7c3aed"],
}: AnimatedGradientBorderProps) {
  return (
    <div className={`relative ${className}`} style={{ padding: borderWidth }}>
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: `linear-gradient(45deg, ${colors.join(", ")})`,
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
      <div
        className="relative bg-background rounded-lg h-full w-full"
        style={{ borderRadius: borderRadius - borderWidth }}
      >
        {children}
      </div>
    </div>
  )
}
