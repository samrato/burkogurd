
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"
import StaggerItem from "@/components/animations/stagger-item"
import ScrollReveal from "@/components/animations/scroll-reveal"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-12">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight mb-4">Contact BurKo Sec</h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Our security experts are ready to assist you with any inquiries or to discuss your security needs.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <StaggerChildren>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StaggerItem>
                <Card>
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <Phone className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Call Us</CardTitle>
                    <CardDescription>Available 24/7 for emergencies</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="font-bold text-lg">1-800-SECURITY</p>
                    <p className="text-gray-600">General Inquiries: (555) 123-4567</p>
                  </CardContent>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card>
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Email Us</CardTitle>
                    <CardDescription>We'll respond within 24 hours</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="font-bold">info@burkosec.com</p>
                    <p className="text-gray-600">sales@burkosec.com</p>
                    <p className="text-gray-600">support@burkosec.com</p>
                  </CardContent>
                </Card>
              </StaggerItem>

              <StaggerItem>
                <Card>
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle>Visit Us</CardTitle>
                    <CardDescription>Our headquarters location</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="font-bold">123 Security Avenue</p>
                    <p className="text-gray-600">Safetown, ST 12345</p>
                    <p className="text-gray-600 mt-2 flex items-center justify-center gap-1">
                      <Clock className="h-4 w-4" /> Mon-Fri: 9AM-5PM
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
            </div>
          </ScrollReveal>

          <FadeIn>
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="general" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="general">General Inquiry</TabsTrigger>
                  <TabsTrigger value="quote">Request a Quote</TabsTrigger>
                  <TabsTrigger value="emergency">Emergency Contact</TabsTrigger>
                </TabsList>

                <TabsContent value="general">
                  <Card>
                    <CardHeader>
                      <CardTitle>General Inquiry</CardTitle>
                      <CardDescription>Have a question about our services? We're here to help.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">
                              Full Name
                            </label>
                            <Input id="name" placeholder="John Doe" required />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                              Email
                            </label>
                            <Input id="email" type="email" placeholder="john@example.com" required />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="subject" className="text-sm font-medium">
                            Subject
                          </label>
                          <Input id="subject" placeholder="How can we help you?" required />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium">
                            Message
                          </label>
                          <Textarea
                            id="message"
                            placeholder="Please provide details about your inquiry..."
                            rows={5}
                            required
                          />
                        </div>

                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                          Submit Inquiry
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="quote">
                  <Card>
                    <CardHeader>
                      <CardTitle>Request a Quote</CardTitle>
                      <CardDescription>Tell us about your security needs for a customized quote.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="quote-name" className="text-sm font-medium">
                              Full Name
                            </label>
                            <Input id="quote-name" placeholder="John Doe" required />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="quote-email" className="text-sm font-medium">
                              Email
                            </label>
                            <Input id="quote-email" type="email" placeholder="john@example.com" required />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="quote-phone" className="text-sm font-medium">
                              Phone
                            </label>
                            <Input id="quote-phone" type="tel" placeholder="(555) 123-4567" required />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="quote-company" className="text-sm font-medium">
                              Company (if applicable)
                            </label>
                            <Input id="quote-company" placeholder="Company Name" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="quote-service" className="text-sm font-medium">
                            Service Interested In
                          </label>
                          <select
                            id="quote-service"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            required
                          >
                            <option value="" disabled selected>
                              Select a service
                            </option>
                            <option value="manned-guarding">Manned Guarding</option>
                            <option value="electronic-surveillance">Electronic Surveillance</option>
                            <option value="risk-assessment">Risk Assessment</option>
                            <option value="event-security">Event Security</option>
                            <option value="residential-security">Residential Security</option>
                            <option value="other">Other (please specify)</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="quote-details" className="text-sm font-medium">
                            Project Details
                          </label>
                          <Textarea
                            id="quote-details"
                            placeholder="Please provide details about your security needs, location, timeline, etc."
                            rows={5}
                            required
                          />
                        </div>

                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                          Request Quote
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="emergency">
                  <Card>
                    <CardHeader>
                      <CardTitle>Emergency Contact</CardTitle>
                      <CardDescription>
                        For immediate assistance, please call our 24/7 hotline at{" "}
                        <span className="font-bold">1-800-SECURITY</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
                        <p className="text-red-800 font-medium">
                          If you are experiencing a security emergency that requires immediate attention, please call
                          our emergency hotline directly for the fastest response.
                        </p>
                      </div>

                      <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label htmlFor="emergency-name" className="text-sm font-medium">
                              Full Name
                            </label>
                            <Input id="emergency-name" placeholder="John Doe" required />
                          </div>
                          <div className="space-y-2">
                            <label htmlFor="emergency-phone" className="text-sm font-medium">
                              Phone
                            </label>
                            <Input id="emergency-phone" type="tel" placeholder="(555) 123-4567" required />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="emergency-location" className="text-sm font-medium">
                            Location
                          </label>
                          <Input id="emergency-location" placeholder="Address or location of incident" required />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="emergency-details" className="text-sm font-medium">
                            Emergency Details
                          </label>
                          <Textarea
                            id="emergency-details"
                            placeholder="Please describe the emergency situation..."
                            rows={5}
                            required
                          />
                        </div>

                        <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                          Submit Emergency Request
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tight mb-4">Our Location</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Visit our headquarters to discuss your security needs in person.
              </p>
            </div>
          </ScrollReveal>

          <FadeIn>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=1200"
                alt="Map showing BurKo Sec headquarters location"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Live Chat CTA */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <MessageSquare className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight mb-4">Need Immediate Assistance?</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our security experts are available to chat with you in real-time during business hours.
              </p>
              <Button className="bg-primary hover:bg-primary/90">Start Live Chat</Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
