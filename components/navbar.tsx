"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, ArrowRight, Phone, Mail, ShoppingCart } from "lucide-react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeAllMenus = () => {
    setMobileMenuOpen(false)
    setIsProductsOpen(false)
  }

  const productCategories = [
    {
      title: "Aluminum Brazing Alloys",
      href: "/products/aluminum-brazing",
      image: "/SKA-TA2040s-1.webp",
      description: "High-quality aluminum brazing alloys for various applications",
    },
    {
      title: "Copper Brazing Alloys",
      href: "/products/copper-brazing",
      image: "/Solbraze-BCup-2.webp",
      description: "Premium copper-based brazing materials",
    },
    {
      title: "Brazing Flux",
      href: "/products/brazing-flux",
      image: "/Flux-0726.jpg",
      description: "Specialized flux for optimal brazing results",
    },
    {
      title: "Cleaning Chemicals",
      href: "/products/cleaning-chemicals",
      image: "/SU-TA-200.webp",
      description: "Metal cleaning and anti-corrosive solutions",
    },
  ]

  return (
    <div className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-lg" : ""}`}>

      {/* Contact Bar */}
      <div className="bg-vibha-teal text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-end gap-6 text-sm">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <Phone className="h-4 w-4" />
              +91 98765 43210
            </a>

            <span className="text-blue-300">|</span>

            <a href="mailto:info@vibhainternational.co.in" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <Mail className="h-4 w-4" />
              info@vibhainternational.co.in
            </a>

            <span className="text-blue-300">|</span>

            <a href="https://staging.vibha.sedawk.cloud/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
              <ShoppingCart className="h-4 w-4" />
              Shop
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image src="/vibha-logo.png" alt="Vibha Internationale" width={280} height={70} className="h-20 w-auto" />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">

              <Link href="/home" className="px-5 py-2.5 text-sm font-bold text-gray-700 hover:text-vibha-teal tracking-wide transition-colors">
                HOME
              </Link>

              <Link href="/about" className="px-5 py-2.5 text-sm font-bold text-gray-700 hover:text-vibha-teal tracking-wide transition-colors">
                ABOUT US
              </Link>

              {/* PRODUCTS */}
              <div 
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button
                  className="flex items-center gap-1 px-5 py-2.5 text-sm font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 hover:shadow-md transition-shadow"
                >
                  PRODUCTS <ChevronDown className="h-4 w-4" />
                </button>

                {isProductsOpen && (
                  <div
                    className="fixed left-0 right-0 top-[150px] bg-white border-t-2 border-gray-300 shadow-sm animate-in fade-in slide-in-from-top-1 duration-200 z-40"
                  >
                    {/* Invisible Hover Bridge */}
                    <div className="h-9 -mt-9 bg-transparent" />
                    
                    <div className="container mx-auto px-6 py-8 max-w-7xl">

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                          {/* LEFT SIDEBAR */}
                          <div className="lg:col-span-3 lg:border-r border-gray-200 lg:pr-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Brazing Excellence</h3>
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                              Vibha Internationale offers a comprehensive range of high-quality brazing materials and solutions.
                            </p>
                            <div className="flex flex-col gap-3">
                              <Link href="/products" onClick={closeAllMenus} className="px-5 py-2.5 bg-vibha-teal text-white font-semibold rounded-lg hover:bg-vibha-teal/90 transition-colors text-center text-sm">
                                All Products
                              </Link>
                              <a href="https://staging.vibha.sedawk.cloud/shop/" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-600 transition-colors text-center text-sm">
                                Shop
                              </a>
                            </div>
                          </div>

                          {/* PRODUCTS GRID */}
                          <div className="lg:col-span-9">
                            <div className="grid grid-cols-2 gap-4">

                              {productCategories.map((product) => (
                                <Link key={product.href} href={product.href} onClick={closeAllMenus} className="group">
                                  <div
                                    className="flex flex-col bg-gray-50 rounded-lg overflow-hidden border border-gray-100 hover:border-vibha-teal hover:shadow-sm transition-all duration-200"
                                  >

                                    {/* IMAGE */}
                                    <div className="relative h-40 overflow-hidden bg-gray-100">
                                      <Image src={product.image} alt={product.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                                    </div>

                                    {/* TEXT */}
                                    <div className="p-4">
                                      <h5 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-vibha-teal transition-colors">{product.title}</h5>
                                      <p className="text-xs text-gray-600">{product.description}</p>
                                    </div>
                                  </div>
                                </Link>
                              ))}

                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  )}
                </div>

              <Link href="/videos" className="px-5 py-2.5 text-sm font-bold text-gray-700 hover:text-vibha-teal tracking-wide transition-colors">
                VIDEOS
              </Link>

              <Link href="/contact" className="px-5 py-2.5 text-sm font-bold text-gray-700 hover:text-vibha-teal tracking-wide transition-colors">
                CONTACT US
              </Link>

              <a href="https://staging.vibha.sedawk.cloud/blog/" className="px-5 py-2.5 text-sm font-bold text-gray-700 hover:text-vibha-teal tracking-wide transition-colors">
                BLOG
              </a>

              <Link href="/faqs" className="px-5 py-2.5 text-sm font-bold text-gray-700 hover:text-vibha-teal tracking-wide transition-colors">
                FAQ'S
              </Link>

            </nav>

            <button className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>

          </div>
        </div>
      </header>
    </div>
  )
}
