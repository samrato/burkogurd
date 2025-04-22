"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Shield, Eye, FileSearch, Users, Home, Calendar, Lock, Zap, Fingerprint } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import TextReveal from "@/components/animations/text-reveal"
import ParallaxSection from "@/components/animations/parallax-section"
import HoverCard from "@/components/animations/hover-card"
import { motion } from "framer-motion"

const services = [
  {
    id: "manned-guarding",
    title: "Manned Guarding",
    description: "Professional security personnel for your premises",
    icon: Shield,
    image: "/placeholder.svg?height=300&width=500",
    features: [
      "24/7 on-site security presence",
      "Trained and licensed security officers",
      "Regular patrol and incident reporting",
      "Access control management",
      "Emergency response protocols",
    ],
    link: "/services/manned-guarding",
    color: "from-purple-500 to-purple-700",
  },
  {
    id: "electronic-surveillance",
    title: "Electronic Surveillance",
    description: "Advanced CCTV and monitoring solutions",
    icon: Eye,
    image: "/placeholder.svg?height=300&width=500",
    features: [
      "High-definition CCTV systems",
      "Remote monitoring capabilities",
      "Intrusion detection systems",
      "Video analytics and AI-powered surveillance",
      "Cloud storage and backup solutions",
    ],
    link: "/services/electronic-surveillance",
    color: "from-blue-500 to-blue-700",
  },
  {
    id: "risk-assessment",
    title: "Risk Assessment",
    description: "Comprehensive security evaluations and planning",
    icon: FileSearch,
    image: "/placeholder.svg?height=300&width=500",
    features: [
      "Thorough security audits",
      "Vulnerability identification",
      "Custom security recommendations",
      "Compliance assessment",
      "Security policy development",
    ],
    link: "/services/risk-assessment",
    color: "from-purple-500 to-blue-500",
  },
  {
    id: "event-security",
    title: "Event Security",
    description: "Specialized security for public and private events",
    icon: Calendar,
    image: "/placeholder.svg?height=300&width=500",
    features: [
      "Crowd management",
      "VIP protection",
      "Access control and ticketing",
      "Emergency response planning",
      "Coordination with local authorities",
    ],
    link: "/services/event-security",
    color: "from-blue-500 to-purple-500",
  },
  {
    id: "residential-security",
    title: "Residential Security",
    description: "Tailored protection for homes and estates",
    icon: Home,
    image: "/placeholder.svg?height=300&width=500",
    features: [
      "Home security assessments",
      "Alarm system installation and monitoring",
      "Residential security guards",
      "Smart home security integration",
      "Vacation watch services",
    ],
    link: "/services/residential-security",
    color: "from-purple-600 to-blue-600",
  },
  {
    id: "corporate-security",
    title: "Corporate Security",
    description: "Comprehensive protection for businesses and organizations",
    icon: Users,
    image: "/placeholder.svg?height=300&width=500",
    features: [
      "Workplace security assessments",
      "Employee security training",
      "Executive protection",
      "Secure transportation services",
      "Crisis management planning",
    ],
    link: "/services/corporate-security",
    color: "from-blue-600 to-purple-600",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Digital protection for your sensitive information",
    icon: Lock,
    image: "/placeholder.svg?height=300&width=500",
    features: [
      "Network security assessment",
      "Penetration testing",
      "Security awareness training",
      "Incident response planning",
      "Data protection consulting",
    ],
    link: "/services/cybersecurity",
    color: "from-purple-700 to-blue-700",
  },
  {
    id: "access-control",
    title: "Access Control Systems",
    description: "Advanced solutions to manage and monitor access",
    icon: Fingerprint,
    image: "/placeholder.svg?height=300&width=500",
    features: [
      "Biometric access systems",
      "Key card and fob solutions",
      "Visitor management systems",
      "Time and attendance tracking",
      "Integration with other security systems",
    ],
    link: "/services/access-control",
    color: "from-blue-700 to-purple-700",
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-accent/30 to-background py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl" />
        </div>

        <div className="container px-4 md:px-6 relative">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block p-3 rounded-full bg-primary/10 mb-4"
              >
                <Shield className="h-8 w-8 text-primary" />
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                <TextReveal>Comprehensive Security Solutions</TextReveal>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                VANGUARD offers a full spectrum of security services tailored to protect your assets, people, and peace
                of mind.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button asChild size="lg" className="bg-gradient hover:opacity-90">
                  <Link href="/contact/request-survey" className="flex items-center gap-2">
                    <Lock className="h-4 w-4" />
                    <span>Request Security Consultation</span>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ParallaxSection key={service.id} speed={0.1 * ((index % 3) + 1)}>
                <HoverCard>
                  <Card className="flex flex-col h-full hover-lift overflow-hidden">
                    <CardHeader className="p-0">
                      <div className="relative h-48 w-full overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-80`}></div>
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover mix-blend-overlay"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="bg-white/20 backdrop-blur-sm p-4 rounded-full"
                          >
                            <service.icon className="h-10 w-10 text-white" />
                          </motion.div>
                        </div>
                      </div>
                      <div className="p-6">
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <CardDescription className="mt-2">{service.description}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow px-6">
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <motion.li
                            key={index}
                            className="flex items-start gap-2"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            viewport={{ once: true }}
                          >
                            <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                              <svg
                                className="h-3 w-3 text-primary"
                                fill="none"
                                height="24"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                            <span className="text-sm">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="px-6 pb-6">
                      <Button asChild variant="outline" className="w-full group">
                        <Link href={service.link} className="flex items-center justify-center gap-2">
                          Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </HoverCard>
              </ParallaxSection>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-16 bg-accent/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <FadeIn>
              <div>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="inline-block p-3 rounded-full bg-primary/10 mb-4"
                >
                  <Zap className="h-6 w-6 text-primary" />
                </motion.div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Custom Security Solutions</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Don't see exactly what you need? We specialize in creating tailored security solutions to address your
                  unique challenges and requirements.
                </p>
                <ul className="space-y-3 mb-6">
                  <motion.li
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="rounded-full bg-primary/10 p-2 mt-0.5">
                      <svg
                        className="h-4 w-4 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      </svg>
                    </div>
                    <span>Integrated security systems combining physical and electronic measures</span>
                  </motion.li>
                  <motion.li
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="rounded-full bg-primary/10 p-2 mt-0.5">
                      <svg
                        className="h-4 w-4 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      </svg>
                    </div>
                    <span>Industry-specific security protocols for healthcare, finance, retail, and more</span>
                  </motion.li>
                  <motion.li
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="rounded-full bg-primary/10 p-2 mt-0.5">
                      <svg
                        className="h-4 w-4 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      </svg>
                    </div>
                    <span>Scalable solutions that grow with your business or changing needs</span>
                  </motion.li>
                </ul>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button asChild className="bg-gradient hover:opacity-90">
                    <Link href="/contact" className="flex items-center gap-2">
                      Discuss Your Requirements <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3} direction="left">
              <motion.div
                className="relative h-[400px] rounded-lg overflow-hidden animated-border"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Custom security solution planning"
                  fill
                  className="object-cover"
                />

                {/* Floating security badge */}
                <motion.div
                  className="absolute top-4 right-4 bg-background rounded-full p-3 shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
                >
                  <Lock className="h-8 w-8 text-primary" />
                </motion.div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <TextReveal className="text-3xl font-bold tracking-tight mb-4">
              Our Security Implementation Process
            </TextReveal>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a comprehensive approach to ensure your security needs are met with precision and expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <FadeIn delay={0.1}>
              <Card className="border-none shadow-lg bg-background/50 backdrop-blur-sm">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="relative w-full h-full"
                    >
                      <div className="absolute inset-0 rounded-full border-2 border-primary/30 border-dashed"></div>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full"></div>
                    </motion.div>
                    <span className="absolute text-xl font-bold">1</span>
                  </div>
                  <CardTitle>Assessment</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    We conduct a thorough evaluation of your security needs, vulnerabilities, and specific requirements.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="border-none shadow-lg bg-background/50 backdrop-blur-sm">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="relative w-full h-full"
                    >
                      <div className="absolute inset-0 rounded-full border-2 border-primary/30 border-dashed"></div>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full"></div>
                    </motion.div>
                    <span className="absolute text-xl font-bold">2</span>
                  </div>
                  <CardTitle>Planning</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    We develop a customized security strategy tailored to your specific needs and budget considerations.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Card className="border-none shadow-lg bg-background/50 backdrop-blur-sm">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="relative w-full h-full"
                    >
                      <div className="absolute inset-0 rounded-full border-2 border-primary/30 border-dashed"></div>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full"></div>
                    </motion.div>
                    <span className="absolute text-xl font-bold">3</span>
                  </div>
                  <CardTitle>Implementation</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Our expert team deploys the security solutions with minimal disruption to your operations.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.4}>
              <Card className="border-none shadow-lg bg-background/50 backdrop-blur-sm">
                <CardHeader className="text-center pb-2">
                  <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="relative w-full h-full"
                    >
                      <div className="absolute inset-0 rounded-full border-2 border-primary/30 border-dashed"></div>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full"></div>
                    </motion.div>
                    <span className="absolute text-xl font-bold">4</span>
                  </div>
                  <CardTitle>Monitoring</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    We provide ongoing support, maintenance, and regular reviews to ensure optimal security performance.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container px-4 md:px-6 text-center">
          <FadeIn>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block p-3 rounded-full bg-white/10 backdrop-blur-sm mb-4"
            >
              <Shield className="h-8 w-8 text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Enhance Your Security?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and discover how VANGUARD can provide tailored security solutions
              for your specific needs.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 group">
                <Link href="/contact/request-survey" className="flex items-center gap-2">
                  <Lock className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                  <span>Request Security Survey</span>
                </Link>
              </Button>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
