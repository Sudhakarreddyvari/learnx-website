"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import FormButton from "./FormButton"

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
          title: "Fullstack Python",
          path: "/full-stack-python-course",
          description: "Master Python for both frontend and backend web development",
          popular: true,
        },
        {
          title: "Fullstack Java",
          path: "/full-stack-java-course",
          description: "Master Java, Spring Boot, React, and cloud deployment for enterprise web apps",
          popular: true,
        },
        {
          title: "UI/UX",
          path: "/ui-ux-design-course",
          description: "Create intuitive and engaging user experiences",
          popular: true,
        },
        {
          title: "Fullstack MERN",
          path: "/full-stack-mern-course",
          description: "Master MERN stack for full-stack web development",
          popular: true,
        },
        {
          title: "Fullstack With AI",
          path: "/fullstack-with-ai-course",
          description: "Master Fullstack with AI for advanced web development",
          new: true,
          popular: true,
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
          title: "Data Analytics",
          path: "/data-analytics",
          description: "Analyze and visualize data for business insights",
        },
      ],
    },
    {
      name: "Security & Infrastructure",
      courses: [
        {
          title: "DevOps",
          path: "/devops-course",
          description: "Bridge the gap between development and operations",
        },
        {
          title: "AWS",
          path: "/aws-course",
          description: "Master AWS cloud infrastructure and services",
        },
        {
          title: "Cyber Security",
          path: "/cybersecurity-course",
          description: "Protect systems and networks from digital attacks",
          popular: true,
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
          title: "Salesforce Agentforce",
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
            <img src="/LearnX logo.png" alt="LearnX Logo" className="h-12 w-12 object-contain" />
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
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[1200px] rounded-xl bg-gray-900/95 backdrop-blur-lg shadow-xl border border-violet-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 -translate-y-3 group-hover:translate-y-0 flex justify-center">
                  <div className="relative p-6 w-[1200px] mx-auto">
                    {/* Header section */}
                    <div className="relative mb-6 flex justify-between items-center">
                      <h3 className="text-lg font-bold text-white">All Courses</h3>
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
                    {/* List of all courses in four columns with categories */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-h-[500px] overflow-y-auto w-full mx-auto">
                      {[
                        {
                          category: "Programming & Development",
                          courses: [
                            { title: "Fullstack Python", path: "/full-stack-python-course" },
                            { title: "Fullstack Java", path: "/full-stack-java-course" },
                            { title: "Fullstack MERN", path: "/full-stack-mern-course" },
                            { title: "Fullstack With AI", path: "/fullstack-with-ai-course" },
                            { title: "UI/UX Design", path: "/ui-ux-design-course" },
                          ],
                        },
                        {
                          category: "Data & AI",
                          courses: [
                            { title: "AI & Machine Learning", path: "/ai-ml-course" },
                            { title: "Data Science", path: "/data-science-course" },
                            { title: "Data Analytics", path: "/data-analytics" },
                            { title: "Power BI", path: "/powerbi" },
                          ],
                        },
                        {
                          category: "Security & Infrastructure",
                          courses: [
                            { title: "DevOps", path: "/devops-course" },
                            { title: "AWS", path: "/aws-course" },
                            { title: "Cyber Security", path: "/cybersecurity-course" },
                            { title: "ServiceNow", path: "/servicenow" },
                          ],
                        },
                        {
                          category: "Salesforce Ecosystem",
                          courses: [
                            { title: "Salesforce Development", path: "/salesforce-course" },
                            { title: "Salesforce CPQ", path: "/salesforce-cpq-course" },
                            { title: "Salesforce Agentforce", path: "/salesforce-agent-force-course" },
                            { title: "Salesforce Health Cloud", path: "/salesforce-health-cloud-course" },
                            { title: "Salesforce Data Cloud", path: "/salesforce-data-cloud-course" },
                          ],
                        },
                        {
                          category: "Business",
                          courses: [
                            { title: "Business Analyst", path: "/business-analyst-course" },
                          ],
                        },
                        {
                          category: "Testing",
                          courses: [
                            { title: "Automation Testing", path: "/automation-testing-course" },
                          ],
                        },
                        {
                          category: "Marketing",
                          courses: [
                            { title: "Digital Marketing", path: "/digital-marketing" },
                          ],
                        },
                        {
                          category: "Blockchain",
                          courses: [
                            { title: "Blockchain", path: "/blockchain-course" },
                          ],
                        },
                      ].map((col, colIdx) => (
                        <div key={colIdx}>
                          <h4 className="text-sm font-semibold text-violet-400 mb-2">{col.category}</h4>
                          <ul className="space-y-2">
                            {col.courses.map((course, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <Link to={course.path} className="block px-4 py-2 rounded hover:bg-violet-900/30 text-white text-base">
                                  {course.title}
                                </Link>
                                {(() => {
                                  // Add tags for popular and new courses
                                  const popularCourses = [
                                    "Fullstack Python",
                                    "Fullstack Java",
                                    "AI & Machine Learning",
                                    "Data Science",
                                    "UI/UX Design",
                                    "AWS",
                                    "Data Analytics",
                                    "Fullstack MERN",
                                    "Digital Marketing",
                                  ];
                                  const newCourses = [
                                    "Salesforce Health Cloud",
                                    "Salesforce Data Cloud",
                                    "Power BI",
                                    "ServiceNow",
                                    "Automation Testing",
                                    "Salesforce Agentforce",
                                    "Salesforce CPQ",
                                  ];
                                  return (
                                    <>
                                      {popularCourses.includes(course.title) && (
                                        <span className="inline-flex items-center rounded-full bg-rose-500/20 px-2 py-0.5 text-xs font-medium text-rose-400 ml-1">Popular</span>
                                      )}
                                      {newCourses.includes(course.title) && (
                                        <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-medium text-emerald-400 ml-1">New</span>
                                      )}
                                    </>
                                  );
                                })()}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    {/* CTA Section below all courses list */}
                    <div className="relative mt-6 p-4 bg-gradient-to-r from-violet-900/30 to-rose-900/30 rounded-lg border border-violet-500/20 flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <h4 className="text-white font-semibold">Not sure which course to choose?</h4>
                          <p className="text-sm text-gray-300">
                            Get personalized recommendations based on your career goals
                          </p>
                        </div>
                      <FormButton variant="primary" context="Get Expert Advice" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-rose-500 hover:from-violet-700 hover:to-rose-600 text-white rounded-lg transition-colors">
                          Get Expert Advice
                          <ChevronRight size={16} />
                        </FormButton>
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
            <FormButton variant="primary" className="px-6 py-2 rounded-lg flex items-center gap-2 text-white font-medium">
              Contact Now
              <ChevronRight size={16} />
            </FormButton>
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
                <FormButton variant="primary" className="mt-8 w-full py-2 rounded-lg">
                  Contact Now
                </FormButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
