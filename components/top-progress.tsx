"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

/**
 * Slim top progress bar that flashes on route change.
 * Provides instant visual feedback when navigating between pages.
 */
export function TopProgress() {
  const pathname = usePathname()
  const [key, setKey] = useState(0)

  useEffect(() => {
    setKey((k) => k + 1)
  }, [pathname])

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] pointer-events-none"
    >
      <div
        key={key}
        className="h-full origin-left animate-top-progress bg-linear-to-r from-vibha-teal via-vibha-purple to-vibha-orange shadow-[0_0_12px_rgba(139,92,246,0.6)]"
      />
    </div>
  )
}
