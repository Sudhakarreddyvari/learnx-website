"use client"

import { useState } from "react"
import CourseTemplate from "./course-template"
import Header from "../components/Header"
import Footer from "../components/Footer"

const SalesforceCourse = ({ setIsContactOpen }) => {
  const [isNavSticky, setIsNavSticky] = useState(false)

  // Course data specific to Salesforce
  const courseData = {
    slug: "salesforce",
    title: "Salesforce Administration & Development",
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
        title: "Introduction to Salesforce",
        duration: "1 Week",
        topics: [
          "Cloud Computing and CRM fundamentals",
          "SaaS, PaaS, and IaaS service models",
          "Salesforce Architecture and Editions",
          "Salesforce Licenses and Development Life cycle",
          "Salesforce environment setup and configuration",
          "Business Hours and Company Information setup",
        ],
      },
      {
        title: "User Interface and Data Management",
        duration: "2 Weeks",
        topics: [
          "App Menu, Custom Labels, and Custom Settings",
          "Global Search and Themes & Branding",
          "Users, Roles, and Profiles configuration",
          "Permission Sets and Public Groups",
          "Record Ownership and Access Control",
          "Data management and backup strategies",
        ],
      },
      {
        title: "Salesforce Objects, Fields & Relationships",
        duration: "2 Weeks",
        topics: [
          "Standard vs Custom Objects creation and management",
          "Field types and data validation",
          "Lookup vs Master-Detail Relationships",
          "Page Layouts and Record Types",
          "Schema Builder and Custom Applications",
          "Tab creation and customization",
        ],
      },
      {
        title: "Automation and Workflows",
        duration: "2 Weeks",
        topics: [
          "Email Templates and delivery settings",
          "Workflow Rules and Actions",
          "Approval Processes and configuration",
          "Process Builder automation",
          "Visual Flows development",
          "Validation Rules implementation",
        ],
      },
      {
        title: "Security Controls and Identity Management",
        duration: "1 Week",
        topics: [
          "Organization-Wide Defaults (OWD) and Sharing Settings",
          "Password Policies and Session Settings",
          "Sharing Rules and Manual Sharing",
          "Certificate and Key Management",
          "Health Check and User Session Information",
          "File Upload and Download Security",
        ],
      },
      {
        title: "Reports, Dashboards, and AppExchange",
        duration: "1 Week",
        topics: [
          "Creating Report Types and Custom Reports",
          "Dashboard development and configuration",
          "Advanced Filters and reporting features",
          "AppExchange installation and management",
          "Managed vs Unmanaged Packages",
          "Salesforce Chatter & Slack integration",
        ],
      },
      {
        title: "Apex Development Fundamentals",
        duration: "2 Weeks",
        topics: [
          "Introduction to Apex programming language",
          "Data Types, Variables, and Control Flow",
          "Classes, Objects, and Interfaces",
          "SOQL and SOSL queries",
          "Data Manipulation Language (DML) operations",
          "Apex Triggers and Context Variables",
        ],
      },
      {
        title: "Advanced Apex and Asynchronous Processing",
        duration: "2 Weeks",
        topics: [
          "Batch Apex implementation",
          "Scheduled and Queueable Apex",
          "Future Methods and asynchronous processing",
          "Apex security and sharing enforcement",
          "Test Classes and best practices",
          "Debugging and deployment techniques",
        ],
      },
      {
        title: "Lightning Web Components Development",
        duration: "3 Weeks",
        topics: [
          "Introduction to Lightning Web Components",
          "Component lifecycle and reactive properties",
          "Working with Salesforce data using LDS",
          "Component communication patterns",
          "Event handling and propagation",
          "Testing and debugging LWC applications",
        ],
      },
      {
        title: "Visualforce and Integration",
        duration: "2 Weeks",
        topics: [
          "Visualforce page development",
          "Standard and Custom Controllers",
          "Controller Extensions and View State",
          "Integration between LWC, Aura, and Visualforce",
          "Lightning Messaging Service",
          "Deployment and change management",
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

      <Header setIsContactOpen={setIsContactOpen} hideHeader={false} />
      <main className="relative z-10">
        <CourseTemplate courseData={courseData} setIsContactOpen={setIsContactOpen} setIsNavSticky={setIsNavSticky} />
      </main>
      <Footer setIsContactOpen={setIsContactOpen} />
    </div>
  )
}

export default SalesforceCourse

