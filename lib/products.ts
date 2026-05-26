export type ProductSpec = { label: string; value: string }
export type ProductHighlight = { label: string; value: string }

export type MarketplaceListing = {
  name: string
  url: string
}

export type Product = {
  slug: string
  name: string
  tagline?: string
  description?: string
  images?: string[]
  highlights?: ProductHighlight[]
  specs?: ProductSpec[]
  applications?: string[]
  benefits?: string[]
  datasheetUrl?: string
  catalogUrl?: string
  /** Direct product URLs on third-party marketplaces (Amazon, Flipkart, etc.). */
  amazonUrl?: string
  flipkartUrl?: string
  /** Extra marketplaces beyond Amazon/Flipkart (Indiamart, eBay, etc.). */
  marketplaces?: MarketplaceListing[]
}

/**
 * A node in the product taxonomy tree. A node can have child nodes
 * (further subcategories) and/or leaf products. Use `children` for
 * nested groups and `products` for terminal products.
 */
export type CatalogNode = {
  slug: string
  name: string
  description?: string
  bannerImage?: string
  children?: CatalogNode[]
  products?: Product[]
}

/**
 * Result of resolving a URL path against the tree.
 *  - `node`     — the matched grouping node (when the path ends on a category)
 *  - `product`  — the matched product (when the path ends on a product)
 *  - `trail`    — every node from root to current, for breadcrumb rendering
 */
export type ResolvedPath = {
  trail: CatalogNode[]
  node?: CatalogNode
  product?: Product
}

