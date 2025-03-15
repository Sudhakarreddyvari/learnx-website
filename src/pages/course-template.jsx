"use client"
import {
  Star,
  CheckCircle,
  Briefcase,
  Award,
  Users,
  BookOpen,
  Calendar,
  Monitor,
  Database,
  FileText,
  MessageSquare,
  Cpu,
  Brain,
  Sparkles,
  Lightbulb,
  GraduationCap,
  Code,
  BarChart,
  Download,
  Shield,
  Cloud,
} from "lucide-react"
import { useEffect } from "react"

import { useState } from "react"

import StickyNavigation from "../components/StickyNavigation"
import MobileNavigation from "../components/MobileNavigation"
import "../App.css"
import "../components/course-details.css"
import { scrollToTop } from "../utils/scrollUtils"

// This is a template component that can be customized for each course
const CourseTemplate = ({
  courseData = {
    slug: "course-slug",
    title: "Course Title",
    subtitle: "Course Subtitle",
    description: "Course description goes here",
    metaDescription: "Meta description for SEO",
    keywords: "keyword1, keyword2, keyword3",
    duration: "12 Weeks",
    level: "Intermediate",
    rating: 4.8,
    students: 2500,
    image: "https://example.com/course-image.jpg",
    price: "$499",
    curriculum: [],
    certifications: [],
    placements: {
      companies: [],
      averageSalary: "$0",
      placementRate: "0%",
      testimonials: [],
    },
  },
  setIsFormOpen,
  setIsNavSticky,
}) => {
  const [isVisible, setIsVisible] = useState({})
  const [activeTab, setActiveTab] = useState("curriculum")
  const [localNavSticky, setLocalNavSticky] = useState(false)

  useEffect(() => {
    // Set page title and meta tags for SEO
    document.title = `${courseData.title} Course | LearnX`

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute("content", courseData.metaDescription)
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute("content", courseData.keywords)
    }

    const handleScroll = () => {
      // Check for elements to animate on scroll
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        const rect = el.getBoundingClientRect()
        const isInView = rect.top <= window.innerHeight * 0.8

        if (isInView) {
          setIsVisible((prev) => ({ ...prev, [el.id]: true }))
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [courseData])

  // Function to get the appropriate icon based on course title
  const getCourseIcon = () => {
    const title = courseData.title.toLowerCase()
    if (title.includes("ai") || title.includes("machine learning")) return <Brain size={28} />
    if (title.includes("data science")) return <Database size={28} />
    if (title.includes("cyber")) return <Shield size={28} />
    if (title.includes("cloud")) return <Cloud size={28} />
    if (title.includes("blockchain")) return <Database size={28} />
    if (title.includes("devops")) return <Code size={28} />
    if (title.includes("ui/ux") || title.includes("design")) return <Lightbulb size={28} />
    if (title.includes("full stack") || title.includes("development")) return <Code size={28} />
    if (title.includes("marketing")) return <BarChart size={28} />
    if (title.includes("testing")) return <CheckCircle size={28} />
    if (title.includes("salesforce")) return <Briefcase size={28} />
    if (title.includes("business")) return <BarChart size={28} />
    return <Cpu size={28} /> // Default icon
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* Course Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* Level indicator */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-900/30 border border-violet-500/30 text-violet-300 text-sm mb-6">
              <BookOpen className="mr-2 text-violet-400" size={16} />
              {courseData.level} Level
            </div>

            {/* Title with icon */}
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-600/30 to-rose-500/30 flex items-center justify-center mr-4">
                {getCourseIcon()}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-rose-500">
                {courseData.title}
              </h1>
            </div>

            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8">{courseData.subtitle}</h2>

            {/* Description */}
            <p className="text-gray-400 text-lg mb-12">{courseData.description}</p>

            {/* Course Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm rounded-lg px-4 py-3 border border-violet-500/20">
                <Calendar className="text-violet-400" size={20} />
                <div>
                  <div className="text-sm text-gray-400">Duration</div>
                  <div className="font-medium">{courseData.duration}</div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm rounded-lg px-4 py-3 border border-violet-500/20">
                <Star className="text-yellow-500" size={20} />
                <div>
                  <div className="text-sm text-gray-400">Rating</div>
                  <div className="font-medium">{courseData.rating}/5.0</div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm rounded-lg px-4 py-3 border border-violet-500/20">
                <Users className="text-violet-400" size={20} />
                <div>
                  <div className="text-sm text-gray-400">Enrolled</div>
                  <div className="font-medium">{courseData.students.toLocaleString()}+ Students</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => {
                  scrollToTop()
                  setIsFormOpen(true)
                }}
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-violet-600 to-rose-500 text-white font-semibold hover:from-violet-700 hover:to-rose-600 transition-colors flex items-center"
              >
                <GraduationCap className="mr-2" size={20} />
                Enroll Now
              </button>
              <button
                onClick={() => {
                  scrollToTop()
                }}
                className="px-8 py-4 rounded-lg border border-violet-500/30 text-white font-semibold hover:bg-violet-500/10 transition-colors flex items-center"
              >
                <Download className="mr-2" size={20} />
                Download Syllabus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-16 my-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-900/50"></div>
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>

        <div className="container relative mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll" id="provide-heading">
            <div
              className={`transition-all duration-1000 delay-300 transform ${isVisible["provide-heading"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="text-violet-400 mr-3" size={24} />
                <h2 className="text-3xl md:text-4xl font-bold">
                  What We{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-rose-500 relative">
                    Provide
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-rose-500 opacity-50"></span>
                  </span>
                </h2>
              </div>
              <p className="text-gray-300 text-lg">
                Our comprehensive learning ecosystem ensures you get the best education experience and career support
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 animate-on-scroll" id="provide-cards">
            {[
              {
                icon: <Monitor className="text-violet-400" size={28} />,
                title: "Live Online Classes",
                description:
                  "Interactive sessions with industry experts, real-time doubt clearing, and hands-on exercises to ensure practical learning.",
                color: "from-violet-600/20 to-violet-800/20",
                border: "border-violet-500/30",
                delay: "delay-300",
              },
              {
                icon: <Database className="text-rose-400" size={28} />,
                title: "Learning Management System",
                description:
                  "24/7 access to course materials, recorded sessions, assignments, quizzes, and progress tracking through our state-of-the-art LMS.",
                color: "from-rose-600/20 to-rose-800/20",
                border: "border-rose-500/30",
                delay: "delay-500",
              },
              {
                icon: <Briefcase className="text-violet-400" size={28} />,
                title: "Placements Portal",
                description:
                  "Exclusive access to job opportunities, resume builder, interview preparation resources, and direct connections with hiring partners.",
                color: "from-violet-600/20 to-violet-800/20",
                border: "border-violet-500/30",
                delay: "delay-700",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`backdrop-blur-md border rounded-xl overflow-hidden group relative transition-all duration-1000 ${item.delay} transform ${isVisible["provide-cards"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                ></div>

                {/* Border */}
                <div className={`absolute inset-0 border ${item.border} rounded-xl`}></div>

                {/* Hexagon pattern */}
                <div className="absolute inset-0 bg-hexagon-pattern opacity-5 group-hover:opacity-10 transition-opacity"></div>

                {/* Content */}
                <div className="relative p-8 z-10">
                  <div className="w-16 h-16 rounded-lg bg-gray-800/80 flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-violet-500/50 rounded-tl-lg"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-violet-500/50 rounded-br-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Content Tabs */}
      <section id="course-content-section" className="py-16 my-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/5 via-transparent to-transparent"></div>

        <div className="container relative mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 animate-on-scroll" id="content-heading">
            <div
              className={`transition-all duration-1000 delay-300 transform ${isVisible["content-heading"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="flex items-center justify-center mb-4">
                <FileText className="text-violet-400 mr-3" size={24} />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Course{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-rose-500 relative">
                    Details
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-rose-500 opacity-50"></span>
                  </span>
                </h2>
              </div>
              <p className="text-gray-300 text-lg">
                Explore our comprehensive curriculum, placement opportunities, industry certifications, and career
                support services.
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="hidden md:block">
            <StickyNavigation
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              onStickyChange={(isSticky) => {
                setLocalNavSticky(isSticky)
                if (setIsNavSticky) setIsNavSticky(isSticky)
              }}
            />
          </div>
          <div className="md:hidden">
            <MobileNavigation
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              onStickyChange={(isSticky) => {
                setLocalNavSticky(isSticky)
                if (setIsNavSticky) setIsNavSticky(isSticky)
              }}
            />
          </div>

          {/* Tab Content */}
          <div className="animate-on-scroll" id="tab-content">
            <div
              className={`transition-all duration-1000 delay-500 transform ${isVisible["tab-content"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div id="course-tabs-section" className="relative">
                {/* Curriculum Tab */}
                {activeTab === "curriculum" && (
                  <div
                    id="section-curriculum"
                    className="backdrop-blur-md border border-violet-500/20 rounded-xl p-8 bg-gray-900/60"
                  >
                    <div className="flex items-center mb-8">
                      <BookOpen className="text-violet-400 mr-3" size={24} />
                      <h3 className="text-2xl font-bold relative inline-block">
                        Course Curriculum
                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-rose-500 opacity-50"></span>
                      </h3>
                    </div>

                    <div className="space-y-6">
                      {courseData.curriculum.map((module, index) => (
                        <div key={index} className="border border-violet-500/20 rounded-lg overflow-hidden">
                          <div className="bg-gray-800/70 px-6 py-4 flex justify-between items-center">
                            <h4 className="text-lg font-medium">
                              Module {index + 1}: {module.title}
                            </h4>
                            <div className="text-sm text-gray-400">{module.duration}</div>
                          </div>
                          <div className="p-6 space-y-3 bg-gray-800/30">
                            {module.topics.map((topic, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <CheckCircle size={18} className="text-violet-400 mt-0.5 shrink-0" />
                                <span>{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Placements Tab */}
                {activeTab === "placements" && (
                  <div
                    id="section-placements"
                    className="backdrop-blur-md border border-violet-500/20 rounded-xl p-8 bg-gray-900/60"
                  >
                    <div className="flex items-center mb-8">
                      <Briefcase className="text-violet-400 mr-3" size={24} />
                      <h3 className="text-2xl font-bold relative inline-block">
                        Placement Details
                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-rose-500 opacity-50"></span>
                      </h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                      <div className="bg-gray-800/50 rounded-lg p-6 border border-violet-500/20 text-center">
                        <div className="flex justify-center mb-3">
                          <div className="w-12 h-12 rounded-full bg-violet-900/30 flex items-center justify-center">
                            <BarChart className="text-violet-400" size={24} />
                          </div>
                        </div>
                        <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-rose-500 mb-2">
                          {courseData.placements.placementRate}
                        </div>
                        <div className="text-gray-300">Placement Rate</div>
                      </div>

                      <div className="bg-gray-800/50 rounded-lg p-6 border border-violet-500/20 text-center">
                        <div className="flex justify-center mb-3">
                          <div className="w-12 h-12 rounded-full bg-violet-900/30 flex items-center justify-center">
                            <Briefcase className="text-violet-400" size={24} />
                          </div>
                        </div>
                        <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-rose-500 mb-2">
                          {courseData.placements.averageSalary}
                        </div>
                        <div className="text-gray-300">Average Salary</div>
                      </div>

                      <div className="bg-gray-800/50 rounded-lg p-6 border border-violet-500/20 text-center">
                        <div className="flex justify-center mb-3">
                          <div className="w-12 h-12 rounded-full bg-violet-900/30 flex items-center justify-center">
                            <Users className="text-violet-400" size={24} />
                          </div>
                        </div>
                        <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-rose-500 mb-2">
                          {courseData.placements.companies.length}+
                        </div>
                        <div className="text-gray-300">Hiring Partners</div>
                      </div>
                    </div>

                    <div className="flex items-center mb-6">
                      <Briefcase className="text-violet-400 mr-2" size={20} />
                      <h4 className="text-xl font-semibold">Our Hiring Partners</h4>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-12">
                      {courseData.placements.companies.map((company, i) => (
                        <div
                          key={i}
                          className="bg-gray-800/50 rounded-lg p-4 flex items-center justify-center h-20 border border-gray-700/50 hover:border-violet-500/30 transition-colors"
                        >
                          <div className="text-center">
                            <div className="w-10 h-10 rounded-full bg-violet-900/20 flex items-center justify-center mx-auto mb-2">
                              <span className="font-bold text-violet-400">{company.name.charAt(0)}</span>
                            </div>
                            <span className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                              {company.name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center mb-6">
                      <MessageSquare className="text-violet-400 mr-2" size={20} />
                      <h4 className="text-xl font-semibold">Success Stories</h4>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                      {courseData.placements.testimonials.map((testimonial, i) => (
                        <div
                          key={i}
                          className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-violet-500/20"
                        >
                          <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-violet-900/20 flex items-center justify-center mr-3">
                              <span className="font-bold text-violet-400">{testimonial.name.charAt(0)}</span>
                            </div>
                            <div>
                              <div className="font-medium">{testimonial.name}</div>
                              <div className="text-sm text-violet-400">
                                {testimonial.role} at {testimonial.company}
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Certifications Tab */}
                {activeTab === "certifications" && (
                  <div
                    id="section-certifications"
                    className="backdrop-blur-md border border-violet-500/20 rounded-xl p-8 bg-gray-900/60"
                  >
                    <div className="flex items-center mb-8">
                      <Award className="text-violet-400 mr-3" size={24} />
                      <h3 className="text-2xl font-bold relative inline-block">
                        Industry Certifications
                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-rose-500 opacity-50"></span>
                      </h3>
                    </div>

                    <p className="text-lg text-gray-300 mb-8">
                      Upon successful completion of the course, you will be eligible for the following
                      industry-recognized certifications:
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {courseData.certifications.map((cert, index) => (
                        <div
                          key={index}
                          className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-violet-500/20 group hover:border-violet-500/40 transition-all"
                        >
                          <div className="w-16 h-16 rounded-lg bg-violet-900/30 flex items-center justify-center mb-6 group-hover:bg-violet-900/50 transition-colors">
                            <Award className="text-violet-400" size={32} />
                          </div>
                          <h4 className="text-lg font-semibold mb-2">{cert.name}</h4>
                          <p className="text-gray-400 mb-4">{cert.description}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-violet-400">Issued by {cert.provider}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 p-6 bg-violet-900/20 rounded-lg border border-violet-500/30">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0">
                          <Award className="text-violet-400" size={24} />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2">LearnX Course Completion Certificate</h4>
                          <p className="text-gray-300">
                            In addition to industry certifications, you will receive a LearnX course completion
                            certificate that is recognized by our hiring partners and can be showcased on your resume
                            and LinkedIn profile.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Career Counselling Tab */}
                {activeTab === "career" && (
                  <div
                    id="section-career"
                    className="backdrop-blur-md border border-violet-500/20 rounded-xl p-8 bg-gray-900/60"
                  >
                    <div className="flex items-center mb-8">
                      <Briefcase className="text-violet-400 mr-3" size={24} />
                      <h3 className="text-2xl font-bold relative inline-block">
                        Career Counselling
                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-rose-500 opacity-50"></span>
                      </h3>
                    </div>

                    <p className="text-lg text-gray-300 mb-8">
                      Our dedicated career counselling services are designed to help you navigate your professional
                      journey and achieve your career goals.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                      {[
                        {
                          icon: <FileText className="text-violet-400" size={24} />,
                          title: "Resume Building",
                          description:
                            "Get expert guidance on creating an industry-standard resume that highlights your skills and projects effectively.",
                        },
                        {
                          icon: <MessageSquare className="text-violet-400" size={24} />,
                          title: "Mock Interviews",
                          description:
                            "Practice with industry experts through simulated interviews to prepare for real-world technical and HR interviews.",
                        },
                        {
                          icon: <Briefcase className="text-violet-400" size={24} />,
                          title: "Job Matching",
                          description:
                            "Our placement team matches your profile with suitable job openings from our extensive network of hiring partners.",
                        },
                        {
                          icon: <Users className="text-violet-400" size={24} />,
                          title: "Networking Opportunities",
                          description:
                            "Connect with industry professionals, alumni, and peers through exclusive networking events and webinars.",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 bg-gray-800/50 rounded-lg p-6 border border-violet-500/20"
                        >
                          <div className="shrink-0 w-12 h-12 rounded-lg bg-violet-900/30 flex items-center justify-center">
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                            <p className="text-gray-400">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-violet-900/30 to-rose-900/30 rounded-lg p-6 border border-violet-500/30">
                      <h4 className="text-xl font-semibold mb-4 flex items-center">
                        <MessageSquare className="text-violet-400 mr-2" size={20} />
                        Schedule a Free Career Counselling Session
                      </h4>
                      <p className="text-gray-300 mb-6">
                        Not sure if this course is right for you? Talk to our career counsellors to understand how this
                        course aligns with your career goals.
                      </p>
                      <button
                        onClick={() => {
                          scrollToTop()
                          setIsFormOpen(true)
                        }}
                        className="px-6 py-3 text-base font-medium text-white rounded-md bg-gradient-to-r from-violet-600 to-rose-500 hover:from-violet-700 hover:to-rose-600 transition-colors relative group overflow-hidden flex items-center"
                      >
                        <MessageSquare className="mr-2" size={18} />
                        <span className="relative z-10">Book Free Counselling Session</span>
                        <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-white/10 transition-transform duration-300"></div>
                        <div className="absolute inset-0 glow-effect-small opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 my-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/30 to-rose-900/30"></div>
        <div className="absolute inset-0 bg-gray-950 opacity-80"></div>
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>

        <div className="container relative mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll" id="cta-content">
            <div
              className={`transition-all duration-1000 delay-300 transform ${isVisible["cta-content"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="text-violet-400 mr-3" size={24} />
                <h2 className="text-3xl md:text-4xl font-bold">
                  Ready to Start Your{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-rose-500 relative">
                    Journey
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-rose-500 opacity-50"></span>
                  </span>
                  ?
                </h2>
              </div>
              <p className="text-xl text-gray-300 mb-10">
                Join thousands of students who have transformed their careers with our {courseData.title} course.
                Limited seats available for the upcoming batch.
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-5 justify-center transition-all duration-1000 delay-500 transform ${isVisible["cta-content"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <button
                onClick={() => {
                  scrollToTop()
                  setIsFormOpen(true)
                }}
                className="px-10 py-5 text-base font-medium text-white rounded-md border border-violet-500/50 hover:border-violet-500 hover:bg-violet-700/20 transition-all relative group overflow-hidden flex items-center justify-center"
              >
                <MessageSquare className="mr-2" size={20} />
                <span className="relative z-10">Request a Demo Class</span>
                <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-gradient-to-r from-violet-800/20 to-violet-600/20 transition-transform duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CourseTemplate

