"use client"

import { useState } from "react"
import CourseTemplate from "./course-template"
import Header from "../components/Header"
import Footer from "../components/Footer"

const UIUXDesignCourse = ({ setIsContactOpen }) => {
  const [isNavSticky, setIsNavSticky] = useState(false)

  // Course data specific to UI/UX Design
  const courseData = {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    subtitle: "Create intuitive and engaging digital experiences",
    description:
      "Master the art and science of designing user-centered digital products. Learn to create intuitive interfaces, conduct user research, build wireframes and prototypes, and develop a comprehensive design system that delivers exceptional user experiences.",
    metaDescription:
      "Master UI/UX Design with LearnX's comprehensive course. Learn user research, wireframing, prototyping, visual design, and usability testing. Get placed in top companies. Enroll now!",
    keywords:
      "ui ux design course, user interface design, user experience design, wireframing, prototyping, Figma, Adobe XD, user research, usability testing, interaction design, visual design, design systems",
    duration: "14 Weeks",
    level: "Beginner to Advanced",
    rating: 4.9,
    students: 2400,
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "₹6,499",

    curriculum: [
      {
        title: "Introduction to UI/UX Design",
        duration: "1 Week",
        topics: [
          "UI/UX fundamentals and principles",
          "The design thinking process",
          "User-centered design approach",
          "Design psychology and human cognition",
          "Current trends in digital product design",
          "Role of a UI/UX designer in product teams",
        ],
      },
      {
        title: "User Research and Analysis",
        duration: "2 Weeks",
        topics: [
          "User research methodologies",
          "Creating user personas and empathy maps",
          "User journey mapping",
          "Competitive analysis",
          "Information architecture",
          "Card sorting and tree testing",
        ],
      },
      {
        title: "Wireframing and Low-Fidelity Prototyping",
        duration: "2 Weeks",
        topics: [
          "Sketching techniques for ideation",
          "Creating wireframes and low-fidelity mockups",
          "Paper prototyping",
          "Digital wireframing tools (Figma, Adobe XD)",
          "Navigation patterns and information hierarchy",
          "Responsive design considerations",
        ],
      },
      {
        title: "Visual Design Principles",
        duration: "3 Weeks",
        topics: [
          "Color theory and psychology",
          "Typography fundamentals",
          "Layout and composition",
          "Visual hierarchy and Gestalt principles",
          "Iconography and imagery",
          "Design systems and style guides",
        ],
      },
      {
        title: "High-Fidelity Prototyping",
        duration: "3 Weeks",
        topics: [
          "Creating high-fidelity mockups in Figma",
          "Interactive prototyping techniques",
          "Micro-interactions and animations",
          "Component-based design",
          "Design handoff to developers",
          "Design documentation",
        ],
      },
      {
        title: "Usability Testing and Iteration",
        duration: "2 Weeks",
        topics: [
          "Usability testing methodologies",
          "Recruiting test participants",
          "Moderating usability tests",
          "Analyzing test results",
          "Iterating designs based on feedback",
          "A/B testing and multivariate testing",
        ],
      },
      {
        title: "Portfolio Development",
        duration: "1 Week",
        topics: [
          "Creating a compelling UX case study",
          "Documenting your design process",
          "Building an online portfolio",
          "Presenting your work effectively",
          "Preparing for design interviews",
          "Networking in the design community",
        ],
      },
    ],

    certifications: [
      {
        name: "Certified User Experience Professional (CUXP)",
        provider: "UX Design Institute",
        description: "Validate your skills in user experience design methodologies and best practices",
        logo: "https://uxdesigninstitute.com/wp-content/themes/uxdi/assets/images/uxdi-logo.svg",
      },
      {
        name: "Adobe Certified Professional in UI/UX Design",
        provider: "Adobe",
        description: "Demonstrate your expertise in creating user interfaces and experiences using Adobe tools",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Adobe_Systems_logo_and_wordmark.svg/1200px-Adobe_Systems_logo_and_wordmark.svg.png",
      },
      {
        name: "Interaction Design Foundation Certification",
        provider: "Interaction Design Foundation",
        description: "Prove your knowledge in interaction design principles and methodologies",
        logo: "https://public-media.interaction-design.org/images/logo-pair.svg",
      },
    ],

    placements: {
      companies: [
        {
          name: "Google",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
        },
        {
          name: "Apple",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png",
        },
        {
          name: "Microsoft",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
        },
        {
          name: "Adobe",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Adobe_Systems_logo_and_wordmark.svg/1200px-Adobe_Systems_logo_and_wordmark.svg.png",
        },
        {
          name: "Airbnb",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_logo_B%C3%A9lo.svg/1200px-Airbnb_logo_B%C3%A9lo.svg.png",
        },
        {
          name: "Uber",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1200px-Uber_logo_2018.svg.png",
        },
      ],
      averageSalary: "₹5,00,000",
      placementRate: "93%",
      testimonials: [
        {
          name: "Bharath",
          role: "UI/UX Designer",
          company: "Google",
          image: "https://randomuser.me/api/portraits/women/32.jpg",
          quote:
            "The UI/UX Design course at LearnX transformed my career. The hands-on projects and industry-relevant curriculum helped me build a portfolio that impressed recruiters. The instructors provided valuable feedback that significantly improved my design skills.",
        },
        {
          name: "Kavya",
          role: "Product Designer",
          company: "Airbnb",
          image: "https://randomuser.me/api/portraits/men/36.jpg",
          quote:
            "I came from a graphic design background and wanted to transition into product design. This course provided the perfect bridge, teaching me user research, interaction design, and prototyping skills that I use daily in my role at Airbnb.",
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

export default UIUXDesignCourse

