import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Instagram, Phone, Shield } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import AnimatedGradientBorder from "@/components/animations/animated-gradient-border"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-accent/30 text-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <FadeIn delay={0.1}>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-gradient">VANGUARD</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Your trusted partner in comprehensive security solutions, providing peace of mind through professional
                services and innovative technology.
              </p>
              <div className="flex space-x-4">
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <div className="space-y-3 text-sm">
                <p className="text-muted-foreground">123 Security Avenue</p>
                <p className="text-muted-foreground">Safetown, ST 12345</p>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <p className="font-bold">24/7 Hotline: 1-800-VANGUARD</p>
                </div>
                <p className="text-muted-foreground">info@vanguardsecurity.com</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div>
              <h3 className="text-lg font-bold mb-4">Subscribe for Security Tips</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Stay updated with the latest security trends and tips to keep your property safe.
              </p>
              <AnimatedGradientBorder borderRadius={8} className="mb-2">
                <form className="space-y-2 p-4">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="bg-background/80 border-muted"
                    required
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Subscribe
                  </Button>
                </form>
              </AnimatedGradientBorder>
            </div>
          </FadeIn>
        </div>

        <div className="mt-12 pt-8 border-t border-muted/30 text-center text-sm text-muted-foreground">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; {new Date().getFullYear()} VANGUARD Security. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
