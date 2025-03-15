"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

const FormPopup = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true)
      document.body.style.overflow = "hidden"
    } else {
      setTimeout(() => {
        setIsAnimating(false)
      }, 300)
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number should be 10 digits"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)

        // Reset form after submission
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({
            name: "",
            email: "",
            phone: "",
          })
          setIsOpen(false)

          // Redirect to thank you page
          window.location.href = "/thank-you"
        }, 2000)
      }, 1500)
    }
  }

  // Reset form state when popup is closed
  useEffect(() => {
    if (!isOpen) {
      setErrors({})
      setIsSubmitted(false)
    }
  }, [isOpen])

  if (!isOpen && !isAnimating) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-md bg-gray-900 border border-violet-500/30 rounded-2xl p-6 shadow-xl transition-all duration-300 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="absolute top-3 right-3">
          <button
            type="button"
            className="text-gray-400 hover:text-white focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <h3 className="text-2xl font-bold text-center text-white mb-2">Get Started Today</h3>
        <p className="text-center text-gray-300 mb-6">
          Fill out the form below and our team will get in touch with you shortly.
        </p>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-xl font-semibold text-white mb-2">Thank You!</h4>
            <p className="text-gray-300">Your form has been submitted successfully.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 bg-gray-800 border ${
                  errors.name ? "border-red-500" : "border-gray-700"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white`}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 bg-gray-800 border ${
                  errors.email ? "border-red-500" : "border-gray-700"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white`}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-2.5 bg-gray-800 border ${
                  errors.phone ? "border-red-500" : "border-gray-700"
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white`}
                placeholder="Enter your phone number"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 bg-gradient-to-r from-violet-600 to-rose-500 hover:from-violet-700 hover:to-rose-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
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
                  Processing...
                </>
              ) : (
                "Submit"
              )}
            </button>

            <p className="text-xs text-gray-400 text-center mt-4">
              By submitting this form, you agree to our{" "}
              <a href="/privacy-policy" className="text-violet-400 hover:text-violet-300">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/terms-of-service" className="text-violet-400 hover:text-violet-300">
                Terms of Service
              </a>
              .
            </p>
          </form>
        )}
      </div>
    </div>
  )
}

export default FormPopup

