"use client"

import { useEffect } from "react"
import { CreditCard } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const RazorpayPolicyPage = ({ setIsFormOpen }) => {
  useEffect(() => {
    // Set page title and meta tags for SEO
    document.title = "Razorpay Payment Policy | LearnX"

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
                <CreditCard size={14} className="mr-2 text-violet-400" />
                <span>Last Updated: March 15, 2024</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Razorpay Payment{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-rose-500">
                  Policy
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                Information about our payment processing, refunds, and security measures through Razorpay.
              </p>
            </div>
          </div>
        </section>

        {/* Razorpay Policy Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-gray-900/60 backdrop-blur-md border border-violet-500/20 rounded-xl p-8 md:p-10">
              <div className="prose prose-lg prose-invert max-w-none">
                <h2>1. Introduction</h2>
                <p>
                  LearnX uses Razorpay, a trusted third-party payment processor, to handle all payment transactions on
                  our platform. This policy outlines how payments are processed, stored, and secured through our
                  integration with Razorpay.
                </p>

                <h2>2. Payment Processing</h2>
                <p>When you make a payment on LearnX:</p>
                <ul>
                  <li>You are redirected to Razorpay's secure payment gateway to complete your transaction.</li>
                  <li>
                    Razorpay accepts various payment methods including credit/debit cards, UPI, net banking, and digital
                    wallets.
                  </li>
                  <li>
                    LearnX does not store your complete payment information. All sensitive payment data is handled
                    directly by Razorpay.
                  </li>
                  <li>Upon successful payment, you will receive a confirmation email with transaction details.</li>
                  <li>
                    For subscription-based services, Razorpay will process recurring payments according to the
                    subscription terms you agreed to.
                  </li>
                </ul>

                <h2>3. Security Measures</h2>
                <p>Razorpay implements industry-standard security measures to protect your payment information:</p>
                <ul>
                  <li>
                    PCI DSS Level 1 compliance, the highest level of certification available in the payments industry.
                  </li>
                  <li>End-to-end encryption for all transactions.</li>
                  <li>Two-factor authentication for added security.</li>
                  <li>Regular security audits and vulnerability assessments.</li>
                  <li>Fraud detection and prevention systems.</li>
                </ul>
                <p>
                  While we ensure that our integration with Razorpay follows best security practices, we recommend that
                  you also take precautions when making online payments, such as using secure networks and keeping your
                  payment credentials confidential.
                </p>

                <h2>4. Transaction Fees</h2>
                <p>
                  LearnX absorbs all transaction fees charged by Razorpay for standard payment methods. However, please
                  note:
                </p>
                <ul>
                  <li>
                    Some banks or payment providers may charge additional fees for certain payment methods or
                    international transactions.
                  </li>
                  <li>
                    Currency conversion fees, if applicable, are not covered by LearnX and will be your responsibility.
                  </li>
                  <li>
                    For EMI options, interest rates and processing fees set by the banks will apply as per their terms.
                  </li>
                </ul>

                <h2>5. Billing and Invoicing</h2>
                <p>After each successful payment:</p>
                <ul>
                  <li>You will receive an automated invoice via email.</li>
                  <li>All invoices are also available in your LearnX account dashboard under "Billing History."</li>
                  <li>
                    Invoices include details of the transaction, including the amount paid, date, and services
                    purchased.
                  </li>
                  <li>For tax purposes, you can update your billing information in your account settings.</li>
                </ul>

                <h2>6. Refunds and Cancellations</h2>
                <p>Our refund policy for payments processed through Razorpay is as follows:</p>
                <ul>
                  <li>Refund requests must be submitted within 7 days of purchase for course enrollments.</li>
                  <li>
                    Subscription cancellations must be made at least 48 hours before the next billing cycle to avoid
                    charges.
                  </li>
                  <li>
                    Approved refunds will be processed back to the original payment method used for the transaction.
                  </li>
                  <li>
                    Refunds typically take 5-10 business days to reflect in your account, depending on your payment
                    provider.
                  </li>
                  <li>
                    For detailed information on what qualifies for a refund, please refer to our{" "}
                    <a href="/refund-policy" className="text-violet-400 hover:text-violet-300">
                      Refund Policy
                    </a>
                    .
                  </li>
                </ul>

                <h2>7. Failed Transactions</h2>
                <p>In case of a failed transaction:</p>
                <ul>
                  <li>The amount debited, if any, will be automatically refunded to your account.</li>
                  <li>Refunds for failed transactions typically take 5-7 business days to process.</li>
                  <li>
                    If you notice a deduction without receiving access to the purchased service, please contact our
                    support team immediately.
                  </li>
                </ul>

                <h2>8. International Payments</h2>
                <p>For international payments:</p>
                <ul>
                  <li>All transactions are processed in Indian Rupees (INR).</li>
                  <li>
                    Your bank or payment provider will convert the amount to your local currency at their prevailing
                    exchange rate.
                  </li>
                  <li>International transaction fees may apply as per your bank's policies.</li>
                  <li>
                    Some payment methods may not be available for international customers due to regional restrictions.
                  </li>
                </ul>

                <h2>9. Data Sharing with Razorpay</h2>
                <p>To facilitate payment processing, we share certain information with Razorpay:</p>
                <ul>
                  <li>Your name and contact information.</li>
                  <li>Transaction details including amount and description.</li>
                  <li>Device and browser information for fraud prevention purposes.</li>
                </ul>
                <p>
                  This information sharing is governed by Razorpay's privacy policy, which you can review on their
                  website. We ensure that our data sharing practices comply with applicable privacy laws and
                  regulations.
                </p>

                <h2>10. Dispute Resolution</h2>
                <p>If you have any issues with a payment transaction:</p>
                <ul>
                  <li>First, check your transaction status in your LearnX account dashboard.</li>
                  <li>For unresolved issues, contact our customer support team at payments@learnx.com.</li>
                  <li>Provide your order ID and transaction details to help us investigate the issue promptly.</li>
                  <li>We aim to resolve all payment disputes within 5 business days.</li>
                </ul>

                <h2>11. Changes to This Policy</h2>
                <p>
                  We may update our Razorpay Payment Policy from time to time. We will notify you of any changes by
                  posting the new policy on this page and updating the "Last Updated" date.
                </p>
                <p>
                  You are advised to review this policy periodically for any changes. Changes to this policy are
                  effective when they are posted on this page.
                </p>

                <h2>12. Contact Us</h2>
                <p>
                  If you have any questions about our payment processing or this Razorpay Payment Policy, please contact
                  us at:
                </p>
                <p>
                  Email: payments@learnx.com
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

export default RazorpayPolicyPage

