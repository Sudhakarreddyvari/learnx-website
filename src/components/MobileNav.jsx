"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const MobileNav = ({ activeSection, onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false)

  const sections = [
    { id: "curriculum", label: "Curriculum" },
    { id: "placements", label: "Placements" },
    { id: "certifications", label: "Certifications" },
    { id: "career", label: "Career Counselling" },
  ]

  const handleSelect = (sectionId) => {
    onSectionChange(sectionId)
    setIsOpen(false)

    const element = document.getElementById(`${sectionId}-section`)
    if (element) {
      const offset = 80 // Account for header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative z-20 md:hidden mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-3 bg-gray-800/80 backdrop-blur-md rounded-lg border border-violet-500/20 text-white"
      >
        <span>{sections.find((s) => s.id === activeSection)?.label}</span>
        <ChevronDown size={20} className={cn("transition-transform duration-300", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800/95 backdrop-blur-md rounded-lg border border-violet-500/20 overflow-hidden z-30">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSelect(section.id)}
              className={cn(
                "w-full text-left px-6 py-3 transition-colors",
                activeSection === section.id
                  ? "bg-gradient-to-r from-violet-600/30 to-rose-500/30 text-white"
                  : "text-gray-300 hover:bg-gray-700/50",
              )}
            >
              {section.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default MobileNav

