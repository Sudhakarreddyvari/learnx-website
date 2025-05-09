"use client"

import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
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
import ThankYouPage from "./pages/thank-you"
import ScrollToTop from "./ScrollToTop"
import FloatingContactButtons from "./components/FloatingContactButtons"
import ContactPopup from "./components/ContactPopup"

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  // Function to wrap each route component with necessary props
  const withContactPopup = (Component) => {
    return (props) => <Component {...props} setIsContactOpen={setIsContactOpen} />
  }

  return (
    <Router>
      <ScrollToTop />
      {/* Floating action buttons */}
      <FloatingContactButtons whatsappNumber="+91 80193 33796" phoneNumber="+91 80193 33796" />
      
      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <Routes>
        <Route path="/" element={withContactPopup(HomePage)()} />
        <Route path="/about" element={withContactPopup(AboutPage)()} />
        <Route path="/contact" element={withContactPopup(ContactPage)()} />
        <Route path="/faq" element={withContactPopup(FaqPage)()} />
        <Route path="/courses" element={<Navigate to="/all-courses" replace />} />
        <Route path="/all-courses" element={withContactPopup(AllCoursesPage)()} />
        <Route path="/ai-ml-course" element={withContactPopup(AiMlCourse)()} />
        <Route path="/data-science-course" element={withContactPopup(DataScienceCourse)()} />
        <Route path="/cybersecurity-course" element={withContactPopup(CybersecurityCourse)()} />
        <Route path="/cloud-computing-course" element={withContactPopup(CloudComputingCourse)()} />
        <Route path="/blockchain-course" element={withContactPopup(BlockchainCourse)()} />
        <Route path="/devops-course" element={withContactPopup(DevopsCourse)()} />
        <Route path="/ui-ux-design-course" element={withContactPopup(UiUxDesignCourse)()} />
        <Route path="/full-stack-development-course" element={withContactPopup(FullStackDevelopmentCourse)()} />
        <Route path="/digital-marketing-course" element={withContactPopup(DigitalMarketingCourse)()} />
        <Route path="/automation-testing-course" element={withContactPopup(AutomationTestingCourse)()} />
        <Route path="/salesforce-course" element={withContactPopup(SalesforceCourse)()} />
        <Route path="/salesforce-cpq-course" element={withContactPopup(SalesforceCpqCourse)()} />
        <Route path="/salesforce-agent-force-course" element={withContactPopup(SalesforceAgentForceCourse)()} />
        <Route path="/business-analyst-course" element={withContactPopup(BusinessAnalystCourse)()} />
        <Route path="/privacy-policy" element={withContactPopup(PrivacyPolicyPage)()} />
        <Route path="/razorpay-policy" element={withContactPopup(RazorpayPolicyPage)()} />
        <Route path="/terms-of-service" element={withContactPopup(TermsOfServicePage)()} />
        <Route path="/refund-policy" element={withContactPopup(RefundPolicyPage)()} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  )
}

export default App