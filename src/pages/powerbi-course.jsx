"use client"

import { useState } from "react"
import CourseTemplate from "./course-template"
import Header from "../components/Header"
import Footer from "../components/Footer"

const PowerBiCourse = ({ setIsContactOpen }) => {
  const [isNavSticky, setIsNavSticky] = useState(false)

  // Course data specific to Power BI
  const courseData = {
    slug: "powerbi",
    title: "Power BI",
    subtitle: "Master Power BI for data visualization and business intelligence",
    description:
      "Become a Power BI expert. Learn to create interactive dashboards, reports, and data models. Gain hands-on experience with DAX, Power Query, and data visualization techniques. Prepare for industry certifications and accelerate your business intelligence career!",
    metaDescription:
      "Master Power BI with LearnX. Learn data visualization, DAX, Power Query, and more. Get certified and placed in top companies. Enroll now!",
    keywords:
      "power bi course, data visualization, business intelligence, dax, power query, analytics certification, placement assistance",
    duration: "10 Weeks",
    level: "Beginner to Advanced",
    rating: 4.7,
    students: 2800,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: "₹6,999",

    curriculum: [
      {
        title: "Introduction to Power BI",
        duration: "2 Weeks",
        topics: [
          "Overview of Power BI and its applications",
          "Setting up Power BI Desktop",
          "Connecting to data sources",
          "Introduction to data modeling",
          "Basic visualization techniques",
        ],
      },
      {
        title: "Data Transformation with Power Query",
        duration: "2 Weeks",
        topics: [
          "Data cleaning and transformation",
          "Merging and appending queries",
          "Creating calculated columns",
          "Data profiling and quality checks",
          "Advanced data transformation techniques",
        ],
      },
      {
        title: "Data Analysis Expressions (DAX)",
        duration: "2 Weeks",
        topics: [
          "Introduction to DAX",
          "Creating calculated measures",
          "Time intelligence functions",
          "Filter context and row context",
          "Advanced DAX patterns",
        ],
      },
      {
        title: "Data Visualization and Dashboards",
        duration: "2 Weeks",
        topics: [
          "Designing effective visualizations",
          "Creating interactive dashboards",
          "Using custom visuals",
          "Drill-through and drill-down techniques",
          "Dashboard performance optimization",
        ],
      },
      {
        title: "Power BI Service and Collaboration",
        duration: "1 Week",
        topics: [
          "Publishing to Power BI Service",
          "Sharing and collaboration",
          "Scheduled refreshes and data gateways",
          "Power BI mobile app",
          "Workspace and app management",
        ],
      },
      {
        title: "Capstone Project and Certification Prep",
        duration: "1 Week",
        topics: [
          "End-to-end Power BI project",
          "Exam tips and practice questions",
          "Mock interviews and resume building",
          "Career guidance and placement support",
        ],
      },
    ],

    certifications: [
      {
        name: "Microsoft Certified: Data Analyst Associate",
        provider: "Microsoft",
        description: "Validate your expertise in data analysis and visualization with Power BI.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
      },
      {
        name: "Power BI Data Analyst Associate",
        provider: "Microsoft",
        description: "Prove your ability to create and optimize data visualizations with Power BI.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
      },
    ],

    placements: {
      companies: [
        {
          name: "Microsoft",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
        },
        {
          name: "IBM",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png",
        },
        {
          name: "Accenture",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/1200px-Accenture.svg.png",
        },
        {
          name: "Deloitte",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Deloitte_Logo.svg/1200px-Deloitte_Logo.svg.png",
        },
      ],
      averageSalary: "₹7,50,000",
      placementRate: "95%",
      testimonials: [
        {
          name: "Priya",
          role: "Business Intelligence Analyst",
          company: "Microsoft",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          quote:
            "The Power BI course at LearnX gave me the skills and confidence to excel in my role at Microsoft!",
        },
        {
          name: "Rahul",
          role: "Data Analyst",
          company: "IBM",
          image: "https://randomuser.me/api/portraits/men/63.jpg",
          quote:
            "Excellent curriculum, hands-on projects, and great placement support. I highly recommend this course to anyone looking to master Power BI!",
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

export default PowerBiCourse 