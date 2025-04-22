"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu, X, Shield, Lock } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    title: "Manned Guarding",
    href: "/services/manned-guarding",
    description: "Professional security personnel for your premises",
  },
  {
    title: "Electronic Surveillance",
    href: "/services/electronic-surveillance",
    description: "Advanced CCTV and monitoring solutions",
  },
  {
    title: "Risk Assessment",
    href: "/services/risk-assessment",
    description: "Comprehensive security evaluations and planning",
  },
  {
    title: "Event Security",
    href: "/services/event-security",
    description: "Specialized security for public and private events",
  },
  {
    title: "Residential Security",
    href: "/services/residential-security",
    description: "Tailored protection for homes and estates",
  },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative h-10 flex items-center"
            >
              <Shield className="h-6 w-6 text-primary mr-2" />
              <span className="font-montserrat text-2xl font-bold text-gradient">VANGUARD</span>
            </motion.div>
          </Link>

          <nav className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {services.map((service) => (
                        <motion.li key={service.title} whileHover={{ x: 5 }}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{service.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {service.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </motion.li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/resources" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Resources</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/testimonials" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Testimonials</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" asChild className="group">
            <Link href="/contact/request-survey" className="flex items-center gap-2">
              <Lock className="h-4 w-4 group-hover:rotate-12 transition-transform" />
              <span>Request Survey</span>
            </Link>
          </Button>
        </div>

        <motion.button
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
          <span className="sr-only">Toggle menu</span>
        </motion.button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md md:hidden bg-background"
        >
          <div className="relative z-20 grid gap-6 rounded-md p-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold">Home</span>
            </Link>
            <div className="grid gap-3">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold">Services</span>
                </div>
                <div className="grid grid-cols-1 gap-2 pl-4">
                  {services.map((service) => (
                    <Link key={service.title} href={service.href} className="text-sm">
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/about" className="flex items-center space-x-2">
                <span className="font-bold">About</span>
              </Link>
              <Link href="/resources" className="flex items-center space-x-2">
                <span className="font-bold">Resources</span>
              </Link>
              <Link href="/testimonials" className="flex items-center space-x-2">
                <span className="font-bold">Testimonials</span>
              </Link>
              <Link href="/contact" className="flex items-center space-x-2">
                <span className="font-bold">Contact</span>
              </Link>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <Button variant="outline" asChild className="w-full">
                <Link href="/contact/request-survey" className="flex items-center justify-center gap-2">
                  <Lock className="h-4 w-4" />
                  <span>Request Survey</span>
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
