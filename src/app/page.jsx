"use client"

import { useState } from "react"
import StickyNav from "@/components/StickyNav"
import MobileNav from "@/components/MobileNav"

export default function Page() {
  const [activeSection, setActiveSection] = useState("curriculum")

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Course content sections */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Course Details</h1>

        {/* Navigation */}
        <div className="hidden md:block">
          <StickyNav activeSection={activeSection} onSectionChange={setActiveSection} />
        </div>
        <div className="md:hidden">
          <MobileNav activeSection={activeSection} onSectionChange={setActiveSection} />
        </div>

        {/* Content Sections */}
        <div id="curriculum-section" className="min-h-screen py-8">
          <h2 className="text-2xl font-bold mb-4">Curriculum</h2>
          {/* Curriculum content */}
        </div>

        <div id="placements-section" className="min-h-screen py-8">
          <h2 className="text-2xl font-bold mb-4">Placements</h2>
          {/* Placements content */}
        </div>

        <div id="certifications-section" className="min-h-screen py-8">
          <h2 className="text-2xl font-bold mb-4">Certifications</h2>
          {/* Certifications content */}
        </div>

        <div id="career-section" className="min-h-screen py-8">
          <h2 className="text-2xl font-bold mb-4">Career Counselling</h2>
          {/* Career counselling content */}
        </div>
      </div>
    </div>
  )
}

