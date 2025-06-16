"use client"

import { useState, useEffect } from "react"
import { Search, Filter, ChevronDown, Star, Clock, Users, Award, ArrowRight } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { scrollToTop } from "../utils/scrollUtils"
import FormButton from "../components/FormButton"

const AllCoursesPage = ({ setIsContactOpen }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")
  const [sortBy, setSortBy] = useState("popular")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  useEffect(() => {
    // Set page title and meta tags for SEO
    document.title = "All Courses | LearnX"

    // Scroll to top on page load
    window.scrollTo(0, 0)
  }, [])

  // Update the categories array to group related courses
  const categories = [
    { id: "all", name: "All Courses" },
    { id: "data", name: "Data" },
    { id: "ai-data", name: "AI & Data Science" },
    { id: "cloud-devops", name: "Cloud & DevOps" },
    { id: "salesforce", name: "Salesforce" },
    { id: "development", name: "Development" },
    { id: "design", name: "Design" },
    { id: "marketing", name: "Marketing" },
    { id: "business", name: "Business" },
    { id: "testing", name: "Testing" },
  ]

  const sortOptions = [
    { id: "popular", name: "Most Popular" },
    { id: "newest", name: "Newest" },
    { id: "price-low", name: "Price: Low to High" },
    { id: "price-high", name: "Price: High to Low" },
    { id: "duration", name: "Duration" },
  ]

  // Update the coursesData array to include the new courses and update categories
  const coursesData = [
    {
      id: 1,
      title: "AI & Machine Learning",
      slug: "ai-ml-course",
      shortDescription: "Master the fundamentals and advanced concepts of AI and Machine Learning",
      category: "ai-data",
      rating: 4.9,
      reviewCount: 1245,
      duration: "6 months",
      level: "Intermediate",
      students: 15000,
      price: 799,
      discountedPrice: 599,
      popular: true,
      new: false,
      image: "/placeholder.svg?height=200&width=400&text=AI+%26+ML",
      skills: ["Python", "TensorFlow", "Neural Networks", "Deep Learning"],
    },
    {
      id: 2,
      title: "Data Science",
      slug: "data-science-course",
      shortDescription: "Learn to analyze complex data sets and derive meaningful insights",
      category: "ai-data",
      rating: 4.8,
      reviewCount: 980,
      duration: "5 months",
      level: "Intermediate",
      students: 12500,
      price: 749,
      discountedPrice: 549,
      popular: true,
      new: false,
      image: "/placeholder.svg?height=200&width=400&text=Data+Science",
      skills: ["Python", "R", "SQL", "Data Visualization", "Statistics"],
    },
    {
      id: 3,
      title: "Cybersecurity",
      slug: "cybersecurity-course",
      shortDescription: "Develop skills to protect systems and networks from digital attacks",
      category: "cloud-devops",
      rating: 4.7,
      reviewCount: 850,
      duration: "4 months",
      level: "Intermediate to Advanced",
      students: 9800,
      price: 899,
      discountedPrice: 699,
      popular: true,
      new: false,
      image: "/placeholder.svg?height=200&width=400&text=Cybersecurity",
      skills: ["Network Security", "Ethical Hacking", "Cryptography", "Security Auditing"],
    },
    {
      id: 4,
      title: "Blockchain",
      slug: "blockchain-course",
      shortDescription: "Understand blockchain technology and develop decentralized applications",
      category: "development",
      rating: 4.6,
      reviewCount: 560,
      duration: "3 months",
      level: "Intermediate",
      students: 6200,
      price: 799,
      discountedPrice: 599,
      popular: false,
      new: true,
      image: "/placeholder.svg?height=200&width=400&text=Blockchain",
      skills: ["Solidity", "Smart Contracts", "Web3.js", "DApps Development"],
    },
    {
      id: 5,
      title: "DevOps",
      slug: "devops-course",
      shortDescription: "Bridge the gap between development and operations with DevOps practices",
      category: "cloud-devops",
      rating: 4.7,
      reviewCount: 680,
      duration: "4 months",
      level: "Intermediate",
      students: 7800,
      price: 749,
      discountedPrice: 549,
      popular: false,
      new: false,
      image: "/placeholder.svg?height=200&width=400&text=DevOps",
      skills: ["CI/CD", "Jenkins", "Docker", "Kubernetes", "Ansible"],
    },
    {
      id: 6,
      title: "UI/UX Design",
      slug: "ui-ux-design-course",
      shortDescription: "Create intuitive and engaging user experiences for digital products",
      category: "design",
      rating: 4.9,
      reviewCount: 890,
      duration: "3 months",
      level: "Beginner to Intermediate",
      students: 9200,
      price: 649,
      discountedPrice: 449,
      popular: true,
      new: false,
      image: "/placeholder.svg?height=200&width=400&text=UI/UX+Design",
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research"],
    },
    {
      id: 7,
      title: "Full Stack Python Development",
      slug: "full-stack-python-course",
      shortDescription: "Build robust web apps with Python, Django, Flask, React, and cloud deployment.",
      category: "development",
      rating: 4.9,
      reviewCount: 980,
      duration: "6 months",
      level: "Intermediate to Advanced",
      students: 9000,
      price: 999,
      discountedPrice: 749,
      popular: true,
      new: true,
      image: "/placeholder.svg?height=200&width=400&text=Full+Stack+Python",
      skills: ["Python", "Django", "Flask", "React", "SQL", "MongoDB"],
    },
    {
      id: 8,
      title: "Automation Testing",
      slug: "automation-testing-course",
      shortDescription: "Implement automated testing to improve software quality and efficiency",
      category: "testing",
      rating: 4.6,
      reviewCount: 580,
      duration: "3 months",
      level: "Intermediate",
      students: 6800,
      price: 649,
      discountedPrice: 449,
      popular: false,
      new: true,
      image: "/placeholder.svg?height=200&width=400&text=Automation+Testing",
      skills: ["Selenium", "JUnit", "TestNG", "Cucumber", "Jenkins"],
    },
    {
      id: 9,
      title: "Salesforce",
      slug: "salesforce-course",
      shortDescription: "Become a certified Salesforce professional and advance your career",
      category: "salesforce",
      rating: 4.8,
      reviewCount: 670,
      duration: "4 months",
      level: "Beginner to Intermediate",
      students: 7500,
      price: 749,
      discountedPrice: 549,
      popular: false,
      new: false,
      image: "/placeholder.svg?height=200&width=400&text=Salesforce",
      skills: ["Salesforce Admin", "Apex", "Lightning", "Visualforce", "Integration"],
    },
    {
      id: 10,
      title: "Business Analysis",
      slug: "business-analyst-course",
      shortDescription: "Learn to analyze business domains and document business processes",
      category: "business",
      rating: 4.7,
      reviewCount: 620,
      duration: "3 months",
      level: "Beginner to Intermediate",
      students: 7200,
      price: 699,
      discountedPrice: 499,
      popular: false,
      new: true,
      image: "/placeholder.svg?height=200&width=400&text=Business+Analysis",
      skills: ["Requirements Analysis", "Process Modeling", "Data Analysis", "Agile", "BPMN"],
    },
    {
      id: 11,
      title: "Salesforce CPQ",
      slug: "salesforce-cpq-course",
      shortDescription: "Master Configure, Price, Quote to streamline sales processes and drive revenue growth",
      category: "salesforce",
      rating: 4.8,
      reviewCount: 480,
      duration: "10 weeks",
      level: "Intermediate to Advanced",
      students: 1850,
      price: 799,
      discountedPrice: 599,
      popular: false,
      new: true,
      image: "/placeholder.svg?height=200&width=400&text=Salesforce+CPQ",
      skills: ["Product Configuration", "Pricing Rules", "Quote Templates", "Approval Workflows"],
    },
    {
      id: 12,
      title: "Salesforce Agent Force",
      slug: "salesforce-agent-force-course",
      shortDescription: "Deliver exceptional customer service experiences with Salesforce Service Cloud",
      category: "salesforce",
      rating: 4.7,
      reviewCount: 510,
      duration: "12 weeks",
      level: "Beginner to Advanced",
      students: 2100,
      price: 749,
      discountedPrice: 549,
      popular: false,
      new: true,
      image: "/placeholder.svg?height=200&width=400&text=Agent+Force",
      skills: ["Case Management", "Service Console", "Knowledge Base", "Omni-Channel"],
    },
    {
      id: 13,
      title: "Full Stack Java Development",
      slug: "full-stack-java-course",
      shortDescription: "Build enterprise web apps with Java, Spring Boot, React, and cloud deployment.",
      category: "development",
      rating: 4.8,
      reviewCount: 850,
      duration: "6 months",
      level: "Intermediate to Advanced",
      students: 8000,
      price: 1099,
      discountedPrice: 799,
      popular: true,
      new: true,
      image: "/placeholder.svg?height=200&width=400&text=Full+Stack+Java",
      skills: ["Java", "Spring Boot", "Hibernate", "React", "SQL", "REST API"],
    },
    {
      id: 14,
      title: "Full Stack MERN Development",
      slug: "full-stack-mern-course",
      shortDescription: "Master MongoDB, Express, React, and Node.js for modern web apps.",
      category: "development",
      rating: 4.9,
      reviewCount: 1050,
      duration: "6 months",
      level: "Intermediate to Advanced",
      students: 9500,
      price: 1099,
      discountedPrice: 799,
      popular: true,
      new: true,
      image: "/placeholder.svg?height=200&width=400&text=Full+Stack+MERN",
      skills: ["MongoDB", "Express", "React", "Node.js", "REST API", "JWT"],
    },
    {
      id: 15,
      title: "AWS Cloud Computing",
      slug: "aws-course",
      shortDescription: "Master AWS for scalable, secure, and high-performance cloud solutions.",
      category: "cloud-devops",
      rating: 4.8,
      reviewCount: 1100,
      duration: "3.5 months",
      level: "Beginner to Advanced",
      students: 8700,
      price: 999,
      discountedPrice: 749,
      popular: true,
      new: true,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      skills: ["EC2", "S3", "Lambda", "RDS", "VPC", "IAM", "DevOps"],
    },
    {
      id: 16,
      title: "Digital Marketing",
      slug: "digital-marketing",
      shortDescription: "Master digital marketing strategies to drive growth and engagement.",
      category: "marketing",
      rating: 4.7,
      reviewCount: 980,
      duration: "12 weeks",
      level: "Beginner to Advanced",
      students: 3200,
      price: 5999,
      discountedPrice: 4499,
      popular: true,
      new: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      skills: ["SEO", "SEM", "Social Media", "Content Marketing", "Email Marketing", "Analytics"],
    },
    {
      id: 17,
      title: "Data Analytics",
      slug: "data-analytics",
      shortDescription: "Master data analytics to drive business insights and decision-making.",
      category: "data",
      rating: 4.8,
      reviewCount: 1200,
      duration: "14 weeks",
      level: "Beginner to Advanced",
      students: 3500,
      price: 7999,
      discountedPrice: 5999,
      popular: true,
      new: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      skills: ["Data Visualization", "Statistical Analysis", "SQL", "Python", "Tableau", "Power BI"],
    },
    {
      id: 18,
      title: "Power BI",
      slug: "powerbi",
      shortDescription: "Master Power BI for data visualization and business intelligence.",
      category: "data",
      rating: 4.7,
      reviewCount: 950,
      duration: "10 weeks",
      level: "Beginner to Advanced",
      students: 2800,
      price: 6999,
      discountedPrice: 5499,
      popular: true,
      new: true,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      skills: ["Data Visualization", "DAX", "Power Query", "Business Intelligence", "Dashboard Design"],
    },
    {
      id: 19,
      title: "ServiceNow",
      slug: "servicenow",
      shortDescription: "Master ServiceNow for IT Service Management and Automation.",
      category: "business",
      rating: 4.8,
      reviewCount: 800,
      duration: "10 weeks",
      level: "Beginner to Advanced",
      students: 2100,
      price: 7499,
      discountedPrice: 5999,
      popular: true,
      new: true,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      skills: ["ITSM", "Workflow Automation", "ServiceNow Development", "Integrations", "Platform Admin"],
    },
    {
      id: 20,
      title: "Salesforce Health Cloud",
      slug: "salesforce-health-cloud-course",
      shortDescription: "Implement and manage Salesforce Health Cloud for healthcare organizations.",
      category: "salesforce",
      rating: 4.8,
      reviewCount: 320,
      duration: "8 weeks",
      level: "Intermediate",
      students: 1200,
      price: 9999,
      discountedPrice: 7999,
      popular: false,
      new: true,
      image: "https://images.unsplash.com/photo-1519494080410-f9aa8f0a1fd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      skills: ["Health Cloud", "Patient Management", "Care Coordination", "Salesforce", "EHR Integration"],
    },
    {
      id: 21,
      title: "Salesforce Data Cloud",
      slug: "salesforce-data-cloud-course",
      shortDescription: "Unify and manage customer data with Salesforce Data Cloud.",
      category: "salesforce",
      rating: 4.8,
      reviewCount: 210,
      duration: "8 weeks",
      level: "Intermediate",
      students: 900,
      price: 10499,
      discountedPrice: 8499,
      popular: false,
      new: true,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      skills: ["Data Cloud", "Customer Data Platform", "Data Integration", "Identity Resolution", "Analytics"],
    },
  ]

  // Filter and sort courses
  const filteredAndSortedCourses = coursesData
    .filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.shortDescription.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = activeFilter === "all" || course.category === activeFilter
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "popular":
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0) || b.students - a.students
        case "newest":
          return (b.new ? 1 : 0) - (a.new ? 1 : 0)
        case "price-low":
          return a.discountedPrice - b.discountedPrice
        case "price-high":
          return b.discountedPrice - a.discountedPrice
        case "duration":
          return Number.parseInt(a.duration) - Number.parseInt(b.duration)
        default:
          return 0
      }
    })

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* Animated background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-900/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-grid-lines opacity-5"></div>
      </div>

      <Header setIsFormOpen={setIsContactOpen} hideHeader={false} />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-gray-950 to-gray-950"></div>

          {/* Animated circuit lines */}
          <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>

          {/* Glowing lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent glow-effect-line"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500 to-transparent glow-effect-line"></div>

          <div className="container relative mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-900/30 border border-violet-500/30 text-sm mb-6">
                <Award size={14} className="mr-2 text-violet-400" />
                <span>Premium Courses</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Explore Our{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-rose-500">
                  Courses
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                Discover our comprehensive range of tech courses designed to accelerate your career
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-10">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-6 items-start">
              {/* Search Bar */}
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="text-gray-400" size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Search for courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                />
              </div>

              {/* Filter Button (Mobile) */}
              <div className="lg:hidden w-full">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="w-full flex items-center justify-between px-4 py-4 bg-gray-800/80 border border-gray-700 rounded-lg"
                >
                  <div className="flex items-center">
                    <Filter className="text-gray-400 mr-2" size={20} />
                    <span>Filters & Sort</span>
                  </div>
                  <ChevronDown
                    className={`text-gray-400 transition-transform ${isFilterOpen ? "rotate-180" : ""}`}
                    size={20}
                  />
                </button>

                {isFilterOpen && (
                  <div className="mt-4 p-4 bg-gray-800/90 backdrop-blur-md border border-gray-700 rounded-lg">
                    {/* Category Filter */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3">Categories</h3>
                      <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                          <button
                            key={category.id}
                            onClick={() => setActiveFilter(category.id)}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                              activeFilter === category.id
                                ? "bg-gradient-to-r from-violet-600 to-rose-500 text-white"
                                : "bg-gray-700/50 text-gray-300 hover:bg-gray-700"
                            }`}
                          >
                            {category.name}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Sort Options */}
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Sort By</h3>
                      <div className="flex flex-wrap gap-2">
                        {sortOptions.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => setSortBy(option.id)}
                            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                              sortBy === option.id
                                ? "bg-gradient-to-r from-violet-600 to-rose-500 text-white"
                                : "bg-gray-700/50 text-gray-300 hover:bg-gray-700"
                            }`}
                          >
                            {option.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Sort Dropdown (Desktop) */}
              <div className="hidden lg:block">
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none pl-4 pr-10 py-4 bg-gray-800/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <ChevronDown className="text-gray-400" size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Tabs (Desktop) */}
        <section className="py-4 hidden lg:block">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeFilter === category.id
                      ? "bg-gradient-to-r from-violet-600 to-rose-500 text-white"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-800 border border-gray-700"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-10">
          <div className="container mx-auto px-6">
            {/* Update the course card styling to ensure consistent sizing */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedCourses.length > 0 ? (
                filteredAndSortedCourses.map((course) => (
                  <div
                    key={course.id}
                    className="w-full backdrop-blur-md border border-violet-500/20 rounded-xl overflow-hidden group relative transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-lg hover:shadow-violet-500/10 h-full flex flex-col"
                  >
                    <div className="bg-gray-900/60 p-4 sm:p-6 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                      <p className="text-gray-300 mb-4">{course.shortDescription}</p>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Star className="text-yellow-500" size={16} />
                          <span>
                            {course.rating} ({course.reviewCount})
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
                          <Award className="text-violet-400" size={16} />
                          <span>{course.level}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {course.skills.slice(0, 3).map((skill, index) => (
                          <span key={index} className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full">
                            {skill}
                          </span>
                        ))}
                        {course.skills.length > 3 && (
                          <span className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full">
                            +{course.skills.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="flex gap-3 mt-auto">
                        <Link
                          to={`/${course.slug}`}
                          onClick={scrollToTop}
                          className="flex-1 px-4 py-2.5 text-center border border-violet-500/50 hover:border-violet-500 hover:bg-violet-500/10 text-white rounded-lg transition-colors"
                        >
                          View Course
                        </Link>
                        <FormButton variant="primary" context="Enroll Now" className="flex-1 flex items-center justify-center gap-2">
                          Enroll Now
                          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </FormButton>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-16 bg-gray-900/60 backdrop-blur-md border border-violet-500/20 rounded-xl col-span-3">
                  <Search className="mx-auto text-violet-400 mb-4" size={48} />
                  <h3 className="text-xl font-semibold mb-2">No courses found</h3>
                  <p className="text-gray-300 mb-6">We couldn't find any courses matching your search criteria.</p>
                  <button
                    onClick={() => {
                      setSearchTerm("")
                      setActiveFilter("all")
                    }}
                    className="px-6 py-3 bg-violet-600 hover:bg-violet-700 rounded-lg text-white font-medium transition-colors"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 my-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/30 to-rose-900/30"></div>
          <div className="absolute inset-0 bg-gray-950 opacity-80"></div>
          <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>

          <div className="container relative mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Accelerate Your Career?</h2>
              <p className="text-xl text-gray-300 mb-10">
                Join thousands of students who have transformed their careers with LearnX courses.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <FormButton variant="primary" context="Get Personalized Guidance" className="px-8 py-4 text-base font-medium">
                  <span className="relative z-10">Get Personalized Guidance</span>
                </FormButton>
                <a
                  href="#"
                  className="px-8 py-4 text-base font-medium text-white rounded-md border border-violet-500/50 hover:border-violet-500 hover:bg-violet-700/20 transition-all relative group overflow-hidden"
                >
                  <span className="relative z-10">View Course Bundles</span>
                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-gradient-to-r from-violet-800/20 to-violet-600/20 transition-transform duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer setIsFormOpen={setIsContactOpen} />
    </div>
  )
}

export default AllCoursesPage

