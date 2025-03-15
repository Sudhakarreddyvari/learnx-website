"use client"

import { useState, useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Sidebar from "../components/dashboard/Sidebar"
import Header from "../components/dashboard/Header"
import MobileSidebar from "../components/dashboard/MobileSidebar"

const DashboardLayout = ({ userRole }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  // Close sidebar when route changes (mobile)
  useEffect(() => {
    setSidebarOpen(false)
  }, [location])

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} userRole={userRole} />

      {/* Desktop Layout */}
      <div className="lg:grid lg:grid-cols-[240px_1fr]">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar userRole={userRole} />
        </div>

        {/* Main Content */}
        <div className="flex flex-col min-h-screen">
          <Header onMenuClick={() => setSidebarOpen(true)} userRole={userRole} />
          <main className="flex-1 p-4 md:p-6 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout

