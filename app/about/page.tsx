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
import { PageBanner } from "@/components/page-banner"
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/reveal"

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
    <div className="bg-background text-foreground">
      <PageBanner
        title="Building Excellence in Industrial Brazing"
        subtitle="Committed to delivering world-class brazing solutions with innovation, quality, and unwavering customer focus."
        image="/industrial-manufacturing-facility-modern.jpg"
        crumbs={[{ label: "About Us" }]}
      />

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div className="space-y-6">
                <Badge className="bg-vibha-teal text-white">About Us</Badge>
                <h2 className="text-4xl font-bold leading-tight text-balance text-foreground">
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
                      <CheckCircle2 className="h-6 w-6 text-vibha-teal mt-1 shrink-0" />
                      <div>
                        <div className="font-semibold mb-1 text-foreground">{item.title}</div>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="relative h-125 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/industrial-brazing-process-close-up.jpg"
                  alt="Our manufacturing process"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <RevealStagger staggerChildren={0.15} className="grid md:grid-cols-2 gap-8">
            <RevealItem>
              <Card className="border-2 border-vibha-purple/20 hover:border-vibha-purple/50 hover:shadow-xl transition-all duration-300 h-full bg-card">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-vibha-purple/10 flex items-center justify-center">
                    <Target className="h-8 w-8 text-vibha-purple" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    To deliver optimum products and services to our clients by sourcing from the world&apos;s best
                    manufacturers, ensuring top-class quality at competitive prices. We strive to build trustworthy,
                    long-standing relationships with our customers through excellence in every aspect of our business.
                  </p>
                </CardContent>
              </Card>
            </RevealItem>

            <RevealItem>
              <Card className="border-2 border-vibha-teal/20 hover:border-vibha-teal/50 hover:shadow-xl transition-all duration-300 h-full bg-card">
                <CardContent className="p-8 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-vibha-teal/10 flex items-center justify-center">
                    <Eye className="h-8 w-8 text-vibha-teal" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    To be recognized as one of the premier suppliers of top-class brazing materials in India and globally.
                    We envision becoming the first choice for industries seeking reliable, innovative, and eco-friendly
                    brazing solutions that drive their success.
                  </p>
                </CardContent>
              </Card>
            </RevealItem>
          </RevealStagger>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4 text-balance text-foreground">Our Core Values</h2>
              <p className="text-lg text-muted-foreground text-pretty">The principles that guide everything we do</p>
            </div>
          </Reveal>

          <RevealStagger staggerChildren={0.1} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Quality Excellence", desc: "Uncompromising commitment to delivering superior quality products", iconWrap: "bg-vibha-purple/10", iconColor: "text-vibha-purple" },
              { icon: Users, title: "Customer Focus", desc: "Building long-lasting relationships through exceptional service", iconWrap: "bg-vibha-teal/10", iconColor: "text-vibha-teal" },
              { icon: TrendingUp, title: "Innovation", desc: "Embracing latest technology to stay ahead of industry trends", iconWrap: "bg-vibha-orange/10", iconColor: "text-vibha-orange" },
              { icon: Globe, title: "Integrity", desc: "Operating with transparency and honesty in all dealings", iconWrap: "bg-vibha-green/10", iconColor: "text-vibha-green" },
            ].map((value) => (
              <RevealItem key={value.title}>
                <Card className="text-center border-2 hover:border-vibha-teal/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full bg-card">
                  <CardContent className="p-6 space-y-3">
                    <div className={`w-12 h-12 rounded-xl ${value.iconWrap} flex items-center justify-center mx-auto`}>
                      <value.icon className={`h-6 w-6 ${value.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
                  </CardContent>
                </Card>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4 text-balance text-foreground">Industries We Serve</h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Trusted by leading companies across multiple sectors
              </p>
            </div>
          </Reveal>

          <RevealStagger
            staggerChildren={0.06}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {industries.map((industry) => {
              const IconComponent = industry.icon
              return (
                <RevealItem key={industry.name}>
                  <div className="group relative overflow-hidden rounded-xl border-2 border-border bg-card hover:border-vibha-teal transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
                    <div className={`absolute inset-0 bg-linear-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className="relative p-8 flex flex-col items-center justify-center text-center group-hover:text-white transition-colors duration-300 h-32">
                      <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-vibha-teal group-hover:text-white" />
                      </div>
                      <p className="font-semibold text-foreground group-hover:text-white group-hover:font-bold transition-all duration-300">
                        {industry.name}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              )
            })}
          </RevealStagger>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Reveal>
            <Card className="bg-vibha-purple text-white border-0 overflow-hidden relative">
              <div className="absolute inset-0 opacity-10">
                <Image src="/industrial-pattern-abstract.jpg" alt="" fill className="object-cover" />
              </div>
              <div className="absolute inset-0 bg-linear-to-br from-vibha-purple via-vibha-purple to-vibha-teal" />
              <CardContent className="p-12 md:p-16 text-center relative z-10">
                <h2 className="text-4xl font-bold mb-4 text-balance text-white">Ready to Partner with Us?</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
                  Join hundreds of satisfied customers who trust Vibha Internationale for their brazing needs
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-vibha-purple hover:bg-white/90 h-14 hover:scale-105 transition-transform">
                    <Link href="/contact">
                      Contact Us
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-vibha-purple h-14 bg-transparent hover:scale-105 transition-all"
                  >
                    <Link href="/products">View Products</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
