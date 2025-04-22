"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface TextRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  }

  // Animation variants for each word
  const wordVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  // Split the text into words
  const text = children as string
  const words = text.split(" ")

  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => (
        <motion.span key={index} className="inline-block mr-1" variants={wordVariants}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
