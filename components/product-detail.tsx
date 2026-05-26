"use client"

import { Download, FileText, BadgeCheck, ExternalLink, ShoppingBag, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ProductGallery } from "@/components/product-gallery"
import { RequestQuoteDialog } from "@/components/request-quote-dialog"
import {
  getProductBrand,
  getProductMarketplaces,
  type Product,
} from "@/lib/products"

interface ProductDetailProps {
  product: Product
  viewApplicationsHref?: string
}

export function ProductDetail({
  product,
  viewApplicationsHref,
}: ProductDetailProps) {
  const images = product.images?.length ? product.images : ["/placeholder.svg"]
  const highlights = product.highlights ?? []
  const benefits = product.benefits ?? []
  const baseSpecs = product.specs ?? []
  const brand = getProductBrand(product)
  const brandColorClass =
    brand === "SUN KWANG KOREA"
      ? "bg-vibha-purple/10 text-vibha-purple border-vibha-purple/30"
      : "bg-vibha-orange/10 text-vibha-orange border-vibha-orange/30"
  // Prepend Brand row to specs (don't mutate the original)
  const specs = [{ label: "Brand", value: brand }, ...baseSpecs]
  const marketplaces = getProductMarketplaces(product)

  return (
    <div className="space-y-6">
      <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Gallery — rotating + manual + zoom + caption overlay */}
          <ProductGallery
            images={images}
            alt={product.name}
            captionTitle={product.name}
            captionSubtitle={`${brand} · ${product.tagline ?? ""}`.replace(/\s·\s$/, "")}
            autoRotateMs={5000}
          />

          {/* Info */}
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-block bg-muted text-foreground text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded">
                {product.tagline}
              </span>
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 border text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded",
                  brandColorClass,
                )}
                title={`Manufactured by ${brand}`}
              >
                <BadgeCheck className="h-3.5 w-3.5" />
                {brand}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              {product.name}
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-5">
              {product.description}
            </p>

            {benefits.length > 0 && (
              <div className="mb-6 rounded-lg border border-vibha-teal/20 bg-vibha-teal/5 p-4">
                <p className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-vibha-teal font-semibold mb-2">
                  <Sparkles className="h-3.5 w-3.5" />
                  Key Benefits
                </p>
                <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-1.5">
                  {benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span className="text-vibha-teal font-bold mt-0.5">✓</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {highlights.length > 0 && (
              <div className="grid grid-cols-2 gap-3 mb-6">
                {highlights.map((h) => (
                  <div
                    key={h.label}
                    className="border border-border rounded-lg p-3 bg-muted/30"
                  >
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
                      {h.label}
                    </p>
                    <p className="text-base font-bold text-foreground mt-0.5">
                      {h.value}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-3">
              <RequestQuoteDialog
                productName={product.name}
                trigger={
                  <Button className="bg-vibha-teal hover:bg-vibha-teal/90 text-white font-semibold">
                    Request Quote
                  </Button>
                }
              />
              {viewApplicationsHref && (
                <Button asChild variant="outline">
                  <a href={viewApplicationsHref}>View Applications</a>
                </Button>
              )}
            </div>

            {marketplaces.length > 0 && (
              <div className="mt-6 pt-5 border-t border-border">
                <p className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-muted-foreground font-semibold mb-3">
                  <ShoppingBag className="h-3.5 w-3.5" />
                  Also available at
                </p>
                <div className="flex flex-wrap gap-2">
                  {marketplaces.map((m) => (
                    <MarketplaceButton key={m.name} name={m.name} url={m.url} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Specs + Downloads */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-bold text-foreground border-b border-border pb-3 mb-4">
            Technical Specifications
          </h2>
          <dl className="divide-y divide-border">
            {specs.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-3"
              >
                <dt className="text-sm text-muted-foreground">{row.label}</dt>
                <dd
                  className={cn(
                    "sm:col-span-2 text-sm font-medium text-foreground",
                    row.label === "Brand" && "font-bold tracking-wide",
                  )}
                >
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="bg-card border border-border rounded-xl p-5 shadow-sm h-fit">
          <h3 className="text-base font-bold text-foreground mb-4">Downloads</h3>
          <div className="space-y-2">
            <Button
              asChild={Boolean(product.catalogUrl)}
              variant="outline"
              className="w-full justify-between"
              disabled={!product.catalogUrl}
            >
              {product.catalogUrl ? (
                <a href={product.catalogUrl} download>
                  <span className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-vibha-teal" />
                    Product Catalog
                  </span>
                  <Download className="h-4 w-4" />
                </a>
              ) : (
                <>
                  <span className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-vibha-teal" />
                    Product Catalog
                  </span>
                  <Download className="h-4 w-4" />
                </>
              )}
            </Button>
            {product.datasheetUrl && (
              <Button
                asChild
                variant="outline"
                className="w-full justify-between"
              >
                <a href={product.datasheetUrl} download>
                  <span className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-vibha-teal" />
                    Datasheet
                  </span>
                  <Download className="h-4 w-4" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      {product.applications && product.applications.length > 0 && (
        <div
          id="applications"
          className="bg-card border border-border rounded-xl p-6 shadow-sm"
        >
          <h2 className="text-xl font-bold text-foreground border-b border-border pb-3 mb-4">
            Applications
          </h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {product.applications.map((app) => (
              <li
                key={app}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="text-vibha-teal font-bold mt-0.5">✓</span>
                <span>{app}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

type MarketplaceStyle = { container: string; accent: string }

const MARKETPLACE_STYLES: Record<string, MarketplaceStyle> = {
  Amazon: {
    container: "bg-[#232f3e] hover:bg-[#1a232f] text-white border-[#232f3e]",
    accent: "text-[#ff9900]",
  },
  Flipkart: {
    container: "bg-[#2874f0] hover:bg-[#1f5fc8] text-white border-[#2874f0]",
    accent: "text-[#fec200]",
  },
}

function MarketplaceButton({ name, url }: { name: string; url: string }) {
  const style: MarketplaceStyle = MARKETPLACE_STYLES[name] ?? {
    container: "bg-card hover:bg-muted text-foreground border-border",
    accent: "text-vibha-teal",
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-semibold shadow-sm hover:shadow transition-all",
        style.container,
      )}
    >
      <ShoppingBag className={cn("h-4 w-4", style.accent)} />
      <span>
        Buy on <span className={cn("font-bold", style.accent)}>{name}</span>
      </span>
      <ExternalLink className="h-3.5 w-3.5 opacity-70" />
    </a>
  )
}
