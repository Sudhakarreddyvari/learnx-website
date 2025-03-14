"use client"

import { X } from "lucide-react"

const FormPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-md animate-in fade-in duration-300">
        {/* Glowing background */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-rose-500/20 rounded-2xl filter blur-xl animate-pulse-slow"></div>

        {/* Main content */}
        <div className="relative bg-gray-900/90 backdrop-blur-md border border-violet-500/30 rounded-2xl overflow-hidden">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10 p-2 rounded-full hover:bg-gray-800/50"
            aria-label="Close form"
          >
            <X size={24} />
          </button>

          {/* Content */}
          <div className="relative p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Get in Touch</h3>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                // Handle form submission here
                onClose() // Close the form after submission
              }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-gray-100 shadow-sm focus:border-violet-500 focus:ring-violet-500 p-3"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-gray-100 shadow-sm focus:border-violet-500 focus:ring-violet-500 p-3"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-gray-100 shadow-sm focus:border-violet-500 focus:ring-violet-500 p-3"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 text-base font-medium text-white rounded-md bg-gradient-to-r from-violet-600 to-rose-500 hover:from-violet-700 hover:to-rose-600 transition-colors relative group overflow-hidden"
              >
                <span className="relative z-10">Submit</span>
                <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-white/10 transition-transform duration-300"></div>
                <div className="absolute inset-0 glow-effect-small opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormPopup

