"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"

const Header = ({ hideHeader, setIsContactOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Course categories with icons
  const courseCategories = [
    {
      name: "Programming & Development",
      courses: [
        {
          title: "Full Stack Development",
          path: "/full-stack-development-course",
          description: "Master both frontend and backend technologies",
          popular: true,
        },
        {
          title: "UI/UX Design",
          path: "/ui-ux-design-course",
          description: "Create intuitive and engaging user experiences",
          popular: true,
        },
        {
          title: "DevOps",
          path: "/devops-course",
          description: "Bridge the gap between development and operations",
        },
      ],
    },
    {
      name: "Data & AI",
      courses: [
        {
          title: "AI & Machine Learning",
          path: "/ai-ml-course",
          description: "Master advanced AI and ML concepts",
          popular: true,
        },
        {
          title: "Data Science",
          path: "/data-science-course",
          description: "Analyze complex data sets and derive insights",
          popular: true,
        },
        {
          title: "Business Analyst",
          path: "/business-analyst-course",
          description: "Analyze business domains and processes",
          new: true,
        },
      ],
    },
    {
      name: "Security & Infrastructure",
      courses: [
        {
          title: "Cybersecurity",
          path: "/cybersecurity-course",
          description: "Protect systems and networks from digital attacks",
          popular: true,
        },
        {
          title: "Cloud Computing",
          path: "/cloud-computing-course",
          description: "Design, deploy and manage cloud applications",
        },
        {
          title: "Blockchain",
          path: "/blockchain-course",
          description: "Develop decentralized blockchain applications",
          new: true,
        },
      ],
    },
    {
      name: "Salesforce Ecosystem",
      courses: [
        {
          title: "Salesforce Development",
          path: "/salesforce-course",
          description: "Become a certified Salesforce professional",
          popular: true,
        },
        {
          title: "Salesforce CPQ",
          path: "/salesforce-cpq-course",
          description: "Master Configure, Price, Quote processes",
          new: true,
        },
        {
          title: "Salesforce Agent Force",
          path: "/salesforce-agent-force-course",
          description: "Deliver exceptional customer service experiences",
          new: true,
        },
      ],
    },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hideHeader ? "opacity-0 pointer-events-none" : ""
      } ${scrollPosition > 0 ? "bg-gray-900/95 backdrop-blur-md shadow-lg" : ""}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center py-4">
          <Link to="/" className="flex items-center gap-3">
            {/*<div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-600 to-rose-500 flex items-center justify-center">
              <span className="font-bold text-white text-xl">LX</span>
            </div>*/}
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-rose-500">
              LearnX
            </span>
          </Link>

          <div className="flex-grow flex justify-center">
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors relative group">
                Home
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-violet-500 to-rose-500 group-hover:w-full transition-all duration-300"></span>
              </Link>

              {/* Mega Menu Dropdown */}
              <div className="relative group">
                <Link
                  to="/courses"
                  className="text-gray-300 hover:text-white transition-colors relative flex items-center gap-1"
                >
                  Courses
                  <ChevronDown size={16} className="ml-1 transition-transform duration-200 group-hover:rotate-180" />
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-violet-500 to-rose-500 group-hover:w-full transition-all duration-300"></span>
                </Link>

                {/* Mega Menu */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[1000px] rounded-xl bg-gray-900/95 backdrop-blur-lg shadow-xl border border-violet-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 -translate-y-3 group-hover:translate-y-0">
                  <div className="relative p-6">
                    {/* Header section */}
                    <div className="relative mb-6 flex justify-between items-center">
                      <h3 className="text-lg font-bold text-white">Explore Our Courses</h3>
                      <Link
                        to="/courses"
                        className="text-sm text-violet-400 hover:text-violet-300 flex items-center gap-1"
                      >
                        View All Courses
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>

                    {/* Main mega menu grid */}
                    <div className="relative grid grid-cols-4 gap-6">
                      {courseCategories.map((category, idx) => (
                        <div key={idx} className="space-y-4">
                          <h4 className="text-sm font-semibold text-gray-400 mb-3">{category.name}</h4>
                          <div className="space-y-4">
                            {category.courses.map((course, courseIdx) => (
                              <Link
                                key={courseIdx}
                                to={course.path}
                                className="block bg-gray-800/40 hover:bg-gray-800/70 border border-gray-700/50 hover:border-violet-500/50 rounded-lg p-4 transition-all"
                              >
                                <div className="mb-2 flex justify-between">
                                  <div className="flex gap-1">
                                    {course.popular && (
                                      <span className="inline-flex items-center rounded-full bg-rose-500/20 px-2 py-1 text-xs font-medium text-rose-400">
                                        Popular
                                      </span>
                                    )}
                                    {course.new && (
                                      <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-2 py-1 text-xs font-medium text-emerald-400">
                                        New
                                      </span>
                                    )}
                                  </div>
                                </div>
                                <h5 className="font-semibold text-white mb-1">{course.title}</h5>
                                <p className="text-xs text-gray-400">{course.description}</p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Footer/CTA section */}
                    <div className="relative mt-6 p-4 bg-gradient-to-r from-violet-900/30 to-rose-900/30 rounded-lg border border-violet-500/20">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <h4 className="text-white font-semibold">Not sure which course to choose?</h4>
                          <p className="text-sm text-gray-300">
                            Get personalized recommendations based on your career goals
                          </p>
                        </div>
                        <button
                          onClick={() => setIsContactOpen(true)}
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-600 to-rose-500 hover:from-violet-700 hover:to-rose-600 text-white rounded-lg transition-colors"
                        >
                          Get Expert Advice
                          <ChevronRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors relative group">
                About
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-violet-500 to-rose-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              {/* <Link to="/#testimonials" className="text-gray-300 hover:text-white transition-colors relative group">
                Testimonials
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-violet-500 to-rose-500 group-hover:w-full transition-all duration-300"></span>
              </Link> */}
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors relative group">
                Contact
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-violet-500 to-rose-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>
          </div>

          <div className="hidden md:flex">
            <button
              onClick={() => setIsContactOpen(true)}
              className="px-6 py-2 text-white rounded-lg bg-gradient-to-r from-violet-600 to-rose-500 hover:from-violet-700 hover:to-rose-600 transition-colors flex items-center gap-2"
            >
              Contact Now
              <ChevronRight size={16} />
            </button>
          </div>

          <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {isMenuOpen && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex flex-col">
              <div className="bg-gray-900 w-full max-w-full h-full min-h-screen p-6 shadow-2xl overflow-y-auto flex flex-col">
                <button
                  className="mb-6 text-gray-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close mobile menu"
                >
                  <X size={28} />
                </button>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-200 hover:text-white">Home</Link>
                    </li>
                    <li>
                      <button
                        onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                        className="flex items-center w-full text-lg text-gray-200 hover:text-white"
                      >
                        Courses
                        <ChevronDown size={18} className={`ml-2 transition-transform ${mobileCoursesOpen ? "rotate-180" : ""}`} />
                      </button>
                      {mobileCoursesOpen && (
                        <div className="mt-2 ml-2 space-y-4 max-h-80 overflow-y-auto pr-2">
                          {courseCategories.map((category, idx) => (
                            <div key={idx}>
                              <div className="text-xs font-semibold text-gray-400 mb-1">{category.name}</div>
                              <ul className="space-y-1">
                                {category.courses.map((course, cidx) => (
                                  <li key={cidx}>
                                    <Link
                                      to={course.path}
                                      onClick={() => setIsMenuOpen(false)}
                                      className="block px-2 py-2 rounded transition-colors bg-gray-800/40 hover:bg-gray-800/70 border border-gray-700/50 hover:border-violet-500/50"
                                    >
                                      <div className="flex justify-between items-center mb-1">
                                        <span className="font-semibold text-white">{course.title}</span>
                                        <span className="flex gap-1">
                                          {course.popular && (
                                            <span className="inline-flex items-center rounded-full bg-rose-500/20 px-2 py-0.5 text-xs font-medium text-rose-400">Popular</span>
                                          )}
                                          {course.new && (
                                            <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-400">New</span>
                                          )}
                                        </span>
                                      </div>
                                      <div className="text-xs text-gray-400">{course.description}</div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </li>
                    <li>
                      <Link to="/about" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-200 hover:text-white">About</Link>
                    </li>
                    <li>
                      <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-200 hover:text-white">Contact</Link>
                    </li>
                  </ul>
                </nav>
                <button
                  onClick={() => { setIsContactOpen(true); setIsMenuOpen(false); }}
                  className="mt-8 w-full py-2 bg-gradient-to-r from-violet-600 to-rose-500 text-white rounded-lg"
                >
                  Contact Now
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
