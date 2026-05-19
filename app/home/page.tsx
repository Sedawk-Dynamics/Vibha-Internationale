import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle2, Award, Users, Sparkles, Shield, Clock, Leaf, ChevronRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/industrial-brazing-process-close-up.jpg"
            alt="Industrial brazing background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-vibha-purple/60 via-vibha-teal/40 to-vibha-orange/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>

        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-vibha-teal/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-vibha-orange/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white space-y-8 pt-12">
            <Badge className="bg-vibha-teal text-white border-0 text-base px-6 py-2 inline-block">
              Excellence in Industrial Brazing Since 2008
            </Badge>
            <h1 className="text-6xl md:text-8xl font-bold leading-[1.1] text-balance tracking-tight">
              Building Excellence in Industrial Brazing
            </h1>
            <p className="text-xl md:text-3xl text-white/95 leading-relaxed max-w-4xl mx-auto text-pretty font-light">
              Trusted by leading manufacturers worldwide for premium aluminum, copper, and silver brazing solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
              <Button
                asChild
                size="lg"
                className="bg-vibha-orange hover:bg-vibha-orange/90 text-white text-xl px-12 h-16 rounded-full shadow-2xl shadow-vibha-orange/30 hover:scale-105 transition-transform font-semibold"
              >
                <Link href="/products/aluminum-brazing">
                  Explore Our Products
                  <ChevronRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white text-gray-900 hover:bg-vibha-teal hover:text-white hover:border-vibha-teal border-2 border-white text-xl px-12 h-16 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-vibha-teal/30 font-semibold"
              >
                <Link href="/contact">Request Quote</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 justify-center pt-8 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <CheckCircle2 className="h-5 w-5 text-vibha-teal" />
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <CheckCircle2 className="h-5 w-5 text-vibha-teal" />
                <span>Export Ready</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <CheckCircle2 className="h-5 w-5 text-vibha-teal" />
                <span>250+ Happy Clients</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/70 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-foreground">
              Why Choose Vibha International
            </h2>
            <p className="text-lg text-foreground/70 text-pretty">
              16+ years of excellence delivering superior brazing solutions trusted by India's leading manufacturers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-vibha-teal transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-vibha-teal/10 flex items-center justify-center group-hover:bg-vibha-teal/20 transition-colors">
                  <Users className="h-6 w-6 text-vibha-teal" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Dedicated Support</h3>
                <p className="text-foreground/70 leading-relaxed">
                  24/7 customer support with expert technical guidance. Our dedicated team ensures zero downtime and rapid response to all inquiries.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-vibha-orange transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-vibha-orange/10 flex items-center justify-center group-hover:bg-vibha-orange/20 transition-colors">
                  <Award className="h-6 w-6 text-vibha-orange" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Global Expertise</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Trusted by 250+ clients worldwide across automotive, refrigeration, defense, and aerospace sectors with proven excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-vibha-green transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-vibha-green/10 flex items-center justify-center group-hover:bg-vibha-green/20 transition-colors">
                  <Leaf className="h-6 w-6 text-vibha-green" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Eco-Conscious Solutions</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Sustainable, lead-free brazing materials compliant with global environmental standards while maintaining superior performance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-vibha-purple transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-vibha-purple/10 flex items-center justify-center group-hover:bg-vibha-purple/20 transition-colors">
                  <Clock className="h-6 w-6 text-vibha-purple" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Reliable Logistics</h3>
                <p className="text-foreground/70 leading-relaxed">
                  On-time delivery with international shipping capabilities. We ensure your production schedules are never compromised.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-vibha-teal transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-vibha-teal/10 flex items-center justify-center group-hover:bg-vibha-teal/20 transition-colors">
                  <Sparkles className="h-6 w-6 text-vibha-teal" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Advanced Technology</h3>
                <p className="text-foreground/70 leading-relaxed">
                  Patented brazing technologies with superior joint strength and reduced maintenance costs for your operations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-vibha-orange transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-vibha-orange/10 flex items-center justify-center group-hover:bg-vibha-orange/20 transition-colors">
                  <Shield className="h-6 w-6 text-vibha-orange" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Certified Excellence</h3>
                <p className="text-foreground/70 leading-relaxed">
                  ISO certified products meeting international quality standards. Approved for critical applications in automotive and aerospace.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-vibha-teal text-white">About Us</Badge>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance text-foreground">
                Committed to Superior Quality & Results
              </h2>
            <p className="text-lg text-foreground/70 leading-relaxed text-pretty">
              Vibha Internationale has been established with the primary aim of delivering industrial brazing equipment
              sourced from the top market leaders who believe in delivering top-class quality products at the best price.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed text-pretty">
              Our ultimate aim is to give optimum satisfaction to our clients in addition to developing trustworthy,
              long-standing relationships. We provide one-stop access to all brazing requirements in aluminum, copper
              & silver brazing filler metals and their fluxes, along with all types of industrial cleaning chemicals.
            </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-vibha-green" />
                  <span className="text-sm font-medium text-foreground">ISO Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-vibha-green" />
                  <span className="text-sm font-medium text-foreground">Export Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-vibha-green" />
                  <span className="text-sm font-medium text-foreground">Patented Technology</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-vibha-teal hover:bg-vibha-teal/90 text-white">
                <Link href="/about">
                  Learn More About Us
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://www.btglabs.com/hubfs/Images/Blog/metal-brazing-copper-component%20%28reduced%29.jpg"
                alt="Vibha International facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
       <section>
  <div className="container mx-auto px-4">
    <div className="text-center max-w-3xl mx-auto mb-4"> {/* reduced mb-16 → mb-4 */}
      <h2 className="text-4xl md:text-5xl font-bold mb-2 text-balance text-foreground">
        Best Selling Products
      </h2>
      <p className="text-lg text-foreground/70 text-pretty">
        Comprehensive range of high-quality brazing materials and chemicals
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[
        {
          title: "Aluminum Brazing Wires",
          image: "/SU-TA-200.webp",
          href: "/products/aluminum-brazing",
        },
        {
          title: "Aluminum Brazing Rods",
          image: "/SKA-TA2040s-1.webp",
          href: "/products/aluminum-brazing",
        },
        {
          title: "Aluminum Flux Powder",
          image: "/Flux-0726.jpg",
          href: "/products/brazing-flux",
        },
        {
          title: "Copper Brazing Rods",
          image: "/Solbraze-BCup-2.webp",
          href: "/products/copper-brazing",
        },
      ].map((product, index) => (
        <div
          key={index}
          className="group overflow-hidden border-2 border-gray-200 rounded-xl shadow-sm hover:border-vibha-teal hover:shadow-xl transition-all duration-300 flex flex-col bg-card"
        >
          <div className="relative h-40 overflow-hidden flex-shrink-0">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col gap-4 p-6 flex-1">
            <h3 className="text-xl font-semibold text-foreground">{product.title}</h3>
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
      ))}
    </div>

    <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Button
        asChild
        size="lg"
        className="bg-vibha-teal hover:bg-vibha-teal/90 text-white px-8 h-12"
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
        className="border-2 bg-transparent hover:bg-vibha-teal hover:text-white hover:border-vibha-teal transition-all duration-300"
      >
        <Link href="/products/aluminum-brazing">
          View All Products
          <ChevronRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 bg-vibha-teal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-balance text-white">Request a Quote Today</h2>
            <p className="text-xl text-white/95 leading-relaxed text-pretty">
              Do you have questions about our products? We are here to help your company. Send us an email or call us,
              and we'll get in touch shortly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-white text-vibha-teal hover:bg-white/90 text-lg px-8 h-14">
                <Link href="/contact">Contact Us Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-vibha-teal text-lg px-8 h-14 bg-transparent transition-all duration-300"
              >
                <Link href="tel:+918007770827">Call: +91 800 777 0827</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
