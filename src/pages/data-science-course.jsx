"use client"

import { useState } from "react"
import CourseTemplate from "./course-template"
import Header from "../components/Header"
import Footer from "../components/Footer"

const DataScienceCourse = ({ setIsContactOpen }) => {
  const [isNavSticky, setIsNavSticky] = useState(false)

  // Course data specific to Data Science
  const courseData = {
    slug: "data-science-big-data-analytics",
    title: "Data Science and Big Data Analytics",
    subtitle: "Transform raw data into actionable insights",
    description:
      "Master the art and science of extracting insights from complex data sets. Learn statistical analysis, data visualization, predictive modeling, and big data technologies to drive business decisions and innovation.",
    metaDescription:
      "Become a Data Scientist with LearnX's comprehensive Data Science and Big Data Analytics course. Learn Python, R, SQL, Hadoop, Spark, and more. Get placed in top companies. Enroll now!",
    keywords:
      "data science course, big data analytics, data visualization, machine learning, statistical analysis, Python for data science, R programming, SQL, Hadoop, Spark, data mining, predictive modeling",
    duration: "14 Weeks",
    level: "Beginner to Advanced",
    rating: 4.8,
    students: 1580,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    price: "₹6,499",

    curriculum: [
      {
        title: "Foundations of Data Science",
        duration: "2 Weeks",
        topics: [
          "Introduction to Data Science and its applications",
          "Data Science lifecycle and methodologies",
          "Statistical thinking and data-driven decision making",
          "Python programming fundamentals for Data Science",
          "R programming basics",
          "Ethics in Data Science and responsible data usage",
        ],
      },
      {
        title: "Data Manipulation and Analysis",
        duration: "3 Weeks",
        topics: [
          "Working with structured and unstructured data",
          "Data cleaning and preprocessing techniques",
          "Pandas for data manipulation in Python",
          "SQL for data retrieval and analysis",
          "NoSQL databases and their applications",
          "Data integration from multiple sources",
        ],
      },
      {
        title: "Statistical Analysis",
        duration: "2 Weeks",
        topics: [
          "Descriptive statistics and exploratory data analysis",
          "Probability distributions and sampling",
          "Hypothesis testing and confidence intervals",
          "Correlation and regression analysis",
          "ANOVA and experimental design",
          "Bayesian statistics for Data Science",
        ],
      },
      {
        title: "Data Visualization",
        duration: "2 Weeks",
        topics: [
          "Principles of effective data visualization",
          "Creating static visualizations with Matplotlib and Seaborn",
          "Interactive visualizations with Plotly and Bokeh",
          "Dashboard creation with Tableau",
          "Geospatial data visualization",
          "Storytelling with data and presentation techniques",
        ],
      },
      {
        title: "Machine Learning for Data Science",
        duration: "3 Weeks",
        topics: [
          "Supervised learning algorithms (Linear Regression, Decision Trees, Random Forests)",
          "Unsupervised learning (Clustering, Dimensionality Reduction)",
          "Feature engineering and selection",
          "Model evaluation and validation techniques",
          "Ensemble methods and boosting algorithms",
          "Time series analysis and forecasting",
        ],
      },
      {
        title: "Big Data Technologies",
        duration: "2 Weeks",
        topics: [
          "Introduction to Big Data ecosystems",
          "Hadoop architecture and MapReduce",
          "Apache Spark for large-scale data processing",
          "Stream processing with Kafka",
          "Data warehousing concepts and tools",
          "Cloud platforms for Big Data (AWS, Azure, GCP)",
        ],
      },
    ],

    certifications: [
      {
        name: "IBM Data Science Professional Certificate",
        provider: "IBM",
        description: "Demonstrate your proficiency in data science and machine learning through hands-on projects",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1200px-IBM_logo.svg.png",
      },
      {
        name: "Microsoft Certified: Azure Data Scientist Associate",
        provider: "Microsoft",
        description: "Validate your expertise in applying data science and machine learning techniques on Azure",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
      },
      {
        name: "Google Data Analytics Professional Certificate",
        provider: "Google",
        description:
          "Master the skills required to transform complex data into valuable insights and make data-driven decisions",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
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
          name: "Deloitte",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/1200px-Deloitte.svg.png",
        },
        {
          name: "Accenture",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/1200px-Accenture.svg.png",
        },
      ],
      averageSalary: "₹10,00,000",
      placementRate: "90%",
      testimonials: [
        {
          name: "Jennifer Wilson",
          role: "Data Scientist",
          company: "Amazon",
          image: "https://randomuser.me/api/portraits/women/45.jpg",
          quote:
            "The Data Science course at LearnX was incredibly comprehensive. I learned everything from Python to machine learning, and the career support was outstanding. I secured a position at Amazon within weeks of completing the course.",
        },
        {
          name: "Michael Chen",
          role: "Data Analyst",
          company: "Microsoft",
          image: "https://randomuser.me/api/portraits/men/52.jpg",
          quote:
            "The hands-on projects in this course gave me real-world experience that directly translated to my current role. The instructors were top-notch and the curriculum covered all the latest tools and technologies used in the industry.",
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

export default DataScienceCourse

