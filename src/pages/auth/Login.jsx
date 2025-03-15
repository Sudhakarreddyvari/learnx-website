"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"
import { Eye, EyeOff, LogIn } from "lucide-react"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      await login(email, password)
      // Navigation is handled in the login function
    } catch (error) {
      setError(error.message || "Failed to log in")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <div className="flex items-center justify-center gap-2">
              <div className="h-10 w-10 rounded-md bg-primary flex items-center justify-center">
                <span className="font-bold text-white text-lg">LX</span>
              </div>
              <span className="text-2xl font-bold gradient-text">LearnX LMS</span>
            </div>
          </Link>
        </div>

        {/* Card */}
        <div className="bg-card border border-border rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold mb-6 text-center">Log In</h1>

          {error && (
            <div className="mb-4 p-3 bg-destructive/10 border border-destructive/20 rounded-md text-destructive text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-input rounded-md bg-background"
                placeholder="your@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-input rounded-md bg-background pr-10"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" type="checkbox" className="h-4 w-4 rounded border-input bg-background" />
                <label htmlFor="remember-me" className="ml-2 block text-sm">
                  Remember me
                </label>
              </div>
              <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 px-4 bg-primary hover:bg-primary/90 text-white rounded-md flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <LogIn size={18} />
                  <span>Log In</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link to="/register" className="text-primary hover:underline">
                Sign up
              </Link>
            </p>
          </div>

          {/* Demo accounts */}
          <div className="mt-8 border-t border-border pt-6">
            <p className="text-sm text-center mb-4">Demo Accounts</p>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <button
                onClick={() => {
                  setEmail("admin@learnx.com")
                  setPassword("password")
                }}
                className="p-2 border border-border rounded-md hover:bg-secondary"
              >
                Admin
              </button>
              <button
                onClick={() => {
                  setEmail("trainer@learnx.com")
                  setPassword("password")
                }}
                className="p-2 border border-border rounded-md hover:bg-secondary"
              >
                Trainer
              </button>
              <button
                onClick={() => {
                  setEmail("student@learnx.com")
                  setPassword("password")
                }}
                className="p-2 border border-border rounded-md hover:bg-secondary"
              >
                Student
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

