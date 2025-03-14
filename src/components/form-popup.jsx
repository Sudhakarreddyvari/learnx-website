"use client"

import { X } from "lucide-react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const FormPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    lastName: "",
    phone: "",
    email: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isOpen) {
      // Reset form state when popup is closed
      setFormData({
        lastName: "",
        phone: "",
        email: "",
      })
      setErrors({})
      setShowThankYou(false)
      setIsSubmitting(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Full Name is required"
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^[0-9+\-().\\s]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate form submission to Zoho Bigin
      setTimeout(() => {
        setShowThankYou(true)

        // Redirect to thank you page after showing the thank you message briefly
        setTimeout(() => {
          onClose()
          navigate("/thank-you")
        }, 2000)
      }, 1500)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-[#1a1f2e] rounded-lg shadow-xl animate-in fade-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close form"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          {showThankYou ? (
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
              <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
              <p className="text-gray-300 mb-6">Your message has been received. We'll get back to you shortly.</p>
              <div className="flex items-center justify-center">
                <div className="animate-spin h-5 w-5 mr-3 border-t-2 border-b-2 border-violet-500 rounded-full"></div>
                <span>Redirecting...</span>
              </div>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="wf-field">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className={`w-full p-3 bg-white/10 border ${
                      errors.lastName ? "border-red-500" : "border-gray-700"
                    } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-500`}
                  />
                  {errors.lastName && <span className="text-sm text-red-500 mt-1 block">{errors.lastName}</span>}
                </div>

                <div className="wf-field">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    className={`w-full p-3 bg-white/10 border ${
                      errors.phone ? "border-red-500" : "border-gray-700"
                    } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-500`}
                  />
                  {errors.phone && <span className="text-sm text-red-500 mt-1 block">{errors.phone}</span>}
                </div>

                <div className="wf-field">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className={`w-full p-3 bg-white/10 border ${
                      errors.email ? "border-red-500" : "border-gray-700"
                    } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-500`}
                  />
                  {errors.email && <span className="text-sm text-red-500 mt-1 block">{errors.email}</span>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full p-3 bg-gradient-to-r from-violet-600 to-rose-500 hover:from-violet-700 hover:to-rose-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
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
                      Submitting...
                    </div>
                  ) : (
                    "Submit"
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default FormPopup

