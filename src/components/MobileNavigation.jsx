"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"

const MobileNavigation = ({ activeTab, setActiveTab, onStickyChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    // Simple scroll-based sticky behavior
    const handleScroll = () => {
      const tabContentSection = document.getElementById("course-content-section")
      if (!tabContentSection) return

      const tabContentTop = tabContentSection.getBoundingClientRect().top
      const headerHeight = 64 // Approximate mobile header height

      // Make sticky when scrolled to the tab content section
      if (tabContentTop <= headerHeight && tabContentTop + tabContentSection.offsetHeight > headerHeight) {
        if (!isSticky) {
          setIsSticky(true)
          if (onStickyChange) onStickyChange(true)
        }
      } else {
        if (isSticky) {
          setIsSticky(false)
          if (onStickyChange) onStickyChange(false)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial state

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isSticky, onStickyChange])

  const getTabName = (tab) => {
    switch (tab) {
      case "curriculum":
        return "Curriculum"
      case "placements":
        return "Placements"
      case "certifications":
        return "Certifications"
      case "career":
        return "Career Counselling"
      case "benefits":
        return "Benefits"
      default:
        return tab
    }
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab)
    setIsOpen(false)

    // Scroll to the section with a small delay to ensure rendering
    setTimeout(() => {
      const section = document.getElementById(`section-${tab}`)
      if (section) {
        const headerHeight = 64 // Approximate mobile header height
        const navHeight = 56 // Approximate mobile nav height
        const totalOffset = headerHeight + navHeight // Always include both offsets for consistent behavior
        
        // Get the element's position relative to the top of the page
        const elementPosition = section.getBoundingClientRect().top + window.pageYOffset
        
        // Calculate final scroll position
        const scrollPosition = elementPosition - totalOffset

        window.scrollTo({
          top: scrollPosition,
          behavior: "smooth"
        })
      }
    }, 100)
  }

  return (
    <div className="md:hidden">
      <div
        ref={navRef}
        className={`w-full z-50 ${
          isSticky
            ? "fixed top-[64px] left-0 right-0 px-4 py-3 bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-violet-500/20"
            : "relative"
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-6 py-3 bg-gray-800/80 backdrop-blur-md rounded-lg border border-violet-500/20 text-white"
        >
          <span>{getTabName(activeTab)}</span>
          <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800/95 backdrop-blur-md rounded-lg border border-violet-500/20 overflow-hidden z-30">
            {["curriculum", "placements", "certifications", "career", "benefits"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`w-full text-left px-6 py-3 transition-colors ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-violet-600/30 to-rose-500/30 text-white"
                    : "text-gray-300 hover:bg-gray-700/50"
                }`}
              >
                {getTabName(tab)}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Space to prevent content jump when nav becomes sticky */}
      {isSticky && <div className="h-[56px]"></div>}
    </div>
  )
}

export default MobileNavigation

