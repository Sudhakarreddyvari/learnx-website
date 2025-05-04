"use client"

import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"
import { useLocation } from "react-router-dom"

const ContactPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    "Last Name": "",
    Phone: "",
    Email: "",
  })

  const formRef = useRef(null)
  const iframeRef = useRef(null)
  const scriptLoaded = useRef(false)

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const location = useLocation()

  // Handle body overflow when popup opens/closes
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Dynamically load Bigin script with proper initialization
  useEffect(() => {
    if (!isOpen || scriptLoaded.current) return

    const scriptId = "formScript819627000000393013"
    
    if (document.getElementById(scriptId)) {
      scriptLoaded.current = true
      return
    }

    const script = document.createElement("script")
    script.id = scriptId
    script.src = "https://in.bigin.online/org60035385701/forms/get-course-details?script=$sYG"
    script.async = true
    
    script.onload = () => {
      scriptLoaded.current = true
      console.log("Zoho Bigin script loaded successfully")
      
      // Initialize Zoho form handler after script loads
      if (window.ZohoHC) {
        window.ZohoHC.init()
      }
    }

    script.onerror = () => {
      console.error("Failed to load the Zoho Bigin script")
      setSubmitStatus("error")
    }

    document.body.appendChild(script)

    return () => {
      const existingScript = document.getElementById(scriptId)
      if (existingScript) {
        existingScript.remove()
        scriptLoaded.current = false
      }
    }
  }, [isOpen])

  // Enhanced form submission handling
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validate()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Ensure Zoho script is fully loaded
      if (!scriptLoaded.current) {
        throw new Error("Zoho script not loaded")
      }

      // Manually trigger Zoho form submission
      if (window.ZohoHC && formRef.current) {
        window.ZohoHC.submit(formRef.current.id, {
          onSuccess: function(data) {
            console.log("Form submitted successfully to Zoho:", data)
            setSubmitStatus("success")
            setIsSubmitting(false)
            setFormData({ "Last Name": "", Phone: "", Email: "" })
            
            setTimeout(() => {
              onClose()
              setSubmitStatus(null)
            }, 2000)
          },
          onError: function(error) {
            console.error("Zoho submission error:", error)
            setSubmitStatus("error")
            setIsSubmitting(false)
          }
        })
      } else {
        // Fallback to regular form submission
        formRef.current.submit()
      }
    } catch (error) {
      console.error("Submission error:", error)
      setSubmitStatus("error")
      setIsSubmitting(false)
    }
  }

  // Validation function remains the same
  const validate = () => {
    const newErrors = {}

    if (!formData["Last Name"].trim()) {
      newErrors["Last Name"] = "Name is required"
    } else if (!/^[A-Za-z\s]+$/.test(formData["Last Name"].trim())) {
      newErrors["Last Name"] = "Only letters are allowed"
    }

    if (!formData.Phone.trim()) {
      newErrors.Phone = "Phone is required"
    } else if (!/^[0-9a-zA-Z+.()\-;\s]+$/.test(formData.Phone.trim())) {
      newErrors.Phone = "Enter a valid phone number"
    }

    if (!formData.Email.trim()) {
      newErrors.Email = "Email is required"
    } else if (!/^([A-Za-z0-9-._%'+/]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,22})$/.test(formData.Email.trim())) {
      newErrors.Email = "Enter a valid email"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-4 my-8 overflow-auto" style={{ maxHeight: '90vh' }}>
          <div className="sticky top-0 bg-white z-10 p-4 border-b flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Get Course Details</h2>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close popup"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          <div className="p-6">
            <form
              id="BiginWebToRecordForm819627000000393013"
              name="BiginWebToRecordForm819627000000393013"
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5"
              method="POST"
              encType="multipart/form-data"
              acceptCharset="UTF-8"
            >
              {/* Hidden Zoho inputs - Verify these values with your Zoho Bigin form settings */}
              <input type="hidden" name="xnQsjsdp" value="f9ea54d0473d9f6b6831b9bb759fee65e7c37ec6f26ba802e817befde2c79541" />
              <input type="hidden" name="zc_gad" id="zc_gad" value="" />
              <input type="hidden" name="xmIwtLD" value="31e70886bf98209f02b0a9cdffc5588f6535ff973f227b54e4a0d67b6b863bd1008c2fd9e96d2e6498156f404ede5034" />
              <input type="hidden" name="actionType" value="Q29udGFjdHM=" />
              <input type="hidden" name="rmsg" id="rmsg" value="true" />
              <input type="hidden" name="returnURL" value={window.location.href} />
              <input type="hidden" name="zf_referrer_name" value={document.referrer} />

              {/* Name Field */}
              <div className="space-y-1">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="Last Name"
                  type="text"
                  value={formData["Last Name"]}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors["Last Name"] ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your name"
                />
                {errors["Last Name"] && (
                  <p className="mt-1 text-sm text-red-600">{errors["Last Name"]}</p>
                )}
              </div>

              {/* Phone Field */}
              <div className="space-y-1">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  name="Phone"
                  type="tel"
                  value={formData.Phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.Phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.Phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.Phone}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-1">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="Email"
                  type="email"
                  value={formData.Email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    errors.Email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.Email && (
                  <p className="mt-1 text-sm text-red-600">{errors.Email}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>

            {/* Submission Status */}
            {submitStatus === "success" && (
              <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg text-sm text-center">
                Form submitted successfully! We'll contact you shortly.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm text-center">
                Error submitting form. Please try again or contact support.
              </div>
            )}

            {/* Privacy Policy */}
            <p className="mt-6 text-xs text-gray-500 text-center">
              By submitting this form, you agree to our{" "}
              <a
                href="/privacy-policy"
                className="text-blue-600 hover:text-blue-800 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Hidden iframe for form submission */}
      <iframe
        id="hidden819627000000393013Frame"
        name="hidden819627000000393013Frame"
        style={{ display: "none" }}
        ref={iframeRef}
        title="hidden-zoho-form-frame"
      />
    </>
  )
}

export default ContactPopup