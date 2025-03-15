"use client"
import { Link } from "react-router-dom"
import { scrollToTop } from "../utils/scrollUtils"

const RelatedCourses = ({ courses, currentCourseSlug }) => {
  // Filter out the current course
  const relatedCourses = courses.filter((course) => course.slug !== currentCourseSlug).slice(0, 3)

  if (relatedCourses.length === 0) return null

  return (
    <section className="py-12 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Related Courses</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedCourses.map((course) => (
            <div key={course.slug} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
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
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedCourses

