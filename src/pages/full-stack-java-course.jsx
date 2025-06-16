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
        title: "Foundations of Web Development",
        duration: "4 Weeks",
        topics: [
          "HTML fundamentals and semantic markup",
          "CSS styling and box model",
          "Advanced CSS layouts and positioning",
          "Responsive design and Bootstrap",
          "JavaScript core concepts and DOM manipulation",
          "TypeScript fundamentals and advanced features",
          "Modern web development practices",
          "Accessibility and performance optimization"
        ],
      },
      {
        title: "React.js Frontend Framework",
        duration: "3 Weeks",
        topics: [
          "React fundamentals and ES6 essentials",
          "Components, JSX, and state management",
          "React hooks and lifecycle methods",
          "Advanced React features and hooks",
          "Application architecture and routing",
          "Form handling and Redux integration",
          "Performance optimization and testing",
          "React best practices and deployment"
        ],
      },
      {
        title: "Core Java Programming",
        duration: "3 Weeks",
        topics: [
          "Java fundamentals and environment setup",
          "Object-oriented programming concepts",
          "Exception handling and multithreading",
          "Collections framework and generics",
          "Advanced data handling and Stream API",
          "File I/O and regular expressions",
          "Java coding conventions and best practices",
          "Unit testing and debugging techniques"
        ],
      },
      {
        title: "Advanced Java Development",
        duration: "3 Weeks",
        topics: [
          "Java Enterprise essentials and JDBC",
          "Servlets and JSP fundamentals",
          "Hibernate ORM and advanced mapping",
          "Spring Framework core concepts",
          "Dependency injection and AOP",
          "Spring MVC and RESTful services",
          "Database integration and security",
          "Testing and deployment strategies"
        ],
      },
      {
        title: "Spring Boot & Microservices",
        duration: "3 Weeks",
        topics: [
          "Spring Boot fundamentals and setup",
          "RESTful API development",
          "Microservices architecture",
          "Service discovery and API gateway",
          "Docker and containerization",
          "Spring Cloud services",
          "Reactive programming with WebFlux",
          "Security and monitoring"
        ],
      },
      {
        title: "Cloud & DevOps",
        duration: "2 Weeks",
        topics: [
          "Cloud computing fundamentals",
          "DevOps practices and Git",
          "CI/CD pipelines and automation",
          "Docker and container management",
          "Cloud deployment and scaling",
          "Infrastructure as Code",
          "Monitoring and logging",
          "Security best practices"
        ],
      }
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