import Link from "next/link"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo width={220} height={66} imageClassName="h-16 w-auto" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Vibha Internationale has been established with the primary aim of delivering
              optimum products to our clients. Our goal is to be recognized as a premier
              supplier of top-class brazing materials in India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Products", href: "/products" },
                { label: "Videos", href: "/videos" },
                { label: "FAQ's", href: "/faqs" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-vibha-teal transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Our Products</h3>
            <ul className="space-y-2">
              {[
                { label: "Aluminum Brazing Alloys", href: "/products/brazing-filler-metals/aluminium-to-aluminium" },
                { label: "Copper / Silver / Brass Alloys", href: "/products/brazing-filler-metals/copper-silver-brass" },
                { label: "Brazing Fluxes & Paste", href: "/products/brazing-fluxes-paste" },
                { label: "Cleaning Chemicals", href: "/products/cleaning-chemicals" },
              ].map((product) => (
                <li key={product.label}>
                  <Link
                    href={product.href}
                    className="text-sm text-muted-foreground hover:text-vibha-teal transition-colors"
                  >
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-foreground">Contact Details</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-vibha-teal shrink-0" />
                <span>67/5, D-3 Block, MIDC, Chinchwad, Pune 411 026</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-vibha-teal shrink-0" />
                <a
                  href="tel:+918007770827"
                  className="hover:text-vibha-teal transition-colors"
                >
                  +91 800 777 0827
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-vibha-teal shrink-0" />
                <a
                  href="mailto:sales@vibhainternational.co.in"
                  className="hover:text-vibha-teal transition-colors"
                >
                  sales@vibhainternational.co.in
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 text-vibha-teal shrink-0" />
                <span>Mon – Sat: 9:00 AM to 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-10 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vibha Internationale. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
