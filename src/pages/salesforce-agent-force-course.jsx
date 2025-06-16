"use client"

import { useState } from "react"
import CourseTemplate from "./course-template"
import Header from "../components/Header"
import Footer from "../components/Footer"

const SalesforceAgentForceCourse = ({ setIsContactOpen }) => {
  const [isNavSticky, setIsNavSticky] = useState(false)

  // Course data specific to Salesforce Agent Force
  const courseData = {
    slug: "salesforce-agent-force",
    title: "Salesforce Agent Force",
    subtitle: "Master the platform for exceptional customer service",
    description:
      "Become an expert in Salesforce Agent Force to deliver exceptional customer service experiences. Learn to configure and customize service consoles, implement case management workflows, design knowledge bases, and leverage AI-powered service tools to improve agent productivity and customer satisfaction.",
    metaDescription:
      "Master Salesforce Agent Force with LearnX's comprehensive course. Learn service console configuration, case management, knowledge bases, and AI-powered service tools. Get certified and placed in top companies. Enroll now!",
    keywords:
      "salesforce agent force, service cloud, case management, service console, knowledge base, omni-channel, field service, customer service, service automation, einstein for service",
    duration: "12 Weeks",
    level: "Beginner to Advanced",
    rating: 4.7,
    students: 2100,
    image:
      "https://images.unsplash.com/photo-1661347333292-b85d6c1fe1a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "₹7,499",

    curriculum: [
      {
        title: "Introduction to Salesforce Agent Force",
        duration: "1 Week",
        topics: [
          "Overview of Salesforce Service Cloud",
          "Agent Force architecture and components",
          "Service Cloud vs. Sales Cloud",
          "Customer service lifecycle",
          "Agent Force implementation considerations",
          "Service Cloud console navigation",
        ],
      },
      {
        title: "Case Management Fundamentals",
        duration: "2 Weeks",
        topics: [
          "Case object customization",
          "Case assignment rules and queues",
          "Auto-response and escalation rules",
          "Email-to-case and web-to-case setup",
          "Case page layouts and record types",
          "Case process automation with flows",
        ],
      },
      {
        title: "Service Console Configuration",
        duration: "2 Weeks",
        topics: [
          "Console app setup and customization",
          "Lightning console components",
          "Utility bar configuration",
          "Quick text and macros",
          "Keyboard shortcuts and productivity tools",
          "Console integration with third-party systems",
        ],
      },
      {
        title: "Knowledge Management",
        duration: "2 Weeks",
        topics: [
          "Knowledge object setup and customization",
          "Article types and page layouts",
          "Knowledge publishing workflow",
          "Data categories and article visibility",
          "Knowledge search optimization",
          "Lightning Knowledge vs. Classic Knowledge",
        ],
      },
      {
        title: "Omni-Channel and Routing",
        duration: "2 Weeks",
        topics: [
          "Omni-Channel setup and configuration",
          "Routing configurations and queues",
          "Agent presence and status",
          "Service channel setup",
          "Supervisor console and monitoring",
          "Capacity planning and workload distribution",
        ],
      },
      {
        title: "Advanced Service Features",
        duration: "2 Weeks",
        topics: [
          "Einstein for Service implementation",
          "Chat and messaging setup",
          "Social customer service",
          "CTI integration",
          "Service analytics and reporting",
          "Field Service Lightning overview",
        ],
      },
      {
        title: "Service Cloud Administration",
        duration: "1 Week",
        topics: [
          "Service Cloud governance",
          "Performance optimization",
          "User management and permissions",
          "Service KPIs and metrics",
          "Change management for service teams",
          "Service Cloud roadmap planning",
        ],
      },
    ],

    certifications: [
      {
        name: "Salesforce Certified Service Cloud Consultant",
        provider: "Salesforce",
        description: "Validate your expertise in designing and implementing Service Cloud solutions",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png",
      },
      {
        name: "Salesforce Certified Administrator",
        provider: "Salesforce",
        description: "Demonstrate your skills in setting up, configuring, and managing a Salesforce org",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png",
      },
      {
        name: "Salesforce Certified Platform App Builder",
        provider: "Salesforce",
        description:
          "Prove your ability to design, build, and implement custom applications using declarative capabilities",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png",
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
      averageSalary: "₹7,00,000",
      placementRate: "93%",
      testimonials: [
        {
          name: "Divya",
          role: "Service Cloud Consultant",
          company: "Deloitte",
          image: "https://randomuser.me/api/portraits/women/56.jpg",
          quote:
            "The Salesforce Agent Force course at LearnX provided me with comprehensive knowledge of Service Cloud configuration and customization. The hands-on projects helped me develop practical skills that I use daily in my consulting role at Deloitte.",
        },
        {
          name: "Mohammad",
          role: "Customer Service Manager",
          company: "IBM",
          image: "https://randomuser.me/api/portraits/men/67.jpg",
          quote:
            "As a customer service manager, this course helped me understand how to leverage Salesforce to improve our service operations. The curriculum covered everything from basic case management to advanced features like Einstein for Service, which has been invaluable in transforming our customer support.",
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

export default SalesforceAgentForceCourse

