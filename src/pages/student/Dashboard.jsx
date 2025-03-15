"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { BookOpen, Clock, Award, Video, Play, Calendar, CheckCircle, ChevronRight } from "lucide-react"

// Mock data for enrolled courses
const enrolledCourses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    instructor: "John Smith",
    progress: 65,
    nextLesson: "Building APIs with Express.js",
    image: "/placeholder.svg?height=80&width=120&text=Web+Dev",
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    instructor: "Sarah Johnson",
    progress: 42,
    nextLesson: "Data Visualization with Matplotlib",
    image: "/placeholder.svg?height=80&width=120&text=Data+Science",
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    instructor: "Michael Chen",
    progress: 78,
    nextLesson: "User Testing Methodologies",
    image: "/placeholder.svg?height=80&width=120&text=UI/UX",
  },
]

// Mock data for recommended courses
const recommendedCourses = [
  {
    id: 4,
    title: "Machine Learning Basics",
    instructor: "Emily Wilson",
    rating: 4.8,
    students: 1250,
    price: 49.99,
    image: "/placeholder.svg?height=80&width=120&text=ML",
  },
  {
    id: 5,
    title: "Advanced JavaScript Patterns",
    instructor: "Robert Brown",
    rating: 4.9,
    students: 980,
    price: 59.99,
    image: "/placeholder.svg?height=80&width=120&text=JavaScript",
  },
]

// Mock data for upcoming live classes
const upcomingClasses = [
  {
    id: 1,
    title: "React Hooks Deep Dive",
    course: "Full Stack Web Development",
    instructor: "John Smith",
    date: "Today, 3:00 PM",
    duration: "1 hour",
  },
  {
    id: 2,
    title: "Data Cleaning Techniques",
    course: "Data Science Fundamentals",
    instructor: "Sarah Johnson",
    date: "Tomorrow, 10:00 AM",
    duration: "1.5 hours",
  },
]

const StudentDashboard = () => {
  const [stats, setStats] = useState({
    coursesEnrolled: 0,
    coursesCompleted: 0,
    hoursWatched: 0,
    certificatesEarned: 0,
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call to fetch dashboard data
    const fetchData = async () => {
      try {
        // In a real app, this would be an API call
        setTimeout(() => {
          setStats({
            coursesEnrolled: 3,
            coursesCompleted: 1,
            hoursWatched: 28,
            certificatesEarned: 1,
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

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Student Dashboard</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Last updated:</span>
          <span className="text-sm">{new Date().toLocaleString()}</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Courses Enrolled */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Courses Enrolled</p>
              <h3 className="text-3xl font-bold mt-2">
                {loading ? <div className="h-8 w-24 bg-muted animate-pulse rounded"></div> : stats.coursesEnrolled}
              </h3>
              <p className="text-sm text-primary mt-2 flex items-center">
                <BookOpen size={14} className="mr-1" />
                <span>Active Learning</span>
              </p>
            </div>
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <BookOpen size={24} />
            </div>
          </div>
        </div>

        {/* Courses Completed */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Courses Completed</p>
              <h3 className="text-3xl font-bold mt-2">
                {loading ? <div className="h-8 w-24 bg-muted animate-pulse rounded"></div> : stats.coursesCompleted}
              </h3>
              <p className="text-sm text-green-500 mt-2 flex items-center">
                <CheckCircle size={14} className="mr-1" />
                <span>Well done!</span>
              </p>
            </div>
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <CheckCircle size={24} />
            </div>
          </div>
        </div>

        {/* Hours Watched */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Hours Watched</p>
              <h3 className="text-3xl font-bold mt-2">
                {loading ? <div className="h-8 w-24 bg-muted animate-pulse rounded"></div> : stats.hoursWatched}
              </h3>
              <p className="text-sm text-primary mt-2 flex items-center">
                <Clock size={14} className="mr-1" />
                <span>Keep it up!</span>
              </p>
            </div>
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <Clock size={24} />
            </div>
          </div>
        </div>

        {/* Certificates Earned */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Certificates Earned</p>
              <h3 className="text-3xl font-bold mt-2">
                {loading ? <div className="h-8 w-24 bg-muted animate-pulse rounded"></div> : stats.certificatesEarned}
              </h3>
              <p className="text-sm text-primary mt-2 flex items-center">
                <Award size={14} className="mr-1" />
                <span>Great achievement!</span>
              </p>
            </div>
            <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <Award size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Continue Learning */}
      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Continue Learning</h3>
          <Link to="/student/courses" className="text-sm text-primary hover:underline flex items-center">
            <span>View All Courses</span>
            <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
        <div className="space-y-4">
          {enrolledCourses.map((course) => (
            <div
              key={course.id}
              className="flex flex-col md:flex-row gap-4 p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors"
            >
              <img
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                className="w-full md:w-32 h-20 object-cover rounded-md"
              />
              <div className="flex-1">
                <h4 className="font-medium">{course.title}</h4>
                <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
                <div className="mt-2">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span>{course.progress}% complete</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${course.progress}%` }}></div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center md:items-end gap-2">
                <p className="text-xs text-muted-foreground">Next: {course.nextLesson}</p>
                <Link
                  to={`/student/courses/${course.id}`}
                  className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-md flex items-center gap-2 text-sm"
                >
                  <Play size={14} />
                  <span>Continue</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Live Classes and Recommended Courses */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Live Classes */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Upcoming Live Classes</h3>
            <Link to="/student/live-classes" className="text-sm text-primary hover:underline flex items-center">
              <span>View All</span>
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="space-y-4">
            {upcomingClasses.map((liveClass) => (
              <div
                key={liveClass.id}
                className="flex items-start gap-4 p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Video size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{liveClass.title}</h4>
                  <p className="text-sm text-muted-foreground">{liveClass.course}</p>
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="text-primary" />
                      <span>{liveClass.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} className="text-primary" />
                      <span>{liveClass.duration}</span>
                    </div>
                  </div>
                </div>
                <button className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-md text-sm">Join</button>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Courses */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Recommended for You</h3>
            <Link to="/courses" className="text-sm text-primary hover:underline flex items-center">
              <span>Browse Courses</span>
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="space-y-4">
            {recommendedCourses.map((course) => (
              <div
                key={course.id}
                className="flex gap-4 p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h4 className="font-medium">{course.title}</h4>
                  <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm ml-1">{course.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">({course.students} students)</span>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-medium">${course.price}</span>
                    <button className="px-3 py-1 bg-primary hover:bg-primary/90 text-white rounded-md text-xs">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard

