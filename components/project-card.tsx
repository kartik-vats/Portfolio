"use client";

import { ExternalLink, Github } from "lucide-react";
import { useAverageColor } from "@/hooks/useAverageColor";

function ProjectCard({ project }: { project: any }) {
  const color = useAverageColor(project.image);

const bgStyle = color
  ? {
      backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
    }
  : {
      backgroundColor: "#CBD5E1", // slate-300 fallback
    };

  return (
    <div
      className="rounded-xl shadow-sm border flex flex-col overflow-hidden max-w-sm mx-auto transition-colors"
      style={{ ...bgStyle, height: "420px" }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />

<div className="flex flex-col flex-1">
        <div className="flex justify-between items-start px-4 pt-4">
          <h3 className="text-lg font-semibold text-black">
            {project.title}
          </h3>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
            {project.year}
          </span>
        </div>

        <div className="px-4 overflow-y-auto flex-1">
          <p className="text-gray-600 text-sm mb-3">
            {project.description}
          </p>
        </div>

        <div className="flex gap-2 px-4 pb-4">
          <a
            href={project.liveLink}
            target="_blank"
            className="flex-1 bg-white text-grey-900 py-1.5 rounded-full text-xs flex items-center justify-center"
          >
            <ExternalLink className="mr-1 h-3 w-3" />
            Live
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            className="flex-1 border border-gray-300 bg-black text-white py-1.5 rounded-full text-xs flex items-center justify-center"
          >
            <Github className="mr-1 h-3 w-3" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;