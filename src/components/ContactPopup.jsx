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

  // Mandatory fields configuration from Zoho
  const mndFields = ['Last Name', 'Phone', 'Email']
  const fldLangVal = ['Name', 'Phone', 'Email']

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
    script.src = "https://bigin.zoho.in/crm/WebformScriptServlet?rid=b75850a34780549d7c38e087646cf8bf2181238260e2102ba868c98d35efb04545b0cd2047051fc6cc38a8cb165139c2gid5165d24a217d9d7572b123b1bb4e139d4956afe4c5cdd3a3004146c049330b5d"
    script.async = true
    
    script.onload = () => {
      scriptLoaded.current = true
      console.log("Zoho Bigin script loaded successfully")
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

  // Zoho validation functions adapted for React
  const removeError = (fieldName) => {
    setErrors(prev => {
      const newErrors = { ...prev }
      delete newErrors[fieldName]
      return newErrors
    })
  }

  const setError = (fieldName, message) => {
    setErrors(prev => ({
      ...prev,
      [fieldName]: message
    }))
  }

  const validateFields = () => {
    let isValid = true

    // Validate email field
    if (formData.Email && !/^([A-Za-z0-9-._%'+/]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,22})$/.test(formData.Email)) {
      setError("Email", "Enter valid Email")
      isValid = false
    }

    // Validate phone field
    if (formData.Phone && !/^[0-9a-zA-Z+.()\-;\s]+$/.test(formData.Phone)) {
      setError("Phone", "Enter valid Phone")
      isValid = false
    }

    return isValid
  }

  const checkMandatory = () => {
    let isReturn = true

    mndFields.forEach((field, i) => {
      if (!formData[field]?.trim()) {
        setError(field, `${fldLangVal[i]} cannot be empty`)
        isReturn = false
      }
    })

    if (!validateFields()) {
      isReturn = false
    }

    return isReturn
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      removeError(name)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!checkMandatory()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Fallback to regular form submission if Zoho script isn't loaded
      if (!scriptLoaded.current) {
        throw new Error("Zoho script not loaded")
      }

      // Create hidden iframe for submission
      const iframe = document.createElement('iframe')
      iframe.name = 'hidden819627000000393013Frame'
      iframe.style.display = 'none'
      document.body.appendChild(iframe)

      // Submit the form
      formRef.current.submit()

      // Assume success after submission
      setTimeout(() => {
        setSubmitStatus("success")
        setIsSubmitting(false)
        setFormData({ "Last Name": "", Phone: "", Email: "" })
        
        setTimeout(() => {
          onClose()
          setSubmitStatus(null)
          document.body.removeChild(iframe)
        }, 2000)
      }, 1000)

    } catch (error) {
      console.error("Submission error:", error)
      setSubmitStatus("error")
      setIsSubmitting(false)
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
              className="wf-form-component"
              data-ux-form-alignment="top"
              style={{ fontFamily: "Arial", position: "relative", fontSize: "15px" }}
              method="POST"
              encType="multipart/form-data"
              acceptCharset="UTF-8"
            >
              {/* Hidden Zoho inputs */}
              <input type="text" name="xnQsjsdp" value="5165d24a217d9d7572b123b1bb4e139d4956afe4c5cdd3a3004146c049330b5d" readOnly hidden />
              <input type="hidden" name="zc_gad" id="zc_gad" value="" />
              <input type="text" name="xmIwtLD" value="b75850a34780549d7c38e087646cf8bf2181238260e2102ba868c98d35efb04545b0cd2047051fc6cc38a8cb165139c2" readOnly hidden />
              <input type="text" name="actionType" value="Q29udGFjdHM=" readOnly hidden />
              <input type="hidden" name="rmsg" id="rmsg" value="true" />
              <input type="text" name="returnURL" value="null" readOnly hidden />

              <div className="wf-header">Get Course Details</div>
              <div id="elementDiv819627000000393013" className="wf-form-wrapper">
                {/* Name Field */}
                <div className="wf-row">  
                  <div className="wf-label">Name</div>
                  <div className={`wf-field wf-field-mandatory ${errors["Last Name"] ? "wf-field-error-active" : ""}`}>
                    <div className="wf-field-inner">
                      <input
                        name="Last Name"
                        maxLength="80"
                        type="text"
                        value={formData["Last Name"]}
                        onChange={handleChange}
                        className="wf-field-item wf-field-input"
                      />
                    </div>
                    {errors["Last Name"] && (
                      <div className="wf-error-parent-ele">
                        <span className="wf-field-error">{errors["Last Name"]}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Phone Field */}
                <div className="wf-row">  
                  <div className="wf-label">Phone</div>
                  <div className={`wf-field wf-field-mandatory ${errors.Phone ? "wf-field-error-active" : ""}`}>
                    <div className="wf-field-inner">
                      <input
                        fvalidate="true"
                        ftype="mobile"
                        name="Phone"
                        maxLength="50"
                        type="text"
                        value={formData.Phone}
                        onChange={handleChange}
                        className="wf-field-item wf-field-input"
                      />
                    </div>
                    {errors.Phone && (
                      <div className="wf-error-parent-ele">
                        <span className="wf-field-error">{errors.Phone}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div className="wf-row">  
                  <div className="wf-label">Email</div>
                  <div className={`wf-field wf-field-mandatory ${errors.Email ? "wf-field-error-active" : ""}`}>
                    <div className="wf-field-inner">
                      <input
                        fvalidate="true"
                        ftype="email"
                        name="Email"
                        maxLength="100"
                        type="text"
                        value={formData.Email}
                        onChange={handleChange}
                        className="wf-field-item wf-field-input"
                      />
                    </div>
                    {errors.Email && (
                      <div className="wf-error-parent-ele">
                        <span className="wf-field-error">{errors.Email}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="wform-btn-wrap" data-ux-pos="center">
                  <button
                    id="formsubmit"
                    type="submit"
                    disabled={isSubmitting}
                    className="wf-btn"
                    style={{
                      backgroundColor: "#1980d8",
                      color: "#fff",
                      border: "1px solid #1980d8",
                      width: "auto",
                      padding: "10px 20px",
                      borderRadius: "4px",
                      fontSize: "15px",
                      cursor: "pointer",
                      fontWeight: "bold",
                      fontFamily: "inherit",
                      opacity: isSubmitting ? 0.7 : 1,
                    }}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </div>
            </form>

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
    </>
  )
}

export default ContactPopup