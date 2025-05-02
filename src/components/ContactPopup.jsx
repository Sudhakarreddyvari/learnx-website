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
    // Dynamically load Zoho WebformScriptServlet script
    const script = document.createElement("script")
    script.id = "wf_script"
    script.src =
      "https://bigin.zoho.in/crm/WebformScriptServlet?rid=a135b800a3ecb60a4e110e8e96cc18f6fb3a58a8457b5a1ce12fcc4f0dc144d516f9c674f950d6a174cd29283aebcf17gida154bf9892c9f2072c6ad1be42488e87b18322c4b2da661b31fb06fbdaaf0a4a"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  useEffect(() => {
    const iframe = iframeRef.current
    if (!iframe) return

    const onLoad = () => {
      if (isSubmitting) {
        // Assume submission success if iframe loads content
        setSubmitStatus("success")
        setIsSubmitting(false)
        setFormData({ "Last Name": "", Phone: "", Email: "" })
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

    // Last Name: mandatory, only letters allowed
    if (!formData["Last Name"].trim()) {
      newErrors["Last Name"] = "Last Name cannot be empty"
    } else if (!/^[A-Za-z\s]+$/.test(formData["Last Name"].trim())) {
      newErrors["Last Name"] = "Only letters are allowed."
    }

    // Phone: optional but if present validate mobile pattern (alphanumeric, +, (), -, ., spaces)
    if (formData.Phone.trim()) {
      if (!/^[0-9a-zA-Z+.()\-;\s]+$/.test(formData.Phone.trim())) {
        newErrors.Phone = "Enter valid Phone"
      }
    }

    // Email: optional but if present validate email format
    if (formData.Email.trim()) {
      if (!/^([A-Za-z0-9-._%'+/]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,22})$/.test(formData.Email.trim())) {
        newErrors.Email = "Enter valid Email"
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
              target="hidden819627000000393013Frame"
              acceptCharset="UTF-8"
            >
              {/* Hidden Zoho inputs */}
              <input type="text" name="xnQsjsdp" value="a154bf9892c9f2072c6ad1be42488e87b18322c4b2da661b31fb06fbdaaf0a4a" readOnly hidden />
              <input type="hidden" name="zc_gad" id="zc_gad" value="" />
              <input type="text" name="xmIwtLD" value="a135b800a3ecb60a4e110e8e96cc18f6fb3a58a8457b5a1ce12fcc4f0dc144d516f9c674f950d6a174cd29283aebcf17" readOnly hidden />
              <input type="text" name="actionType" value="Q29udGFjdHM=" readOnly hidden />
              <input type="hidden" name="rmsg" id="rmsg" value="true" />
              <input type="text" name="returnURL" value="null" readOnly hidden />

              <div className="wf-header">Get Course Details</div>
              <div id="elementDiv819627000000393013" className="wf-form-wrapper">
                <div className="wf-row">
                  <div className="wf-label">Name</div>
                  <div className="wf-field wf-field-mandatory">
                    <div className="wf-field-inner">
                      <input
                        name="Last Name"
                        maxLength="80"
                        type="text"
                        value={formData["Last Name"]}
                        onChange={handleChange}
                        className={`wf-field-item wf-field-input ${
                          errors["Last Name"] ? "border-red-500" : ""
                        }`}
                        onInput={() => {
                          if (errors["Last Name"]) {
                            setErrors((prev) => {
                              const newErrors = { ...prev }
                              delete newErrors["Last Name"]
                              return newErrors
                            })
                          }
                        }}
                      />
                    </div>
                    {errors["Last Name"] && (
                      <p className="text-red-500 text-xs mt-1">{errors["Last Name"]}</p>
                    )}
                  </div>
                </div>
                <div className="wf-row">
                  <div className="wf-label">Phone</div>
                  <div className="wf-field">
                    <div className="wf-field-inner">
                      <input
                        fvalidate="true"
                        ftype="mobile"
                        name="Phone"
                        maxLength="50"
                        type="text"
                        value={formData.Phone}
                        onChange={handleChange}
                        className={`wf-field-item wf-field-input ${errors.Phone ? "border-red-500" : ""}`}
                        onInput={() => {
                          if (errors.Phone) {
                            setErrors((prev) => {
                              const newErrors = { ...prev }
                              delete newErrors.Phone
                              return newErrors
                            })
                          }
                        }}
                      />
                    </div>
                    {errors.Phone && <p className="text-red-500 text-xs mt-1">{errors.Phone}</p>}
                  </div>
                </div>
                <div className="wf-row">
                  <div className="wf-label">Email</div>
                  <div className="wf-field">
                    <div className="wf-field-inner">
                      <input
                        fvalidate="true"
                        ftype="email"
                        name="Email"
                        maxLength="100"
                        type="text"
                        value={formData.Email}
                        onChange={handleChange}
                        className={`wf-field-item wf-field-input ${errors.Email ? "border-red-500" : ""}`}
                        onInput={() => {
                          if (errors.Email) {
                            setErrors((prev) => {
                              const newErrors = { ...prev }
                              delete newErrors.Email
                              return newErrors
                            })
                          }
                        }}
                      />
                    </div>
                    {errors.Email && <p className="text-red-500 text-xs mt-1">{errors.Email}</p>}
                  </div>
                </div>
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
                      opacity: isSubmitting ? 0.5 : 1,
                      pointerEvents: isSubmitting ? "none" : "auto",
                    }}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </div>
            </form>

            {submitStatus === "success" && (
              <div className="text-emerald-500 text-sm text-center mt-4">Form submitted successfully!</div>
            )}

            {submitStatus === "error" && (
              <div className="text-rose-500 text-sm text-center mt-4">Error submitting form. Please try again.</div>
            )}

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
