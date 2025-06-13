"use client"

import { useState, useEffect } from "react"
import {
  ChevronRight,
  Briefcase,
  Award,
  Users,
  BookOpen,
  Zap,
  Globe,
  Shield,
  Star,
  Clock,
  GraduationCap,
  ArrowRight,
} from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { scrollToTop } from "../utils/scrollUtils"
import FormButton from "../components/FormButton"
import { useForm } from "../context/FormContext"

const HomePage = () => {
  const [isVisible, setIsVisible] = useState({
    "hero-text": false,
    "hero-description": false,
    "hero-buttons": false,
    "about-heading": false,
    "about-cards": false,
    "courses-heading": false,
    "course-cards": false,
  })

  useEffect(() => {
    // Trigger animations
    const timer = setTimeout(() => {
      setIsVisible({
        "hero-text": true,
        "hero-description": true,
        "hero-buttons": true,
        "about-heading": true,
        "about-cards": true,
        "courses-heading": true,
        "course-cards": true,
      })
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* Animated background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-900/10 via-transparent to-transparent"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-violet-600/5 animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-rose-600/5 animate-float-medium"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-violet-600/5 animate-float-fast"></div>

        {/* Futuristic grid lines */}
        <div className="absolute inset-0 bg-grid-lines opacity-5"></div>
      </div>

      {/* Header */}
      <Header />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-56">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-gray-950 to-gray-950"></div>

          {/* Animated circuit lines */}
          <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>

          {/* Glowing lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent glow-effect-line"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500 to-transparent glow-effect-line"></div>

          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-500 transform ${
                isVisible["hero-text"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}>
                Transform Your Career with{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-rose-500">
                  LearnX Academy
                </span>
              </h1>
              <p className={`text-xl text-gray-300 mb-10 transition-all duration-500 delay-100 transform ${
                isVisible["hero-description"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}>
                Master in-demand skills with our industry-aligned courses and expert-led training programs.
              </p>
              {/* Feature Highlights */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
                <div className="flex items-center gap-2 text-base text-white font-medium bg-gray-900/60 px-4 py-2 rounded-lg border border-violet-500/30">
                  <Star className="text-yellow-400" size={20} />
                  100% Placement Assistance
                </div>
                <div className="flex items-center gap-2 text-base text-white font-medium bg-gray-900/60 px-4 py-2 rounded-lg border border-violet-500/30">
                  <Users className="text-rose-400" size={20} />
                  One-on-One Mentorship
                </div>
                <div className="flex items-center gap-2 text-base text-white font-medium bg-gray-900/60 px-4 py-2 rounded-lg border border-violet-500/30">
                  <Briefcase className="text-violet-400" size={20} />
                  Real-Time Projects
                </div>
              </div>
              <div className={`flex flex-col sm:flex-row gap-5 justify-center transition-all duration-500 delay-250 transform ${
                isVisible["hero-buttons"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}>
                <Link to="/all-courses" className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-violet-500 to-pink-500 text-white font-semibold text-lg shadow-md hover:from-violet-600 hover:to-pink-600 transition-all">
                  View All Courses
                  <ChevronRight size={20} className="ml-2" />
                </Link>
                <FormButton variant="primary" context="Contact Us" className="px-8 py-4 rounded-lg text-lg font-semibold">
                  Contact Us
                </FormButton>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose LearnX */}
        <section id="about" className="py-24 my-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gray-900/50"></div>

          {/* Animated background elements */}
          <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>

          <div className="container relative mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll" id="about-heading">
              <div
                className={`transition-all duration-500 delay-150 transform ${isVisible["about-heading"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-900/30 border border-violet-500/30 text-sm mb-6">
                  <Shield size={14} className="mr-2 text-violet-400" />
                  <span>Industry-Leading Education</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Why Choose{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-rose-500 relative">
                    LearnX
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-rose-500 opacity-50"></span>
                  </span>
                  ?
                </h2>
                <p className="text-gray-300 text-lg">
                  We combine cutting-edge curriculum with industry expertise to provide you with the best learning
                  experience. Our focus is on practical skills that employers are actively seeking.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 animate-on-scroll" id="about-cards">
              {[
                {
                  icon: <BookOpen className="text-violet-400" size={28} />,
                  title: "Industry-Relevant Curriculum",
                  description:
                    "Courses designed with input from industry leaders to ensure you learn what matters in today's job market.",
                  color: "from-violet-600/20 to-violet-800/20",
                  border: "border-violet-500/30",
                  delay: "delay-300",
                },
                {
                  icon: <Users className="text-rose-400" size={28} />,
                  title: "Expert Instructors",
                  description:
                    "Learn from professionals with years of real-world experience in top tech companies and educational institutions.",
                  color: "from-rose-600/20 to-rose-800/20",
                  border: "border-rose-500/30",
                  delay: "delay-500",
                },
                {
                  icon: <Briefcase className="text-violet-400" size={28} />,
                  title: "Job Placement Assistance",
                  description:
                    "Get help with resume building, interview preparation, and job placement through our extensive network of partners.",
                  color: "from-violet-600/20 to-violet-800/20",
                  border: "border-violet-500/30",
                  delay: "delay-700",
                },
                {
                  icon: <Award className="text-rose-400" size={28} />,
                  title: "Industry Recognized Certifications",
                  description:
                    "Earn certificates that are recognized and valued by employers worldwide, boosting your career prospects.",
                  color: "from-rose-600/20 to-rose-800/20",
                  border: "border-rose-500/30",
                  delay: "delay-900",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`backdrop-blur-md border rounded-xl overflow-hidden group relative transition-all duration-500 ${item.delay
                    .replace("delay-300", "delay-150")
                    .replace("delay-500", "delay-200")
                    .replace("delay-700", "delay-250")
                    .replace(
                      "delay-900",
                      "delay-300",
                    )} transform ${isVisible["about-cards"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
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

        {/* Popular Courses */}
        <section id="courses" className="py-24 my-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/5 via-transparent to-transparent"></div>

          <div className="container relative mx-auto px-6">
            <div
              className="flex flex-col md:flex-row md:items-end justify-between mb-16 animate-on-scroll"
              id="courses-heading"
            >
              <div
                className={`transition-all duration-500 delay-150 transform ${isVisible["courses-heading"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-900/30 border border-violet-500/30 text-sm mb-6">
                  <Globe size={14} className="mr-2 text-violet-400" />
                  <span>World-Class Training</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Popular{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-rose-500 relative">
                    Courses
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-rose-500 opacity-50"></span>
                  </span>
                </h2>
                <p className="mt-6 text-xl text-gray-300 max-w-2xl">
                  Explore our most in-demand courses designed to help you master the skills that employers are looking
                  for in today's digital economy.
                </p>
              </div>
              <Link
                to="/courses"
                className={`mt-8 md:mt-0 text-violet-400 hover:text-violet-300 flex items-center gap-2 group transition-all duration-500 delay-250 transform ${isVisible["courses-heading"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                View all courses <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll" id="course-cards">
              {[
                {
                  title: "AI & Machine Learning",
                  description: "Build intelligent systems and implement machine learning algorithms",
                  rating: 4.9,
                  reviews: 1245,
                  duration: "6 months",
                  level: "Intermediate",
                  students: 15000,
                  technologies: ["Python", "TensorFlow", "PyTorch"],
                  path: "/ai-ml-course",
                  delay: "delay-400",
                  slug: "ai-ml-course",
                },
                {
                  title: "Data Science",
                  description: "Learn to analyze complex data sets and derive meaningful insights",
                  rating: 4.8,
                  reviews: 980,
                  duration: "5 months",
                  level: "Intermediate",
                  students: 12500,
                  technologies: ["Python", "R", "SQL"],
                  path: "/data-science-course",
                  delay: "delay-500",
                  slug: "data-science-course",
                },
                {
                  title: "Full Stack Python Development",
                  description: "Build robust web apps with Python, Django, Flask, React, and cloud deployment.",
                  rating: 4.9,
                  reviews: 980,
                  duration: "6 months",
                  level: "Intermediate to Advanced",
                  students: 9000,
                  technologies: ["Python", "Django", "Flask", "React"],
                  path: "/full-stack-python-course",
                  delay: "delay-600",
                  slug: "full-stack-python-course",
                },
                {
                  title: "UI/UX Design",
                  description: "Create intuitive and engaging user experiences for digital products",
                  rating: 4.9,
                  reviews: 890,
                  duration: "3 months",
                  level: "Beginner to Intermediate",
                  students: 9200,
                  technologies: ["Figma", "Adobe XD", "Prototyping"],
                  path: "/ui-ux-design-course",
                  delay: "delay-700",
                  slug: "ui-ux-design-course",
                },
                {
                  title: "Salesforce",
                  description: "Become a certified Salesforce professional and advance your career",
                  rating: 4.8,
                  reviews: 670,
                  duration: "4 months",
                  level: "Beginner to Intermediate",
                  students: 7500,
                  technologies: ["Salesforce Admin", "Apex", "Lightning"],
                  path: "/salesforce-course",
                  delay: "delay-800",
                  slug: "salesforce-course",
                },
                {
                  title: "Business Analyst",
                  description: "Analyze business domains and processes",
                  rating: 4.7,
                  reviews: 620,
                  duration: "3 months",
                  level: "Beginner to Intermediate",
                  students: 7200,
                  technologies: ["Requirements Analysis", "Process Modeling", "Data Analysis"],
                  path: "/business-analyst-course",
                  delay: "delay-900",
                  slug: "business-analyst-course",
                },
              ].map((course, index) => (
                <div
                  key={index}
                  className={`backdrop-blur-md border border-violet-500/20 rounded-xl overflow-hidden group relative transition-all duration-500 ${course.delay
                    .replace("delay-400", "delay-175")
                    .replace("delay-500", "delay-200")
                    .replace("delay-600", "delay-225")
                    .replace("delay-700", "delay-250")
                  } transform ${isVisible["course-cards"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                  <div className="bg-gray-900/60 p-6">
                    <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                    <p className="text-gray-300 mb-4">{course.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Star className="text-yellow-500" size={16} />
                        <span>
                          {course.rating} ({course.reviews})
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="text-violet-400" size={16} />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="text-violet-400" size={16} />
                        <span>{course.students.toLocaleString()} students</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="text-violet-400" size={16} />
                        <span>{course.level}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {course.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Link
                        to={course.path}
                        onClick={scrollToTop}
                        className="flex-1 px-4 py-2.5 text-center border border-violet-500/50 hover:border-violet-500 hover:bg-violet-500/10 text-white rounded-lg transition-colors"
                      >
                        View Course
                      </Link>
                      <FormButton variant="primary" context={`Enroll Now - ${course.title}`} className="flex-1 flex items-center justify-center gap-2">
                        Enroll Now
                        <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                      </FormButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default HomePage

