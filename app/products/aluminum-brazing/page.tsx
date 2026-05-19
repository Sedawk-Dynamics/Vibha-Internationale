import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Download, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCarousel } from "@/components/product-carousel"

// v2: Fixed all JSX structure issues and icon imports

export default function AluminumBrazingPage() {
  const benefits = [
    {
      title: "Patented Technology",
      description:
        "Fluxes are evenly Injected to the inside of wire and fluxes are invisible to the naked eye. This technology has been patented worldwide. The main benefit is it secures all the invisible cracks evenly. Due to Injection technology, the wire/rings are 100% seamless and there is no possibility of Air Puffs/Missing Flux.",
    },
    {
      title: "Clean and Pollution free working Environment",
      description:
        "As the Flux are invisible, there are No possibilities of Flux Dust would contaminate the production area. Hence there is No swallowing, No Breathing, No Skin Irritations from Chemical Substances of Flux Air Dust.",
    },
    {
      title: "Completely Safe",
      description:
        "With No Binders used nor added during the manufacturing of Brazing Filler Metal Wires, No Poly Carbonate Fumes threatens the bronchial health of operators who are exposed to the fumes while working.",
    },
    {
      title: "Prevention of Leakages",
      description:
        "Non-Corrosive KAIF4 / CSKAIF4 Flux injection technology which has been registered and patented for wires and rings. Gives a better performance to the evenly melting alloy and fills the contact points at a lower temperature and prevents the leakage problems which are common errors after the brazing.",
    },
    {
      title: "Cleaning",
      description:
        "Very Little or No need to clean after brazing thus minimizing the cleaning process, which used to be very time taking and a longer process.",
    },
    {
      title: "Eco Natural",
      description:
        'For us, the most important moral responsibility is Human Value, therefore, "Eco Natural" Flux Mixed and Flux Injected (patented worldwide) technology as no binder is used in fluxing process.',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center text-white">
        <Image
          src="/aluminum-brazing-rods-metallic.jpg"
          alt="Aluminum Brazing"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 container mx-auto px-4 text-left">
          <h1 className="text-5xl font-bold mb-4">Aluminium Brazing</h1>
          <p className="text-xl max-w-3xl leading-relaxed">
            Premium aluminum brazing alloys with patented flux injection technology for superior joining performance
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
            <Link href="/" className="text-vibha-teal hover:underline">
              Products
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">Aluminum Brazing</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Image Gallery */}
         

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Aluminium Brazing</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Aluminum brazing alloys are used to provide an all-aluminum structure with excellent corrosion
                  resistance and good strength and appearance. The melting point of the brazing filler metal is
                  relatively close to that of the material being joined. However, the base metal should not be melted;
                  as a result, close temperature control is necessary. The brazing temperature required for aluminum
                  assemblies is determined by the melting points of the base metal and the brazing filler metal.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Aluminum Brazing Filler Metals rapidly increases the productivity and reduces the production time.
                  It's proven to be beneficial as it's Cleaner and Environmental Friendly. It minimizes inferiority and
                  efficiency of working conditions. The product has gained recognition from domestic and worldwide
                  global Enterprises. Aluminum Or SKA and SU Series contains non-corrosive flux in the metal.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8 font-semibold">
                  We have the best Technology and Techniques which is a "Work Of Art" and it enhances the Human Safety,
                  Productivity and Savings of Operational cost.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Benefits</h2>
                <div className="space-y-6 mb-12">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-vibha-teal">
                      <h3 className="text-xl font-bold text-vibha-teal mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Aluminium Brazing Products</h2>

                <div className="space-y-16">
                  {/* SKA Series Rods - Right Image */}
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-3xl font-bold text-vibha-teal mb-4">SKA Series - Aluminum Brazing Rods</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        High-quality aluminum brazing rods designed for superior joining performance in heat exchange applications. The SKA series features our patented flux injection technology for consistent, seamless bonding.
                      </p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start gap-2">
                          <span className="text-vibha-teal font-bold">✓</span>
                          <span className="text-gray-700">Premium quality with non-corrosive flux injection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-vibha-teal font-bold">✓</span>
                          <span className="text-gray-700">Excellent corrosion resistance and appearance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-vibha-teal font-bold">✓</span>
                          <span className="text-gray-700">Reduced production time and improved productivity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-vibha-teal font-bold">✓</span>
                          <span className="text-gray-700">100% seamless with no air puffs or missing flux</span>
                        </li>
                      </ul>
                      <div className="bg-blue-50 p-4 rounded-md">
                        <p className="text-sm font-bold text-gray-900 mb-2">Applications:</p>
                        <p className="text-sm text-gray-700">Automotive radiators, heat exchangers, air conditioning units, and industrial equipment</p>
                      </div>
                    </div>
                    <ProductCarousel 
                      images={["/alu-brazing-rods-package.webp", "/alu-brazing-rods-realistic.jpg", "/aluminum-brazing-rods-bundle.jpg"]}
                      alt="SKA Series Aluminum Brazing Rods"
                    />
                  </div>

                  {/* SU Series Paste - Left Image */}
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <ProductCarousel 
                      images={["/alu-brazing-paste-syringes.webp", "/aluminum-brazing-rods-close-up.jpg"]}
                      alt="SU Series Aluminum Brazing Paste"
                    />
                    <div className="md:order-2">
                      <h3 className="text-3xl font-bold text-vibha-teal mb-4">SU Series - Aluminum Brazing Paste</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Convenient syringe-based aluminum brazing paste for precise application and controlled flux delivery. Perfect for manual brazing operations where accuracy and ease of use are essential.
                      </p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start gap-2">
                          <span className="text-vibha-teal font-bold">✓</span>
                          <span className="text-gray-700">Easy-to-use syringe applicator design</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-vibha-teal font-bold">✓</span>
                          <span className="text-gray-700">Precise flux application control</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-vibha-teal font-bold">✓</span>
                          <span className="text-gray-700">Ideal for small to medium brazing tasks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-vibha-teal font-bold">✓</span>
                          <span className="text-gray-700">Consistent paste consistency for reliable results</span>
                        </li>
                      </ul>
                      <div className="bg-orange-50 p-4 rounded-md">
                        <p className="text-sm font-bold text-gray-900 mb-2">Best For:</p>
                        <p className="text-sm text-gray-700">Repair work, small batch production, laboratory testing, and precision manual brazing</p>
                      </div>
                    </div>
                  </div>

                  {/* SU Series Wires - Right Image */}
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-3xl font-bold text-vibha-teal mb-4">SU Series - Aluminum Brazing Wires</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Advanced flux-cored aluminum brazing wires featuring our patented injection technology. These wires combine superior metallurgical properties with clean, pollution-free operation for professional brazing operations.
                      </p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start gap-2">
                          <span className="text-vibha-teal font-bold">✓</span>
                          <span className="text-gray-700">Patented internal flux injection technology</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-vibha-teal font-bold">✓</span>
                          <span className="text-gray-700">Invisible flux prevents contamination</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-vibha-teal font-bold">✓</span>
                          <span className="text-gray-700">Seamless construction with no flux residue issues</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-vibha-teal font-bold">✓</span>
                          <span className="text-gray-700">Minimal post-brazing cleaning required</span>
                        </li>
                      </ul>
                      <div className="bg-blue-50 p-4 rounded-md">
                        <p className="text-sm font-bold text-gray-900 mb-2">Industries:</p>
                        <p className="text-sm text-gray-700">HVAC systems, refrigeration, automotive, aerospace, and industrial manufacturing</p>
                      </div>
                    </div>
                    <ProductCarousel 
                      images={["/alu-brazing-wires-spool.webp", "/aluminum-wire-coils-industrial.jpg"]}
                      alt="SU Series Aluminum Brazing Wires"
                    />
                  </div>

                  {/* Contact CTA Section */}
                  <div className="bg-gradient-to-br from-vibha-teal/10 to-vibha-purple/10 p-8 rounded-lg border-2 border-vibha-teal shadow-md mt-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Order?</h2>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Get detailed product specifications, pricing, and technical support from our experts. Contact us today for bulk inquiries and custom solutions.
                    </p>
                    <Button asChild size="lg" className="bg-vibha-teal hover:bg-vibha-teal/90 text-white font-bold shadow-lg">
                      <Link href="/contact">
                        <Mail className="mr-2 h-5 w-5" />
                        Contact Us for Quote
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-3 max-w-sm">
                {/* Related Products */}
                <div className="bg-gradient-to-br from-vibha-teal/5 to-blue-50 border border-vibha-teal/20 rounded-lg shadow-md p-4">
                  <h3 className="text-sm font-bold text-gray-900 mb-2">Related Products</h3>
                  <div className="space-y-1.5">
                    <Link
                      href="/products/copper-brazing"
                      className="flex items-center gap-2 p-1.5 bg-white rounded-lg hover:shadow-md transition-all group border border-gray-100"
                    >
                      <div className="relative h-10 w-10 rounded overflow-hidden flex-shrink-0">
                        <Image
                          src="/silver-brazing-alloy-materials.jpg"
                          alt="Silver Brazing"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-xs text-gray-900 group-hover:text-vibha-teal truncate">
                          Silver Brazing Alloys
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

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-vibha-teal to-blue-600 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-xl mb-8 text-blue-50">Contact us today for competitive pricing and fast delivery</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-vibha-teal hover:bg-gray-100 font-bold shadow-lg">
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-vibha-teal font-bold bg-transparent"
            >
              <Link href="/">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
