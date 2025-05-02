"use client"

import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"
import { useLocation } from "react-router-dom"

const ContactPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    lastName: "",
    phone: "",
    email: "",
  })

  const formRef = useRef(null)
  const iframeRef = useRef(null)

  // Helper to map React state keys to Zoho field names for submission
  const mapFormDataToZohoFields = (data) => ({
    "Last Name": data.lastName,
    "Phone": data.phone,
    "Email": data.email,
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const location = useLocation()

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

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const onLoad = () => {
      if (isSubmitting) {
        // Assume submission success if iframe loads content
        setSubmitStatus("success")
        setIsSubmitting(false)
        setFormData({ lastName: "", phone: "", email: "" })
        setTimeout(() => {
          onClose()
          setSubmitStatus(null)
        }, 2000)
      }
    }

    iframe.addEventListener("load", onLoad)
    return () => {
      iframe.removeEventListener("load", onLoad)
    }
  }, [isSubmitting, onClose])

  const validate = () => {
    const newErrors = {}

    // Last Name: mandatory, only letters allowed (like provided form)
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name cannot be empty"
    } else if (!/^[A-Za-z\s]+$/.test(formData.lastName.trim())) {
      newErrors.lastName = "Only letters are allowed."
    }

    // Phone: optional but if present validate mobile pattern (alphanumeric, +, (), -, ., spaces)
    if (formData.phone.trim()) {
      if (!/^[0-9a-zA-Z+.()\-;\s]+$/.test(formData.phone.trim())) {
        newErrors.phone = "Enter valid Phone"
      }
    }

    // Email: optional but if present validate email format
    if (formData.email.trim()) {
      if (!/^([A-Za-z0-9-._%'+/]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,22})$/.test(formData.email.trim())) {
        newErrors.email = "Enter valid Email"
      }
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
    // Remove error on change
    setErrors((prev) => {
      const newErrors = { ...prev }
      delete newErrors[name]
      return newErrors
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) {
      return
    }
    setIsSubmitting(true)
    setSubmitStatus(null)
    // Submit the form to Zoho by submitting the form element targeting the hidden iframe
    if (formRef.current) {
      formRef.current.submit()
    }
  }

  if (!isOpen) return null

  return (
    <>
      <iframe
        id="hidden819627000000393013Frame"
        name="hidden819627000000393013Frame"
        style={{ display: "none" }}
        ref={iframeRef}
        title="hidden-zoho-form-frame"
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
        <div className="relative w-full max-w-md bg-gray-900 rounded-xl shadow-xl border border-gray-800">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            aria-label="Close form"
          >
            <X size={24} />
          </button>

          <div className="p-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-white">Get Course Details</h3>
              <p className="text-gray-400 mt-2">Fill out the form below to receive course information</p>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-4"
              noValidate
              method="POST"
              encType="multipart/form-data"
              target="hidden819627000000393013Frame"
              acceptCharset="UTF-8"
              action="https://bigin.zoho.in/crm/WebToLeadForm"
            >
              {/* Hidden Zoho inputs */}
              <input type="text" name="xnQsjsdp" value="1bd97c9d650c864ac3393e03e0215e584397f897d454c77aa497f2711cdfa4c0" readOnly hidden />
              <input type="hidden" name="zc_gad" id="zc_gad" value="" />
              <input type="text" name="xmIwtLD" value="db288c8984051944867cb8f35575073ebf025f211c035d6e7b2c542c9f9266a6c6033f64ce05c89ad596ac61909950fe" readOnly hidden />
              <input type="text" name="actionType" value="Q29udGFjdHM=" readOnly hidden />
              <input type="hidden" name="rmsg" id="rmsg" value="true" />
              <input type="text" name="returnURL" value="null" readOnly hidden />

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                  Last Name<span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-gray-400 ${
                    errors.lastName ? "border-red-500" : "border-gray-700"
                  }`}
                  placeholder="Enter your last name"
                  aria-invalid={errors.lastName ? "true" : "false"}
                  aria-describedby={errors.lastName ? "lastName-error" : undefined}
                  required
                />
                {errors.lastName && (
                  <p id="lastName-error" className="text-red-500 text-xs mt-1">
                    {errors.lastName}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-gray-400 ${
                    errors.phone ? "border-red-500" : "border-gray-700"
                  }`}
                  placeholder="Enter your phone number"
                  aria-invalid={errors.phone ? "true" : "false"}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="text-red-500 text-xs mt-1">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-gray-800 border rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500 text-white placeholder-gray-400 ${
                    errors.email ? "border-red-500" : "border-gray-700"
                  }`}
                  placeholder="Enter your email"
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-500 text-xs mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-gradient-to-r from-violet-600 to-rose-500 text-white rounded-lg hover:from-violet-700 hover:to-rose-600 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>

              {submitStatus === "success" && (
                <div className="text-emerald-500 text-sm text-center">Form submitted successfully!</div>
              )}

              {submitStatus === "error" && (
                <div className="text-rose-500 text-sm text-center">Error submitting form. Please try again.</div>
              )}
            </form>

            <p className="text-xs text-gray-400 text-center mt-6">
              By submitting this form, you agree to our{" "}
              <a href="/privacy-policy" className="text-violet-400 hover:text-violet-300">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPopup
