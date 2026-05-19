import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function FAQsPage() {
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

  return (
    <div className="min-h-screen">
      <section
        className="relative bg-gradient-to-r from-vibha-teal to-blue-600 min-h-[450px] flex items-center justify-center text-white text-center overflow-hidden"
        style={{
          backgroundImage: "url(/industrial-manufacturing-team.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-vibha-teal/90 to-blue-600/90"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-50">Find answers to common questions about our products and services</p>
        </div>
      </section>

      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-vibha-teal hover:underline">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">FAQ's</span>
          </div>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="aspect-video rounded-lg overflow-hidden mb-3">
                <img
                  src="/aluminum-brazing-rods-realistic.jpg"
                  alt="Product Quality"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-gray-900">Premium Quality</h3>
              <p className="text-sm text-gray-600">ISO certified products</p>
            </div>
            <div className="text-center">
              <div className="aspect-video rounded-lg overflow-hidden mb-3">
                <img
                  src="/modern-industrial-facility-manufacturing-equipment.jpg"
                  alt="Manufacturing Excellence"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-gray-900">Sourced from globally trusted manufacturers</h3>
              <p className="text-sm text-gray-600">State-of-the-art facilities</p>
            </div>
            <div className="text-center">
              <div className="aspect-video rounded-lg overflow-hidden mb-3">
                <img
                  src="/contact-business-handshake.jpg"
                  alt="Customer Support"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-gray-900">Expert Support</h3>
              <p className="text-sm text-gray-600">24/7 customer service</p>
            </div>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-bold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 bg-gradient-to-br from-vibha-teal to-blue-600 rounded-lg p-8 text-center text-white">
            <MessageCircle className="h-12 w-12 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="mb-6 text-blue-50">
              Our team is here to help. Contact us for personalized assistance with your brazing needs.
            </p>
            <Button asChild size="lg" className="bg-white text-vibha-teal hover:bg-gray-100 font-bold">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
