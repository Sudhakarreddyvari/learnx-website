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
    subtitle: "Master the art of online brand promotion",
    description:
      "Learn to create and implement effective digital marketing strategies across multiple channels. Master SEO, social media marketing, content creation, email campaigns, PPC advertising, analytics, and more to drive business growth in the digital age.",
    metaDescription:
      "Master Digital Marketing with LearnX's comprehensive course. Learn SEO, social media, content marketing, PPC, email marketing, and analytics. Get certified and placed in top companies. Enroll now!",
    keywords:
      "digital marketing course, SEO, social media marketing, content marketing, PPC, Google Ads, Facebook Ads, email marketing, analytics, inbound marketing, brand strategy",
    duration: "12 Weeks",
    level: "Beginner to Advanced",
    rating: 4.7,
    students: 2900,
    image:
      "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "$599",

    curriculum: [
      {
        title: "Digital Marketing Fundamentals",
        duration: "1 Week",
        topics: [
          "Introduction to digital marketing landscape",
          "Digital marketing channels overview",
          "Customer journey and touchpoints",
          "Digital marketing strategy framework",
          "Brand positioning and messaging",
          "Digital marketing ethics and compliance",
        ],
      },
      {
        title: "Search Engine Optimization (SEO)",
        duration: "2 Weeks",
        topics: [
          "On-page SEO techniques",
          "Off-page SEO and link building",
          "Technical SEO and site audits",
          "Keyword research and analysis",
          "Local SEO strategies",
          "SEO tools and performance tracking",
        ],
      },
      {
        title: "Content Marketing",
        duration: "2 Weeks",
        topics: [
          "Content strategy development",
          "Content creation for different formats",
          "Content distribution channels",
          "Storytelling techniques",
          "Content calendar planning",
          "Content performance measurement",
        ],
      },
      {
        title: "Social Media Marketing",
        duration: "2 Weeks",
        topics: [
          "Social media strategy development",
          "Platform-specific tactics (Facebook, Instagram, LinkedIn, Twitter, TikTok)",
          "Community management and engagement",
          "Social media content creation",
          "Paid social media advertising",
          "Social listening and reputation management",
          "Analytics and performance tracking",
        ],
      },
      {
        title: "Pay-Per-Click (PPC) Advertising",
        duration: "2 Weeks",
        topics: [
          "Google Ads campaign structure and setup",
          "Keyword research for PPC",
          "Ad copywriting and creative best practices",
          "Bid management strategies",
          "Display and video advertising",
          "Conversion tracking and optimization",
        ],
      },
      {
        title: "Email Marketing",
        duration: "1 Week",
        topics: [
          "Email marketing strategy and planning",
          "List building and segmentation",
          "Email design and copywriting",
          "Automation and drip campaigns",
          "A/B testing for optimization",
          "Deliverability and compliance (GDPR, CAN-SPAM)",
        ],
      },
      {
        title: "Analytics and Data-Driven Marketing",
        duration: "2 Weeks",
        topics: [
          "Google Analytics setup and configuration",
          "Key metrics and KPIs for different channels",
          "Custom reporting and dashboards",
          "Conversion rate optimization (CRO)",
          "Attribution modeling",
          "Data-driven decision making",
        ],
      },
    ],

    certifications: [
      {
        name: "Google Analytics Certification",
        provider: "Google",
        description: "Validate your skills in measuring and analyzing user interactions with web properties",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
      },
      {
        name: "Facebook Blueprint Certification",
        provider: "Meta",
        description: "Demonstrate your expertise in Facebook and Instagram advertising",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png",
      },
      {
        name: "HubSpot Content Marketing Certification",
        provider: "HubSpot",
        description: "Prove your knowledge in content creation, promotion, and measurement",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/HubSpot_Logo.svg/1200px-HubSpot_Logo.svg.png",
      },
    ],

    placements: {
      companies: [
        {
          name: "Google",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
        },
        {
          name: "Meta",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png",
        },
        {
          name: "HubSpot",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/HubSpot_Logo.svg/1200px-HubSpot_Logo.svg.png",
        },
        {
          name: "Ogilvy",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Ogilvy_logo.svg/1200px-Ogilvy_logo.svg.png",
        },
        {
          name: "Wunderman Thompson",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Wunderman_Thompson_logo.svg/1200px-Wunderman_Thompson_logo.svg.png",
        },
        {
          name: "Dentsu",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Dentsu_logo.svg/1200px-Dentsu_logo.svg.png",
        },
      ],
      averageSalary: "$95,000",
      placementRate: "90%",
      testimonials: [
        {
          name: "Rachel Green",
          role: "Digital Marketing Manager",
          company: "HubSpot",
          image: "https://randomuser.me/api/portraits/women/43.jpg",
          quote:
            "The Digital Marketing course at LearnX provided me with a comprehensive understanding of all marketing channels. The hands-on projects helped me build a portfolio that showcased my skills to potential employers.",
        },
        {
          name: "Mark Johnson",
          role: "SEO Specialist",
          company: "Google",
          image: "https://randomuser.me/api/portraits/men/47.jpg",
          quote:
            "I was working in traditional marketing and wanted to transition to digital. This course gave me the skills and confidence to make that switch. The SEO and analytics modules were particularly valuable for my current role.",
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

