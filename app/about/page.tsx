import { AboutSection } from "@/components/about-section";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar /> 
      <AboutSection />
    </main>
  )
}