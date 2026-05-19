"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false)
  const phoneNumber = "918007188288" // +91 80071 88288

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=Hi%2C%20I%27m%20interested%20in%20your%20products`, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className={`h-6 w-6 transition-transform duration-300 ${isHovered ? "scale-110" : ""}`} />

      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us on WhatsApp
      </span>

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
    </button>
  )
}
