"use client"

import { useState, useEffect } from "react"
import { BookOpen, Users, DollarSign, Video, TrendingUp, BarChart, Clock, Calendar } from "lucide-react"

// Mock data for charts
const revenueData = [
  { month: "Jan", amount: 1200 },
  { month: "Feb", amount: 1500 },
  { month: "Mar", amount: 1800 },
  { month: "Apr", amount: 1600 },
  { month: "May", amount: 2100 },
  { month: "Jun", amount: 2400 },
  { month: "Jul", amount: 2200 },
  { month: "Aug", amount: 2500 },
  { month: "Sep", amount: 2800 },
  { month: "Oct", amount: 3000 },
  { month: "Nov", amount: 3200 },
  { month: "Dec", amount: 3500 },
]

const TrainerDashboard = () => {
  const [stats, setStats] = useState({
    totalCourses: 0,
    totalStudents: 0,
    totalEarnings: 0,
    upcomingClasses: 0,
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call to fetch dashboard data
    const fetchData = async () => {
      try {
        // In a real app, this would be an API call
        setTimeout(() => {
          setStats({
            totalCourses: 8,
            totalStudents: 450,
            totalEarnings: 24500,
            upcomingClasses: 5,
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

  // Recent student activities
  const recentActivities = [
    { id: 1, action: "New enrollment", course: "Advanced React Patterns", student: "John Doe", time: "5 minutes ago" },
    {
      id: 2,
      action: "Completed course",
      course: "JavaScript Fundamentals",
      student: "Sarah Johnson",
      time: "2 hours ago",
    },
    {
      id: 3,
      action: "Submitted assignment",
      course: "Data Science Basics",
      student: "Michael Chen",
      time: "3 hours ago",
    },
    {
      id: 4,
      action: "Asked a question",
      course: "Advanced React Patterns",
      student: "Emily Wilson",
      time: "1 day ago",
    },
    { id: 5, action: "Left a review", course: "JavaScript Fundamentals", student: "Robert Brown", time: "1 day ago" },
  ]

  // Upcoming classes
  const upcomingClasses = [
    { id: 1, title: "React Hooks Deep Dive", date: "Today, 3:00 PM", students: 28 },
    { id: 2, title: "Building APIs with Node.js", date: "Tomorrow, 10:00 AM", students: 35 },
    { id: 3, title: "Data Visualization Techniques", date: "Oct 15, 2:00 PM", students: 22 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Trainer Dashboard</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Last updated:</span>
          <span className="text-sm">{new Date().toLocaleString()}</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Courses */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">My Courses</p>
              <h3 className="text-3xl font-bold mt-2">
                {loading ? (
                  <div className="h-8 w-24 bg-muted animate-pulse rounded"></div>
                ) : (
                  stats.totalCourses.toLocaleString()
                )}
              </h3>
              <p className="text-sm text-green-500 mt-2 flex items-center">
                <TrendingUp size={14} className="mr-1" />
                <span>+2 this month</span>
              </p>
            </div>
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <BookOpen size={24} />
            </div>
          </div>
        </div>

        {/* Total Students */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Students</p>
              <h3 className="text-3xl font-bold mt-2">
                {loading ? (
                  <div className="h-8 w-24 bg-muted animate-pulse rounded"></div>
                ) : (
                  stats.totalStudents.toLocaleString()
                )}
              </h3>
              <p className="text-sm text-green-500 mt-2 flex items-center">
                <TrendingUp size={14} className="mr-1" />
                <span>+45 this month</span>
              </p>
            </div>
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <Users size={24} />
            </div>
          </div>
        </div>

        {/* Total Earnings */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Earnings</p>
              <h3 className="text-3xl font-bold mt-2">
                {loading ? (
                  <div className="h-8 w-24 bg-muted animate-pulse rounded"></div>
                ) : (
                  `$${stats.totalEarnings.toLocaleString()}`
                )}
              </h3>
              <p className="text-sm text-green-500 mt-2 flex items-center">
                <TrendingUp size={14} className="mr-1" />
                <span>+$2,500 this month</span>
              </p>
            </div>
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <DollarSign size={24} />
            </div>
          </div>
        </div>

        {/* Upcoming Classes */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Upcoming Classes</p>
              <h3 className="text-3xl font-bold mt-2">
                {loading ? (
                  <div className="h-8 w-24 bg-muted animate-pulse rounded"></div>
                ) : (
                  stats.upcomingClasses.toLocaleString()
                )}
              </h3>
              <p className="text-sm text-primary mt-2 flex items-center">
                <Calendar size={14} className="mr-1" />
                <span>Next: Today, 3:00 PM</span>
              </p>
            </div>
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <Video size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Earnings Chart */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Earnings Overview</h3>
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
                  style={{ height: `${(item.amount / 3500) * 100}%` }}
                ></div>
                <span className="text-xs mt-2">{item.month}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activities and Upcoming Classes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Recent Student Activities</h3>
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
                    {activity.student} {activity.action}
                    <span className="font-normal"> in {activity.course}</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Classes */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Upcoming Live Classes</h3>
            <button className="text-sm text-primary hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {upcomingClasses.map((event) => (
              <div
                key={event.id}
                className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0"
              >
                <div className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Video size={16} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{event.title}</p>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {event.students} students
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <button className="w-full py-2 px-4 bg-primary hover:bg-primary/90 text-white rounded-md flex items-center justify-center gap-2">
              <Video size={16} />
              <span>Schedule New Class</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainerDashboard

