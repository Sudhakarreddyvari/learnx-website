"use client"

import { useState, useEffect, useRef } from "react"

const CourseDetailsNav = ({ activeTab, setActiveTab }) => {
  const [isSticky, setIsSticky] = useState(false)
  const navRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current || !sectionRef.current) return

      const navPosition = navRef.current.getBoundingClientRect().top
      const sectionBottom = sectionRef.current.getBoundingClientRect().bottom

      // Make nav sticky when it reaches the top of the viewport
      if (navPosition <= 0 && sectionBottom > 0) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const yOffset = -80 // Account for the sticky header
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  const handleTabClick = (tab) => {
    setActiveTab(tab)
    scrollToSection(`section-${tab}`)
  }

  return (
    <div ref={sectionRef} className="relative z-20">
      <div
        ref={navRef}
        className={`w-full bg-gray-900/95 backdrop-blur-md transition-all duration-300 py-4 ${
          isSticky ? "fixed top-0 left-0 shadow-lg border-b border-violet-500/20" : ""
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {["curriculum", "placements", "certifications", "career"].map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={`px-6 py-3 rounded-lg text-base font-medium transition-all relative overflow-hidden ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-violet-600 to-rose-500 text-white"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-800 border border-violet-500/20"
                }`}
              >
                <span className="relative z-10">
                  {tab === "curriculum" && "Curriculum"}
                  {tab === "placements" && "Placements"}
                  {tab === "certifications" && "Certifications"}
                  {tab === "career" && "Career Counselling"}
                </span>
                {activeTab === tab && <div className="absolute inset-0 glow-effect-small opacity-50"></div>}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Add a spacer when the nav is sticky to prevent content jump */}
      {isSticky && <div className="h-[72px]"></div>}
    </div>
  )
}

export default CourseDetailsNav

