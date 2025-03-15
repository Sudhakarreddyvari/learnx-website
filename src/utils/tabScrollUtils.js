/**
 * Utility function to scroll to a specific section when a tab is clicked
 *
 * @param {string} sectionId - The ID of the section to scroll to
 * @param {number} offset - Optional offset from the top (useful for fixed headers), defaults to 80px
 * @param {string} behavior - Optional scrolling behavior, defaults to 'smooth'
 */
export const scrollToSection = (sectionId, offset = 80, behavior = "smooth") => {
    const section = document.getElementById(sectionId)
  
    if (section) {
      // Get the section's position
      const sectionPosition = section.getBoundingClientRect().top
  
      // Calculate the scroll position with offset
      const offsetPosition = sectionPosition + window.pageYOffset - offset
  
      // Perform the scroll
      window.scrollTo({
        top: offsetPosition,
        behavior: behavior,
      })
    }
  }
  
  /**
   * Sets up tab click listeners that scroll to the corresponding sections
   *
   * @param {Object} options - Configuration options
   * @param {string} options.tabSelector - CSS selector for the tab elements
   * @param {string} options.sectionIdPrefix - Prefix for section IDs (e.g., "section-" for "section-curriculum")
   * @param {string} options.tabIdAttribute - Attribute on tab elements that holds the tab ID (default: "data-tab-id")
   * @param {number} options.scrollOffset - Offset in pixels for scrolling (default: 80)
   * @param {Function} options.onTabClick - Optional callback when a tab is clicked
   */
  export const setupTabScrolling = (options) => {
    const {
      tabSelector,
      sectionIdPrefix = "section-",
      tabIdAttribute = "data-tab-id",
      scrollOffset = 80,
      onTabClick = null,
    } = options
  
    const tabs = document.querySelectorAll(tabSelector)
  
    tabs.forEach((tab) => {
      tab.addEventListener("click", (e) => {
        // Prevent default if it's a link
        if (tab.tagName === "A") {
          e.preventDefault()
        }
  
        // Get tab ID from attribute or data attribute
        const tabId = tab.getAttribute(tabIdAttribute) || tab.dataset.tabId
  
        if (tabId) {
          // Construct section ID
          const sectionId = `${sectionIdPrefix}${tabId}`
  
          // Scroll to the section
          scrollToSection(sectionId, scrollOffset)
  
          // Call the callback if provided
          if (onTabClick && typeof onTabClick === "function") {
            onTabClick(tabId, tab)
          }
        }
      })
    })
  }
  
  /**
   * Creates a function that handles both tab state and scrolling in one call
   * Useful for React components
   *
   * @param {Function} setActiveTab - State setter function for the active tab
   * @param {Object} options - Additional options as in setupTabScrolling
   * @returns {Function} - A function to handle tab clicks
   */
  export const createTabClickHandler = (setActiveTab, options = {}) => {
    const { sectionIdPrefix = "section-", scrollOffset = 80, beforeScroll = null, afterScroll = null } = options
  
    return (tabId) => {
      // Update active tab state
      setActiveTab(tabId)
  
      // Call before scroll callback if provided
      if (beforeScroll && typeof beforeScroll === "function") {
        beforeScroll(tabId)
      }
  
      // Construct section ID and scroll to it
      const sectionId = `${sectionIdPrefix}${tabId}`
  
      // Use setTimeout to ensure the state update has occurred
      // before scrolling, especially important in React
      setTimeout(() => {
        scrollToSection(sectionId, scrollOffset)
  
        // Call after scroll callback if provided
        if (afterScroll && typeof afterScroll === "function") {
          afterScroll(tabId)
        }
      }, 10)
    }
  }
  
  