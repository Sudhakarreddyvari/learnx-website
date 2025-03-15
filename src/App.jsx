"use client"

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useState, useEffect } from "react"
import ScrollToTop from "./components/ScrollToTop.jsx"
import FormPopup from "./components/form-popup.jsx"
import "./App.css"

// Import main pages
import HomePage from "./pages/HomePage.jsx"

// Import course pages
import AiMlCourse from "./pages/ai-ml-course.jsx"
import DataScienceCourse from "./pages/data-science-course.jsx"
import CybersecurityCourse from "./pages/cybersecurity-course.jsx"
import CloudComputingCourse from "./pages/cloud-computing-course.jsx"
import BlockchainCourse from "./pages/blockchain-course.jsx"
import DevOpsCourse from "./pages/devops-course.jsx"
import UiUxDesignCourse from "./pages/ui-ux-design-course.jsx"
import FullStackDevelopmentCourse from "./pages/full-stack-development-course.jsx"
import DigitalMarketingCourse from "./pages/digital-marketing-course.jsx"
import AutomationTestingCourse from "./pages/automation-testing-course.jsx"
import SalesforceCourse from "./pages/salesforce-course.jsx"
import BusinessAnalystCourse from "./pages/business-analyst-course.jsx"
import SalesforceCpqCourse from "./pages/salesforce-cpq-course.jsx"
import SalesforceAgentForceCourse from "./pages/salesforce-agent-force-course.jsx"

// Import additional pages
import AboutPage from "./pages/about-page.jsx"
import PrivacyPolicyPage from "./pages/privacy-policy-page.jsx"
import RazorpayPolicyPage from "./pages/razorpay-policy-page.jsx"
import TermsOfServicePage from "./pages/terms-of-service-page.jsx"
import RefundPolicyPage from "./pages/refund-policy-page.jsx"
import ContactPage from "./pages/contact-page.jsx"
import FaqPage from "./pages/faq-page.jsx"
import AllCoursesPage from "./pages/all-courses-page.jsx"
import ThankYouPage from "./pages/thank-you-page.jsx"

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  useEffect(() => {
    console.log("App mounted, current path:", window.location.pathname)
  }, [])

  return (
    <Router>
      <ScrollToTop />

      {/* Form Popup */}
      <FormPopup isOpen={isFormOpen} setIsOpen={setIsFormOpen} />

      <Routes>
        {/* Main routes */}
        <Route path="/" element={<HomePage setIsFormOpen={setIsFormOpen} />} />
        <Route path="/about" element={<AboutPage setIsFormOpen={setIsFormOpen} />} />
        <Route path="/contact" element={<ContactPage setIsFormOpen={setIsFormOpen} />} />
        <Route path="/faq" element={<FaqPage setIsFormOpen={setIsFormOpen} />} />
        <Route path="/all-courses" element={<AllCoursesPage setIsFormOpen={setIsFormOpen} />} />
        <Route path="/courses" element={<AllCoursesPage setIsFormOpen={setIsFormOpen} />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage setIsFormOpen={setIsFormOpen} />} />
        <Route path="/razorpay-policy" element={<RazorpayPolicyPage setIsFormOpen={setIsFormOpen} />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage setIsFormOpen={setIsFormOpen} />} />
        <Route path="/refund-policy" element={<RefundPolicyPage setIsFormOpen={setIsFormOpen} />} />
        <Route path="/thank-you" element={<ThankYouPage setIsFormOpen={setIsFormOpen} />} />

        {/* Course routes with both patterns */}
        <Route path="/courses/ai-ml" element={<AiMlCourse setIsFormOpen={setIsFormOpen} />} />
        <Route path="/ai-ml-course" element={<AiMlCourse setIsFormOpen={setIsFormOpen} />} />

        <Route path="/courses/data-science" element={<DataScienceCourse setIsFormOpen={setIsFormOpen} />} />
        <Route path="/data-science-course" element={<DataScienceCourse setIsFormOpen={setIsFormOpen} />} />

        <Route path="/courses/cybersecurity" element={<CybersecurityCourse setIsFormOpen={setIsFormOpen} />} />
        <Route path="/cybersecurity-course" element={<CybersecurityCourse setIsFormOpen={setIsFormOpen} />} />

        <Route path="/courses/cloud-computing" element={<CloudComputingCourse setIsFormOpen={setIsFormOpen} />} />
        <Route path="/cloud-computing-course" element={<CloudComputingCourse setIsFormOpen={setIsFormOpen} />} />

        <Route path="/courses/blockchain" element={<BlockchainCourse setIsFormOpen={setIsFormOpen} />} />
        <Route path="/blockchain-course" element={<BlockchainCourse setIsFormOpen={setIsFormOpen} />} />

        <Route path="/courses/devops" element={<DevOpsCourse setIsFormOpen={setIsFormOpen} />} />
        <Route path="/devops-course" element={<DevOpsCourse setIsFormOpen={setIsFormOpen} />} />

        <Route path="/courses/ui-ux-design" element={<UiUxDesignCourse setIsFormOpen={setIsFormOpen} />} />
        <Route path="/ui-ux-design-course" element={<UiUxDesignCourse setIsFormOpen={setIsFormOpen} />} />

        <Route
          path="/courses/full-stack-development"
          element={<FullStackDevelopmentCourse setIsFormOpen={setIsFormOpen} />}
        />
        <Route
          path="/full-stack-development-course"
          element={<FullStackDevelopmentCourse setIsFormOpen={setIsFormOpen} />}
        />

        <Route path="/courses/digital-marketing" element={<DigitalMarketingCourse setIsFormOpen={setIsFormOpen} />} />
        <Route path="/digital-marketing-course" element={<DigitalMarketingCourse setIsFormOpen={setIsFormOpen} />} />

        <Route path="/courses/automation-testing" element={<AutomationTestingCourse setIsFormOpen={setIsFormOpen} />} />
        <Route path="/automation-testing-course" element={<AutomationTestingCourse setIsFormOpen={setIsFormOpen} />} />

        <Route path="/courses/salesforce" element={<SalesforceCourse setIsFormOpen={setIsFormOpen} />} />
        <Route path="/salesforce-course" element={<SalesforceCourse setIsFormOpen={setIsFormOpen} />} />

        <Route path="/courses/business-analyst" element={<BusinessAnalystCourse setIsFormOpen={setIsFormOpen} />} />
        <Route path="/business-analyst-course" element={<BusinessAnalystCourse setIsFormOpen={setIsFormOpen} />} />

        <Route path="/courses/salesforce-cpq" element={<SalesforceCpqCourse setIsFormOpen={setIsFormOpen} />} />
        <Route path="/salesforce-cpq-course" element={<SalesforceCpqCourse setIsFormOpen={setIsFormOpen} />} />

        <Route
          path="/courses/salesforce-agent-force"
          element={<SalesforceAgentForceCourse setIsFormOpen={setIsFormOpen} />}
        />
        <Route
          path="/salesforce-agent-force-course"
          element={<SalesforceAgentForceCourse setIsFormOpen={setIsFormOpen} />}
        />

        {/* Fallback route for any unmatched paths */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App

