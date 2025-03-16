"use client"

import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { X, Menu, ChevronDown, ChevronUp } from "lucide-react"

const MobileNav = ({ toggleForm }) => {
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
    window.scrollTo(0, 0)
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
          <div ref={navRef} className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-xl overflow-y-auto">
            <div className="p-4 flex justify-between items-center border-b">
              <div onClick={() => handleNavigation("/")} className="cursor-pointer">
                <img src="/logo.png" alt="LearnX Logo" className="h-8" />
              </div>
              <button
                onClick={closeNav}
                className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                aria-label="Close mobile menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="p-4">
              <ul className="space-y-4">
                <li>
                  <div
                    onClick={() => handleNavigation("/")}
                    className="block py-2 text-gray-800 hover:text-blue-600 font-medium cursor-pointer"
                  >
                    Home
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-center py-2">
                    <button
                      onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                      className="flex items-center text-gray-800 hover:text-blue-600 font-medium focus:outline-none"
                    >
                      Courses
                      {isCoursesOpen ? (
                        <ChevronUp size={16} className="ml-1" />
                      ) : (
                        <ChevronDown size={16} className="ml-1" />
                      )}
                    </button>
                  </div>
                  {isCoursesOpen && (
                    <div className="pl-4 mt-2 space-y-2 max-h-[50vh] overflow-y-auto bg-gray-50 rounded-md shadow-inner p-2">
                      <div
                        onClick={() => handleNavigation("/ai-ml-course")}
                        className="block py-2 hover:text-blue-600 cursor-pointer"
                      >
                        AI & Machine Learning
                      </div>
                      <div
                        onClick={() => handleNavigation("/data-science-course")}
                        className="block py-2 hover:text-blue-600 cursor-pointer"
                      >
                        Data Science
                      </div>
                      <div
                        onClick={() => handleNavigation("/cybersecurity-course")}
                        className="block py-2 hover:text-blue-600 cursor-pointer"
                      >
                        Cybersecurity
                      </div>
                      <div
                        onClick={() => handleNavigation("/cloud-computing-course")}
                        className="block py-2 hover:text-blue-600 cursor-pointer"
                      >
                        Cloud Computing
                      </div>
                      <div
                        onClick={() => handleNavigation("/blockchain-course")}
                        className="block py-2 hover:text-blue-600 cursor-pointer"
                      >
                        Blockchain
                      </div>
                      <div
                        onClick={() => handleNavigation("/devops-course")}
                        className="block py-2 hover:text-blue-600 cursor-pointer"
                      >
                        DevOps
                      </div>
                      <div
                        onClick={() => handleNavigation("/ui-ux-design-course")}
                        className="block py-2 hover:text-blue-600 cursor-pointer"
                      >
                        UI/UX Design
                      </div>
                      <div
                        onClick={() => handleNavigation("/full-stack-development-course")}
                        className="block py-2 hover:text-blue-600 cursor-pointer"
                      >
                        Full Stack Development
                      </div>
                      <div
                        onClick={() => handleNavigation("/digital-marketing-course")}
                        className="block py-2 hover:text-blue-600 cursor-pointer"
                      >
                        Digital Marketing
                      </div>
                      <div
                        onClick={() => handleNavigation("/automation-testing-course")}
                        className="block py-2 hover:text-blue-600 cursor-pointer"
                      >
                        Automation Testing
                      </div>
                      <div
                        onClick={() => handleNavigation("/salesforce-course")}
                        className="block py-2 hover:text-blue-600 cursor-pointer"
                      >
                        Salesforce
                      </div>
                      <div
                        onClick={() => handleNavigation("/business-analyst-course")}
                        className="block py-2 hover:text-blue-600 cursor-pointer"
                      >
                        Business Analyst
                      </div>
                      <div
                        onClick={() => handleNavigation("/salesforce-cpq-course")}
                        className="block py-2 hover:text-blue-600 cursor-pointer"
                      >
                        Salesforce CPQ
                      </div>
                      <div
                        onClick={() => handleNavigation("/salesforce-agent-force-course")}
                        className="block py-2 hover:text-blue-600 cursor-pointer"
                      >
                        Salesforce Agent Force
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <div
                    onClick={() => handleNavigation("/about")}
                    className="block py-2 text-gray-800 hover:text-blue-600 font-medium cursor-pointer"
                  >
                    About Us
                  </div>
                </li>
                <li>
                  <div
                    onClick={() => handleNavigation("/contact")}
                    className="block py-2 text-gray-800 hover:text-blue-600 font-medium cursor-pointer"
                  >
                    Contact Us
                  </div>
                </li>
                <li className="pt-4">
                  <button
                    onClick={() => {
                      closeNav()
                      toggleForm()
                    }}
                    className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-md hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300"
                  >
                    Enquire Now
                  </button>
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

