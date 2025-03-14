"use client"

import { useEffect } from "react"
import { CheckCircle, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const ThankYouPage = ({ setIsFormOpen }) => {
  useEffect(() => {
    // Set page title and meta tags for SEO
    document.title = "Thank You | LearnX"

    // Scroll to top on page load
    window.scrollTo(0, 0)
  }, [])

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
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Thank You for{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-rose-500">
                  Contacting Us
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-12">
                Your message has been received. Our team will get back to you shortly to discuss your learning journey.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/"
                  className="px-8 py-4 text-base font-medium text-white rounded-md bg-gradient-to-r from-violet-600 to-rose-500 hover:from-violet-700 hover:to-rose-600 transition-colors flex items-center justify-center gap-2"
                >
                  <ArrowLeft size={18} />
                  Return to Homepage
                </Link>

                <Link
                  to="/courses"
                  className="px-8 py-4 text-base font-medium text-white rounded-md border border-violet-500/50 hover:border-violet-500 hover:bg-violet-700/20 transition-all"
                >
                  Explore Our Courses
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">What Happens Next?</h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-violet-500/20 text-center">
                  <div className="w-12 h-12 rounded-full bg-violet-900/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-violet-400">1</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Initial Contact</h3>
                  <p className="text-gray-300">Our team will reach out to you within 24 hours via email or phone.</p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-violet-500/20 text-center">
                  <div className="w-12 h-12 rounded-full bg-violet-900/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-violet-400">2</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Personalized Consultation</h3>
                  <p className="text-gray-300">
                    We'll schedule a call to understand your goals and recommend the best courses.
                  </p>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-violet-500/20 text-center">
                  <div className="w-12 h-12 rounded-full bg-violet-900/30 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-violet-400">3</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Begin Your Journey</h3>
                  <p className="text-gray-300">
                    Get enrolled and start your learning journey with our expert guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer setIsFormOpen={setIsFormOpen} />
    </div>
  )
}

export default ThankYouPage

