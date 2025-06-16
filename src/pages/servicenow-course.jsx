"use client"

import { useState } from "react"
import CourseTemplate from "./course-template"
import Header from "../components/Header"
import Footer from "../components/Footer"

const ServiceNowCourse = ({ setIsContactOpen }) => {
  const [isNavSticky, setIsNavSticky] = useState(false)

  // Course data specific to ServiceNow
  const courseData = {
    slug: "servicenow",
    title: "ServiceNow",
    subtitle: "Master ServiceNow for IT Service Management and Automation",
    description:
      "Become a ServiceNow expert. Learn ITSM, workflow automation, ServiceNow development, integrations, and platform administration. Gain hands-on experience with real-world projects and prepare for ServiceNow certifications to boost your IT career!",
    metaDescription:
      "Master ServiceNow with LearnX. Learn ITSM, workflow automation, ServiceNow development, integrations, and platform administration. Get certified and placed in top companies. Enroll now!",
    keywords:
      "servicenow course, ITSM, workflow automation, servicenow development, servicenow admin, servicenow certification, placement assistance",
    duration: "10 Weeks",
    level: "Beginner to Advanced",
    rating: 4.8,
    students: 2100,
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: "₹7,499",

    curriculum: [
      {
        title: "Introduction to ServiceNow & ITSM",
        duration: "2 Weeks",
        topics: [
          "Overview of ServiceNow platform",
          "IT Service Management (ITSM) fundamentals",
          "Navigating the ServiceNow interface",
          "Incident, Problem, and Change Management",
          "Service Catalog and Request Management",
        ],
      },
      {
        title: "ServiceNow Administration",
        duration: "2 Weeks",
        topics: [
          "User and group management",
          "Roles and permissions",
          "Tables, forms, and lists",
          "Data policies and UI policies",
          "Notifications and subscriptions",
        ],
      },
      {
        title: "Workflow & Automation",
        duration: "2 Weeks",
        topics: [
          "Business rules and client scripts",
          "Workflows and Flow Designer",
          "Approvals and task management",
          "Service Level Agreements (SLAs)",
          "Automation best practices",
        ],
      },
      {
        title: "ServiceNow Development",
        duration: "2 Weeks",
        topics: [
          "Scripting in ServiceNow (GlideScript, UI Scripts)",
          "REST and SOAP integrations",
          "Custom applications and modules",
          "Import sets and data transformation",
          "Performance and security best practices",
        ],
      },
      {
        title: "Reporting, Dashboards & Capstone Project",
        duration: "2 Weeks",
        topics: [
          "Creating and customizing reports",
          "Dashboards and Performance Analytics",
          "Capstone ServiceNow project",
          "Exam tips and practice questions",
          "Mock interviews and resume building",
        ],
      },
    ],

    certifications: [
      {
        name: "ServiceNow Certified System Administrator",
        provider: "ServiceNow",
        description: "Validate your expertise in ServiceNow platform administration and configuration.",
        logo: "https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/images/company/brand/servicenow-logo.png",
      },
      {
        name: "ServiceNow Certified Application Developer",
        provider: "ServiceNow",
        description: "Prove your ability to design and develop applications on the ServiceNow platform.",
        logo: "https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/images/company/brand/servicenow-logo.png",
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
      averageSalary: "₹8,00,000",
      placementRate: "96%",
      testimonials: [
        {
          name: "Rohit",
          role: "ServiceNow Developer",
          company: "Accenture",
          image: "https://randomuser.me/api/portraits/men/48.jpg",
          quote:
            "The ServiceNow course at LearnX gave me the skills and confidence to excel in my role at Accenture!",
        },
        {
          name: "Sneha",
          role: "ServiceNow Administrator",
          company: "Infosys",
          image: "https://randomuser.me/api/portraits/women/49.jpg",
          quote:
            "Excellent curriculum, hands-on projects, and great placement support. I highly recommend this course to anyone looking to master ServiceNow!",
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

export default ServiceNowCourse 