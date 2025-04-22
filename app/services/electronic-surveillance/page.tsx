"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Eye, CheckCircle, Zap, Monitor, Bell } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import TextReveal from "@/components/animations/text-reveal"
import ParallaxSection from "@/components/animations/parallax-section"
import { motion } from "framer-motion"

export default function ElectronicSurveillancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background via-accent/30 to-background overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow" />
        </div>

        <div className="container px-4 md:px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block p-3 rounded-full bg-secondary/10 mb-4"
              >
                <Eye className="h-6 w-6 text-secondary" />
              </motion.div>
              <h1 className="text-4xl font-bold tracking-tight mb-4">
                <TextReveal>Electronic Surveillance</TextReveal>
                <TextReveal delay={0.3} className="text-gradient">
                  Solutions
                </TextReveal>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Advanced CCTV and monitoring systems providing comprehensive visual security and real-time threat
                detection.
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
                alt="Advanced surveillance system monitoring"
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
            <TextReveal className="text-3xl font-bold tracking-tight mb-4">
              Key Benefits of Electronic Surveillance
            </TextReveal>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our advanced surveillance systems provide numerous advantages for comprehensive security coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ParallaxSection speed={0.2}>
              <Card className="border-none shadow-lg h-full bg-background/50 backdrop-blur-sm hover-lift">
                <CardContent className="p-6">
                  <motion.div
                    className="bg-secondary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Eye className="h-8 w-8 text-secondary" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">24/7 Monitoring</h3>
                  <p className="text-muted-foreground">
                    Continuous surveillance ensures your property is protected at all times, even when you're not there.
                  </p>
                </CardContent>
              </Card>
            </ParallaxSection>

            <ParallaxSection speed={0.3}>
              <Card className="border-none shadow-lg h-full bg-background/50 backdrop-blur-sm hover-lift">
                <CardContent className="p-6">
                  <motion.div
                    className="bg-secondary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4"
                    whileHover={{ rotate: -5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Bell className="h-8 w-8 text-secondary" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">Instant Alerts</h3>
                  <p className="text-muted-foreground">
                    Receive immediate notifications of suspicious activities or security breaches for rapid response.
                  </p>
                </CardContent>
              </Card>
            </ParallaxSection>

            <ParallaxSection speed={0.4}>
              <Card className="border-none shadow-lg h-full bg-background/50 backdrop-blur-sm hover-lift">
                <CardContent className="p-6">
                  <motion.div
                    className="bg-secondary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Monitor className="h-8 w-8 text-secondary" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">Visual Evidence</h3>
                  <p className="text-muted-foreground">
                    High-definition footage provides valuable evidence for investigations and insurance claims.
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
                  className="inline-block p-3 rounded-full bg-secondary/10 mb-4"
                >
                  <Zap className="h-6 w-6 text-secondary" />
                </motion.div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Our Electronic Surveillance Solutions</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  VANGUARD provides state-of-the-art surveillance technology tailored to your specific security
                  requirements.
                </p>

                <ul className="space-y-4">
                  <motion.li
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold">HD CCTV Systems</h3>
                      <p className="text-muted-foreground">
                        High-definition cameras providing crystal-clear footage for optimal surveillance.
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
                    <CheckCircle className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold">AI-Powered Analytics</h3>
                      <p className="text-muted-foreground">
                        Advanced algorithms that detect unusual activities and potential security threats.
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
                    <CheckCircle className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Remote Monitoring</h3>
                      <p className="text-muted-foreground">
                        Access your surveillance system from anywhere via secure mobile and desktop applications.
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
                    <CheckCircle className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Intrusion Detection</h3>
                      <p className="text-muted-foreground">
                        Integrated systems that immediately alert you to unauthorized access attempts.
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
                    <CheckCircle className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Cloud Storage Solutions</h3>
                      <p className="text-muted-foreground">
                        Secure, off-site storage of footage with flexible retention options.
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
                    alt="Advanced surveillance monitoring center"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </ParallaxSection>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <TextReveal className="text-3xl font-bold tracking-tight mb-4">Our Surveillance Technology</TextReveal>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the cutting-edge surveillance equipment we deploy to keep your premises secure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "4K Ultra HD Cameras", description: "Crystal clear footage with exceptional detail" },
              { name: "Thermal Imaging", description: "Detect intruders even in complete darkness" },
              { name: "PTZ Cameras", description: "Pan, tilt, and zoom capabilities for comprehensive coverage" },
              {
                name: "AI-Powered Analytics",
                description: 'Intelligent detection of suspicious activities" },lities for comprehensive coverage',
              },
              { name: "AI-Powered Analytics", description: "Intelligent detection of suspicious activities" },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-accent/50 p-6 rounded-lg text-center hover-lift"
              >
                <div className="mb-4">
                  <motion.div
                    className="inline-block p-3 rounded-full bg-secondary/10"
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Eye className="h-6 w-6 text-secondary" />
                  </motion.div>
                </div>
                <h3 className="font-bold mb-2">{tech.name}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 bg-accent/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <FadeIn direction="right">
              <motion.div
                className="relative h-[400px] rounded-lg overflow-hidden animated-border"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Integrated security systems"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </FadeIn>

            <FadeIn direction="left" delay={0.3}>
              <div>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="inline-block p-3 rounded-full bg-secondary/10 mb-4"
                >
                  <Zap className="h-6 w-6 text-secondary" />
                </motion.div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Seamless Integration</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our electronic surveillance systems integrate seamlessly with your existing security infrastructure.
                </p>

                <ul className="space-y-4">
                  <motion.li
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Access Control Integration</h3>
                      <p className="text-muted-foreground">
                        Combine surveillance with access control for comprehensive security.
                      </p>
                    </div>
                  </motion.li>

                  <motion.li
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Alarm System Connectivity</h3>
                      <p className="text-muted-foreground">
                        Link cameras to trigger recording when alarms are activated.
                      </p>
                    </div>
                  </motion.li>

                  <motion.li
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold">Mobile Application</h3>
                      <p className="text-muted-foreground">
                        Control and monitor your surveillance system from anywhere.
                      </p>
                    </div>
                  </motion.li>
                </ul>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="mt-8"
                >
                  <Button asChild className="bg-gradient hover:opacity-90 group">
                    <Link href="/contact/request-survey" className="flex items-center gap-2">
                      Request Integration Consultation{" "}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container px-4 md:px-6 text-center">
          <FadeIn>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block p-3 rounded-full bg-white/10 backdrop-blur-sm mb-4"
            >
              <Eye className="h-8 w-8 text-white" />
            </motion.div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Enhance Your Security with Advanced Surveillance</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our electronic surveillance solutions can be tailored to your specific
              security needs.
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
