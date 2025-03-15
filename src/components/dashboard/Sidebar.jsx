"use client"

import { Link, useLocation } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import {
  LayoutDashboard,
  Users,
  BookOpen,
  UserCog,
  CreditCard,
  Bell,
  Settings,
  Video,
  UserCheck,
  BarChart,
  Layers,
  MessageSquare,
  Award,
  LogOut,
} from "lucide-react"

const Sidebar = ({ userRole }) => {
  const location = useLocation()
  const { logout } = useAuth()

  // Define navigation items based on user role
  const getNavItems = () => {
    switch (userRole) {
      case "admin":
        return [
          { name: "Dashboard", path: "/admin/dashboard", icon: <LayoutDashboard size={20} /> },
          { name: "User Management", path: "/admin/users", icon: <Users size={20} /> },
          { name: "Course Management", path: "/admin/courses", icon: <BookOpen size={20} /> },
          { name: "Trainer Management", path: "/admin/trainers", icon: <UserCog size={20} /> },
          { name: "Payments", path: "/admin/payments", icon: <CreditCard size={20} /> },
          { name: "Notifications", path: "/admin/notifications", icon: <Bell size={20} /> },
          { name: "Settings", path: "/admin/settings", icon: <Settings size={20} /> },
        ]
      case "trainer":
        return [
          { name: "Dashboard", path: "/trainer/dashboard", icon: <LayoutDashboard size={20} /> },
          { name: "My Courses", path: "/trainer/courses", icon: <BookOpen size={20} /> },
          { name: "Live Classes", path: "/trainer/live-classes", icon: <Video size={20} /> },
          { name: "Student Engagement", path: "/trainer/students", icon: <UserCheck size={20} /> },
          { name: "Earnings", path: "/trainer/earnings", icon: <BarChart size={20} /> },
        ]
      case "student":
        return [
          { name: "Dashboard", path: "/student/dashboard", icon: <LayoutDashboard size={20} /> },
          { name: "My Courses", path: "/student/courses", icon: <Layers size={20} /> },
          { name: "Live Classes", path: "/student/live-classes", icon: <Video size={20} /> },
          { name: "Community", path: "/student/community", icon: <MessageSquare size={20} /> },
          { name: "Certifications", path: "/student/certifications", icon: <Award size={20} /> },
          { name: "Payments", path: "/student/payments", icon: <CreditCard size={20} /> },
        ]
      default:
        return []
    }
  }

  const navItems = getNavItems()

  return (
    <div className="h-screen flex flex-col bg-card border-r border-border overflow-y-auto">
      {/* Logo */}
      <div className="p-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
            <span className="font-bold text-white text-lg">LX</span>
          </div>
          <span className="text-xl font-bold gradient-text">LearnX LMS</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-2">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-border">
        <button
          onClick={logout}
          className="flex items-center gap-3 w-full px-3 py-2 text-muted-foreground hover:text-destructive rounded-md transition-colors"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar

