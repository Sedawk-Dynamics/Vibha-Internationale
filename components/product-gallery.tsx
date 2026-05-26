"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProductGalleryProps {
  images: string[]
  alt: string
  /** Optional caption text shown as overlay on the active slide */
  captionTitle?: string
  captionSubtitle?: string
  /** Auto-rotate interval in ms. Default 5000. Pass 0 to disable. */
  autoRotateMs?: number
}

export function ProductGallery({
  images,
  alt,
  captionTitle,
  captionSubtitle,
  autoRotateMs = 5000,
}: ProductGalleryProps) {
  const slides = images.length ? images : ["/placeholder.svg"]
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }

  // Auto-rotate
  useEffect(() => {
    stopTimer()
    if (slides.length <= 1 || autoRotateMs <= 0 || paused || hovered) return
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % slides.length)
    }, autoRotateMs)
    return stopTimer
  }, [slides.length, autoRotateMs, paused, hovered])

  const goPrev = () =>
    setActive((i) => (i === 0 ? slides.length - 1 : i - 1))
  const goNext = () => setActive((i) => (i + 1) % slides.length)

  return (
    <div>
      {/* Main viewport */}
      <div
        className="relative aspect-square rounded-lg overflow-hidden bg-muted border border-border group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Slides stacked, only active one visible */}
        {slides.map((src, i) => (
          <div
            key={src + i}
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
              i === active ? "opacity-100 z-10" : "opacity-0 z-0",
            )}
            aria-hidden={i !== active}
          >
            {/* Re-keyed wrapper restarts the zoom animation each time this slide
                becomes active (key changes via active index) */}
            <div
              key={i === active ? `active-${active}` : `inactive-${i}`}
              className={cn(
                "absolute inset-0",
                i === active && "animate-slide-zoom",
              )}
            >
              <Image
                src={src}
                alt={`${alt} — image ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-125"
                sizes="(min-width: 1024px) 40vw, 90vw"
                priority={i === 0}
              />
            </div>
          </div>
        ))}

        {/* Caption overlay */}
        {(captionTitle || captionSubtitle) && (
          <div className="absolute inset-x-0 bottom-0 z-20 bg-linear-to-t from-black/75 via-black/40 to-transparent px-5 pt-12 pb-4 text-white pointer-events-none">
            {captionSubtitle && (
              <p className="text-[11px] uppercase tracking-[0.15em] font-semibold text-white/85 mb-1">
                {captionSubtitle}
              </p>
            )}
            {captionTitle && (
              <h3 className="text-lg md:text-xl font-bold leading-tight drop-shadow">
                {captionTitle}
              </h3>
            )}
          </div>
        )}

        {/* Counter pill */}
        {slides.length > 1 && (
          <div className="absolute top-3 right-3 z-30 bg-black/55 text-white text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur">
            {active + 1} / {slides.length}
          </div>
        )}

        {/* Prev / Next */}
        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-30 h-9 w-9 rounded-full bg-white/85 hover:bg-white text-gray-900 shadow-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-30 h-9 w-9 rounded-full bg-white/85 hover:bg-white text-gray-900 shadow-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Pause / Play toggle */}
        {slides.length > 1 && autoRotateMs > 0 && (
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            className="absolute bottom-3 right-3 z-30 h-8 w-8 rounded-full bg-white/85 hover:bg-white text-gray-900 shadow-md opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
          >
            {paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </button>
        )}

        {/* Dot indicators */}
        {slides.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Go to image ${i + 1}`}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === active
                    ? "w-6 bg-white shadow"
                    : "w-1.5 bg-white/55 hover:bg-white/80",
                )}
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {slides.length > 1 && (
        <div className="mt-3 flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
          {slides.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={cn(
                "group/thumb relative w-20 h-20 rounded-md overflow-hidden border-2 transition-all bg-muted shrink-0",
                i === active
                  ? "border-vibha-teal ring-2 ring-vibha-teal/30"
                  : "border-border hover:border-vibha-teal/60",
              )}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover/thumb:scale-110"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
