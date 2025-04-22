"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Eye, FileSearch, ArrowRight, CheckCircle, Lock, Zap, Users } from "lucide-react"
import TestimonialCarousel from "@/components/testimonial-carousel"
import TrustBadges from "@/components/trust-badges"
import FadeIn from "@/components/animations/fade-in"
import ParallaxSection from "@/components/animations/parallax-section"
import TextReveal from "@/components/animations/text-reveal"
import HoverCard from "@/components/animations/hover-card"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-background via-accent/30 to-background overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl animate-pulse-slow" />
        </div>

        <div className="container px-4 md:px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  <TextReveal>Advanced Security</TextReveal>
                  <br />
                  <TextReveal delay={0.3} className="text-gradient">
                    For Modern Threats
                  </TextReveal>
                </h1>
              </motion.div>

              <motion.p
                className="text-lg text-muted-foreground max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Protecting what matters most with professional security services tailored to your unique needs.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Button asChild size="lg" className="bg-gradient hover:opacity-90 group">
                  <Link href="/contact/request-survey" className="flex items-center gap-2">
                    <Lock className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                    <span>Request Security Survey</span>
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg" className="group">
                  <Link href="/services" className="flex items-center gap-2">
                    <span>Explore Services</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden animated-border"
            >
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Security professionals monitoring surveillance systems"
                fill
                className="object-cover"
                priority
              />

              {/* Floating security badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-background rounded-full p-4 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
              >
                <Shield className="h-12 w-12 text-primary" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="container mt-12">
          <FadeIn delay={1.2}>
            <TrustBadges />
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <TextReveal className="text-3xl font-bold tracking-tight mb-4">Why Choose VANGUARD</TextReveal>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We deliver exceptional security services with a focus on professionalism, innovation, and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HoverCard>
              <Card className="border-none shadow-lg h-full bg-background/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <motion.div
                    className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Shield className="h-8 w-8 text-primary" />
                  </motion.div>
                  <CardTitle>Experienced Professionals</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Our team consists of highly trained security experts with years of industry experience and proper
                    certifications.
                  </p>
                </CardContent>
              </Card>
            </HoverCard>

            <HoverCard>
              <Card className="border-none shadow-lg h-full bg-background/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <motion.div
                    className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4"
                    whileHover={{ rotate: -5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Zap className="h-8 w-8 text-primary" />
                  </motion.div>
                  <CardTitle>Advanced Technology</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    We utilize cutting-edge security systems and equipment to provide comprehensive protection for your
                    property.
                  </p>
                </CardContent>
              </Card>
            </HoverCard>

            <HoverCard>
              <Card className="border-none shadow-lg h-full bg-background/50 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <motion.div
                    className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <FileSearch className="h-8 w-8 text-primary" />
                  </motion.div>
                  <CardTitle>Customized Solutions</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    We develop tailored security plans based on thorough risk assessments to address your specific
                    needs.
                  </p>
                </CardContent>
              </Card>
            </HoverCard>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 bg-accent/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <TextReveal className="text-3xl font-bold tracking-tight mb-4">Our Featured Services</TextReveal>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive security solutions designed to protect your assets, people, and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ParallaxSection speed={0.2}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Card className="h-full hover-lift">
                  <CardHeader>
                    <div className="mb-4 h-48 relative rounded-md overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Manned Guarding"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-2 left-2 bg-primary text-white p-2 rounded-md">
                        <Shield className="h-5 w-5" />
                      </div>
                    </div>
                    <CardTitle>Manned Guarding</CardTitle>
                    <CardDescription>Professional security personnel for your premises</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>24/7 on-site security presence</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Trained and licensed security officers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Regular patrol and incident reporting</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full group">
                      <Link href="/services/manned-guarding" className="flex items-center justify-center gap-2">
                        Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </ParallaxSection>

            <ParallaxSection speed={0.3}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Card className="h-full hover-lift">
                  <CardHeader>
                    <div className="mb-4 h-48 relative rounded-md overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Electronic Surveillance"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-2 left-2 bg-primary text-white p-2 rounded-md">
                        <Eye className="h-5 w-5" />
                      </div>
                    </div>
                    <CardTitle>Electronic Surveillance</CardTitle>
                    <CardDescription>Advanced CCTV and monitoring solutions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>High-definition CCTV systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Remote monitoring capabilities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Intrusion detection systems</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full group">
                      <Link href="/services/electronic-surveillance" className="flex items-center justify-center gap-2">
                        Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </ParallaxSection>

            <ParallaxSection speed={0.4}>
              <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Card className="h-full hover-lift">
                  <CardHeader>
                    <div className="mb-4 h-48 relative rounded-md overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Risk Assessment"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-2 left-2 bg-primary text-white p-2 rounded-md">
                        <FileSearch className="h-5 w-5" />
                      </div>
                    </div>
                    <CardTitle>Risk Assessment</CardTitle>
                    <CardDescription>Comprehensive security evaluations and planning</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Thorough security audits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Vulnerability identification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>Custom security recommendations</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full group">
                      <Link href="/services/risk-assessment" className="flex items-center justify-center gap-2">
                        Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </ParallaxSection>
          </div>

          <div className="text-center mt-12">
            <FadeIn delay={0.3}>
              <Button asChild className="bg-gradient hover:opacity-90">
                <Link href="/services" className="flex items-center gap-2">
                  View All Services <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <TextReveal className="text-3xl font-bold tracking-tight mb-4">What Our Clients Say</TextReveal>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from businesses and individuals who trust VANGUARD with their security needs.
            </p>
          </div>

          <FadeIn>
            <TestimonialCarousel />
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <FadeIn delay={0.1}>
              <div className="space-y-2">
                <motion.div
                  className="text-4xl md:text-5xl font-bold"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  500+
                </motion.div>
                <p className="text-sm md:text-base">Clients Protected</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-2">
                <motion.div
                  className="text-4xl md:text-5xl font-bold"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  18
                </motion.div>
                <p className="text-sm md:text-base">Years Experience</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="space-y-2">
                <motion.div
                  className="text-4xl md:text-5xl font-bold"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  250+
                </motion.div>
                <p className="text-sm md:text-base">Security Professionals</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="space-y-2">
                <motion.div
                  className="text-4xl md:text-5xl font-bold"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  24/7
                </motion.div>
                <p className="text-sm md:text-base">Monitoring & Support</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl" />
        </div>

        <div className="container px-4 md:px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <FadeIn>
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Enhance Your Security?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Contact us today for a free consultation and discover how VANGUARD can provide tailored security
                  solutions for your specific needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="default" size="lg" className="bg-gradient hover:opacity-90 group">
                    <Link href="/contact" className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>Contact Our Team</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} direction="left">
              <motion.div
                className="relative h-[300px] rounded-lg overflow-hidden animated-border"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Security professional consulting with client"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
