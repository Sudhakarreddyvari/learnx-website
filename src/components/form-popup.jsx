"use client"

import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"
import { useNavigate } from "react-router-dom"

const FormPopup = ({ isOpen, onClose }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    "Last Name": "",
    Phone: "",
    Email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef(null)
  const zohoScriptsLoaded = useRef(false)

  // Load Zoho scripts when component mounts
  useEffect(() => {
    if (!zohoScriptsLoaded.current) {
      // Load SalesIQ script
      const salesIQScript = document.createElement("script")
      salesIQScript.type = "text/javascript"
      salesIQScript.id = "zsiqscript"
      salesIQScript.defer = true
      salesIQScript.src = "https://salesiq.zoho.in/widget"
      document.body.appendChild(salesIQScript)

      // Load Analytics script
      const analyticsScript = document.createElement("script")
      analyticsScript.id = "wf_anal"
      analyticsScript.src =
        "https://crm.zohopublic.in/crm/WebFormAnalyticsServeServlet?rid=c69ae0692861057b61a5016030db5005bf4d02daa9bc103595be4b46a6f2fcb3e315750f97d17629511be567fc2d375fgid63a965e22d05c8faf1964473ae6977d3006a4307a4b51795c18a49d408f65147gidaa19a3b6681703cd9ed0d812272958930c8521e01e8b1c6be13e3e9f9735922egidf1a1687e9612a13f87fe2a0691cf533bf34eec5f6bc8439b76e1639b8e6763be&tw=fcb5c3c35f1c41a945043a36703e9b8acf01e50d21bfd384eaee624fd3beffea"
      document.body.appendChild(analyticsScript)

      // Initialize Zoho SalesIQ
      window.$zoho = window.$zoho || {}
      window.$zoho.salesiq = window.$zoho.salesiq || {
        widgetcode:
          "siqaf431e377ca35ef1a2cb5d7d9740fac09c36b12e3d797cd4e22a718bae4b60bb0ab19819e9e94bd6088d0bbad1b2fc1a",
        values: {},
        ready: () => {},
      }

      zohoScriptsLoaded.current = true
    }
  }, [])

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

  if (!isOpen) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const validateEmail = () => {
    const emailVal = formData["Email"]
    if (emailVal.replace(/^\s+|\s+$/g, "").length !== 0) {
      const atpos = emailVal.indexOf("@")
      const dotpos = emailVal.lastIndexOf(".")
      if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
        alert("Please enter a valid email address.")
        return false
      }
    }
    return true
  }

  // Track visitor function from Zoho
  const trackVisitor = () => {
    try {
      if (window.$zoho) {
        // Set visitor name
        const name = formData["Last Name"]
        if (name) {
          window.$zoho.salesiq.visitor.name(name)
        }

        // Set visitor email
        const email = formData["Email"]
        if (email) {
          window.$zoho.salesiq.visitor.email(email)
        }

        // Set unique visitor ID if available
        if (window.$zoho.salesiq.visitor && typeof window.$zoho.salesiq.visitor.uniqueid === "function") {
          const uniqueId = window.$zoho.salesiq.visitor.uniqueid()
          // You would normally set this to a hidden field in the form
          console.log("Visitor unique ID:", uniqueId)
        }
      }
    } catch (e) {
      console.error("Error tracking visitor:", e)
    }
  }

  const checkMandatory = () => {
    const mndFields = ["Last Name", "Email", "Phone"]
    const fldLangVal = ["Name", "Email", "Phone"]

    for (let i = 0; i < mndFields.length; i++) {
      const fieldValue = formData[mndFields[i]]
      if (!fieldValue || fieldValue.replace(/^\s+|\s+$/g, "").length === 0) {
        alert(fldLangVal[i] + " cannot be empty.")
        return false
      }
    }

    // Track visitor before validating email
    trackVisitor()

    return validateEmail()
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (checkMandatory()) {
      setIsSubmitting(true)

      // In a real implementation, you would submit to Zoho CRM here
      // For frontend-only, we'll simulate the submission

      // Disable submit button as Zoho does
      if (formRef.current) {
        const submitBtn = formRef.current.querySelector(".formsubmit")
        if (submitBtn) {
          submitBtn.setAttribute("disabled", true)
        }
      }

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false)
        onClose()
        navigate("/thank-you")
      }, 1500)
    }
  }

  const handleReset = () => {
    setFormData({
      "Last Name": "",
      Phone: "",
      Email: "",
    })
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-xl animate-in fade-in duration-300 border border-violet-500/20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors z-10"
          aria-label="Close form"
        >
          <X size={24} />
        </button>

        <div
          id="crmWebToEntityForm"
          className="zcwf_lblLeft crmWebToEntityForm"
          style={{ backgroundColor: "white", color: "black", maxWidth: "600px" }}
        >
          <meta name="viewport" content="width=device-width, initial-scale: 1.0" />

          <form
            id="webform890464000000384209"
            ref={formRef}
            name="WebToLeads890464000000384209"
            onSubmit={handleSubmit}
            className="p-6"
            accept-charset="UTF-8"
          >
            {/* Hidden fields */}
            <input
              type="text"
              style={{ display: "none" }}
              name="xnQsjsdp"
              value="bb1e8dbdabbc39720245560d3b7d60bb21e4109c9b1e5bdf8153aff97e62bdfa"
            />
            <input type="hidden" name="zc_gad" id="zc_gad" value="" />
            <input
              type="text"
              style={{ display: "none" }}
              name="xmIwtLD"
              value="bc4de0647e6f96c25cb015c11ca883097f6c34fe20a001042f1847abc57ef6edee24f8e3ba15b2867f4a8f22ded4e3f9"
            />
            <input type="text" style={{ display: "none" }} name="actionType" value="TGVhZHM=" />
            <input type="text" style={{ display: "none" }} name="returnURL" value="https://learn-x.in/thank-you/" />
            <input type="text" style={{ display: "none" }} id="ldeskuid" name="ldeskuid" />
            <input type="text" style={{ display: "none" }} id="LDTuvid" name="LDTuvid" />

            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-800">Get Started with LearnX</h3>
              <p className="text-gray-600 mt-2">Fill out the form below and our team will get back to you shortly</p>
            </div>

            <div className="zcwf_row mb-4">
              <div className="zcwf_col_lab" style={{ fontSize: "12px", fontFamily: "Arial" }}>
                <label htmlFor="Last_Name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name<span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <div className="zcwf_col_fld">
                <input
                  type="text"
                  id="Last_Name"
                  name="Last Name"
                  value={formData["Last Name"]}
                  onChange={handleChange}
                  aria-required="true"
                  aria-label="Last Name"
                  aria-valuemax="80"
                  maxLength="80"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="zcwf_col_help"></div>
              </div>
            </div>

            <div className="zcwf_row mb-4">
              <div className="zcwf_col_lab" style={{ fontSize: "12px", fontFamily: "Arial" }}>
                <label htmlFor="Phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone<span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <div className="zcwf_col_fld">
                <input
                  type="text"
                  id="Phone"
                  name="Phone"
                  value={formData["Phone"]}
                  onChange={handleChange}
                  aria-required="true"
                  aria-label="Phone"
                  aria-valuemax="30"
                  maxLength="30"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="zcwf_col_help"></div>
              </div>
            </div>

            <div className="zcwf_row mb-4">
              <div className="zcwf_col_lab" style={{ fontSize: "12px", fontFamily: "Arial" }}>
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email<span style={{ color: "red" }}>*</span>
                </label>
              </div>
              <div className="zcwf_col_fld">
                <input
                  type="text"
                  ftype="email"
                  id="Email"
                  name="Email"
                  value={formData["Email"]}
                  onChange={handleChange}
                  aria-required="true"
                  aria-label="Email"
                  aria-valuemax="100"
                  maxLength="100"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="zcwf_col_help"></div>
              </div>
            </div>

            <div className="zcwf_row mt-6">
              <div className="zcwf_col_lab"></div>
              <div className="zcwf_col_fld flex gap-4">
                <button
                  type="submit"
                  id="formsubmit"
                  disabled={isSubmitting}
                  className="formsubmit zcwf_button px-6 py-2 bg-gradient-to-r from-[#0279FF] to-[#00A3F3] text-white font-medium rounded-md hover:opacity-90 transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
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
                    </span>
                  ) : (
                    "Submit"
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="zcwf_button px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>

            <p className="text-xs text-gray-500 text-center mt-6">
              By submitting this form, you agree to our{" "}
              <a href="/privacy-policy" className="text-blue-600 hover:text-blue-800">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/terms-of-service" className="text-blue-600 hover:text-blue-800">
                Terms of Service
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormPopup

