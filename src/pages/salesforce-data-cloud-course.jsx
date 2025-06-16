"use client"

import { useState } from "react"
import CourseTemplate from "./course-template"
import Header from "../components/Header"
import Footer from "../components/Footer"

const SalesforceDataCloudCourse = ({ setIsContactOpen }) => {
  const [isNavSticky, setIsNavSticky] = useState(false)

  // Course data for Salesforce Data Cloud
  const courseData = {
    slug: "salesforce-data-cloud",
    title: "Salesforce Data Cloud",
    subtitle: "Master Salesforce Data Cloud for Unified Customer Data Management",
    description:
      "Learn to implement, customize, and manage Salesforce Data Cloud for unified customer data, analytics, and insights. Gain hands-on experience with data integration, identity resolution, and real-time analytics. Ideal for Salesforce professionals and data architects.",
    metaDescription:
      "Master Salesforce Data Cloud with LearnX. Learn data integration, identity resolution, and analytics. Get certified and advance your career in data management.",
    keywords:
      "salesforce data cloud, customer data platform, data integration, identity resolution, analytics, salesforce course",
    duration: "8 Weeks",
    level: "Intermediate",
    rating: 4.8,
    students: 900,
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: "₹10,499",
    curriculum: [
      {
        title: "Introduction to Salesforce Data Cloud",
        duration: "1 Week",
        topics: [
          "Overview of Salesforce Data Cloud",
          "Customer Data Platform concepts",
          "Key features and benefits",
        ],
      },
      {
        title: "Data Integration",
        duration: "2 Weeks",
        topics: [
          "Connecting data sources",
          "ETL processes",
          "APIs and connectors",
        ],
      },
      {
        title: "Identity Resolution",
        duration: "2 Weeks",
        topics: [
          "Identity matching and unification",
          "Data deduplication",
          "Customer 360 view",
        ],
      },
      {
        title: "Analytics and Insights",
        duration: "2 Weeks",
        topics: [
          "Real-time analytics",
          "Segmentation and audience building",
          "Dashboards and reporting",
        ],
      },
      {
        title: "Security and Compliance",
        duration: "1 Week",
        topics: [
          "Data privacy regulations",
          "Security best practices",
          "Compliance management",
        ],
      },
    ],
    certifications: [
      {
        name: "Salesforce Data Cloud Specialist",
        provider: "Salesforce",
        description: "Validate your expertise in implementing and managing Salesforce Data Cloud solutions.",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png",
      },
    ],
    placements: {
      companies: [
        { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png" },
        { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Deloitte_Logo.png" },
        { name: "Accenture", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Accenture_Logo.svg" },
      ],
      averageSalary: "₹12,00,000",
      placementRate: "96%",
      testimonials: [
        {
          name: "Rohit Kumar",
          role: "Data Cloud Consultant",
          company: "Deloitte",
          image: "https://randomuser.me/api/portraits/men/45.jpg",
          quote:
            "The Salesforce Data Cloud course helped me master unified customer data management. The practical labs and expert support were outstanding!",
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

export default SalesforceDataCloudCourse 