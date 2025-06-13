"use client"

import { useState } from "react"
import CourseTemplate from "./course-template"
import Header from "../components/Header"
import Footer from "../components/Footer"

const DigitalMarketingCourse = ({ setIsContactOpen }) => {
  const [isNavSticky, setIsNavSticky] = useState(false)

  // Course data specific to Digital Marketing
  const courseData = {
    slug: "digital-marketing",
    title: "Digital Marketing",
    subtitle: "Master digital marketing strategies to drive growth and engagement",
    description:
      "Become a digital marketing expert. Learn SEO, SEM, social media marketing, content marketing, email marketing, analytics, and more. Gain hands-on experience with tools like Google Analytics, Facebook Ads, and HubSpot. Prepare for industry certifications and accelerate your marketing career!",
    metaDescription:
      "Master Digital Marketing with LearnX. Learn SEO, SEM, social media, content marketing, email marketing, analytics, and more. Get certified and placed in top companies. Enroll now!",
    keywords:
      "digital marketing course, seo, sem, social media marketing, content marketing, email marketing, analytics, marketing certification, placement assistance",
    duration: "12 Weeks",
    level: "Beginner to Advanced",
    rating: 4.7,
    students: 3200,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    price: "₹5,999",

    curriculum: [
      {
        title: "Introduction to Digital Marketing",
        duration: "2 Weeks",
        topics: [
          "Overview of digital marketing channels",
          "Setting up a digital marketing strategy",
          "Understanding target audiences",
          "Introduction to analytics and KPIs",
          "Ethics and compliance in digital marketing",
        ],
      },
      {
        title: "Search Engine Optimization (SEO)",
        duration: "2 Weeks",
        topics: [
          "On-page and off-page SEO techniques",
          "Keyword research and content optimization",
          "Link building strategies",
          "Technical SEO and site audits",
          "SEO tools and analytics",
        ],
      },
      {
        title: "Search Engine Marketing (SEM) & PPC",
        duration: "2 Weeks",
        topics: [
          "Google Ads and Bing Ads",
          "Campaign setup and optimization",
          "Ad copywriting and A/B testing",
          "Budget management and ROI tracking",
          "Remarketing and display advertising",
        ],
      },
      {
        title: "Social Media Marketing",
        duration: "2 Weeks",
        topics: [
          "Platform-specific strategies (Facebook, Instagram, LinkedIn, Twitter)",
          "Content creation and scheduling",
          "Community management and engagement",
          "Social media advertising",
          "Social media analytics and reporting",
        ],
      },
      {
        title: "Content Marketing & Email Marketing",
        duration: "2 Weeks",
        topics: [
          "Content strategy and creation",
          "Blogging, video, and podcasting",
          "Email marketing campaigns and automation",
          "Lead nurturing and conversion optimization",
          "Content and email analytics",
        ],
      },
      {
        title: "Analytics, Reporting & Capstone Project",
        duration: "2 Weeks",
        topics: [
          "Google Analytics and other analytics tools",
          "Data-driven decision making",
          "End-to-end digital marketing project",
          "Exam tips and practice questions",
          "Mock interviews and resume building",
        ],
      },
    ],

    certifications: [
      {
        name: "Google Digital Marketing & E-commerce",
        provider: "Google",
        description: "Validate your expertise in digital marketing and e-commerce strategies.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
      },
      {
        name: "HubSpot Content Marketing",
        provider: "HubSpot",
        description: "Prove your ability to create and optimize content for digital marketing.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/HubSpot_logo.svg/1200px-HubSpot_logo.svg.png",
      },
      {
        name: "Facebook Blueprint",
        provider: "Facebook",
        description: "Demonstrate your skills in social media marketing and advertising.",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1200px-F_icon.svg.png",
      },
    ],

    placements: {
      companies: [
        {
          name: "Google",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
        },
        {
          name: "Facebook",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/1200px-F_icon.svg.png",
        },
        {
          name: "HubSpot",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/HubSpot_logo.svg/1200px-HubSpot_logo.svg.png",
        },
        {
          name: "LinkedIn",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/1200px-LinkedIn_logo_initials.png",
        },
        {
          name: "Twitter",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png",
        },
        {
          name: "Salesforce",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png",
        },
      ],
      averageSalary: "₹7,00,000",
      placementRate: "95%",
      testimonials: [
        {
          name: "Priya",
          role: "Digital Marketing Manager",
          company: "Google",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          quote:
            "The Digital Marketing course at LearnX gave me the skills and confidence to excel in my role at Google!",
        },
        {
          name: "Rahul",
          role: "Social Media Strategist",
          company: "Facebook",
          image: "https://randomuser.me/api/portraits/men/61.jpg",
          quote:
            "Excellent curriculum, hands-on projects, and great placement support. I highly recommend this course to anyone looking to master digital marketing!",
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

export default DigitalMarketingCourse

