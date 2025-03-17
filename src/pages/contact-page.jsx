"use client"

import { useState, useEffect } from "react"
import { Mail, Phone, MapPin, MessageSquare, Send } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const ContactPage = ({ setIsFormOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  useEffect(() => {
    // Set page title and meta tags for SEO
    document.title = "Contact Us | LearnX"

    // Scroll to top on page load
    window.scrollTo(0, 0)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
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
                <MessageSquare size={14} className="mr-2 text-violet-400" />
                <span>We'd Love to Hear From You</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contact{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-rose-500">Us</span>
              </h1>
              <p className="text-xl text-gray-300">
                Have questions or feedback? Our team is here to help you with anything you need.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information and Form */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-violet-900/30 flex items-center justify-center mr-4">
                      <MapPin className="text-violet-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Our Location</h3>
                      <p className="text-gray-300">
                        8-2-293/82/PLN/406, Guttala_Begumpet, Kavuri Hills
                        <br />
                        Madhapur, Hyderabad
                        <br />
                        Telangana 500033
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-violet-900/30 flex items-center justify-center mr-4">
                      <Mail className="text-violet-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                      <p className="text-gray-300">
                        General Inquiries: learnxinstitute@gmail.com
                        <br />
                        Support: learnxinstitute@gmail.com
                        <br />
                        Admissions: learnxinstitute@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-violet-900/30 flex items-center justify-center mr-4">
                      <Phone className="text-violet-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                      <p className="text-gray-300">
                        Main Office: +91 8019333796
                        <br />
                        Support Hotline: +91 8019333796
                        <br />
                        Hours: Monday-Friday, 7AM-10PM IST
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-gray-900/60 backdrop-blur-md border border-violet-500/20 rounded-xl">
                  <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                  <p className="text-gray-300 mb-6">
                    Follow us on social media for the latest updates, educational content, and community events.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href="https://www.facebook.com/share/1BM4TaJjf7/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ cursor: "pointer", display: "inline-block", position: "relative", zIndex: 10 }}
                      className="px-3 py-1 rounded-md bg-gray-800 hover:bg-violet-900/30 transition-colors text-sm text-gray-200 hover:text-white"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://x.com/LearnX_official"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ cursor: "pointer", display: "inline-block", position: "relative", zIndex: 10 }}
                      className="px-3 py-1 rounded-md bg-gray-800 hover:bg-violet-900/30 transition-colors text-sm text-gray-200 hover:text-white"
                    >
                      Twitter
                    </a>
                    <a
                      href="https://www.instagram.com/learnx_official/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ cursor: "pointer", display: "inline-block", position: "relative", zIndex: 10 }}
                      className="px-3 py-1 rounded-md bg-gray-800 hover:bg-violet-900/30 transition-colors text-sm text-gray-200 hover:text-white"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.linkedin.com/company/learnx-official/?viewAsMember=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ cursor: "pointer", display: "inline-block", position: "relative", zIndex: 10 }}
                      className="px-3 py-1 rounded-md bg-gray-800 hover:bg-violet-900/30 transition-colors text-sm text-gray-200 hover:text-white"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://youtube.com/@learnx-d3u?si=n_XU71JTXlYgvG1n"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ cursor: "pointer", display: "inline-block", position: "relative", zIndex: 10 }}
                      className="px-3 py-1 rounded-md bg-gray-800 hover:bg-violet-900/30 transition-colors text-sm text-gray-200 hover:text-white"
                    >
                      YouTube
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-900/60 backdrop-blur-md border border-violet-500/20 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-900/50 border border-green-500/50 rounded-lg text-green-200">
                    <p>Thank you for your message! We'll get back to you shortly.</p>
                  </div>
                )}

                {submitError && (
                  <div className="mb-6 p-4 bg-red-900/50 border border-red-500/50 rounded-lg text-red-200">
                    <p>There was an error sending your message. Please try again later.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      placeholder="Please provide details about your inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-gradient-to-r from-violet-600 to-rose-500 hover:from-violet-700 hover:to-rose-600 text-white font-medium rounded-lg flex items-center justify-center transition-colors relative group overflow-hidden"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <span className="relative z-10 flex items-center">
                          Send Message
                          <Send size={18} className="ml-2" />
                        </span>
                        <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-white/10 transition-transform duration-300"></div>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300">Find quick answers to common questions about our courses and services.</p>
            </div>

            <div className="max-w-4xl mx-auto grid gap-6">
              {[
                {
                  question: "How do I enroll in a course?",
                  answer:
                    "You can enroll in any course by visiting the course page and clicking the 'Enroll Now' button. Follow the checkout process to complete your enrollment. Once enrolled, you'll have immediate access to the course materials.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept all major credit and debit cards, PayPal, and bank transfers. For certain regions, we also support local payment methods like UPI, Alipay, and more. All payments are securely processed through our payment partner, Razorpay.",
                },
                {
                  question: "Do you offer refunds if I'm not satisfied?",
                  answer:
                    "Yes, we offer a 7-day money-back guarantee for most of our courses. If you're not satisfied with the course content, you can request a refund within 7 days of purchase, provided you haven't completed more than 20% of the course. Please refer to our Refund Policy for more details.",
                },
                {
                  question: "How long do I have access to a course after purchasing?",
                  answer:
                    "Once you purchase a course, you have lifetime access to the course materials. This allows you to learn at your own pace and revisit the content whenever you need a refresher.",
                },
                {
                  question: "Do you offer any discounts for students or groups?",
                  answer:
                    "Yes, we offer special discounts for students, educators, and non-profit organizations. We also provide group discounts for teams and corporate training. Please contact our sales team at sales@learnx.com for more information.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-gray-900/60 backdrop-blur-md border border-violet-500/20 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-gray-300">
                Have more questions? Visit our{" "}
                <a href="/faq" className="text-violet-400 hover:text-violet-300 underline">
                  complete FAQ page
                </a>{" "}
                or{" "}
                <a href="#" className="text-violet-400 hover:text-violet-300 underline">
                  contact our support team
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer setIsFormOpen={setIsFormOpen} />
    </div>
  )
}

export default ContactPage

