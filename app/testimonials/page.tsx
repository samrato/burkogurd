/* eslint-disable react/no-unescaped-entities */

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Quote, Star } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"
import StaggerItem from "@/components/animations/stagger-item"
import ScrollReveal from "@/components/animations/scroll-reveal"

const testimonials = [
  {
    id: 1,
    content:
      "BurKo Sec has transformed our security operations. Their professional team and advanced technology have significantly reduced security incidents at our corporate headquarters. We've been impressed with their attention to detail and proactive approach to identifying potential vulnerabilities.",
    author: "Sarah Johnson",
    position: "Operations Director",
    company: "TechCorp Industries",
    logo: "/placeholder.svg?height=60&width=120",
    image: "/placeholder.svg?height=200&width=200",
    category: "Corporate",
    rating: 5,
  },
  {
    id: 2,
    content:
      "We've been working with BurKo Sec for our event security needs for over 5 years. Their attention to detail and proactive approach ensures our events run smoothly and safely. The security personnel are always professional, well-trained, and integrate seamlessly with our event staff.",
    author: "Michael Chen",
    position: "Event Manager",
    company: "Global Events Ltd",
    logo: "/placeholder.svg?height=60&width=120",
    image: "/placeholder.svg?height=200&width=200",
    category: "Events",
    rating: 5,
  },
  {
    id: 3,
    content:
      "The risk assessment conducted by BurKo Sec was comprehensive and eye-opening. Their recommendations have helped us implement a robust security system for our residential complex. Our residents now feel much safer, and we've seen a significant reduction in security-related incidents.",
    author: "David Williams",
    position: "Property Manager",
    company: "Oakwood Residences",
    logo: "/placeholder.svg?height=60&width=120",
    image: "/placeholder.svg?height=200&width=200",
    category: "Residential",
    rating: 5,
  },
  {
    id: 4,
    content:
      "BurKo Sec's electronic surveillance solutions have revolutionized how we monitor our manufacturing facilities. The high-definition cameras and intelligent analytics have not only improved security but also helped us optimize our operations and ensure compliance with safety regulations.",
    author: "Jennifer Lee",
    position: "Facility Manager",
    company: "Precision Manufacturing Inc.",
    logo: "/placeholder.svg?height=60&width=120",
    image: "/placeholder.svg?height=200&width=200",
    category: "Corporate",
    rating: 5,
  },
  {
    id: 5,
    content:
      "As a retail chain with multiple locations, we needed a security partner who could provide consistent service across all our stores. BurKo Sec has exceeded our expectations with their standardized yet customizable approach to each location's unique security challenges.",
    author: "Robert Thompson",
    position: "Regional Director",
    company: "Urban Retail Group",
    logo: "/placeholder.svg?height=60&width=120",
    image: "/placeholder.svg?height=200&width=200",
    category: "Corporate",
    rating: 4,
  },
  {
    id: 6,
    content:
      "The security team from BurKo Sec was exceptional during our annual conference. They handled crowd management, VIP protection, and emergency protocols with utmost professionalism. Their presence gave us peace of mind and allowed us to focus on delivering a successful event.",
    author: "Amanda Rodriguez",
    position: "Conference Coordinator",
    company: "Industry Summit",
    logo: "/placeholder.svg?height=60&width=120",
    image: "/placeholder.svg?height=200&width=200",
    category: "Events",
    rating: 5,
  },
  {
    id: 7,
    content:
      "After experiencing a break-in, we contacted BurKo Sec for a home security assessment. Their team provided practical, cost-effective solutions that significantly enhanced our home's security. Their ongoing monitoring service gives us peace of mind whether we're home or away.",
    author: "James and Emily Wilson",
    position: "Homeowners",
    company: "Residential Client",
    logo: "/placeholder.svg?height=60&width=120",
    image: "/placeholder.svg?height=200&width=200",
    category: "Residential",
    rating: 5,
  },
  {
    id: 8,
    content:
      "Our hospital required a security partner who understood the unique challenges of healthcare facilities. BurKo Sec's specialized team has been instrumental in maintaining a safe environment for our patients, staff, and visitors while ensuring sensitive areas remain secure.",
    author: "Dr. Patricia Nguyen",
    position: "Hospital Administrator",
    company: "Metropolitan Medical Center",
    logo: "/placeholder.svg?height=60&width=120",
    image: "/placeholder.svg?height=200&width=200",
    category: "Corporate",
    rating: 5,
  },
  {
    id: 9,
    content:
      "BurKo Sec installed and maintains the security system for our gated community. Their comprehensive approach includes perimeter security, access control, and regular patrols. Our community has never felt safer, and the response time to any concerns is always impressive.",
    author: "Thomas Garcia",
    position: "HOA President",
    company: "Lakeside Community",
    logo: "/placeholder.svg?height=60&width=120",
    image: "/placeholder.svg?height=200&width=200",
    category: "Residential",
    rating: 4,
  },
]

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-12">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight mb-4">Client Testimonials</h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Hear from businesses and individuals who trust BurKo Sec with their security needs.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials Tabs */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="corporate">Corporate</TabsTrigger>
                <TabsTrigger value="residential">Residential</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <StaggerChildren>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                      <StaggerItem key={testimonial.id}>
                        <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                          <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                              <Quote className="h-8 w-8 text-primary" />
                              <div className="flex">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <p className="mb-6 text-gray-700">{testimonial.content}</p>
                            <div className="flex items-center gap-4 mt-auto">
                              <div className="relative h-12 w-12 rounded-full overflow-hidden">
                                <Image
                                  src={testimonial.image || "/placeholder.svg"}
                                  alt={testimonial.author}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <p className="font-bold">{testimonial.author}</p>
                                <p className="text-sm text-gray-600">
                                  {testimonial.position}, {testimonial.company}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerChildren>
              </TabsContent>

              <TabsContent value="corporate">
                <StaggerChildren>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials
                      .filter((testimonial) => testimonial.category === "Corporate")
                      .map((testimonial) => (
                        <StaggerItem key={testimonial.id}>
                          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="p-6">
                              <div className="flex justify-between items-start mb-4">
                                <Quote className="h-8 w-8 text-primary" />
                                <div className="flex">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                              <p className="mb-6 text-gray-700">{testimonial.content}</p>
                              <div className="flex items-center gap-4 mt-auto">
                                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                                  <Image
                                    src={testimonial.image || "/placeholder.svg"}
                                    alt={testimonial.author}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div>
                                  <p className="font-bold">{testimonial.author}</p>
                                  <p className="text-sm text-gray-600">
                                    {testimonial.position}, {testimonial.company}
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </StaggerItem>
                      ))}
                  </div>
                </StaggerChildren>
              </TabsContent>

              <TabsContent value="residential">
                <StaggerChildren>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials
                      .filter((testimonial) => testimonial.category === "Residential")
                      .map((testimonial) => (
                        <StaggerItem key={testimonial.id}>
                          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="p-6">
                              <div className="flex justify-between items-start mb-4">
                                <Quote className="h-8 w-8 text-primary" />
                                <div className="flex">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                              <p className="mb-6 text-gray-700">{testimonial.content}</p>
                              <div className="flex items-center gap-4 mt-auto">
                                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                                  <Image
                                    src={testimonial.image || "/placeholder.svg"}
                                    alt={testimonial.author}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div>
                                  <p className="font-bold">{testimonial.author}</p>
                                  <p className="text-sm text-gray-600">
                                    {testimonial.position}, {testimonial.company}
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </StaggerItem>
                      ))}
                  </div>
                </StaggerChildren>
              </TabsContent>

              <TabsContent value="events">
                <StaggerChildren>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials
                      .filter((testimonial) => testimonial.category === "Events")
                      .map((testimonial) => (
                        <StaggerItem key={testimonial.id}>
                          <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="p-6">
                              <div className="flex justify-between items-start mb-4">
                                <Quote className="h-8 w-8 text-primary" />
                                <div className="flex">
                                  {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-4 w-4 ${
                                        i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                              </div>
                              <p className="mb-6 text-gray-700">{testimonial.content}</p>
                              <div className="flex items-center gap-4 mt-auto">
                                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                                  <Image
                                    src={testimonial.image || "/placeholder.svg"}
                                    alt={testimonial.author}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div>
                                  <p className="font-bold">{testimonial.author}</p>
                                  <p className="text-sm text-gray-600">
                                    {testimonial.position}, {testimonial.company}
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </StaggerItem>
                      ))}
                  </div>
                </StaggerChildren>
              </TabsContent>
            </Tabs>
          </FadeIn>
        </div>
      </section>

      {/* Featured Client Logos */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tight mb-4">Trusted By Industry Leaders</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're proud to provide security solutions to organizations across various industries.
              </p>
            </div>
          </ScrollReveal>

          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="flex justify-center">
                  <div className="relative h-16 w-32 bg-white p-4 rounded-md shadow-sm">
                    <Image
                      src="/placeholder.svg?height=64&width=128"
                      alt={`Client logo ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Video Testimonial */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <FadeIn>
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-4">Hear From Our Clients</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Watch this short video to hear directly from our clients about their experience working with BurKo Sec
                  and how our security solutions have made a difference for their organizations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
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
                    <span>Real stories from real clients</span>
                  </div>
                  <div className="flex items-start gap-3">
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
                    <span>Measurable security improvements</span>
                  </div>
                  <div className="flex items-start gap-3">
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
                    <span>Customized security solutions</span>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3} direction="left">
              <div className="relative h-[300px] rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                <div className="absolute inset-0">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Video thumbnail"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative z-10">
                  <Button className="rounded-full w-16 h-16 bg-primary/90 hover:bg-primary">
                    <svg
                      className="h-8 w-8 text-white"
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
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                    <span className="sr-only">Play video</span>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Join Our Satisfied Clients</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Experience the BurKo Sec difference for yourself. Contact us today to discuss your security needs and
              discover how we can help protect what matters most to you.
            </p>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
