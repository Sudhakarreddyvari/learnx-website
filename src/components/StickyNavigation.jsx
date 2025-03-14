"use client"

import { useState, useEffect, useRef } from "react"

const StickyNavigation = ({ activeTab, setActiveTab, onStickyChange }) => {
  const [isSticky, setIsSticky] = useState(false)
  const navRef = useRef(null)
  const headerHeight = 72 // Approximate header height

  useEffect(() => {
    // Find the section we want to observe
    const sectionToObserve = document.getElementById("course-content-section")
    if (!sectionToObserve) return

    // Create the intersection observer for the section
    const createObserver = () => {
      return new IntersectionObserver(
        (entries) => {
          const [entry] = entries

          // Only make the nav sticky when the section is intersecting (visible)
          // AND the top of the section is above the viewport (scrolled under header)
          const shouldBeSticky = entry.isIntersecting && entry.boundingClientRect.top <= headerHeight

          if (shouldBeSticky !== isSticky) {
            setIsSticky(shouldBeSticky)
            if (onStickyChange) {
              onStickyChange(shouldBeSticky)
            }
          }
        },
        {
          // Observe a bit more than just the visible area to catch the section early
          rootMargin: `-${headerHeight}px 0px -${window.innerHeight - headerHeight - 100}px 0px`,
          threshold: [0, 0.1, 0.5, 0.9, 1.0], // Multiple thresholds for better detection
        },
      )
    }

    // Create initial observer
    let observer = createObserver()

    // Start observing the section
    observer.observe(sectionToObserve)

    // Handle resize events
    const handleResize = () => {
      // Re-create observer with updated dimensions
      observer.disconnect()
      observer = createObserver()
      observer.observe(sectionToObserve)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      observer.disconnect()
      window.removeEventListener("resize", handleResize)
    }
  }, [isSticky, onStickyChange, headerHeight])

  const handleTabClick = (tab) => {
    setActiveTab(tab)

    // Scroll to the section
    const section = document.getElementById(`section-${tab}`)
    if (section) {
      const offset = headerHeight + (isSticky ? 72 : 0) // Account for header and sticky nav
      const elementPosition = section.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative z-20">
      <div
        ref={navRef}
        className={`w-full py-4 transition-all duration-300 ${
          isSticky
            ? "fixed top-[72px] left-0 bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-violet-500/20"
            : ""
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

      {/* Space to prevent content jump when nav becomes sticky */}
      {isSticky && <div className="h-[72px]"></div>}
    </div>
  )
}

export default StickyNavigation