export const catalog: CatalogNode[] = [
  {
    slug: "brazing-filler-metals",
    name: "Brazing Filler Metals",
    description:
      "Aluminium, copper, silver and brass brazing rods, wires and rings for every joining requirement.",
    bannerImage: "/aluminum-brazing-rods-metallic.jpg",
    children: [
      {
        slug: "aluminium-to-aluminium",
        name: "Aluminium to Aluminium",
        description:
          "Aluminium-aluminium brazing filler metals in flux-mixed, flux-injected and solid filler formats.",
        bannerImage: "/alu-brazing-rods-package.webp",
        children: [
          {
            slug: "flux-mixed-sintered",
            name: "Flux Mixed / Sintered Brazing Rods & Rings",
            description:
              "Powder-metallurgy aluminium filler rods and rings with non-corrosive flux pre-mixed for consistent, repeatable joints.",
            bannerImage: "/aluminum-brazing-rods-bundle.jpg",
            products: [
              {
                slug: "ska-ta-tb-200",
                name: "SKA-TA/TB 200",
                tagline: "Flux Mixed / Sintered",
                description:
                  "Premium grade potassium fluoroaluminate flux-mixed aluminium brazing filler. Ensures superior joint strength and minimal residue.",
                images: [
                  "/alu-brazing-rods-package.webp",
                  "/aluminum-brazing-rods-bundle.jpg",
                  "/aluminum-brazing-rods-realistic.jpg",
                ],
                highlights: [
                  { label: "Melting Range", value: "560°C - 575°C" },
                  { label: "Form Available", value: "Rods / Rings" },
                ],
                specs: [
                  { label: "Product Code", value: "SKA-TA/TB 200" },
                  { label: "Composition", value: "Al-Si with K-Al-F flux (80:20)" },
                  { label: "Packaging", value: "25kg Drums / 10kg Cartons" },
                  { label: "Usage Temperature", value: "Up to 600°C" },
                ],
                applications: [
                  "Automotive radiators and heat exchangers",
                  "HVAC condensers and evaporators",
                  "Industrial aluminium assemblies",
                ],
                benefits: [
                  "Pre-mixed flux — no separate flux coating step",
                  "Consistent joint quality with minimal residue",
                  "Reduces brazing cycle time and labour",
                  "Stronger, leak-tight aluminium joints",
                ],
              },
              {
                slug: "ska-ta-tb-2002s",
                name: "SKA-TA/TB 2002s",
                tagline: "Flux Mixed / Sintered",
                description:
                  "Sintered aluminium brazing filler rod with optimised flux ratio for high-volume torch brazing of aluminium assemblies.",
                images: ["/SKA-TA2040s-1.webp"],
                highlights: [
                  { label: "Melting Range", value: "—" },
                  { label: "Form Available", value: "Rods / Rings" },
                ],
                specs: [{ label: "Product Code", value: "SKA-TA/TB 2002s" }],
                benefits: [
                  "Optimised flux ratio for high-volume torch brazing",
                  "Sintered for uniform composition",
                  "Strong, leak-free aluminium joints",
                  "Lower flux consumption per joint",
                ],
              },
              {
                slug: "ska-ta-tb-2040s",
                name: "SKA-TA/TB 2040s",
                tagline: "Flux Mixed / Sintered",
                description:
                  "Higher-flux variant of the SKA sintered series for demanding aluminium brazing applications.",
                images: [
                  "/products/ska-ta-tb-2040s/ring-01.png",
                  "/products/ska-ta-tb-2040s/ring-02.png",
                  "/products/ska-ta-tb-2040s/ring-03.png",
                  "/products/ska-ta-tb-2040s/ring-04.png",
                  "/products/ska-ta-tb-2040s/ring-05.png",
                  "/products/ska-ta-tb-2040s/ring-06.png",
                  "/products/ska-ta-tb-2040s/rod-01.png",
                  "/products/ska-ta-tb-2040s/rod-02.png",
                  "/products/ska-ta-tb-2040s/rod-03.png",
                  "/products/ska-ta-tb-2040s/rod-04.png",
                  "/products/ska-ta-tb-2040s/rod-05.png",
                  "/products/ska-ta-tb-2040s/rod-06.png",
                  "/products/ska-ta-tb-2040s/rod-07.png",
                ],
                highlights: [
                  { label: "Melting Range", value: "—" },
                  { label: "Form Available", value: "Rods / Rings" },
                ],
                specs: [{ label: "Product Code", value: "SKA-TA/TB 2040s" }],
                benefits: [
                  "Higher flux loading for demanding joints",
                  "Excellent wetting on oxidised surfaces",
                  "Available as rods or rings",
                  "Reduces rejection rate in production",
                ],
              },
            ],
          },
          {
            slug: "flux-injected-cored",
            name: "Flux Injected / Cored Filler Wire & Rings",
            description:
              "Seamless flux-cored aluminium brazing wire and rings engineered for automated and high-volume production.",
            bannerImage: "/alu-brazing-wires-spool.webp",
            products: [
              {
                slug: "su-ta-200",
                name: "SU-TA 200",
                tagline: "Flux Injected / Cored",
                description:
                  "Seamless flux-cored aluminium brazing wire with patented internal flux injection for consistent automated brazing.",
                images: [
                  "/products/su-ta-200/spool-01.png",
                  "/products/su-ta-200/spool-02.png",
                  "/products/su-ta-200/spool-03.png",
                  "/products/su-ta-200/spool-04.png",
                  "/products/su-ta-200/spool-05.png",
                  "/products/su-ta-200/spool-06.png",
                  "/products/su-ta-200/spool-07.png",
                  "/products/su-ta-200/spool-08.png",
                  "/products/su-ta-200/spool-09.png",
                  "/products/su-ta-200/spool-10.png",
                  "/products/su-ta-200/pouch-01.png",
                  "/products/su-ta-200/pouch-02.png",
                  "/products/su-ta-200/pouch-03.png",
                  "/products/su-ta-200/pouch-04.png",
                  "/products/su-ta-200/pouch-05.png",
                  "/products/su-ta-200/pouch-06.png",
                  "/products/su-ta-200/pouch-07.png",
                  "/products/su-ta-200/pouch-08.png",
                  "/products/su-ta-200/pouch-09.png",
                  "/products/su-ta-200/pouch-10.png",
                  "/products/su-ta-200/pouch-11.png",
                  "/products/su-ta-200/pouch-12.png",
                  "/products/su-ta-200/pouch-13.png",
                  "/products/su-ta-200/pouch-14.png",
                ],
                highlights: [
                  { label: "Melting Range", value: "577°C - 605°C" },
                  { label: "Form Available", value: "Flux-Cored Wire" },
                ],
                specs: [
                  { label: "Product Code", value: "SU-TA 200" },
                  { label: "Composition", value: "Al-Si with internal K-Al-F flux" },
                  { label: "Packaging", value: "5kg / 10kg Spools" },
                ],
                benefits: [
                  "Seamless flux core — no spillage or waste",
                  "Ideal for automated and robotic brazing",
                  "Stable feed and consistent flux delivery",
                  "Lower scrap and rework rates",
                ],
              },
              {
                slug: "su-ta-2002s",
                name: "SU-TA 2002s",
                tagline: "Flux Injected / Cored",
                description:
                  "Higher-output flux-cored variant for robotic and inline aluminium brazing cells.",
                images: ["/SU-TA-200.webp"],
                specs: [{ label: "Product Code", value: "SU-TA 2002s" }],
                benefits: [
                  "Higher output for inline robotic cells",
                  "Reliable feed in long production runs",
                  "Consistent flux delivery throughout spool",
                  "Reduces overall cycle time",
                ],
              },
              {
                slug: "su-ta-2040s",
                name: "SU-TA 2040s",
                tagline: "Flux Injected / Cored",
                description:
                  "Flux-cored aluminium brazing wire with enriched flux loading for difficult joints.",
                images: [
                  "/products/su-ta-2040s/pouch-01.png",
                  "/products/su-ta-2040s/pouch-02.png",
                  "/products/su-ta-2040s/pouch-03.png",
                  "/products/su-ta-2040s/pouch-04.png",
                  "/products/su-ta-2040s/pouch-05.png",
                  "/products/su-ta-2040s/pouch-06.png",
                  "/products/su-ta-2040s/pouch-07.png",
                  "/products/su-ta-2040s/pouch-08.png",
                ],
                specs: [{ label: "Product Code", value: "SU-TA 2040s" }],
                benefits: [
                  "Enriched flux for difficult joints",
                  "Excellent gap-filling capability",
                  "Reduces voids and leak failures",
                  "Works on oxidised aluminium surfaces",
                ],
              },
              {
                slug: "sw-al-1240",
                name: "SW-AL-1240",
                tagline: "Flux Injected / Cored",
                description:
                  "Aluminium-silicon flux-cored wire for general-purpose flame and furnace brazing.",
                images: [
                  "/products/sw-al-1240/spool-01.png",
                  "/products/sw-al-1240/spool-02.png",
                  "/products/sw-al-1240/spool-03.png",
                  "/products/sw-al-1240/spool-04.png",
                  "/products/sw-al-1240/spool-05.png",
                  "/products/sw-al-1240/spool-06.png",
                  "/products/sw-al-1240/spool-07.png",
                  "/products/sw-al-1240/spool-08.png",
                  "/products/sw-al-1240/spool-09.png",
                  "/products/sw-al-1240/spool-10.png",
                  "/products/sw-al-1240/spool-11.png",
                  "/products/sw-al-1240/spool-12.png",
                  "/products/sw-al-1240/spool-13.png",
                  "/products/sw-al-1240/spool-14.png",
                  "/products/sw-al-1240/wire-01.png",
                  "/products/sw-al-1240/wire-02.png",
                  "/products/sw-al-1240/wire-03.png",
                  "/products/sw-al-1240/wire-04.png",
                  "/products/sw-al-1240/wire-05.png",
                  "/products/sw-al-1240/wire-06.png",
                  "/products/sw-al-1240/wire-07.png",
                  "/products/sw-al-1240/wire-08.png",
                  "/products/sw-al-1240/wire-09.png",
                  "/products/sw-al-1240/wire-10.png",
                  "/products/sw-al-1240/wire-11.png",
                  "/products/sw-al-1240/wire-12.png",
                  "/products/sw-al-1240/wire-13.png",
                  "/products/sw-al-1240/wire-14.png",
                  "/products/sw-al-1240/rod-01.png",
                  "/products/sw-al-1240/rod-02.png",
                  "/products/sw-al-1240/rod-03.png",
                  "/products/sw-al-1240/rod-04.png",
                  "/products/sw-al-1240/rod-05.png",
                  "/products/sw-al-1240/rod-06.png",
                  "/products/sw-al-1240/rod-07.png",
                  "/products/sw-al-1240/rod-08.png",
                  "/products/sw-al-1240/rod-09.png",
                  "/products/sw-al-1240/rod-10.png",
                  "/products/sw-al-1240/pouch-01.png",
                  "/products/sw-al-1240/pouch-02.png",
                  "/products/sw-al-1240/pouch-03.png",
                  "/products/sw-al-1240/pouch-04.png",
                  "/products/sw-al-1240/pouch-05.png",
                  "/products/sw-al-1240/pouch-06.png",
                  "/products/sw-al-1240/pouch-07.png",
                  "/products/sw-al-1240/pouch-08.png",
                  "/products/sw-al-1240/pouch-09.png",
                ],
                highlights: [
                  { label: "Melting Range", value: "590°C - 615°C" },
                  { label: "Form Available", value: "Wire" },
                ],
                specs: [
                  { label: "Product Code", value: "SW-AL-1240" },
                  { label: "Composition", value: "Al-Si 12%" },
                ],
                benefits: [
                  "Versatile Al-Si filler for general use",
                  "Smooth flow and clean joint finish",
                  "Suitable for flame and furnace brazing",
                  "Cost-effective for high-volume production",
                ],
              },
            ],
          },
          {
            slug: "solid-filler",
            name: "Solid Filler Wire, Rod & Rings",
            description:
              "Solid aluminium filler metals to AWS A5.10 for TIG, MIG and torch brazing of aluminium alloys.",
            bannerImage: "/aluminum-wire-coils-industrial.jpg",
            products: [
              {
                slug: "er-4047",
                name: "ER-4047",
                tagline: "Solid Filler",
                description:
                  "AWS A5.10 ER-4047 aluminium-silicon filler with high silicon content for low-temperature welding and brazing of aluminium castings.",
                images: [
                  "/aluminum-brazing-wires-realistic.jpg",
                  "/alu-brazing-wires-spool.webp",
                ],
                highlights: [
                  { label: "Melting Range", value: "577°C - 582°C" },
                  { label: "Form Available", value: "TIG Rods / MIG Wire" },
                ],
                specs: [
                  { label: "Product Code", value: "ER-4047" },
                  { label: "Composition", value: "Al-Si 11-13%" },
                ],
                benefits: [
                  "High silicon content reduces cracking",
                  "Lower melting point, less heat distortion",
                  "Excellent for aluminium casting repair",
                  "Good fluidity and joint strength",
                ],
              },
              {
                slug: "er-4043",
                name: "ER-4043",
                tagline: "Solid Filler",
                description:
                  "AWS A5.10 ER-4043 general-purpose Al-Si filler for welding 6xxx series aluminium alloys.",
                images: ["/aluminum-brazing-wires-realistic.jpg"],
                specs: [{ label: "Product Code", value: "ER-4043" }],
                benefits: [
                  "General-purpose filler for 6xxx alloys",
                  "Smooth, clean weld bead appearance",
                  "Good corrosion resistance",
                  "Reduces hot cracking risk",
                ],
              },
              {
                slug: "er-1100",
                name: "ER-1100",
                tagline: "Solid Filler",
                description:
                  "Commercially pure aluminium filler (>99%) for welding 1xxx series aluminium where corrosion resistance is critical.",
                images: ["/aluminum-brazing-wires-realistic.jpg"],
                specs: [{ label: "Product Code", value: "ER-1100" }],
                benefits: [
                  "99% pure aluminium for high purity work",
                  "Excellent electrical and thermal conductivity",
                  "Superior corrosion resistance",
                  "Ideal for chemical and food equipment",
                ],
              },
              {
                slug: "er-5346",
                name: "ER-5346",
                tagline: "Solid Filler",
                description:
                  "Al-Mg solid filler for welding 5xxx series aluminium with excellent strength and corrosion resistance.",
                images: ["/aluminum-brazing-wires-realistic.jpg"],
                specs: [{ label: "Product Code", value: "ER-5346" }],
                benefits: [
                  "High-strength Al-Mg filler for 5xxx alloys",
                  "Excellent saltwater corrosion resistance",
                  "Strong, ductile weld joints",
                  "Good colour match after anodising",
                ],
              },
            ],
          },
        ],
      },
      {
        slug: "aluminium-to-copper",
        name: "Aluminium to Copper",
        description:
          "Specialist filler metals for joining aluminium to copper in HVAC, refrigeration and electrical applications.",
        bannerImage: "/copper-brazing-rods-metallic.jpg",
        products: [
          {
            slug: "su-tc-150",
            name: "SU-TC 150",
            tagline: "Aluminium to Copper",
            description:
              "Seamless flux-cored brazing wire for joining aluminium to copper, stainless steel and mild steel at low temperatures.",
            images: [
              "/products/su-tc-150/spool-01.png",
              "/products/su-tc-150/spool-02.png",
              "/products/su-tc-150/spool-03.png",
              "/products/su-tc-150/spool-04.png",
              "/products/su-tc-150/spool-05.png",
              "/products/su-tc-150/spool-06.png",
              "/products/su-tc-150/wire-01.png",
              "/products/su-tc-150/wire-02.png",
              "/products/su-tc-150/wire-03.png",
              "/products/su-tc-150/wire-04.png",
              "/products/su-tc-150/wire-05.png",
              "/products/su-tc-150/wire-06.png",
              "/products/su-tc-150/wire-07.png",
              "/products/su-tc-150/wire-08.png",
              "/products/su-tc-150/wire-09.png",
              "/products/su-tc-150/wire-10.png",
            ],
            highlights: [
              { label: "Melting Range", value: "150°C+" },
              { label: "Form Available", value: "Flux-Cored Wire" },
            ],
            specs: [{ label: "Product Code", value: "SU-TC 150" }],
            benefits: [
              "Joins aluminium to copper at low temperature",
              "Seamless flux core for clean joints",
              "Eliminates dissimilar-metal joining issues",
              "Ideal for HVAC and refrigeration assemblies",
            ],
          },
          {
            slug: "sw-al-02",
            name: "SW-AL-02",
            tagline: "Aluminium to Copper",
            description:
              "Aluminium-copper brazing filler with caesium-modified flux for excellent wetting on dissimilar metal joints.",
            images: [
              "/products/sw-al-02/cs-01.png",
              "/products/sw-al-02/cs-02.png",
              "/products/sw-al-02/cs-03.png",
              "/products/sw-al-02/cs-04.png",
              "/products/sw-al-02/cs-05.png",
              "/products/sw-al-02/cs-06.png",
              "/products/sw-al-02/cs-07.png",
              "/products/sw-al-02/cs-08.png",
              "/products/sw-al-02/cs-09.png",
              "/products/sw-al-02/cs-10.png",
              "/products/sw-al-02/cs-11.png",
              "/products/sw-al-02/cs-12.png",
              "/products/sw-al-02/wire-01.png",
              "/products/sw-al-02/wire-02.png",
              "/products/sw-al-02/wire-03.png",
              "/products/sw-al-02/wire-04.png",
              "/products/sw-al-02/wire-05.png",
              "/products/sw-al-02/wire-06.png",
              "/products/sw-al-02/wire-07.png",
              "/products/sw-al-02/wire-08.png",
              "/products/sw-al-02/wire-09.png",
              "/products/sw-al-02/wire-10.png",
              "/products/sw-al-02/wire-11.png",
              "/products/sw-al-02/wire-12.png",
              "/products/sw-al-02/wire-13.png",
            ],
            specs: [{ label: "Product Code", value: "SW-AL-02" }],
            benefits: [
              "Caesium-modified flux for superior wetting",
              "Joins aluminium and copper reliably",
              "Lower brazing temperature, less distortion",
              "Strong, leak-proof dissimilar-metal joints",
            ],
          },
        ],
      },
      {
        slug: "copper-silver-brass",
        name: "Copper / Silver / Brass",
        description:
          "BCuP phos-copper, silicon bronze and silver-bearing alloys for plumbing, refrigeration and precision joining.",
        bannerImage: "/copper-brazing-process-industrial.jpg",
        products: [
          {
            slug: "bcup-2",
            name: "BCuP-2 (0% Silver) Copper Phosphorus",
            tagline: "Copper / Silver / Brass",
            description:
              "Silver-free copper-phosphorus brazing alloy for joining copper-to-copper without flux. Wire / rod / ring formats.",
            images: [
              "/products/bcup-2/rod-01.png",
              "/products/bcup-2/rod-02.png",
              "/products/bcup-2/rod-03.png",
              "/products/bcup-2/rod-04.png",
              "/products/bcup-2/rod-05.png",
              "/products/bcup-2/rod-06.png",
              "/products/bcup-2/rod-07.png",
            ],
            specs: [{ label: "Product Code", value: "BCuP-2" }],
            benefits: [
              "Self-fluxing on copper — no flux needed",
              "Economical silver-free formulation",
              "Strong, leak-tight copper-to-copper joints",
              "Ideal for plumbing and refrigeration",
            ],
          },
          {
            slug: "bcup-6",
            name: "BCuP-6 (2% Silver) Copper Phosphorus",
            tagline: "Copper / Silver / Brass",
            description:
              "2% silver copper-phosphorus filler with improved ductility and gap-filling. Wire / rod / ring formats.",
            images: [
              "/products/bcup-6/rod-01.png",
              "/products/bcup-6/rod-02.png",
              "/products/bcup-6/rod-03.png",
              "/products/bcup-6/rod-04.png",
              "/products/bcup-6/rod-05.png",
              "/products/bcup-6/rod-06.png",
              "/products/bcup-6/rod-07.png",
            ],
            specs: [{ label: "Product Code", value: "BCuP-6" }],
            benefits: [
              "2% silver improves ductility and gap-filling",
              "Self-fluxing on copper joints",
              "Withstands vibration and thermal stress",
              "Better flow than silver-free BCuP-2",
            ],
          },
          {
            slug: "brass-silicon-bronze",
            name: "Brass (Silicon Bronze)",
            tagline: "Copper / Silver / Brass",
            description:
              "Silicon-bronze brazing filler for joining brass, copper and steel with excellent corrosion resistance. Wire / rod / ring formats.",
            images: ["/copper-brazing-rods-display.webp"],
            specs: [{ label: "Product Code", value: "Silicon Bronze" }],
            benefits: [
              "Joins brass, copper and steel",
              "Excellent corrosion resistance",
              "Strong, low-porosity joints",
              "Wide service temperature range",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "brazing-fluxes-paste",
    name: "Brazing Fluxes & Metal Paste",
    description:
      "Furnace, torch and paste-form fluxes plus ready-to-use brazing pastes for aluminium, copper, brass, steel and nickel base metals.",
    bannerImage: "/brazing-flux-powder-realistic.jpg",
    children: [
      {
        slug: "furnace-flux",
        name: "Furnace Brazing Flux Powder & Paste",
        description:
          "Non-corrosive furnace brazing fluxes for controlled-atmosphere aluminium brazing lines.",
        bannerImage: "/aluminum-flux-powder-container-realistic.jpg",
        products: [
          {
            slug: "assty-non-corrosive",
            name: "ASSTY — Non-Corrosive Flux Powder",
            tagline: "Furnace Brazing Flux",
            description:
              "Non-corrosive potassium fluoroaluminate flux powder for furnace brazing aluminium heat exchangers.",
            images: ["/aluminum-flux-powder-container-realistic.jpg"],
            specs: [{ label: "Product Code", value: "ASSTY" }],
            benefits: [
              "Non-corrosive — no post-braze cleaning",
              "Excellent wetting on aluminium oxides",
              "Designed for CAB furnace brazing lines",
              "Long shelf life when stored sealed",
            ],
          },
          {
            slug: "paint-flux",
            name: "Paint Flux",
            tagline: "Furnace Brazing Flux",
            description:
              "Brushable paint-form flux for selective application on furnace-brazed aluminium assemblies.",
            images: ["/brazing-flux-powder-realistic.jpg"],
            specs: [{ label: "Product Code", value: "Paint Flux" }],
            benefits: [
              "Brushable for selective joint application",
              "Reduces flux waste and overspray",
              "Easy positioning before furnace cycle",
              "Compatible with controlled-atmosphere brazing",
            ],
          },
          {
            slug: "flux-slurry",
            name: "Flux Slurry",
            tagline: "Furnace Brazing Flux",
            description:
              "Ready-to-spray flux slurry for inline coating of aluminium heat exchanger components.",
            images: ["/brazing-flux-powder-materials.jpg"],
            specs: [{ label: "Product Code", value: "Flux Slurry" }],
            benefits: [
              "Ready-to-spray for inline coating",
              "Uniform flux deposition on assemblies",
              "Reduces manual application labour",
              "Ideal for heat-exchanger production",
            ],
          },
          {
            slug: "cs-flux",
            name: "CS Flux",
            tagline: "Furnace Brazing Flux",
            description:
              "Caesium-modified flux for furnace brazing of high-magnesium aluminium alloys.",
            images: ["/brazing-flux-powder-realistic.jpg"],
            specs: [{ label: "Product Code", value: "CS Flux" }],
            benefits: [
              "Caesium-modified for high-magnesium alloys",
              "Supports higher brazing temperatures",
              "Joins difficult aluminium alloys reliably",
              "Reduces flux-related joint failures",
            ],
          },
        ],
      },
      {
        slug: "torch-flux",
        name: "Torch Brazing Flux Powder & Paste",
        description:
          "Powder and paste fluxes for manual torch brazing of aluminium, brass and silver brazing operations.",
        bannerImage: "/flux-application-brazing-process.jpg",
        products: [
          {
            slug: "0726-powder",
            name: "0726 — Aluminium Brazing Flux Powder",
            tagline: "Torch Brazing Flux",
            description:
              "Corrosive flux powder containing LiCl, NaCl, KCl, inorganic and complex fluorides — for flame brazing aluminium alloys.",
            images: ["/Flux-0726.jpg"],
            specs: [{ label: "Product Code", value: "0726" }],
            benefits: [
              "High-activity flux for flame brazing aluminium",
              "Excellent oxide removal",
              "Strong, reliable joint quality",
              "Versatile across aluminium alloys",
            ],
          },
          {
            slug: "0726-p-paste",
            name: "0726-P — Aluminium Brazing Flux Paste",
            tagline: "Torch Brazing Flux",
            description:
              "Pre-mixed paste version of 0726 for precise manual application during torch brazing.",
            images: ["/flux-0726-product.webp"],
            specs: [{ label: "Product Code", value: "0726-P" }],
            benefits: [
              "Pre-mixed paste — easy manual use",
              "Precise application with less waste",
              "Good shelf stability",
              "Consistent results across operators",
            ],
          },
          {
            slug: "0726-2zg-paste",
            name: "0726-2zG — Aluminium Brazing Flux Paste",
            tagline: "Torch Brazing Flux",
            description:
              "High-activity flux paste variant of 0726 for difficult aluminium torch brazing applications.",
            images: ["/flux-0726-product.webp"],
            specs: [{ label: "Product Code", value: "0726-2zG" }],
            benefits: [
              "High-activity paste for difficult joints",
              "Strong oxide-removal action",
              "Reliable on tough aluminium alloys",
              "Reduces rework and rejections",
            ],
          },
          {
            slug: "brasoflux-281",
            name: "Brasoflux-281 — Brass Brazing Flux Powder",
            tagline: "Torch Brazing Flux",
            description:
              "High-temperature white powder flux for gas welding / brazing of mild steel and copper. Easy removal of residues.",
            images: ["/brasoflux-281.webp"],
            specs: [{ label: "Product Code", value: "Brasoflux-281" }],
            benefits: [
              "High-temperature flux for steel and copper",
              "Easy residue removal after brazing",
              "Stable performance under torch heat",
              "Long working time",
            ],
          },
          {
            slug: "brasoflux-291",
            name: "Brasoflux-291 — Brass Brazing Flux Powder",
            tagline: "Torch Brazing Flux",
            description:
              "Universal brass / bronze / steel brazing flux. Sodium-free with high activity.",
            images: ["/brasoflux-291.webp"],
            specs: [{ label: "Product Code", value: "Brasoflux-291" }],
            benefits: [
              "Universal flux for brass / bronze / steel",
              "Sodium-free for cleaner joints",
              "High activity, fast wetting",
              "Wide working-temperature window",
            ],
          },
          {
            slug: "silflux-32",
            name: "Silflux-32 — Silver Brazing Flux Powder",
            tagline: "Torch Brazing Flux",
            description:
              "General-purpose silver brazing powder flux with excellent capillary action and fluidity. EN1045 FH10.",
            images: ["/silflux-32.webp"],
            specs: [{ label: "Product Code", value: "Silflux-32" }],
            benefits: [
              "EN1045 FH10 silver brazing flux",
              "Excellent capillary action",
              "Clean, fluid joint formation",
              "Reliable on copper, brass and steel",
            ],
          },
          {
            slug: "silflux-50",
            name: "Silflux-50 — Silver Brazing Flux Powder",
            tagline: "Torch Brazing Flux",
            description:
              "Low-temperature silver brazing flux that spreads smoothly. Fine fillet joint appearance.",
            images: ["/silflux-50.webp"],
            specs: [{ label: "Product Code", value: "Silflux-50" }],
            benefits: [
              "Low-temperature silver brazing flux",
              "Smooth spreading and fine fillets",
              "Clean post-braze residue",
              "Suitable for precision joining",
            ],
          },
        ],
      },
      {
        slug: "brazing-metal-paste",
        name: "Brazing / Metal Paste",
        description:
          "Pre-mixed brazing pastes combining filler and flux in syringe or container format for precision application.",
        bannerImage: "/brazing-paste-metal-joining.jpg",
        products: [
          {
            slug: "al-4045-paste",
            name: "AL-4045 — Aluminium Brazing Paste",
            tagline: "Brazing / Metal Paste",
            description:
              "Aluminium brazing paste with AL-4045 filler for furnace brazing of aluminium heat exchanger joints.",
            images: ["/alu-brazing-paste-syringes.webp"],
            specs: [{ label: "Product Code", value: "AL-4045" }],
            benefits: [
              "Pre-mixed filler + flux — one-step application",
              "Ideal for furnace brazing heat exchangers",
              "Reduces operator variability",
              "Strong, leak-tight aluminium joints",
            ],
          },
          {
            slug: "al-4047-paste",
            name: "AL-4047 — Aluminium Brazing Paste",
            tagline: "Brazing / Metal Paste",
            description:
              "Aluminium brazing paste with AL-4047 high-silicon filler for low-temperature aluminium brazing.",
            images: ["/alu-brazing-paste-syringes.webp"],
            specs: [{ label: "Product Code", value: "AL-4047" }],
            benefits: [
              "High-silicon filler, lower melt temperature",
              "Less distortion in thin sections",
              "Suitable for automated dispensing",
              "Excellent flow and joint strength",
            ],
          },
          {
            slug: "copper-brazing-paste",
            name: "Copper Brazing Paste",
            tagline: "Brazing / Metal Paste",
            description:
              "Copper-based brazing paste for furnace brazing of copper and copper alloy joints.",
            images: ["/copper-brazing-rods-display.webp"],
            specs: [{ label: "Product Code", value: "Copper Paste" }],
            benefits: [
              "Pre-mixed for furnace brazing",
              "Clean copper-to-copper joints",
              "Reduces hand-fluxing labour",
              "Consistent dispensing in automation",
            ],
          },
          {
            slug: "bni2-paste",
            name: "BNi-2 — Nickel Brazing Paste",
            tagline: "Brazing / Metal Paste",
            description:
              "Nickel-chromium-boron brazing paste (BNi-2) for high-temperature joints in stainless steel.",
            images: ["/brazing-paste-metal-joining.jpg"],
            specs: [{ label: "Product Code", value: "BNi-2" }],
            benefits: [
              "Ni-Cr-B paste for high-temperature joints",
              "Strong, durable on stainless steel",
              "Excellent corrosion and oxidation resistance",
              "Good wetting in vacuum furnaces",
            ],
          },
          {
            slug: "bni7-paste",
            name: "BNi-7 — Nickel Brazing Paste",
            tagline: "Brazing / Metal Paste",
            description:
              "Phosphorus-bearing nickel brazing paste (BNi-7) for honeycomb structures and turbine components.",
            images: ["/brazing-paste-metal-joining.jpg"],
            specs: [{ label: "Product Code", value: "BNi-7" }],
            benefits: [
              "Phosphorus-bearing for honeycomb structures",
              "Lower brazing temperature than other BNi grades",
              "Ideal for turbine components",
              "Resists thermal fatigue",
            ],
          },
          {
            slug: "bni12-paste",
            name: "BNi-12 — Nickel Brazing Paste",
            tagline: "Brazing / Metal Paste",
            description:
              "Nickel-chromium brazing paste (BNi-12) for vacuum brazing of stainless steel components.",
            images: ["/brazing-paste-metal-joining.jpg"],
            specs: [{ label: "Product Code", value: "BNi-12" }],
            benefits: [
              "Ni-Cr paste for vacuum brazing",
              "High-strength stainless steel joints",
              "Excellent corrosion resistance",
              "Consistent dispensing in automation",
            ],
          },
          {
            slug: "bni15-paste",
            name: "BNi-15 — Nickel Brazing Paste",
            tagline: "Brazing / Metal Paste",
            description:
              "Specialty nickel brazing paste (BNi-15) for high-strength aerospace and medical brazing.",
            images: ["/brazing-paste-metal-joining.jpg"],
            specs: [{ label: "Product Code", value: "BNi-15" }],
            benefits: [
              "Specialty paste for aerospace and medical",
              "High-strength critical joints",
              "Excellent corrosion resistance",
              "Vacuum-braze compatible",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "cleaning-chemicals",
    name: "Industrial Cleaning Chemicals",
    description:
      "Eco-friendly degreasers, metal cleaners and protective coatings for surface preparation and post-braze finishing.",
    bannerImage: "/polyklin-metal-cleaner.webp",
    products: [
      {
        slug: "val-1200",
        name: "VAL-1200 — Oil & Grease Cleaner",
        tagline: "Cleaning Chemicals",
        description:
          "Water-based, inhibited, pre-soak alkaline cleaner. Safe on metals, eco-friendly, non-flammable, rust inhibitive.",
        images: ["/polyklin-rust-remover.webp"],
        specs: [{ label: "Product Code", value: "VAL-1200" }],
        benefits: [
          "Water-based, non-flammable cleaner",
          "Eco-friendly and rust-inhibitive",
          "Safe on most metals",
          "Effective on heavy oil and grease",
        ],
      },
      {
        slug: "vac-3200",
        name: "VAC-3200 — Metal Cleaner / Shiner",
        tagline: "Cleaning Chemicals",
        description:
          "Highly concentrated metal cleaner and shiner. Biodegradable, non-toxic, non-hazardous, non-flammable.",
        images: ["/polyklin-metal-cleaner.webp"],
        specs: [{ label: "Product Code", value: "VAC-3200" }],
        benefits: [
          "Concentrated metal cleaner and shiner",
          "Biodegradable, non-toxic, non-hazardous",
          "Restores metallic surface gloss",
          "Effective at low dilution ratios",
        ],
      },
      {
        slug: "vac-5200",
        name: "VAC-5200 — Aluminium Cleaner / Shiner",
        tagline: "Cleaning Chemicals",
        description:
          "Specialised aluminium cleaner and brightener for post-braze finishing of aluminium components.",
        images: ["/eniklin-ultrasonic.webp"],
        specs: [{ label: "Product Code", value: "VAC-5200" }],
        benefits: [
          "Specialised aluminium brightener",
          "Restores post-braze appearance",
          "Safe on thin aluminium sections",
          "Removes oxide film effectively",
        ],
      },
      {
        slug: "puf-103",
        name: "PUF 103 — Anti-Corrosive Clear Lacquer Coating",
        tagline: "Cleaning Chemicals",
        description:
          "Cross-linked urethane-based clear lacquer coating with abrasion and heat resistance for finished metal surfaces.",
        images: ["/puf-coating-103.webp"],
        specs: [{ label: "Product Code", value: "PUF 103" }],
        benefits: [
          "Clear urethane lacquer — no colour change",
          "Abrasion and heat resistant",
          "Anti-corrosive protective film",
          "Long-lasting industrial finish",
        ],
      },
      {
        slug: "paracoat-silver",
        name: "Paracoat Silver — Anti-Corrosive Silver Coating",
        tagline: "Cleaning Chemicals",
        description:
          "Silver-pigmented anti-corrosive coating for outdoor and industrial metal surfaces.",
        images: ["/puf-coating-103.webp"],
        specs: [{ label: "Product Code", value: "Paracoat Silver" }],
        benefits: [
          "Silver-pigmented anti-corrosive coating",
          "For outdoor and industrial surfaces",
          "Heat-tolerant and weather-resistant",
          "Attractive metallic finish",
        ],
      },
    ],
  },
]

/**
 * Brand attribution rule:
 *   - Products whose code starts with "SU" or "SKA" are sourced from
 *     SUN KWANG KOREA (e.g. SU-TA 200, SU-TC 150, SKA-TA/TB 200).
 *   - All other products (SW-*, ER-*, BCuP-*, fluxes, pastes, cleaning
 *     chemicals, etc.) are sourced from SOLBRAZE.
 */
export function getProductBrand(product: Product): "SUN KWANG KOREA" | "SOLBRAZE" {
  const code = (
    product.specs?.find((s) => s.label === "Product Code")?.value ??
    product.name
  )
    .trim()
    .toUpperCase()
  if (/^(SU|SKA)([-\s]|$)/.test(code)) return "SUN KWANG KOREA"
  return "SOLBRAZE"
}

/**
 * Return the list of marketplaces where this product is (or can be) bought.
 * Amazon + Flipkart always appear — if no explicit URL is set on the product,
 * a search URL using the product name is used as a fallback so the buttons
 * stay functional until real listing URLs are added.
 */
export function getProductMarketplaces(product: Product): MarketplaceListing[] {
  const query = encodeURIComponent(`Vibha ${product.name}`)
  const amazon: MarketplaceListing = {
    name: "Amazon",
    url: product.amazonUrl ?? `https://www.amazon.in/s?k=${query}`,
  }
  const flipkart: MarketplaceListing = {
    name: "Flipkart",
    url: product.flipkartUrl ?? `https://www.flipkart.com/search?q=${query}`,
  }
  return [amazon, flipkart, ...(product.marketplaces ?? [])]
}

/**
 * Walk the tree by URL segments and return what was matched. Each segment
 * may resolve to either a child node or a product; the last segment can be
 * a product.
 */
export function resolvePath(segments: string[]): ResolvedPath | null {
  const trail: CatalogNode[] = []
  let current: CatalogNode | undefined
  let pool: CatalogNode[] = catalog

  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i]
    const next = pool.find((n) => n.slug === seg)

    if (next) {
      current = next
      trail.push(next)
      pool = next.children ?? []
      continue
    }

    // Try resolving the segment as a product within the current node
    if (current && i === segments.length - 1) {
      const product = current.products?.find((p) => p.slug === seg)
      if (product) return { trail, node: current, product }
    }

    return null
  }

  if (!current) return null
  return { trail, node: current }
}

/**
 * Flatten the tree to every walkable URL path. Used by Next.js for
 * generateStaticParams.
 */
export function allPaths(): string[][] {
  const out: string[][] = []
  const walk = (nodes: CatalogNode[], prefix: string[]) => {
    for (const n of nodes) {
      const here = [...prefix, n.slug]
      out.push(here)
      if (n.children) walk(n.children, here)
      if (n.products) {
        for (const p of n.products) {
          out.push([...here, p.slug])
        }
      }
    }
  }
  walk(catalog, [])
  return out
}
