"use client"

import { useState, useEffect } from "react"
import { Play, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { PageBanner } from "@/components/page-banner"
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/reveal"

const videos = [
  {
    title: "SU-TC150 Brazing Alloy: Aluminum to Mild & Stainless Steel Application Guide",
    description:
      "Step-by-step guide to brazing aluminum with mild steel and stainless steel using SU-TC150. Learn proper techniques, temperature control, and best practices.",
    youtubeId: "P-FeiS4XvYQ",
    duration: "5:32",
  },
  {
    title: "SKA-TA 2040 Aluminum Brazing Alloy: Aluminum-to-Aluminum Joining Process",
    description:
      "Complete tutorial on aluminum-to-aluminum brazing using SKA-TA 2040 alloy. Ideal for industrial and repair applications with strong joint results.",
    youtubeId: "R0jLTjcGMZw",
    duration: "7:15",
  },
  {
    title: "SU-TA200 Aluminum Brazing Rod: Clean & Durable Joint Formation Guide",
    description:
      "Learn how to achieve clean and durable aluminum joints using SU-TA200. Covers preparation, flux usage, and heating techniques.",
    youtubeId: "a5dqENaMgjs",
    duration: "6:48",
  },
  {
    title: "Flux Paste 0726 for Aluminum Brazing: Application & Performance Guide",
    description:
      "Understand the role of flux paste 0726 in aluminum brazing. This video explains application methods, benefits, and common mistakes to avoid.",
    youtubeId: "lxxOwqxCK08",
    duration: "4:20",
  },
]

export default function VideosPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  // Lock body scroll while modal open, close on Escape
  useEffect(() => {
    if (!activeVideo) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null)
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener("keydown", onKey)
    }
  }, [activeVideo])

  return (
    <div className="bg-background text-foreground">
      <PageBanner
        title="Educational Videos"
        subtitle="Product demonstrations, tutorials, and brazing techniques"
        image="/industrial-brazing-equipment-metallic-surfaces.jpg"
        crumbs={[{ label: "Videos" }]}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center mb-12 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Watch &amp; Learn
              </h2>
              <p className="text-muted-foreground">
                Explore our collection of educational videos covering brazing techniques,
                product applications, and industry best practices.
              </p>
            </div>
          </Reveal>

          <RevealStagger
            staggerChildren={0.12}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {videos.map((video, index) => (
              <RevealItem key={index}>
                <Card className="border-2 border-border bg-card hover:border-vibha-teal hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden h-full">
                  <CardContent className="p-0 h-full flex flex-col">
                    <button
                      type="button"
                      onClick={() => setActiveVideo(video.youtubeId)}
                      className="relative aspect-video cursor-pointer block w-full text-left focus:outline-none focus:ring-2 focus:ring-vibha-teal"
                      aria-label={`Play video: ${video.title}`}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 flex items-center justify-center transition-colors">
                        <div className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                          <Play className="h-7 w-7 text-vibha-teal ml-1" />
                        </div>
                      </div>

                      <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </button>

                    <div className="p-4 flex-1">
                      <h3 className="font-bold text-foreground mb-2 group-hover:text-vibha-teal transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {video.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal>
            <div className="mt-12 text-center">
              <div className="inline-flex flex-col items-center bg-muted/50 rounded-xl p-8 max-w-md border border-border">
                <Play className="h-12 w-12 text-vibha-teal mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-2">
                  More Videos Coming Soon
                </h3>
                <p className="text-muted-foreground mb-6">
                  We&apos;re continuously creating new content. Subscribe to stay updated!
                </p>
                <Button className="bg-vibha-teal hover:bg-vibha-teal/90 text-white hover:scale-105 transition-transform">
                  Subscribe for Updates
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200 px-4"
          onClick={() => setActiveVideo(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white text-black rounded-full w-9 h-9 flex items-center justify-center transition-colors"
              aria-label="Close video"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="Video Player"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
