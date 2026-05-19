'use client'

import { useState } from "react"
import Link from "next/link"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function VideosPage() {
  const [activeVideo, setActiveVideo] = useState(null)

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

  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section
        className="relative bg-gradient-to-r from-vibha-teal to-blue-600 min-h-[450px] flex items-center justify-center text-white text-center overflow-hidden"
        style={{
          backgroundImage: "url(/industrial-brazing-equipment-metallic-surfaces.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-vibha-teal/90 to-blue-600/90"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Educational Videos</h1>
          <p className="text-xl text-blue-50">
            Product demonstrations, tutorials, and brazing techniques
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-vibha-teal hover:underline">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Videos</span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <section className="py-16">
        <div className="container mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Watch & Learn
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our collection of educational videos covering brazing techniques,
              product applications, and industry best practices.
            </p>
          </div>

          {/* VIDEO GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <Card
                key={index}
                className="border-2 hover:border-vibha-teal transition-all duration-300 hover:shadow-lg group overflow-hidden"
              >
                <CardContent className="p-0">

                  {/* CLICKABLE THUMBNAIL */}
                  <div
                    onClick={() => setActiveVideo(video.youtubeId)}
                    className="relative aspect-video cursor-pointer group"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Play Button */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-vibha-teal ml-1" />
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-vibha-teal transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {video.description}
                    </p>
                  </div>

                </CardContent>
              </Card>
            ))}
          </div>

          {/* COMING SOON */}
          <div className="mt-12 text-center">
            <div className="inline-flex flex-col items-center bg-gray-50 rounded-lg p-8 max-w-md">
              <Play className="h-12 w-12 text-vibha-teal mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                More Videos Coming Soon
              </h3>
              <p className="text-gray-600 mb-6">
                We're continuously creating new content. Subscribe to stay updated!
              </p>
              <Button className="bg-vibha-teal hover:bg-vibha-teal/90">
                Subscribe for Updates
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* ✅ VIDEO MODAL */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-[90%] max-w-3xl bg-black rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white text-black rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold"
            >
              ×
            </button>

            {/* VIDEO */}
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="Video Player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
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
