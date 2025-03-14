"use client"

import { X } from "lucide-react"
import { useState, useEffect } from "react"

const FormPopup = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  useEffect(() => {
    if (!isOpen) {
      setShowThankYou(false)
      setIsSubmitting(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Get the Zoho form
    const form = document.getElementById("BiginWebToRecordForm819627000000348119")

    // Check if the form is valid using Zoho's validation function
    if (window.validateForm819627000000348119 && window.validateForm819627000000348119()) {
      // Show thank you message first (since Zoho form submission will navigate away)
      setShowThankYou(true)

      // Submit the form after a short delay to allow the thank you message to be seen
      setTimeout(() => {
        form.submit()
      }, 2000)
    } else {
      // If validation fails, reset the submitting state
      setIsSubmitting(false)
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

              <form
                id="BiginWebToRecordForm819627000000348119"
                name="BiginWebToRecordForm819627000000348119"
                method="POST"
                action="https://bigin.zoho.in/crm/WebToRecordForm"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input
                  type="hidden"
                  name="xnQsjsdp"
                  value="d490dd6acf390799ab81adde5eff5244ccad4e07e5d096686dec9cebb88b67ef"
                />
                <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                <input
                  type="hidden"
                  name="xmIwtLD"
                  value="fcd2a5e065b4d7d651fbc84c00a15d856599ab91759cb86a5cf6f57d4b14bb530fdd7ad1c2b7797f83cb164641f250d4"
                />
                <input type="hidden" name="actionType" value="Q29udGFjdHM=" />
                <input type="hidden" name="returnURL" value="https://learnxglobal.com/thank-you" />

                <div className="wf-field">
                  <input
                    type="text"
                    id="Last_Name"
                    name="Last Name"
                    placeholder="Full Name"
                    fvalidate="true"
                    required
                    className="w-full p-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-500"
                  />
                </div>

                <div className="wf-field">
                  <input
                    type="tel"
                    id="Phone"
                    name="Phone"
                    placeholder="Phone"
                    fvalidate="true"
                    ftype="mobile"
                    required
                    className="w-full p-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-500"
                  />
                </div>

                <div className="wf-field">
                  <input
                    type="email"
                    id="Email"
                    name="Email"
                    placeholder="Email"
                    fvalidate="true"
                    ftype="email"
                    required
                    className="w-full p-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-500"
                  />
                </div>

                <button
                  id="formsubmit"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full p-3 bg-gradient-to-r from-violet-600 to-rose-500 hover:from-violet-700 hover:to-rose-600 text-white font-medium rounded-lg transition-colors"
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

