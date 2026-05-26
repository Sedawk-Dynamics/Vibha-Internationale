"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { CheckCircle2, Send, Package, Calendar, Building2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Captcha, useCaptcha } from "@/components/captcha"

interface RequestQuoteDialogProps {
  /** Pre-fill the "Product of Interest" field (e.g. when opened from a product page) */
  productName?: string
  /** Custom trigger element. If omitted, a default styled Request Quote button is rendered. */
  trigger?: React.ReactNode
  /** Controlled open state (optional). */
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const UNITS = [
  "kg",
  "tons",
  "pieces",
  "spools",
  "drums",
  "cartons",
  "metres",
  "litres",
] as const

const initialForm = (productName?: string) => ({
  name: "",
  email: "",
  phone: "",
  company: "",
  country: "",
  product: productName ?? "",
  quantity: "",
  unit: "kg",
  requiredBy: "",
  message: "",
})

export function RequestQuoteDialog({
  productName,
  trigger,
  open,
  onOpenChange,
}: RequestQuoteDialogProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const isControlled = open !== undefined
  const isOpen = isControlled ? open : internalOpen
  const setOpen = (v: boolean) => {
    if (!isControlled) setInternalOpen(v)
    onOpenChange?.(v)
  }

  const [form, setForm] = useState(initialForm(productName))
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [showCaptchaError, setShowCaptchaError] = useState(false)
  const captcha = useCaptcha()

  // Reset form / captcha whenever the dialog opens
  useEffect(() => {
    if (isOpen) {
      setForm(initialForm(productName))
      setSubmitted(false)
      setShowCaptchaError(false)
      captcha.reset()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, productName])

  const update =
    <K extends keyof typeof form>(key: K) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | string,
    ) => {
      const value = typeof e === "string" ? e : e.target.value
      setForm((f) => ({ ...f, [key]: value }))
    }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!captcha.validate()) {
      setShowCaptchaError(true)
      return
    }
    setShowCaptchaError(false)
    setIsSubmitting(true)
    // Simulate submission — replace with API call when backend is ready
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setSubmitted(true)
    setIsSubmitting(false)
    setTimeout(() => {
      setOpen(false)
    }, 2200)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      {trigger ? (
        <DialogTrigger asChild>{trigger}</DialogTrigger>
      ) : (
        <DialogTrigger asChild>
          <Button className="bg-vibha-teal hover:bg-vibha-teal/90 text-white font-semibold">
            Request Quote
          </Button>
        </DialogTrigger>
      )}

      <DialogContent className="sm:max-w-2xl max-h-[92vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Package className="h-5 w-5 text-vibha-teal" />
            Request a Quote
          </DialogTitle>
          <DialogDescription>
            Share your requirement — including the quantity you need — and our
            sales team will get back to you with pricing within one business
            day.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-10 text-center space-y-3">
            <div className="mx-auto w-14 h-14 rounded-full bg-vibha-green/15 flex items-center justify-center">
              <CheckCircle2 className="h-7 w-7 text-vibha-green" />
            </div>
            <h3 className="text-xl font-bold text-foreground">
              Quote Request Sent
            </h3>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto">
              Thanks {form.name || "for reaching out"} — we&apos;ve received
              your request and will be in touch shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 pt-2">
            {/* Customer details */}
            <fieldset className="space-y-4">
              <legend className="text-xs font-bold uppercase tracking-wider text-vibha-teal flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5" />
                Your Details
              </legend>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="rq-name" className="text-sm font-semibold block mb-1.5">
                    Full Name *
                  </Label>
                  <Input
                    id="rq-name"
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="John Doe"
                    className="h-11 focus:border-vibha-teal focus:ring-vibha-teal"
                  />
                </div>
                <div>
                  <Label htmlFor="rq-email" className="text-sm font-semibold block mb-1.5">
                    Email *
                  </Label>
                  <Input
                    id="rq-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@company.com"
                    className="h-11 focus:border-vibha-teal focus:ring-vibha-teal"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="rq-phone" className="text-sm font-semibold block mb-1.5">
                    Phone *
                  </Label>
                  <Input
                    id="rq-phone"
                    required
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+91 98765 43210"
                    className="h-11 focus:border-vibha-teal focus:ring-vibha-teal"
                  />
                </div>
                <div>
                  <Label htmlFor="rq-company" className="text-sm font-semibold block mb-1.5">
                    Company
                  </Label>
                  <Input
                    id="rq-company"
                    value={form.company}
                    onChange={update("company")}
                    placeholder="Acme Industries Pvt. Ltd."
                    className="h-11 focus:border-vibha-teal focus:ring-vibha-teal"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="rq-country" className="text-sm font-semibold block mb-1.5">
                  Country / City
                </Label>
                <Input
                  id="rq-country"
                  value={form.country}
                  onChange={update("country")}
                  placeholder="Pune, India"
                  className="h-11 focus:border-vibha-teal focus:ring-vibha-teal"
                />
              </div>
            </fieldset>

