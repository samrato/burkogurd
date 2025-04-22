import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, FileText, Video, Download, Calendar } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import StaggerChildren from "@/components/animations/stagger-children"
import StaggerItem from "@/components/animations/stagger-item"
import ScrollReveal from "@/components/animations/scroll-reveal"

const blogPosts = [
  {
    id: 1,
    title: "10 Essential Security Measures for Small Businesses",
    excerpt:
      "Discover the most important security measures that every small business should implement to protect their assets and data.",
    date: "April 15, 2023",
    category: "Business Security",
    image: "/placeholder.svg?height=200&width=400",
    author: "Robert Burkowski",
    authorRole: "Founder & CEO",
  },
  {
    id: 2,
    title: "The Evolution of Surveillance Technology",
    excerpt:
      "Explore how surveillance technology has evolved over the years and what the future holds for security monitoring.",
    date: "March 22, 2023",
    category: "Technology",
    image: "/placeholder.svg?height=200&width=400",
    author: "Michael Chen",
    authorRole: "Head of Electronic Security",
  },
  {
    id: 3,
    title: "Residential Security: Protecting Your Home While on Vacation",
    excerpt: "Learn effective strategies to keep your home secure while you're away on vacation or business trips.",
    date: "February 10, 2023",
    category: "Residential Security",
    image: "/placeholder.svg?height=200&width=400",
    author: "Jessica Rodriguez",
    authorRole: "Risk Assessment Director",
  },
  {
    id: 4,
    title: "Understanding Security Risk Assessments",
    excerpt: "A comprehensive guide to security risk assessments and why they are crucial for your organization.",
    date: "January 5, 2023",
    category: "Risk Management",
    image: "/placeholder.svg?height=200&width=400",
    author: "Sarah Kowalski",
    authorRole: "Chief Operations Officer",
  },
]

const whitepapers = [
  {
    id: 1,
    title: "The Future of Physical Security in a Digital World",
    description: "An in-depth analysis of how physical security is evolving in response to digital transformation.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Comprehensive Guide to Corporate Security Planning",
    description: "A detailed framework for developing and implementing effective corporate security strategies.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Security Convergence: Integrating Physical and Cyber Security",
    description: "Exploring the benefits and challenges of converging physical and cyber security operations.",
    image: "/placeholder.svg?height=200&width=400",
  },
]

const webinars = [
  {
    id: 1,
    title: "Securing the Modern Workplace",
    date: "May 20, 2023",
    time: "2:00 PM - 3:30 PM EST",
    description: "Learn about the latest approaches to workplace security in hybrid and remote work environments.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    title: "Emergency Response Planning for Businesses",
    date: "June 15, 2023",
    time: "1:00 PM - 2:00 PM EST",
    description: "Discover how to create and implement effective emergency response plans for various scenarios.",
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    title: "Advanced CCTV Systems: Selection and Implementation",
    date: "July 10, 2023",
    time: "11:00 AM - 12:30 PM EST",
    description: "A technical overview of modern CCTV systems and best practices for implementation.",
    image: "/placeholder.svg?height=200&width=400",
  },
]

