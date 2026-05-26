"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface Crumb {
  label: string
  href?: string
}

interface PageBannerProps {
  title: string
  subtitle?: string
  image?: string
  crumbs?: Crumb[]
  /**
   * Visual tone:
   *  - "image"   — photo background + brand gradient overlay (default when image is provided)
   *  - "gradient" — gradient only (no photo)
   */
  tone?: "image" | "gradient"
  className?: string
  children?: React.ReactNode
}

const easeOutSoft = [0.22, 1, 0.36, 1] as const

export function PageBanner({
  title,
  subtitle,
  image,
  crumbs,
  tone,
  className,
  children,
}: PageBannerProps) {
  const reduce = useReducedMotion()
  const effectiveTone = tone ?? (image ? "image" : "gradient")

  return (
    <>
      <section
        className={cn(
          "relative flex items-center justify-center text-white text-center overflow-hidden",
          "min-h-[440px] md:min-h-[480px]",
          className,
        )}
      >
        {/* Photo background — animated subtle drift */}
        {effectiveTone === "image" && image && (
          <div className="absolute inset-0 z-0 animate-kenburns">
            <Image
              src={image}
              alt=""
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        )}

        {/* Solid base for legibility (only when there's a photo) */}
        {effectiveTone === "image" && (
          <div className="absolute inset-0 z-[1] bg-black/55" />
        )}

        {/* Brand gradient — always present, intensity scales with tone */}
        <div
          className={cn(
            "absolute inset-0 z-[2] bg-linear-to-br",
            effectiveTone === "image"
              ? "from-vibha-purple/55 via-vibha-teal/45 to-vibha-orange/35"
              : "from-vibha-purple via-vibha-teal to-vibha-purple",
          )}
        />

        {/* Floating colored orbs — purely decorative, premium depth */}
        <div className="absolute inset-0 z-[3] overflow-hidden pointer-events-none">
          <div className="absolute -top-16 -left-10 w-72 h-72 rounded-full bg-vibha-teal/25 blur-3xl animate-pulse" />
          <div className="absolute -bottom-16 -right-10 w-96 h-96 rounded-full bg-vibha-orange/20 blur-3xl animate-pulse [animation-delay:1s]" />
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-64 h-64 rounded-full bg-vibha-purple/20 blur-3xl animate-pulse [animation-delay:2s]" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 py-16">
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOutSoft }}
            className="max-w-3xl mx-auto space-y-5"
          >
            <motion.h1
              initial={{ opacity: 0, y: reduce ? 0 : 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: easeOutSoft }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-balance drop-shadow-[0_2px_18px_rgba(0,0,0,0.35)]"
            >
              {title}
            </motion.h1>

            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: reduce ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: easeOutSoft }}
                className="text-lg md:text-xl text-white/90 leading-relaxed text-pretty max-w-2xl mx-auto"
              >
                {subtitle}
              </motion.p>
            )}

            {children && (
              <motion.div
                initial={{ opacity: 0, y: reduce ? 0 : 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: easeOutSoft }}
                className="pt-2"
              >
                {children}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb strip (consistent across all pages) */}
      {crumbs && crumbs.length > 0 && (
        <div className="bg-muted/40 border-b border-border">
          <div className="container mx-auto px-4 py-3.5">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-1.5 text-sm"
            >
              <Link
                href="/"
                className="text-vibha-teal hover:underline font-medium"
              >
                Home
              </Link>
              {crumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="text-vibha-teal hover:underline font-medium"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-muted-foreground">{crumb.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
