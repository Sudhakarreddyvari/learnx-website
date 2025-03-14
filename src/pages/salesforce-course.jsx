"use client"

import { useState } from "react"
import CourseTemplate from "./course-template"
import Header from "../components/Header"
import Footer from "../components/Footer"

const SalesforceCourse = ({ setIsFormOpen }) => {
  const [isNavSticky, setIsNavSticky] = useState(false)

  // Course data specific to Salesforce
  const courseData = {
    slug: "salesforce",
    title: "Salesforce Development & Administration",
    subtitle: "Master the world's #1 CRM platform",
    description:
      "Become a Salesforce expert capable of implementing, customizing, and managing Salesforce solutions. Learn administration, development with Apex and Lightning, integration techniques, and best practices to drive business transformation with the Salesforce platform.",
    metaDescription:
      "Master Salesforce Development and Administration with LearnX's comprehensive course. Learn Apex, Lightning, integration, and customization. Get certified and placed in top companies. Enroll now!",
    keywords:
      "salesforce course, salesforce admin, salesforce developer, apex, lightning, CRM, salesforce certification, salesforce consultant, salesforce integration, salesforce customization",
    duration: "14 Weeks",
    level: "Beginner to Advanced",
    rating: 4.8,
    students: 2100,
    image:
      "https://images.unsplash.com/photo-1661347333292-b85d6c1fe1a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "$699",

    curriculum: [
      {
        title: "Salesforce Platform Fundamentals",
        duration: "1 Week",
        topics: [
          "Introduction to Salesforce ecosystem",
          "Salesforce architecture and data model",
          "Salesforce editions and licenses",
          "Navigating the Salesforce interface",
          "Understanding objects, fields, and relationships",
          "Salesforce mobile app capabilities",
        ],
      },
      {
        title: "Salesforce Administration",
        duration: "3 Weeks",
        topics: [
          "User management and security",
          "Data management and import tools",
          "Reports and dashboards",
          "Workflow automation (Process Builder, Flow)",
          "Validation rules and approval processes",
          "Email templates and automation",
        ],
      },
      {
        title: "Salesforce Configuration and Customization",
        duration: "2 Weeks",
        topics: [
          "Custom objects and fields",
          "Page layouts and record types",
          "Formula fields and roll-up summaries",
          "Lightning App Builder",
          "Global actions and quick actions",
          "Custom settings and metadata types",
        ],
      },
      {
        title: "Apex Programming",
        duration: "3 Weeks",
        topics: [
          "Apex fundamentals and syntax",
          "Triggers and classes",
          "SOQL and SOSL queries",
          "DML operations and governor limits",
          "Asynchronous Apex (future methods, batch Apex)",
          "Testing and debugging Apex code",
        ],
      },
      {
        title: "Lightning Component Development",
        duration: "2 Weeks",
        topics: [
          "Lightning Component Framework",
          "Lightning Web Components (LWC)",
          "Component communication patterns",
          "Lightning Data Service",
          "Lightning design system (SLDS)",
          "Performance optimization techniques",
        ],
      },
      {
        title: "Salesforce Integration",
        duration: "2 Weeks",
        topics: [
          "REST and SOAP API basics",
          "Salesforce Connect and external objects",
          "Outbound and inbound integration patterns",
          "Authentication and security",
          "Integration with external systems",
          "MuleSoft and AppExchange integration solutions",
        ],
      },
      {
        title: "Salesforce DevOps and Deployment",
        duration: "1 Week",
        topics: [
          "Salesforce DX and source-driven development",
          "Change sets and deployment strategies",
          "Version control with Git",
          "Continuous integration for Salesforce",
          "Data migration techniques",
          "Release management best practices",
        ],
      },
    ],

    certifications: [
      {
        name: "Salesforce Certified Administrator",
        provider: "Salesforce",
        description: "Validate your skills in setting up, configuring, and managing a Salesforce org",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png",
      },
      {
        name: "Salesforce Certified Platform Developer I",
        provider: "Salesforce",
        description: "Demonstrate your expertise in developing custom applications on the Salesforce platform",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png",
      },
      {
        name: "Salesforce Certified Platform App Builder",
        provider: "Salesforce",
        description:
          "Prove your ability to design, build, and implement custom applications using the declarative capabilities of the Salesforce platform",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png",
      },
    ],

    placements: {
      companies: [
        {
          name: "Salesforce",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png",
        },
        {
          name: "Accenture",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/1200px-Accenture.svg.png",
        },
        {
          name: "Deloitte",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/1200px-Deloitte.svg.png",
        },
        {
          name: "IBM",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png",
        },
        {
          name: "Cognizant",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Cognizant_logo.svg/1200px-Cognizant_logo.svg.png",
        },
        {
          name: "Infosys",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1200px-Infosys_logo.svg.png",
        },
      ],
      averageSalary: "$110,000",
      placementRate: "95%",
      testimonials: [
        {
          name: "Jennifer Smith",
          role: "Salesforce Developer",
          company: "Accenture",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          quote:
            "The Salesforce course at LearnX provided me with a comprehensive understanding of both administration and development aspects. The hands-on projects helped me build practical skills that I use daily in my role at Accenture.",
        },
        {
          name: "Robert Chen",
          role: "Salesforce Administrator",
          company: "Deloitte",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          quote:
            "I had no prior Salesforce experience, but this course took me from beginner to certified administrator. The curriculum was well-structured, and the instructors were extremely knowledgeable and supportive throughout the learning journey.",
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

      <Header setIsFormOpen={setIsFormOpen} hideHeader={false} />
      <main className="relative z-10">
        <CourseTemplate courseData={courseData} setIsFormOpen={setIsFormOpen} setIsNavSticky={setIsNavSticky} />
      </main>
      <Footer setIsFormOpen={setIsFormOpen} />
    </div>
  )
}

export default SalesforceCourse

