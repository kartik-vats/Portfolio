

import { Navbar } from "@/components/navbar";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar /> 
      <SkillsSection />
    </main>
  )
}