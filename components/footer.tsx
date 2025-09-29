// components/Footer.js
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiKaggle } from "react-icons/si";
export default function Footer() {
  return (
<footer className="fixed bottom-12 left-1/2 -translate-x-1/2 bg-gray-900 w-1/4 rounded-xl py-1 flex justify-between items-center shadow-lg animate-slide-up">
  {/* content */}

      <a
        href="https://www.linkedin.com/in/kartik-vats-dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 p-2 rounded-full transition transform hover:scale-110"
      >
        <FaLinkedinIn size={24} />
      </a>
      <a
        href="https://github.com/kartik-vats"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 p-2 rounded-full transition transform hover:scale-110"
      >
        <FaGithub size={24} />
      </a>
      <a
        href="https://leetcode.com/u/kartikvats66/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 p-2 rounded-full transition transform hover:scale-110"
      >
        <SiLeetcode size={24} />
      </a>
      <a
        href="https://www.kaggle.com/kartikvats55"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-gray-400 p-2 rounded-full transition transform hover:scale-110"
      >
        <span className="font-bold text-xl">K</span>
      </a>
      
    </footer>
  );
}
