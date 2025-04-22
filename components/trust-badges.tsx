"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const badges = [
  {
    id: 1,
    name: "ISO 27001 Certified",
    image: "/placeholder.svg?height=60&width=120",
  },
  {
    id: 2,
    name: "Security Industry Authority (SIA) Approved",
    image: "/placeholder.svg?height=60&width=120",
  },
  {
    id: 3,
    name: "National Security Inspectorate (NSI) Gold",
    image: "/placeholder.svg?height=60&width=120",
  },
  {
    id: 4,
    name: "British Security Industry Association (BSIA) Member",
    image: "/placeholder.svg?height=60&width=120",
  },
  {
    id: 5,
    name: "ACS Pacesetters",
    image: "/placeholder.svg?height=60&width=120",
  },
  {
    id: 6,
    name: "SafeContractor Approved",
    image: "/placeholder.svg?height=60&width=120",
  },
]

export default function TrustBadges() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isOverflowing, setIsOverflowing] = useState(false)

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current) {
        const { scrollWidth, clientWidth } = containerRef.current
        setIsOverflowing(scrollWidth > clientWidth)
      }
    }

    checkOverflow()
    window.addEventListener("resize", checkOverflow)

    return () => {
      window.removeEventListener("resize", checkOverflow)
    }
  }, [])

  return (
    <div className="relative overflow-hidden py-6 bg-background/80 backdrop-blur-sm rounded-lg shadow-md">
      <div className="text-center mb-4">
        <h3 className="text-lg font-medium text-gradient">Trusted By Industry Leaders</h3>
      </div>

      <div ref={containerRef} className={cn("flex items-center gap-8 px-6", isOverflowing && "animate-marquee")}>
        {badges.map((badge) => (
          <motion.div
            key={badge.id}
            className="flex-shrink-0 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="relative h-12 w-24 bg-white/80 p-2 rounded shadow-sm">
              <Image src={badge.image || "/placeholder.svg"} alt={badge.name} fill className="object-contain" />
            </div>
            <span className="text-xs mt-2 text-center max-w-[120px] text-muted-foreground">{badge.name}</span>
          </motion.div>
        ))}

        {/* Duplicate badges for continuous scrolling if overflowing */}
        {isOverflowing &&
          badges.map((badge) => (
            <motion.div
              key={`dup-${badge.id}`}
              className="flex-shrink-0 flex flex-col items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="relative h-12 w-24 bg-white/80 p-2 rounded shadow-sm">
                <Image src={badge.image || "/placeholder.svg"} alt={badge.name} fill className="object-contain" />
              </div>
              <span className="text-xs mt-2 text-center max-w-[120px] text-muted-foreground">{badge.name}</span>
            </motion.div>
          ))}
      </div>
    </div>
  )
}
