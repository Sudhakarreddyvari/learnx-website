"use client"

import { useState } from "react"
import CourseTemplate from "./course-template"
import Header from "../components/Header"
import Footer from "../components/Footer"

const AIMachineLearningCourse = ({ setIsContactOpen }) => {
  const [isNavSticky, setIsNavSticky] = useState(false)

  // Course data specific to AI and Machine Learning
  const courseData = {
    slug: "artificial-intelligence-machine-learning",
    title: "Artificial Intelligence (AI) and Machine Learning (ML)",
    subtitle: "Master the technologies shaping our future",
    description:
      "Dive deep into the world of AI and ML with our comprehensive course designed for both beginners and professionals. Learn to build intelligent systems, implement machine learning algorithms, and develop AI applications that solve real-world problems.",
    metaDescription:
      "Master Artificial Intelligence and Machine Learning with LearnX's comprehensive course. Learn from industry experts, work on real projects, and get placed in top companies. Enroll now!",
    keywords:
      "artificial intelligence course, machine learning training, AI ML certification, deep learning, neural networks, data science, AI career, machine learning algorithms, AI programming, Python for AI",
    duration: "16 Weeks",
    level: "Intermediate to Advanced",
    rating: 4.9,
    students: 1450,
    image:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "₹6,999",

    curriculum: [
      {
        title: "Introduction to AI and ML",
        duration: "2 Weeks",
        topics: [
          "History and evolution of AI and ML",
          "Types of AI: Narrow, General, and Super AI",
          "Machine Learning vs Deep Learning vs AI",
          "Python programming fundamentals for AI/ML",
          "Setting up your development environment",
          "Ethics in AI and responsible AI development",
        ],
      },
      {
        title: "Mathematics for Machine Learning",
        duration: "2 Weeks",
        topics: [
          "Linear Algebra essentials",
          "Calculus concepts for ML algorithms",
          "Probability and Statistics",
          "Optimization techniques",
          "Hands-on implementation with NumPy and SciPy",
          "Mathematical intuition behind ML algorithms",
        ],
      },
      {
        title: "Data Preprocessing and Exploration",
        duration: "2 Weeks",
        topics: [
          "Data collection and cleaning techniques",
          "Feature engineering and selection",
          "Exploratory Data Analysis (EDA)",
          "Data visualization with Matplotlib and Seaborn",
          "Handling missing data and outliers",
          "Data normalization and standardization",
        ],
      },
      {
        title: "Supervised Learning Algorithms",
        duration: "3 Weeks",
        topics: [
          "Linear and Logistic Regression",
          "Decision Trees and Random Forests",
          "Support Vector Machines",
          "K-Nearest Neighbors",
          "Naive Bayes Classifiers",
          "Ensemble methods and boosting algorithms",
        ],
      },
      {
        title: "Unsupervised Learning",
        duration: "2 Weeks",
        topics: [
          "Clustering algorithms (K-means, Hierarchical, DBSCAN)",
          "Dimensionality reduction (PCA, t-SNE)",
          "Association rule learning",
          "Anomaly detection",
          "Gaussian Mixture Models",
          "Self-Organizing Maps",
        ],
      },
      {
        title: "Deep Learning Fundamentals",
        duration: "3 Weeks",
        topics: [
          "Neural Networks architecture and components",
          "Activation functions and backpropagation",
          "TensorFlow and Keras frameworks",
          "Convolutional Neural Networks (CNNs)",
          "Recurrent Neural Networks (RNNs)",
          "Transfer Learning and pre-trained models",
        ],
      },
      {
        title: "Advanced AI Topics",
        duration: "2 Weeks",
        topics: [
          "Natural Language Processing (NLP)",
          "Computer Vision applications",
          "Reinforcement Learning",
          "Generative Adversarial Networks (GANs)",
          "Transformers and attention mechanisms",
          "Large Language Models and their applications",
        ],
      },
    ],

    certifications: [
      {
        name: "TensorFlow Developer Certificate",
        provider: "Google",
        description: "Validate your skills in using TensorFlow to solve deep learning and ML problems",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png",
      },
      {
        name: "Microsoft Certified: Azure AI Fundamentals",
        provider: "Microsoft",
        description:
          "Demonstrate your knowledge of machine learning and AI concepts and related Microsoft Azure services",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
      },
      {
        name: "IBM AI Engineering Professional Certificate",
        provider: "IBM",
        description: "Master the skills to become an AI Engineer through hands-on projects and applications",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png",
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
      averageSalary: "₹7,00,000",
      placementRate: "92%",
      testimonials: [
        {
          name: "Priya Sharma",
          role: "ML Engineer",
          company: "Google",
          image: "https://randomuser.me/api/portraits/women/28.jpg",
          quote:
            "The AI/ML course at LearnX completely transformed my career. The hands-on projects and mentorship helped me land my dream job at Google. The curriculum is cutting-edge and covers all the latest technologies.",
        },
        {
          name: "Rahul Patel",
          role: "AI Researcher",
          company: "Microsoft",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          quote:
            "I had some programming experience but no AI background. This course provided the perfect balance of theory and practice. The career support was exceptional, and I received multiple job offers before even completing the course.",
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

export default AIMachineLearningCourse

