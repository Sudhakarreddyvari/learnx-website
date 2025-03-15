"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

// Create context
const AuthContext = createContext()

// Mock user data for demonstration
const mockUsers = [
  { id: 1, name: "Admin User", email: "admin@learnx.com", password: "password", role: "admin" },
  { id: 2, name: "Trainer User", email: "trainer@learnx.com", password: "password", role: "trainer" },
  { id: 3, name: "Student User", email: "student@learnx.com", password: "password", role: "student" },
]

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    // Check for saved user in localStorage
    const savedUser = localStorage.getItem("learnx_user")
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  // Login function
  const login = async (email, password) => {
    try {
      // Simulate API call
      const user = mockUsers.find((u) => u.email === email && u.password === password)

      if (!user) {
        throw new Error("Invalid email or password")
      }

      // Remove password from user object
      const { password: _, ...userWithoutPassword } = user

      // Save user to state and localStorage
      setCurrentUser(userWithoutPassword)
      localStorage.setItem("learnx_user", JSON.stringify(userWithoutPassword))

      // Redirect based on role
      if (user.role === "admin") {
        navigate("/admin/dashboard")
      } else if (user.role === "trainer") {
        navigate("/trainer/dashboard")
      } else {
        navigate("/student/dashboard")
      }

      toast.success("Login successful!")
      return userWithoutPassword
    } catch (error) {
      toast.error(error.message || "Login failed")
      throw error
    }
  }

  // Register function
  const register = async (name, email, password, role = "student") => {
    try {
      // Check if user already exists
      if (mockUsers.some((u) => u.email === email)) {
        throw new Error("User already exists with this email")
      }

      // Create new user
      const newUser = {
        id: mockUsers.length + 1,
        name,
        email,
        password,
        role,
      }

      // Add to mock users (in a real app, this would be an API call)
      mockUsers.push(newUser)

      toast.success("Registration successful! Please log in.")
      navigate("/login")
      return true
    } catch (error) {
      toast.error(error.message || "Registration failed")
      throw error
    }
  }

  // Logout function
  const logout = () => {
    setCurrentUser(null)
    localStorage.removeItem("learnx_user")
    navigate("/login")
    toast.success("Logged out successfully")
  }

  // Password reset request
  const requestPasswordReset = async (email) => {
    try {
      // Check if user exists
      const user = mockUsers.find((u) => u.email === email)
      if (!user) {
        throw new Error("No account found with this email")
      }

      // In a real app, this would send an email with a reset link
      toast.success("Password reset link sent to your email")
      return true
    } catch (error) {
      toast.error(error.message || "Failed to send reset link")
      throw error
    }
  }

  // Reset password
  const resetPassword = async (token, newPassword) => {
    try {
      // In a real app, this would validate the token and update the password
      toast.success("Password reset successful! Please log in with your new password.")
      navigate("/login")
      return true
    } catch (error) {
      toast.error(error.message || "Password reset failed")
      throw error
    }
  }

  const value = {
    currentUser,
    login,
    register,
    logout,
    requestPasswordReset,
    resetPassword,
    isAuthenticated: !!currentUser,
    userRole: currentUser?.role,
  }

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}

