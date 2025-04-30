"use client"

import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { X, Menu, ChevronDown, ChevronUp } from "lucide-react"

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)
  const navRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const closeNav = () => {
    setIsOpen(false)
    setIsCoursesOpen(false)
  }

  const handleNavigation = (path) => {
    closeNav()
    navigate(path)
    
    // Smooth scroll to top with a slight delay to ensure navigation completes
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }, 100)
  }

  const handleCourseClick = (path) => {
    closeNav()
    navigate(path)
    
    // Smooth scroll to the course content section if it exists
    setTimeout(() => {
      const courseSection = document.getElementById("course-content-section")
      if (courseSection) {
        const headerHeight = 64 // Approximate mobile header height
        const yOffset = -headerHeight
        const y = courseSection.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({
          top: y,
          behavior: "smooth"
        })
      } else {
        // If no course section found, scroll to top
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      }
    }, 100)
  }

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
        aria-label="Open mobile menu"
      >
        <Menu size={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div ref={navRef} className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-gray-900 shadow-xl overflow-y-auto">
            <div className="p-4 flex justify-between items-center border-b border-gray-800">
              <div onClick={() => handleNavigation("/")} className="cursor-pointer">
                <img src="/logo.png" alt="LearnX Logo" className="h-8" />
              </div>
              <button
                onClick={closeNav}
                className="p-2 text-gray-300 hover:text-white focus:outline-none"
                aria-label="Close mobile menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="p-4">
              <ul className="space-y-2">
                <li>
                  <div
                    onClick={() => handleNavigation("/")}
                    className="block py-2 text-gray-300 hover:text-white font-medium cursor-pointer"
                  >
                    Home
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-center py-2">
                    <button
                      onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                      className="flex items-center text-gray-300 hover:text-white font-medium focus:outline-none w-full justify-between"
                    >
                      <span>Courses</span>
                      {isCoursesOpen ? (
                        <ChevronUp size={16} className="ml-1" />
                      ) : (
                        <ChevronDown size={16} className="ml-1" />
                      )}
                    </button>
                  </div>
                  {isCoursesOpen && (
                    <div className="mt-2 max-h-[60vh] overflow-y-auto bg-gray-800/50 rounded-lg border border-gray-700/50">
                      {/* Programming & Development */}
                      <div className="p-3 border-b border-gray-700/50">
                        <h3 className="text-sm font-semibold text-gray-400 mb-2">Programming & Development</h3>
                        <div className="space-y-2">
                          <div
                            onClick={() => handleCourseClick("/full-stack-development-course")}
                            className="flex justify-between items-center py-2 px-3 hover:bg-gray-700/50 rounded-lg cursor-pointer text-gray-300 hover:text-white"
                          >
                            <span>Full Stack Development</span>
                            <span className="text-xs px-2 py-1 bg-rose-500/20 text-rose-400 rounded-full">Popular</span>
                          </div>
                          <div
                            onClick={() => handleCourseClick("/ui-ux-design-course")}
                            className="flex justify-between items-center py-2 px-3 hover:bg-gray-700/50 rounded-lg cursor-pointer text-gray-300 hover:text-white"
                          >
                            <span>UI/UX Design</span>
                            <span className="text-xs px-2 py-1 bg-rose-500/20 text-rose-400 rounded-full">Popular</span>
                          </div>
                          <div
                            onClick={() => handleCourseClick("/devops-course")}
                            className="flex justify-between items-center py-2 px-3 hover:bg-gray-700/50 rounded-lg cursor-pointer text-gray-300 hover:text-white"
                          >
                            <span>DevOps</span>
                          </div>
                        </div>
                      </div>

                      {/* Data & AI */}
                      <div className="p-3 border-b border-gray-700/50">
                        <h3 className="text-sm font-semibold text-gray-400 mb-2">Data & AI</h3>
                        <div className="space-y-2">
                          <div
                            onClick={() => handleCourseClick("/ai-ml-course")}
                            className="flex justify-between items-center py-2 px-3 hover:bg-gray-700/50 rounded-lg cursor-pointer text-gray-300 hover:text-white"
                          >
                            <span>AI & Machine Learning</span>
                            <span className="text-xs px-2 py-1 bg-rose-500/20 text-rose-400 rounded-full">Popular</span>
                          </div>
                          <div
                            onClick={() => handleCourseClick("/data-science-course")}
                            className="flex justify-between items-center py-2 px-3 hover:bg-gray-700/50 rounded-lg cursor-pointer text-gray-300 hover:text-white"
                          >
                            <span>Data Science</span>
                            <span className="text-xs px-2 py-1 bg-rose-500/20 text-rose-400 rounded-full">Popular</span>
                          </div>
                          <div
                            onClick={() => handleCourseClick("/business-analyst-course")}
                            className="flex justify-between items-center py-2 px-3 hover:bg-gray-700/50 rounded-lg cursor-pointer text-gray-300 hover:text-white"
                          >
                            <span>Business Analyst</span>
                            <span className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-full">New</span>
                          </div>
                        </div>
                      </div>

                      {/* Security & Infrastructure */}
                      <div className="p-3 border-b border-gray-700/50">
                        <h3 className="text-sm font-semibold text-gray-400 mb-2">Security & Infrastructure</h3>
                        <div className="space-y-2">
                          <div
                            onClick={() => handleCourseClick("/cybersecurity-course")}
                            className="flex justify-between items-center py-2 px-3 hover:bg-gray-700/50 rounded-lg cursor-pointer text-gray-300 hover:text-white"
                          >
                            <span>Cybersecurity</span>
                            <span className="text-xs px-2 py-1 bg-rose-500/20 text-rose-400 rounded-full">Popular</span>
                          </div>
                          <div
                            onClick={() => handleCourseClick("/cloud-computing-course")}
                            className="flex justify-between items-center py-2 px-3 hover:bg-gray-700/50 rounded-lg cursor-pointer text-gray-300 hover:text-white"
                          >
                            <span>Cloud Computing</span>
                          </div>
                          <div
                            onClick={() => handleCourseClick("/blockchain-course")}
                            className="flex justify-between items-center py-2 px-3 hover:bg-gray-700/50 rounded-lg cursor-pointer text-gray-300 hover:text-white"
                          >
                            <span>Blockchain</span>
                            <span className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-full">New</span>
                          </div>
                        </div>
                      </div>

                      {/* Salesforce Ecosystem */}
                      <div className="p-3">
                        <h3 className="text-sm font-semibold text-gray-400 mb-2">Salesforce Ecosystem</h3>
                        <div className="space-y-2">
                          <div
                            onClick={() => handleCourseClick("/salesforce-course")}
                            className="flex justify-between items-center py-2 px-3 hover:bg-gray-700/50 rounded-lg cursor-pointer text-gray-300 hover:text-white"
                          >
                            <span>Salesforce Development</span>
                            <span className="text-xs px-2 py-1 bg-rose-500/20 text-rose-400 rounded-full">Popular</span>
                          </div>
                          <div
                            onClick={() => handleCourseClick("/salesforce-cpq-course")}
                            className="flex justify-between items-center py-2 px-3 hover:bg-gray-700/50 rounded-lg cursor-pointer text-gray-300 hover:text-white"
                          >
                            <span>Salesforce CPQ</span>
                            <span className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-full">New</span>
                          </div>
                          <div
                            onClick={() => handleCourseClick("/salesforce-agent-force-course")}
                            className="flex justify-between items-center py-2 px-3 hover:bg-gray-700/50 rounded-lg cursor-pointer text-gray-300 hover:text-white"
                          >
                            <span>Salesforce Agent Force</span>
                            <span className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-full">New</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <div
                    onClick={() => handleNavigation("/about")}
                    className="block py-2 text-gray-300 hover:text-white font-medium cursor-pointer"
                  >
                    About Us
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => handleNavigation("/contact")}
                    className="block py-2 text-gray-300 hover:text-white font-medium cursor-pointer"
                  >
                    Contact Us
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}

export default MobileNav

