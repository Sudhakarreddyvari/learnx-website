"use client"

import { X } from "lucide-react"
import { useState, useEffect } from "react"

const FormPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    lastName: "",
    phone: "",
    email: "",
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

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

  // Integrate Zoho Bigin validation functions
  useEffect(() => {
    if (isOpen) {
      // Make sure Zoho validation functions are available
      window.mndFileds = new Array("Last\\x20Name")
      window.fldLangVal = new Array("Last Name")

      window.removeError = (fieldObj) => {
        var parentElement = fieldObj.closest(".wf-field"),
          childEle = parentElement.getElementsByClassName("wf-field-error")[0]
        if (childEle) {
          parentElement.classList.remove("wf-field-error-active")
          parentElement.removeChild(parentElement.getElementsByClassName("wf-field-error")[0])
          parentElement.parentElement.classList.remove("wf-row-with-supplementary")
        }
      }

      window.setError = (fieldObj, label) => {
        var parentElement = fieldObj.closest(".wf-field"),
          childEle = parentElement.getElementsByClassName("wf-field-error")[0]
        if (!childEle) {
          var spanEle = document.createElement("SPAN")
          spanEle.setAttribute("class", "wf-field-error wf-row-with-supplementary")
          spanEle.innerHTML = label
          parentElement.append(spanEle)
          parentElement.classList.add("wf-field-error-active")
          parentElement.parentElement.classList.add("wf-row-with-supplementary")
        }
      }

      window.validateFields819627000000348119 = () => {
        var isReturn = true
        var form = document.forms["BiginWebToRecordForm819627000000348119"]
        if (!form) return true

        var validateFld = form.querySelectorAll("[fvalidate=true]")
        var i
        for (i = 0; i < validateFld.length; i++) {
          var validateFldVal = validateFld[i].value
          if (validateFldVal !== "") {
            var fLabel =
              validateFld[i].parentElement.parentElement.parentElement.getElementsByClassName("wf-label")[0].innerHTML
            switch (validateFld[i].getAttribute("ftype")) {
              case "email":
                if (validateFldVal.match(/^([A-Za-z0-9-._%'+/]+@[A-Za-z0-9.-]+.[a-zA-Z]{2,22})$/) === null) {
                  window.setError(validateFld[i], "Enter valid " + fLabel)
                  isReturn = false
                }
                break
              case "mobile":
                if (validateFldVal.match(/^[0-9a-zA-Z+.()\-;\s]+$/) === null) {
                  window.setError(validateFld[i], "Enter valid " + fLabel)
                  isReturn = false
                }
                break
            }
          }
        }
        return isReturn
      }

      window.validateForm819627000000348119 = () => {
        var isReturn = true
        let i
        for (i = 0; i < window.mndFileds.length; i++) {
          var fieldObj = document.forms["BiginWebToRecordForm819627000000348119"][window.mndFileds[i]]
          if (fieldObj) {
            if (fieldObj.value.replace(/^\s+|\s+$/g, "").length == 0) {
              window.setError(fieldObj, window.fldLangVal[i] + " cannot be empty")
              isReturn = false
            }
          }
        }

        if (!window.validateFields819627000000348119()) {
          isReturn = false
        }

        if (!isReturn) {
          var errEle = document.getElementsByClassName("wf-field-error")
          if (errEle && errEle.length > 0) {
            var inputEle = errEle[0].parentElement.getElementsByTagName("input")
            if (inputEle && inputEle.length > 0) {
              inputEle[0].focus()
            }
          }
        } else {
          document.getElementById("formsubmit").disabled = true
        }
        return isReturn
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleInputChange = (e) => {
    const { name, value } = e.target

    // Map form field names to state properties
    const fieldMapping = {
      "Last Name": "lastName",
      Phone: "phone",
      Email: "email",
    }

    const stateField = fieldMapping[name] || name

    setFormData({
      ...formData,
      [stateField]: value,
    })

    // Clear error when user starts typing
    if (errors[stateField]) {
      setErrors({
        ...errors,
        [stateField]: "",
      })
    }

    // Call Zoho's removeError function
    if (window.removeError) {
      window.removeError(e.target)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Manually validate the form
    let isValid = true
    const newErrors = {}

    // Validate name (required)
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Full Name is required"
      isValid = false
    }

    // Validate phone (if provided)
    if (formData.phone && !/^[0-9+\-().\\s]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
      isValid = false
    }

    // Validate email (if provided)
    if (formData.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
      isValid = false
    }

    setErrors(newErrors)

    if (isValid) {
      setIsSubmitting(true)

      // Directly submit to Zoho Bigin
      const form = document.getElementById("BiginWebToRecordForm819627000000348119")

      // Update form fields with current state values
      if (form) {
        form.elements["Last Name"].value = formData.lastName
        form.elements["Phone"].value = formData.phone
        form.elements["Email"].value = formData.email

        // Show thank you message
        setTimeout(() => {
          setShowThankYou(true)

          // Submit the form after a short delay
          setTimeout(() => {
            form.submit()
          }, 2000)
        }, 1000)
      } else {
        console.error("Form element not found")
        setIsSubmitting(false)
      }
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
                action="https://bigin.zoho.in/crm/WebToContactForm"
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
                    id="Phone"
                    name="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone"
                    fvalidate="true"
                    ftype="mobile"
                    className={`w-full p-3 bg-white/10 border ${
                      errors.phone ? "border-red-500" : "border-gray-700"
                    } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-500`}
                  />
                  {errors.phone && <span className="text-sm text-red-500 mt-1 block">{errors.phone}</span>}
                </div>

                <div className="wf-field">
                  <input
                    type="email"
                    id="Email"
                    name="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    fvalidate="true"
                    ftype="email"
                    className={`w-full p-3 bg-white/10 border ${
                      errors.email ? "border-red-500" : "border-gray-700"
                    } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-violet-500`}
                  />
                  {errors.email && <span className="text-sm text-red-500 mt-1 block">{errors.email}</span>}
                </div>

                <button
                  id="formsubmit"
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

