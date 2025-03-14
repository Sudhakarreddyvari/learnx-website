"use client"

import { useEffect } from "react"
import { FileText } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const TermsOfServicePage = ({ setIsFormOpen }) => {
  useEffect(() => {
    // Set page title and meta tags for SEO
    document.title = "Terms of Service | LearnX"

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
                <FileText size={14} className="mr-2 text-violet-400" />
                <span>Last Updated: March 15, 2024</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Terms of{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-rose-500">
                  Service
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                Please read these terms carefully before using our platform and services.
              </p>
            </div>
          </div>
        </section>

        {/* Terms of Service Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-gray-900/60 backdrop-blur-md border border-violet-500/20 rounded-xl p-8 md:p-10">
              <div className="prose prose-lg prose-invert max-w-none">
                <h2>1. Agreement to Terms</h2>
                <p>
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and LearnX ("we,"
                  "us," or "our") governing your access to and use of the LearnX website, mobile application, and
                  services (collectively, the "Services").
                </p>
                <p>
                  By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these
                  Terms, you may not access or use the Services.
                </p>

                <h2>2. Eligibility</h2>
                <p>
                  You must be at least 16 years old to use our Services. By using our Services, you represent and
                  warrant that:
                </p>
                <ul>
                  <li>You are at least 16 years of age.</li>
                  <li>You have the legal capacity to enter into a binding agreement with LearnX.</li>
                  <li>Your use of the Services does not violate any applicable law or regulation.</li>
                  <li>
                    If you are using the Services on behalf of an organization, you have authority to bind that
                    organization to these Terms.
                  </li>
                </ul>

                <h2>3. Account Registration</h2>
                <p>
                  To access certain features of our Services, you may need to create an account. When you register for
                  an account, you agree to:
                </p>
                <ul>
                  <li>Provide accurate, current, and complete information.</li>
                  <li>Maintain and promptly update your account information.</li>
                  <li>Keep your password secure and confidential.</li>
                  <li>Notify us immediately of any unauthorized access to your account.</li>
                  <li>Be responsible for all activities that occur under your account.</li>
                </ul>
                <p>
                  We reserve the right to suspend or terminate your account if any information provided during
                  registration or thereafter proves to be inaccurate, false, or outdated.
                </p>

                <h2>4. Course Enrollment and Access</h2>
                <p>Upon enrolling in a course or purchasing a subscription:</p>
                <ul>
                  <li>
                    You will be granted a limited, non-exclusive, non-transferable license to access and view the course
                    content for personal, non-commercial purposes.
                  </li>
                  <li>
                    Access to course content is for the duration specified at the time of purchase or as long as your
                    subscription remains active.
                  </li>
                  <li>
                    Course materials, including videos, documents, and assessments, are protected by copyright and other
                    intellectual property laws.
                  </li>
                  <li>You may not share your account credentials or course access with others.</li>
                  <li>
                    You may not download, copy, reproduce, distribute, transmit, broadcast, display, sell, license, or
                    otherwise exploit any course content for any purpose without our prior written consent.
                  </li>
                </ul>

                <h2>5. Payments and Refunds</h2>
                <p>When making purchases through our Services:</p>
                <ul>
                  <li>
                    You agree to pay all fees and charges associated with your account on a timely basis and with a
                    valid payment method.
                  </li>
                  <li>
                    All prices are displayed in the currency specified and do not include taxes unless stated otherwise.
                  </li>
                  <li>
                    We reserve the right to change our prices at any time, but changes will not affect existing
                    purchases or subscriptions.
                  </li>
                  <li>
                    Refunds are subject to our Refund Policy, which is incorporated by reference into these Terms.
                  </li>
                  <li>
                    For subscription services, you authorize us to charge your payment method on a recurring basis until
                    you cancel your subscription.
                  </li>
                </ul>

                <h2>6. User Conduct</h2>
                <p>When using our Services, you agree not to:</p>
                <ul>
                  <li>Violate any applicable law, regulation, or these Terms.</li>
                  <li>Infringe upon the rights of others, including intellectual property rights.</li>
                  <li>
                    Post or transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory,
                    vulgar, obscene, or otherwise objectionable.
                  </li>
                  <li>
                    Impersonate any person or entity or falsely state or misrepresent your affiliation with a person or
                    entity.
                  </li>
                  <li>Interfere with or disrupt the Services or servers or networks connected to the Services.</li>
                  <li>
                    Attempt to gain unauthorized access to any part of the Services, other accounts, or computer
                    systems.
                  </li>
                  <li>
                    Use any robot, spider, or other automated device to access the Services for any purpose without our
                    express written permission.
                  </li>
                  <li>Collect or harvest any personally identifiable information from the Services.</li>
                  <li>Use the Services for any commercial purpose without our prior written consent.</li>
                </ul>

                <h2>7. Intellectual Property Rights</h2>
                <p>
                  The Services and their entire contents, features, and functionality (including but not limited to all
                  information, software, text, displays, images, video, and audio, and the design, selection, and
                  arrangement thereof) are owned by LearnX, its licensors, or other providers of such material and are
                  protected by copyright, trademark, patent, trade secret, and other intellectual property or
                  proprietary rights laws.
                </p>
                <p>
                  These Terms do not transfer any ownership rights in the Services or the content to you. You may not
                  reproduce, distribute, modify, create derivative works of, publicly display, publicly perform,
                  republish, download, store, or transmit any of the material on our Services, except as follows:
                </p>
                <ul>
                  <li>
                    Your computer may temporarily store copies of such materials in RAM incidental to your accessing and
                    viewing those materials.
                  </li>
                  <li>
                    You may store files that are automatically cached by your web browser for display enhancement
                    purposes.
                  </li>
                  <li>
                    You may print or download one copy of a reasonable number of pages of the website for your own
                    personal, non-commercial use and not for further reproduction, publication, or distribution.
                  </li>
                </ul>

                <h2>8. User Content</h2>
                <p>
                  Our Services may allow you to post, submit, publish, display, or transmit content such as reviews,
                  comments, and forum posts ("User Content"). By providing User Content, you grant us a non-exclusive,
                  worldwide, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce,
                  modify, adapt, publish, translate, create derivative works from, distribute, and display such User
                  Content in any form, media, or technology.
                </p>
                <p>You represent and warrant that:</p>
                <ul>
                  <li>You own or control all rights to the User Content you post.</li>
                  <li>All User Content complies with these Terms.</li>
                  <li>User Content does not violate the rights of any third party.</li>
                </ul>
                <p>
                  We have the right to remove any User Content that, in our sole judgment, violates these Terms or is
                  otherwise objectionable.
                </p>

                <h2>9. Termination</h2>
                <p>
                  We may terminate or suspend your account and access to the Services immediately, without prior notice
                  or liability, for any reason, including if you breach these Terms.
                </p>
                <p>
                  Upon termination, your right to use the Services will immediately cease. If you wish to terminate your
                  account, you may simply discontinue using the Services or contact us to request account deletion.
                </p>

                <h2>10. Disclaimer of Warranties</h2>
                <p>
                  THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EITHER
                  EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR
                  IMPLIED, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                  NON-INFRINGEMENT.
                </p>
                <p>
                  We do not warrant that the Services will be uninterrupted or error-free, that defects will be
                  corrected, or that the Services or the servers that make them available are free of viruses or other
                  harmful components.
                </p>

                <h2>11. Limitation of Liability</h2>
                <p>
                  TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL LEARNX, ITS AFFILIATES, OR THEIR LICENSORS,
                  SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER
                  ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICES,
                  INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
                </p>

                <h2>12. Indemnification</h2>
                <p>
                  You agree to defend, indemnify, and hold harmless LearnX, its affiliates, licensors, and service
                  providers, and its and their respective officers, directors, employees, contractors, agents,
                  licensors, suppliers, successors, and assigns from and against any claims, liabilities, damages,
                  judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out
                  of or relating to your violation of these Terms or your use of the Services.
                </p>

                <h2>13. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the State of California,
                  without giving effect to any principles of conflicts of law. Any legal suit, action, or proceeding
                  arising out of or related to these Terms or the Services shall be instituted exclusively in the
                  federal courts of the United States or the courts of the State of California.
                </p>

                <h2>14. Changes to Terms</h2>
                <p>
                  We may revise these Terms at any time by updating this page. By continuing to access or use our
                  Services after those revisions become effective, you agree to be bound by the revised Terms.
                </p>

                <h2>15. Contact Information</h2>
                <p>If you have any questions about these Terms, please contact us at:</p>
                <p>
                  Email: legal@learnx.com
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

export default TermsOfServicePage

