"use client"

import { useState } from "react"
import CourseTemplate from "./course-template"
import Header from "../components/Header"
import Footer from "../components/Footer"

const AutomationTestingCourse = ({ setIsFormOpen }) => {
  const [isNavSticky, setIsNavSticky] = useState(false)

  // Course data specific to Automation Testing
  const courseData = {
    slug: "automation-testing",
    title: "Automation Testing",
    subtitle: "Master the art of software quality assurance",
    description:
      "Learn to design, implement, and maintain automated testing frameworks for web, mobile, and API applications. Master industry-standard tools and methodologies to ensure software quality, improve efficiency, and accelerate the delivery pipeline.",
    metaDescription:
      "Master Automation Testing with LearnX's comprehensive course. Learn Selenium, Appium, API testing, CI/CD integration, and test frameworks. Get certified and placed in top companies. Enroll now!",
    keywords:
      "automation testing course, Selenium, Appium, API testing, performance testing, CI/CD, test frameworks, BDD, TDD, quality assurance, software testing, test automation",
    duration: "12 Weeks",
    level: "Intermediate",
    rating: 4.8,
    students: 1950,
    image:
      "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "$649",

    curriculum: [
      {
        title: "Software Testing Fundamentals",
        duration: "1 Week",
        topics: [
          "Introduction to software testing concepts",
          "Manual vs. automated testing",
          "Testing types and levels",
          "Test planning and documentation",
          "Defect management process",
          "Testing in Agile and DevOps environments",
        ],
      },
      {
        title: "Test Automation Fundamentals",
        duration: "1 Week",
        topics: [
          "Test automation principles and best practices",
          "Selecting automation candidates",
          "Test automation frameworks and architectures",
          "Programming fundamentals for automation (Java/Python)",
          "Version control for test code",
          "Continuous integration basics",
        ],
      },
      {
        title: "Web UI Automation with Selenium",
        duration: "3 Weeks",
        topics: [
          "Selenium WebDriver architecture",
          "Locator strategies and element interactions",
          "Synchronization techniques",
          "Page Object Model design pattern",
          "Handling complex UI elements",
          "Cross-browser and parallel testing",
        ],
      },
      {
        title: "Mobile Automation with Appium",
        duration: "2 Weeks",
        topics: [
          "Appium architecture and setup",
          "iOS and Android automation differences",
          "Mobile element locator strategies",
          "Handling gestures and device capabilities",
          "Emulators vs. real devices",
          "Mobile test automation frameworks",
        ],
      },
      {
        title: "API Testing Automation",
        duration: "2 Weeks",
        topics: [
          "RESTful API testing concepts",
          "API testing with RestAssured/Postman",
          "Request/response validation",
          "Authentication and authorization testing",
          "Contract testing",
          "Mocking and stubbing services",
        ],
      },
      {
        title: "Behavior-Driven Development (BDD)",
        duration: "1 Week",
        topics: [
          "BDD concepts and benefits",
          "Gherkin syntax and feature files",
          "Cucumber/SpecFlow implementation",
          "Step definitions and hooks",
          "BDD best practices",
          "Reporting and documentation",
        ],
      },
      {
        title: "Advanced Test Automation Topics",
        duration: "2 Weeks",
        topics: [
          "Performance testing with JMeter",
          "Security testing automation",
          "Visual testing and image comparison",
          "Database testing automation",
          "CI/CD pipeline integration",
          "Test automation metrics and reporting",
        ],
      },
    ],

    certifications: [
      {
        name: "ISTQB Certified Tester - Test Automation Engineer",
        provider: "ISTQB",
        description: "Validate your skills in designing, developing, and maintaining test automation solutions",
        logo: "https://www.istqb.org/templates/t3_bs4_istqb/img/logo.svg",
      },
      {
        name: "Selenium WebDriver with Java Certification",
        provider: "LearnX",
        description: "Demonstrate your expertise in automating web applications using Selenium WebDriver and Java",
        logo: "https://example.com/learnx-logo.png",
      },
      {
        name: "Appium Mobile Testing Certification",
        provider: "LearnX",
        description: "Prove your ability to automate mobile application testing using Appium",
        logo: "https://example.com/learnx-logo.png",
      },
    ],

    placements: {
      companies: [
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
          name: "Cognizant",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Cognizant_logo.svg/1200px-Cognizant_logo.svg.png",
        },
        {
          name: "Infosys",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1200px-Infosys_logo.svg.png",
        },
      ],
      averageSalary: "$105,000",
      placementRate: "92%",
      testimonials: [
        {
          name: "Andrew Wilson",
          role: "Automation Test Engineer",
          company: "Microsoft",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          quote:
            "The Automation Testing course at LearnX provided me with hands-on experience with all the essential tools and frameworks. The Selenium and API testing modules were particularly valuable for my current role at Microsoft.",
        },
        {
          name: "Priya Patel",
          role: "QA Automation Lead",
          company: "IBM",
          image: "https://randomuser.me/api/portraits/women/63.jpg",
          quote:
            "I transitioned from manual testing to automation after completing this course. The curriculum covered everything from basics to advanced topics, with a perfect balance of theory and practice. The BDD and CI/CD integration modules were excellent.",
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

      <Header setIsFormOpen={setIsFormOpen} hideHeader={false} />
      <main className="relative z-10">
        <CourseTemplate courseData={courseData} setIsFormOpen={setIsFormOpen} setIsNavSticky={setIsNavSticky} />
      </main>
      <Footer setIsFormOpen={setIsFormOpen} />
    </div>
  )
}

export default AutomationTestingCourse

