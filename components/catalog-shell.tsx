"use client"

import Link from "next/link"
import { useState, useMemo } from "react"
import { ChevronDown, ChevronRight, FileText, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { catalog, type CatalogNode } from "@/lib/products"

export type Crumb = { label: string; href?: string }

interface CatalogShellProps {
  crumbs: Crumb[]
  /** Slugs from the URL path, e.g. ['brazing-filler-metals', 'aluminium-to-aluminium'] */
  activePath?: string[]
  datasheetUrl?: string
  requestQuoteHref?: string
  children: React.ReactNode
}

export function CatalogShell({
  crumbs,
  activePath = [],
  datasheetUrl,
  requestQuoteHref = "/contact",
  children,
}: CatalogShellProps) {
  return (
    <div className="bg-muted/20 min-h-screen">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <CatalogSidebar activePath={activePath} />

          <div className="flex-1 min-w-0">
            <CatalogToolbar
              crumbs={crumbs}
              datasheetUrl={datasheetUrl}
              requestQuoteHref={requestQuoteHref}
            />
            <div className="mt-4">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CatalogToolbar({
  crumbs,
  datasheetUrl,
  requestQuoteHref,
}: {
  crumbs: Crumb[]
  datasheetUrl?: string
  requestQuoteHref: string
}) {
  return (
    <div className="bg-card border border-border rounded-xl px-4 py-3 flex flex-wrap items-center justify-between gap-3 shadow-sm">
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-1.5 text-sm min-w-0"
      >
        <Link
          href="/products"
          className="text-vibha-teal hover:underline font-medium"
        >
          Catalog
        </Link>
        {crumbs.map((c, i) => (
          <span key={i} className="flex items-center gap-1.5 min-w-0">
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
            {c.href ? (
              <Link
                href={c.href}
                className="text-vibha-teal hover:underline font-medium truncate"
              >
                {c.label}
              </Link>
            ) : (
              <span className="text-muted-foreground truncate">{c.label}</span>
            )}
          </span>
        ))}
      </nav>

      <div className="flex items-center gap-2 shrink-0">
        {datasheetUrl ? (
          <Button asChild variant="outline" size="sm">
            <a href={datasheetUrl} download>
              <FileText className="mr-1.5 h-4 w-4" /> Datasheet
            </a>
          </Button>
        ) : (
          <Button variant="outline" size="sm" disabled>
            <FileText className="mr-1.5 h-4 w-4" /> Datasheet
          </Button>
        )}
        <Button
          asChild
          size="sm"
          className="bg-vibha-orange hover:bg-vibha-orange/90 text-white font-semibold"
        >
          <Link href={requestQuoteHref}>Request Quote</Link>
        </Button>
      </div>
    </div>
  )
}

function CatalogSidebar({ activePath }: { activePath: string[] }) {
  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="lg:sticky lg:top-24 space-y-4">
        <div className="bg-card border border-border rounded-xl p-4 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
            Categories
          </p>

          <nav className="space-y-0.5">
            {catalog.map((node) => (
              <TreeNode
                key={node.slug}
                node={node}
                depth={0}
                pathPrefix={[]}
                activePath={activePath}
              />
            ))}
          </nav>
        </div>

        <div className="bg-card border border-border rounded-xl p-4 shadow-sm text-center">
          <p className="text-sm font-semibold text-foreground mb-3">
            Need Assistance?
          </p>
          <Button
            asChild
            className="w-full bg-vibha-orange hover:bg-vibha-orange/90 text-white font-bold"
          >
            <Link href="/contact">
              <Phone className="mr-2 h-4 w-4" /> Contact Sales
            </Link>
          </Button>
        </div>
      </div>
    </aside>
  )
}

function TreeNode({
  node,
  depth,
  pathPrefix,
  activePath,
}: {
  node: CatalogNode
  depth: number
  pathPrefix: string[]
  activePath: string[]
}) {
  const fullPath = useMemo(
    () => [...pathPrefix, node.slug],
    [pathPrefix, node.slug],
  )

  const isOnPath = useMemo(
    () => fullPath.every((seg, i) => activePath[i] === seg),
    [fullPath, activePath],
  )

  const isCurrent =
    isOnPath &&
    activePath.length === fullPath.length

  const [open, setOpen] = useState(isOnPath)

  const hasChildren = (node.children && node.children.length > 0) ||
    (node.products && node.products.length > 0)
  const href = `/products/${fullPath.join("/")}`

  // Indentation per depth level
  const indentClass = depth === 0 ? "" : "pl-2"
  const fontClass =
    depth === 0
      ? "text-sm font-semibold"
      : depth === 1
        ? "text-sm font-medium"
        : "text-sm"

  return (
    <div className={indentClass}>
      <div className="flex items-stretch">
        {hasChildren && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Collapse" : "Expand"}
            className="shrink-0 px-1.5 text-muted-foreground hover:text-foreground"
          >
            {open ? (
              <ChevronDown className="h-3.5 w-3.5" />
            ) : (
              <ChevronRight className="h-3.5 w-3.5" />
            )}
          </button>
        )}
        {!hasChildren && <span className="w-6.5 shrink-0" />}

        <Link
          href={href}
          className={cn(
            "flex-1 px-2 py-1.5 rounded-md transition-colors truncate",
            fontClass,
            isCurrent
              ? "bg-vibha-teal/10 text-vibha-teal font-bold"
              : isOnPath
                ? "text-vibha-teal"
                : "text-foreground hover:bg-muted hover:text-vibha-teal",
          )}
        >
          {node.name}
        </Link>
      </div>

      {open && hasChildren && (
        <div className="ml-3 border-l border-border pl-2 mt-0.5 space-y-0.5">
          {node.children?.map((child) => (
            <TreeNode
              key={child.slug}
              node={child}
              depth={depth + 1}
              pathPrefix={fullPath}
              activePath={activePath}
            />
          ))}
          {node.products?.map((p) => {
            const productPath = [...fullPath, p.slug]
            const productHref = `/products/${productPath.join("/")}`
            const isProductCurrent =
              productPath.length === activePath.length &&
              productPath.every((seg, i) => activePath[i] === seg)
            return (
              <Link
                key={p.slug}
                href={productHref}
                className={cn(
                  "block ml-6.5 px-2 py-1.5 rounded text-sm transition-colors truncate",
                  isProductCurrent
                    ? "text-vibha-teal font-bold"
                    : "text-muted-foreground hover:text-vibha-teal",
                )}
              >
                {p.name}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
