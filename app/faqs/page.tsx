import Link from "next/link"
import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { PageBanner } from "@/components/page-banner"
import { Reveal, RevealStagger, RevealItem } from "@/components/motion/reveal"

const faqs = [
  {
    question: "What types of brazing alloys do you manufacture?",
    answer:
      "We manufacture a comprehensive range of brazing alloys including aluminum-silicon alloys, copper-phosphorus alloys, silver-based alloys, brazing flux, cleaning chemicals, and brazing paste. Each product line offers multiple grades to suit different applications and temperature requirements.",
  },
  {
    question: "Do you export your products internationally?",
    answer:
      "Yes, Vibha Internationale exports to multiple countries worldwide. We have extensive experience in international trade and can handle all aspects of export documentation, packaging, and logistics to ensure your order reaches you safely and on time.",
  },
  {
    question: "What is the minimum order quantity?",
    answer:
      "Minimum order quantities vary depending on the product type and grade. For standard products, we can accommodate smaller orders, while custom specifications may require larger quantities. Please contact our sales team for specific MOQ information.",
  },
  {
    question: "How do I choose the right brazing alloy for my application?",
    answer:
      "Selecting the right brazing alloy depends on several factors including the base metals being joined, required joint strength, operating temperature, and service environment. Our technical team can provide expert guidance to help you select the optimal product for your specific application.",
  },
  {
    question: "What certifications do your products have?",
    answer:
      "Our products are manufactured to international standards and we hold various quality certifications including ISO 9001:2015. Specific product certifications and test reports are available upon request. We can also provide material test certificates (MTC) with each shipment.",
  },
  {
    question: "Do you provide technical support?",
    answer:
      "Yes, we offer comprehensive technical support including product selection guidance, brazing process recommendations, troubleshooting assistance, and on-site support when needed. Our experienced team is always ready to help ensure your brazing success.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "We offer flexible payment terms based on order size and customer relationship. Common options include advance payment, letter of credit (L/C), and credit terms for established customers. Specific payment arrangements can be discussed with our sales team.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery time depends on product availability, order quantity, and destination. Standard products typically ship within 5-7 business days for domestic orders. International shipping times vary by location. Rush orders can often be accommodated - please inquire with our team.",
  },
  {
    question: "Can you provide custom formulations?",
    answer:
      "Yes, we can develop custom brazing alloy formulations to meet specific requirements. Our R&D team works closely with customers to create tailored solutions for unique applications. Custom development timelines and minimum quantities will be discussed based on your needs.",
  },
  {
    question: "Do you offer samples?",
    answer:
      "Yes, we can provide samples for evaluation purposes. Sample availability and any associated costs depend on the product type and quantity requested. Please contact our sales team to request samples for your testing.",
  },
]

const highlights = [
  {
    image: "/aluminum-brazing-rods-realistic.jpg",
    title: "Premium Quality",
    desc: "ISO certified products",
  },
  {
    image: "/modern-industrial-facility-manufacturing-equipment.jpg",
    title: "Globally Sourced",
    desc: "State-of-the-art facilities",
  },
  {
    image: "/contact-business-handshake.jpg",
    title: "Expert Support",
    desc: "Dedicated customer service",
  },
]

export default function FAQsPage() {
  return (
    <div className="bg-background text-foreground">
      <PageBanner
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our products and services"
        image="/industrial-manufacturing-team.jpg"
        crumbs={[{ label: "FAQ's" }]}
      />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <RevealStagger
            staggerChildren={0.1}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {highlights.map((item) => (
              <RevealItem key={item.title}>
                <div className="text-center group">
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-3 shadow-md">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-bold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-bold text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>

          <Reveal>
            <div className="mt-16 bg-linear-to-br from-vibha-teal to-vibha-purple rounded-2xl p-8 text-center text-white shadow-xl">
              <MessageCircle className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="mb-6 text-white/90">
                Our team is here to help. Contact us for personalized assistance with your brazing needs.
              </p>
              <Button asChild size="lg" className="bg-white text-vibha-teal hover:bg-white/90 font-bold hover:scale-105 transition-transform">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
