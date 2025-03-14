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

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false)

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
        </Routes>
      </div>
    </Router>
  )
}

export default App

