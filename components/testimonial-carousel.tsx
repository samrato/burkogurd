"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    id: 1,
    content:
      "VANGUARD has transformed our security operations. Their professional team and advanced technology have significantly reduced security incidents at our corporate headquarters.",
    author: "Sarah Johnson",
    position: "Operations Director",
    company: "TechCorp Industries",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    id: 2,
    content:
      "We've been working with VANGUARD for our event security needs for over 5 years. Their attention to detail and proactive approach ensures our events run smoothly and safely.",
    author: "Michael Chen",
    position: "Event Manager",
    company: "Global Events Ltd",
    logo: "/placeholder.svg?height=60&width=120",
  },
  {
    id: 3,
    content:
      "The risk assessment conducted by VANGUARD was comprehensive and eye-opening. Their recommendations have helped us implement a robust security system for our residential complex.",
    author: "David Williams",
    position: "Property Manager",
    company: "Oakwood Residences",
    logo: "/placeholder.svg?height=60&width=120",
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      next()
    }, 5000)

    return () => clearInterval(interval)
  }, [current, autoplay])

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.9,
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scale: 0.9,
      }
    },
  }

  const [direction, setDirection] = useState(0)

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="relative h-[300px] md:h-[250px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.3 },
              }}
              className="absolute w-full"
            >
              <Card className="border-none shadow-lg h-full mx-4 bg-background/50 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center p-6">
                    <motion.div
                      initial={{ rotate: -10, scale: 0.9 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Quote className="h-10 w-10 text-primary mb-4" />
                    </motion.div>
                    <p className="text-lg mb-6">{testimonials[current].content}</p>
                    <div className="mt-auto">
                      <div className="flex items-center justify-center mb-4">
                        <div className="relative h-12 w-24">
                          <Image
                            src={testimonials[current].logo || "/placeholder.svg"}
                            alt={`${testimonials[current].company} logo`}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <p className="font-bold">{testimonials[current].author}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonials[current].position}, {testimonials[current].company}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <motion.div whileTap={{ scale: 0.9 }}>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => {
              setDirection(-1)
              prev()
              setAutoplay(false)
            }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </motion.div>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            className={`w-3 h-3 rounded-full p-0 ${current === index ? "bg-primary border-primary" : ""}`}
            onClick={() => {
              setDirection(index > current ? 1 : -1)
              setCurrent(index)
              setAutoplay(false)
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
        <motion.div whileTap={{ scale: 0.9 }}>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => {
              setDirection(1)
              next()
              setAutoplay(false)
            }}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
