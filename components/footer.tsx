import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/vibha-logo.png"
              alt="Vibha Internationale"
              width={220}
              height={66}
              className="h-16 w-auto"
            />
            <p className="text-sm leading-relaxed text-gray-600">
              Vibha Internationale has been established with the primary aim of delivering
              optimum products to our clients. Our goal is to be recognized as a premier
              supplier of top-class brazing materials in India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Products", href: "/products/aluminum-brazing" },
                { label: "Export Capabilities", href: "/export" },
                { label: "Certifications", href: "/certifications" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Products</h3>
            <ul className="space-y-2">
              {[
                { label: "Aluminum Brazing", href: "/products/aluminum-brazing" },
                { label: "Copper Brazing", href: "/products/copper-brazing" },
                { label: "Brazing Flux", href: "/products/brazing-flux" },
                { label: "Cleaning Chemicals", href: "/products/cleaning-chemicals" },
              ].map((product) => (
                <li key={product.label}>
                  <Link
                    href={product.href}
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    {product.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Details</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                <span>67/5, D-3 Block, MIDC, Chinchwad, Pune 411 026</span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <a
                  href="tel:+918007770827"
                  className="hover:text-primary transition-colors"
                >
                  +91 800 777 0827
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a
                  href="mailto:sales@vibhainternational.co.in"
                  className="hover:text-primary transition-colors"
                >
                  sales@vibhainternational.co.in
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-0.5 text-primary" />
                <span>Mon – Sat: 9:00 AM to 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Vibha Internationale. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
