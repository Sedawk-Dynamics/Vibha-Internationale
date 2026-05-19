import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download, Mail, Phone, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCarousel } from "@/components/product-carousel"

// Updated: Fixed imports and JSX structure

export default function BrazingFluxPage() {
  const fluxProducts = [
    {
      name: "Flux 0726 Paste",
      description: "Brazing paste flux for general purpose applications",
      image: "/flux-0726-product.webp",
    },
    {
      name: "Brasoflux - 281",
      description: "Aluminum flux for brazing and welding",
      image: "/brasoflux-281.webp",
    },
    {
      name: "Brasoflux - 291",
      description: "Copper and brass flux",
      image: "/brasoflux-291.webp",
    },
    {
      name: "Silflux - 32",
      description: "Silver brazing powder flux",
      image: "/silflux-32.webp",
    },
    {
      name: "Silflux - 50",
      description: "Low-temperature silver brazing flux",
      image: "/silflux-50.webp",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <Image
          src="/brazing-flux-powder-materials.jpg"
          alt="Brazing Flux"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 container mx-auto px-4 text-left">
          <h1 className="text-5xl font-bold mb-4">Brazing Flux</h1>
          <p className="text-xl max-w-3xl leading-relaxed">
            Professional-grade brazing flux for optimal oxide removal and superior joint formation
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-vibha-teal hover:underline">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/products" className="text-vibha-teal hover:underline">
              Products
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Brazing Flux</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Content - Main */}
          <div className="lg:col-span-2 space-y-16">
            {/* Overview Section */}
            <section>
              <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Our Brazing Flux</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our comprehensive range of brazing flux products is designed for superior performance across various brazing applications. Each formulation is carefully engineered to provide excellent oxide removal, improved wetting, and strong joint formation.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Precise oxide removal for clean joints</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Enhanced capillary action and fluidity</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Suitable for multiple alloy systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Available in powder and paste forms</span>
                </li>
              </ul>
              <Button className="bg-vibha-teal hover:bg-vibha-teal/90">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/brazing-flux-powder-realistic.jpg"
                alt="Brazing Flux Products"
                fill
                className="object-cover"
              />
            </div>
          </div>
            </section>

            {/* Product Details */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Detailed Product Information</h2>
              <div className="space-y-16">
            {/* Flux 0726 - Image Right */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-vibha-teal mb-4">Flux 0726 Paste</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Flux 0726 is a premium brazing paste flux for general-purpose applications. Its advanced formulation provides excellent wetting and oxide removal for superior joint quality.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="text-sm text-gray-700">• Premium quality with superior wetting properties</li>
                  <li className="text-sm text-gray-700">• Excellent oxide removal capability</li>
                  <li className="text-sm text-gray-700">• Suitable for high-strength applications</li>
                </ul>
                <div className="space-y-3">
                  <p className="text-sm text-gray-700">
                    <strong>Applications:</strong> General brazing, copper, brass, and steel
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Form:</strong> Paste
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Temperature Range:</strong> 650°C - 900°C
                  </p>
                </div>
              </div>
              <div className="relative h-72 rounded-lg overflow-hidden">
                <Image
                  src="/flux-0726-product.webp"
                  alt="Flux 0726 Paste"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Brasoflux 281 - Image Left */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative h-72 rounded-lg overflow-hidden md:order-first">
                <Image
                  src="/brasoflux-281.webp"
                  alt="Brasoflux 281"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-vibha-teal mb-4">Brasoflux - 281</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Specialized flux for aluminum brazing applications. Provides excellent protection against oxidation and ensures clean, strong joints.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="text-sm text-gray-700">• Exceptional oxidation protection</li>
                  <li className="text-sm text-gray-700">• Clean joint appearance</li>
                  <li className="text-sm text-gray-700">• Enhanced mechanical properties</li>
                </ul>
                <div className="space-y-3">
                  <p className="text-sm text-gray-700">
                    <strong>Material:</strong> Aluminum and aluminum alloys
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Form:</strong> Powder
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Temperature Range:</strong> 570°C - 650°C
                  </p>
                </div>
              </div>
            </div>

            {/* Brasoflux 291 - Image Right */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-vibha-teal mb-4">Brasoflux - 291</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Premium copper and brass flux for professional brazing operations. Excellent for both flame and induction brazing.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="text-sm text-gray-700">• Professional-grade formulation</li>
                  <li className="text-sm text-gray-700">• Flame and induction compatible</li>
                  <li className="text-sm text-gray-700">• Reliable high-temperature performance</li>
                </ul>
                <div className="space-y-3">
                  <p className="text-sm text-gray-700">
                    <strong>Material:</strong> Copper, brass, and bronze
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Form:</strong> Powder and paste
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Temperature Range:</strong> 750°C - 1100°C
                  </p>
                </div>
              </div>
              <div className="relative h-72 rounded-lg overflow-hidden">
                <Image
                  src="/brasoflux-291.webp"
                  alt="Brasoflux 291"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Silflux 32 - Image Left */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative h-72 rounded-lg overflow-hidden md:order-first">
                <Image
                  src="/silflux-32.webp"
                  alt="Silflux 32"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-vibha-teal mb-4">Silflux - 32</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  General-purpose silver brazing powder flux with excellent capillary properties and high activity level.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="text-sm text-gray-700">• Excellent capillary and fluidity</li>
                  <li className="text-sm text-gray-700">• High activity medium life flux</li>
                  <li className="text-sm text-gray-700">• Compatible with BAg and BCup alloys</li>
                </ul>
                <p className="text-sm font-bold text-vibha-teal">Activity range: 500°C - 800°C</p>
              </div>
            </div>

            {/* Silflux 50 - Image Right */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-vibha-teal mb-4">Silflux - 50</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Low-temperature silver brazing flux designed for temperature-sensitive applications.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="text-sm text-gray-700">• Low melting temperature</li>
                  <li className="text-sm text-gray-700">• Smooth fillets and fine joint appearance</li>
                  <li className="text-sm text-gray-700">• Minimal cleaning required after brazing</li>
                </ul>
                <p className="text-sm font-bold text-vibha-teal">Activity range: 400°C - 700°C</p>
              </div>
              <div className="relative h-72 rounded-lg overflow-hidden">
                <Image
                  src="/silflux-50.webp"
                  alt="Silflux 50"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-gradient-to-br from-vibha-teal/10 to-vibha-purple/10 p-12 rounded-lg border-2 border-vibha-teal mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features & Benefits</h2>
          <ul className="grid md:grid-cols-2 gap-6">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Improved joint quality and strength</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Enhanced capillary action for better penetration</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Reduced cleaning and post-brazing work</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Wide temperature range compatibility</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Suitable for multiple alloy systems</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">Available in powder and paste forms</span>
            </li>
          </ul>
        </section>

        {/* Related Products */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Products</h2>
          <div className="grid md:grid-cols-3 gap-3">
                    <Link
                      href="/products/aluminum-brazing"
                      className="flex items-center gap-2 p-1.5 bg-white rounded-lg hover:shadow-md transition-all group border border-gray-100"
                    >
                      <div className="relative h-10 w-10 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/aluminum-brazing-rods-realistic.jpg"
                  alt="Aluminum Brazing"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-xs text-gray-900 group-hover:text-vibha-teal">Aluminum Brazing Rods</p>
                <p className="text-xs text-gray-600">High-quality rods for aluminum</p>
              </div>
            </Link>
                    <Link
                      href="/products/copper-brazing"
                      className="flex items-center gap-2 p-1.5 bg-white rounded-lg hover:shadow-md transition-all group border border-gray-100"
                    >
                      <div className="relative h-10 w-10 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/copper-brazing-rods-realistic.jpg"
                  alt="Copper Brazing"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-xs text-gray-900 group-hover:text-vibha-teal">Copper Brazing Rods</p>
                <p className="text-xs text-gray-600">Premium copper brazing solutions</p>
              </div>
            </Link>
            <Link
              href="/products/cleaning-chemicals"
              className="flex items-center gap-2 p-1.5 bg-white rounded-lg hover:shadow-md transition-all group border border-gray-100"
            >
              <div className="relative h-10 w-10 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/cleaning-chemicals-container-realistic.jpg"
                  alt="Cleaning Chemicals"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-xs text-gray-900 group-hover:text-vibha-teal">Cleaning Chemicals</p>
                <p className="text-xs text-gray-600">Professional cleaning solutions</p>
              </div>
            </Link>
          </div>
        </section>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-3">
            {/* Related Products Sidebar */}
            <div className="bg-gradient-to-br from-vibha-teal/5 to-blue-50 border border-vibha-teal/20 rounded-lg p-4">
              <h3 className="text-sm font-bold text-gray-900 mb-2">Related Products</h3>
              <div className="space-y-1.5">
                <Link
                  href="/products/aluminum-brazing"
                  className="flex items-center gap-2 p-1.5 bg-white rounded-lg hover:shadow-md transition-all group border border-gray-100"
                >
                  <div className="relative h-10 w-10 rounded overflow-hidden flex-shrink-0">
                    <Image
                      src="/aluminum-brazing-rods-realistic.jpg"
                      alt="Aluminum Brazing"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-bold text-xs text-gray-900 group-hover:text-vibha-teal truncate">Aluminum Brazing Alloys</span>
                  </div>
                  <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-vibha-teal flex-shrink-0" />
                </Link>
                <Link
                  href="/products/copper-brazing"
                  className="flex items-center gap-2 p-1.5 bg-white rounded-lg hover:shadow-md transition-all group border border-gray-100"
                >
                  <div className="relative h-10 w-10 rounded overflow-hidden flex-shrink-0">
                    <Image
                      src="/copper-brazing-rods-realistic.jpg"
                      alt="Copper Brazing"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-bold text-xs text-gray-900 group-hover:text-vibha-teal truncate">Copper Brazing Alloys</span>
                  </div>
                  <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-vibha-teal flex-shrink-0" />
                </Link>
                <Link
                  href="/products/cleaning-chemicals"
                  className="flex items-center gap-2 p-1.5 bg-white rounded-lg hover:shadow-md transition-all group border border-gray-100"
                >
                  <div className="relative h-10 w-10 rounded overflow-hidden flex-shrink-0">
                    <Image
                      src="/cleaning-chemicals-container-realistic.jpg"
                      alt="Cleaning Chemicals"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-bold text-xs text-gray-900 group-hover:text-vibha-teal truncate">Cleaning Chemicals</span>
                  </div>
                  <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-vibha-teal flex-shrink-0" />
                </Link>
              </div>
            </div>

            {/* Need Assistance Section */}
            <div className="bg-gradient-to-br from-vibha-teal to-blue-600 rounded-lg shadow-md p-4 text-white">
              <h3 className="text-sm font-bold mb-1.5">Need Assistance?</h3>
              <p className="text-xs text-white/90 leading-tight mb-3">Get in touch with our experts for product inquiries and quotes.</p>
              <div className="space-y-2">
                <a
                  href="tel:+918007188288"
                  className="flex items-center justify-center gap-2 w-full bg-white text-vibha-teal font-bold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors text-xs h-8"
                >
                  <Phone className="h-3 w-3" />
                  +91 80071 88288
                </a>
                <a
                  href="mailto:info@vibha.com"
                  className="flex items-center justify-center gap-2 w-full border border-white text-white font-bold py-2 px-4 rounded-lg hover:bg-white/10 transition-colors text-xs h-8"
                >
                  <Mail className="h-3 w-3" />
                  Email Us
                </a>
              </div>
            </div>

            {/* Technical Resources Section */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
              <p className="text-xs text-gray-600 mb-2 font-semibold">Technical Resources</p>
              <a
                href="#"
                className="flex items-center justify-center gap-2 w-full border-2 border-vibha-teal text-vibha-teal font-bold py-3 px-4 rounded-lg hover:bg-vibha-teal/5 transition-colors"
              >
                <Download className="h-4 w-4" />
                Product Catalog
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-vibha-teal/10 to-vibha-purple/10 p-12 rounded-lg border-2 border-vibha-teal text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Order?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact our sales team to get quality brazing flux products for your industrial needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-vibha-teal hover:bg-vibha-teal/90">
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </Button>
            <Button variant="outline" className="border-vibha-teal text-vibha-teal hover:bg-vibha-teal/10">
              <Phone className="mr-2 h-4 w-4" />
              Call Now
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
