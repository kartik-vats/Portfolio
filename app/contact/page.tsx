
import { ContactSection } from "@/components/contact-section";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar /> 
      <ContactSection />
    </main>
  )
}