"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"

const ThankYouPage = () => {
  useEffect(() => {
    // Clear the form submitted flag when the thank you page loads
    localStorage.removeItem("formSubmitted")

    // Scroll to top
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen bg-gray-900 pt-20 pb-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Thank You!</h1>

            <p className="text-xl text-gray-300 mb-8">
              Your form has been submitted successfully. Our team will get in touch with you shortly.
            </p>

            <div className="space-y-4">
              <p className="text-gray-400">In the meantime, you can explore our courses or return to the homepage.</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Link
                  to="/"
                  className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors"
                >
                  Return to Homepage
                </Link>

                <Link
                  to="/courses"
                  className="px-6 py-3 bg-gradient-to-r from-violet-600 to-rose-500 hover:from-violet-700 hover:to-rose-600 text-white font-medium rounded-lg transition-colors"
                >
                  Explore Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ThankYouPage

