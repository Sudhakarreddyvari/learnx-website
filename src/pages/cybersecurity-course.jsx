"use client"

import { useState } from "react"
import CourseTemplate from "./course-template"
import Header from "../components/Header"
import Footer from "../components/Footer"

const CybersecurityCourse = ({ setIsContactOpen }) => {
  const [isNavSticky, setIsNavSticky] = useState(false)

  // Course data specific to Cybersecurity
  const courseData = {
    slug: "cybersecurity",
    title: "Cybersecurity",
    subtitle: "Protect digital assets and infrastructure",
    description:
      "Master the art of defending digital systems, networks, and data from cyber threats. Learn ethical hacking, penetration testing, security analysis, and incident response to safeguard organizations against evolving cyber threats.",
    metaDescription:
      "Become a Cybersecurity expert with LearnX's comprehensive course. Learn ethical hacking, network security, threat detection, and incident response. Get placed in top companies. Enroll now!",
    keywords:
      "cybersecurity course, ethical hacking, network security, penetration testing, information security, cyber defense, security analyst, CISSP, CompTIA Security+, incident response",
    duration: "16 Weeks",
    level: "Beginner to Advanced",
    rating: 4.9,
    students: 750,
    image:
      "https://images.unsplash.com/photo-1542396784-83def7133907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "₹6,999",

    curriculum: [
      {
        title: "Introduction to Cybersecurity",
        duration: "2 Weeks",
        topics: [
          "Cybersecurity fundamentals and terminology",
          "Evolution of cyber threats and attack vectors",
          "Security principles: CIA triad and defense in depth",
          "Cybersecurity frameworks and compliance standards",
          "Career paths in cybersecurity",
          "Setting up your security lab environment",
        ],
      },
      {
        title: "Network Security",
        duration: "3 Weeks",
        topics: [
          "Network architecture and protocols",
          "Firewalls, IDS/IPS, and network security appliances",
          "VPNs and secure remote access",
          "Wireless network security",
          "Network traffic analysis and monitoring",
          "Network vulnerability assessment",
        ],
      },
      {
        title: "System Security",
        duration: "2 Weeks",
        topics: [
          "Operating system security (Windows, Linux)",
          "Endpoint protection strategies",
          "Secure system configuration and hardening",
          "Privilege management and access control",
          "Patch management and system updates",
          "Malware analysis and defense",
        ],
      },
      {
        title: "Ethical Hacking and Penetration Testing",
        duration: "3 Weeks",
        topics: [
          "Ethical hacking methodology",
          "Reconnaissance and information gathering",
          "Vulnerability scanning and assessment",
          "Exploitation techniques and tools",
          "Post-exploitation and privilege escalation",
          "Reporting and remediation recommendations",
        ],
      },
      {
        title: "Web Application Security",
        duration: "2 Weeks",
        topics: [
          "OWASP Top 10 vulnerabilities",
          "Web application attack vectors",
          "Secure coding practices",
          "Authentication and session management",
          "API security",
          "Web application firewalls and security tools",
        ],
      },
      {
        title: "Cryptography and Secure Communications",
        duration: "2 Weeks",
        topics: [
          "Cryptographic concepts and algorithms",
          "Public Key Infrastructure (PKI)",
          "SSL/TLS and secure communications",
          "Encryption implementation and best practices",
          "Digital signatures and certificates",
          "Cryptographic attacks and defenses",
        ],
      },
      {
        title: "Incident Response and Digital Forensics",
        duration: "2 Weeks",
        topics: [
          "Incident response planning and procedures",
          "Digital forensics methodology",
          "Evidence collection and preservation",
          "Memory and disk forensics",
          "Log analysis and event correlation",
          "Threat hunting techniques",
        ],
      },
    ],

    certifications: [
      {
        name: "CompTIA Security+",
        provider: "CompTIA",
        description: "Validate your baseline skills in core security functions across different technologies",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/CompTIA-Logo.png/1200px-CompTIA-Logo.png",
      },
      {
        name: "Certified Ethical Hacker (CEH)",
        provider: "EC-Council",
        description:
          "Demonstrate your skills in finding vulnerabilities in systems using the same knowledge and tools as malicious hackers",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/EC-Council_Logo.png/1200px-EC-Council_Logo.png",
      },
      {
        name: "Certified Information Systems Security Professional (CISSP)",
        provider: "ISC²",
        description:
          "Prove your expertise in designing, implementing, and managing a best-in-class cybersecurity program",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/ISC2_logo.svg/1200px-ISC2_logo.svg.png",
      },
    ],

    placements: {
      companies: [
        {
          name: "Microsoft",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
        },
        {
          name: "Cisco",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png",
        },
        {
          name: "IBM",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png",
        },
        {
          name: "Deloitte",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/1200px-Deloitte.svg.png",
        },
        {
          name: "Accenture",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/1200px-Accenture.svg.png",
        },
        {
          name: "FireEye",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/FireEye_Logo.svg/1200px-FireEye_Logo.svg.png",
        },
      ],
      averageSalary: "₹15,00,000",
      placementRate: "94%",
      testimonials: [
        {
          name: "Alex Johnson",
          role: "Security Analyst",
          company: "Microsoft",
          image: "https://randomuser.me/api/portraits/men/42.jpg",
          quote:
            "The Cybersecurity course at LearnX provided me with hands-on experience in real-world security scenarios. The labs and practical exercises were invaluable, and the career support helped me land my dream job at Microsoft.",
        },
        {
          name: "Sophia Chen",
          role: "Penetration Tester",
          company: "Cisco",
          image: "https://randomuser.me/api/portraits/women/33.jpg",
          quote:
            "I transitioned from IT support to penetration testing after completing this course. The instructors were industry professionals who shared practical insights beyond textbook knowledge. The ethical hacking modules were particularly excellent.",
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

export default CybersecurityCourse

