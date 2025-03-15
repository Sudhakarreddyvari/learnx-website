"use client"
import { Link } from "react-router-dom"
import { Star, Users, Clock } from "lucide-react"
import { scrollToTop } from "../utils/scrollUtils"

const CourseCard = ({ course }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={course.image || "/placeholder.svg?height=200&width=400"}
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-violet-600 text-white text-xs font-bold px-2 py-1 rounded">
          {course.level}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{course.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="text-gray-300 text-sm">{course.rating}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 text-gray-400 mr-1" />
            <span className="text-gray-300 text-sm">{course.students.toLocaleString()} students</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 text-gray-400 mr-1" />
            <span className="text-gray-300 text-sm">{course.duration}</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-white font-bold">{course.price}</span>
          <Link
            to={`/courses/${course.slug}`}
            onClick={scrollToTop}
            className="bg-gradient-to-r from-violet-600 to-pink-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-violet-700 hover:to-pink-700 transition-all duration-300"
          >
            View Course
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CourseCard

