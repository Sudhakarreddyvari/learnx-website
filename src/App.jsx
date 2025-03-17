"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/about-page"
import ContactPage from "./pages/contact-page"
import FaqPage from "./pages/faq-page"
import AllCoursesPage from "./pages/all-courses-page"
import AiMlCourse from "./pages/ai-ml-course"
import DataScienceCourse from "./pages/data-science-course"
import CybersecurityCourse from "./pages/cybersecurity-course"
import CloudComputingCourse from "./pages/cloud-computing-course"
import BlockchainCourse from "./pages/blockchain-course"
import DevopsCourse from "./pages/devops-course"
import UiUxDesignCourse from "./pages/ui-ux-design-course"
import FullStackDevelopmentCourse from "./pages/full-stack-development-course"
import DigitalMarketingCourse from "./pages/digital-marketing-course"
import AutomationTestingCourse from "./pages/automation-testing-course"
import SalesforceCourse from "./pages/salesforce-course"
import SalesforceCpqCourse from "./pages/salesforce-cpq-course"
import SalesforceAgentForceCourse from "./pages/salesforce-agent-force-course"
import BusinessAnalystCourse from "./pages/business-analyst-course"
import PrivacyPolicyPage from "./pages/privacy-policy-page"
import RazorpayPolicyPage from "./pages/razorpay-policy-page"
import TermsOfServicePage from "./pages/terms-of-service-page"
import RefundPolicyPage from "./pages/refund-policy-page"
import ThankYouPage from "./pages/thank-you-page"
import ScrollToTop from "./ScrollToTop"
import FormPopup from "./components/form-popup"
import FloatingPhoneButton from "./components/FloatingPhoneButton"

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  // Initialize Zoho SalesIQ
  useEffect(() => {
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.async = true
    script.src = "https://salesiq.zoho.in/widget"

    // Add the Zoho SalesIQ widget code
    const initSalesIQ = () => {
      window.$zoho = window.$zoho || {}
      window.$zoho.salesiq = window.$zoho.salesiq || {
        widgetcode: "siq4b6d0f4b6a6d5e3c7e0cd6b9c7a0e3c9a3c1c5c1c3d0d0d6d2d5b3a3b5e1",
        values: {},
        ready: () => {},
      }

      var d = document
      var s = d.createElement("script")
      s.type = "text/javascript"
      s.id = "zsiqscript"
      s.defer = true
      s.src = "https://salesiq.zoho.in/widget"
      var t = d.getElementsByTagName("script")[0]
      t.parentNode.insertBefore(s, t)
    }

    // Execute the initialization function
    initSalesIQ()

    // Clean up
    return () => {
      // Remove the script when component unmounts
      const scriptElement = document.getElementById("zsiqscript")
      if (scriptElement) {
        scriptElement.remove()
      }
    }
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <FormPopup isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <FloatingPhoneButton phoneNumber="+91 80193 33796" />
      <Routes>
        <Route path="/" element={<HomePage setIsFormOpen={setIsFormOpen} />} />
        <Route path="/about" element={<AboutPage setIsFormOpen={setIsFormOpen} />} />
        <Route path="/contact" element={<ContactPage setIsFormOpen={setIsFormOpen} />} />
        <Route path="/faq" element={<FaqPage setIsFormOpen={setIsFormOpen} />} />
        <Route path="/all-courses" element={<AllCoursesPage setIsFormOpen={setIsFormOpen} />} />
        <Route path="/ai-ml-course" element={<AiMlCourse setIsFormOpen={setIsFormOpen} />} />
        <Route path="/data-science-course" element={<DataScienceCourse setIsFormOpen={setIsFormOpen} />} />
        <Route path="/cybersecurity-course" element={<CybersecurityCourse setIsFormOpen={setIsFormOpen} />} />
        <Route path="/cloud-computing-course" element={<CloudComputingCourse setIsFormOpen={setIsFormOpen} />} />
        <Route path="/blockchain-course" element={<BlockchainCourse setIsFormOpen={setIsFormOpen} />} />
        <Route path="/devops-course" element={<DevopsCourse setIsFormOpen={setIsFormOpen} />} />
        <Route path="/ui-ux-design-course" element={<UiUxDesignCourse setIsFormOpen={setIsFormOpen} />} />
        <Route
          path="/full-stack-development-course"
          element={<FullStackDevelopmentCourse setIsFormOpen={setIsFormOpen} />}
        />
        <Route path="/digital-marketing-course" element={<DigitalMarketingCourse setIsFormOpen={setIsFormOpen} />} />
        <Route path="/automation-testing-course" element={<AutomationTestingCourse setIsFormOpen={setIsFormOpen} />} />
        <Route path="/salesforce-course" element={<SalesforceCourse setIsFormOpen={setIsFormOpen} />} />
        <Route path="/salesforce-cpq-course" element={<SalesforceCpqCourse setIsFormOpen={setIsFormOpen} />} />
        <Route
          path="/salesforce-agent-force-course"
          element={<SalesforceAgentForceCourse setIsFormOpen={setIsFormOpen} />}
        />
        <Route path="/business-analyst-course" element={<BusinessAnalystCourse setIsFormOpen={setIsFormOpen} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage setIsFormOpen={setIsFormOpen} />} />
        <Route path="/razorpay-policy" element={<RazorpayPolicyPage setIsFormOpen={setIsFormOpen} />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage setIsFormOpen={setIsFormOpen} />} />
        <Route path="/refund-policy" element={<RefundPolicyPage setIsFormOpen={setIsFormOpen} />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  )
}

export default App

