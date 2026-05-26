"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react"
import { PageBanner } from "@/components/page-banner"
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/reveal"
import { Captcha, useCaptcha } from "@/components/captcha"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [showCaptchaError, setShowCaptchaError] = useState(false)
  const captcha = useCaptcha()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!captcha.validate()) {
      setShowCaptchaError(true)
      return
    }
    setShowCaptchaError(false)
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))
    setSubmitted(true)

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    })
    captcha.reset()

    setIsSubmitting(false)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="bg-background text-foreground">
      <PageBanner
        title="Get in Touch with Vibha Internationale"
        subtitle="Questions about our products? Need technical support? Interested in bulk orders? Contact our team today."
        image="/contact-business-handshake.jpg"
        crumbs={[{ label: "Contact Us" }]}
      />

      {/* CONTACT INFO CARDS */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <RevealStagger
            staggerChildren={0.1}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Phone,
                title: "Phone",
                content: (
                  <>
                    <a href="tel:+919876543210" className="block hover:text-vibha-teal font-semibold transition-colors">
                      +91 98765 43210
                    </a>
                    <a href="tel:+918007770827" className="block hover:text-vibha-teal text-sm mt-1 transition-colors">
                      +91 800 777 0827
                    </a>
                  </>
                ),
              },
              {
                icon: Mail,
                title: "Email",
                content: (
                  <>
                    <a href="mailto:info@vibhainternational.co.in" className="block hover:text-vibha-teal font-semibold text-sm transition-colors break-all">
                      info@vibhainternational.co.in
                    </a>
                    <a href="mailto:sales@vibhainternational.co.in" className="block hover:text-vibha-teal text-sm mt-1 transition-colors break-all">
                      sales@vibhainternational.co.in
                    </a>
                  </>
                ),
              },
              {
                icon: MapPin,
                title: "Location",
                content: (
                  <p className="text-sm font-medium">
                    67/5, D-3 Block, MIDC
                    <br />
                    Chinchwad, Pune 411 026
                    <br />
                    Maharashtra, India
                  </p>
                ),
              },
              {
                icon: Clock,
                title: "Working Hours",
                content: (
                  <p className="text-sm font-medium">
                    Mon – Fri: 9:00 AM – 6:00 PM
                    <br />
                    Sat: 9:00 AM – 1:00 PM
                    <br />
                    Sun: Closed
                  </p>
                ),
              },
            ].map((item, i) => (
              <RevealItem key={i}>
                <Card className="h-full border rounded-xl bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-linear-to-br from-vibha-teal/10 to-vibha-purple/10 flex items-center justify-center group-hover:from-vibha-teal/20 group-hover:to-vibha-purple/20 transition-all">
                      <item.icon className="h-7 w-7 text-vibha-teal" />
                    </div>
                    <h3 className="font-bold text-foreground mb-3 text-lg">{item.title}</h3>
                    <div className="text-muted-foreground text-sm leading-relaxed">{item.content}</div>
                  </CardContent>
                </Card>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* MAIN CONTENT: FORM + MAP */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* LEFT: REQUEST QUOTE FORM */}
            <Reveal className="lg:col-span-2">
              <div className="bg-card p-8 md:p-10 rounded-2xl shadow-xl border border-border">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    Request a Quote
                  </h2>
                  <p className="text-muted-foreground">
                    Get in touch with our sales team for competitive pricing, bulk orders, and custom solutions tailored to your needs.
                  </p>
                </div>

                {submitted && (
                  <div className="mb-6 p-4 bg-vibha-green/10 border border-vibha-green/30 rounded-lg flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                    <CheckCircle2 className="h-5 w-5 text-vibha-green shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Request Submitted!</p>
                      <p className="text-muted-foreground text-sm">
                        Our team will contact you within one business day.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-semibold block mb-2">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="h-12 focus:border-vibha-teal focus:ring-vibha-teal"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm font-semibold block mb-2">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email address"
                        className="h-12 focus:border-vibha-teal focus:ring-vibha-teal"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-sm font-semibold block mb-2">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="h-12 focus:border-vibha-teal focus:ring-vibha-teal"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company" className="text-sm font-semibold block mb-2">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Enter your company name"
                        className="h-12 focus:border-vibha-teal focus:ring-vibha-teal"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-semibold block mb-2">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Enter your requirements, product inquiry, or message"
                      rows={6}
                      className="focus:border-vibha-teal focus:ring-vibha-teal resize-none"
                    />
                  </div>

                  <Captcha state={captcha} showError={showCaptchaError} />

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-vibha-teal hover:bg-vibha-teal/90 text-white font-semibold h-12 transition-all hover:shadow-lg hover:scale-[1.01]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Quote Request
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </Reveal>

            {/* RIGHT: MAP + SIDEBAR */}
            <Reveal delay={0.15} className="lg:sticky lg:top-32">
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-border h-96">
                  <iframe
                    src="https://maps.google.com/maps?q=18.6500678,73.7928287&z=17&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="Vibha Internationale Location"
                  />
                </div>

                <Button
                  asChild
                  className="w-full bg-vibha-teal hover:bg-vibha-teal/90 text-white font-semibold h-12 shadow-lg hover:shadow-xl transition-all"
                >
                  <a
                    href="https://maps.app.goo.gl/LNXNoYB7gJgDHmNo9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="mr-2 h-5 w-5" />
                    Get Directions
                  </a>
                </Button>

                <Card className="rounded-2xl border bg-card hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-4">
                      Why Choose Vibha?
                    </h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {[
                        "ISO-certified quality standards",
                        "Global export expertise",
                        "Dedicated technical support",
                        "Reliable on-time delivery",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-vibha-green mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="rounded-2xl bg-linear-to-br from-vibha-teal to-vibha-purple text-white shadow-lg border-0 hover:shadow-xl transition-all">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">
                      Speak with Our Team
                    </h3>
                    <p className="text-white/90 mb-4 text-sm">
                      Call us directly for immediate assistance with product selection or bulk inquiries.
                    </p>
                    <Button
                      asChild
                      className="w-full bg-white text-vibha-teal hover:bg-white/90 font-semibold"
                    >
                      <a href="tel:+919876543210">
                        <Phone className="mr-2 h-5 w-5" />
                        Call Now
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 bg-muted/30 border-t border-border">
        <Reveal className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help. Whether you need product information, technical support, or have a unique requirement, reach out to us anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-vibha-teal hover:bg-vibha-teal/90 text-white hover:scale-105 transition-transform">
              <a href="tel:+919876543210">
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-vibha-teal text-vibha-teal hover:bg-vibha-teal/10 hover:scale-105 transition-transform">
              <a href="mailto:info@vibhainternational.co.in">
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </a>
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
