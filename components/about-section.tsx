import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin, Calendar } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate computer science student with a strong foundation in full-stack development 
            and a keen interest in artificial intelligence applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-6">My Journey</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Currently pursuing my Bachelor of Technology in Computer Science at the prestigious 
              National Institute of Technology, Kurukshetra. I'm passionate about creating innovative 
              solutions that bridge the gap between technology and real-world problems.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              My experience spans across modern web technologies, AI applications, and scalable system design. 
              I enjoy working on projects that challenge me to learn new technologies and push the boundaries 
              of what's possible.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or working on innovative solutions that can make a positive impact.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border">
              <div className="flex items-center space-x-4">
                <GraduationCap className="h-10 w-10 text-gray-900" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Education</h4>
                  <p className="text-gray-600">B.Tech in Computer Science</p>
                  <p className="text-sm text-gray-500">NIT Kurukshetra • CGPA: 8.1</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border">
              <div className="flex items-center space-x-4">
                <MapPin className="h-10 w-10 text-gray-900" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">Kurukshetra, Haryana</p>
                  <p className="text-sm text-gray-500">Open to remote opportunities</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border">
              <div className="flex items-center space-x-4">
                <Calendar className="h-10 w-10 text-gray-900" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">Experience</h4>
                  <p className="text-gray-600">Developer at ISSAC, NIT Kurukshetra</p>
                  <p className="text-sm text-gray-500">June 2024 - Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
