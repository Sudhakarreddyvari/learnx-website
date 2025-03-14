"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"

const MobileCourseTabs = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [hasViewedCurriculum, setHasViewedCurriculum] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return

      // Check if user has scrolled past curriculum section
      const curriculumSection = document.getElementById("section-curriculum")
      if (curriculumSection) {
        const { bottom: curriculumBottom } = curriculumSection.getBoundingClientRect()
        if (curriculumBottom < window.innerHeight) {
          setHasViewedCurriculum(true)
        }
      }

      // Only enable sticky behavior after viewing curriculum
      if (hasViewedCurriculum) {
        const { top } = navRef.current.getBoundingClientRect()
        setIsSticky(top <= 0)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [hasViewedCurriculum])

  const handleTabClick = (tab) => {
    setActiveTab(tab)
    setIsOpen(false)

    // Scroll to the section
    const section = document.getElementById(`section-${tab}`)
    if (section) {
      const yOffset = isSticky ? -80 : -120 // Account for the sticky header
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

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
      default:
        return tab
    }
  }

  return (
    <div
      ref={navRef}
      className={`md:hidden relative z-20 mb-6 ${isSticky ? "fixed top-0 left-0 right-0 p-4 bg-gray-900/95 backdrop-blur-md shadow-lg" : ""}`}
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
          {["curriculum", "placements", "certifications", "career"].map((tab) => (
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

      {/* Add a spacer when the nav is sticky to prevent content jump */}
      {isSticky && <div className="h-[60px]"></div>}
    </div>
  )
}

export default MobileCourseTabs

