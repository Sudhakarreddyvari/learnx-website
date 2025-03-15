"use client"

import { useState, useEffect } from "react"
import { Users, BookOpen, DollarSign, TrendingUp, BarChart, PieChart, Calendar, Clock } from "lucide-react"

// Mock data for charts
const revenueData = [
  { month: "Jan", amount: 12000 },
  { month: "Feb", amount: 15000 },
  { month: "Mar", amount: 18000 },
  { month: "Apr", amount: 16000 },
  { month: "May", amount: 21000 },
  { month: "Jun", amount: 24000 },
  { month: "Jul", amount: 22000 },
  { month: "Aug", amount: 25000 },
  { month: "Sep", amount: 28000 },
  { month: "Oct", amount: 30000 },
  { month: "Nov", amount: 32000 },
  { month: "Dec", amount: 35000 },
]

const enrollmentData = [
  { course: "AI & Machine Learning", students: 450 },
  { course: "Data Science", students: 380 },
  { course: "Full Stack Development", students: 520 },
  { course: "Cybersecurity", students: 290 },
  { course: "Cloud Computing", students: 310 },
]

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalCourses: 0,
    totalRevenue: 0,
    activeStudents: 0,
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call to fetch dashboard data
    const fetchData = async () => {
      try {
        // In a real app, this would be an API call
        setTimeout(() => {
          setStats({
            totalUsers: 2450,
            totalCourses: 48,
            totalRevenue: 245000,
            activeStudents: 1850,
          })
          setLoading(false)
        }, 1000)
      } catch (error) {
        console.error("Error fetching dashboard data:", error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Recent activities
  const recentActivities = [
    { id: 1, action: "New user registered", user: "John Doe", time: "5 minutes ago" },
    { id: 2, action: "Course published", course: "Advanced React Patterns", time: "2 hours ago" },
    { id: 3, action: "Payment received", amount: "$199", user: "Sarah Johnson", time: "3 hours ago" },
    { id: 4, action: "New trainer approved", user: "Michael Chen", time: "1 day ago" },
    { id: 5, action: "Course updated", course: "Data Science Fundamentals", time: "1 day ago" },
  ]

  // Upcoming events
  const upcomingEvents = [
    { id: 1, title: "New Course Launch: Blockchain Fundamentals", date: "Tomorrow, 10:00 AM" },
    { id: 2, title: "Webinar: Future of AI in Education", date: "Oct 15, 2:00 PM" },
    { id: 3, title: "Trainer Onboarding Session", date: "Oct 18, 11:00 AM" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Last updated:</span>
          <span className="text-sm">{new Date().toLocaleString()}</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Users */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Users</p>
              <h3 className="text-3xl font-bold mt-2">
                {loading ? (
                  <div className="h-8 w-24 bg-muted animate-pulse rounded"></div>
                ) : (
                  stats.totalUsers.toLocaleString()
                )}
              </h3>
              <p className="text-sm text-green-500 mt-2 flex items-center">
                <TrendingUp size={14} className="mr-1" />
                <span>+12% this month</span>
              </p>
            </div>
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <Users size={24} />
            </div>
          </div>
        </div>

        {/* Total Courses */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Courses</p>
              <h3 className="text-3xl font-bold mt-2">
                {loading ? (
                  <div className="h-8 w-24 bg-muted animate-pulse rounded"></div>
                ) : (
                  stats.totalCourses.toLocaleString()
                )}
              </h3>
              <p className="text-sm text-green-500 mt-2 flex items-center">
                <TrendingUp size={14} className="mr-1" />
                <span>+5 new this month</span>
              </p>
            </div>
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <BookOpen size={24} />
            </div>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Revenue</p>
              <h3 className="text-3xl font-bold mt-2">
                {loading ? (
                  <div className="h-8 w-24 bg-muted animate-pulse rounded"></div>
                ) : (
                  `$${stats.totalRevenue.toLocaleString()}`
                )}
              </h3>
              <p className="text-sm text-green-500 mt-2 flex items-center">
                <TrendingUp size={14} className="mr-1" />
                <span>+18% this month</span>
              </p>
            </div>
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <DollarSign size={24} />
            </div>
          </div>
        </div>

        {/* Active Students */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Active Students</p>
              <h3 className="text-3xl font-bold mt-2">
                {loading ? (
                  <div className="h-8 w-24 bg-muted animate-pulse rounded"></div>
                ) : (
                  stats.activeStudents.toLocaleString()
                )}
              </h3>
              <p className="text-sm text-green-500 mt-2 flex items-center">
                <TrendingUp size={14} className="mr-1" />
                <span>+8% this month</span>
              </p>
            </div>
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <Users size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Revenue Overview</h3>
            <div className="flex items-center gap-2">
              <BarChart size={16} className="text-primary" />
              <span className="text-sm text-muted-foreground">Monthly</span>
            </div>
          </div>
          <div className="h-64 w-full">
            {/* In a real app, this would be a chart component */}
            <div className="h-full w-full flex items-end justify-between gap-2">
              {revenueData.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className="w-8 bg-primary/80 hover:bg-primary transition-colors rounded-t"
                    style={{ height: `${(item.amount / 35000) * 100}%` }}
                  ></div>
                  <span className="text-xs mt-2">{item.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enrollment Chart */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Course Enrollments</h3>
            <div className="flex items-center gap-2">
              <PieChart size={16} className="text-primary" />
              <span className="text-sm text-muted-foreground">Top Courses</span>
            </div>
          </div>
          <div className="h-64 w-full">
            {/* In a real app, this would be a chart component */}
            <div className="h-full w-full flex flex-col justify-center gap-4">
              {enrollmentData.map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{item.course}</span>
                    <span className="text-sm font-medium">{item.students} students</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${(item.students / 520) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activities and Upcoming Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Recent Activities</h3>
            <button className="text-sm text-primary hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0"
              >
                <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Clock size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium">
                    {activity.action}
                    {activity.user && <span className="font-normal"> by {activity.user}</span>}
                    {activity.course && <span className="font-normal">: {activity.course}</span>}
                    {activity.amount && <span className="font-normal">: {activity.amount}</span>}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Upcoming Events</h3>
            <button className="text-sm text-primary hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0"
              >
                <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Calendar size={16} />
                </div>
                <div>
                  <p className="text-sm font-medium">{event.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard

