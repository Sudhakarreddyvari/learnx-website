"use client"

import { useState } from "react"
import CourseTemplate from "./course-template"
import Header from "../components/Header"
import Footer from "../components/Footer"

const BlockchainCourse = ({ setIsContactOpen }) => {
  const [isNavSticky, setIsNavSticky] = useState(false)

  // Course data specific to Blockchain
  const courseData = {
    slug: "blockchain-technology",
    title: "Blockchain Technology",
    subtitle: "Master the technology behind decentralized applications",
    description:
      "Dive into the world of blockchain technology and distributed ledger systems. Learn to develop smart contracts, decentralized applications (dApps), and understand the fundamentals of cryptocurrencies, NFTs, and Web3.",
    metaDescription:
      "Master Blockchain Technology with LearnX's comprehensive course. Learn smart contracts, dApp development, Ethereum, Solidity, and Web3. Get certified and placed in top companies. Enroll now!",
    keywords:
      "blockchain course, cryptocurrency, smart contracts, Ethereum, Solidity, Web3, dApp development, NFT, DeFi, distributed ledger, Bitcoin, Hyperledger",
    duration: "14 Weeks",
    level: "Intermediate",
    rating: 4.7,
    students: 1850,
    image:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "₹6,999",

    curriculum: [
      {
        title: "Blockchain Fundamentals",
        duration: "2 Weeks",
        topics: [
          "Introduction to blockchain technology",
          "Distributed ledger technology concepts",
          "Consensus mechanisms (PoW, PoS, DPoS)",
          "Cryptography and hashing algorithms",
          "Public vs. private blockchains",
          "Blockchain use cases across industries",
        ],
      },
      {
        title: "Cryptocurrencies and Tokenomics",
        duration: "2 Weeks",
        topics: [
          "Cryptocurrency fundamentals",
          "Bitcoin architecture and ecosystem",
          "Altcoins and token standards",
          "Tokenomics and token design",
          "Crypto wallets and security",
          "Cryptocurrency exchanges and trading",
        ],
      },
      {
        title: "Ethereum and Smart Contracts",
        duration: "3 Weeks",
        topics: [
          "Ethereum architecture and ecosystem",
          "Smart contract fundamentals",
          "Solidity programming language",
          "Smart contract development environment setup",
          "Testing and deploying smart contracts",
          "Gas optimization and best practices",
        ],
      },
      {
        title: "Decentralized Application (dApp) Development",
        duration: "3 Weeks",
        topics: [
          "dApp architecture and components",
          "Web3.js and ethers.js libraries",
          "Frontend integration with blockchain",
          "User authentication with wallets",
          "IPFS for decentralized storage",
          "Building a full-stack dApp",
        ],
      },
      {
        title: "NFTs and Digital Assets",
        duration: "1 Week",
        topics: [
          "Non-fungible tokens (NFTs) fundamentals",
          "ERC-721 and ERC-1155 standards",
          "NFT marketplace development",
          "Digital art and collectibles",
          "NFT minting and metadata",
          "Royalties and secondary sales",
        ],
      },
      {
        title: "DeFi (Decentralized Finance)",
        duration: "2 Weeks",
        topics: [
          "DeFi ecosystem overview",
          "Decentralized exchanges (DEXs)",
          "Lending and borrowing protocols",
          "Yield farming and liquidity mining",
          "Stablecoins and synthetic assets",
          "DeFi security and risk management",
        ],
      },
      {
        title: "Enterprise Blockchain",
        duration: "1 Week",
        topics: [
          "Hyperledger Fabric architecture",
          "Quorum and enterprise Ethereum",
          "Consortium blockchains",
          "Supply chain and provenance use cases",
          "Identity management on blockchain",
          "Regulatory considerations and compliance",
        ],
      },
    ],

    certifications: [
      {
        name: "Certified Blockchain Developer",
        provider: "Blockchain Council",
        description: "Validate your skills in blockchain concepts and development of blockchain applications",
        logo: "https://www.blockchain-council.org/wp-content/uploads/2022/02/Blockchain-Council-Logo.svg",
      },
      {
        name: "Ethereum Developer Certification",
        provider: "ConsenSys Academy",
        description: "Demonstrate your expertise in building decentralized applications on Ethereum",
        logo: "https://consensys.net/images/logos/consensys-logo-white.svg",
      },
      {
        name: "Certified Blockchain Solution Architect",
        provider: "Blockchain Training Alliance",
        description: "Prove your ability to design, implement, and manage blockchain solutions for enterprises",
        logo: "https://blockchaintrainingalliance.com/theme/images/logo/logo.png",
      },
    ],

    placements: {
      companies: [
        {
          name: "ConsenSys",
          logo: "https://consensys.net/images/logos/consensys-logo-white.svg",
        },
        {
          name: "Coinbase",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Coinbase.svg/1200px-Coinbase.svg.png",
        },
        {
          name: "IBM",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png",
        },
        {
          name: "Ripple",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Ripple_logo.svg/1200px-Ripple_logo.svg.png",
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
      placementRate: "88%",
      testimonials: [
        {
          name: "Michael Rodriguez",
          role: "Blockchain Developer",
          company: "ConsenSys",
          image: "https://randomuser.me/api/portraits/men/35.jpg",
          quote:
            "The Blockchain course at LearnX provided me with a solid foundation in both theory and practical development. The Solidity and dApp development modules were particularly valuable for my current role at ConsenSys.",
        },
        {
          name: "Sarah Kim",
          role: "DeFi Product Manager",
          company: "Coinbase",
          image: "https://randomuser.me/api/portraits/women/41.jpg",
          quote:
            "I came from a traditional finance background and wanted to transition into blockchain. This course gave me the technical understanding I needed to speak confidently about blockchain technology and land a role in the DeFi space.",
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

export default BlockchainCourse

