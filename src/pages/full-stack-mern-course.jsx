"use client"

import { useState } from "react"
import CourseTemplate from "./course-template"
import Header from "../components/Header"
import Footer from "../components/Footer"

const FullStackMernCourse = ({ setIsContactOpen }) => {
  const [isNavSticky, setIsNavSticky] = useState(false)

  // Course data specific to Full Stack MERN
  const courseData = {
    slug: "full-stack-mern",
    title: "Full Stack MERN Development",
    subtitle: "Master MongoDB, Express, React, and Node.js for modern web apps",
    description:
      "Become a highly skilled Full Stack MERN Developer. Learn to build scalable, production-ready web applications using the MERN stack (MongoDB, Express, React, Node.js), REST APIs, JWT authentication, and cloud deployment. Get hands-on with real-world projects and boost your career!",
    metaDescription:
      "Master Full Stack MERN Development with LearnX. Learn MongoDB, Express, React, Node.js, REST APIs, JWT, and cloud deployment. Get certified and placed in top companies. Enroll now!",
    keywords:
      "full stack mern course, mern web development, mongodb, express, react, node.js, backend, frontend, REST API, JWT, deployment, cloud, placement assistance",
    duration: "16 Weeks",
    level: "Beginner to Advanced",
    rating: 4.9,
    students: 4100,
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: "₹7,499",

    curriculum: [
      {
        title: "Foundations of Web Development",
        duration: "4 Weeks",
        topics: [
          "Building Blocks of Web Design - HTML",
          "HTML syntax, elements, and document structure",
          "Core HTML elements and semantic HTML",
          "Forms, multimedia, and advanced HTML features",
          "CSS Fundamentals and Box Model",
          "Typography, colors, and visual effects",
          "Responsive design and advanced CSS features",
          "Bootstrap essentials and components"
        ],
      },
      {
        title: "JavaScript - Building Blocks to Advanced Scripts",
        duration: "4 Weeks",
        topics: [
          "Core JavaScript Concepts",
          "Variables, Data Types, Operators",
          "Functions and Scope",
          "Control Structures and Data Handling",
          "Arrays and Object Methods",
          "DOM Manipulation and Events",
          "Asynchronous JavaScript",
          "Modern JavaScript Features"
        ],
      },
      {
        title: "TypeScript Essentials",
        duration: "3 Weeks",
        topics: [
          "Introduction to TypeScript",
          "TypeScript Fundamentals",
          "Advanced Types and Interfaces",
          "Object-Oriented Programming",
          "Modules and Namespaces",
          "TypeScript with React",
          "Type Safety and Best Practices"
        ],
      },
      {
        title: "React.js Frontend Framework",
        duration: "5 Weeks",
        topics: [
          "React Fundamentals and ES6",
          "Components and JSX",
          "State and Props Management",
          "React Hooks and Lifecycle",
          "Advanced React Features",
          "Application Architecture",
          "Performance Optimization",
          "Testing and Best Practices"
        ],
      },
      {
        title: "MERN Stack (Node, Express, MongoDB)",
        duration: "5 Weeks",
        topics: [
          "Node.js and JavaScript Essentials",
          "Express.js Fundamentals",
          "RESTful API Development",
          "MongoDB Basics and CRUD",
          "MongoDB Integration with Node.js",
          "Authentication and Security",
          "Real-time Communication",
          "Advanced MERN Features"
        ],
      },
      {
        title: "Cloud & DevOps For FullStack MERN",
        duration: "5 Weeks",
        topics: [
          "Cloud Computing Basics",
          "DevOps Practices",
          "Version Control with Git",
          "CI/CD Pipelines",
          "Docker and Containers",
          "Cloud Deployment",
          "Infrastructure Management",
          "Security and Best Practices"
        ],
      }
    ],

    certifications: [
      {
        name: "Full Stack MERN Developer Certification",
        provider: "LearnX",
        description: "Validate your expertise in building complete web applications using the MERN stack.",
        logo: "https://cdn.worldvectorlogo.com/logos/mern.svg",
      },
      {
        name: "MongoDB Certified Developer Associate",
        provider: "MongoDB",
        description: "Demonstrate your skills in building applications using MongoDB.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1200px-MongoDB_Logo.svg.png",
      },
      {
        name: "AWS Certified Developer - Associate",
        provider: "Amazon Web Services",
        description: "Prove your ability to develop, deploy, and debug cloud-based applications using AWS.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png",
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
      averageSalary: "₹7,60,000",
      placementRate: "97%",
      testimonials: [
        {
          name: "Vikram",
          role: "MERN Stack Developer",
          company: "Google",
          image: "https://randomuser.me/api/portraits/men/40.jpg",
          quote:
            "The Full Stack MERN course at LearnX was exactly what I needed to break into web development. The hands-on projects and mentorship were invaluable!",
        },
        {
          name: "Ananya",
          role: "Frontend Engineer",
          company: "Facebook",
          image: "https://randomuser.me/api/portraits/women/55.jpg",
          quote:
            "Excellent curriculum, real-world projects, and great placement support. I highly recommend this course to anyone looking to master the MERN stack!",
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

export default FullStackMernCourse 