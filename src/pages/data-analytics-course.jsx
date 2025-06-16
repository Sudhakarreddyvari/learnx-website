"use client"

import { useState } from "react"
import CourseTemplate from "./course-template"
import Header from "../components/Header"
import Footer from "../components/Footer"

const DataAnalyticsCourse = ({ setIsContactOpen }) => {
  const [isNavSticky, setIsNavSticky] = useState(false)

  // Course data specific to Data Analytics
  const courseData = {
    slug: "data-analytics",
    title: "Data Analytics",
    subtitle: "Master data analytics to drive business insights and decision-making",
    description:
      "Become a data analytics expert. Learn data visualization, statistical analysis, SQL, Python, and tools like Tableau and Power BI. Gain hands-on experience with real-world datasets and projects. Prepare for industry certifications and accelerate your analytics career!",
    metaDescription:
      "Master Data Analytics with LearnX. Learn data visualization, statistical analysis, SQL, Python, Tableau, and Power BI. Get certified and placed in top companies. Enroll now!",
    keywords:
      "data analytics course, data visualization, statistical analysis, SQL, Python, Tableau, Power BI, analytics certification, placement assistance",
    duration: "14 Weeks",
    level: "Beginner to Advanced",
    rating: 4.8,
    students: 3500,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: "₹7,999",

    curriculum: [
      {
        title: "Introduction to Data Analytics",
        duration: "2 Weeks",
        topics: [
          "Overview of data analytics and its applications",
          "Data types and data sources",
          "Data cleaning and preprocessing",
          "Introduction to statistical concepts",
          "Ethics and compliance in data analytics",
        ],
      },
      {
        title: "SQL and Database Management",
        duration: "3 Weeks",
        topics: [
          "SQL fundamentals and advanced queries",
          "Database design and normalization",
          "Data extraction and transformation",
          "Performance optimization and indexing",
          "Data warehousing concepts",
        ],
      },
      {
        title: "Statistical Analysis and Python",
        duration: "3 Weeks",
        topics: [
          "Descriptive and inferential statistics",
          "Hypothesis testing and regression analysis",
          "Python for data analysis (Pandas, NumPy)",
          "Data visualization with Matplotlib and Seaborn",
          "Time series analysis",
        ],
      },
      {
        title: "Data Visualization and BI Tools",
        duration: "2 Weeks",
        topics: [
          "Principles of data visualization",
          "Tableau for interactive dashboards",
          "Power BI for business intelligence",
          "Storytelling with data",
          "Dashboard design and best practices",
        ],
      },
      {
        title: "Advanced Analytics and Machine Learning",
        duration: "2 Weeks",
        topics: [
          "Introduction to machine learning concepts",
          "Supervised and unsupervised learning",
          "Model evaluation and validation",
          "Feature engineering and selection",
          "Deployment and monitoring of models",
        ],
      },
      {
        title: "Capstone Project and Certification Prep",
        duration: "2 Weeks",
        topics: [
          "End-to-end data analytics project",
          "Exam tips and practice questions",
          "Mock interviews and resume building",
          "Career guidance and placement support",
        ],
      },
    ],

    certifications: [
      {
        name: "Google Data Analytics Professional Certificate",
        provider: "Google",
        description: "Validate your expertise in data analytics and visualization.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
      },
      {
        name: "Tableau Desktop Specialist",
        provider: "Tableau",
        description: "Prove your ability to create and optimize data visualizations.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Tableau_Logo.png/1200px-Tableau_Logo.png",
      },
      {
        name: "Microsoft Certified: Data Analyst Associate",
        provider: "Microsoft",
        description: "Demonstrate your skills in data analysis and visualization with Power BI.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
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
      averageSalary: "₹8,50,000",
      placementRate: "97%",
      testimonials: [
        {
          name: "Ananya",
          role: "Data Analyst",
          company: "Google",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          quote:
            "The Data Analytics course at LearnX gave me the skills and confidence to excel in my role at Google!",
        },
        {
          name: "Vikram",
          role: "Business Intelligence Analyst",
          company: "Microsoft",
          image: "https://randomuser.me/api/portraits/men/62.jpg",
          quote:
            "Excellent curriculum, hands-on projects, and great placement support. I highly recommend this course to anyone looking to master data analytics!",
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

export default DataAnalyticsCourse 