            {/* Requirement */}
            <fieldset className="space-y-4 pt-2 border-t border-border">
              <legend className="text-xs font-bold uppercase tracking-wider text-vibha-teal flex items-center gap-1.5 mt-3">
                <Package className="h-3.5 w-3.5" />
                Your Requirement
              </legend>

              <div>
                <Label htmlFor="rq-product" className="text-sm font-semibold block mb-1.5">
                  Product of Interest *
                </Label>
                <Input
                  id="rq-product"
                  required
                  value={form.product}
                  onChange={update("product")}
                  placeholder="e.g. SU-TA 200, BCuP-6, AL-4047 Paste"
                  className="h-11 focus:border-vibha-teal focus:ring-vibha-teal"
                />
              </div>

              <div className="grid grid-cols-[1fr_140px_1fr] gap-4">
                <div>
                  <Label htmlFor="rq-quantity" className="text-sm font-semibold block mb-1.5">
                    Quantity *
                  </Label>
                  <Input
                    id="rq-quantity"
                    type="number"
                    min="1"
                    step="any"
                    required
                    value={form.quantity}
                    onChange={update("quantity")}
                    placeholder="e.g. 500"
                    className="h-11 focus:border-vibha-teal focus:ring-vibha-teal"
                  />
                </div>
                <div>
                  <Label htmlFor="rq-unit" className="text-sm font-semibold block mb-1.5">
                    Unit *
                  </Label>
                  <Select value={form.unit} onValueChange={update("unit")}>
                    <SelectTrigger id="rq-unit" className="h-11 focus:border-vibha-teal focus:ring-vibha-teal">
                      <SelectValue placeholder="Unit" />
                    </SelectTrigger>
                    <SelectContent>
                      {UNITS.map((u) => (
                        <SelectItem key={u} value={u}>
                          {u}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="rq-required-by" className="text-sm font-semibold block mb-1.5 flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" />
                    Required By
                  </Label>
                  <Input
                    id="rq-required-by"
                    type="date"
                    value={form.requiredBy}
                    onChange={update("requiredBy")}
                    className="h-11 focus:border-vibha-teal focus:ring-vibha-teal"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="rq-message" className="text-sm font-semibold block mb-1.5">
                  Additional Requirements
                </Label>
                <Textarea
                  id="rq-message"
                  rows={3}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Specifications, packaging, delivery location, recurring order, etc."
                  className="focus:border-vibha-teal focus:ring-vibha-teal resize-none"
                />
              </div>
            </fieldset>

            {/* Captcha */}
            <div className="pt-2 border-t border-border">
              <div className="mt-3">
                <Captcha state={captcha} showError={showCaptchaError} id="rq-captcha" />
              </div>
            </div>

            <DialogFooter className="gap-2 sm:gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-vibha-teal hover:bg-vibha-teal/90 text-white font-semibold min-w-[160px]"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full inline-block" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Request
                  </>
                )}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
