"use client"

import { useState, useEffect } from "react"
import { createTabClickHandler } from "../utils/tabScrollUtils"

const TabScrollExample = () => {
  const [activeTab, setActiveTab] = useState("curriculum")

  // Create a handler that updates the active tab state and scrolls to the section
  const handleTabClick = createTabClickHandler(setActiveTab, {
    sectionIdPrefix: "section-",
    scrollOffset: 80, // Adjust this based on your header height
    beforeScroll: (tabId) => {
      console.log(`Tab clicked: ${tabId}`)
    },
  })

  // Example of manually handling scroll if needed
  useEffect(() => {
    // This could be used to sync the active tab with the visible section on scroll
    const handleScroll = () => {
      // Implementation would depend on your specific requirements
      // For example, finding which section is most visible in the viewport
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div>
      {/* Tab Navigation */}
      <div className="sticky top-0 bg-gray-950 z-20 border-b border-gray-800 py-4">
        <div className="container mx-auto px-6">
          <div className="flex justify-center space-x-4">
            {[
              { id: "curriculum", label: "Curriculum" },
              { id: "placements", label: "Placements" },
              { id: "certifications", label: "Certifications" },
              { id: "career", label: "Career Counselling" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`px-6 py-3 rounded-lg text-base font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-violet-600 to-rose-500 text-white"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-800 border border-violet-500/20"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content Sections */}
      <div className="py-8">
        <div className="container mx-auto px-6">
          {/* Curriculum Section */}
          <div id="section-curriculum" className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Curriculum</h2>
            <p className="text-gray-300 mb-4">Our comprehensive curriculum is designed by industry experts...</p>
            {/* More curriculum content */}
            <div className="h-64 bg-gray-800/40 rounded-lg p-4">Curriculum Content</div>
          </div>

          {/* Placements Section */}
          <div id="section-placements" className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Placements</h2>
            <p className="text-gray-300 mb-4">Our students get placed at top companies worldwide...</p>
            {/* More placements content */}
            <div className="h-64 bg-gray-800/40 rounded-lg p-4">Placements Content</div>
          </div>

          {/* Certifications Section */}
          <div id="section-certifications" className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Certifications</h2>
            <p className="text-gray-300 mb-4">Earn industry-recognized certifications...</p>
            {/* More certifications content */}
            <div className="h-64 bg-gray-800/40 rounded-lg p-4">Certifications Content</div>
          </div>

          {/* Career Counselling Section */}
          <div id="section-career" className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Career Counselling</h2>
            <p className="text-gray-300 mb-4">Get personalized career guidance from our expert counselors...</p>
            {/* More career counselling content */}
            <div className="h-64 bg-gray-800/40 rounded-lg p-4">Career Counselling Content</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TabScrollExample

