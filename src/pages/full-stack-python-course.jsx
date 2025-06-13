"use client"

import { useState } from "react"
import CourseTemplate from "./course-template"
import Header from "../components/Header"
import Footer from "../components/Footer"

const FullStackPythonCourse = ({ setIsContactOpen }) => {
  const [isNavSticky, setIsNavSticky] = useState(false)

  // Course data specific to Full Stack Python
  const courseData = {
    slug: "full-stack-python",
    title: "Full Stack Python Development",
    subtitle: "Master Python for both frontend and backend web development",
    description:
      "Become a highly sought-after Full Stack Python Developer. Learn to build robust, scalable web applications using Python for backend (Django, Flask), modern frontend frameworks, databases, REST APIs, and cloud deployment. Gain hands-on experience with real-world projects and get placement-ready!",
    metaDescription:
      "Master Full Stack Python Development with LearnX. Learn Python, Django, Flask, React, REST APIs, databases, and cloud deployment. Get certified and placed in top companies. Enroll now!",
    keywords:
      "full stack python course, python web development, django, flask, react, backend, frontend, REST API, SQL, MongoDB, deployment, cloud, placement assistance",
    duration: "16 Weeks",
    level: "Beginner to Advanced",
    rating: 4.9,
    students: 4200,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: "₹7,499",

    curriculum: [
      {
        title: "Python Programming Fundamentals",
        duration: "2 Weeks",
        topics: [
          "Python syntax, data types, and control structures",
          "Functions, modules, and packages",
          "Object-oriented programming in Python",
          "File handling and error management",
          "Virtual environments and package management",
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
        title: "Backend Development with Django & Flask",
        duration: "4 Weeks",
        topics: [
          "Django project structure and app creation",
          "ORM and database migrations",
          "Building RESTful APIs with Django REST Framework",
          "Authentication and permissions",
          "Flask microservices and API development",
          "Testing and debugging Python backends",
        ],
      },
      {
        title: "Databases and Data Modeling",
        duration: "2 Weeks",
        topics: [
          "Relational databases (PostgreSQL, MySQL) with Django",
          "NoSQL databases (MongoDB) integration",
          "Database schema design and migrations",
          "ORM tools (Django ORM, SQLAlchemy)",
          "Data validation and security",
          "Caching strategies (Redis)",
        ],
      },
      {
        title: "Full Stack Integration & Advanced Topics",
        duration: "3 Weeks",
        topics: [
          "Connecting React frontend to Python backends",
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
          "CI/CD pipelines for Python web apps",
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
        name: "Full Stack Python Developer Certification",
        provider: "LearnX",
        description: "Validate your expertise in building complete web applications using Python, Django, Flask, and React.",
        logo: "https://www.python.org/static/community_logos/python-logo.png",
      },
      {
        name: "Django Developer Certification",
        provider: "Django Software Foundation",
        description: "Demonstrate your skills in building scalable web applications with Django.",
        logo: "https://static.djangoproject.com/img/logos/django-logo-negative.png",
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
      averageSalary: "₹7,50,000",
      placementRate: "97%",
      testimonials: [
        {
          name: "Aarav",
          role: "Python Full Stack Developer",
          company: "Amazon",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          quote:
            "LearnX's Full Stack Python course gave me the confidence and skills to build real-world web apps. The mentorship and placement support were top-notch. I landed my dream job at Amazon!",
        },
        {
          name: "Sneha",
          role: "Backend Engineer",
          company: "Shopify",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          quote:
            "The curriculum was perfectly balanced between theory and hands-on projects. I especially loved the Django and React integration modules. Highly recommended for anyone serious about Python web development!",
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

export default FullStackPythonCourse 