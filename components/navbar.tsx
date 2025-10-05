"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { FaHome,FaFileAlt,   FaFolderOpen,FaUser,  FaPen } from "react-icons/fa";
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)



const navItems = [
  { href: "/", label: "Home", icon: <FaHome size={20} /> },
  { href: "/about", label: "About", icon: <FaPen size={20} /> },
  { href: "/projects", label: "Projects", icon: <FaFolderOpen size={20} /> },
  { href: "/contact", label: "Contact", icon: < FaUser size={20} /> },
];

  return (
    <nav className=" fixed gap-4 mb-10 top-4 w-15/20 left-1/2 transform -translate-x-1/2  bg-gray-900/90 backdrop-blur-md rounded-xl shadow-lg z-50 ">
      
      
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo / Brand */}
        <Link href="/"><div className="text-blue-800 font-extrabold text-2xl">KV</div></Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-4 text-white hover:text-blue-800 transition-colors duration-200 font-medium"
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 rounded hover:bg-gray-800 transition-colors duration-200"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-gray-900/90 backdrop-blur-md rounded-b-xl shadow-inner">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-1 text-white hover:text-purple-500 transition-colors duration-200 font-medium"
              onClick={() => setIsOpen(false)}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
