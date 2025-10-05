import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from 'lucide-react'

export function ProjectsSection() {
  const projects = [
    
      {
      title: "Better Netflix ",
      year: "2025",
description: "Developed a full-stack Netflix clone with JWT authentication and admin controls. Integrated ImageKit HLS streaming, reducing load tim Scaled backend to handle 10,000+ concurrent requests.",
      technologies: ["Next.js", "RJSF", "Vercel", "JSON Schema"],
      liveLink: "https://netflix-roan-one-22.vercel.app",
      githubLink: "https://github.com/kartik-vats/Netflix",
      image:"/images/Netflix.png"
    },
    
    // {
    //   title: "Chai - Crowdfunding Social App",
    //   year: "2025",
    //   description: "Built a social crowdfunding platform with secure Google/GitHub login, Razorpay payments, and WebSocket-powered real-time chat. Features a friend system for connecting and collaborating on campaigns.",
    //   technologies: ["Next.js", "NextAuth", "Razorpay", "Vercel", "WebSockets"],
    //   liveLink: "https://chai-navy.vercel.app/",
    //   githubLink: "https://github.com/kartik-vats/Chai",
    //   image:"/images/chai_bg.jpg"
    // },
    {
      title: "Smart Allotment Portal – NIT KKR",
      year: "2025",
      description: "Developed a MERN stack portal for fair and efficient subject allotment at NIT KKR. Enabled smooth student-admin workflows with secure login and real-time updates, reaching 4000+ users in the first week.",
      technologies: ["ReactJS", "Node.js", "Express", "MongoDB", "Nodemailer"],
      liveLink: "https://nitkkropen.vercel.app/",
      githubLink: "https://github.com/kartik-vats/Open-Elective",
      image:"/images/open_elective.png"
    },
    {
      title: "Code Helper (AI Code Reviewer)",
      year: "2024",
      description: "Created a code review assistant using the Gemini API for AI-driven suggestions. Integrated real-time feedback with a responsive MERN stack interface for quick and accurate code improvements.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "Gemini API"],
      liveLink: "https://codehelper-1.onrender.com/",
      githubLink: "https://github.com/kartik-vats/codehelper",
      image:"/images/codehelper.png"
    },
    
    {
  title: "RevenueSense – Financial Forecasting Dashboard",
  year: "2025",
  description: "Built a financial forecasting dashboard with a Flask-powered ML API integrated into the MERN stack. Enhanced forecasting errors by over 30%, enhancing overall efficiency by 200%+.",
  technologies: ["React.js", "Redux", "Node.js", "Express.js", "MongoDB", "Flask", "Python (scikit-learn)"],
  liveLink: "", // add when deployed
  githubLink: "", // add repo link here
  image: "/images/revenue_bg.png"
}
    
  ]

  return (
    <section id="projects" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 animate-slide-in-top">
            Featured Projects
          </h2>
        
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border flex flex-col overflow-hidden max-w-sm mx-auto"
              style={{ height: '420px' }}
            >
              {/* Project Image */}
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />

              <div className="flex flex-col flex-1">
                {/* Title + Year */}
                <div className="flex justify-between items-start px-4 pt-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                    {project.year}
                  </span>
                </div>

                {/* Scrollable description + tags */}
                <div className="px-4 overflow-y-auto flex-1">
                  <p className="text-gray-600 text-sm leading-snug mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 5).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-[10px] bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons pinned to bottom */}
                <div className="flex gap-2 px-4 pb-4">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-900 text-white text-center py-1.5 px-3 rounded-full text-xs font-medium hover:bg-gray-800 transition-colors flex items-center justify-center"
                  >
                    <ExternalLink className="mr-1 h-3 w-3" />
                    Live
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 border border-gray-300 text-gray-700 text-center py-1.5 px-3 rounded-full text-xs font-medium hover:bg-gray-50 transition-colors flex items-center justify-center"
                  >
                    <Github className="mr-1 h-3 w-3" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
