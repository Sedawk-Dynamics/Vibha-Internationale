"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react"

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
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
    <div className="min-h-screen bg-white">
      {/* ================= HERO ================= */}
      <section
        className="relative min-h-[450px] flex items-center justify-center text-white"
        style={{
          backgroundImage: "url(/contact-business-handshake.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-vibha-teal/85 to-blue-700/85" />
        <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            Get in Touch with Vibha Internationale
          </h1>
          <p className="text-lg text-blue-100">
            Questions about our products? Need technical support? Interested in bulk orders? Contact our team today.
          </p>
        </div>
      </section>

      {/* ================= BREADCRUMB ================= */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4 text-sm flex items-center gap-2">
          <Link href="/" className="text-vibha-teal hover:underline">
            Home
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600">Contact Us</span>
        </div>
      </div>

      {/* ================= CONTACT INFO CARDS ================= */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Phone,
                title: "Phone",
                content: (
                  <>
                    <a href="tel:+919876543210" className="block hover:text-vibha-teal font-semibold">
                      +91 98765 43210
                    </a>
                    <a href="tel:+918007770827" className="block hover:text-vibha-teal text-sm mt-1">
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
                    <a href="mailto:info@vibhainternational.co.in" className="block hover:text-vibha-teal font-semibold text-sm">
                      info@vibhainternational.co.in
                    </a>
                    <a href="mailto:sales@vibhainternational.co.in" className="block hover:text-vibha-teal text-sm mt-1">
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
              <Card
                key={i}
                className="h-full border rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-gradient-to-br from-vibha-teal/10 to-blue-500/10 flex items-center justify-center group-hover:from-vibha-teal/20 group-hover:to-blue-500/20 transition-all">
                    <item.icon className="h-7 w-7 text-vibha-teal" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">{item.title}</h3>
                  <div className="text-gray-600 text-sm leading-relaxed">{item.content}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT: FORM + MAP ================= */}
     <section className="py-20">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-3 gap-12 items-start">
      
      {/* LEFT: REQUEST QUOTE FORM */}
      <div className="lg:col-span-2">
        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-200">
          
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Request a Quote
            </h2>
            <p className="text-gray-600">
              Get in touch with our sales team for competitive pricing, bulk orders, and custom solutions tailored to your needs.
            </p>
          </div>

          {submitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-green-900">Request Submitted!</p>
                <p className="text-green-800 text-sm">
                  Our team will contact you within one business day.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* NAME + EMAIL */}
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
                  className="h-12 border-gray-300 focus:border-vibha-teal focus:ring-vibha-teal"
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
                  className="h-12 border-gray-300 focus:border-vibha-teal focus:ring-vibha-teal"
                />
              </div>
            </div>

            {/* PHONE + COMPANY */}
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
                  className="h-12 border-gray-300 focus:border-vibha-teal focus:ring-vibha-teal"
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
                  className="h-12 border-gray-300 focus:border-vibha-teal focus:ring-vibha-teal"
                />
              </div>
            </div>

            {/* MESSAGE */}
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
                className="border-gray-300 focus:border-vibha-teal focus:ring-vibha-teal resize-none"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full bg-vibha-teal hover:bg-vibha-teal/90 text-white font-semibold h-12 transition-all hover:shadow-lg"
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
      </div>

      {/* RIGHT: MAP + SIDEBAR */}
      <div className="space-y-6 lg:sticky lg:top-28">
        
        {/* MAP */}
        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-96">
          <iframe
            src="https://maps.google.com/maps?q=18.6500678,73.7928287&z=17&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
                title="Vibha Internationale Location"
          />
        </div>

        {/* DIRECTIONS BUTTON */}
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
            Get Directions on Google Maps
          </a>
        </Button>

        {/* WHY CHOOSE */}
        <Card className="rounded-2xl border shadow-sm hover:shadow-md transition-all">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg text-gray-900 mb-4">
              Why Choose Vibha?
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                <span>ISO-certified quality standards</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                <span>Global export expertise</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                <span>Dedicated technical support</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                <span>Reliable on-time delivery</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* CALL CARD */}
        <Card className="rounded-2xl bg-gradient-to-br from-vibha-teal to-blue-600 text-white shadow-lg border-0 hover:shadow-xl transition-all">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg mb-2">
              Speak with Our Team
            </h3>
            <p className="text-blue-100 mb-4 text-sm">
              Call us directly for immediate assistance with product selection or bulk inquiries.
            </p>
            <Button
              asChild
              className="w-full bg-white text-vibha-teal hover:bg-gray-100 font-semibold"
            >
              <a href="tel:+919876543210">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </CardContent>
        </Card>

      </div>
    </div>
  </div>
</section>
      {/* ================= CTA SECTION ================= */}
      <section className="py-16 bg-gradient-to-r from-vibha-teal/5 to-blue-600/5 border-t">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help. Whether you need product information, technical support, or have a unique requirement, reach out to us anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-vibha-teal hover:bg-vibha-teal/90 text-white">
              <a href="tel:+919876543210">
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-vibha-teal text-vibha-teal hover:bg-vibha-teal/5">
              <a href="mailto:info@vibhainternational.co.in">
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
