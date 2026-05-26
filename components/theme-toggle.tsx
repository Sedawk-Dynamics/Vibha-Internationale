"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const current = mounted ? resolvedTheme ?? theme : undefined
  const isDark = current === "dark"

  const toggle = () => setTheme(isDark ? "light" : "dark")

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className={cn(
        "relative inline-flex h-8 items-center gap-1.5 px-3 rounded-full",
        "bg-white/10 hover:bg-white/20 border border-white/25 hover:border-white/40",
        "text-white text-xs font-semibold",
        "transition-all duration-300 hover:scale-[1.03]",
        "focus:outline-none focus:ring-2 focus:ring-white/50",
        className,
      )}
    >
      <span className="relative inline-flex h-4 w-4 items-center justify-center">
        <Sun
          className={cn(
            "absolute h-4 w-4 transition-all duration-500 ease-out",
            mounted && isDark
              ? "opacity-0 rotate-90 scale-50"
              : "opacity-100 rotate-0 scale-100",
          )}
          aria-hidden="true"
        />
        <Moon
          className={cn(
            "absolute h-4 w-4 transition-all duration-500 ease-out",
            mounted && isDark
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-50",
          )}
          aria-hidden="true"
        />
      </span>
      <span className="hidden sm:inline">
        {mounted ? (isDark ? "Dark" : "Light") : "Theme"}
      </span>
    </button>
  )
}
