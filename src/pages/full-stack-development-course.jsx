"use client"

import { useState } from "react"
import CourseTemplate from "./course-template"
import Header from "../components/Header"
import Footer from "../components/Footer"

const FullStackDevelopmentCourse = ({ setIsContactOpen }) => {
  const [isNavSticky, setIsNavSticky] = useState(false)

  // Course data specific to Full Stack Development
  const courseData = {
    slug: "full-stack-development",
    title: "Full Stack Development",
    subtitle: "Master both frontend and backend technologies",
    description:
      "Become a versatile developer capable of building complete web applications from front to back. Learn modern frontend frameworks, backend technologies, databases, API development, and deployment strategies to create robust, scalable web applications.",
    metaDescription:
      "Master Full Stack Development with LearnX's comprehensive course. Learn JavaScript, React, Node.js, databases, and cloud deployment. Get placed in top companies. Enroll now!",
    keywords:
      "full stack development course, web development, frontend, backend, JavaScript, React, Node.js, Express, MongoDB, SQL, REST API, GraphQL, responsive design, deployment",
    duration: "16 Weeks",
    level: "Beginner to Advanced",
    rating: 4.8,
    students: 3800,
    image:
      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "₹6,999",

    curriculum: [
      {
        title: "Web Development Fundamentals",
        duration: "2 Weeks",
        topics: [
          "HTML5 semantic elements and best practices",
          "CSS3 styling, flexbox, and grid layouts",
          "Responsive design principles",
          "JavaScript fundamentals and ES6+ features",
          "DOM manipulation and browser APIs",
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
        title: "UI Frameworks and State Management",
        duration: "2 Weeks",
        topics: [
          "CSS frameworks (Tailwind CSS, Bootstrap)",
          "Component libraries (Material UI, Chakra UI)",
          "Advanced state management with Redux",
          "Redux middleware (Thunk, Saga)",
          "Performance optimization techniques",
          "Progressive Web Apps (PWAs)",
        ],
      },
      {
        title: "Backend Development with Node.js",
        duration: "3 Weeks",
        topics: [
          "Node.js fundamentals and event loop",
          "Express.js framework for API development",
          "RESTful API design principles",
          "Authentication and authorization (JWT, OAuth)",
          "Middleware implementation",
          "Error handling and logging",
        ],
      },
      {
        title: "Database Design and Integration",
        duration: "2 Weeks",
        topics: [
          "SQL database fundamentals (PostgreSQL, MySQL)",
          "NoSQL databases (MongoDB)",
          "Database schema design",
          "ORM/ODM tools (Sequelize, Mongoose)",
          "Database migrations and seeding",
          "Caching strategies (Redis)",
        ],
      },
      {
        title: "Advanced Backend Topics",
        duration: "2 Weeks",
        topics: [
          "GraphQL API development",
          "Microservices architecture",
          "WebSockets for real-time applications",
          "File uploads and storage",
          "Background jobs and task queues",
          "API documentation (Swagger, OpenAPI)",
        ],
      },
      {
        title: "Deployment and DevOps",
        duration: "2 Weeks",
        topics: [
          "CI/CD pipelines for web applications",
          "Containerization with Docker",
          "Cloud deployment (AWS, Heroku, Vercel)",
          "Environment configuration and secrets management",
          "Monitoring and logging",
          "Performance optimization and scaling",
        ],
      },
    ],

    certifications: [
      {
        name: "Full Stack JavaScript Developer Certification",
        provider: "LearnX",
        description: "Validate your skills in building complete web applications using modern JavaScript technologies",
        logo: "https://example.com/learnx-logo.png",
      },
      {
        name: "MongoDB Certified Developer Associate",
        provider: "MongoDB",
        description: "Demonstrate your expertise in building applications using MongoDB",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1200px-MongoDB_Logo.svg.png",
      },
      {
        name: "AWS Certified Developer - Associate",
        provider: "Amazon Web Services",
        description: "Prove your ability to develop, deploy, and debug cloud-based applications using AWS",
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
      averageSalary: "₹7,00,000",
      placementRate: "95%",
      testimonials: [
        {
          name: "Daniel Lee",
          role: "Full Stack Developer",
          company: "Google",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          quote:
            "The Full Stack Development course at LearnX provided me with a comprehensive understanding of both frontend and backend technologies. The project-based approach helped me build a strong portfolio that impressed recruiters at Google.",
        },
        {
          name: "Sophia Martinez",
          role: "Software Engineer",
          company: "Microsoft",
          image: "https://randomuser.me/api/portraits/women/38.jpg",
          quote:
            "I had some programming experience but wanted to specialize in web development. This course covered everything from fundamentals to advanced topics, with a perfect balance of theory and practice. The career support was exceptional.",
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

export default FullStackDevelopmentCourse

