/**
 * Utility function to scroll to the top of the page smoothly
 */
export const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  
  /**
   * Utility function to scroll to a specific element by ID
   * @param {string} elementId - The ID of the element to scroll to
   */
  export const scrollToElement = (elementId) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      })
    }
  }
  
  