"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Phone, Mail, ShoppingCart } from "lucide-react"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const productCategories = [
  {
    title: "Aluminum Brazing Alloys",
    href: "/products/brazing-filler-metals/aluminium-to-aluminium",
    image: "/SKA-TA2040s-1.webp",
    description: "Aluminium-to-aluminium brazing rods, wires and rings",
  },
  {
    title: "Copper / Silver / Brass Alloys",
    href: "/products/brazing-filler-metals/copper-silver-brass",
    image: "/Solbraze-BCup-2.webp",
    description: "BCuP, silicon bronze and silver-bearing brazing alloys",
  },
  {
    title: "Brazing Fluxes & Paste",
    href: "/products/brazing-fluxes-paste",
    image: "/Flux-0726.jpg",
    description: "Furnace, torch and paste-form fluxes plus ready-to-use brazing pastes",
  },
  {
    title: "Industrial Cleaning Chemicals",
    href: "/products/cleaning-chemicals",
    image: "/SU-TA-200.webp",
    description: "Degreasers, metal cleaners and protective coatings",
  },
]

const navLinks = [
  { href: "/home", label: "HOME" },
  { href: "/about", label: "ABOUT US" },
  { href: "/videos", label: "VIDEOS" },
  { href: "/contact", label: "CONTACT US" },
]

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false)
    setIsProductsOpen(false)
    setMobileProductsOpen(false)
  }, [pathname])

  // Clear pending close timer when component unmounts
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    }
  }, [])

  // Close mega-menu on Escape + click outside
  useEffect(() => {
    if (!isProductsOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsProductsOpen(false)
    }
    const onPointer = (e: MouseEvent) => {
      const target = e.target as Element | null
      if (target && !target.closest("[data-products-menu]")) {
        setIsProductsOpen(false)
      }
    }
    window.addEventListener("keydown", onKey)
    document.addEventListener("mousedown", onPointer)
    return () => {
      window.removeEventListener("keydown", onKey)
      document.removeEventListener("mousedown", onPointer)
    }
  }, [isProductsOpen])

  const closeAllMenus = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    setMobileMenuOpen(false)
    setIsProductsOpen(false)
    setMobileProductsOpen(false)
  }

  const openProducts = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }
    setIsProductsOpen(true)
  }

  // Delay closing so the cursor can cross the gap between button and panel
  const scheduleCloseProducts = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
    closeTimeoutRef.current = setTimeout(() => setIsProductsOpen(false), 180)
  }

  const isProductActive = pathname?.startsWith("/products")

  return (
    <div
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled ? "shadow-lg" : "",
      )}
    >
      {/* Contact Bar */}
      <div className="bg-vibha-teal text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-end gap-4 sm:gap-6 text-sm">
            <a
              href="tel:+919876543210"
              className="hidden sm:flex items-center gap-2 hover:text-blue-200 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">+91 98765 43210</span>
            </a>

            <span className="hidden sm:inline text-blue-300">|</span>

            <a
              href="mailto:info@vibhainternational.co.in"
              className="hidden sm:flex items-center gap-2 hover:text-blue-200 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden md:inline">info@vibhainternational.co.in</span>
            </a>

            <span className="hidden sm:inline text-blue-300">|</span>

            <a
              href="https://staging.vibha.sedawk.cloud/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-200 transition-colors"
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="hidden sm:inline">Shop</span>
            </a>

            <span className="text-blue-300">|</span>

            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-background/95 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Logo width={280} height={70} imageClassName="h-16 md:h-20 w-auto" priority />

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.slice(0, 2).map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-5 py-2.5 text-sm font-bold tracking-wide transition-colors",
                      active
                        ? "text-vibha-teal"
                        : "text-foreground/80 hover:text-vibha-teal",
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute left-1/2 -bottom-0.5 h-0.5 -translate-x-1/2 rounded-full bg-vibha-teal transition-all duration-300",
                        active ? "w-6" : "w-0",
                      )}
                    />
                  </Link>
                )
              })}

              {/* PRODUCTS dropdown trigger */}
              <div
                data-products-menu
                className="relative"
                onMouseEnter={openProducts}
                onMouseLeave={scheduleCloseProducts}
              >
                <button
                  type="button"
                  onClick={() => (isProductsOpen ? setIsProductsOpen(false) : openProducts())}
                  aria-haspopup="true"
                  aria-expanded={isProductsOpen}
                  className={cn(
                    "flex items-center gap-1 px-5 py-2.5 text-sm font-bold tracking-wide rounded-md transition-all duration-300",
                    "bg-linear-to-r from-yellow-400 to-yellow-500 text-gray-900",
                    "hover:shadow-lg hover:shadow-yellow-400/30 hover:scale-[1.02]",
                    isProductActive && "ring-2 ring-vibha-teal/40",
                  )}
                >
                  PRODUCTS
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      isProductsOpen && "rotate-180",
                    )}
                  />
                </button>
              </div>

              {navLinks.slice(2).map((link) => {
                const active = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-5 py-2.5 text-sm font-bold tracking-wide transition-colors",
                      active
                        ? "text-vibha-teal"
                        : "text-foreground/80 hover:text-vibha-teal",
                    )}
                  >
                    {link.label}
                    <span
                      className={cn(
                        "absolute left-1/2 -bottom-0.5 h-0.5 -translate-x-1/2 rounded-full bg-vibha-teal transition-all duration-300",
                        active ? "w-6" : "w-0",
                      )}
                    />
                  </Link>
                )
              })}

              <a
                href="https://staging.vibha.sedawk.cloud/blog/"
                className="px-5 py-2.5 text-sm font-bold text-foreground/80 hover:text-vibha-teal tracking-wide transition-colors"
              >
                BLOG
              </a>

              <Link
                href="/faqs"
                className={cn(
                  "relative px-5 py-2.5 text-sm font-bold tracking-wide transition-colors",
                  pathname === "/faqs"
                    ? "text-vibha-teal"
                    : "text-foreground/80 hover:text-vibha-teal",
                )}
              >
                FAQ&apos;S
                <span
                  className={cn(
                    "absolute left-1/2 -bottom-0.5 h-0.5 -translate-x-1/2 rounded-full bg-vibha-teal transition-all duration-300",
                    pathname === "/faqs" ? "w-6" : "w-0",
                  )}
                />
              </Link>
            </nav>

            <button
              type="button"
              className="lg:hidden text-foreground p-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background animate-in slide-in-from-top-2 duration-300">
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeAllMenus}
                  className="block px-4 py-3 text-sm font-bold text-foreground hover:bg-muted hover:text-vibha-teal rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <button
                type="button"
                onClick={() => setMobileProductsOpen((v) => !v)}
                className="flex items-center justify-between w-full px-4 py-3 text-sm font-bold text-gray-900 bg-linear-to-r from-yellow-400 to-yellow-500 rounded-md"
              >
                PRODUCTS
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-300",
                    mobileProductsOpen && "rotate-180",
                  )}
                />
              </button>

              {mobileProductsOpen && (
                <div className="pl-4 space-y-1 animate-in slide-in-from-top-1 duration-200">
                  <Link
                    href="/products"
                    onClick={closeAllMenus}
                    className="block px-4 py-2.5 text-sm font-semibold text-vibha-teal hover:bg-muted rounded-md transition-colors"
                  >
                    All Products
                  </Link>
                  {productCategories.map((p) => (
                    <Link
                      key={p.href}
                      href={p.href}
                      onClick={closeAllMenus}
                      className="block px-4 py-2.5 text-sm font-medium text-foreground/80 hover:bg-muted hover:text-vibha-teal rounded-md transition-colors"
                    >
                      {p.title}
                    </Link>
                  ))}
                </div>
              )}

              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeAllMenus}
                  className="block px-4 py-3 text-sm font-bold text-foreground hover:bg-muted hover:text-vibha-teal rounded-md transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <a
                href="https://staging.vibha.sedawk.cloud/blog/"
                className="block px-4 py-3 text-sm font-bold text-foreground hover:bg-muted hover:text-vibha-teal rounded-md transition-colors"
              >
                BLOG
              </a>

              <Link
                href="/faqs"
                onClick={closeAllMenus}
                className="block px-4 py-3 text-sm font-bold text-foreground hover:bg-muted hover:text-vibha-teal rounded-md transition-colors"
              >
                FAQ&apos;S
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* PRODUCTS dropdown panel — sibling of <header> so it sits flush at the bottom of the navbar (no gap, no double border) */}
      {isProductsOpen && (
        <div
          data-products-menu
          onMouseEnter={openProducts}
          onMouseLeave={scheduleCloseProducts}
          className="absolute top-full left-0 right-0 bg-background shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300 z-40"
        >
          <div className="container mx-auto px-8 py-10 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14">
              {/* sidebar */}
              <div className="lg:col-span-3 lg:border-r border-border lg:pr-10">
                <h3 className="text-2xl font-bold text-foreground mb-3">Brazing Excellence</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Vibha Internationale offers a comprehensive range of high-quality brazing materials and solutions.
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/products"
                    onClick={closeAllMenus}
                    className="px-5 py-2.5 bg-vibha-teal text-white font-semibold rounded-lg hover:bg-vibha-teal/90 transition-colors text-center text-sm shadow-md hover:shadow-lg"
                  >
                    All Products
                  </Link>
                  <a
                    href="https://staging.vibha.sedawk.cloud/shop/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-600 transition-colors text-center text-sm shadow-md hover:shadow-lg"
                  >
                    Shop
                  </a>
                </div>
              </div>

              {/* products grid */}
              <div className="lg:col-span-9">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {productCategories.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      onClick={closeAllMenus}
                      className="group"
                    >
                      <div className="flex flex-col bg-muted/40 rounded-lg overflow-hidden border border-border hover:border-vibha-teal hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 h-full">
                        <div className="relative h-36 overflow-hidden bg-muted">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-4 flex flex-col grow">
                          <h5 className="text-sm font-bold text-foreground mb-1.5 group-hover:text-vibha-teal transition-colors">
                            {product.title}
                          </h5>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {product.description}
                          </p>
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
  )
}
