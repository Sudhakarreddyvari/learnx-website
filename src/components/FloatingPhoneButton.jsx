"use client"

import { useState } from "react"
import { Phone } from "lucide-react"

const FloatingPhoneButton = ({ phoneNumber = "+91 8019333796" }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="fixed bottom-20 right-4 z-50 flex items-center">
      {/* Phone number tooltip */}
      <div
        className={`mr-3 bg-white rounded-lg shadow-lg px-4 py-2 flex items-center transition-all duration-300 ${
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"
        }`}
      >
        <span className="font-medium text-gray-800">{phoneNumber}</span>
        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-3 h-3 bg-white"></div>
      </div>

      {/* Phone button */}
      <a
        href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
        className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-[#0279FF] to-[#00A3F3] text-white shadow-lg hover:opacity-90 transition-all duration-300"
        aria-label={`Call us at ${phoneNumber}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      >
        <Phone size={24} />
      </a>
    </div>
  )
}

export default FloatingPhoneButton

