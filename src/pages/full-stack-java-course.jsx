"use client"

import { useState } from "react"
import CourseTemplate from "./course-template"
import Header from "../components/Header"
import Footer from "../components/Footer"

const FullStackJavaCourse = ({ setIsContactOpen }) => {
  const [isNavSticky, setIsNavSticky] = useState(false)

  // Course data specific to Full Stack Java
  const courseData = {
    slug: "full-stack-java",
    title: "Full Stack Java Development",
    subtitle: "Master Java, Spring Boot, React, and cloud deployment for enterprise web apps",
    description:
      "Become a highly skilled Full Stack Java Developer. Learn to build scalable, enterprise-grade web applications using Java for backend (Spring Boot, Hibernate), modern frontend frameworks (React), databases, REST APIs, and cloud deployment. Get hands-on with real-world projects and boost your career!",
    metaDescription:
      "Master Full Stack Java Development with LearnX. Learn Java, Spring Boot, Hibernate, React, REST APIs, databases, and cloud deployment. Get certified and placed in top companies. Enroll now!",
    keywords:
      "full stack java course, java web development, spring boot, hibernate, react, backend, frontend, REST API, SQL, deployment, cloud, placement assistance",
    duration: "16 Weeks",
    level: "Beginner to Advanced",
    rating: 4.8,
    students: 3900,
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: "₹7,499",

    curriculum: [
      {
        title: "Java Programming Fundamentals",
        duration: "2 Weeks",
        topics: [
          "Java syntax, data types, and control structures",
          "Object-oriented programming in Java",
          "Exception handling and file I/O",
          "Collections framework and generics",
          "Maven/Gradle and project structure",
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
        title: "Backend Development with Spring Boot",
        duration: "4 Weeks",
        topics: [
          "Spring Boot project setup and configuration",
          "RESTful API development with Spring MVC",
          "Data persistence with Hibernate/JPA",
          "Authentication and authorization (JWT, OAuth)",
          "Exception handling and logging",
          "Testing and debugging Java backends",
        ],
      },
      {
        title: "Databases and Data Modeling",
        duration: "2 Weeks",
        topics: [
          "Relational databases (MySQL, PostgreSQL) integration",
          "Database schema design and migrations",
          "ORM tools (Hibernate, JPA)",
          "Data validation and security",
          "Caching strategies (Redis)",
          "Database performance tuning",
        ],
      },
      {
        title: "Full Stack Integration & Advanced Topics",
        duration: "3 Weeks",
        topics: [
          "Connecting React frontend to Java backends",
          "JWT authentication and session management",
          "WebSockets for real-time features",
          "File uploads and media handling",
          "Deployment with Docker and cloud platforms",
          "Performance optimization and monitoring",
        ],
      },
      {
        title: "DevOps & Cloud Deployment",
        duration: "2 Weeks",
        topics: [
          "CI/CD pipelines for Java web apps",
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
        name: "Full Stack Java Developer Certification",
        provider: "LearnX",
        description: "Validate your expertise in building complete web applications using Java, Spring Boot, Hibernate, and React.",
        logo: "https://cdn.worldvectorlogo.com/logos/java-4.svg",
      },
      {
        name: "Spring Professional Certification",
        provider: "VMware",
        description: "Demonstrate your skills in building scalable web applications with Spring Boot.",
        logo: "https://spring.io/images/spring-logo-2019-627d4b7c7c7c7eebc5b7b7b7b7b7b7b7.svg",
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
      averageSalary: "₹7,80,000",
      placementRate: "96%",
      testimonials: [
        {
          name: "Rahul",
          role: "Full Stack Java Developer",
          company: "Microsoft",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          quote:
            "The Full Stack Java course at LearnX was a game-changer for my career. The hands-on projects and mentorship helped me land a job at Microsoft!",
        },
        {
          name: "Priya",
          role: "Backend Engineer",
          company: "Shopify",
          image: "https://randomuser.me/api/portraits/women/50.jpg",
          quote:
            "Excellent curriculum, real-world projects, and great placement support. I highly recommend this course to anyone looking to master Java and Spring Boot for web development!",
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

export default FullStackJavaCourse 