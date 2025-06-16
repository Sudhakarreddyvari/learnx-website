"use client"

import { useState } from "react"
import CourseTemplate from "./course-template"
import Header from "../components/Header"
import Footer from "../components/Footer"

const AwsCourse = ({ setIsContactOpen }) => {
  const [isNavSticky, setIsNavSticky] = useState(false)

  // Course data specific to AWS Cloud Computing
  const courseData = {
    slug: "aws-cloud-computing",
    title: "AWS Cloud Computing",
    subtitle: "Master AWS for scalable, secure, and high-performance cloud solutions",
    description:
      "Become an AWS Cloud expert. Learn to design, deploy, and manage cloud infrastructure using AWS services. Gain hands-on experience with EC2, S3, Lambda, RDS, VPC, IAM, DevOps tools, and more. Prepare for AWS certification and accelerate your cloud career!",
    metaDescription:
      "Master AWS Cloud Computing with LearnX. Learn EC2, S3, Lambda, RDS, VPC, IAM, DevOps, and more. Get certified and placed in top companies. Enroll now!",
    keywords:
      "aws course, cloud computing, amazon web services, ec2, s3, lambda, devops, cloud certification, cloud deployment, cloud security, placement assistance",
    duration: "14 Weeks",
    level: "Beginner to Advanced",
    rating: 4.8,
    students: 3700,
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: "₹6,999",

    curriculum: [
      {
        title: "Cloud Computing Fundamentals",
        duration: "2 Weeks",
        topics: [
          "Cloud concepts and service models (IaaS, PaaS, SaaS)",
          "AWS global infrastructure overview",
          "AWS Free Tier and account setup",
          "Identity and Access Management (IAM)",
          "Security best practices",
        ],
      },
      {
        title: "Core AWS Services",
        duration: "3 Weeks",
        topics: [
          "EC2 instance provisioning and management",
          "S3 storage and lifecycle policies",
          "Elastic Load Balancing and Auto Scaling",
          "RDS and DynamoDB databases",
          "VPC networking and security groups",
        ],
      },
      {
        title: "Serverless & Application Services",
        duration: "2 Weeks",
        topics: [
          "AWS Lambda and serverless architecture",
          "API Gateway for RESTful APIs",
          "SNS, SQS, and messaging services",
          "CloudFront CDN and Route 53 DNS",
          "Monitoring with CloudWatch",
        ],
      },
      {
        title: "DevOps & Automation on AWS",
        duration: "3 Weeks",
        topics: [
          "Infrastructure as Code with CloudFormation",
          "CI/CD pipelines with CodePipeline, CodeBuild, CodeDeploy",
          "Containerization with ECS and ECR",
          "Deployment strategies and blue/green deployments",
          "Cost management and billing tools",
        ],
      },
      {
        title: "Security, Compliance & Best Practices",
        duration: "2 Weeks",
        topics: [
          "Data encryption and KMS",
          "Compliance frameworks (HIPAA, GDPR, etc.)",
          "Backup, disaster recovery, and high availability",
          "Logging and auditing",
          "Well-Architected Framework",
        ],
      },
      {
        title: "Capstone Project & Certification Prep",
        duration: "2 Weeks",
        topics: [
          "End-to-end AWS project deployment",
          "Exam tips and practice questions",
          "Mock interviews and resume building",
          "Career guidance and placement support",
        ],
      },
    ],

    certifications: [
      {
        name: "AWS Certified Solutions Architect - Associate",
        provider: "Amazon Web Services",
        description: "Validate your expertise in designing and deploying scalable systems on AWS.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png",
      },
      {
        name: "AWS Certified Developer - Associate",
        provider: "Amazon Web Services",
        description: "Prove your ability to develop, deploy, and debug cloud-based applications using AWS.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png",
      },
      {
        name: "AWS Certified SysOps Administrator - Associate",
        provider: "Amazon Web Services",
        description: "Demonstrate your skills in managing and operating AWS environments.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1200px-Amazon_Web_Services_Logo.svg.png",
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
      averageSalary: "₹8,00,000",
      placementRate: "98%",
      testimonials: [
        {
          name: "Siddharth",
          role: "Cloud Engineer",
          company: "Amazon",
          image: "https://randomuser.me/api/portraits/men/41.jpg",
          quote:
            "The AWS Cloud Computing course at LearnX gave me the skills and confidence to ace my AWS certification and land a job at Amazon!",
        },
        {
          name: "Meera",
          role: "DevOps Engineer",
          company: "Microsoft",
          image: "https://randomuser.me/api/portraits/women/60.jpg",
          quote:
            "Excellent curriculum, hands-on labs, and great placement support. I highly recommend this course to anyone looking to master AWS and cloud computing!",
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

export default AwsCourse 