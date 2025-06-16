"use client"

import { useState } from "react"
import CourseTemplate from "./course-template"
import Header from "../components/Header"
import Footer from "../components/Footer"

const SalesforceHealthCloudCourse = ({ setIsContactOpen }) => {
  const [isNavSticky, setIsNavSticky] = useState(false)

  // Course data for Salesforce Health Cloud
  const courseData = {
    slug: "salesforce-health-cloud",
    title: "Salesforce Health Cloud",
    subtitle: "Master Salesforce Health Cloud for Healthcare Solutions",
    description:
      "Learn to implement, customize, and manage Salesforce Health Cloud for healthcare organizations. Gain hands-on experience with patient management, care coordination, and health data integration. Ideal for Salesforce professionals and healthcare IT specialists.",
    metaDescription:
      "Master Salesforce Health Cloud with LearnX. Learn patient management, care coordination, and health data integration. Get certified and advance your career in healthcare IT.",
    keywords:
      "salesforce health cloud, healthcare crm, patient management, care coordination, health data integration, salesforce course",
    duration: "8 Weeks",
    level: "Intermediate",
    rating: 4.8,
    students: 1200,
    image:
      "https://images.unsplash.com/photo-1519494080410-f9aa8f0a1fd4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: "₹9,999",
    curriculum: [
      {
        title: "Introduction to Salesforce Health Cloud",
        duration: "1 Week",
        topics: [
          "Overview of Salesforce Health Cloud",
          "Healthcare industry challenges",
          "Key features and benefits",
        ],
      },
      {
        title: "Patient Management",
        duration: "2 Weeks",
        topics: [
          "Patient profiles and records",
          "Care plans and assessments",
          "Patient timeline and history",
        ],
      },
      {
        title: "Care Coordination",
        duration: "2 Weeks",
        topics: [
          "Care team management",
          "Task and activity tracking",
          "Collaboration tools",
        ],
      },
      {
        title: "Health Data Integration",
        duration: "2 Weeks",
        topics: [
          "Integrating EHR/EMR systems",
          "FHIR and HL7 standards",
          "Data security and compliance",
        ],
      },
      {
        title: "Customization and Automation",
        duration: "1 Week",
        topics: [
          "Custom objects and fields",
          "Process automation with Flows",
          "Reporting and dashboards",
        ],
      },
    ],
    certifications: [
      {
        name: "Salesforce Health Cloud Specialist",
        provider: "Salesforce",
        description: "Validate your expertise in implementing and managing Salesforce Health Cloud solutions.",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png",
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
      averageSalary: "₹10,00,000",
      placementRate: "95%",
      testimonials: [
        {
          name: "Dr. Meera",
          role: "Health Cloud Consultant",
          company: "Apollo Hospitals",
          image: "https://randomuser.me/api/portraits/women/65.jpg",
          quote:
            "The Salesforce Health Cloud course gave me the skills to lead digital transformation in healthcare. The real-world projects and expert guidance were invaluable!",
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

export default SalesforceHealthCloudCourse 