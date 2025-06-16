"use client"

import { useState } from "react"
import CourseTemplate from "./course-template"
import Header from "../components/Header"
import Footer from "../components/Footer"

const FullstackWithAICourse = ({ setIsContactOpen }) => {
  const [isNavSticky, setIsNavSticky] = useState(false)

  // Course data for Fullstack With AI
  const courseData = {
    slug: "fullstack-with-ai-course",
    title: "Fullstack With AI",
    subtitle: "Build Modern Fullstack Applications Enhanced by AI",
    description:
      "Master fullstack development and integrate AI features into your web applications. Learn Python, JavaScript, React, Node.js, and how to leverage AI APIs, machine learning models, and cloud AI services. Gain hands-on experience with real-world projects and become a next-generation developer!",
    metaDescription:
      "Master Fullstack With AI at LearnX. Learn Python, JavaScript, React, Node.js, AI APIs, machine learning, and cloud AI integration. Get certified and placed in top companies. Enroll now!",
    keywords:
      "fullstack with ai, ai web development, react, node.js, python, machine learning, ai api, cloud ai, placement assistance",
    duration: "20 Weeks",
    level: "Beginner to Advanced",
    rating: 4.9,
    students: 1800,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: "₹12,499",
    curriculum: [
      {
        title: "Foundations of Web Development",
        duration: "3 Weeks",
        topics: [
          "HTML, CSS, and JavaScript essentials",
          "Responsive design and accessibility",
          "Version control with Git and GitHub",
        ],
      },
      {
        title: "Frontend Development with React",
        duration: "3 Weeks",
        topics: [
          "React fundamentals and component architecture",
          "State management and hooks",
          "API integration and routing",
        ],
      },
      {
        title: "Backend Development with Node.js & Python",
        duration: "4 Weeks",
        topics: [
          "Node.js and Express basics",
          "RESTful API development",
          "Python for backend and scripting",
          "Database integration (SQL & NoSQL)",
        ],
      },
      {
        title: "AI & Machine Learning Integration",
        duration: "5 Weeks",
        topics: [
          "Introduction to AI and ML concepts",
          "Using AI APIs (OpenAI, Hugging Face, Google AI)",
          "Building and deploying ML models",
          "Integrating AI features into web apps",
        ],
      },
      {
        title: "Cloud & DevOps for AI Apps",
        duration: "3 Weeks",
        topics: [
          "Cloud deployment (AWS, Azure, GCP)",
          "CI/CD pipelines for AI apps",
          "Monitoring and scaling AI-powered applications",
        ],
      },
      {
        title: "Capstone Project & Career Prep",
        duration: "2 Weeks",
        topics: [
          "End-to-end AI-powered fullstack project",
          "Resume building and interview prep",
          "Placement assistance",
        ],
      },
    ],
    certifications: [
      {
        name: "Fullstack With AI Developer Certificate",
        provider: "LearnX",
        description: "Validate your expertise in building AI-powered fullstack web applications.",
        logo: "https://www.python.org/static/community_logos/python-logo.png",
      },
      {
        name: "AI Integration Specialist",
        provider: "LearnX",
        description: "Showcase your ability to integrate AI and ML into modern web apps.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Artificial_intelligence_logo.png",
      },
    ],
    placements: {
      hiringPartners: [
        "TCS",
        "HCL",
        "Infosys",
        "Tech Mahindra",
        "Wipro",
        "Mphasis",
        "Accenture",
        "IBM",
        "Coforge",
        "Cognizant",
        "Persistent",
        "Birlasoft",
        "Capgemini",
        "Cisco",
        "Flipkart",
        "Intuit",
        "Redington",
        "LTI"
      ],
      averageSalary: "₹11,00,000",
      placementRate: "96%",
      testimonials: [
        {
          name: "Ankit Sharma",
          role: "AI Fullstack Developer",
          company: "OpenAI",
          image: "https://randomuser.me/api/portraits/men/55.jpg",
          quote:
            "The Fullstack With AI course at LearnX helped me master both web development and AI integration. The hands-on projects and expert mentorship were game-changers for my career!",
        },
      ],
    },
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* Animated background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-900/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-grid-lines opacity-5"></div>
      </div>

      <Header setIsContactOpen={setIsContactOpen} hideHeader={false} />
      <main className="relative z-10">
        <CourseTemplate courseData={courseData} setIsContactOpen={setIsContactOpen} setIsNavSticky={setIsNavSticky} />
      </main>
      <Footer setIsContactOpen={setIsContactOpen} />
    </div>
  )
}

export default FullstackWithAICourse 