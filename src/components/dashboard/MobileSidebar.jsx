"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import Sidebar from "./Sidebar"

const MobileSidebar = ({ isOpen, onClose, userRole }) => {
  // Close sidebar when escape key is pressed
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  // Prevent scrolling when sidebar is open
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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />

      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-card shadow-lg animate-in">
        <div className="absolute right-4 top-4">
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-secondary text-muted-foreground hover:text-foreground"
          >
            <X size={20} />
            <span className="sr-only">Close</span>
          </button>
        </div>

        <Sidebar userRole={userRole} />
      </div>
    </div>
  )
}

export default MobileSidebar

