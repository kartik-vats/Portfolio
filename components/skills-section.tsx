import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "Tailwind", "Bootstrap", "JavaScript", "React", "Next.js"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express", "Next.js", "MongoDB", "PostgreSQL", "REST APIs", "Firebase", "Serverless APIs", "Sockets"]
    },
    {
      title: "Languages",
      skills: ["JavaScript", "C++", "Java", "JavaScript", "TypeScript", "Python"]
    },
    {
      title: "Tools & Tech",
      skills: ["Git/GitHub", "Google Colab", "Jupyter Notebook"]
    },
    {
      title: "Systems & DBs",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase"]
    },
    {
      title: "Coursework",
      skills: ["System Design (HLD, LLD, SOLID)", "Networks", "OS", "DBMS", "DevOps", "Cloud", "VMs", "ML/DL"]
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Problem Solving", "Communication", "Adaptability", "Time Management"]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise across various domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
