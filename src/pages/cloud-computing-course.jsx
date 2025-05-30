"use client"

import { useState } from "react"
import CourseTemplate from "./course-template"
import Header from "../components/Header"
import Footer from "../components/Footer"

const CloudComputingCourse = ({ setIsContactOpen }) => {
  const [isNavSticky, setIsNavSticky] = useState(false)

  // Course data specific to Cloud Computing
  const courseData = {
    slug: "cloud-computing",
    title: "Cloud Computing",
    subtitle: "Master the technology powering modern applications",
    description:
      "Gain expertise in cloud platforms, architecture, deployment, and management. Learn to design scalable, secure, and cost-effective cloud solutions for businesses of all sizes using AWS, Azure, and Google Cloud.",
    metaDescription:
      "Master Cloud Computing with LearnX's comprehensive course. Learn AWS, Azure, Google Cloud, cloud architecture, DevOps, and security. Get certified and placed in top companies. Enroll now!",
    keywords:
      "cloud computing course, AWS certification, Azure, Google Cloud, cloud architecture, cloud security, DevOps, IaaS, PaaS, SaaS, cloud migration, serverless computing",
    duration: "14 Weeks",
    level: "Beginner to Advanced",
    rating: 4.8,
    students: 1950,
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "₹6,499",

    curriculum: [
      {
        title: "Introduction to Cloud Computing",
        duration: "1 Week",
        topics: [
          "Cloud computing concepts and terminology",
          "Evolution of cloud computing",
          "Cloud service models (IaaS, PaaS, SaaS)",
          "Cloud deployment models (Public, Private, Hybrid)",
          "Benefits and challenges of cloud adoption",
          "Major cloud providers overview",
        ],
      },
      {
        title: "Amazon Web Services (AWS)",
        duration: "3 Weeks",
        topics: [
          "AWS global infrastructure and services overview",
          "Identity and Access Management (IAM)",
          "Compute services (EC2, Lambda, ECS)",
          "Storage solutions (S3, EBS, EFS, Glacier)",
          "Database services (RDS, DynamoDB, Redshift)",
          "Networking in AWS (VPC, Route 53, CloudFront)",
        ],
      },
      {
        title: "Microsoft Azure",
        duration: "3 Weeks",
        topics: [
          "Azure architecture and service offerings",
          "Azure Active Directory and access management",
          "Compute options (VMs, App Service, Functions)",
          "Storage solutions (Blob, Files, Disks)",
          "Azure SQL Database and Cosmos DB",
          "Azure networking and content delivery",
        ],
      },
      {
        title: "Google Cloud Platform (GCP)",
        duration: "2 Weeks",
        topics: [
          "GCP architecture and global infrastructure",
          "Identity and Access Management (IAM)",
          "Compute options (Compute Engine, App Engine, Cloud Functions)",
          "Storage solutions (Cloud Storage, Persistent Disks)",
          "Database services (Cloud SQL, Firestore, BigQuery)",
          "Networking in GCP (VPC, Cloud DNS, Cloud CDN)",
        ],
      },
      {
        title: "Cloud Architecture and Design",
        duration: "2 Weeks",
        topics: [
          "Cloud architecture best practices",
          "High availability and disaster recovery",
          "Scalability and elasticity patterns",
          "Microservices architecture",
          "Serverless architecture",
          "Multi-cloud and hybrid cloud strategies",
        ],
      },
      {
        title: "Cloud Security and Compliance",
        duration: "2 Weeks",
        topics: [
          "Cloud security fundamentals",
          "Identity and access management best practices",
          "Data protection and encryption",
          "Network security in the cloud",
          "Security monitoring and incident response",
          "Compliance frameworks and certifications",
        ],
      },
      {
        title: "Cloud DevOps and Automation",
        duration: "1 Week",
        topics: [
          "Infrastructure as Code (IaC)",
          "Configuration management tools",
          "CI/CD pipelines in the cloud",
          "Containerization and orchestration",
          "Monitoring and logging",
          "Cost optimization strategies",
        ],
      },
    ],

    certifications: [
      {
        name: "AWS Certified Solutions Architect - Associate",
        provider: "Amazon Web Services",
        description: "Validate your expertise in designing distributed systems on AWS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png",
      },
      {
        name: "Microsoft Certified: Azure Administrator Associate",
        provider: "Microsoft",
        description: "Demonstrate your skills in implementing, monitoring, and maintaining Microsoft Azure solutions",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
      },
      {
        name: "Google Cloud Professional Cloud Architect",
        provider: "Google Cloud",
        description:
          "Prove your ability to design, develop, and manage robust, secure, scalable, highly available, and dynamic solutions on Google Cloud",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/1200px-Google_Cloud_logo.svg.png",
      },
    ],

    placements: {
      companies: [
        {
          name: "Amazon",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png",
        },
        {
          name: "Microsoft",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
        },
        {
          name: "Google",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
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
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/1200px-Deloitte.svg.png",
        },
      ],
      averageSalary: "₹7,00,000",
      placementRate: "95%",
      testimonials: [
        {
          name: "David Wilson",
          role: "Cloud Solutions Architect",
          company: "Amazon",
          image: "https://randomuser.me/api/portraits/men/22.jpg",
          quote:
            "The Cloud Computing course at LearnX gave me a comprehensive understanding of all major cloud platforms. The hands-on labs and real-world projects were exactly what I needed to transition into a cloud role at AWS.",
        },
        {
          name: "Emily Zhang",
          role: "Azure Cloud Engineer",
          company: "Microsoft",
          image: "https://randomuser.me/api/portraits/women/23.jpg",
          quote:
            "I was already working in IT but wanted to specialize in cloud technologies. This course provided the perfect balance of theory and practice. The certification preparation was excellent, and I passed my Azure exams on the first attempt.",
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

export default CloudComputingCourse

