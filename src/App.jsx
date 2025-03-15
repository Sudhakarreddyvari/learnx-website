"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import { AuthProvider } from "./contexts/AuthContext"
import { ThemeProvider } from "./contexts/ThemeContext"
import ProtectedRoute from "./components/common/ProtectedRoute"

// Layouts
import DashboardLayout from "./layouts/DashboardLayout"

// Auth Pages
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import ForgotPassword from "./pages/auth/ForgotPassword"
import ResetPassword from "./pages/auth/ResetPassword"

// Admin Pages
import AdminDashboard from "./pages/admin/Dashboard"
import UserManagement from "./pages/admin/UserManagement"
import CourseManagement from "./pages/admin/CourseManagement"
import TrainerManagement from "./pages/admin/TrainerManagement"
import PaymentsAdmin from "./pages/admin/Payments"
import NotificationsAdmin from "./pages/admin/Notifications"
import SettingsAdmin from "./pages/admin/Settings"

// Trainer Pages
import TrainerDashboard from "./pages/trainer/Dashboard"
import TrainerCourses from "./pages/trainer/Courses"
import LiveClasses from "./pages/trainer/LiveClasses"
import StudentEngagement from "./pages/trainer/StudentEngagement"
import EarningsDashboard from "./pages/trainer/Earnings"

// Student Pages
import StudentDashboard from "./pages/student/Dashboard"
import MyCourses from "./pages/student/MyCourses"
import CourseDetails from "./pages/student/CourseDetails"
import LiveClassesStudent from "./pages/student/LiveClasses"
import Community from "./pages/student/Community"
import Certifications from "./pages/student/Certifications"
import PaymentsStudent from "./pages/student/Payments"

// Public Pages
import LandingPage from "./pages/public/LandingPage"
import CourseCatalog from "./pages/public/CourseCatalog"
import CoursePreview from "./pages/public/CoursePreview"
import AboutUs from "./pages/public/AboutUs"
import ContactUs from "./pages/public/ContactUs"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-950">
        <div className="w-16 h-16 border-4 border-violet-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Toaster position="top-right" />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/courses" element={<CourseCatalog />} />
            <Route path="/courses/:courseId" element={<CoursePreview />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />

            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* Admin Routes */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <DashboardLayout userRole="admin" />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="users" element={<UserManagement />} />
              <Route path="courses" element={<CourseManagement />} />
              <Route path="trainers" element={<TrainerManagement />} />
              <Route path="payments" element={<PaymentsAdmin />} />
              <Route path="notifications" element={<NotificationsAdmin />} />
              <Route path="settings" element={<SettingsAdmin />} />
            </Route>

            {/* Trainer Routes */}
            <Route
              path="/trainer"
              element={
                <ProtectedRoute allowedRoles={["trainer"]}>
                  <DashboardLayout userRole="trainer" />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/trainer/dashboard" replace />} />
              <Route path="dashboard" element={<TrainerDashboard />} />
              <Route path="courses" element={<TrainerCourses />} />
              <Route path="live-classes" element={<LiveClasses />} />
              <Route path="students" element={<StudentEngagement />} />
              <Route path="earnings" element={<EarningsDashboard />} />
            </Route>

            {/* Student Routes */}
            <Route
              path="/student"
              element={
                <ProtectedRoute allowedRoles={["student"]}>
                  <DashboardLayout userRole="student" />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/student/dashboard" replace />} />
              <Route path="dashboard" element={<StudentDashboard />} />
              <Route path="courses" element={<MyCourses />} />
              <Route path="courses/:courseId" element={<CourseDetails />} />
              <Route path="live-classes" element={<LiveClassesStudent />} />
              <Route path="community" element={<Community />} />
              <Route path="certifications" element={<Certifications />} />
              <Route path="payments" element={<PaymentsStudent />} />
            </Route>

            {/* Catch-all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App

