import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, Wrench, Globe } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section className="relative flex items-center justify-center text-center px-4 overflow-hidden h-[calc(100vh-116px)] pt-0">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/industrial-brazing-process-close-up.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-vibha-purple/40 to-vibha-teal/40" />

        {/* Content (UPDATED TO TRANSPARENT GRADIENT) */}
        <div className="relative z-10 max-w-2xl bg-gradient-to-br from-vibha-purple/20 via-blue-500/15 to-vibha-teal/20 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl">

          {/* Logo */}
          <div className="mb-4 flex justify-center">
            <Image
              src="/vibha-logo.png"
              alt="Vibha Internationale"
              width={400}
              height={150}
              className="h-24 md:h-32 w-auto"
              priority
            />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Vibha Internationale
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-white font-medium mb-2">
            Precision Brazing Solutions for Modern Industries
          </p>

          <p className="text-white/90 mb-8">
            Delivering high-performance alloys, fluxes, and expertise for reliable and durable joints.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              href="/home"
              className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all"
            >
              Explore Website
            </Link>

            <a
              href="https://staging.vibha.sedawk.cloud/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-vibha-orange text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all"
            >
              Visit Shop
            </a>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          <div className="group relative p-8 bg-white rounded-2xl border border-gray-200 hover:border-vibha-purple transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="relative z-10">
              <div className="mb-4 flex justify-center">
                <ShieldCheck className="h-10 w-10 text-vibha-purple group-hover:scale-110 transition" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Premium Quality
              </h3>
              <p className="text-gray-700 leading-relaxed">
                High-performance brazing alloys engineered for strength, precision, and longevity.
              </p>
            </div>
          </div>

          <div className="group relative p-8 bg-white rounded-2xl border border-gray-200 hover:border-vibha-purple transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="relative z-10">
              <div className="mb-4 flex justify-center">
                <Wrench className="h-10 w-10 text-vibha-purple group-hover:scale-110 transition" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Technical Expertise
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Backed by industry knowledge to deliver reliable brazing solutions for every application.
              </p>
            </div>
          </div>

          <div className="group relative p-8 bg-white rounded-2xl border border-gray-200 hover:border-vibha-purple transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="relative z-10">
              <div className="mb-4 flex justify-center">
                <Globe className="h-10 w-10 text-vibha-purple group-hover:scale-110 transition" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Global Trust
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Trusted by industries worldwide for consistent quality and performance.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* IMAGE GRID */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Industrial Applications
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "/industrial-manufacturing-facility-modern.jpg",
              "/industrial-brazing-process-close-up.jpg",
              "/copper-brazing-process-industrial.jpg",
              "/aluminum-heat-exchanger-assembly.jpg",
            ].map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl shadow-md group"
              >
                <Image
                  src={src}
                  alt="Brazing work"
                  width={300}
                  height={300}
                  className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-vibha-purple to-vibha-teal text-center text-white px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Build Stronger Connections
        </h2>
        <p className="mb-6 text-white/90">
          Discover advanced brazing solutions tailored for your industry.
        </p>

        <Link
          href="/contact"
          className="px-8 py-4 bg-white text-vibha-purple font-semibold rounded-full hover:scale-105 transition"
        >
          Contact Us
        </Link>
      </section>

    </div>
  )
}
