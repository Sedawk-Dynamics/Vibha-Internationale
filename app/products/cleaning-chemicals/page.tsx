import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Mail, Phone, Droplet, Shield, Leaf, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ProductCarousel } from "@/components/product-carousel"

// Updated: Fixed imports and JSX structure

export default function CleaningChemicalsPage() {
  const products = [
    {
      name: "SolClean-AL",
      subtitle: "Oil & Grease Cleaner",
      description:
        "Special liquid, inhibited, water based, pre-soaked alkaline cleaner for frictionless cleaning system",
      features: [
        "Water Soluble",
        "Safe on metals",
        "Emulsify Oil & grease",
        "Eco Friendly",
        "Economical – low end use cost",
        "Non-Flammable",
        "Rust Inhibitive",
        "Long tank life",
        "Biodegradable/non-hazardous",
        "Citrus fragrance",
      ],
      dilution: "2-10% depending on contamination",
      temperature: "55°-60° C",
      images: ["/puf-coating-103.webp", "/industrial-cleaning-chemical-solution.jpg"]
    },
    {
      name: "SolClean-MC",
      subtitle: "Metal Cleaner",
      description: "Highly concentrated metal cleaner that effectively cleans and brightens the substrate",
      features: [
        "Highly Effective",
        "Biodegradable",
        "Non-Toxic",
        "Non-Hazardous",
        "Non-Flammable",
        "No fumes",
        "Non-carcinogenic",
        "No metal loss",
        "No reaction on skin",
      ],
      dilution: "1 ~ 50% depending on contamination",
      temperature: "Room temperature",
      images: ["/polyklin-metal-cleaner.webp", "/cleaning-chemicals-container-realistic.jpg"]
    },
    {
      name: "SolClean-AC",
      subtitle: "Aluminium Cleaner",
      description: "Highly concentrated Aluminium cleaner with foaming action for effective cleaning and brightening",
      features: [
        "Highly Effective",
        "Biodegradable",
        "Non-Toxic",
        "Non-Hazardous",
        "Non-Flammable",
        "No fumes",
        "Non-carcinogenic",
        "No metal loss",
        "No reaction on skin",
        "Improves air for fins cleaning",
      ],
      dilution: "1 ~ 10% depending on contamination",
      temperature: "Room temperature",
      images: ["/polyklin-rust-remover.webp", "/industrial-cleaning-chemical-solution.jpg"]
    },
    {
      name: "ENIROOF PUF-103",
      subtitle: "Anti-Corrosive Clear Lacquer Coating",
      description:
        "Cross linked urethane based acrylic resin, translucent gloss finish coating with excellent abrasion and heat resistance",
      features: [
        "Very good protection against SOx NOx",
        "Excellent heat resistance",
        "Very good abrasion resistance",
        "Non-yellowing with age",
        "Good film forming nature",
        "Quick dry in ambient temperature",
        "Excellent adhesion to most metals",
        "Excellent water, alkali and salt resistance",
      ],
      application: "As anti-corrosive coating for metal and its articles. Ready to use.",
      images: ["/puf-coating-103.webp", "/industrial-brazing-equipment-metallic-surfaces.jpg"]
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <Image
          src="/industrial-cleaning-chemical-solution.jpg"
          alt="Metal Cleaning Chemicals"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 container mx-auto px-4 text-left">
          <h1 className="text-5xl font-bold mb-4">Metal Cleaning Chemicals</h1>
          <p className="text-xl max-w-3xl leading-relaxed">
            Leading supplier of metal cleaning chemicals and anti-corrosive solutions in India
          </p>
        </div>
      </section>

      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-vibha-teal hover:underline">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/" className="text-vibha-teal hover:underline">
              Products
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Cleaning Chemicals</span>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Cleaning Chemical Products</h2>

              <div className="space-y-16">
                {/* SolClean-AL - Right Image */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-vibha-teal mb-2">{products[0].name}</h3>
                    <p className="text-gray-900 font-bold mb-3">{products[0].subtitle}</p>
                    <p className="text-gray-700 leading-relaxed mb-4">{products[0].description}</p>
                    <div className="space-y-2 mb-6">
                      <p className="text-sm font-bold text-gray-900">Key Features:</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {products[0].features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-md space-y-2">
                      <p className="text-sm font-bold text-gray-900">Usage Guidelines:</p>
                      <p className="text-sm text-gray-700"><strong>Dilution:</strong> {products[0].dilution}</p>
                      <p className="text-sm text-gray-700"><strong>Temperature:</strong> {products[0].temperature}</p>
                    </div>
                  </div>
                  <ProductCarousel 
                    images={products[0].images}
                    alt={products[0].name}
                  />
                </div>

                {/* SolClean-MC - Left Image */}
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <ProductCarousel 
                    images={products[1].images}
                    alt={products[1].name}
                  />
                  <div className="md:order-2">
                    <h3 className="text-3xl font-bold text-vibha-teal mb-2">{products[1].name}</h3>
                    <p className="text-gray-900 font-bold mb-3">{products[1].subtitle}</p>
                    <p className="text-gray-700 leading-relaxed mb-4">{products[1].description}</p>
                    <div className="space-y-2 mb-6">
                      <p className="text-sm font-bold text-gray-900">Key Features:</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {products[1].features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-md space-y-2">
                      <p className="text-sm font-bold text-gray-900">Usage Guidelines:</p>
                      <p className="text-sm text-gray-700"><strong>Dilution:</strong> {products[1].dilution}</p>
                      <p className="text-sm text-gray-700"><strong>Temperature:</strong> {products[1].temperature}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="md:col-span-1">
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
                        <p className="font-bold text-xs text-gray-900 group-hover:text-vibha-teal truncate">Copper Brazing Alloys</p>
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
                  <Button
                    variant="outline"
                    className="w-full border-vibha-teal text-vibha-teal hover:bg-vibha-teal/5 bg-transparent h-8 text-xs"
                  >
                    <Download className="mr-2 h-3 w-3" />
                    Product Catalog
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sidebar Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2"></div>
            <div className="md:col-span-1">
              <div className="space-y-3">
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
                        <p className="font-bold text-xs text-gray-900 group-hover:text-vibha-teal truncate">Copper Brazing Alloys</p>
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
                <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                  <p className="text-xs text-gray-600 mb-2 font-semibold">Technical Resources</p>
                  <Button
                    variant="outline"
                    className="w-full border-vibha-teal text-vibha-teal hover:bg-vibha-teal/5 bg-transparent h-8 text-xs"
                  >
                    <Download className="mr-2 h-3 w-3" />
                    Product Catalog
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
