"use client"

import { Navigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { isAuthenticated, userRole } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(userRole)) {
    // Redirect to appropriate dashboard based on role
    if (userRole === "admin") {
      return <Navigate to="/admin/dashboard" replace />
    } else if (userRole === "trainer") {
      return <Navigate to="/trainer/dashboard" replace />
    } else {
      return <Navigate to="/student/dashboard" replace />
    }
  }

  return children
}

export default ProtectedRoute

