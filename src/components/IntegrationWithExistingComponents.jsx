"use client";

import React from "react";

// Constants for offsets
const HEADER_HEIGHT = 64; // Mobile header height
const NAV_HEIGHT = 56; // Mobile nav height when sticky
const STICKY_OFFSET = 152; // Header + sticky nav height
const NON_STICKY_OFFSET = 80; // Header height without sticky nav

// For your StickyNavigation.jsx component
export const StickyNavigationWithScroll = ({ activeTab, setActiveTab }) => {
  const [isSticky, setIsSticky] = React.useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);

    // Scroll to the section with the tab's ID
    const section = document.getElementById(`section-${tab}`);
    if (!section) {
      console.warn(`Section with ID section-${tab} not found.`);
      return;
    }

    // Calculate offset based on sticky state
    const offset = isSticky ? STICKY_OFFSET : NON_STICKY_OFFSET;

    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  // Render tabs with updated click handler
  return (
    <nav>
      <ul>
        <li onClick={() => handleTabClick("curriculum")}>
          <button className={activeTab === "curriculum" ? "active" : ""}>Curriculum</button>
        </li>
        <li onClick={() => handleTabClick("placements")}>
          <button className={activeTab === "placements" ? "active" : ""}>Placements</button>
        </li>
        <li onClick={() => handleTabClick("certifications")}>
          <button className={activeTab === "certifications" ? "active" : ""}>Certifications</button>
        </li>
        <li onClick={() => handleTabClick("career")}>
          <button className={activeTab === "career" ? "active" : ""}>Career Counselling</button>
        </li>
      </ul>
    </nav>
  );
};

// For your MobileNavigation.jsx component
export const MobileNavigationWithScroll = ({ activeTab, setActiveTab }) => {
  const [isSticky, setIsSticky] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsOpen(false); // Close dropdown if applicable

    // Scroll to the section
    const section = document.getElementById(`section-${tab}`);
    if (!section) {
      console.warn(`Section with ID section-${tab} not found.`);
      return;
    }

    const offset = HEADER_HEIGHT + (isSticky ? NAV_HEIGHT : 0);

    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  // Render tabs with updated click handler
  return (
    <nav>
      <select
        value={activeTab}
        onChange={(e) => handleTabClick(e.target.value)}
      >
        <option value="curriculum">Curriculum</option>
        <option value="placements">Placements</option>
        <option value="certifications">Certifications</option>
        <option value="career">Career Counselling</option>
      </select>
    </nav>
  );
};