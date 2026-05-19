"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import {
  Car, Wind, Snowflake, Shield, Hammer, Plane, Zap,
  CheckCircle2, Award, TrendingUp, Users, Globe,
  Target, Eye, ChevronRight,
} from "lucide-react"

const industries = [
  { name: "Automobile", icon: Car, color: "from-blue-500 to-blue-600" },
  { name: "Air Conditioning", icon: Wind, color: "from-cyan-500 to-cyan-600" },
  { name: "Refrigeration", icon: Snowflake, color: "from-indigo-500 to-indigo-600" },
  { name: "Defense", icon: Shield, color: "from-slate-600 to-slate-700" },
  { name: "Heavy Engineering", icon: Hammer, color: "from-orange-500 to-orange-600" },
  { name: "Radiator Industries", icon: Wind, color: "from-teal-500 to-teal-600" },
  { name: "Manufacturing", icon: Zap, color: "from-purple-500 to-purple-600" },
  { name: "Aerospace", icon: Plane, color: "from-sky-500 to-sky-600" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-vibha-teal to-blue-600 min-h-[450px] flex items-center justify-center text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-white space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
              Building Excellence in Industrial Brazing
            </h1>
            <p className="text-xl text-white/90 leading-relaxed text-pretty">
              Committed to delivering world-class brazing solutions with innovation, quality, and unwavering customer focus.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight text-balance">
                Premier Supplier of Industrial Brazing Materials
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Vibha Internationale has been established with the primary aim of delivering industrial brazing equipment
                sourced from the top most market leaders who believe in delivering top-class quality products at the
                best price.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Our ultimate aim is to give optimum satisfaction to our clients in addition to developing trustworthy,
                long-standing relationships. We provide one-stop access for all brazing requirements in aluminum, copper
                &amp; silver brazing filler metals and their fluxes. We also provide all types of industrial cleaning
                chemicals.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { title: "Quality Assured", desc: "ISO certified products" },
                  { title: "Expert Team", desc: "Industry professionals" },
                  { title: "Global Reach", desc: "Export worldwide" },
                  { title: "Innovation", desc: "Latest technology" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold mb-1">{item.title}</div>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/industrial-brazing-process-close-up.jpg"
                alt="Our manufacturing process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  To deliver optimum products and services to our clients by sourcing from the world{"'"}s best
                  manufacturers, ensuring top-class quality at competitive prices. We strive to build trustworthy,
                  long-standing relationships with our customers through excellence in every aspect of our business.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  To be recognized as one of the premier suppliers of top-class brazing materials in India and globally.
                  We envision becoming the first choice for industries seeking reliable, innovative, and eco-friendly
                  brazing solutions that drive their success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 text-balance">Our Core Values</h2>
            <p className="text-lg text-muted-foreground text-pretty">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Quality Excellence", desc: "Uncompromising commitment to delivering superior quality products", borderColor: "hover:border-primary" },
              { icon: Users, title: "Customer Focus", desc: "Building long-lasting relationships through exceptional service", borderColor: "hover:border-secondary" },
              { icon: TrendingUp, title: "Innovation", desc: "Embracing latest technology to stay ahead of industry trends", borderColor: "hover:border-accent" },
              { icon: Globe, title: "Integrity", desc: "Operating with transparency and honesty in all dealings", borderColor: "hover:border-green-500" },
            ].map((value) => (
              <Card key={value.title} className={`text-center border-2 ${value.borderColor} transition-colors`}>
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4 text-balance">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Trusted by leading companies across multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((industry) => {
              const IconComponent = industry.icon
              return (
                <div
                  key={industry.name}
                  className="group relative overflow-hidden rounded-xl border-2 border-gray-200 hover:border-vibha-teal transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className="relative p-8 flex flex-col items-center justify-center text-center group-hover:text-white transition-colors duration-300 h-32">
                    <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-vibha-teal group-hover:text-white" />
                    </div>
                    <p className="font-semibold text-gray-900 group-hover:text-white group-hover:font-bold transition-all duration-300">
                      {industry.name}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-white border-0 overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <Image src="/industrial-pattern-abstract.jpg" alt="Background pattern" fill className="object-cover" />
            </div>
            <CardContent className="p-12 md:p-16 text-center relative z-10">
              <h2 className="text-4xl font-bold mb-4 text-balance">Ready to Partner with Us?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
                Join hundreds of satisfied customers who trust Vibha Internationale for their brazing needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 h-14">
                  <Link href="/contact">
                    Contact Us
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary h-14 bg-transparent"
                >
                  <Link href="/products/aluminum-brazing">View Products</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
