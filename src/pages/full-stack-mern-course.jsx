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
        title: "JavaScript & Node.js Fundamentals",
        duration: "2 Weeks",
        topics: [
          "JavaScript ES6+ syntax and features",
          "Node.js runtime and core modules",
          "Asynchronous programming and promises",
          "NPM/Yarn and project structure",
          "Version control with Git and GitHub",
        ],
      },
      {
        title: "Frontend Development with React",
        duration: "3 Weeks",
        topics: [
          "React fundamentals and component architecture",
          "State management with hooks and context API",
          "Routing with React Router",
          "Form handling and validation",
          "API integration and data fetching",
          "Testing React applications",
        ],
      },
      {
        title: "Backend Development with Express.js",
        duration: "3 Weeks",
        topics: [
          "Express.js fundamentals and routing",
          "RESTful API development",
          "Middleware and error handling",
          "Authentication and authorization (JWT)",
          "File uploads and static assets",
          "Testing and debugging Node.js backends",
        ],
      },
      {
        title: "Database Integration with MongoDB",
        duration: "2 Weeks",
        topics: [
          "MongoDB fundamentals and data modeling",
          "CRUD operations with Mongoose",
          "Schema design and validation",
          "Aggregation framework",
          "Indexing and performance tuning",
          "Database security best practices",
        ],
      },
      {
        title: "Full Stack Integration & Advanced Topics",
        duration: "4 Weeks",
        topics: [
          "Connecting React frontend to Express/Node.js backend",
          "JWT authentication and session management",
          "WebSockets for real-time features",
          "Deployment with Docker and cloud platforms",
          "Performance optimization and monitoring",
          "CI/CD pipelines for MERN apps",
        ],
      },
      {
        title: "DevOps & Cloud Deployment",
        duration: "2 Weeks",
        topics: [
          "Containerization with Docker",
          "Cloud deployment (AWS, Heroku, Vercel)",
          "Environment configuration and secrets management",
          "Monitoring and logging",
          "Scaling and load balancing",
        ],
      },
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
      companies: [
        {
          name: "Google",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
        },
        {
          name: "Microsoft",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
        },
        {
          name: "Amazon",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png",
        },
        {
          name: "Facebook",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1200px-F_icon.svg.png",
        },
        {
          name: "Shopify",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/1200px-Shopify_logo_2018.svg.png",
        },
        {
          name: "Salesforce",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png",
        },
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