'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ProductsPage() {
  const products = [
    // Aluminum Brazing Products
    {
      id: 'ska-tb-200',
      name: 'Al to Al SKA-TB 200 Brazing Rod',
      category: 'Aluminum Brazing',
      image: '/alu-brazing-rods-package.webp',
      description: 'SKA is a powder metallurgy aluminum brazing filler metal produced with uniform-size aluminum powder mixed with non-corrosive flux powder at a fixed ratio of 80:20. With its unique patented technique, offering highest brazing performance.',
      href: '/products/aluminum-brazing',
    },
    {
      id: 'su-ta-200-wire',
      name: 'Al to Al SU-TA 200 Brazing Wire',
      category: 'Aluminum Brazing',
      image: '/alu-brazing-wires-spool.webp',
      description: 'Seamless flux-injected (cored) brazing alloy offering highest and stable brazing quality. Known for being environmentally friendly and safe to the health of the operator as it doesn\'t emit any poisonous gases while brazing.',
      href: '/products/aluminum-brazing',
    },
    {
      id: 'cwb-4047-wire',
      name: 'Aluminum to Aluminum CWB 4047 Brazing Wire',
      category: 'Aluminum Brazing',
      image: '/aluminum-brazing-rods-metallic.jpg',
      description: 'CWB 4047 (Al Si 12) alloy is an aluminum alloy with high silicon content for welding and brazing of aluminum castings. Thanks to the low melting temperature, it minimizes distortions of the base metal.',
      href: '/products/aluminum-brazing',
    },
    {
      id: 'ska-ta-2040s-rod',
      name: 'Al to Al SKA-TA 2040s Brazing Rod',
      category: 'Aluminum Brazing',
      image: '/SKA-TA2040s-1.webp',
      description: 'Many aluminum alloys can be brazed together. Aluminum brazing alloys are used to provide an all-aluminum structure with excellent corrosion resistance and good strength and appearance.',
      href: '/products/aluminum-brazing',
    },
    {
      id: 'su-ta-2040s-wire',
      name: 'Al to Al SU-TA 2040s Brazing Wire',
      category: 'Aluminum Brazing',
      image: '/alu-brazing-wires-realistic.jpg',
      description: 'Seamless flux-injected (cored) brazing alloy offering highest and stable brazing quality. Known for being environmentally friendly and safe to the health of the operator.',
      href: '/products/aluminum-brazing',
    },
    {
      id: 'sw-al-2040s',
      name: 'SW- AL-2040s Aluminum Brazing',
      category: 'Aluminum Brazing',
      image: '/aluminum-wire-coils-industrial.jpg',
      description: 'SKA is a powder metallurgy aluminum brazing filler metal produced with uniform-size aluminum powder mixed with non-corrosive flux powder. Available in Rod, Spool & Pouch.',
      href: '/products/aluminum-brazing',
    },
    {
      id: 'sw-al-12',
      name: 'SW- AL-12 Aluminum Brazing',
      category: 'Aluminum Brazing',
      image: '/aluminum-brazing-rods-realistic.jpg',
      description: 'SKA powder metallurgy aluminum brazing filler metal with uniform-size aluminum powder mixed with non-corrosive flux powder at a fixed ratio of 80:20. Offering highest brazing performance.',
      href: '/products/aluminum-brazing',
    },
    {
      id: 'al-cu-su-tc-150',
      name: 'Al to Cu SU-TC 150 Brazing Wire',
      category: 'Aluminum Brazing',
      image: '/aluminum-brazing-rods-close-up.jpg',
      description: 'Seamless flux-injected (cored) brazing alloy, offers highest and stable brazing quality. Ideal for joining aluminum to copper, stainless steel, and mild steel.',
      href: '/products/aluminum-brazing',
    },
    {
      id: 'al-cu-sw-al02-cs',
      name: 'AL To Cu Brazing Filler Metal- SW- AL02-Cs',
      category: 'Aluminum Brazing',
      image: '/copper-brazing-rods-metallic.jpg',
      description: 'For better performance, clean and degrease the joint surfaces before using. Required effective pre-heating before using the product.',
      href: '/products/aluminum-brazing',
    },

    // Copper Brazing Products
    {
      id: 'bcup-2',
      name: 'BCup-2 (0% Silver) Copper Brazing',
      category: 'Copper Brazing',
      image: '/Solbraze-BCup-2.webp',
      description: 'Cu-Zn (Brass) brazing alloy with excellent wetting and flow properties for brazing mild steel and ferrous metals. Popular choice for mechanical applications.',
      href: '/products/copper-brazing',
    },
    {
      id: 'bcup-6',
      name: 'BCup-6 (2% Silver) Copper Brazing',
      category: 'Copper Brazing',
      image: '/bcup-6-copper-rods.webp',
      description: 'Cu-Zn-Ni (Brass) alloy with silver-like appearance and better corrosion resistance. Ideal for marine and outdoor applications.',
      href: '/products/copper-brazing',
    },
    {
      id: 'bcup-rods',
      name: 'BCup Copper Brazing Rods',
      category: 'Copper Brazing',
      image: '/copper-brazing-rods-display.webp',
      description: 'The most commonly used brazing filler metal types for joining copper tube and fittings. BCuP series has good electrical conductivity at the joined points.',
      href: '/products/copper-brazing',
    },
    {
      id: 'copper-flux-cored',
      name: 'Copper To Cu Flux Cored Brazing Filler Metal',
      category: 'Copper Brazing',
      image: '/copper-rods-vibha-package.webp',
      description: 'BCuP Alloy brazing filler metal where the B stands for Brazing, Cu is the chemical symbol for Copper, and P is the chemical symbol for Phosphorous.',
      href: '/products/copper-brazing',
    },

    // Brazing Flux Products
    {
      id: 'flux-0726-paste',
      name: 'Brazing Flux 0726 Paste',
      category: 'Brazing Flux',
      image: '/flux-0726-product.webp',
      description: 'Corrosive flux paste containing LiCl, NaCl, KCl, inorganic and complex fluorides. Well suited for manual and automated facilities for flame brazing aluminum alloys.',
      href: '/products/brazing-flux',
    },
    {
      id: 'brasoflux-281',
      name: 'Brasoflux - 281',
      category: 'Brazing Flux',
      image: '/brasoflux-281.webp',
      description: 'High-temperature white powder flux for gas welding/brazing of low, mild steel & copper. Easy removal of flux residues with good fluidity and medium to long life.',
      href: '/products/brazing-flux',
    },
    {
      id: 'brasoflux-291',
      name: 'Brasoflux - 291',
      category: 'Brazing Flux',
      image: '/brasoflux-291.webp',
      description: 'Universal braze welding white powder flux for copper, brass, bronze and steel. Sodium-free with high activity and long life flux. More effective at medium to higher working temperature.',
      href: '/products/brazing-flux',
    },
    {
      id: 'silflux-32',
      name: 'Brazing Flux- Silflux – 32',
      category: 'Brazing Flux',
      image: '/silflux-32.webp',
      description: 'General-purpose silver brazing powder flux with excellent capillary & fluidity. High activity medium life flux based on specification EN1045 FH10.',
      href: '/products/brazing-flux',
    },
    {
      id: 'silflux-50',
      name: 'BRAZING FLUXES- Silflux – 50',
      category: 'Brazing Flux',
      image: '/silflux-50.webp',
      description: 'Low-temperature silver brazing flux that spreads over the surface of parts to be brazed. Smooth fillets and fine joint appearance with good capillary and fluidity.',
      href: '/products/brazing-flux',
    },

    // Cleaning Chemicals
    {
      id: 'solclean-al',
      name: 'SolClean-AL Oil & Grease Cleaner',
      category: 'Cleaning Chemicals',
      image: '/puf-coating-103.webp',
      description: 'Water-based, inhibited, pre-soaked alkaline cleaner. Water soluble, safe on metals, emulsifies oil & grease, eco-friendly, non-flammable, rust inhibitive with long tank life.',
      href: '/products/cleaning-chemicals',
    },
    {
      id: 'solclean-mc',
      name: 'SolClean-MC Metal Cleaner',
      category: 'Cleaning Chemicals',
      image: '/polyklin-metal-cleaner.webp',
      description: 'Highly concentrated metal cleaner that effectively cleans and brightens the substrate. Biodegradable, non-toxic, non-hazardous, non-flammable with no fumes or reaction on skin.',
      href: '/products/cleaning-chemicals',
    },
    {
      id: 'puf-coating-103',
      name: 'ENIROOF PUF-103 Anti-Corrosive Coating',
      category: 'Cleaning Chemicals',
      image: '/eniklin-ultrasonic.webp',
      description: 'Cross-linked urethane based acrylic resin with translucent gloss finish coating. Excellent abrasion and heat resistance used as anti-corrosive coating for metal and articles.',
      href: '/products/cleaning-chemicals',
    },
  ]

  const categories = ['All Products', 'Aluminum Brazing', 'Copper Brazing', 'Brazing Flux', 'Cleaning Chemicals']
  
  const truncateText = (text: string, limit: number = 100) => {
    return text.length > limit ? text.substring(0, limit) + '...' : text
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-vibha-teal to-blue-600 min-h-[600px] flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Products</h1>
          <p className="text-white/90 text-xl">Comprehensive range of high-quality brazing materials and solutions</p>
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Content */}
              <div className="flex flex-col flex-grow p-6">
                {/* Category Badge */}
                <span className="inline-block w-fit bg-vibha-teal/10 text-vibha-teal text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {product.category}
                </span>

                {/* Product Name */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {truncateText(product.description, 120)}
                </p>

                {/* Read More Button */}
                <Link href={product.href}>
                  <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-md transition-colors">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
