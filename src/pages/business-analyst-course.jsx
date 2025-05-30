"use client"

import { useState } from "react"
import CourseTemplate from "./course-template"
import Header from "../components/Header"
import Footer from "../components/Footer"

const BusinessAnalystCourse = ({ setIsContactOpen }) => {
  const [isNavSticky, setIsNavSticky] = useState(false)

  // Course data specific to Business Analyst
  const courseData = {
    slug: "business-analyst",
    title: "Business Analysis",
    subtitle: "Bridge the gap between business needs and technology solutions",
    description:
      "Master the art of analyzing business processes, identifying requirements, and facilitating solutions that deliver value. Learn industry-standard methodologies, tools, and techniques to become an effective business analyst in today's data-driven organizations.",
    metaDescription:
      "Master Business Analysis with LearnX's comprehensive course. Learn requirements gathering, process modeling, data analysis, and agile methodologies. Get certified and placed in top companies. Enroll now!",
    keywords:
      "business analyst course, business analysis, requirements gathering, process modeling, data analysis, agile, BPMN, UML, SQL, data visualization, stakeholder management, BABOK",
    duration: "12 Weeks",
    level: "Beginner to Advanced",
    rating: 4.8,
    students: 2300,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "₹6,499",

    curriculum: [
      {
        title: "Introduction to Business Analysis",
        duration: "1 Week",
        topics: [
          "Business analysis fundamentals and terminology",
          "The role of a business analyst in organizations",
          "Business analysis planning and monitoring",
          "Stakeholder identification and analysis",
          "Business analysis knowledge areas (BABOK)",
          "Career paths in business analysis",
        ],
      },
      {
        title: "Requirements Elicitation and Management",
        duration: "2 Weeks",
        topics: [
          "Requirements elicitation techniques",
          "Interviews, workshops, and surveys",
          "Observation and document analysis",
          "Requirements documentation and management",
          "Requirements prioritization techniques",
          "Requirements traceability and validation",
        ],
      },
      {
        title: "Business Process Analysis and Modeling",
        duration: "2 Weeks",
        topics: [
          "Business process analysis fundamentals",
          "Process mapping and flowcharting",
          "Business Process Model and Notation (BPMN)",
          "Process improvement techniques",
          "Gap analysis and root cause analysis",
          "Value stream mapping",
        ],
      },
      {
        title: "Data Analysis and Database Fundamentals",
        duration: "2 Weeks",
        topics: [
          "Data analysis concepts and techniques",
          "Database fundamentals and terminology",
          "Entity-Relationship Diagrams (ERD)",
          "SQL fundamentals for business analysts",
          "Data quality assessment",
          "Data governance and management",
        ],
      },
      {
        title: "Solution Assessment and Validation",
        duration: "1 Week",
        topics: [
          "Solution evaluation techniques",
          "Feasibility analysis",
          "Cost-benefit analysis",
          "Risk assessment and management",
          "Acceptance criteria definition",
          "User acceptance testing (UAT)",
        ],
      },
      {
        title: "Business Analysis in Agile Environments",
        duration: "2 Weeks",
        topics: [
          "Agile methodologies overview (Scrum, Kanban)",
          "The business analyst role in agile teams",
          "User stories and acceptance criteria",
          "Backlog refinement and prioritization",
          "Agile requirements documentation",
          "Agile estimation techniques",
        ],
      },
      {
        title: "Business Analysis Tools and Visualization",
        duration: "2 Weeks",
        topics: [
          "Requirements management tools",
          "Wireframing and prototyping tools",
          "Data visualization techniques",
          "Dashboard creation with Tableau/Power BI",
          "UML diagrams for business analysts",
          "Presentation and communication tools",
        ],
      },
    ],

    certifications: [
      {
        name: "IIBA Entry Certificate in Business Analysis (ECBA)",
        provider: "International Institute of Business Analysis",
        description: "Validate your knowledge of business analysis concepts as defined in the BABOK Guide",
        logo: "https://www.iiba.org/globalassets/iiba/logos/iiba-logo.svg",
      },
      {
        name: "PMI Professional in Business Analysis (PMI-PBA)",
        provider: "Project Management Institute",
        description: "Demonstrate your expertise in business analysis within project environments",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/PMI-logo.svg/1200px-PMI-logo.svg.png",
      },
      {
        name: "IREB Certified Professional for Requirements Engineering",
        provider: "International Requirements Engineering Board",
        description: "Prove your knowledge in requirements engineering principles and practices",
        logo: "https://www.ireb.org/content/dam/ireb/en/logo/ireb-logo.svg",
      },
    ],

    placements: {
      companies: [
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
        {
          name: "Capgemini",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Capgemini-Logo.svg/1200px-Capgemini-Logo.svg.png",
        },
      ],
      averageSalary: "₹7,00,000",
      placementRate: "92%",
      testimonials: [
        {
          name: "Narasimha",
          role: "Business Analyst",
          company: "Deloitte",
          image: "https://randomuser.me/api/portraits/women/48.jpg",
          quote:
            "The Business Analysis course at LearnX provided me with a comprehensive understanding of all aspects of the role. The practical exercises and case studies helped me develop the critical thinking skills needed in my current position at Deloitte.",
        },
        {
          name: "Bhavana",
          role: "Senior Business Analyst",
          company: "Accenture",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          quote:
            "I was working in a different field and wanted to transition into business analysis. This course gave me the structured knowledge and practical skills to make that career change. The agile and data analysis modules were particularly valuable for my role.",
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

export default BusinessAnalystCourse

