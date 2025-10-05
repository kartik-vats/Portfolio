"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around px-20 animate-fade-in ml-30 ">
      {/* Right image */}
      <div className="flex-1 flex justify-start items-center">
        <div className="w-full max-w-sm lg:max-w-md">
          <Image
            src="/images/my-photo.jpg"
            alt="My Photo"
            width={400}
            height={200}
            className="w-100 h-180 object-contain"
          />
        </div>
      </div>

      {/* Left content */}
      <div className="flex-1 ">
        <section
          id="home"
          className="flex flex-col justify-center space"
        >
         <div className="glass ">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl  font-bold text-gray-900 leading-tight typing1">
            Hello, I'm  
          </h1>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight typing2">
            Kartik Vats
          </h1>
          {/* Paragraph with delay */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white leading-relaxed animate-slide-in-left animate-fade-in2">
            I'm a computer science student with a passion for creating
            beautiful and functional web applications using modern technologies.
          </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center items-center animate-slide-in-left">
            <a
              href="/Kartik_Resume.pdf"
              download="Kartik_Vats_Resume.pdf"
            >
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </a>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 text-white"
              asChild
            >
              <a href="/contact">Get In Touch</a>
            </Button>
          </div>
         
        </section>
      </div>
    </div>
  );
}
