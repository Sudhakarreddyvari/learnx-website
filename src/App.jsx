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
import FloatingPhoneButton from "./components/FloatingPhoneButton"
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
import ScrollToTop from "./ScrollToTop"

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  useEffect(() => {
    // Initialize Zoho SalesIQ - this must be done exactly as Zoho specifies
    window.$zoho = window.$zoho || {}
    window.$zoho.salesiq = window.$zoho.salesiq || {
      widgetcode: "siqaf431e377ca35ef1a2cb5d7d9740fac09c36b12e3d797cd4e22a718bae4b60bb0ab19819e9e94bd6088d0bbad1b2fc1a",
      values: {},
      ready: () => {},
    }

    // Create and append the script element
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.id = "zsiqscript"
    script.defer = true
    script.src = "https://salesiq.zoho.in/widget"

    // Add the script to the document
    const firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag.parentNode.insertBefore(script, firstScriptTag)

    return () => {
      // Clean up script when component unmounts
      const zsiqScript = document.getElementById("zsiqscript")
      if (zsiqScript) zsiqScript.remove()
    }
  }, [])

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

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
      <ScrollToTop />
      <div className="App">
        <FormPopup isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        <FloatingPhoneButton phoneNumber="+91 8019333796" />
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

