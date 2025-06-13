"use client"

import { useState, useEffect } from "react"
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageSquare } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import FormButton from "../components/FormButton"

const FAQPage = ({ setIsFormOpen }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [expandedQuestions, setExpandedQuestions] = useState({})

  useEffect(() => {
    // Set page title and meta tags for SEO
    document.title = "Frequently Asked Questions | LearnX"

    // Scroll to top on page load
    window.scrollTo(0, 0)
  }, [])

  // FAQ categories
  const categories = [
    { id: "all", name: "All Questions" },
    { id: "general", name: "General" },
    { id: "courses", name: "Courses" },
    { id: "payment", name: "Payment & Pricing" },
    { id: "technical", name: "Technical Support" },
    { id: "career", name: "Career Services" },
  ]

  // FAQ data
  const faqData = [
    {
      id: 1,
      question: "What is LearnX?",
      answer:
        "LearnX is a premier online education platform specializing in technology and digital skills training. We offer comprehensive courses in areas such as AI/ML, Data Science, Cybersecurity, Cloud Computing, and more, designed to help you advance your career in the tech industry.",
      category: "general",
    },
    {
      id: 2,
      question: "How do I create an account?",
      answer:
        "Creating an account is simple! Click on the 'Sign Up' button in the top right corner of our website. Fill in your details, verify your email address, and you're ready to explore our courses and start your learning journey.",
      category: "general",
    },
    {
      id: 3,
      question: "Are the courses self-paced or scheduled?",
      answer:
        "We offer both self-paced and scheduled courses. Our self-paced courses allow you to learn at your own convenience, while scheduled courses follow a structured timeline with live sessions and deadlines. The course format is clearly indicated on each course page.",
      category: "courses",
    },
    {
      id: 4,
      question: "What is the difference between free and premium courses?",
      answer:
        "Free courses provide access to basic learning materials and limited features. Premium courses offer comprehensive curriculum, hands-on projects, personalized feedback, certification upon completion, career support services, and lifetime access to course updates.",
      category: "courses",
    },
    {
      id: 5,
      question: "How long do I have access to a course after purchasing?",
      answer:
        "Once you purchase a course, you have lifetime access to the course materials. This allows you to learn at your own pace and revisit the content whenever you need a refresher. Any future updates to the course content will also be available to you at no additional cost.",
      category: "courses",
    },
    {
      id: 6,
      question: "Do you offer any course bundles or discounts?",
      answer:
        "Yes, we offer various course bundles that provide significant savings compared to purchasing courses individually. We also run seasonal promotions and special discounts. Sign up for our newsletter to stay informed about our latest offers.",
      category: "payment",
    },
    {
      id: 7,
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit and debit cards (Visa, Mastercard, American Express), PayPal, and bank transfers. For certain regions, we also support local payment methods like UPI, Alipay, and more. All payments are securely processed through our payment partner, Razorpay.",
      category: "payment",
    },
    {
      id: 8,
      question: "Do you offer refunds if I'm not satisfied?",
      answer:
        "Yes, we offer a 7-day money-back guarantee for most of our courses. If you're not satisfied with the course content, you can request a refund within 7 days of purchase, provided you haven't completed more than 20% of the course. Please refer to our Refund Policy for more details.",
      category: "payment",
    },
    {
      id: 9,
      question: "Can I download course videos for offline viewing?",
      answer:
        "Yes, our mobile app allows you to download course videos for offline viewing. This feature is available for all premium courses and is particularly useful when you're traveling or have limited internet access. Please note that downloaded content is still protected by our copyright policies.",
      category: "technical",
    },
    {
      id: 10,
      question: "What should I do if I encounter technical issues?",
      answer:
        "If you encounter any technical issues, first try refreshing your browser or clearing your cache. If the problem persists, please visit our Help Center for troubleshooting guides or contact our technical support team at support@learnx.com with details of the issue you're experiencing.",
      category: "technical",
    },
    {
      id: 11,
      question: "What are the system requirements for accessing courses?",
      answer:
        "Our platform is designed to work on most modern devices. For the best experience, we recommend using an updated version of Chrome, Firefox, Safari, or Edge browser. For certain programming courses, specific software requirements will be listed on the course page.",
      category: "technical",
    },
    {
      id: 12,
      question: "Do you offer career counseling services?",
      answer:
        "Yes, we provide career counseling services to help you navigate your professional journey. Our career advisors can assist with resume building, interview preparation, job search strategies, and career transition planning. These services are available to all students enrolled in our premium courses.",
      category: "career",
    },
    {
      id: 13,
      question: "How does the job placement assistance work?",
      answer:
        "Our job placement assistance includes access to our exclusive job board, resume review services, mock interviews, and connections with our hiring partners. While we cannot guarantee job placement, we work closely with you to maximize your chances of landing your dream role in the tech industry.",
      category: "career",
    },
    {
      id: 14,
      question: "Are the certificates recognized by employers?",
      answer:
        "Yes, LearnX certificates are recognized and valued by employers worldwide. Our courses are developed in collaboration with industry experts and aligned with current industry standards. Many of our courses also prepare you for industry-recognized certifications from organizations like AWS, Microsoft, and Google.",
      category: "career",
    },
    {
      id: 15,
      question: "Can I transfer my course to someone else?",
      answer:
        "Course transfers are evaluated on a case-by-case basis. Please contact our support team with your request, including the details of the person you wish to transfer the course to. Note that a transfer fee may apply, and the transfer must comply with our Terms of Service.",
      category: "courses",
    },
    {
      id: 16,
      question: "Do you offer corporate training programs?",
      answer:
        "Yes, we offer customized corporate training programs designed to upskill your workforce. Our enterprise solutions include dedicated account management, custom learning paths, progress tracking, and detailed analytics. Contact our enterprise team at enterprise@learnx.com for more information.",
      category: "general",
    },
    {
      id: 17,
      question: "How do I get a receipt or invoice for my purchase?",
      answer:
        "After completing your purchase, a receipt is automatically sent to your registered email address. You can also access all your purchase receipts and invoices from the 'Billing History' section in your account dashboard. For any specific invoice requirements, please contact our billing team.",
      category: "payment",
    },
    {
      id: 18,
      question: "Can I access courses on mobile devices?",
      answer:
        "Yes, our platform is fully responsive and can be accessed on any mobile device through a web browser. For a better mobile experience, we also offer dedicated apps for iOS and Android devices, which include features like offline viewing and push notifications for course updates.",
      category: "technical",
    },
    {
      id: 19,
      question: "How do I track my progress in a course?",
      answer:
        "Your course progress is automatically tracked in your user dashboard. You can see completion percentages, quiz scores, and project evaluations. For most courses, you can also earn badges and certificates as you complete different modules and milestones.",
      category: "courses",
    },
    {
      id: 20,
      question: "What kind of support do you offer to students?",
      answer:
        "We offer multiple support channels including email support, live chat, community forums, and scheduled office hours with instructors. Premium courses also include personalized feedback on assignments and projects, as well as dedicated mentorship sessions.",
      category: "general",
    },
  ]

  // Toggle question expansion
  const toggleQuestion = (id) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  // Filter FAQs based on search term and active category
  const filteredFAQs = faqData.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory
    return matchesSearch && matchesCategory
  })

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
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-gray-950 to-gray-950"></div>

          {/* Animated circuit lines */}
          <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>

          {/* Glowing lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent glow-effect-line"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500 to-transparent glow-effect-line"></div>

          <div className="container relative mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-900/30 border border-violet-500/30 text-sm mb-6">
                <HelpCircle size={14} className="mr-2 text-violet-400" />
                <span>Find Answers Quickly</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Frequently Asked{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-rose-500">
                  Questions
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                Find answers to common questions about our courses, platform, and services.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
              <div className="relative mb-10">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="text-gray-400" size={20} />
                </div>
                <input
                  type="text"
                  placeholder="Search for questions or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/80 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                />
              </div>

              {/* Category Tabs */}
              <div className="flex flex-wrap gap-3 mb-10">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeCategory === category.id
                        ? "bg-gradient-to-r from-violet-600 to-rose-500 text-white"
                        : "bg-gray-800/50 text-gray-300 hover:bg-gray-800 border border-gray-700"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {filteredFAQs.length > 0 ? (
                <div className="space-y-6">
                  {filteredFAQs.map((faq) => (
                    <div
                      key={faq.id}
                      className="bg-gray-900/60 backdrop-blur-md border border-violet-500/20 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleQuestion(faq.id)}
                        className="w-full flex justify-between items-center p-6 text-left"
                      >
                        <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                        {expandedQuestions[faq.id] ? (
                          <ChevronUp className="text-violet-400 flex-shrink-0" size={20} />
                        ) : (
                          <ChevronDown className="text-violet-400 flex-shrink-0" size={20} />
                        )}
                      </button>

                      {expandedQuestions[faq.id] && (
                        <div className="px-6 pb-6 text-gray-300">
                          <div className="pt-2 border-t border-gray-800">
                            <p className="mt-4">{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-gray-900/60 backdrop-blur-md border border-violet-500/20 rounded-xl">
                  <HelpCircle className="mx-auto text-violet-400 mb-4" size={48} />
                  <h3 className="text-xl font-semibold mb-2">No results found</h3>
                  <p className="text-gray-300 mb-6">We couldn't find any FAQs matching your search criteria.</p>
                  <button
                    onClick={() => {
                      setSearchTerm("")
                      setActiveCategory("all")
                    }}
                    className="px-6 py-3 bg-violet-600 hover:bg-violet-700 rounded-lg text-white font-medium transition-colors"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Still Have Questions Section */}
        <section className="py-16 my-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/30 to-rose-900/30"></div>
          <div className="absolute inset-0 bg-gray-950 opacity-80"></div>
          <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>

          <div className="container relative mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <MessageSquare className="mx-auto text-violet-400 mb-6" size={48} />
              <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
              <p className="text-xl text-gray-300 mb-10">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <FormButton variant="primary" context="Contact Support" className="px-8 py-4 text-base font-medium">
                  <span className="relative z-10">Contact Support</span>
                </FormButton>
                <a
                  href="/contact"
                  className="px-8 py-4 text-base font-medium text-white rounded-md border border-violet-500/50 hover:border-violet-500 hover:bg-violet-700/20 transition-all relative group overflow-hidden"
                >
                  <span className="relative z-10">Visit Help Center</span>
                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-gradient-to-r from-violet-800/20 to-violet-600/20 transition-transform duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer setIsFormOpen={setIsFormOpen} />
    </div>
  )
}

export default FAQPage

