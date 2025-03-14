"use client"

import { useState, useEffect } from "react"
import { Users, Award, BookOpen, Briefcase, Star, CheckCircle, Globe } from "lucide-react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const AboutPage = ({ setIsFormOpen }) => {
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    // Set page title and meta tags for SEO
    document.title = "About LearnX | Premier Software Training Institute"

    const handleScroll = () => {
      // Check for elements to animate on scroll
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        const rect = el.getBoundingClientRect()
        const isInView = rect.top <= window.innerHeight * 0.8

        if (isInView) {
          setIsVisible((prev) => ({ ...prev, [el.id]: true }))
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* Animated background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/10 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-900/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-grid-lines opacity-5"></div>
      </div>

      <Header setIsFormOpen={setIsFormOpen} hideHeader={false} />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-900/20 via-gray-950 to-gray-950"></div>

          {/* Animated circuit lines */}
          <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>

          {/* Glowing lines */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent glow-effect-line"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500 to-transparent glow-effect-line"></div>

          <div className="container relative mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-violet-900/30 border border-violet-500/30 text-sm mb-6">
                <Globe size={14} className="mr-2 text-violet-400" />
                <span>Transforming Tech Education Since 2015</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-rose-500">
                  LearnX
                </span>
              </h1>
              <p className="text-xl text-gray-300">
                We're on a mission to democratize technology education and empower the next generation of tech
                professionals.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll" id="our-story-image">
                <div
                  className={`transition-all duration-1000 delay-300 transform ${isVisible["our-story-image"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                  <div className="relative bg-gray-900/60 backdrop-blur-md border border-violet-500/30 rounded-2xl p-8">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-4">Our Team</h3>
                      <p className="text-gray-300 mb-6">
                        Founded in 2015, our dedicated team of educators and industry professionals has been
                        transforming tech education for over 8 years.
                      </p>
                      <div className="flex justify-center gap-4">
                        <div className="px-4 py-2 bg-violet-600/30 rounded-lg text-sm">Passionate</div>
                        <div className="px-4 py-2 bg-violet-600/30 rounded-lg text-sm">Experienced</div>
                        <div className="px-4 py-2 bg-violet-600/30 rounded-lg text-sm">Innovative</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6 animate-on-scroll" id="our-story-text">
                <div
                  className={`transition-all duration-1000 delay-500 transform ${isVisible["our-story-text"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                  <h2 className="text-3xl font-bold mb-6">
                    Our{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-rose-500">
                      Story
                    </span>
                  </h2>
                  <p className="text-gray-300 mb-4">
                    Founded in 2015, LearnX began with a simple vision: to bridge the gap between traditional education
                    and the rapidly evolving tech industry. Our founders, a group of industry veterans and passionate
                    educators, recognized that conventional learning methods weren't keeping pace with technological
                    advancements.
                  </p>
                  <p className="text-gray-300 mb-4">
                    What started as a small bootcamp with just 20 students has grown into a global education platform
                    that has transformed the careers of over 50,000 professionals across 30+ countries. Our commitment
                    to practical, industry-relevant training has made us a trusted partner for both aspiring tech
                    professionals and companies looking to upskill their workforce.
                  </p>
                  <p className="text-gray-300">
                    Today, LearnX stands at the forefront of tech education, continuously evolving our curriculum to
                    reflect the latest industry trends and technologies. Our success is measured not by the number of
                    courses we offer, but by the success stories of our graduates who are making significant
                    contributions to the tech industry worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section className="py-20 bg-gray-900/50 relative">
          <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              <div
                className="backdrop-blur-md border border-violet-500/20 rounded-xl p-8 bg-gray-900/60 animate-on-scroll"
                id="mission"
              >
                <div
                  className={`transition-all duration-1000 delay-300 transform ${isVisible["mission"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                  <div className="w-16 h-16 rounded-lg bg-violet-900/30 flex items-center justify-center mb-6">
                    <Star className="text-violet-400" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-gray-300 mb-4">
                    To democratize technology education by providing accessible, high-quality, and industry-relevant
                    training that empowers individuals to build successful careers in the digital economy.
                  </p>
                  <p className="text-gray-300">
                    We believe that everyone, regardless of their background or prior experience, should have the
                    opportunity to participate in the digital revolution. Our mission drives us to continuously innovate
                    our teaching methodologies, curriculum, and support systems to ensure our students achieve their
                    career goals.
                  </p>
                </div>
              </div>

              <div
                className="backdrop-blur-md border border-violet-500/20 rounded-xl p-8 bg-gray-900/60 animate-on-scroll"
                id="vision"
              >
                <div
                  className={`transition-all duration-1000 delay-500 transform ${isVisible["vision"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                  <div className="w-16 h-16 rounded-lg bg-rose-900/30 flex items-center justify-center mb-6">
                    <Globe className="text-rose-400" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-gray-300 mb-4">
                    To be the global leader in technology education, recognized for our innovative teaching methods,
                    cutting-edge curriculum, and the exceptional success of our graduates in the tech industry.
                  </p>
                  <p className="text-gray-300">
                    We envision a future where LearnX is synonymous with excellence in tech education, where our
                    learning platform serves as the gold standard for skills development, and where our global community
                    of alumni leads technological innovation across industries and geographies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll" id="values-heading">
              <div
                className={`transition-all duration-1000 delay-300 transform ${isVisible["values-heading"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <h2 className="text-3xl font-bold mb-6">
                  Our{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-rose-500">
                    Values
                  </span>
                </h2>
                <p className="text-gray-300">
                  At LearnX, our values guide everything we do. They shape our curriculum, influence our teaching
                  methods, and define our interactions with students, partners, and the broader tech community.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 animate-on-scroll" id="values-cards">
              {[
                {
                  icon: <CheckCircle className="text-violet-400" size={28} />,
                  title: "Excellence",
                  description:
                    "We are committed to excellence in everything we do, from curriculum development to student support. We continuously strive to exceed expectations and set new standards in tech education.",
                  color: "from-violet-600/20 to-violet-800/20",
                  border: "border-violet-500/30",
                  delay: "delay-300",
                },
                {
                  icon: <Users className="text-rose-400" size={28} />,
                  title: "Inclusivity",
                  description:
                    "We believe that diversity drives innovation. We are committed to creating an inclusive learning environment where everyone feels welcome, respected, and empowered to achieve their full potential.",
                  color: "from-rose-600/20 to-rose-800/20",
                  border: "border-rose-500/30",
                  delay: "delay-500",
                },
                {
                  icon: <BookOpen className="text-violet-400" size={28} />,
                  title: "Innovation",
                  description:
                    "We embrace change and continuously innovate our teaching methods, tools, and curriculum to stay ahead of industry trends and provide our students with the most relevant skills and knowledge.",
                  color: "from-violet-600/20 to-violet-800/20",
                  border: "border-violet-500/30",
                  delay: "delay-700",
                },
                {
                  icon: <Award className="text-rose-400" size={28} />,
                  title: "Integrity",
                  description:
                    "We operate with the highest level of integrity in all our interactions. We are transparent about our offerings, honest in our communications, and ethical in our business practices.",
                  color: "from-rose-600/20 to-rose-800/20",
                  border: "border-rose-500/30",
                  delay: "delay-300",
                },
                {
                  icon: <Briefcase className="text-violet-400" size={28} />,
                  title: "Impact",
                  description:
                    "We measure our success by the positive impact we have on our students' careers and lives. We are committed to creating meaningful, lasting change through education.",
                  color: "from-violet-600/20 to-violet-800/20",
                  border: "border-violet-500/30",
                  delay: "delay-500",
                },
                {
                  icon: <Star className="text-rose-400" size={28} />,
                  title: "Community",
                  description:
                    "We foster a strong sense of community among our students, alumni, instructors, and partners. We believe that learning is enhanced through collaboration, networking, and shared experiences.",
                  color: "from-rose-600/20 to-rose-800/20",
                  border: "border-rose-500/30",
                  delay: "delay-700",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`backdrop-blur-md border rounded-xl overflow-hidden group relative transition-all duration-1000 ${item.delay} transform ${isVisible["values-cards"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                  {/* Background gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                  ></div>

                  {/* Border */}
                  <div className={`absolute inset-0 border ${item.border} rounded-xl`}></div>

                  {/* Hexagon pattern */}
                  <div className="absolute inset-0 bg-hexagon-pattern opacity-5 group-hover:opacity-10 transition-opacity"></div>

                  {/* Content */}
                  <div className="relative p-8 z-10">
                    <div className="w-16 h-16 rounded-lg bg-gray-800/80 flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-violet-500/50 rounded-tl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-violet-500/50 rounded-br-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 bg-gray-900/50 relative">
          <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll" id="team-heading">
              <div
                className={`transition-all duration-1000 delay-300 transform ${isVisible["team-heading"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <h2 className="text-3xl font-bold mb-6">
                  Our{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-rose-500">
                    Leadership Team
                  </span>
                </h2>
                <p className="text-gray-300">
                  Meet the passionate individuals who drive our vision and mission. Our leadership team brings together
                  decades of experience in technology, education, and business.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 animate-on-scroll" id="team-cards">
              {[
                {
                  name: "Dr. Sarah Johnson",
                  role: "Founder & CEO",
                  image: "https://randomuser.me/api/portraits/women/23.jpg",
                  bio: "Former Google AI researcher with a Ph.D. in Computer Science from Stanford. Sarah founded LearnX with a vision to make cutting-edge tech education accessible to everyone.",
                  delay: "delay-300",
                },
                {
                  name: "Michael Chen",
                  role: "Chief Technology Officer",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                  bio: "With 15+ years of experience at Microsoft and Amazon, Michael leads our technology strategy and ensures our platform delivers an exceptional learning experience.",
                  delay: "delay-500",
                },
                {
                  name: "Priya Patel",
                  role: "Chief Academic Officer",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                  bio: "Former Dean of Computer Science at MIT, Priya oversees our curriculum development and ensures our courses meet the highest academic standards while remaining industry-relevant.",
                  delay: "delay-700",
                },
                {
                  name: "James Wilson",
                  role: "Chief Operating Officer",
                  image: "https://randomuser.me/api/portraits/men/52.jpg",
                  bio: "With a background in scaling educational startups, James ensures that our operations run smoothly and efficiently as we continue to grow globally.",
                  delay: "delay-300",
                },
                {
                  name: "Elena Rodriguez",
                  role: "VP of Student Success",
                  image: "https://randomuser.me/api/portraits/women/63.jpg",
                  bio: "Passionate about education and student outcomes, Elena leads our student support initiatives and career services to ensure every learner achieves their goals.",
                  delay: "delay-500",
                },
                {
                  name: "David Kim",
                  role: "VP of Industry Partnerships",
                  image: "https://randomuser.me/api/portraits/men/76.jpg",
                  bio: "David builds and maintains our relationships with industry partners, ensuring our curriculum aligns with employer needs and creating placement opportunities for our graduates.",
                  delay: "delay-700",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className={`backdrop-blur-md border border-violet-500/20 rounded-xl overflow-hidden group relative transition-all duration-1000 ${member.delay} transform ${isVisible["team-cards"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                  <div className="relative p-6">
                    <div className="w-24 h-24 rounded-full bg-violet-600/30 border-2 border-violet-500/30 mb-6 mx-auto flex items-center justify-center">
                      <span className="text-xl font-bold">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-1">{member.name}</h3>
                    <p className="text-violet-400 text-center mb-4">{member.role}</p>
                    <p className="text-gray-400 text-center">{member.bio}</p>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-violet-500/50 rounded-tl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-violet-500/50 rounded-br-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-900/30 to-rose-900/30"></div>
          <div className="absolute inset-0 bg-gray-950 opacity-80"></div>
          <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>

          <div className="container relative mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center animate-on-scroll" id="cta-content">
              <div
                className={`transition-all duration-1000 delay-300 transform ${isVisible["cta-content"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Ready to Join the{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-rose-500 relative">
                    LearnX
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-violet-500 to-rose-500 opacity-50"></span>
                  </span>{" "}
                  Community?
                </h2>
                <p className="text-xl text-gray-300 mb-10">
                  Discover our cutting-edge courses and take the first step towards your future in tech.
                </p>
              </div>

              <div
                className={`flex flex-col sm:flex-row gap-5 justify-center transition-all duration-1000 delay-500 transform ${isVisible["cta-content"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="px-10 py-5 text-base font-medium text-white rounded-md bg-gradient-to-r from-violet-600 to-rose-500 hover:from-violet-700 hover:to-rose-600 transition-colors relative group overflow-hidden"
                >
                  <span className="relative z-10">Explore Courses</span>
                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-white/10 transition-transform duration-300"></div>
                  <div className="absolute inset-0 glow-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="px-10 py-5 text-base font-medium text-white rounded-md border border-violet-500/50 hover:border-violet-500 hover:bg-violet-700/20 transition-all relative group overflow-hidden"
                >
                  <span className="relative z-10">Contact Us</span>
                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-gradient-to-r from-violet-800/20 to-violet-600/20 transition-transform duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer setIsFormOpen={setIsFormOpen} />
    </div>
  )
}

export default AboutPage

