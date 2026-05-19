import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mail, Phone, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCarousel } from "@/components/product-carousel"

// v2: Fixed all JSX structure issues and icon imports

export default function CopperBrazingPage() {

  const bcupProducts = [
    {
      name: "BCup-2",
      composition: "Cu-Zn (Brass)",
      solidus: "840°C",
      liquidus: "930°C",
      brazingTemp: "900-950°C",
      description: "Excellent wetting and flow properties for brazing mild steel and ferrous metals. Popular choice for mechanical applications.",
      images: ["/Solbraze-BCup-2.webp", "/copper-rods-display-clean.webp"]
    },
    {
      name: "BCup-6",
      composition: "Cu-Zn-Ni (Brass)",
      solidus: "850°C",
      liquidus: "940°C",
      brazingTemp: "900-950°C",
      description: "Silver-like appearance with better corrosion resistance. Ideal for marine and outdoor applications.",
      images: ["/bcup-6-rods-updated.webp", "/copper-brazing-process-industrial.jpg"]
    }
  ]

  // const bagProducts = [
  //   {
  //     name: "BAg-1",
  //     image: "/bag-1.webp",
  //     description:
  //       "45% Silver premium brazing alloy for high-performance applications.",
  //     composition: "Ag: 45%, Cu: 15%, Zn: 16%, Cd: 24%",
  //     solidus: "607°C",
  //     liquidus: "618°C",
  //     brazingTemp: "618-760°C",
  //   },
  //   {
  //     name: "BAg-5",
  //     image: "/bag-5.webp",
  //     description:
  //       "Cadmium-free silver brazing alloy suitable for general purpose use.",
  //     composition: "Ag: 45%, Cu: 30%, Zn: 25%",
  //     solidus: "663°C",
  //     liquidus: "743°C",
  //     brazingTemp: "743-843°C",
  //   },
  //   {
  //     name: "BAg-7",
  //     image: "/bag-7.webp",
  //     description:
  //       "56% Silver alloy offering superior flow and joint reliability.",
  //     composition: "Ag: 56%, Cu: 22%, Zn: 17%, Sn: 5%",
  //     solidus: "618°C",
  //     liquidus: "652°C",
  //     brazingTemp: "652-760°C",
  //   },
  // ]

  return (
    <div className="min-h-screen">

      {/* HERO */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <Image
          src="/copper-brazing-rods-materials.jpg"
          alt="Copper Brazing"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 container mx-auto px-4 text-left">
          <h1 className="text-5xl font-bold mb-4">Copper Brazing Rods</h1>
          <p className="text-xl max-w-3xl leading-relaxed">
            BCup & BAg Silver Brazing Alloys for Industrial Applications
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-16">
        <div className="container mx-auto px-4">

          <div className="grid lg:grid-cols-3 gap-12">

            {/* LEFT CONTENT */}
            <div className="lg:col-span-2 space-y-20">

              {/* BCUP SECTION */}
              <div>
                <h2 className="text-3xl font-bold text-vibha-teal mb-10">
                  BCup Copper Brazing Rods
                </h2>

                {bcupProducts.map((product, index) => (
                  <div
                    key={product.name}
                    className="grid md:grid-cols-2 gap-8 items-center mb-16"
                  >
                    <div className={index % 2 !== 0 ? "md:order-2" : ""}>
                      <h3 className="text-2xl font-bold mb-4">
                        {product.name}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {product.description}
                      </p>

                      <div className="bg-blue-50 p-4 rounded-md text-sm space-y-1">
                        <p><strong>Composition:</strong> {product.composition}</p>
                        <p><strong>Solidus:</strong> {product.solidus}</p>
                        <p><strong>Liquidus:</strong> {product.liquidus}</p>
                        <p><strong>Brazing Temp:</strong> {product.brazingTemp}</p>
                      </div>
                    </div>

                    <ProductCarousel 
                      images={product.images}
                      alt={product.name}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-3 max-w-sm">
                {/* Related Products */}
                <div className="bg-gradient-to-br from-vibha-teal/5 to-blue-50 border border-vibha-teal/20 rounded-lg shadow-md p-4">
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
                        <p className="font-bold text-xs text-gray-900 group-hover:text-vibha-teal truncate">
                          Aluminum Brazing Alloys
                        </p>
                      </div>
                      <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-vibha-teal flex-shrink-0" />
                    </Link>
                    <Link
                      href="/products/brazing-flux"
                      className="flex items-center gap-2 p-1.5 bg-white rounded-lg hover:shadow-md transition-all group border border-gray-100"
                    >
                      <div className="relative h-10 w-10 rounded overflow-hidden flex-shrink-0">
                        <Image
                          src="/brazing-flux-powder-realistic.jpg"
                          alt="Brazing Flux"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-xs text-gray-900 group-hover:text-vibha-teal truncate">Brazing Flux</p>
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
                        <p className="font-bold text-xs text-gray-900 group-hover:text-vibha-teal truncate">Cleaning Chemicals</p>
                      </div>
                      <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-vibha-teal flex-shrink-0" />
                    </Link>
                  </div>
                </div>

                {/* Need Assistance */}
                <div className="bg-gradient-to-br from-vibha-teal to-blue-600 rounded-lg shadow-md p-4 text-white">
                  <h3 className="text-sm font-bold mb-1.5">Need Assistance?</h3>
                  <p className="text-xs text-white/90 leading-tight mb-3">
                    Get in touch with our experts for product inquiries and quotes.
                  </p>
                  <Button className="w-full mb-2 bg-white text-vibha-teal hover:bg-gray-100 h-8 text-xs">
                    <Phone className="mr-2 h-3 w-3" /> +91 80071 88288
                  </Button>
                  <Button variant="outline" className="w-full bg-white/10 border-white text-white hover:bg-white/20 h-8 text-xs">
                    <Mail className="mr-2 h-3 w-3" /> Email Us
                  </Button>
                </div>

                {/* Technical Resources */}
                <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4">
                  <p className="text-xs text-gray-600 mb-2 font-semibold">Technical Resources</p>
                  <Button variant="outline" size="sm" asChild className="w-full h-8 text-xs border-vibha-teal text-vibha-teal hover:bg-vibha-teal/5">
                    <a href="#" download>
                      <Download className="mr-2 h-3 w-3" /> Product Catalog
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
