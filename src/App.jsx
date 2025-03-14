"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import AIMachineLearningCourse from "./pages/ai-ml-course"
import DataScienceCourse from "./pages/data-science-course"
import CybersecurityCourse from "./pages/cybersecurity-course"
import CloudComputingCourse from "./pages/cloud-computing-course"
import BlockchainCourse from "./pages/blockchain-course"
import DevOpsCourse from "./pages/devops-course"
import UIUXDesignCourse from "./pages/ui-ux-design-course"
import FullStackDevelopmentCourse from "./pages/full-stack-development-course"
import DigitalMarketingCourse from "./pages/digital-marketing-course"
import AutomationTestingCourse from "./pages/automation-testing-course"
import SalesforceCourse from "./pages/salesforce-course"
import SalesforceCPQCourse from "./pages/salesforce-cpq-course"
import SalesforceAgentForceCourse from "./pages/salesforce-agent-force-course"
import BusinessAnalystCourse from "./pages/business-analyst-course"
import FormPopup from "./components/form-popup"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/about-page"
import PrivacyPolicyPage from "./pages/privacy-policy-page"
import RazorpayPolicyPage from "./pages/razorpay-policy-page"
import TermsOfServicePage from "./pages/terms-of-service-page"
import RefundPolicyPage from "./pages/refund-policy-page"
import ContactPage from "./pages/contact-page"
import FAQPage from "./pages/faq-page"
import AllCoursesPage from "./pages/all-courses-page"
import ThankYouPage from "./pages/thank-you-page"

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Add Zoho form validation functions to window
    window.mndFileds = new Array("Last\x20Name")
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

    return () => {
      // Clean up the event listener
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScroll = () => {
    // Your scroll handling logic here
  }

  return (
    <Router>
      <div className="App">
        <FormPopup isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        <Routes>
          <Route path="/" element={<HomePage setIsFormOpen={setIsFormOpen} />} />

          {/* Course Routes */}
          <Route path="/ai-ml-course" element={<AIMachineLearningCourse setIsFormOpen={setIsFormOpen} />} />
          <Route path="/data-science-course" element={<DataScienceCourse setIsFormOpen={setIsFormOpen} />} />
          <Route path="/cybersecurity-course" element={<CybersecurityCourse setIsFormOpen={setIsFormOpen} />} />
          <Route path="/cloud-computing-course" element={<CloudComputingCourse setIsFormOpen={setIsFormOpen} />} />
          <Route path="/blockchain-course" element={<BlockchainCourse setIsFormOpen={setIsFormOpen} />} />
          <Route path="/devops-course" element={<DevOpsCourse setIsFormOpen={setIsFormOpen} />} />
          <Route path="/ui-ux-design-course" element={<UIUXDesignCourse setIsFormOpen={setIsFormOpen} />} />
          <Route
            path="/full-stack-development-course"
            element={<FullStackDevelopmentCourse setIsFormOpen={setIsFormOpen} />}
          />
          <Route path="/digital-marketing-course" element={<DigitalMarketingCourse setIsFormOpen={setIsFormOpen} />} />
          <Route
            path="/automation-testing-course"
            element={<AutomationTestingCourse setIsFormOpen={setIsFormOpen} />}
          />
          <Route path="/salesforce-course" element={<SalesforceCourse setIsFormOpen={setIsFormOpen} />} />
          <Route path="/salesforce-cpq-course" element={<SalesforceCPQCourse setIsFormOpen={setIsFormOpen} />} />
          <Route
            path="/salesforce-agent-force-course"
            element={<SalesforceAgentForceCourse setIsFormOpen={setIsFormOpen} />}
          />
          <Route path="/business-analyst-course" element={<BusinessAnalystCourse setIsFormOpen={setIsFormOpen} />} />

          {/* Information Pages */}
          <Route path="/about" element={<AboutPage setIsFormOpen={setIsFormOpen} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage setIsFormOpen={setIsFormOpen} />} />
          <Route path="/razorpay-policy" element={<RazorpayPolicyPage setIsFormOpen={setIsFormOpen} />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage setIsFormOpen={setIsFormOpen} />} />
          <Route path="/refund-policy" element={<RefundPolicyPage setIsFormOpen={setIsFormOpen} />} />
          <Route path="/contact" element={<ContactPage setIsFormOpen={setIsFormOpen} />} />
          <Route path="/faq" element={<FAQPage setIsFormOpen={setIsFormOpen} />} />
          <Route path="/courses" element={<AllCoursesPage setIsFormOpen={setIsFormOpen} />} />
          <Route path="/thank-you" element={<ThankYouPage setIsFormOpen={setIsFormOpen} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

