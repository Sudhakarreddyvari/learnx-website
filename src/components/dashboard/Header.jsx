"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Menu, Bell, Search, User, Settings, LogOut, Sun, Moon } from "lucide-react"
import { useAuth } from "../../contexts/AuthContext"
import { useTheme } from "../../contexts/ThemeContext"

const Header = ({ onMenuClick, userRole }) => {
  const { currentUser, logout } = useAuth()
  const { darkMode, toggleTheme } = useTheme()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const navigate = useNavigate()

  // Get title based on user role
  const getPortalTitle = () => {
    switch (userRole) {
      case "admin":
        return "Admin Portal"
      case "trainer":
        return "Trainer Portal"
      case "student":
        return "Student Portal"
      default:
        return "LearnX LMS"
    }
  }

  // Mock notifications
  const notifications = [
    { id: 1, message: "New course enrollment", time: "5 minutes ago" },
    { id: 2, message: "Your certificate is ready", time: "1 hour ago" },
    { id: 3, message: "New message from instructor", time: "3 hours ago" },
  ]

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <button onClick={onMenuClick} className="lg:hidden rounded-md p-2 text-muted-foreground hover:bg-secondary">
        <Menu size={20} />
        <span className="sr-only">Toggle menu</span>
      </button>

      <div className="flex-1">
        <h1 className="text-lg font-semibold">{getPortalTitle()}</h1>
      </div>

      {/* Search */}
      <div className="relative hidden md:flex items-center">
        <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search..."
          className="h-9 w-64 rounded-md border border-input bg-background pl-9 pr-3 text-sm"
        />
      </div>

      {/* Theme Toggle */}
      <button onClick={toggleTheme} className="rounded-md p-2 text-muted-foreground hover:bg-secondary">
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        <span className="sr-only">Toggle theme</span>
      </button>

      {/* Notifications */}
      <div className="relative">
        <button
          onClick={() => setNotificationsOpen(!notificationsOpen)}
          className="relative rounded-md p-2 text-muted-foreground hover:bg-secondary"
        >
          <Bell size={20} />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
          <span className="sr-only">Notifications</span>
        </button>

        {notificationsOpen && (
          <div className="absolute right-0 mt-2 w-80 rounded-md border border-border bg-card shadow-lg animate-in">
            <div className="p-3 border-b border-border">
              <h3 className="font-semibold">Notifications</h3>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {notifications.map((notification) => (
                <div key={notification.id} className="p-3 border-b border-border hover:bg-secondary/50">
                  <p className="text-sm">{notification.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                </div>
              ))}
            </div>
            <div className="p-3 text-center">
              <button className="text-sm text-primary hover:underline">View all notifications</button>
            </div>
          </div>
        )}
      </div>

      {/* User Menu */}
      <div className="relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2 rounded-md p-2 text-muted-foreground hover:bg-secondary"
        >
          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            <User size={16} />
          </div>
          <span className="hidden md:inline-block">{currentUser?.name}</span>
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-56 rounded-md border border-border bg-card shadow-lg animate-in">
            <div className="p-3 border-b border-border">
              <p className="font-medium">{currentUser?.name}</p>
              <p className="text-sm text-muted-foreground">{currentUser?.email}</p>
            </div>
            <div className="p-1">
              <button
                onClick={() => {
                  setDropdownOpen(false)
                  // Navigate to profile page
                }}
                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-secondary"
              >
                <User size={16} />
                <span>Profile</span>
              </button>
              <button
                onClick={() => {
                  setDropdownOpen(false)
                  // Navigate to settings page
                }}
                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-secondary"
              >
                <Settings size={16} />
                <span>Settings</span>
              </button>
              <button
                onClick={() => {
                  setDropdownOpen(false)
                  logout()
                }}
                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-destructive hover:bg-destructive/10"
              >
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

