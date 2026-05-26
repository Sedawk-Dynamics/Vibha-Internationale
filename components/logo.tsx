"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  width?: number
  height?: number
  imageClassName?: string
  className?: string
  href?: string | null
  priority?: boolean
  /**
   * "light" — for white/neutral surfaces (nav, footer). Emphasizes brand-color bloom.
   * "dark"  — for dark/photographic surfaces (hero). Emphasizes a bright white halo
   *           so the dark wordmark inside the PNG remains fully legible.
   */
  variant?: "light" | "dark"
}

export function Logo({
  width = 280,
  height = 70,
  imageClassName = "h-20 w-auto",
  className,
  href = "/",
  priority = false,
  variant = "light",
}: LogoProps) {
  const isDark = variant === "dark"

  const inner = (
    <span className={cn("group relative inline-flex items-center", className)}>
      {/* Outer brand-colored bloom — wide, diffused, soft */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute transition-opacity duration-500 ease-out",
          isDark
            ? "-inset-12 opacity-80 blur-3xl group-hover:opacity-100"
            : "-inset-8 opacity-70 blur-2xl group-hover:opacity-100",
        )}
        style={{
          background: isDark
            ? "radial-gradient(ellipse 45% 80% at 18% 50%, rgba(167,139,250,0.55), transparent 70%)," +
              "radial-gradient(ellipse 32% 65% at 22% 30%, rgba(253,224,71,0.45), transparent 70%)," +
              "radial-gradient(ellipse 30% 65% at 24% 70%, rgba(251,146,60,0.40), transparent 70%)," +
              "radial-gradient(ellipse 35% 70% at 28% 65%, rgba(74,222,128,0.40), transparent 70%)," +
              "radial-gradient(ellipse 60% 85% at 60% 50%, rgba(45,212,191,0.40), transparent 75%)"
            : "radial-gradient(ellipse 38% 75% at 15% 50%, rgba(139,92,246,0.35), transparent 70%)," +
              "radial-gradient(ellipse 28% 60% at 22% 70%, rgba(234,88,12,0.22), transparent 70%)," +
              "radial-gradient(ellipse 32% 60% at 18% 30%, rgba(250,204,21,0.28), transparent 70%)," +
              "radial-gradient(ellipse 32% 65% at 25% 65%, rgba(34,197,94,0.22), transparent 70%)," +
              "radial-gradient(ellipse 55% 80% at 60% 50%, rgba(13,148,136,0.22), transparent 75%)",
        }}
      />

      {/* Inner bright halo — lifts the logo silhouette and makes the dark wordmark legible */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute blur-xl",
          isDark ? "-inset-6 opacity-100" : "-inset-3 opacity-90",
        )}
        style={{
          background: isDark
            ? "radial-gradient(ellipse 75% 90% at 50% 50%, rgba(255,255,255,0.85), rgba(255,255,255,0.45) 50%, transparent 78%)"
            : "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(255,255,255,0.95), rgba(255,255,255,0.55) 45%, transparent 75%)",
        }}
      />

      {/* Logo itself — drop-shadow gives premium depth */}
      <Image
        src="/vibha-logo.png"
        alt="Vibha Internationale"
        width={width}
        height={height}
        priority={priority}
        className={cn(
          "relative select-none transition-transform duration-500 ease-out group-hover:scale-[1.015]",
          isDark
            ? "drop-shadow-[0_8px_28px_rgba(255,255,255,0.35)]"
            : "drop-shadow-[0_6px_18px_rgba(15,76,117,0.22)]",
          imageClassName,
        )}
      />
    </span>
  )

  if (!href) return inner

  return (
    <Link href={href} className="inline-flex items-center" aria-label="Vibha Internationale — Home">
      {inner}
    </Link>
  )
}
