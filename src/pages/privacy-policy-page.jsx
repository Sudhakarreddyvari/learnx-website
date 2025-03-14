"use client"

import { useEffect } from "react"
import { Shield } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const PrivacyPolicyPage = ({ setIsFormOpen }) => {
  useEffect(() => {
    // Set page title and meta tags for SEO
    document.title = "Privacy Policy | LearnX"

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
                <Shield size={14} className="mr-2 text-violet-400" />
                <span>Last Updated: March 15, 2024</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Privacy{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-rose-500">
                  Policy
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                We are committed to protecting your privacy and ensuring the security of your personal information.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-gray-900/60 backdrop-blur-md border border-violet-500/20 rounded-xl p-8 md:p-10">
              <div className="prose prose-lg prose-invert max-w-none">
                <h2>1. Introduction</h2>
                <p>
                  Welcome to LearnX ("we," "our," or "us"). We respect your privacy and are committed to protecting your
                  personal data. This privacy policy will inform you about how we look after your personal data when you
                  visit our website and tell you about your privacy rights and how the law protects you.
                </p>
                <p>
                  This privacy policy applies to all information collected through our website, mobile application,
                  and/or any related services, sales, marketing, or events (collectively, the "Services").
                </p>

                <h2>2. Information We Collect</h2>
                <p>We collect several types of information from and about users of our Services, including:</p>
                <ul>
                  <li>
                    <strong>Personal Identifiers:</strong> Such as your name, email address, postal address, phone
                    number, and other similar identifiers.
                  </li>
                  <li>
                    <strong>Account Information:</strong> Your username, password, and account preferences.
                  </li>
                  <li>
                    <strong>Payment Information:</strong> Your credit card details, billing address, and other payment
                    details (processed securely through our payment processors).
                  </li>
                  <li>
                    <strong>Educational Information:</strong> Your learning history, course progress, assessment
                    results, and certificates earned.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Information about how you use our website and Services, including your
                    browsing patterns, click-through rates, and feature usage.
                  </li>
                  <li>
                    <strong>Technical Data:</strong> IP address, browser type and version, time zone setting, browser
                    plug-in types and versions, operating system and platform, and other technology on the devices you
                    use to access our Services.
                  </li>
                </ul>

                <h2>3. How We Collect Your Information</h2>
                <p>We collect information through:</p>
                <ul>
                  <li>
                    <strong>Direct Interactions:</strong> Information you provide when you create an account, enroll in
                    courses, complete forms, or communicate with us.
                  </li>
                  <li>
                    <strong>Automated Technologies:</strong> As you interact with our Services, we may automatically
                    collect technical data about your equipment, browsing actions, and patterns using cookies, server
                    logs, and similar technologies.
                  </li>
                  <li>
                    <strong>Third Parties:</strong> We may receive information about you from third parties, such as
                    business partners, social media platforms, and payment processors.
                  </li>
                </ul>

                <h2>4. How We Use Your Information</h2>
                <p>We use your information for the following purposes:</p>
                <ul>
                  <li>To provide and maintain our Services</li>
                  <li>To process and complete transactions</li>
                  <li>To manage your account and provide customer support</li>
                  <li>To personalize your experience and deliver content relevant to your interests</li>
                  <li>To improve our website, products, and services</li>
                  <li>To communicate with you about updates, security alerts, and support</li>
                  <li>To monitor usage of our Services for technical administration</li>
                  <li>To detect, prevent, and address technical issues and fraudulent activities</li>
                  <li>To comply with legal obligations</li>
                </ul>

                <h2>5. Disclosure of Your Information</h2>
                <p>We may share your personal information with:</p>
                <ul>
                  <li>
                    <strong>Service Providers:</strong> Third-party vendors who perform services on our behalf, such as
                    payment processing, data analysis, email delivery, hosting, and customer service.
                  </li>
                  <li>
                    <strong>Business Partners:</strong> Companies with whom we partner to offer products or services.
                  </li>
                  <li>
                    <strong>Affiliates:</strong> Our subsidiaries and affiliates for purposes consistent with this
                    privacy policy.
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law or to protect our rights, property, or
                    safety, or the rights, property, or safety of others.
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets,
                    your information may be transferred as a business asset.
                  </li>
                </ul>

                <h2>6. Data Security</h2>
                <p>
                  We have implemented appropriate security measures to prevent your personal data from being
                  accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal data to
                  those employees, agents, contractors, and other third parties who have a business need to know.
                </p>
                <p>
                  While we strive to use commercially acceptable means to protect your personal information, no method
                  of transmission over the Internet or method of electronic storage is 100% secure. Therefore, we cannot
                  guarantee its absolute security.
                </p>

                <h2>7. Data Retention</h2>
                <p>
                  We will retain your personal information only for as long as necessary to fulfill the purposes for
                  which we collected it, including for the purposes of satisfying any legal, accounting, or reporting
                  requirements.
                </p>

                <h2>8. Your Rights</h2>
                <p>
                  Depending on your location, you may have certain rights regarding your personal information,
                  including:
                </p>
                <ul>
                  <li>The right to access your personal information</li>
                  <li>The right to rectify inaccurate or incomplete information</li>
                  <li>The right to erasure (the "right to be forgotten")</li>
                  <li>The right to restrict processing of your information</li>
                  <li>The right to data portability</li>
                  <li>The right to object to processing of your information</li>
                  <li>The right to withdraw consent</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the details provided in the "Contact Us" section.
                </p>

                <h2>9. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to track activity on our Services and hold certain
                  information. Cookies are files with a small amount of data that may include an anonymous unique
                  identifier.
                </p>
                <p>
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                  However, if you do not accept cookies, you may not be able to use some portions of our Services.
                </p>

                <h2>10. Children's Privacy</h2>
                <p>
                  Our Services are not intended for children under the age of 16. We do not knowingly collect personal
                  information from children under 16. If you are a parent or guardian and you are aware that your child
                  has provided us with personal information, please contact us.
                </p>

                <h2>11. Changes to This Privacy Policy</h2>
                <p>
                  We may update our privacy policy from time to time. We will notify you of any changes by posting the
                  new privacy policy on this page and updating the "Last Updated" date at the top of this policy.
                </p>
                <p>
                  You are advised to review this privacy policy periodically for any changes. Changes to this privacy
                  policy are effective when they are posted on this page.
                </p>

                <h2>12. Contact Us</h2>
                <p>
                  If you have any questions about this privacy policy or our privacy practices, please contact us at:
                </p>
                <p>
                  Email: privacy@learnx.com
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

export default PrivacyPolicyPage

