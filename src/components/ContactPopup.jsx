"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import { useNavigate } from "react-router-dom" // Changed from next/navigation

const ContactPopup = ({ isOpen, onClose }) => {
  const navigate = useNavigate() // Changed from useRouter

  // Handle body overflow when popup opens/closes
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  // Handle Zoho form submission and redirect
  useEffect(() => {
    if (!isOpen) return

    const handleMessage = (event) => {
      const eventData = event.data
      
      // Check if form is submitted (Zoho sends 'formSubmitted' event)
      if (typeof eventData === "string" && eventData.includes("formSubmitted")) {
        onClose() // Close popup
        navigate("/thank-you") // Redirect to thank-you page
      }

      // Auto-resize iframe (optional)
      if (eventData && typeof eventData === "string") {
        const zfData = eventData.split("|")
        if (zfData.length >= 2) {
          const iframe = document.querySelector("#zohoForm iframe")
          if (iframe) {
            const newHeight = (parseInt(zfData[1], 10) + 15) + "px"
            iframe.style.height = newHeight
          }
        }
      }
    }

    window.addEventListener("message", handleMessage)

    return () => {
      window.removeEventListener("message", handleMessage)
    }
  }, [isOpen, onClose, navigate]) // Changed from router

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-s shadow-lg w-full max-w-md overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100 transition-colors z-10"
          aria-label="Close form"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>

        <div id="zohoForm" className="p-4">
          <iframe
            src="https://forms.zohopublic.in/learnxinstitutegm1/form/LeadForm/formperma/InSeUEkSoMeDrbxkpK5QuC-JCkCBkXLv36_wv8cDbQ8?zf_rszfm=1"
            frameBorder="0"
            style={{ width: "100%", height: "400px", border: "none" }}
            title="Contact Form"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default ContactPopup
