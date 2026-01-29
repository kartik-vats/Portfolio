"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const  handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    alert(data.message || data.error);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact " className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-in-top">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-300 mb-6">
            Get In Touch
          </h2>
        
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-slide-in-left glass">
            <h3 className="text-3xl font-semibold text-slate-300 mb-6">
              Let's Connect
            </h3>
            <p className="text-lg text-white mb-8 leading-relaxed">
              Feel free to reach out if you have any questions, want to collaborate on a project, 
              or just want to say hello. I'll do my best to get back to you!
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <p className="font-semibold text-slate-300">Email</p>
                  <p className="text-white">ks25152005@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                
         
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-gray-900" />
                </div>
                <div>
                  <p className="font-semibold text-slate-300">Location</p>
                  <p className="text-white">Kurukshetra, Haryana, India</p>
                </div>
              
             
              </div>
               <div className="flex items-center space">
  <a
    href="https://www.linkedin.com/in/kartik-vats-dev/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-y-2 space-x-3"
  >
    <div className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition">
      {/* LinkedIn Icon */}
      <svg
        className="h-6 w-6 text-gray-900"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/>
      </svg>
    </div>
    <p className="font-semibold text-slate-300">LinkedIn</p>
  </a>
</div>
               <div className="flex items-center space">
  <a
    
    href="https://github.com/kartik-vats"

    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-y-2 space-x-3"
  >
    <div className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition">
      {/* LinkedIn Icon */}
      <svg
        className="h-6 w-6 text-gray-900"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    </div>
    <p className="font-semibold text-slate-300">Github</p>
  </a>
</div>
            </div>
          </div>

          <div className="bg-slate-300 p-4 rounded-2xl animate-fade-in">
            <h4 className="text-center text-xl font-semibold text-gray-900 mb-6">Message Me</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 rounded-xl border-gray-500"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 rounded-xl border-gray-500"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="subject" className="text-gray-700 font-medium">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-2 rounded-xl border-gray-500"
                  required
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 rounded-xl border-gray-500"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-xl py-3">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
