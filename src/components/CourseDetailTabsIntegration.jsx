"use client"

import { useState } from "react"
import { createTabClickHandler } from "../utils/tabScrollUtils"

// This shows how to integrate the tab scrolling functions with your existing components

const CourseDetailTabsIntegration = () => {
  const [activeTab, setActiveTab] = useState("curriculum")

  // Integrate with StickyNavigation component
  const handleTabUpdate = createTabClickHandler(setActiveTab, {
    sectionIdPrefix: "section-",
    scrollOffset: 80,
  })

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <StickyNavigation
          activeTab={activeTab}
          setActiveTab={handleTabUpdate} // Use the integrated handler
          onStickyChange={(isSticky) => {
            // Additional handling for sticky state changes
          }}
        />
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <MobileNavigation
          activeTab={activeTab}
          setActiveTab={handleTabUpdate} // Use the integrated handler
          onStickyChange={(isSticky) => {
            // Additional handling for sticky state changes
          }}
        />
      </div>

      {/* Section content would be here */}
    </>
  )
}

// Mock components to show integration
const StickyNavigation = ({ activeTab, setActiveTab, onStickyChange }) => {
  // Your existing StickyNavigation component
  return <div>StickyNavigation</div>
}

const MobileNavigation = ({ activeTab, setActiveTab, onStickyChange }) => {
  // Your existing MobileNavigation component
  return <div>MobileNavigation</div>
}

export default CourseDetailTabsIntegration

