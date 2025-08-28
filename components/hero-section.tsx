import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around px-20 ">
      
      {/* Left content */}
      <div className="flex-1">
        <section id="home" className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Hello, I'm <br /> Kartik Vats
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
            I'm a computer science student with a passion for creating beautiful and functional web applications using modern technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a href="/resume.pdf" download="Kartik_Vats_Resume.pdf">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </a>
            <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
              <a href="/contact">Get In Touch</a>
            </Button>
          </div>
        </section>
      </div>

      {/* Right image */}
      <div className="flex-1 flex justify-end items-center">
        <div className="w-full max-w-sm lg:max-w-md">
          <Image
            src="/images/my-photo.png"
            alt="My Photo"
            width={500}
            height={200}
            className="w-80 h-160 object-contain"
          />
        </div>
      </div>

    </div>
  );
}
