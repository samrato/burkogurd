"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Shield, CheckCircle, Users, Clock, Award } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import TextReveal from "@/components/animations/text-reveal"
import ParallaxSection from "@/components/animations/parallax-section"
import { motion } from "framer-motion"

export default function MannedGuardingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-accent/30 to-background overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl animate-pulse-slow" />
        </div>

        <div className="container px-4 md:px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block p-3 rounded-full bg-primary/10 mb-4"
              >
                <Shield className="h-6 w-6 text-primary" />
              </motion.div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                <TextReveal>Manned Guarding</TextReveal>
                <TextReveal delay={0.3} className="text-gradient">
                  Services
                </TextReveal>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Professional security personnel providing a visible deterrent and immediate response to security threats
                at your premises.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button asChild className="bg-gradient hover:opacity-90 group">
                  <Link href="/contact/request-survey" className="flex items-center gap-2">
                    Request Consultation{" "}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden animated-border"
            >
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Security guard monitoring premises"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <TextReveal className="text-3xl font-bold tracking-tight mb-4">Key Benefits of Manned Guarding</TextReveal>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our professional security personnel provide numerous advantages for your premises and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ParallaxSection speed={0.2}>
              <Card className="border-none shadow-lg h-full bg-background/50 backdrop-blur-sm hover-lift">
                <CardContent className="p-6">
                  <motion.div
                    className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Shield className="h-8 w-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">Visible Deterrent</h3>
                  <p className="text-muted-foreground">
                    The physical presence of security personnel serves as a powerful deterrent to potential intruders
                    and criminal activity.
                  </p>
                </CardContent>
              </Card>
            </ParallaxSection>

            <ParallaxSection speed={0.3}>
              <Card className="border-none shadow-lg h-full bg-background/50 backdrop-blur-sm hover-lift">
                <CardContent className="p-6">
                  <motion.div
                    className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4"
                    whileHover={{ rotate: -5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Clock className="h-8 w-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">Immediate Response</h3>
                  <p className="text-muted-foreground">
                    Security guards can respond immediately to incidents, minimizing damage and preventing escalation of
                    security threats.
                  </p>
                </CardContent>
              </Card>
            </ParallaxSection>

            <ParallaxSection speed={0.4}>
              <Card className="border-none shadow-lg h-full bg-background/50 backdrop-blur-sm hover-lift">
                <CardContent className="p-6">
                  <motion.div
                    className="bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Users className="h-8 w-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">Customer Service</h3>
                  <p className="text-muted-foreground">
                    Our guards are trained to provide excellent customer service, assisting visitors and enhancing your
                    professional image.
                  </p>
                </CardContent>
              </Card>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-16 bg-accent/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn direction="right">
              <div>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="inline-block p-3 rounded-full bg-primary/10 mb-4"
                >
                  <Award className="h-6 w-6 text-primary" />
                </motion.div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Our Manned Guarding Services</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  VANGUARD provides highly trained security personnel for a wide range of environments and requirements.
                </p>

                <ul className="space-y-4">
                  <motion.li
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold">24/7 Security Presence</h3>
                      <p className="text-muted-foreground">
                        Round-the-clock protection with flexible scheduling to meet your specific needs.
                      </p>
                    </div>
                  </motion.li>

                  <motion.li
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Access Control Management</h3>
                      <p className="text-muted-foreground">
                        Monitoring entry points, verifying credentials, and maintaining visitor logs.
                      </p>
                    </div>
                  </motion.li>

                  <motion.li
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Regular Patrols</h3>
                      <p className="text-muted-foreground">
                        Scheduled patrols of your premises to identify and address potential security issues.
                      </p>
                    </div>
                  </motion.li>

                  <motion.li
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Incident Reporting</h3>
                      <p className="text-muted-foreground">
                        Detailed documentation of security events with actionable insights.
                      </p>
                    </div>
                  </motion.li>

                  <motion.li
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Emergency Response</h3>
                      <p className="text-muted-foreground">
                        Trained personnel ready to handle security incidents and emergencies.
                      </p>
                    </div>
                  </motion.li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.3}>
              <ParallaxSection speed={0.2}>
                <motion.div
                  className="relative h-[500px] rounded-lg overflow-hidden animated-border"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Security guard on duty"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </ParallaxSection>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <TextReveal className="text-3xl font-bold tracking-tight mb-4">Industries We Serve</TextReveal>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our manned guarding services are tailored to meet the unique security needs of various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Corporate Offices", icon: "🏢" },
              { name: "Retail", icon: "🛍️" },
              { name: "Healthcare", icon: "🏥" },
              { name: "Education", icon: "🎓" },
              { name: "Manufacturing", icon: "🏭" },
              { name: "Hospitality", icon: "🏨" },
              { name: "Construction", icon: "🏗️" },
              { name: "Residential", icon: "🏠" },
            ].map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-accent/50 p-6 rounded-lg text-center hover-lift"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="font-bold">{industry.name}</h3>
              </motion.div>
            ))}
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
              Contact us today to discuss how our manned guarding services can be tailored to your specific security
              needs.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="inline-block"
            >
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 group">
                <Link href="/contact/request-survey" className="flex items-center gap-2">
                  Request Security Consultation{" "}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
