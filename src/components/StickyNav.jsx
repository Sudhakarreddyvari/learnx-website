"use client"

import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { ChevronDown } from "lucide-react"
import MobileNav from "./MobileNav"

const StickyNav = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isCoursesOpen, setIsCoursesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCoursesOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleNavigation = (path) => {
    setIsCoursesOpen(false)
    navigate(path)
    window.scrollTo(0, 0)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div onClick={() => handleNavigation("/")} className="flex items-center cursor-pointer">
            <img src="/logo.png" alt="LearnX Logo" className="h-10" />
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-8">
                <li>
                  <div
                    onClick={() => handleNavigation("/")}
                    className="text-gray-800 hover:text-blue-600 font-medium cursor-pointer"
                  >
                    Home
                  </div>
                </li>
                <li className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                    className="flex items-center text-gray-800 hover:text-blue-600 font-medium focus:outline-none"
                  >
                    Courses <ChevronDown size={16} className="ml-1" />
                  </button>

                  {isCoursesOpen && (
                    <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg overflow-hidden z-20">
                      <div className="py-2 max-h-[70vh] overflow-y-auto">
                        <div
                          onClick={() => handleNavigation("/ai-ml-course")}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                        >
                          AI & Machine Learning
                        </div>
                        <div
                          onClick={() => handleNavigation("/data-science-course")}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                        >
                          Data Science
                        </div>
                        <div
                          onClick={() => handleNavigation("/cybersecurity-course")}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                        >
                          Cybersecurity
                        </div>
                        <div
                          onClick={() => handleNavigation("/cloud-computing-course")}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                        >
                          Cloud Computing
                        </div>
                        <div
                          onClick={() => handleNavigation("/blockchain-course")}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                        >
                          Blockchain
                        </div>
                        <div
                          onClick={() => handleNavigation("/devops-course")}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                        >
                          DevOps
                        </div>
                        <div
                          onClick={() => handleNavigation("/ui-ux-design-course")}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                        >
                          UI/UX Design
                        </div>
                        <div
                          onClick={() => handleNavigation("/full-stack-development-course")}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                        >
                          Full Stack Development
                        </div>
                        <div
                          onClick={() => handleNavigation("/digital-marketing-course")}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                        >
                          Digital Marketing
                        </div>
                        <div
                          onClick={() => handleNavigation("/automation-testing-course")}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                        >
                          Automation Testing
                        </div>
                        <div
                          onClick={() => handleNavigation("/salesforce-course")}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                        >
                          Salesforce
                        </div>
                        <div
                          onClick={() => handleNavigation("/business-analyst-course")}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                        >
                          Business Analyst
                        </div>
                        <div
                          onClick={() => handleNavigation("/salesforce-cpq-course")}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                        >
                          Salesforce CPQ
                        </div>
                        <div
                          onClick={() => handleNavigation("/salesforce-agent-force-course")}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer"
                        >
                          Salesforce Agent Force
                        </div>
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <div
                    onClick={() => handleNavigation("/about")}
                    className="text-gray-800 hover:text-blue-600 font-medium cursor-pointer"
                  >
                    About Us
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => handleNavigation("/contact")}
                    className="text-gray-800 hover:text-blue-600 font-medium cursor-pointer"
                  >
                    Contact Us
                  </div>
                </li>
              </ul>
            </nav>
            <button
              className="py-2 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300"
            >
              Enquire Now
            </button>
          </div>

          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default StickyNav

