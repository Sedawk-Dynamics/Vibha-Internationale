import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, Inbox } from "lucide-react"
import { CatalogShell } from "@/components/catalog-shell"
import { ProductDetail } from "@/components/product-detail"
import { allPaths, resolvePath, type CatalogNode } from "@/lib/products"

export function generateStaticParams() {
  return allPaths().map((path) => ({ path }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ path: string[] }>
}) {
  const { path } = await params
  const resolved = resolvePath(path)
  if (!resolved) return {}
  const target = resolved.product ?? resolved.node
  if (!target) return {}
  return {
    title: `${target.name} — Vibha Internationale`,
    description: target.description,
  }
}

export default async function CatalogCatchAll({
  params,
}: {
  params: Promise<{ path: string[] }>
}) {
  const { path } = await params
  const resolved = resolvePath(path)
  if (!resolved) notFound()

  const crumbs = resolved.trail.map((node, i) => {
    const isLast = i === resolved.trail.length - 1
    const hrefPath = resolved.trail
      .slice(0, i + 1)
      .map((n) => n.slug)
      .join("/")
    return {
      label: node.name,
      href:
        isLast && !resolved.product
          ? undefined
          : `/products/${hrefPath}`,
    }
  })

  if (resolved.product) {
    crumbs.push({ label: resolved.product.name, href: undefined })
  }

  const activePath = resolved.product
    ? [...resolved.trail.map((n) => n.slug), resolved.product.slug]
    : resolved.trail.map((n) => n.slug)

  // Product detail view
  if (resolved.product) {
    return (
      <CatalogShell
        crumbs={crumbs}
        activePath={activePath}
        datasheetUrl={resolved.product.datasheetUrl}
      >
        <ProductDetail
          product={{
            ...resolved.product,
            tagline:
              resolved.product.tagline ?? resolved.node?.name ?? "Product",
            description:
              resolved.product.description ??
              "Detailed product information coming soon.",
          }}
          viewApplicationsHref={
            resolved.product.applications?.length ? "#applications" : undefined
          }
        />
      </CatalogShell>
    )
  }

  // Group / category view — list children + direct products
  const node = resolved.node!
  return (
    <CatalogShell crumbs={crumbs} activePath={activePath}>
      <div className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          {node.name}
        </h1>
        {node.description && (
          <p className="text-muted-foreground max-w-2xl">{node.description}</p>
        )}
      </div>

      <GroupGrid
        node={node}
        pathPrefix={resolved.trail.map((n) => n.slug)}
      />
    </CatalogShell>
  )
}

function GroupGrid({
  node,
  pathPrefix,
}: {
  node: CatalogNode
  pathPrefix: string[]
}) {
  const isEmpty =
    (!node.children || node.children.length === 0) &&
    (!node.products || node.products.length === 0)

  if (isEmpty) {
    return (
      <div className="mt-6 bg-card border border-border rounded-xl p-10 text-center shadow-sm">
        <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-3">
          <Inbox className="h-5 w-5 text-muted-foreground" />
        </div>
        <h2 className="text-lg font-semibold text-foreground mb-1">
          Products coming soon
        </h2>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          We&apos;re currently cataloging this range. Get in touch and we&apos;ll
          share grades, datasheets and pricing directly.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-vibha-teal hover:underline"
        >
          Contact Sales <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    )
  }

  return (
    <div className="mt-6 space-y-8">
      {node.children && node.children.length > 0 && (
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {node.children.map((child) => (
            <Tile
              key={child.slug}
              href={`/products/${[...pathPrefix, child.slug].join("/")}`}
              title={child.name}
              description={child.description}
              image={child.bannerImage}
              countLabel={summarise(child)}
              cta="Browse"
            />
          ))}
        </div>
      )}

      {node.products && node.products.length > 0 && (
        <div>
          {node.children && node.children.length > 0 && (
            <h2 className="text-xl font-bold text-foreground mb-3">
              Products in this category
            </h2>
          )}
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {node.products.map((p) => (
              <Tile
                key={p.slug}
                href={`/products/${[...pathPrefix, p.slug].join("/")}`}
                title={p.name}
                description={p.description}
                image={p.images?.[0]}
                cta="View Product"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function summarise(node: CatalogNode): string {
  const childCount = node.children?.length ?? 0
  const productCount = node.products?.length ?? 0
  if (childCount > 0 && productCount === 0)
    return `${childCount} subcategor${childCount === 1 ? "y" : "ies"}`
  if (productCount > 0 && childCount === 0)
    return `${productCount} product${productCount === 1 ? "" : "s"}`
  if (childCount === 0 && productCount === 0) return "Coming soon"
  return `${childCount} subcat${childCount === 1 ? "" : "s"} · ${productCount} product${productCount === 1 ? "" : "s"}`
}

function Tile({
  href,
  title,
  description,
  image,
  countLabel,
  cta,
}: {
  href: string
  title: string
  description?: string
  image?: string
  countLabel?: string
  cta: string
}) {
  return (
    <Link
      href={href}
      className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-vibha-teal/60 transition-all flex flex-col"
    >
      <div className="relative aspect-4/3 bg-muted overflow-hidden">
        <Image
          src={image ?? "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(min-width: 1280px) 22vw, (min-width: 640px) 40vw, 90vw"
        />
      </div>
      <div className="p-5 flex flex-col grow">
        <h3 className="text-lg font-bold text-foreground group-hover:text-vibha-teal transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed mt-2 line-clamp-3 grow">
            {description}
          </p>
        )}
        <div className="mt-4 flex items-center justify-between text-sm">
          {countLabel ? (
            <span className="text-muted-foreground">{countLabel}</span>
          ) : (
            <span />
          )}
          <span className="inline-flex items-center gap-1 text-vibha-teal font-semibold">
            {cta} <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}
