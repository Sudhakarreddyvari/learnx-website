"use client"

import { useState, useEffect, useRef } from "react"

const StickyNav = ({ activeSection, onSectionChange }) => {
  const [isSticky, setIsSticky] = useState(false)
  const [hasViewedCurriculum, setHasViewedCurriculum] = useState(false)
  const navRef = useRef(null)
  const sectionRef = useRef(null)

  const sections = [
    { id: "curriculum", label: "Curriculum" },
    { id: "placements", label: "Placements" },
    { id: "certifications", label: "Certifications" },
    { id: "career", label: "Career Counselling" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current || !sectionRef.current) return

      const { top: navTop } = navRef.current.getBoundingClientRect()
      const { bottom: sectionBottom } = sectionRef.current.getBoundingClientRect()

      // Check if user has scrolled past curriculum section
      const curriculumSection = document.getElementById("curriculum-section")
      if (curriculumSection) {
        const { bottom: curriculumBottom } = curriculumSection.getBoundingClientRect()
        if (curriculumBottom < window.innerHeight) {
          setHasViewedCurriculum(true)
        }
      }

      // Only enable sticky behavior after viewing curriculum
      if (hasViewedCurriculum) {
        setIsSticky(navTop <= 0 && sectionBottom > 0)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [hasViewedCurriculum])

  const handleClick = (sectionId) => {
    onSectionChange(sectionId)
    const element = document.getElementById(`${sectionId}-section`)
    if (element) {
      const offset = isSticky ? 80 : 0 // Account for sticky nav height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div ref={sectionRef} className="relative z-20">
      <div
        ref={navRef}
        className={`w-full transition-all duration-300 py-4 ${
          isSticky ? "fixed top-0 left-0 bg-gray-900/95 backdrop-blur-md border-b border-violet-500/20 shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleClick(section.id)}
                className={`px-6 py-3 rounded-lg text-base font-medium transition-all relative overflow-hidden ${
                  activeSection === section.id
                    ? "bg-gradient-to-r from-violet-600 to-rose-500 text-white"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-800 border border-violet-500/20"
                }`}
              >
                <span className="relative z-10">{section.label}</span>
                {activeSection === section.id && (
                  <>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 glow-effect-small opacity-50" />
                  </>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Spacer to prevent content jump when nav becomes sticky */}
      {isSticky && <div className="h-[72px]" />}
    </div>
  )
}

export default StickyNav

