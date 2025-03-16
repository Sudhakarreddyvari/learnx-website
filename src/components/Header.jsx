"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"

const Header = ({ setIsFormOpen, hideHeader }) => {
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
      className={`sticky top-0 z-[100] backdrop-blur-xl transition-all duration-300 ${
        scrollPosition > 50 ? "bg-gray-950/90 py-3" : "bg-transparent py-5"
      } ${hideHeader ? "transform -translate-y-full" : "transform translate-y-0"}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LearnX%20-Logo-yVpBmzoHbcSZPJFoySqW3YsLsmtt0o.png"
                alt="LearnX Logo"
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-rose-500">
              LearnX
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
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
                        onClick={() => setIsFormOpen(true)}
                        className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg border border-white/20 transition-colors"
                      >
                        Talk to an Advisor
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

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-5 py-2.5 text-sm font-medium text-white rounded-md border border-violet-700/50 hover:border-violet-500 hover:bg-violet-700/20 transition-all relative group overflow-hidden"
            >
              <span className="relative z-10">Log In</span>
              <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-gradient-to-r from-violet-800/20 to-violet-600/20 transition-transform duration-300"></div>
            </button>
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-5 py-2.5 text-sm font-medium text-white rounded-md bg-gradient-to-r from-violet-600 to-rose-500 hover:from-violet-700 hover:to-rose-600 transition-colors relative group overflow-hidden"
            >
              <span className="relative z-10">Sign Up</span>
              <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-white/10 transition-transform duration-300"></div>
              <div className="absolute inset-0 glow-effect-small opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-6 pb-3">
            <nav className="flex flex-col gap-3">
              <Link
                to="/"
                className="px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Courses Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors"
                  onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                >
                  <span>Courses</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${mobileCoursesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Mobile Courses Submenu */}
                {mobileCoursesOpen && (
                  <div className="mt-1 space-y-4 pl-4">
                    {courseCategories.map((category, idx) => (
                      <div key={idx} className="pl-2 border-l-2 border-violet-500/30">
                        <h4 className="text-sm font-semibold text-gray-400 mb-2">{category.name}</h4>
                        <div className="space-y-2">
                          {category.courses.map((course, courseIdx) => (
                            <Link
                              key={courseIdx}
                              to={course.path}
                              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors flex justify-between items-center"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <span>{course.title}</span>
                              {(course.popular || course.new) && (
                                <span
                                  className={`text-xs px-2 py-0.5 rounded-full ${
                                    course.popular
                                      ? "bg-rose-500/20 text-rose-400"
                                      : "bg-emerald-500/20 text-emerald-400"
                                  }`}
                                >
                                  {course.popular ? "Popular" : "New"}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}

                    <div className="pt-2 pb-1">
                      <Link
                        to="/courses"
                        className="block px-4 py-2 text-violet-400 hover:text-violet-300 hover:bg-gray-800/50 rounded-lg transition-colors flex items-center justify-between"
                        onClick={() => {
                          setIsMenuOpen(false)
                          setMobileCoursesOpen(false)
                        }}
                      >
                        <span>View All Courses</span>
                        <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/#testimonials"
                className="px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                to="/contact"
                className="px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            <div className="flex gap-3 mt-5">
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  setIsFormOpen(true)
                }}
                className="flex-1 px-4 py-3 text-sm font-medium text-white rounded-md border border-violet-700/50 hover:bg-violet-700/20 transition-colors"
              >
                Log In
              </button>
              <button
                onClick={() => {
                  setIsMenuOpen(false)
                  setIsFormOpen(true)
                }}
                className="flex-1 px-4 py-3 text-sm font-medium text-white rounded-md bg-gradient-to-r from-violet-600 to-rose-500 hover:from-violet-700 hover:to-rose-600 transition-colors"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

