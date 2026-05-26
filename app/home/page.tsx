import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, ChevronRight } from "lucide-react"
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/reveal"
import { RequestQuoteDialog } from "@/components/request-quote-dialog"

const bestSellers = [
  { title: "SU-TA 200 Brazing Wire", image: "/SU-TA-200.webp", href: "/products/brazing-filler-metals/aluminium-to-aluminium/flux-injected-cored/su-ta-200" },
  { title: "SKA-TA/TB 200 Brazing Rod", image: "/SKA-TA2040s-1.webp", href: "/products/brazing-filler-metals/aluminium-to-aluminium/flux-mixed-sintered/ska-ta-tb-200" },
  { title: "0726 Aluminium Flux Powder", image: "/Flux-0726.jpg", href: "/products/brazing-fluxes-paste/torch-flux/0726-powder" },
  { title: "BCuP-2 Copper Brazing Rod", image: "/Solbraze-BCup-2.webp", href: "/products/brazing-filler-metals/copper-silver-brass/bcup-2" },
]

export default function HomePage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 animate-kenburns">
          <Image
            src="/industrial-brazing-process-close-up.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-linear-to-br from-vibha-purple/60 via-vibha-teal/40 to-vibha-orange/30" />
        <div className="absolute inset-0 z-[1] bg-linear-to-t from-black/70 via-black/30 to-transparent" />

        <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-vibha-teal/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-vibha-orange/15 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <RevealStagger
            immediate
            delayChildren={0.15}
            staggerChildren={0.12}
            className="max-w-5xl mx-auto text-center text-white space-y-8 pt-12"
          >
            <RevealItem>
              <Badge className="bg-vibha-teal text-white border-0 text-base px-6 py-2 inline-block shadow-lg">
                Excellence in Industrial Brazing Since 2008
              </Badge>
            </RevealItem>

            <RevealItem>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] text-balance tracking-tight drop-shadow-[0_2px_18px_rgba(0,0,0,0.4)]">
                Building Excellence in Industrial Brazing
              </h1>
            </RevealItem>

            <RevealItem>
              <p className="text-xl md:text-2xl text-white/95 leading-relaxed max-w-4xl mx-auto text-pretty font-light">
                Trusted by leading manufacturers worldwide for premium aluminum, copper, and silver brazing solutions
              </p>
            </RevealItem>

            <RevealItem>
              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-6">
                <Button
                  asChild
                  size="lg"
                  className="bg-vibha-orange hover:bg-vibha-orange/90 text-white text-lg md:text-xl px-10 md:px-12 h-14 md:h-16 rounded-full shadow-2xl shadow-vibha-orange/30 hover:scale-105 transition-transform font-semibold"
                >
                  <Link href="/products">
                    Explore Our Products
                    <ChevronRight className="ml-2 h-6 w-6" />
                  </Link>
                </Button>
                <RequestQuoteDialog
                  trigger={
                    <Button
                      size="lg"
                      className="bg-vibha-orange hover:bg-vibha-orange/90 text-white text-lg md:text-xl px-10 md:px-12 h-14 md:h-16 rounded-full shadow-2xl shadow-vibha-orange/30 hover:scale-105 transition-transform font-semibold"
                    >
                      Request Quote
                    </Button>
                  }
                />
              </div>
            </RevealItem>

            <RevealItem>
              <div className="flex flex-wrap gap-4 justify-center pt-6 text-sm">
                {["ISO Certified", "Export Ready", "250+ Happy Clients"].map((label) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
                  >
                    <CheckCircle2 className="h-5 w-5 text-vibha-teal" />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </RevealItem>
          </RevealStagger>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/70 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="space-y-6">
                <Badge className="bg-vibha-teal text-white">About Us</Badge>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance text-foreground">
                  Committed to Superior Quality &amp; Results
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Vibha Internationale has been established with the primary aim of delivering industrial brazing equipment
                  sourced from the top market leaders who believe in delivering top-class quality products at the best price.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  Our ultimate aim is to give optimum satisfaction to our clients in addition to developing trustworthy,
                  long-standing relationships. We provide one-stop access to all brazing requirements in aluminum, copper
                  &amp; silver brazing filler metals and their fluxes.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  {["ISO Certified", "Export Ready", "Patented Technology"].map((label) => (
                    <div key={label} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-vibha-green" />
                      <span className="text-sm font-medium text-foreground">{label}</span>
                    </div>
                  ))}
                </div>
                <Button asChild size="lg" className="bg-vibha-teal hover:bg-vibha-teal/90 text-white hover:scale-105 transition-transform">
                  <Link href="/about">
                    Learn More About Us
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative h-125 rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="/industrial-manufacturing-facility-modern.jpg"
                  alt="Vibha International facility"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-3 text-balance text-foreground">
                Best Selling Products
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Comprehensive range of high-quality brazing materials and chemicals
              </p>
            </div>
          </Reveal>

          <RevealStagger
            staggerChildren={0.1}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {bestSellers.map((product) => (
              <RevealItem key={product.title}>
                <div className="group overflow-hidden rounded-xl border-2 border-border bg-card shadow-sm hover:border-vibha-teal hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
                  <div className="relative h-44 overflow-hidden shrink-0 bg-muted">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col gap-4 p-6 flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{product.title}</h3>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full group-hover:bg-vibha-teal group-hover:text-white group-hover:border-vibha-teal transition-all duration-300 bg-transparent mt-auto"
                    >
                      <Link href={product.href}>
                        View Details
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal>
            <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-vibha-orange hover:bg-vibha-orange/90 text-white text-base px-10 h-14 rounded-full shadow-lg shadow-vibha-orange/30 hover:scale-105 transition-transform font-semibold"
              >
                <a href="https://staging.vibha.sedawk.cloud/" target="_blank" rel="noopener noreferrer">
                  Shop Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-vibha-orange text-vibha-orange bg-transparent hover:bg-vibha-orange hover:text-white text-base px-10 h-14 rounded-full transition-all duration-300 hover:scale-105 font-semibold"
              >
                <Link href="/products">
                  View All Products
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-vibha-teal via-vibha-purple to-vibha-teal text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse [animation-delay:1.5s]" />
        </div>
        <Reveal className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-balance text-white">Request a Quote Today</h2>
            <p className="text-xl text-white/95 leading-relaxed text-pretty">
              Do you have questions about our products? We are here to help your company. Send us an email or call us,
              and we&apos;ll get in touch shortly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-white text-vibha-teal hover:bg-white/90 text-lg px-8 h-14 hover:scale-105 transition-transform">
                <Link href="/contact">Contact Us Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-vibha-teal text-lg px-8 h-14 bg-transparent transition-all duration-300 hover:scale-105"
              >
                <Link href="tel:+918007770827">Call: +91 800 777 0827</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
