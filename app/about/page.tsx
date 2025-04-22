/* eslint-disable react/no-unescaped-entities */

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Award, Users, Target, ArrowRight } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"
import StaggerItem from "@/components/animations/stagger-item"
import ScrollReveal from "@/components/animations/scroll-reveal"

const teamMembers = [
  {
    name: "Robert Burkowski",
    position: "Founder & CEO",
    bio: "With over 25 years in security operations, Robert founded BurKo Sec with a vision to provide comprehensive security solutions that prioritize both effectiveness and client satisfaction.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Sarah Kowalski",
    position: "Chief Operations Officer",
    bio: "Sarah brings 15 years of operational leadership experience in the security industry, specializing in optimizing security protocols and team management for maximum efficiency.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Michael Chen",
    position: "Head of Electronic Security",
    bio: "A technology expert with extensive experience in surveillance systems and electronic security solutions, Michael leads our technical security implementations.",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    name: "Jessica Rodriguez",
    position: "Risk Assessment Director",
    bio: "With a background in threat analysis and security planning, Jessica oversees our comprehensive risk assessment services to identify and mitigate potential vulnerabilities.",
    image: "/placeholder.svg?height=300&width=300",
  },
]

const timelineEvents = [
  {
    year: "2005",
    title: "Company Founded",
    description:
      "BurKo Sec was established with a focus on providing professional manned guarding services to local businesses.",
  },
  {
    year: "2008",
    title: "Electronic Security Division",
    description:
      "Expanded services to include electronic surveillance and monitoring solutions to complement physical security offerings.",
  },
  {
    year: "2012",
    title: "Risk Assessment Services",
    description:
      "Launched comprehensive risk assessment services to help clients identify and address security vulnerabilities.",
  },
  {
    year: "2015",
    title: "National Expansion",
    description: "Opened regional offices across the country to better serve clients nationwide with local expertise.",
  },
  {
    year: "2018",
    title: "Industry Recognition",
    description: "Received multiple industry awards for excellence in security services and client satisfaction.",
  },
  {
    year: "2020",
    title: "Technology Integration",
    description: "Implemented advanced AI and analytics capabilities into our surveillance and monitoring systems.",
  },
  {
    year: "2023",
    title: "International Operations",
    description:
      "Began offering services internationally, bringing our security expertise to clients around the world.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-12">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight mb-4">About BurKo Sec</h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Your trusted partner in comprehensive security solutions since 2005.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <FadeIn direction="right">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="BurKo Sec security professionals"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <div>
                <div className="mb-8">
                  <Badge className="mb-2 bg-primary hover:bg-primary">Our Mission</Badge>
                  <h2 className="text-3xl font-bold tracking-tight mb-4">Protecting What Matters Most</h2>
                  <p className="text-lg text-gray-600">
                    At BurKo Sec, our mission is to provide comprehensive security solutions that safeguard our clients'
                    assets, people, and peace of mind. We are committed to delivering professional, reliable, and
                    innovative security services tailored to each client's unique needs.
                  </p>
                </div>

                <div>
                  <Badge className="mb-2 bg-navy-800 hover:bg-navy-800">Our Vision</Badge>
                  <h2 className="text-3xl font-bold tracking-tight mb-4">Setting the Standard in Security</h2>
                  <p className="text-lg text-gray-600">
                    We aspire to be the industry leader in security services, recognized for our integrity, expertise,
                    and commitment to excellence. Our vision is to continuously evolve our services to address emerging
                    security challenges and exceed our clients' expectations.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do at BurKo Sec, from our daily operations to our long-term
                strategic decisions.
              </p>
            </div>
          </ScrollReveal>

          <StaggerChildren>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StaggerItem>
                <Card className="border-none shadow-lg">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Integrity</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">
                      We conduct our business with the highest ethical standards, honesty, and transparency in all our
                      interactions.
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card className="border-none shadow-lg">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Excellence</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">
                      We strive for excellence in every aspect of our service delivery, continuously improving our
                      methods and standards.
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card className="border-none shadow-lg">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Teamwork</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">
                      We believe in the power of collaboration, working together with our clients and within our team to
                      achieve optimal results.
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card className="border-none shadow-lg">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Innovation</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">
                      We embrace new technologies and methodologies to enhance our security solutions and stay ahead of
                      evolving threats.
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Journey</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From our humble beginnings to becoming a leading security provider, explore the key milestones in our
                company's history.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="relative">
                    <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                      <div className={`md:text-right ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                        <div
                          className={`bg-primary text-white inline-block px-3 py-1 rounded mb-2 ${index % 2 === 1 ? "md:ml-auto" : ""}`}
                        >
                          {event.year}
                        </div>
                        <h3 className="text-xl font-bold">{event.title}</h3>
                        <p className="text-gray-600 mt-2">{event.description}</p>
                      </div>

                      {/* Timeline dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full hidden md:block"></div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Leadership Team</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Meet the experienced professionals who guide our company's strategic direction and operations.
              </p>
            </div>
          </ScrollReveal>

          <StaggerChildren>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <StaggerItem key={index}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="text-center p-0">
                      <div className="relative h-64 w-full">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="text-center pt-6">
                      <CardTitle className="mb-1">{member.name}</CardTitle>
                      <CardDescription className="mb-4">{member.position}</CardDescription>
                      <p className="text-sm text-gray-600">{member.bio}</p>
                    </CardContent>
                  </Card>
                </StaggerItem>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Certifications & Affiliations */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Certifications & Affiliations</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We maintain the highest industry standards through professional certifications and strategic
                partnerships.
              </p>
            </div>
          </ScrollReveal>

          <StaggerChildren staggerDelay={0.05}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {Array.from({ length: 6 }).map((_, index) => (
                <StaggerItem key={index}>
                  <div className="flex flex-col items-center">
                    <div className="relative h-24 w-24 bg-gray-100 rounded-full p-4 mb-4">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt={`Certification ${index + 1}`}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <p className="text-sm font-medium text-center">
                      {
                        ["ISO 27001", "SIA Approved", "NSI Gold", "BSIA Member", "ACS Pacesetters", "SafeContractor"][
                          index
                        ]
                      }
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Join Our Team</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our values and commitment to excellence. Explore
              career opportunities with BurKo Sec.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/careers" className="flex items-center gap-2">
                View Open Positions <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
