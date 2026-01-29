import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, MapPin, Calendar } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center ">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-300 mb-6 animate-slide-in-left">
            About Me
          </h2>
        
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg glass text-white-600 mb-6 leading-relaxed animate-slide-in-left">
              Currently i am pursuing my B.tech in CS at the prestigious institute
              NIT Kurukshetra. I'm passionate about creating innovative 
              solutions that bridge the gap between technology and real-world problems.
<br></br><br></br>
              My experience lies across modern web technologies, AI applications, and scalable system design. 
              I enjoy working on projects that challenge me to learn new technologies and push the boundaries 
              of what's possible.
<br></br><br></br>
              When I'm not coding, you can find me exploring activites like writing, theatre, or travelling. I'm always eager to connect with peoples, whether it's collaborating on exciting
              projects, or exploring the dimensions of real world, with current possible scenierio, i try to make best out of it</p>
          </div>

          <div className="space-y-6 glass p-6 rounded-2xl shadow-lg animate-slide-in-right">
            <div className=" p-8 rounded-2xl shadow-sm border animate-slide-in-right ">
              <div className="flex items-center space-x-4">
                <GraduationCap className="h-10 w-10 text-slate-300" />
                <div>
                  <h4 className="text-xl font-semibold text-slate-300">Education</h4>
                  <p className="text-gray-600">B.Tech in Computer Science</p>
                  <p className="text-sm text-gray-500">NIT Kurukshetra • CGPA: 8.1</p>
                </div>
              </div>
            </div>

            <div className=" p-8 rounded-2xl shadow-sm border animate-slide-in-right">
              <div className="flex items-center space-x-4">
                <MapPin className="h-10 w-10 text-slate-300" />
                <div>
                  <h4 className="text-xl font-semibold text-slate-300">Location</h4>
                  <p className="text-gray-600">Kurukshetra, Haryana</p>
                  <p className="text-sm text-gray-500">Open to remote opportunities</p>
                </div>
              </div>
            </div>

            <div className=" p-8 rounded-2xl shadow-sm border animate-slide-in-right">
              <div className="flex items-center space-x-4">
                <Calendar className="h-10 w-10 text-slate-300" />
                <div>
                  <h4 className="text-xl font-semibold text-slate-300">Experience</h4>
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