export default function ResourcesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-navy-800 text-white py-12">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight mb-4">Security Resources</h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Explore our collection of articles, guides, and resources to help you stay informed about security best
                practices.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Resources Tabs */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <Tabs defaultValue="blog" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="blog">Blog Articles</TabsTrigger>
                <TabsTrigger value="whitepapers">Whitepapers</TabsTrigger>
                <TabsTrigger value="webinars">Webinars</TabsTrigger>
              </TabsList>

              <TabsContent value="blog">
                <StaggerChildren>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts.map((post) => (
                      <StaggerItem key={post.id}>
                        <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                          <CardHeader className="p-0">
                            <div className="relative h-48 w-full">
                              <Image
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                fill
                                className="object-cover rounded-t-lg"
                              />
                            </div>
                          </CardHeader>
                          <CardContent className="p-6">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs font-medium text-primary">{post.category}</span>
                              <span className="text-xs text-gray-500">•</span>
                              <span className="text-xs text-gray-500">{post.date}</span>
                            </div>
                            <CardTitle className="mb-2">{post.title}</CardTitle>
                            <CardDescription className="mb-4">{post.excerpt}</CardDescription>
                            <div className="flex items-center gap-2 mt-4">
                              <div className="relative h-8 w-8 rounded-full bg-gray-200">
                                <Image
                                  src="/placeholder.svg?height=32&width=32"
                                  alt={post.author}
                                  fill
                                  className="rounded-full object-cover"
                                />
                              </div>
                              <div>
                                <p className="text-sm font-medium">{post.author}</p>
                                <p className="text-xs text-gray-500">{post.authorRole}</p>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button asChild variant="outline" className="w-full">
                              <Link
                                href={`/resources/blog/${post.id}`}
                                className="flex items-center justify-center gap-2"
                              >
                                Read More <ArrowRight className="h-4 w-4" />
                              </Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerChildren>

                <div className="text-center mt-8">
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link href="/resources/blog">View All Articles</Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="whitepapers">
                <StaggerChildren>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {whitepapers.map((whitepaper) => (
                      <StaggerItem key={whitepaper.id}>
                        <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                          <CardHeader className="p-0">
                            <div className="relative h-48 w-full">
                              <Image
                                src={whitepaper.image || "/placeholder.svg"}
                                alt={whitepaper.title}
                                fill
                                className="object-cover rounded-t-lg"
                              />
                              <div className="absolute top-4 right-4 bg-primary text-white p-2 rounded-full">
                                <FileText className="h-5 w-5" />
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="p-6">
                            <CardTitle className="mb-2">{whitepaper.title}</CardTitle>
                            <CardDescription>{whitepaper.description}</CardDescription>
                          </CardContent>
                          <CardFooter>
                            <Button asChild className="w-full bg-primary hover:bg-primary/90">
                              <Link
                                href={`/resources/whitepapers/${whitepaper.id}`}
                                className="flex items-center justify-center gap-2"
                              >
                                <Download className="h-4 w-4" /> Download PDF
                              </Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerChildren>

                <div className="text-center mt-8">
                  <Button asChild variant="outline">
                    <Link href="/resources/whitepapers">View All Whitepapers</Link>
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="webinars">
                <StaggerChildren>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {webinars.map((webinar) => (
                      <StaggerItem key={webinar.id}>
                        <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                          <CardHeader className="p-0">
                            <div className="relative h-48 w-full">
                              <Image
                                src={webinar.image || "/placeholder.svg"}
                                alt={webinar.title}
                                fill
                                className="object-cover rounded-t-lg"
                              />
                              <div className="absolute top-4 right-4 bg-primary text-white p-2 rounded-full">
                                <Video className="h-5 w-5" />
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="p-6">
                            <div className="flex items-center gap-2 mb-2">
                              <Calendar className="h-4 w-4 text-primary" />
                              <span className="text-sm text-gray-500">{webinar.date}</span>
                            </div>
                            <CardTitle className="mb-2">{webinar.title}</CardTitle>
                            <p className="text-sm text-primary mb-2">{webinar.time}</p>
                            <CardDescription>{webinar.description}</CardDescription>
                          </CardContent>
                          <CardFooter>
                            <Button asChild className="w-full bg-primary hover:bg-primary/90">
                              <Link
                                href={`/resources/webinars/${webinar.id}`}
                                className="flex items-center justify-center gap-2"
                              >
                                Register Now
                              </Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      </StaggerItem>
                    ))}
                  </div>
                </StaggerChildren>

                <div className="text-center mt-8">
                  <Button asChild variant="outline">
                    <Link href="/resources/webinars">View All Webinars</Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </FadeIn>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <Card className="border-none shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Subscribe to Our Security Newsletter</CardTitle>
                  <CardDescription>
                    Stay updated with the latest security trends, tips, and resources delivered directly to your inbox.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="newsletter-name" className="text-sm font-medium">
                          Full Name
                        </label>
                        <input
                          id="newsletter-name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="newsletter-email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <input
                          id="newsletter-email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="newsletter-consent"
                        className="h-4 w-4 mt-1 rounded border-gray-300 text-primary focus:ring-primary"
                        required
                      />
                      <label htmlFor="newsletter-consent" className="ml-2 text-sm text-gray-600">
                        I agree to receive security updates and newsletter emails from BurKo Sec. You can unsubscribe at
                        any time.
                      </label>
                    </div>
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Subscribe
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Security Tips Section */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6">
          <FadeIn>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tight mb-4">Quick Security Tips</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Practical security advice you can implement today to enhance your protection.
              </p>
            </div>
          </FadeIn>

          <StaggerChildren>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StaggerItem>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-2 flex items-center gap-2">
                    <div className="bg-primary/10 p-1 rounded-full">
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
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    Update Your Passwords Regularly
                  </h3>
                  <p className="text-sm text-gray-600">
                    Change your passwords every 90 days and use a combination of letters, numbers, and special
                    characters.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-2 flex items-center gap-2">
                    <div className="bg-primary/10 p-1 rounded-full">
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
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    Conduct Regular Security Audits
                  </h3>
                  <p className="text-sm text-gray-600">
                    Schedule regular security assessments to identify and address potential vulnerabilities in your
                    systems.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-2 flex items-center gap-2">
                    <div className="bg-primary/10 p-1 rounded-full">
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
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    Train Your Employees
                  </h3>
                  <p className="text-sm text-gray-600">
                    Ensure all staff members are trained on security protocols and know how to respond to potential
                    threats.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-2 flex items-center gap-2">
                    <div className="bg-primary/10 p-1 rounded-full">
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
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    Secure Your Physical Premises
                  </h3>
                  <p className="text-sm text-gray-600">
                    Install proper lighting, maintain landscaping, and ensure all entry points are secure with quality
                    locks.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-2 flex items-center gap-2">
                    <div className="bg-primary/10 p-1 rounded-full">
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
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    Back Up Your Data
                  </h3>
                  <p className="text-sm text-gray-600">
                    Regularly back up important data and store copies in secure, off-site locations to protect against
                    data loss.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-bold mb-2 flex items-center gap-2">
                    <div className="bg-primary/10 p-1 rounded-full">
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
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    Develop an Emergency Response Plan
                  </h3>
                  <p className="text-sm text-gray-600">
                    Create and practice emergency procedures to ensure everyone knows what to do in case of a security
                    incident.
                  </p>
                </div>
              </StaggerItem>
            </div>
          </StaggerChildren>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Need Personalized Security Advice?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Our security experts are ready to help you address your specific security challenges and requirements.
            </p>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
