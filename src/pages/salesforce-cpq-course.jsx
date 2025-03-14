"use client"

import { useState } from "react"
import CourseTemplate from "./course-template"
import Header from "../components/Header"
import Footer from "../components/Footer"

const SalesforceCPQCourse = ({ setIsFormOpen }) => {
  const [isNavSticky, setIsNavSticky] = useState(false)

  // Course data specific to Salesforce CPQ
  const courseData = {
    slug: "salesforce-cpq",
    title: "Salesforce CPQ",
    subtitle: "Master Configure, Price, Quote to drive revenue growth",
    description:
      "Become an expert in Salesforce CPQ (Configure, Price, Quote) to streamline sales processes, create accurate quotes, and accelerate deal closures. Learn to configure complex product catalogs, implement advanced pricing rules, and automate quote generation to maximize revenue and improve sales efficiency.",
    metaDescription:
      "Master Salesforce CPQ with LearnX's comprehensive course. Learn product configuration, pricing rules, quote generation, and advanced CPQ features. Get certified and placed in top companies. Enroll now!",
    keywords:
      "salesforce cpq course, configure price quote, salesforce quote-to-cash, cpq certification, product configuration, pricing rules, quote templates, guided selling, approval workflows, subscription management",
    duration: "10 Weeks",
    level: "Intermediate to Advanced",
    rating: 4.8,
    students: 1850,
    image:
      "https://images.unsplash.com/photo-1661347333292-b85d6c1fe1a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "$799",

    curriculum: [
      {
        title: "Introduction to Salesforce CPQ",
        duration: "1 Week",
        topics: [
          "Overview of Quote-to-Cash process",
          "CPQ business value and ROI",
          "CPQ architecture and data model",
          "Integration with Salesforce CRM",
          "CPQ vs standard Salesforce pricing",
          "CPQ implementation considerations",
        ],
      },
      {
        title: "Product Catalog Configuration",
        duration: "2 Weeks",
        topics: [
          "Product and price book setup",
          "Product features and options",
          "Product bundles and configurations",
          "Product rules and constraints",
          "Dynamic product selection",
          "Product categorization and filtering",
        ],
      },
      {
        title: "Pricing and Discounting",
        duration: "2 Weeks",
        topics: [
          "Price rule configuration",
          "Block pricing and tiered pricing",
          "Cost and margin calculation",
          "Discount schedules and tiers",
          "Volume discounting strategies",
          "Approval processes for discounts",
        ],
      },
      {
        title: "Quote Generation and Management",
        duration: "2 Weeks",
        topics: [
          "Quote creation workflow",
          "Quote templates and document generation",
          "Quote line editor configuration",
          "Multi-dimensional quoting",
          "Quote approval workflows",
          "Quote lifecycle management",
        ],
      },
      {
        title: "Advanced CPQ Features",
        duration: "2 Weeks",
        topics: [
          "Guided selling and configurators",
          "Subscription and asset management",
          "Renewal and amendment processes",
          "Multi-currency and international pricing",
          "Contract management integration",
          "Order creation and fulfillment",
        ],
      },
      {
        title: "CPQ Administration and Optimization",
        duration: "1 Week",
        topics: [
          "Performance optimization techniques",
          "Testing and troubleshooting",
          "User management and permissions",
          "Data migration strategies",
          "CPQ analytics and reporting",
          "Maintenance and governance best practices",
        ],
      },
    ],

    certifications: [
      {
        name: "Salesforce Certified CPQ Specialist",
        provider: "Salesforce",
        description: "Validate your expertise in implementing and configuring Salesforce CPQ solutions",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png",
      },
      {
        name: "Salesforce Certified Administrator",
        provider: "Salesforce",
        description: "Demonstrate your skills in setting up, configuring, and managing a Salesforce org",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png",
      },
      {
        name: "Salesforce Certified Sales Cloud Consultant",
        provider: "Salesforce",
        description: "Prove your ability to design and implement Sales Cloud solutions to meet business requirements",
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
          name: "Slalom",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Slalom_logo_2019.svg/1200px-Slalom_logo_2019.svg.png",
        },
      ],
      averageSalary: "$120,000",
      placementRate: "94%",
      testimonials: [
        {
          name: "Michael Rodriguez",
          role: "CPQ Specialist",
          company: "Accenture",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          quote:
            "The Salesforce CPQ course at LearnX provided me with hands-on experience that directly translated to my role at Accenture. The curriculum covered all aspects of CPQ implementation, from basic configuration to advanced features like guided selling and approval workflows.",
        },
        {
          name: "Sarah Johnson",
          role: "Salesforce Consultant",
          company: "Deloitte",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          quote:
            "As someone with Salesforce Admin experience, this course helped me specialize in CPQ and significantly advance my career. The instructors were knowledgeable industry professionals who shared practical insights and real-world scenarios that I encounter daily in my consulting role.",
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

export default SalesforceCPQCourse

