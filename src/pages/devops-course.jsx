"use client"

import { useState } from "react"
import CourseTemplate from "./course-template"
import Header from "../components/Header"
import Footer from "../components/Footer"

const DevOpsCourse = ({ setIsContactOpen }) => {
  const [isNavSticky, setIsNavSticky] = useState(false)

  // Course data specific to DevOps
  const courseData = {
    slug: "devops",
    title: "DevOps",
    subtitle: "Bridge the gap between development and operations",
    description:
      "Master the practices, tools, and cultural philosophies that automate and integrate software development and IT operations. Learn continuous integration, continuous delivery, infrastructure as code, monitoring, and collaboration to increase an organization's ability to deliver applications at high velocity.",
    metaDescription:
      "Master DevOps with LearnX's comprehensive course. Learn CI/CD, Docker, Kubernetes, infrastructure as code, and cloud integration. Get certified and placed in top companies. Enroll now!",
    keywords:
      "devops course, CI/CD, continuous integration, continuous delivery, Docker, Kubernetes, infrastructure as code, Jenkins, Ansible, Terraform, Git, monitoring, automation",
    duration: "14 Weeks",
    level: "Intermediate",
    rating: 4.8,
    students: 2200,
    image:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "₹6,999",

    curriculum: [
      {
        title: "DevOps Fundamentals",
        duration: "1 Week",
        topics: [
          "Introduction to DevOps philosophy and culture",
          "DevOps lifecycle and practices",
          "Understanding development and operations challenges",
          "DevOps tools landscape",
          "Agile and DevOps integration",
          "DevOps metrics and KPIs",
        ],
      },
      {
        title: "Version Control with Git",
        duration: "1 Week",
        topics: [
          "Git fundamentals and workflow",
          "Branching strategies (GitFlow, GitHub Flow)",
          "Pull requests and code reviews",
          "Merge conflict resolution",
          "Git hooks and automation",
          "GitHub, GitLab, and Bitbucket",
        ],
      },
      {
        title: "Continuous Integration and Continuous Delivery",
        duration: "3 Weeks",
        topics: [
          "CI/CD concepts and pipeline design",
          "Jenkins setup and pipeline configuration",
          "GitHub Actions for CI/CD",
          "GitLab CI/CD",
          "Artifact management",
          "Deployment strategies (blue-green, canary, rolling)",
        ],
      },
      {
        title: "Containerization with Docker",
        duration: "2 Weeks",
        topics: [
          "Container concepts and Docker architecture",
          "Dockerfile creation and best practices",
          "Docker Compose for multi-container applications",
          "Docker networking and volumes",
          "Docker registry and image management",
          "Container security best practices",
        ],
      },
      {
        title: "Container Orchestration with Kubernetes",
        duration: "3 Weeks",
        topics: [
          "Kubernetes architecture and components",
          "Pods, deployments, services, and ingress",
          "ConfigMaps and Secrets",
          "Persistent volumes and storage",
          "Helm charts for package management",
          "Kubernetes monitoring and logging",
        ],
      },
      {
        title: "Infrastructure as Code",
        duration: "2 Weeks",
        topics: [
          "Infrastructure as Code concepts",
          "Terraform for infrastructure provisioning",
          "Ansible for configuration management",
          "CloudFormation for AWS resources",
          "ARM templates for Azure resources",
          "IaC best practices and patterns",
        ],
      },
      {
        title: "Monitoring, Logging, and Observability",
        duration: "2 Weeks",
        topics: [
          "Monitoring concepts and strategies",
          "Prometheus and Grafana for monitoring",
          "ELK stack for logging (Elasticsearch, Logstash, Kibana)",
          "Distributed tracing with Jaeger",
          "Alert management and incident response",
          "SRE principles and practices",
        ],
      },
    ],

    certifications: [
      {
        name: "AWS Certified DevOps Engineer - Professional",
        provider: "Amazon Web Services",
        description:
          "Validate your technical expertise in implementing continuous delivery systems and methodologies on AWS",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png",
      },
      {
        name: "Certified Kubernetes Administrator (CKA)",
        provider: "Cloud Native Computing Foundation",
        description:
          "Demonstrate your skills, knowledge, and competency to perform the responsibilities of a Kubernetes Administrator",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1200px-Kubernetes_logo_without_workmark.svg.png",
      },
      {
        name: "Docker Certified Associate",
        provider: "Docker",
        description: "Prove your expertise in Docker technology and its application in real-world scenarios",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/1200px-Docker_%28container_engine%29_logo.svg.png",
      },
    ],

    placements: {
      companies: [
        {
          name: "Amazon",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png",
        },
        {
          name: "Google",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
        },
        {
          name: "Microsoft",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
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
          name: "Red Hat",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Red_Hat_logo.svg/1200px-Red_Hat_logo.svg.png",
        },
      ],
      averageSalary: "₹7,00,000",
      placementRate: "92%",
      testimonials: [
        {
          name: "James Wilson",
          role: "DevOps Engineer",
          company: "Amazon",
          image: "https://randomuser.me/api/portraits/men/29.jpg",
          quote:
            "The DevOps course at LearnX provided me with hands-on experience with all the essential tools and practices. The CI/CD and Kubernetes modules were particularly valuable for my current role at Amazon.",
        },
        {
          name: "Priya Sharma",
          role: "Site Reliability Engineer",
          company: "Google",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          quote:
            "I transitioned from a traditional sysadmin role to SRE after completing this course. The instructors were industry professionals who shared practical insights and real-world scenarios. The infrastructure as code and monitoring modules were excellent.",
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

export default DevOpsCourse

