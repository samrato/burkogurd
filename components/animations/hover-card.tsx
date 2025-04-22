"use client"

import type React from "react"

import { motion } from "framer-motion"
import { type ReactNode, useState } from "react"

interface HoverCardProps {
  children: ReactNode
  className?: string
}

export default function HoverCard({ children, className = "" }: HoverCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Spotlight effect */}
      {isHovered && (
        <motion.div
          className="absolute w-40 h-40 bg-gradient-radial from-white/20 to-transparent rounded-full pointer-events-none"
          animate={{
            x: mousePosition.x - 80,
            y: mousePosition.y - 80,
            opacity: 0.8,
          }}
          transition={{ duration: 0.1, ease: "linear" }}
        />
      )}
      {children}
    </motion.div>
  )
}
