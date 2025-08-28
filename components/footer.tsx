// components/Footer.js
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiKaggle } from "react-icons/si";
export default function Footer() {
  return (
        <footer className="bg-gray-900 w-1/4 mx-auto rounded-xl py-1 mt-8 flex justify-between items-center">
      <a
        href="https://www.linkedin.com/in/kartik-vats-6625a12a7/"
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
