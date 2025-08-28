
import { ContactSection } from "@/components/contact-section";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar /> 
      <ProjectsSection />
    </main>
  )
}