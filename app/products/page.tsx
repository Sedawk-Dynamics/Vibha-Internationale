import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CatalogShell } from "@/components/catalog-shell"
import { catalog, type CatalogNode } from "@/lib/products"

function countLeaves(node: CatalogNode): number {
  const direct = node.products?.length ?? 0
  const nested = (node.children ?? []).reduce(
    (sum, c) => sum + countLeaves(c),
    0,
  )
  return direct + nested
}

export default function ProductsPage() {
  return (
    <CatalogShell crumbs={[{ label: "All Products" }]}>
      <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Product Catalog
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Browse our full range of brazing filler metals, fluxes, pastes and industrial
          cleaning chemicals. Select a category to explore subcategories and individual grades.
        </p>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {catalog.map((cat) => {
          const total = countLeaves(cat)
          return (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-vibha-teal/60 transition-all flex flex-col"
            >
              <div className="relative aspect-[16/9] bg-muted overflow-hidden">
                <Image
                  src={cat.bannerImage ?? "/placeholder.svg"}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 90vw"
                />
              </div>
              <div className="p-5 flex flex-col grow">
                <h3 className="text-xl font-bold text-foreground group-hover:text-vibha-teal transition-colors">
                  {cat.name}
                </h3>
                {cat.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2 grow">
                    {cat.description}
                  </p>
                )}
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {total === 0
                      ? "Coming soon"
                      : `${total} product${total === 1 ? "" : "s"}`}
                  </span>
                  <span className="flex items-center gap-1 text-vibha-teal font-semibold">
                    Browse <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </CatalogShell>
  )
}
