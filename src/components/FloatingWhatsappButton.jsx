"use client"

import { useState } from "react"
import { FaWhatsapp } from "react-icons/fa"

const FloatingWhatsappButton = ({ phoneNumber = "+918019333796" }) => {
  const [isHovered, setIsHovered] = useState(false)

  // Format phone number for WhatsApp URL (remove all non-digit characters)
  const formattedNumber = phoneNumber.replace(/\D/g, "")

  return (
    <div className="fixed bottom-40 right-5 z-50 flex items-center">
      {/* WhatsApp number tooltip */}
      <div
        className={`mr-3 bg-white rounded-lg shadow-lg px-4 py-2 flex items-center transition-all duration-300 ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"
        }`}
      >
        <span className="font-medium text-gray-800">{phoneNumber}</span>
        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-3 h-3 bg-white"></div>
      </div>

      {/* WhatsApp button */}
      <a
        href={`https://wa.me/${formattedNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-lg hover:opacity-90 transition-all duration-300"
        aria-label={`Chat with us on WhatsApp at ${phoneNumber}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  )
}

export default FloatingWhatsappButton