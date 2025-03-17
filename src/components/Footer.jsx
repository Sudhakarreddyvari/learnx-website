import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react"

const Footer = ({ setIsFormOpen }) => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-600 to-rose-500 flex items-center justify-center">
                <span className="font-bold text-white text-xl">LX</span>
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-rose-500">
                LearnX
              </span>
            </Link>
            <p className="text-gray-400">
              Transform your career with industry-leading tech education. Join thousands of successful graduates who
              landed their dream jobs.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1BM4TaJjf7/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-md bg-gray-800 hover:bg-violet-900/30 transition-colors text-sm text-gray-300 hover:text-white"
                style={{ cursor: "pointer", display: "inline-block", position: "relative", zIndex: 10 }}
              >
                Facebook
              </a>
              <a
                href="https://x.com/LearnX_official"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-md bg-gray-800 hover:bg-violet-900/30 transition-colors text-sm text-gray-300 hover:text-white"
                style={{ cursor: "pointer", display: "inline-block", position: "relative", zIndex: 10 }}
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/company/learnx-official/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-md bg-gray-800 hover:bg-violet-900/30 transition-colors text-sm text-gray-300 hover:text-white"
                style={{ cursor: "pointer", display: "inline-block", position: "relative", zIndex: 10 }}
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/learnx_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-md bg-gray-800 hover:bg-violet-900/30 transition-colors text-sm text-gray-300 hover:text-white"
                style={{ cursor: "pointer", display: "inline-block", position: "relative", zIndex: 10 }}
              >
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Popular Courses</h3>
            <ul className="space-y-3">
              {[
                { title: "AI & Machine Learning", path: "/courses/ai-machine-learning" },
                { title: "Data Science & Analytics", path: "/courses/data-science" },
                { title: "Cybersecurity", path: "/courses/cybersecurity" },
                { title: "Cloud Computing", path: "/courses/cloud-computing" },
                { title: "Blockchain Technology", path: "/courses/blockchain" },
              ].map((course, i) => (
                <li key={i}>
                  <Link to={course.path} className="text-gray-400 hover:text-violet-400 flex items-center group">
                    <ChevronRight className="w-4 h-4 mr-2 text-violet-500 transform group-hover:translate-x-1 transition-transform" />
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-violet-400 flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-2 text-violet-500 transform group-hover:translate-x-1 transition-transform" />
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-violet-400 flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-2 text-violet-500 transform group-hover:translate-x-1 transition-transform" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-violet-400 flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-2 text-violet-500 transform group-hover:translate-x-1 transition-transform" />
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-violet-400 flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-2 text-violet-500 transform group-hover:translate-x-1 transition-transform" />
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-violet-400 flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-2 text-violet-500 transform group-hover:translate-x-1 transition-transform" />
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-violet-400 flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-2 text-violet-500 transform group-hover:translate-x-1 transition-transform" />
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-violet-400 flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-2 text-violet-500 transform group-hover:translate-x-1 transition-transform" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-gray-400 hover:text-violet-400 flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-2 text-violet-500 transform group-hover:translate-x-1 transition-transform" />
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link to="/razorpay-policy" className="text-gray-400 hover:text-violet-400 flex items-center group">
                  <ChevronRight className="w-4 h-4 mr-2 text-violet-500 transform group-hover:translate-x-1 transition-transform" />
                  Razorpay Policy
                </Link>
              </li>
            </ul>

            <h3 className="text-white text-lg font-semibold mt-8 mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-violet-400 mt-1 shrink-0" />
                <span className="text-gray-400">123 Tech Street, Innovation City, CA 91234</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-violet-400 shrink-0" />
                <span className="text-gray-400">info@learnx.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-violet-400 shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; 2024 LearnX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

