"use client"

import { useEffect } from "react"
import { RefreshCw } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const RefundPolicyPage = ({ setIsFormOpen }) => {
  useEffect(() => {
    // Set page title and meta tags for SEO
    document.title = "Refund Policy | LearnX"

    // Scroll to top on page load
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* Animated background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-900/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-grid-lines opacity-5"></div>
      </div>

      <Header setIsFormOpen={setIsFormOpen} hideHeader={false} />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-gray-950 to-gray-950"></div>

          {/* Animated circuit lines */}
          <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>

          {/* Glowing lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent glow-effect-line"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500 to-transparent glow-effect-line"></div>

          <div className="container relative mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-900/30 border border-violet-500/30 text-sm mb-6">
                <RefreshCw size={14} className="mr-2 text-violet-400" />
                <span>Last Updated: March 15, 2024</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Refund{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-rose-500">
                  Policy
                </span>
              </h1>
              <p className="text-xl text-gray-300">Our commitment to fair and transparent refund procedures.</p>
            </div>
          </div>
        </section>

        {/* Refund Policy Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-gray-900/60 backdrop-blur-md border border-violet-500/20 rounded-xl p-8 md:p-10">
              <div className="prose prose-lg prose-invert max-w-none">
                <h2>1. Introduction</h2>
                <p>
                  At LearnX, we strive to provide high-quality educational content and services. We understand that
                  circumstances may arise where you need to request a refund. This Refund Policy outlines the conditions
                  under which we process refunds for our courses and services.
                </p>

                <h2>2. Course Refund Policy</h2>
                <h3>2.1 Individual Course Purchases</h3>
                <p>For individual course purchases, we offer the following refund options:</p>
                <ul>
                  <li>
                    <strong>7-Day Money-Back Guarantee:</strong> If you are unsatisfied with a course, you may request a
                    full refund within 7 days of purchase, provided you have not completed more than 20% of the course
                    content.
                  </li>
                  <li>
                    <strong>Technical Issues:</strong> If you experience persistent technical issues that prevent you
                    from accessing the course content and our support team cannot resolve them within a reasonable
                    timeframe, you may be eligible for a full refund regardless of the 7-day period.
                  </li>
                  <li>
                    <strong>Course Cancellation:</strong> If LearnX cancels a course before it begins or during its
                    early stages, all enrolled students will receive a full refund.
                  </li>
                </ul>

                <h3>2.2 Subscription Plans</h3>
                <p>For subscription-based access to our platform:</p>
                <ul>
                  <li>
                    <strong>Monthly Subscriptions:</strong> We do not offer refunds for partial months. You can cancel
                    your subscription at any time, and you will continue to have access until the end of your current
                    billing period.
                  </li>
                  <li>
                    <strong>Annual Subscriptions:</strong> For annual subscriptions, you may request a prorated refund
                    within the first 30 days if you are unsatisfied with the service. After 30 days, no refunds will be
                    issued for the remaining subscription period.
                  </li>
                  <li>
                    <strong>Free Trial Conversions:</strong> If you upgrade from a free trial to a paid subscription and
                    request a refund within 48 hours of the first charge, we will process a full refund.
                  </li>
                </ul>

                <h2>3. Bootcamp and Live Training Refund Policy</h2>
                <p>For our intensive bootcamps and live training programs:</p>
                <ul>
                  <li>
                    <strong>14-Day Cancellation Period:</strong> You may cancel your enrollment and receive a full
                    refund up to 14 days before the bootcamp or live training begins.
                  </li>
                  <li>
                    <strong>Late Cancellation:</strong> Cancellations made between 14 days and 7 days before the start
                    date will receive a 50% refund.
                  </li>
                  <li>
                    <strong>Very Late Cancellation:</strong> Cancellations made less than 7 days before the start date
                    are not eligible for a refund but may be eligible for a one-time transfer to a future session
                    (subject to availability and a transfer fee).
                  </li>
                  <li>
                    <strong>Attendance Issues:</strong> No refunds will be provided for missed sessions or inability to
                    attend after the program has begun.
                  </li>
                </ul>

                <h2>4. Corporate Training Refund Policy</h2>
                <p>For corporate training packages:</p>
                <ul>
                  <li>
                    <strong>Custom Training Programs:</strong> Refund terms for custom corporate training programs are
                    specified in the individual contract and may vary based on the scope and nature of the training.
                  </li>
                  <li>
                    <strong>Standard Corporate Packages:</strong> Cancellations made at least 30 days before the
                    scheduled training date will receive a full refund minus a 10% administrative fee.
                  </li>
                  <li>
                    <strong>Rescheduling:</strong> Corporate clients may reschedule training sessions without penalty if
                    done at least 14 days in advance.
                  </li>
                </ul>

                <h2>5. Exclusions</h2>
                <p>Refunds will not be provided in the following circumstances:</p>
                <ul>
                  <li>After completing more than 20% of a course (for individual course purchases).</li>
                  <li>
                    For downloadable materials, e-books, or other digital content that can be downloaded immediately
                    after purchase.
                  </li>
                  <li>If you have violated our Terms of Service or Academic Integrity Policy.</li>
                  <li>For subscription fees already incurred before cancellation.</li>
                  <li>If you have received a completion certificate for the course.</li>
                </ul>

                <h2>6. How to Request a Refund</h2>
                <p>To request a refund:</p>
                <ol>
                  <li>Log in to your LearnX account.</li>
                  <li>Navigate to "My Courses" or "Billing History."</li>
                  <li>Select the course or subscription for which you want a refund.</li>
                  <li>Click on the "Request Refund" button and follow the instructions.</li>
                  <li>
                    Alternatively, you can email our support team at refunds@learnx.com with your order details and
                    reason for the refund request.
                  </li>
                </ol>

                <h2>7. Refund Processing</h2>
                <p>Once your refund request is approved:</p>
                <ul>
                  <li>Refunds will be processed using the original payment method used for the purchase.</li>
                  <li>Processing time typically takes 5-10 business days, depending on your payment provider.</li>
                  <li>You will receive an email confirmation once the refund has been processed.</li>
                  <li>
                    For credit/debit card payments, it may take an additional 3-5 business days for the refund to appear
                    on your statement.
                  </li>
                </ul>

                <h2>8. Special Circumstances</h2>
                <p>We understand that exceptional circumstances may arise. In cases of:</p>
                <ul>
                  <li>
                    <strong>Medical Emergencies:</strong> With proper documentation, we may consider refund requests
                    outside our standard policy.
                  </li>
                  <li>
                    <strong>Natural Disasters:</strong> If you are affected by a natural disaster that prevents you from
                    participating in a course, please contact our support team for assistance.
                  </li>
                  <li>
                    <strong>Technical Failures:</strong> If our platform experiences significant downtime or technical
                    issues that affect your learning experience, we may offer partial or full refunds at our discretion.
                  </li>
                </ul>

                <h2>9. Promotional Discounts and Coupons</h2>
                <p>For purchases made with promotional discounts or coupons:</p>
                <ul>
                  <li>Refunds will be based on the actual amount paid after applying any discounts or coupons.</li>
                  <li>Promotional or bonus courses provided free of charge are not eligible for refunds.</li>
                  <li>
                    If a refund is processed for a bundled purchase, the value of any courses or materials kept will be
                    deducted from the refund amount.
                  </li>
                </ul>

                <h2>10. Changes to This Policy</h2>
                <p>
                  We may update our Refund Policy from time to time. We will notify you of any changes by posting the
                  new policy on this page and updating the "Last Updated" date.
                </p>
                <p>
                  You are advised to review this policy periodically for any changes. Changes to this policy are
                  effective when they are posted on this page.
                </p>

                <h2>11. Contact Us</h2>
                <p>If you have any questions about our Refund Policy, please contact us at:</p>
                <p>
                  Email: refunds@learnx.com
                  <br />
                  Phone: +1 (555) 123-4567
                  <br />
                  Address: 123 Tech Street, Innovation City, CA 91234
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer setIsFormOpen={setIsFormOpen} />
    </div>
  )
}

export default RefundPolicyPage

